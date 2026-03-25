---
title: "Vibe coding, context engineering, and the risk of calcifying taste"
description: "What's actually happening when AI-assisted development works well — and what I've learned building the system around it."
publishedAt: 2026-03-26
tags: ["ai", "engineering", "context-engineering", "productivity", "taste"]
category: "Engineering"
draft: true
---

I've been using AI heavily for a while now: at work for production code, debugging, and testing automation; personally for self-reflection, side projects, writing, research, and personal branding. I've also been building a system around how I use it: instruction files, skills markdown, taste guardrails, feedback loops, and now evaluation frameworks.

The question I kept sitting with: is this vibe coding, or is it something else?

## The vibe is mine. The typing is the model's.

"Vibe coding" implies magic: you gesture at a problem and something appears. But what's actually happening when it works well is delegating execution while retaining judgment. The execution got cheap. The judgment didn't.

This is the same insight from my earlier thinking about software engineering, now made viscerally real in every session. When AI can execute, judgment becomes the bottleneck. The vibe is the judgment. The code is just the output of it.

When it goes wrong, it's almost never the model's fault in the way people assume. The model did exactly what it was asked. The failure is usually one of three things: underspecified intent, missing context, or no feedback loop. You accepted 80% right, and the 20% compounded.

## What I've actually built is context engineering

Looking at my setup honestly, none of it is "vibe coding." It's a system.

**Instruction files:** persistent context that travels with the task. The model stops being stateless relative to my preferences. I'm not repeating my standards every session.

**Skills markdown with guardrails:** reusable task specifications that capture what "done well" looks like. The same task done badly has the same failure mode. The skill encodes the fix so I stop debugging from scratch.

**Taste as input:** giving the model references and inspirations isn't just helpful context. It's offloading the description problem. Pointing at a thing that already embodies what I want works better than trying to articulate it in words.

**Feedback loops:** treating the system as improvable rather than fixed. Most people use AI tools like a vending machine. I'm treating it like a process I'm iterating on.

**Evaluation frameworks:** this is the layer most people skip. Automating the end goal tells you if the skill *works*. Evaluation tells you if it works *well, consistently, and for the right reasons*. A skill can pass its own task and still be fragile: high variance across similar inputs, legible only when inputs are already well-formed, drifting silently when the model updates.

Good evaluation measures output quality against taste (not just function), consistency across similar inputs, failure mode legibility, and coverage. It runs at three levels: per-run sanity checks, periodic sampling against taste criteria, and occasional retrospectives on whether the skill is still solving the right problem.

## This generalises beyond code

The same principles apply to writing, research, and self-reflection: anything I'm using AI for personally. The quality ceiling is always set by how precisely I can specify what "good" looks like, how quickly I can detect drift, and how systematically I capture the feedback so it accumulates rather than evaporates.

Non-coding tasks are actually harder to vibe well because there's no equivalent of "does it run." Taste has to do more of the work as the forcing function. Which means the guardrails matter more, not less.

## The risk I want to stay honest about

The system I've built works because I have opinions worth encoding. The trap is optimising the guardrails as a substitute for developing the taste itself. If the feedback loop runs long enough without me also consuming great work, building things that fail, and forming new opinions, the guardrails calcify. I'm refining the expression of taste that stopped growing.

The question isn't just *are my guardrails tight?*

It's: is my taste still moving?
