---
title: "Rethinking CI/CD"
subtitle: "Does yours stop bugs or block development?"
date: 2025-01-20
layout: $layouts/Page.astro
---

> Manager: The sign up form is down!
>
> Engineer: Yeah, I know why. Gimme ten seconds to fix it.
>
> Manager: Ok, so I can tell everyone that the form will be back up in a minute?
>
> Engineer: More like 40.

The concept of "Continuous Integration and Continuous Deployment" (CI/CD) has
slightly different meanings depending on who you ask. For this article, let's
assume we mean "automatic testing and deployment based on state." For many, that
automatic testing and deployment is done through GitHub Actions and that state
is what code has been pushed to the `main` branch.

A typical CI/CD pipeline looks like this:

tktk: these steps should be a state graph

1. When a new Pull Request is opened, run all tests on the branch. If any fail,
   merging is blocked.
2. Once merged, run all tests again. If any fail, do not deploy.
3. Once tests on `main` all pass, run the deploy.

This kind of CI/CD setup is good for consistent, pre-tested, leisurely
deployments. However, it is configured very poorly for speed and emergency
scenarios. The main thing to notice here is how much you will sweat when you are
trying to fix a serious bug in production. How long do these tests take? How
much time are we wasting after a single line change, or worse, reverting to a
known good state that needs no tests at all?

This is why I am going to argue that the best CI/CD leaves the "Deployment" part
out entirely.

## Always automated, never automatic

For 4 years, the frontend engineers at Trilliant Health have been running every
single deployment from our local computers. There is nothing automatic about
deployments. (They are auto<i>mated</i>, just not auto<i>matic</i>.) During this
time, we have certainly shipped a few bugs. Perhaps 2 were showstoppers. Each of
those two showstoppers were reverted within about 5 minutes of being discovered,
because we didn't have to create a branch, push to GitHub, open a Pull Request,
wait for a review, wait for tests to pass in CI, click merge, wait for more
tests, and then wait for an underpowered runner to build and deploy our
application.

All we had to do was check out our previously-deployed commit and run the deploy
script locally. Since we do this all the time, there was no worry about "doing
it wrong" or for the deployment procedure or our personal credentials to be out
of date.

Our CI is simple:

0. Using GH settings, force all PRs to be rebased off the tip of `main`
1. On Pull Request, ensure all tests pass before allowing a merge

With these two things in place, we know that all code on `main` was tested. No
failing tests get into `main` because of tests running on an older version of
`main`, then getting merged into the latest version of `main`.

tktk picture here to clarify the above

This means that all code on `main` is safe to deploy, aside from untested bugs
which happen in "stricter" CI/CD pipelines as well. So once things are merged,
whoever merged will then (usually immediately) run the deploy script from their
machine.

This all might raise a couple questions in your mind.

"Are you worried about bad local state or accidental deployments?"

The script we use for deployment does a few simple "dummy checks" to make sure
we aren't deploying from a weird state, and it also pauses a couple times for
the developer to double check that this is what they intend to do.

"Don't you ship more bugs?"

No. We still have tests and staging deployments ([but better](variantArticle))
to check that our changes are good. We just don't program them to block a
deployment. We either run them locally, or wait for CI tests to pass before we
run a deployment from our computers.

"If developers can deploy _whatever they want_, won't they be tempted to?"

I cannot speak to your company's hiring practices.

That's it. All other concerns basically boil down to these three things. Do you
still reasonably test your code, is deployment sufficently intentional, and do
you trust your developers?

As long as your system or process accounts for these things, then there is no
need for your deployments to be held up by a CI/CD pipeline!
