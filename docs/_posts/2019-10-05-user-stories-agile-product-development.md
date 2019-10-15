---
title: "User Stories: Agile Product Develpment 101"
layout: posts
tags: [agile] 
excerpt_separator: <!--more-->
---

Developing IT products is an exciting task. Technology is complex. And product design 
is about to understand your customers and anticipate their needs exactly.

<!--more-->
Along the [KISS Principle](https://en.wikipedia.org/wiki/KISS_principle) we want to develop
only features, we or our clients really need. Why do we need to focus on KISS?



- The customer wants an easy to use product.

- Manuals are bad: Your Product must explain itself without the need for any
  documentation for basic usage.

- Development should focus on demands instead of selling. But getting the quote
    is important, too.
  
- You can't develop unless you know your user: Programming is formalized knowledge.
  You need a very detailed understanding of your customers tasks and needs to develop
  customer centric software. All software you write in advance will miss these needs,
  because you start selling your features instead of listening to your customers demands.
 

## Customer- vs. Feature-driven development

"The customer needs `a feature`": This quote reveals you are doing feature driven development.

Feature driven development is based on an **internal** (marketing/selling) perspective. Instead of
developing features that fit customer needs, feature driven development concentrates on features 
which can be presented (marketing / sales perspective) and may raise needs.

Most companies have to balance between customer- and feature-driven development. On the one hand
they need displays to get quotes. But afterwards it needs real customer satisfaction to bind and keep the relationship.

Feature-driven features look great but (by definition) won't provide real assistance to the
day by day work of the customer. They
are teasers to get the quote. No more. From a healthy development perspective they should be treated as what
they are: A marketing campaign.

A little help to differenciate between feature and customer driven features.

**If a feature...**
- was develop mostly on internal feedback
- is difficult to understand for outsiders
- is highly customizable (has lots of configuration options)
- was developed to be displayed at marketing posters
- is poorly used by actual customers

It is a featured-driven feature and should be treated as marketing feature

**If a feature...**
- is easy to read and understand
- covers one specific need of a bunch of customers
- has no or only a few of config-options for a bunch of customers
- is no frequent subject of support calls
- excites many customers if removed or replaced

It is a customer-driven feature which stronly contributes to the customers
success stories.

So let's define what the customer needs are...

## The User Story 

> Keep it short. Keep it simple. Don't repeat yourself!
> Every word you write more is one more to read!
>
> Images say thousands more than words!

- <b>Punchline:</b> *As `<stakeholder>` I want to `<archive a goal>` therefore I need `<a feature>`*
    - The Punchline is 1 or 2 sentences and is clearly written from the stakeholders perspective
    - The Punchilne lonely focuses on the stakeholders task. Never on technical nor organizational
      aspects.
    - The Punchline should be unique within the other user stories

    Whenever you are dealing with commercial stakeholders, the Punchline should be some variation of
    
    ```text
    As business owner i want to <<specification of 'increase productivity'>> by <<some action>> therefor i need <<something>
    ```
    where as you better define increase productivity by an actual faced problem and put the most
    reliable solution at the end.
    
    ```
    As business owner i want to encounter rising fuel costs by replacing the most fuel inefficent (by savings) machines 
    by new ones. But I can't replace all of them at once. Therefor I want to start with the most possible savings.
    ```

- <b>Abstract</b>
    - Describe the difficulties I face as a stakeholder.
    
    ```
    As business owner i have different machines with different fuel consumptions that are used at variaing 
    frequencies.
    I could replace the old, very inefficient ones - but they are rarely used eighter.
    Or should I replace instead better replace a almost new one frequently used one.
    ```
    
- <b>Examples: </b> Give at most 4-5 examples

- <b>Possibilities:</b>

Describe other possibilities to archive this goal. Name the consequences.

- <b>Definition of done.</b>

Describe what you as stakeholder would expect to meet your needs.

- <b>Definition of ready.</b>

What has to be done before starting this task.

## Mock Ups?

Feature driven development will work well for consumers by providing kind of lifestyle. 
And when it comes to business, feature driven development is highly effective for getting
new quotes.

But business value will only apply on customer centric development approach. 

Should we do mock-ups instead of wasting time in feature-driven developments? 

<small>ml</small>