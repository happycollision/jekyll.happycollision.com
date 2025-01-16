---
title: "On-Demand Deployment"
subtitle: "Does CI/CD stop bugs or block development?"
date: 2025-01-20
layout: $layouts/Page.astro
---

> Manager: The sign up form is down!
>
> Engineer: Yeah, I know why. Gimme 10 seconds to fix it.
>
> Manager: Whew! I'll tell everyone it'll be back in a minute.
>
> Engineer: More like 40 minutes.

The concept of "Continuous Integration and Continuous Deployment" (CI/CD) has
slightly different meanings depending on who you ask. For this article, let's
assume we only mean "automatic testing and deployment based on state." For many,
that "automatic testing and deployment" is done through GitHub Actions and that
"state" is what code has been pushed to the `main` branch.

A typical CI/CD pipeline looks like this:

1. When a new Pull Request is opened, run all tests on the branch. If any fail,
   merging is blocked.
2. Once merged, run all tests again. If any fail, do not deploy.
3. Once tests on `main` all pass, run the deploy.

tktk: these steps should be a state graph

This kind of CI/CD setup is good for consistent, pre-tested, leisurely
deployments. However, it is configured very poorly for speed and emergency
scenarios. The main thing to notice here is how much you will sweat when you are
trying to fix a serious bug in production. How long do these tests take? How
much time are we wasting after a single line change, or worse, reverting to a
known good state that needs no tests at all?

This is why I am going to argue that the best CI/CD leaves the "Deployment" part
out entirely.

## CI: Where checks are automatic

Conceptually, CI should be simple:

1. On Pull Request, ensure all checks pass before allowing a merge
2. (There is no step 2.)

Part of what allows our CI to be simple, and to only run tests on the PR and not
again on main is that we use GitHub's branch protection and enforcement that a
PR must be based off the tip of the `main` branch. So when something hits
`main`, that means it came from a PR that passed all checks. And if it was in a
PR that passed all checks, that PR was guaranteed to be based off the tip of the
`main` branch. That means that there is zero diff between the PR and `main`
immediately after the code merges.

tktk picture here to clarify the above

Since all code at the tip of the `main` branch is tested, we know that `main` is
safe to deploy. But we don't do automatic deployment via CI/CD.

## Deployments: Always automated, never automatic

If your deployments are decoupled from the rest of your CI process, and you can
deploy to production from any branch (if necessary) at any time, you open up a
world of possibilities for dealing with unforeseen problems. As long as the
process is automated, getting developers to "push the button" to deploy directly
is not all that different from having CI/CD push the button for you.

For 4 years, the engineers at Trilliant Health have been running every single
deployment of our SPA from our development computers. There is nothing automatic
about deployments. Instead of spending engineering effort on creating a
deployment process that can run inside a GitHub Action, we spent that effort
crafting a tiny CLI tool that our developers use whenever they want to deploy
something to production or some other environment. So all our deployments are
auto<i>mated</i>, just not auto<i>matic</i>.

During these 4 years, we have certainly shipped a few bugs. Perhaps 2 were
showstoppers. Each of those two showstoppers were reverted within about 5
minutes of being discovered, because we didn't have to create a branch, push to
GitHub, open a Pull Request, wait for a review (or encourage a quick rubber
stamp), wait for tests to pass in CI, click merge, wait for more tests, and then
wait for an underpowered runner to install all the dependencies from scratch,
build and---finally---deploy our application.

All we had to do was check out our previously-deployed commit and run the deploy
script locally. Since we do this all the time, there is no added stress around
"doing something wrong" and further breaking production.

## something

# objections

This might raise some questions in your mind.

> "Are you worried about bad local state or accidental deployments?"

The script we use for deployment does a few simple "dummy checks," and it also
pauses a couple times for the developer to confirm their intent.

If any bizarre local state causes a bad deployment, literally all our other
developers could be tapped to run a quick deploy from their machine if needs be.
(We've never needed to do this.)

> "If developers can deploy _whatever they want_, won't they be tempted to?"

I cannot speak to your company's hiring practices.

That's it. All other concerns that separate on demand deployment vs automatic
deployment basically boil down to these two things. Is deployment simple and
sufficiently intentional, and do you trust your developers? As long as your
system or process accounts for these things, then there is no need for your
deployments to be held up by slow tests on a server somewhere in the cloud. The
CI/CD pipeline can be used as a tool to enhance your process without hampering
your freedom to do what you need to do.

# things

> "Don't you ship more bugs?"

No. We still have tests and staging deployments ([but better](variantArticle))
to check that our changes are good. We just don't program them to block a
deployment. We either run them locally, or wait for CI tests to pass before we
run a deployment from our computers.
