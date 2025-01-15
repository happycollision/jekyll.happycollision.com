---
title: "Rethinking CI/CD"
subtitle: "Does yours stop bugs or block fixes?"
date: 2023-01-05
layout: $layouts/Page.astro
---

> Manager: The sign up form is down!
>
> Engineer: Yeah, I know why. Gimme ten seconds to fix it.
>
> Manager: Ok, so I can tell everyone that the form will be back up in a minute?
>
> Engineer: More like 40.

The concept of "Continuous Integration and Continuous Deployment" (CI/CD) has slightly different meanings depending on who you ask. For this article, let's assume we mean "automatic testing and deployment based on git branch state."

Anecdotally, I've noticed more and more companies and projects move to CI/CD in the past 10 to 15 years, probably because the tools we use to set up these deployment pipelines have become cheaper and easier to manage. But just like any hammer, you have to make sure you are using it on actual nails.

CI/CD is good for consistent, pre-tested, leisurely deployments. CI/CD is often configured very poorly for speed and emergency scenarios. But you don't always have to trade one for the other.