[

docs.google.com

https://docs.google.com/document/d/1eC6QlwBPmQktNzq\_i2yVQMViUf09KwM9CNw7vSvb4Mw/edit?usp=sharing

](https://docs.google.com/document/d/1eC6QlwBPmQktNzq_i2yVQMViUf09KwM9CNw7vSvb4Mw/edit?usp=sharing)

Phil's questions for us:
*   Is this a cadillac or an MVP?
*   IP (doesn't need to be patentable it can be a trade secret)
    *   Vendor-protected IP = a blackbox, you don't have the same documentation burden
        *   if its IP then you dont need the whole thing you just need the input and output
            *   then they dont need to validate every line of code
    *   max mentions that the optical sensing is an area where we are considering this
    *   then dont need design spec and \_\_\_\_\_ something else I missed to be separate they can overlap
*   is there a quality management system in house?
    *   will: sort of, light weight in terms of the biology. but in terms of the hardware design we are starting to figure that out.
    *   phil: compliance comes around your quality management, much less than the \_\_\_
        *   you dont need URS, they will write that for you
        *   they will ask: how do I make sure the quality is good? ISO 9001 = you need to have a quality management system around what you're doing, especially software development
            *   maintaining versions / maintaining all of the quality you need to provide
            *   it isn't that difficult and can be done quickly
            *   ex: auditing your vendors/ suppliers, making sure you are getting quality parts
    *   will: is QMS a third party thing or do you do it yourself?
        *   phil: hired a consultant the first time. then he bought the QMS + documents for $600 the 2nd time. but you need someone in house who understands this and maintains / tailors the documents. as you grow, try to achieve the 9001 status. have to establish + use quality management system. you can set up QMS and certified. you need to show that you had failures and how you overcome them, so that is why it takes a while
            *   MVP approach to this and \"how you get there\"
            *   the quality management system in place = highly important when you are selling things to customers.
*   phil: will you manufacture these in-house?
    *   max: we are currently wondering if this is the right approach. at least for right now, we don't want to manufacture in house. the way we are currently set up. the prototypes for the first version yes will, but not after the first one.
    *   phil: reduces the quality management system a lot. if you dont have it in house, you wont need inspections / audits. but youll need to show that you audit your vendors. it isn't a huge effort at first but if you are anticipating snowball effect -all differnt size of biorectos you will have different models
*   phil: are you familiar with Finess? (thermo bought)
    *   they sell bioreactor controller on delta-V system. they have almost 30 ppl doing nothing but managing and validating software updates.
        *   every software update you makes needs to be revalidated
        *   customer says \"if you did this I would be 20 of them, and you say \"ok\"\" - now all of a sudden you have customers driving the features, and you need to manage this with QMS
        *   you need to bring software people in and quality
*   pete: do you want to tell phil about the SMEs we have, max?
    *   max: unsure which parts of manufacturing / servicing = right for us, but we want to be in the best position to do that.
        *   96 wp illums would make 100s to 1000s and then the software would need more validation
    *   max: current team overview
*   phil: looking at specific platform? other than fw and hw building yourself?
    *   max: we are open to it, there are some platforms that we use - ex: cloud enabled controllers, data goes encrypted in and out of cloud, updates are well controlled through that. data lake (ganymede?) we have an underdeveloped software to work with those.
*   phil: what voltage are these? 120V into outlet?
    *   max: most device = single power supply, DC low voltage power (24V, 9V) and data connection (currently separate). fully open to revising that for this particular illuminator
*   phil: you have in-house designers?
    *   max: yes, though on the whole it is a relatively junior team. it would be helpful to know in what domains it is helpful to hire much more experienced people
*   phil: in North AM, you build to UL standards, people will accept it. In europe = needs to be actually certified. modifications after certification = needs to get certified again. stay in NA as long as you can, that is helpful / a little less expensive
*   pete: is there flexibility in UL standards at gmp level?
    *   if you have a UL Stamp, quality people = less stringent. if not, then you need to show more how you maintain the quality. you dont always have to have it. in NA, most companies don't. like ISO 9000, you dont have to have it , but it makes it easier to get through the quality check
    *   on a UL product vs a UL control pannel - there is a difference. but I am assuming there is a unit with a control panel attached to it . if you ul certifiy the system
    *   pete: more so the system itself, if you sell one of your systems to ex: genentech, is UL certification of that system = mandatory? or is it at discretion of end user company?
        *   phil: discretion of end user
*   pete: easier it was mentioned \"industsy standard\" aka \"legacy\" controllers. can you offer a couple words of perspective on if people are open to newcomers ? or do you stick to the deltaV/siemens, etc
    *   phil: most people do siemens or rockwell. deltaV is very hard to do. most companies want something tried/ true which will last. cloud applications in a control system are not going to be accepted. its hard to validate.
        *   codassit? codasys?
        *   end users will check \"is this a supported platform?\" - novonordisk struggled after bringing a non industry standard platform
    *   max: which part do they provide?
        *   phil: hardware level for PLCs
            *   RepIigen ATF is a rockwell system with their own HMI on it.
            *   nobody will let you use opto22 with a \_\_\_\_ on it, not an industry standard
            *   companies automation teams dictate what you have to use if you give them the option. you have to have something that they're willing to accept
        *   max: trying to understand where the servicable components begin and end. some things are not user servicable but need to be built nonetheless
        *   phil: if you have a raspi you can run any protocol on it. are you looking at your own firmware?
            *   max: that is how we envisioned so far. but this shows you how our exposure. we havent considred these systems
    *   phil: where that comes up = what is the turnaround time on fixing / replacing? how hard is it for someone onsite to fix?
        *   automation teams = used to PLCs / DCSs . otherwise it may be a bit of a culture shock, it will require a plan
*   pete: ATF provides contrast. we arent doing IO / controls like a bioreactor system, but from flexibility / amount that our equipment can impact the cell culture process or final quality attributes, a comparison to ATF is similar
    *   phil: you have a bioreactor w/ sensors that are cabled to system with HMI or something else. assuming similar system, with HMI/ cables
        *   max: depends on what we end up sensing. ex: Closed loop control , not part of the MVP. only sensing optical density. either using an SD card or we use an HMI with a scheduler. over time work with their HMI. less integration = less risk exposure. MVP works differently on contorl level compared to next units if that allows us to demonstrate what is needed in required timeframe
        *   phil: standalone approach = easier compared to timing with bioreactor
*   will: one of our goals is to have the system opereate standalone , but probably need interlock
*   phil: what about data integrity?
    *   max: illuminators need reservation system = keeps track of batches / parameters / etc , all logged immutably in way that is easily retrievable. we already have this. if we can leverage aspects that is great. it could become complicated depending on cusomer expectations
    *   phil: pushing a couple signals to them over communication = not that hard.
        *   will: rather than building full system for tracking that
        *   phil: customer will say why do I gotta look at 2 reports for this. but if you could update data every second. then you dont have to worry, you dont have to tie it back to their system or anything else
        *   max: if we know our likely scaling partner, then we can understand their system better

will: pivot to chatting about how to move forward? what makes sense from your perspective?
*   phil: can provide with what you probably will need, then if you want to tell me about what you want me to do we can go from there. you've gotten prototypes, you have down how you want to do it but now youre going to serial #1, I dont know that you need to bring on a ton of people. can help with quality management and GMP docs. leverage AI for that. its not extremely time consuming. can help you put that together. gotta walk down the strategy there.
*
