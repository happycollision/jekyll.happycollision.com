---
title: "Heartbleed: your passwords are public now"
date: 2014-04-09
layout: $layouts/MarkdownPage.astro
---

I am not going to waste your time here. If you want to know _exactly_ what
Heartbleed is, there are [plenty of sites][1] that will give you that. This will
all be in layman's terms and will be far from precise, but will be accurate
enough for normal people.

## What is Heartbleed?

Heartbleed, made public on April 7, is the nickname for a problem with some of
the code that keeps the internet safe. It actually made sites that were supposed
to be super secure _worse_ than sites that were unsecured.

There has never been a vulnerability that affected this much of the internet
before.

Heartbleed has nothing to do with your computer. It has to do with websites _and
services_ you use. The number of people who use the internet and have _not_ been
affected by Heartbleed is, essentially, zero. Don't brush this off: you are not
insulated from this, I promise.

From [Heartbleed.com][2], emphasis mine:

> We have tested some of our own services from attacker's perspective. We
> attacked ourselves from outside, without leaving a trace. **Without using any
> privileged information or credentials** we were able steal from ourselves the
> secret keys used for our X.509 certificates, **user names** and **passwords**,
> instant messages, **emails** and business critical documents and
> communication.

## What do I have to do?

**No matter who you are**, you need to get ready to change your passwords.
Period. If you are the type of person who uses the same password for multiple
websites or services (Gmail, Yahoo Mail, etc.), you are _especially_ vulnerable.
I'm sorry, but it's true.

Here's the tricky part: **You have to wait until the websites you use are no
longer vulnerable**. The sites affected need fix the problem on their end before
you can do anything on your end.

The easiest thing you can do now is wait until the weekend and then change all
your passwords. Any service that is worth their salt will have patched the leak
by then. Not the safest route, but doable for people who don't have time to be
concerned. UNIQUE PASSWORDS, please. This is a great time to make sure you don't
use the same password for your bank account as you use anywhere else.

If you want to be safe, check the sites you have passwords on with [this
tool][3]. If they pass the test, go ahead and change your password there. I
cannot stress enough how important it is to make the password unique.

## How am I supposed to remember unique passwords for all my sites?

It is worth your while to find a system that works. However you need to do it.

I'd recommend either [LastPass][4] or [1Password][5]. I use the latter. LastPass
was, technically, compromised but they claim that the compromise didn't allow
attackers to get any data. 1Password was only compromised if you use a specific
part of their service, which I do not.

Both these services are helpful when changing passwords as well.

## This seems like kind of a pain in the rear

Yep. But to paraphrase Zig Ziglar, "You only have to floss the teeth you want to
keep."

Be safe out there, folks.

---

If you think I have gotten something wrong, please [let me know][6], and I will
be happy to correct.

[1]: https://www.google.com/search?q=what%20is%20heartbleed
[2]: http://heartbleed.com
[3]: http://filippo.io/Heartbleed/
[4]: http://lastpass.com
[5]: https://agilebits.com/onepassword
[6]: http://happycollision.com/contact
