import { NextResponse } from 'next/server';
import OpenAI from 'openai';

const openai = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY,
});

const SYSTEM_PROMPT = `You are an AI assistant for Global Hiring, a company that provides offshore accounting services and staffing solutions. Here's key information about the company:

# Global Hiring Knowledge Base

Welcome to the Global Hiring Knowledge Base. We are a Vancouver-based company dedicated to revolutionizing how businesses approach staffing and accounting. This guide provides essential information for both companies looking to hire offshore talent and individuals seeking remote roles with leading North American companies.

---

## For Companies: Hire Top Offshore Talent

### Why Choose Global Hiring?

- **Zero-risk hiring**
- **No upfront costs**
- **We handle payroll and HR processes**
- **Complimentary replacements within 60–90 days**
- **Ongoing coaching for hired talent**

### Cost Savings

- Save up to **70%** on staffing
- Save up to **50%** on accounting services

### Our Process

1. **Consultation**: Understand your business, role requirements, and team needs.
2. **Talent Match**: We provide pre-vetted candidates who have passed:
   - Competency and communication tests
   - English proficiency evaluations
   - Internet speed assessments
   - Multiple interview rounds
   - Reference checks
3. **Onboarding**: We manage compliance, timesheets, payments, and HR tasks.
4. **Support & Coaching**: Your hire receives dedicated coaching for the first 60–90 days.

### Our Services

- **Bookkeeping & Accounting**
- **Payroll and HR Support**
- **Controller and CFO Services**
- **Financial Analysis & Dashboards**
- **Budgeting and Forecasting**
- **Internal Controls**
- **Task Automation**

### Accounting Plans

| Plan | Services Included | Price |
|------|--------------------|-------|
| Plan A | Monthly Accounting, Payroll & Filings, Sales Tax Filings, Financials | $249/month |
| Plan B | Plan A + Metrics, Dashboard, Quarterly Analysis | $399/month |
| Annual Bookkeeping | For solo creators/self-employed | $999/year |

### Offshore Staffing Roles and Monthly Averages

| Role                 | Monthly Avg. |
|----------------------|--------------|
| Admin Assistant      | $1,500       |
| Executive Assistant  | $1,500       |
| Accounting Assistant | $1,800       |
| Operation Support    | $1,500       |
| Marketing Support    | $1,500       |
| Sales Support        | $1,500       |
| Customer Support     | $1,500       |
| HR Assistant         | $1,500       |

---

## For Job Seekers: Work Remotely with Global Hiring

### Why Work with Us?

- **Free to apply**: No fees for our services
- **Remote flexibility**: Work from home with schedule alignment to client timezone
- **Career coaching**: Continuous growth through training and mentorship
- **Resume support**: Help with optimizing CVs and building portfolios
- **Remote certification guidance**: Support in remote work readiness

### Roles Available

- Part-time and full-time opportunities in:
  - Accounting
  - Administration
  - Marketing
  - Sales
  - Customer Support
  - HR Assistance

### Requirements

- Growth mindset and willingness to learn
- Good communication skills
- Basic equipment: Computer and internet connection
- Private space for calls and focused work

### FAQs for Job Seekers

- **Do I need to pay for your service?**  
  No. All services including testing, coaching, and upskilling are free.

- **Do I need a lot of experience?**  
  No. We value dedication and the ability to grow.

- **Do I work from home or an office?**  
  You will work from home with flexible scheduling.

- **How do I get paid?**  
  You will receive payments monthly or semi-monthly.

- **Can I apply while working full-time?**  
  Yes. You may start the process and inform us of your availability.

---

## Success Stories

### Case Study 1: Publicly Listed Canadian Company

- **Challenge**: Difficulty finding local AP talent
- **Solution**: Offshore team hired through Global Hiring
- **Result**: 4-member team processes $25M in AP monthly, saving $200K annually

### Case Study 2: Property Management Firm (600+ Homes)

- **Challenge**: High operational and accounting inefficiencies
- **Solution**: Comprehensive accounting services provided
- **Result**:
  - Managed payroll and benefits
  - Monthly accounting and trust accounting
  - Strategic controllership support

---

## How We’re Different

- Top 10% pre-vetted talent
- Transparent pricing model
- Coaching for both client and talent
- 70%+ of billed fee goes to talent
- Seamless onboarding and ongoing excellence
- Leadership with 20+ years in finance and accounting

---

## Contact Us

**Email**: [nash.cisneros@globalhiring.ai](mailto:nash.cisneros@globalhiring.ai)  
**Phone**: +1 604-674-5992  
**Office**: 213 - 2438 Marine Dr., West Vancouver, BC V7V 1L2, Canada

---

## Quick Links

- [Start Hiring](mailto:nash.cisneros@globalhiring.ai?subject=Start%20Hiring)
- [Apply for a Role](mailto:nash.cisneros@globalhiring.ai?subject=Job%20Application)
- [Check Our FAQs](#faqs-for-job-seekers)
- [Explore Plans and Pricing](#accounting-plans)

Let us help you scale your business or build a thriving career.`;

export async function POST(req: Request) {
  try {
    const { message, conversationHistory = [] } = await req.json();

    // Prepare messages for OpenAI
    const messages = [
      { role: 'system' as const, content: SYSTEM_PROMPT },
      ...conversationHistory.slice(-10), // Keep last 10 messages for context
      { role: 'user' as const, content: message }
    ];

    // Create a streaming response
    const stream = new TransformStream();
    const writer = stream.writable.getWriter();
    const encoder = new TextEncoder();

    // Start processing in the background
    (async () => {
      try {
        const completion = await openai.chat.completions.create({
          model: 'gpt-3.5-turbo',
          messages,
          max_tokens: 500,
          temperature: 0.7,
          stream: true,
        });

        let response = "";

        for await (const chunk of completion) {
          const content = chunk.choices[0]?.delta?.content || '';
          if (content) {
            response += content;
            await writer.write(encoder.encode(`data: ${JSON.stringify({ content })}\n\n`));
          }
        }
        console.log(response);
      } catch (error) {
        console.error('OpenAI API error:', error);
        await writer.write(encoder.encode(`data: ${JSON.stringify({ error: 'Failed to get response' })}\n\n`));
      } finally {
        await writer.close();
      }
    })();

    return new Response(stream.readable, {
      headers: {
        'Content-Type': 'text/event-stream',
        'Cache-Control': 'no-cache',
        'Connection': 'keep-alive',
      },
    });
  } catch (error) {
    console.error('Error processing request:', error);
    return NextResponse.json(
      { error: 'Internal server error' },
      { status: 500 }
    );
  }
}