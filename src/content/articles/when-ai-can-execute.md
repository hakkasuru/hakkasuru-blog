---
title: "When AI can execute, what does it mean to be an engineer?"
description: "AI is getting very good at writing code. That's prompting me to think honestly about where the real value in engineering work actually lives."
publishedAt: 2026-03-22
tags: ["ai", "engineering", "career", "software-development"]
category: "Engineering"
draft: false
---

I've been sitting with a question for a while now. Not as anxiety, more as honest curiosity about where the value in my work actually lives.

AI tooling has gotten genuinely good at writing code. Not just boilerplate, not just autocomplete suggestions, but real, working implementations: components, API integrations, data transformations, test suites. The feedback loop between "I have an idea" and "I have running code" is compressing fast. So if execution is becoming cheaper and faster, what's the thing that stays hard? What does it mean to be an engineer when the most time-consuming part of engineering is getting easier?

I don't think the answer is "nothing changes" and I don't think it's "everything is fine, just be nice to your robot." It's something more interesting than either of those.

## Architecture and system design are where judgment lives

The clearest thing I keep coming back to is that AI is excellent at solving a problem you hand it, and still pretty bad at knowing which problem to solve.

System design and architecture require holding a lot of context simultaneously: business constraints, operational reality, team capability, future requirements that are partially unknown, technical debt that already exists, decisions made years ago by people who have since left. You're not just selecting from a menu of options; you're weighing tradeoffs that don't have clean answers, often with incomplete information and a deadline.

This is where judgment lives. And judgment is not a thing you can prompt for. You can use AI to explore the solution space, to generate options you hadn't considered, to sketch out implications, to stress-test a design by asking it to argue against your approach. But the actual call, the decision about what this system should be, that still requires a person who understands the context deeply enough to know what "right" looks like.

I find myself spending more time in this space than I used to. That feels right. The more AI handles at the implementation layer, the more leverage there is in the decisions that precede implementation.

## Taste is the meta-skill

This one is harder to talk about because it sounds vague, but I think it's the most important thing I've been thinking about.

Taste, as I'm using it here, has three parts.

**Recognition** — the ability to see what good looks like. To read a codebase and know whether it's clean or tangled. To look at a system diagram and feel where the seams are wrong. To review an output and notice the thing that's slightly off before you can articulate why.

**Compass** — the ability to navigate toward good when you're in the middle of building. To make the micro-decisions that collectively determine whether something is well-crafted or just functional.

**Vision** — the ability to imagine what good could look like that doesn't yet exist. To see a gap in a product experience, or a better abstraction, or a simpler architecture, before the problem is obvious to everyone.

AI can produce output, but it doesn't have taste in this sense. It can imitate taste based on patterns in training data, and sometimes that imitation is convincing. But someone still needs to evaluate the output, steer toward better, and notice when "good enough" isn't actually good enough. That's still the job.

Taste is what makes the difference between using AI to go fast and using AI to go fast in the right direction.

## Judgment is the bottleneck

When execution is cheap, judgment becomes the bottleneck. And you can get very far, very fast, in the wrong direction.

Speed without judgment is a failure mode, not a feature. If anything, the productivity gains make the judgment problem more acute, not less. You can build more, faster, and if your sense of what to build is off, you can also go further down the wrong path before you notice.

## Product sense is no longer a bonus

I used to think of product sense as something I'd develop "eventually," a nice-to-have that mattered more the further along in a career you got. I've changed my mind.

If execution is getting commoditised, the competitive advantage shifts toward whoever best understands what's worth building and why. That's product sense. It's the ability to hold the user in mind, to understand their actual problem rather than the stated one, to make prioritisation calls that reflect what genuinely matters.

Engineers who have this, who can move fluently between technical and product thinking, are going to be in a fundamentally different position than engineers who wait for a spec and then implement it. The spec-and-implement model made sense when implementation was the scarce resource. When implementation gets cheaper, the work that matters shifts earlier — to whoever can figure out what's actually worth building.


## The productivity paradox is worth remembering

There's a frame I find useful here: coding was never the bottleneck. Deciding what to build and getting it right was.

If a project took three months, the coding was maybe a third of that, often less. The rest was figuring out requirements, getting alignment, discovering that the requirements were wrong, refactoring because the initial design didn't account for something, debugging edge cases, revisiting decisions, shipping and learning that users wanted something different.

AI speeds up the coding part. But it doesn't speed up figuring out what you're actually trying to build, or whether you got it right. Those still take the time they take. If anything, because you can now build things faster, the cost of building the wrong thing actually goes up. You can invest more implementation effort in a flawed direction before you notice the problem.

So the productivity gains are real, and they're also a bit of a trap if you're not careful. The speed is valuable. The judgment about what to do with the speed is where the work actually lives.

## Cross-domain breadth is an underrated advantage

The T-shaped model, deep expertise in one area with broad knowledge across others, has been discussed in engineering for a long time. I think the breadth matters more now than it did.

When you've seen how a problem was solved in a different domain, or a different language, or a different industry, you carry pattern recognition that doesn't show up in any single vertical. You know that this distributed systems problem looks like something you saw in supply chain logistics. You know that this API design issue is a familiar shape from a completely different product context.

AI is trained on a broad corpus, but it applies that breadth statistically. It retrieves patterns that match the surface of your prompt. It's not actually drawing on experience. The engineer who has genuinely worked across different contexts brings something different: intuition about what will work, built from actually seeing what worked and what didn't.

Breadth also makes you better at evaluating AI output. If you've seen more approaches, you have a richer basis for knowing when a suggested solution is good versus when it's plausible-looking but subtly wrong. Narrow expertise is easier to fool.

I've been thinking more deliberately about the range of problems I engage with, not just going deeper in the areas I already know well, but deliberately pulling in context from adjacent domains. It feels less efficient in the short term. I think it's one of the better investments available.

## Am I building skills that compound, or skills that expire?

That's the question I find most clarifying. Not "is AI going to take my job," that framing isn't useful. But the quieter, more practical question of whether the things I'm getting better at are the things that will matter more over time, or less.

Framework-specific execution skills expire. So does the ability to write a particular kind of code quickly, or deep expertise in a single tool. Judgment about what to build, taste for what good looks like, cross-domain pattern recognition — those compound.

I'm trying to be honest with myself about this on an ongoing basis. Not as anxiety, as a legitimate engineering question about where to put the work.
