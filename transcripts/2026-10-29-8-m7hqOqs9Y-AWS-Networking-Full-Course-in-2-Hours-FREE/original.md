---
title: "AWS Networking Full Course in 2 Hours (FREE)"
author: "Cloud X Berry"
site: "YouTube"
published: 2026-10-29T05:07:14-07:00
source: "https://www.youtube.com/watch?v=8-m7hqOqs9Y"
domain: "youtube.com"
language: "en"
description: "In this full course, Cloud X Berry explains AWS networking in a simple and beginner-friendly way.If you build on AWS, support it, or secure it, the network s..."
word_count: 17548
---

![](https://www.youtube.com/watch?v=8-m7hqOqs9Y)

## Transcript

### Course Introduction

**0:00** · Welcome to this course on AWS networking. If you build on AWS, support it, or secure it, the network sits under everything you do. Every request, every database call, and every connection to the outside world travels through it.

**0:15** · Yet for most people, it stays unclear until something stops working. This course makes it clear. It teaches AWS networking as one connected system, not as a list of separate services.

**0:28** · You'll follow traffic from where it starts to where it ends, and see what each part of AWS does along the way.

**0:34** · Here's what we'll cover. Module one starts with the basics, and with where a network lives inside AWS. Module two gives everything an address, sends traffic between servers, and turns names into addresses.

**0:48** · Module three covers the two kinds of firewall, how to see what they allowed or blocked, and who is allowed to change them.

**0:55** · Module four takes traffic out to the internet. It builds the setup most AWS applications run on, one that keeps working even when a whole data center goes down.

**1:06** · Module five goes beyond one network. It connects to other networks, to AWS services privately, to your office, and to people working from home. By the end, you'll be able to look at an AWS network diagram and follow the path traffic takes. You'll be able to plan subnets, routes, and firewall rules, choose how to connect two networks, and troubleshoot a connection by checking the likely causes in order. You don't need an AWS account or any networking experience. We'll explain each idea as we go. Let's get started.

**1:36** · Welcome to module one. Before any AWS name shows up on screen, we start where every network actually starts, where it lives, and how big it is.

### Module 1: Networking Foundations

**1:49** · We'll open with the plain networking ideas underneath all of this, addresses, routing, and firewalls, the same three concepts that existed decades before AWS did. AWS did not invent any of them. It took concepts that used to mean buying routers and running cables and turned them into things you click or write in the file.

**2:10** · Once you see that, the AWS names stop being new ideas to memorize and start being labels on things you already understand.

**2:18** · From there, we go straight into the AWS hierarchy itself. Your account, the region it operates in, the availability zones inside that region, and finally the VPC and its subnets, the private network boundary everything else in this course lives inside.

**2:35** · Then we tackle CIDR, the notation that decides how large your network is and how it gets divided into smaller pieces.

**2:42** · We'll work through real prefix sizes, a /16 and a/24, with the actual math behind how many addresses each one gives you, so the notation stops looking arbitrary.

**2:54** · By the end of this module, you'll be able to look at a VPC's address range and know exactly how much room it has and why.

**3:02** · Let's start with the basics that make everything else in this course make sense. Before we talk about VPCs, subnets, route tables, and all the AWS components, let's take a few minutes on how networking works in general.

### How Networking Works

**3:15** · The AWS part is not the difficult part.

**3:18** · AWS takes the networking concepts that already exist and provides them to you virtually.

**3:24** · So let's first understand the basic problem that networking is trying to solve.

**3:29** · You have one computer and you have another computer. Let's say these two need to communicate. For that to happen, the first computer needs to know two things. Who am I and where's the destination? That is where IP addresses come in.

**3:44** · Every device connected to a network needs an address so that other devices know where to send data.

**3:50** · Now, one computer can directly communicate with another if they are part of the same network. But say the destination is outside that network.

**3:59** · Your computer wants to reach a server on the internet. It cannot just send the data randomly and hope it arrives. It needs to know where the traffic should go next, and that is where routing comes in.

**4:11** · A router decides where traffic should go to reach its destination. If the destination is inside your local network, the traffic stays there. If it is somewhere else, the traffic is handed to another network and eventually toward the destination.

**4:25** · This is the part people miss. Just because there is a path to the destination does not mean the communication is allowed. Let's say your computer knows exactly how to reach a server. There is a valid path and the packet arrives.

**4:39** · The server might still reject it because you are not allowed to access it. That is where firewalls come in.

**4:46** · So, at a very high level, networking is about a few simple things. Where does a resource live? What is its address? If it wants to communicate with another resource, where should the traffic go?

**4:58** · And is that communication allowed? Keep those questions in mind whenever you work with AWS networking.

**5:05** · When we move into AWS, exactly the same questions exist. The difference is that instead of physically buying routers and creating networks, AWS gives us the capabilities virtually.

**5:17** · You will create a virtual network called a VPC. Inside it, you will create smaller networks called subnets.

**5:25** · Your resources, such as EC2 instances, will get IP addresses. Route tables will decide where traffic goes. Security groups and network ACLs will control whether that traffic is allowed. And if your resources need to reach the internet, another VPC, an AWS service, or your own office, AWS provides connectivity options for each. So, do not try to memorize AWS services as individual components. Always come back to the same questions. Where is this resource?

**5:55** · How does it reach the destination? Is the traffic allowed?

**6:00** · If you understand those three, the rest of AWS networking fits together naturally. Every name in AWS networking is a label on an old idea, and each of those old ideas answers one of three questions about a packet. So, before you meet any single service, it helps to know which question it belongs to.

### The Three Questions of AWS Networking

**6:20** · The first question is, where does this resource live and what is its address?

**6:25** · A VPC answers that. It's your own private network inside AWS.

**6:30** · A subnet answers it, too. It's a smaller slice of that network.

**6:35** · The second question is, where should its traffic go next?

**6:38** · A route table answers that. It's a list of rules that points each packet toward the right exit. Every gateway answers it, as well, because a gateway is one of the places a route can send traffic.

**6:50** · The third question is, is that traffic allowed? Security groups and network ACLs answer that. They're the two kinds of firewall in AWS.

**7:00** · A firewall is a set of rules that let some traffic through and turns the rest away.

**7:05** · Now, try sorting a few yourself. Pause the video and place each one under a question.

**7:10** · An internet gateway.

**7:12** · A network ACL.

**7:14** · A subnet.

**7:15** · Here's how they sort.

**7:17** · An internet gateway is the way out to the internet, so it answers where traffic goes next.

**7:23** · A network ACL is a firewall, so it answers whether traffic is allowed.

**7:28** · A subnet is a slice of your network, so it answers where something lives.

**7:32** · This trick keeps working, even for names you've never heard. When you meet a new service, ask which question it answers.

**7:40** · That alone tells you most of what it does.

**7:42** · So, here's the one habit this course asks of you.

**7:46** · Whenever you see an AWS network diagram, pick one packet and follow it. At every stop, ask the same three questions. Any network comes down to addresses, routes, and permissions.

### Accounts, Regions, AZs & VPCs

**7:58** · Let's place those pieces inside the overall AWS infrastructure.

**8:03** · Everything starts with your AWS account.

**8:06** · The account is the top-level boundary where you create and manage your resources.

**8:10** · Once you have an account, you choose in which part of the world you want to deploy those resources, and that is where AWS regions come in.

**8:19** · AWS has many regions around the world.

**8:22** · You choose the region where your workload will run based on where your users are, how much latency you can accept, where the data is allowed to live, or simply how the application is designed.

**8:33** · Each region contains multiple availability zones or AZs.

**8:37** · Think of an availability zone as a separate location within a region where AWS infrastructure lives.

**8:44** · These zones are designed to be isolated from each other, so that a failure in one does not take down the others, which is exactly what you need when building highly available applications. This is where the VPC comes in.

**8:57** · A VPC is created inside a specific region.

**9:01** · When you create one, you are not creating it globally across AWS. You choose a region and the VPC belongs to it.

**9:09** · Every region also comes with a default VPC that AWS creates for you with public subnets already set up, so the first 10 minutes are easy.

**9:18** · It is fine for experiments and wrong for production, where you build your own.

**9:23** · But the VPC itself can span all the availability zones within that region.

**9:28** · That is an important distinction.

**9:30** · The VPC is a regional resource, and when you want to place workloads in different availability zones, you do that with subnets.

**9:38** · Say we have one VPC spanning three availability zones.

**9:43** · Inside it, we create one subnet in zone A, another in zone B, and another in zone C.

**9:50** · Then, we deploy resources into those subnets.

**9:53** · If you launch an EC2 instance into the subnet in zone A, that instance is physically running in zone A.

**10:00** · If you want another instance in zone B, you launch it into a subnet that belongs to zone B.

**10:06** · A subnet lives in exactly one availability zone.

**10:10** · That rule is what makes subnets the tool for spreading a system across zones.

**10:15** · So, the hierarchy is simple.

**10:17** · We start with the AWS account.

**10:19** · Inside it, we choose a region.

**10:22** · Inside the region, we create our VPC.

**10:25** · The VPC spans the availability zones, and inside those zones, we create subnets where our resources really live.

**10:33** · This structure is the foundation for almost everything else in AWS networking. At this point, we know where our network exists and where resources can be placed inside it.

**10:43** · The next decision is which IP addresses belong to the VPC and how to divide them across the subnets. And that is a CIDR decision. When you create a VPC, one of the first things you must provide is an IP address range. Every resource inside a network needs an address.

### CIDR & IP Address Ranges

**11:02** · Before we can launch instances or create subnets, we decide which range of addresses belongs to our VPC, and that is where CIDR comes in.

**11:11** · CIDR stands for Classless Inter-Domain Routing.

**11:15** · Say we create a VPC with the range 10.0.0.0/16.

**11:21** · The first part, 10.0.0.0, is the network address.

**11:26** · The/16 is called the prefix.

**11:29** · You do not need binary arithmetic to understand it. At a high level, the/16 tells us how large the network is.

**11:36** · An IPv4 address has 32 bits in total.

**11:40** · When we say/16, the first 16 bits identify the network, and the remaining 16 bits are available for addresses within it.

**11:48** · 2 to the power of 16 is 65,536 addresses. So, a VPC of 10.0.0.0/16 owns an address space of that size.

**12:01** · Now, let's take it one step further.

**12:03** · We usually do not want every resource in one large flat network. We want separate networks for resources in different availability zones or for different parts of the application.

**12:14** · That is exactly why we create subnets.

**12:17** · Inside 10.0.0.0/16, we can carve smaller ranges. 10.0.1.0/24 10.0.2.0/24 10.0.3.0/24 Each becomes a separate subnet.

**12:35** · The VPC gives us the complete address space, and the subnets divide it. A/24 works the same way. Again, 32 bits. If the first 24 identify the network, eight remain for addresses inside the subnet.

**12:50** · 2 to the power of eight is 256 addresses, which is why/24 is so common for smaller networks.

**12:58** · You are not limited to/24.

**13:00** · A/20 gives you more addresses. A/28 fewer.

**13:05** · The rule that feels backwards at first is that the smaller the prefix number, the larger the network. And the larger the prefix number, the smaller the network.

**13:14** · One AWS detail to know now is that in every subnet, AWS reserves the first four addresses and the last one for its own use. So, a/24 gives you 251 usable addresses, not 256.

**13:30** · There is another important point. The addresses we are using, 10.x, are private addresses. Three ranges are reserved for private networks.

**13:39** · 10.0.0.0/8, 172.16.0.0/12, and 192.168.0.0/16.

**13:52** · You build your private networks from these, and a VPC almost always uses one of them.

**13:58** · They are called private because they are not routable on the public internet. You cannot connect from the internet directly to 10.0.1.10 somewhere in AWS.

**14:08** · That address only means something inside the private network where it exists.

**14:13** · Choose your VPC range so it does not overlap with your office network or with any other VPC you may later connect because overlapping ranges cannot be routed between.

**14:23** · So, now we know how a VPC gets its address space and how subnets slice it.

**14:28** · Inside those subnets, each resource then gets its own address and some of them get a second one that the internet can reach. Let's recap what module one covered. You now know that AWS networking is built on the same addresses, routing, and firewall concepts that predate the cloud. You know where a network actually lives in AWS, inside an account, inside a region, spread across availability zones, organized into a VPC and its subnets.

### Module 1 Recap

**14:57** · And you know how CIDR notation decides the size of that network from the full VPC range down to each individual subnet, including the detail that AWS reserves a handful of addresses in every subnet for its own use.

**15:12** · That's the foundation this entire course sits on. Everything from here forward assumes you're comfortable with a VPC, a subnet, and a CIDR block. So, if any of that still feels shaky, this is a good module to replay before moving on.

**15:27** · In module two, we give the resources inside this network actual addresses, private, public, and elastic IPs. And we ask the second of this course's three questions for the first time.

**15:39** · Once a resource has an address, where should its traffic go next? That's route tables, the default route to the internet, and DNS inside a VPC.

**15:49** · Let's keep following the packet. Welcome to module two.

### Module 2: Addresses, Routing & DNS

**15:53** · You know where a network lives and how big it is.

**15:56** · Now, let's put addresses on everything inside it and ask the second of this course's three questions.

**16:02** · Once a packet leaves a resource, where should it go next?

**16:06** · We'll start with how an EC2 instance actually gets its address, the difference between a private IP it always has, a public IP that can change, an elastic IP that doesn't, and where IPv6 fits into that picture.

**16:20** · Then we move into route tables, the local route every subnet gets for free, and what happens the first time we follow a packet from one subnet to another inside the same VPC.

**16:31** · From there, we cover the default route, the famous 0.0.0.0/0 entry that sends anything with no more specific match out toward the internet.

**16:42** · And the idea of longest prefix match, which decides which route wins when more than one could apply.

**16:48** · We'll also spend a lecture on something that trips up a lot of people the first time they hit it. A route can be completely correct, and the traffic still gets blocked.

**16:57** · Routing and firewalls are two separate questions, and this module draws that line clearly before module three goes deep on the firewall side.

**17:06** · Finally, we'll look at DNS inside of VPC. Route 53 private hosted zones, the VPC's own resolver, and why a name not resolving the way you expect is almost always a resolution setting, not a routing problem.

**17:21** · By the end of this module, you'll be able to look at any resource's address and its route table, and predict exactly where its traffic is headed. Let's get addresses and routes sorted out. Say we have a VPC with an address space and subnets that slice it. Now let's look at what a single resource really receives.

### EC2 IP Addresses

**17:40** · An EC2 instance launched into the subnet 10.0.1.0/24 gets a private IP address from that range, say 10.0.1.10.

**17:52** · Another instance in the subnet 10.0.2.0/24 might get 10.0.2.10.

**18:00** · Those resources can use their private addresses to communicate inside the network, as long as routing and security allow it.

**18:07** · The private address is attached to the instance's network interface and stays with it for the life of the instance through stops and starts.

**18:15** · Private addresses only mean something inside the VPC.

**18:20** · If we want a resource to communicate directly with the internet, we also need a public IP address.

**18:26** · A public address is globally routable.

**18:29** · When you open a website in your browser, you are ultimately reaching a publicly routable address.

**18:35** · Inside AWS, an EC2 instance always has a private address, and depending on how the subnet and the instance are configured, can also be associated with a public IPv4 address.

**18:47** · AWS maps the public address to the private one.

**18:51** · The instance itself only ever sees its private address, and the translation happens at the edge of the VPC.

**18:58** · There is a catch with the ordinary public IPv4 address that AWS assigns automatically.

**19:04** · It can change when the instance is stopped and started.

**19:07** · For a test server, that is fine. For anything that other systems or DNS records point at, it is a problem.

**19:15** · That is what an elastic IP is for.

**19:18** · An elastic IP is a static public IPv4 address that you allocate to your account and associate with a resource, and it stays yours until you release it.

**19:28** · Move it from a failed instance to its replacement, and the outside world never notices.

**19:33** · AWS charges for public IPv4 addresses, including elastic IPs, whether or not they are in use. So, the habit is to allocate what you need and release what you do not.

**19:45** · A word on IPv6, because everything above has been IPv4.

**19:50** · A VPC can also have an IPv6 range, and instances usually receive IPv6 addresses that are globally unique by design. So, there is normally no private versus public distinction, and no translation.

**20:04** · Though AWS does now support private IPv6 ranges, too.

**20:08** · Dual stack VPCs, running both, are increasingly common.

**20:12** · The routing and security ideas apply the same way.

**20:16** · The main IPv6 specific detail is the egress-only internet gateway, which gives instances outbound IPv6 access without making them reachable.

**20:26** · For now, do not worry about exactly when to use a public IP versus an elastic IP.

**20:32** · The main idea at this point is straightforward. A VPC gives us a large private address space. CIDR tells us its size. We divide it into subnets.

**20:43** · Resources in those subnets receive private addresses, and some of them may also receive a public one so the internet can reach them.

**20:51** · So we know where our resources live and how they get their addresses. But when the instance at 10.0.1.10 wants to send data to 10.0.2.10, it needs to know where to send that traffic. That is routing, and the route table decides where a packet goes next.

### Routing Inside a VPC

**21:10** · We have a VPC, we have divided it into subnets, and our resources have addresses.

**21:17** · Now let's take one simple example and follow what happens when one resource wants to communicate with another. Let's say we have two EC2 instances in the same VPC. The first is in one subnet with the address 10.0.1.10. The second is in another subnet with the address 10.0.2.10.

**21:38** · The first wants to send some data to the second. The first question is where it should send that traffic. The instance knows its own address, and it knows the destination. But 10.0.2.10 is in a different subnet, so the traffic has to be routed. This is exactly where route tables come in. A route table is a set of rules that tells AWS where network traffic should go based on its destination. Each rule has two parts: a destination range and a target, which is where traffic for that range is sent.

**22:11** · Our VPC is 10.0.0.0/16 with subnets 10.0.1.0/24 and 10.0.2.0/24. When we create a VPC, AWS automatically provides one route in every route table, and you will typically see it as destination 10.0.0.0/16, target local.

**22:36** · It means if the destination belongs to our VPC range, deliver it inside the VPC.

**22:42** · So, when our instance at 10.0.1.10 sends to 10.0.2.10, AWS checks the route table. The destination falls within 10.0.0.0/16, so the local route applies, and the traffic is delivered from one subnet to the other.

**23:01** · That local route is what lets resources in different subnets of the same VPC talk to each other, and you cannot delete it.

**23:08** · Of course, this does not automatically mean the application communication will succeed. The route tells the traffic where it can go. Security groups and network ACLs still decide whether it is allowed. For now, focus on the routing.

**23:22** · A route table is associated with a subnet. When a resource in that subnet sends traffic anywhere, AWS looks at the route table associated with that subnet and uses the destination address to pick a route.

**23:35** · Every VPC has a main route table that subnets use unless you associate a different one, and the usual practice is to create your own route tables and associate each subnet explicitly so that you always know which table a subnet is using.

**23:49** · So, the idea is simple. A resource has an address and wants to reach a destination.

**23:55** · The route table looks at that destination and says where the traffic goes next. That is routing.

**24:01** · But, our packet only stayed inside the VPC.

**24:04** · Next, let's change the destination to something outside and see what happens when the local route cannot help. Let's change the scenario. Our EC2 instance does not want another machine inside the VPC. It wants a server on the internet.

### Routing to the Internet

**24:19** · The destination does not belong to 10.0.0.0/16, so the local route cannot help. We need another route.

**24:28** · The route we will eventually add looks like this.

**24:31** · Destination 0.0.0.0/0, target an internet gateway.

**24:38** · The range 0.0.0.0/0 means every IPv4 destination. It is the route of last resort, usually called the default route.

**24:49** · If AWS does not find a more specific route for a destination, this one applies and sends the traffic toward the internet gateway.

**24:57** · Setting up the gateway itself is a separate job. Here, what matters is how the route table chooses.

**25:03** · That choice follows one rule, and it is the rule that explains every routing puzzle you will meet. The most specific match wins.

**25:12** · When a destination matches more than one route, AWS uses the route with the longest prefix, the largest number after the slash.

**25:20** · The local route 10.0.0.0/16 is more specific than 0.0.0.0/0, so traffic for the VPC stays local even though the default route would also match it.

**25:34** · If you later add a route for 10.1.0.0/16 pointing at another VPC, it is more specific than the default, so traffic for that range goes to the other VPC, and everything else still goes to the internet.

**25:48** · You never have to order the routes. AWS orders them by specificity for you.

**25:53** · A route table does not need only one route. It can hold many. Your own VPC stays local. Another network goes through a specific connectivity option.

**26:03** · Internet-bound traffic goes through the internet gateway, or for private subnets, a NAT gateway.

**26:09** · The targets you will meet in practice are the internet gateway, the NAT gateway, a peering connection, a transit gateway, a virtual private gateway for a VPN, a gateway endpoint, and a network interface.

**26:23** · Each one is a different answer to where next, and each has its own use.

**26:28** · One more thing.

**26:30** · The route table cannot make a path exist. AWS will not even let you create a route to a gateway that is not attached or appearing that was never accepted. But if the target gets detached or deleted after the route exists, the route stays. The console marks it as black hole and traffic sent to it disappears. When traffic disappears, the route table is the second place to look after confirming the destination address is right. So, routing tells the packet where to go.

**26:59** · But even if the route exists and the packet arrives, should the destination accept it? That is a different question with a different answer, the firewall.

### Routing vs. Security

**27:08** · Routing has one job. The route table helps the packet find its way to the destination, but one thing has to be kept separate. Just because a route exists does not mean the communication is allowed. Routing and security are two different things.

**27:25** · Take an example. An instance at 10.0.

**27:28** · 1.10 in one subnet wants to reach 10.0.2.10 in another subnet of the same VPC.

**27:36** · The VPC has a local route, so AWS knows how to move the traffic from one subnet to the other.

**27:43** · From a routing perspective, everything is fine. There is a path.

**27:47** · Now the packet reaches the destination and a different question arrives. Is this traffic allowed in?

**27:54** · That is where the firewall comes in.

**27:56** · Think of routing and firewalls as solving two completely different problems. Routing answers where this packet should go. A firewall answers whether this packet should be allowed.

**28:08** · Take an example outside networking. You want to visit a building in another city. First, you need roads that take you from where you are to that city and to the building. No road, no route, and you cannot get there. That is routing.

**28:22** · Now you reach the building and there is a security guard at the entrance.

**28:26** · Reaching the building does not mean you can enter. The guard checks whether you are allowed in. That is the firewall.

**28:34** · So, in networking, a packet can have a perfectly valid route, reach the destination network, and still be blocked because the firewall rules do not allow it. The opposite is also true.

**28:45** · You can configure a firewall rule that allows traffic on a port, but if there is no route to the destination, the rule alone cannot create a path. Both have to work together. A route to reach the destination and security rules that allow the traffic.

**29:01** · This distinction is what makes troubleshooting sane. If two resources cannot communicate, do not assume it is a firewall problem. First, ask whether there is a route between these two networks. If the route exists, then ask whether the security rules allow the traffic. That way, instead of randomly checking AWS settings, you follow the path of the packet step-by-step.

**29:25** · Inside a VPC, there are two security mechanisms to understand. Security groups, which work at the resource level, and network ACLs, which work at the subnet level.

**29:35** · Security groups are the control you will work with most often. Route tables and firewalls work on IP addresses, and nothing in a real application uses them directly.

### DNS in a VPC

**29:45** · Your application server connects to a database by a name. Users reach your site by a name, and one service finds another by a name.

**29:54** · So, let's see how names work inside a VPC because two settings and one service cover it.

**30:00** · Every VPC comes with a DNS provided by AWS, reachable at a fixed address, the base of the VPC range plus two. So, 10.0.0.2 for 10.0.0.0/16, or at the address 169.254.169.253 that works in every VPC.

**30:24** · Two VPC settings control it. DNS resolution, on by default, lets resources in the VPC use that resolver to look up names, both public internet names and AWS's own.

**30:36** · DNS host names, off by default for VPCs you create, gives each instance an AWS generated host name that resolves to its address.

**30:46** · When something inside a VPC cannot look up any name at all, one of those two settings is the first thing to check.

**30:53** · The service for names you own is Route 53, AWS's DNS service.

**30:58** · It does two different jobs, and keeping them apart avoids a common confusion.

**31:03** · A public hosted zone holds the records for a domain the internet can see. Your website's name pointing at a load balancer, mail records, and so on.

**31:13** · A private hosted zone holds names that only resolve inside the VPCs you associate with it. So, your application can reach the database at a name like db.internal without that name existing anywhere on the internet.

**31:27** · Private zones are how teams replace hard-coded private addresses with names that survive a replaced server. Change the record, not the code.

**31:36** · Route 53 also has a routing side, which means DNS can steer traffic, not just translate names.

**31:43** · Records can return different answers by health, so a failed region's address stops being handed out, by latency, so users reach the nearest region, or by weight, so a new version receives a small share of traffic.

**31:57** · That steering happens at the global level before a request even reaches your VPC.

**32:03** · The load balancer inside the VPC does the finer, faster steering between servers.

**32:08** · One habit to build now is remembering that names cache. A record's time to live decides how long resolvers keep an answer, so a changed record reaches everyone gradually.

**32:20** · Lower the TTL before a planned change, make the change, raise it afterwards.

**32:25** · And when a private name resolves to the wrong address, remember that the VPC resolver only answers for private zones associated with that VPC. A zone associated with the wrong VPC looks like DNS being broken.

**32:39** · So, names complete, where is it? The address places a resource, and the name stands in for the address.

### Module 2 Recap

**32:47** · Let's recap module two.

**32:49** · You now know how an EC2 instance gets its address, private, public, elastic, or IPv6, and what each one actually promises you. You know how route tables decide where a packet goes next, starting with the local route and moving up to the default route that catches everything else. You've seen longest prefix match decide between competing routes, and you've learned the one lesson that saves the most debugging time in this entire course. A correct route does not mean the traffic is allowed. And you've seen how DNS resolution works inside a VPC.

**33:21** · So, a name that resolves to the wrong thing, or doesn't resolve at all, is no longer a mystery.

**33:29** · That last point, routing versus firewalls, is exactly where we're headed next. A packet can now find its way to the right address. Whether it's actually allowed to get there is a completely different question, with its own set of rules, its own tools, and its own common mistakes.

**33:46** · In module three, we open up the two firewalls every AWS network has, security groups and network ACLs. See how they behave differently for the exact same request, and learn how to read flow logs so AWS tells you directly whether a packet was accepted or rejected instead of you guessing. Let's find out whether that traffic is actually allowed. Welcome to module three. Your packet can now find an address and a route. This module answers the third question this course is built on.

### Module 3: Firewalls & Access

**34:16** · Is that traffic actually allowed to get there?

**34:20** · We'll start with security groups, the firewall attached directly to a resource's network interface.

**34:26** · They're stateful, meaning an allowed request automatically allows its reply, and they only ever allow, never deny.

**34:34** · Then we move to network ACLs, the firewall that sits at the subnet boundary instead of the resource. They work completely differently. Stateless, meaning both directions need their own rule evaluated in numbered order, and capable of explicit deny rules that security groups can't do.

**34:52** · Put those two together and we'll walk one single HTTPS request through both firewalls in both directions, including the ephemeral port range that catches almost everyone the first time they hit it.

**35:04** · Then we bring in VPC flow logs, which record exactly what happened to a packet, accept or reject. So, instead of guessing which firewall blocked something, you can just read the answer.

**35:15** · And we close the module with IAM's role in all of this, least privilege, CloudTrail, and endpoint policies, because every rule we've covered so far can be changed by someone, and knowing who is allowed to change the network is its own kind of access control.

**35:31** · By the end of this module, you'll have a repeatable method for answering whether something is allowed instead of trial and error.

**35:38** · Let's open up the firewalls. Routing decides where traffic should go, but routing alone is not enough.

### Security Groups

**35:44** · Once traffic reaches a resource, something has to decide whether that resource accepts it. That is where security groups come in.

**35:53** · A security group is a virtual firewall for your AWS resources.

**35:58** · When you launch an EC2 instance, you associate a security group with it and define what traffic is allowed to reach the instance and what traffic is allowed to leave it.

**36:08** · Take a simple example.

**36:09** · We have an EC2 instance running a web application and users on the internet need to reach it over HTTPS.

**36:17** · The traffic comes from the internet, enters the VPC, and the route takes it toward the instance.

**36:23** · Before the application receives the request, the security group has to allow it.

**36:28** · So, we create an inbound rule, allow HTTPS on port 443.

**36:34** · And we say who is allowed to send it.

**36:36** · For a public website, from anywhere.

**36:39** · For an internal application, only from a specific network or from another application inside the VPC.

**36:46** · Security groups are where we define who can talk to our resource over which protocol and port.

**36:52** · Security groups have inbound and outbound rules. Inbound controls what comes into the resource. Outbound controls what leaves it.

**37:02** · Let's say our web server receives a request and then calls an application server.

**37:06** · The outbound rules on the web server's group control whether that call can leave, and the inbound rules on the application server's group control whether it can enter.

**37:16** · Now for the property that makes them easy to live with, which is that security groups are stateful.

**37:22** · Say we allow an inbound HTTPS request to our web server.

**37:26** · The user sends a request and the server needs to send a response.

**37:30** · Because the group is stateful, once the incoming request is allowed, the response is automatically allowed back.

**37:37** · You do not write a separate outbound rule for the reply.

**37:40** · The same holds the other way. If the resource initiates an allowed outbound connection, the return traffic is allowed in.

**37:48** · Security groups are also useful because you do not have to think only in addresses.

**37:52** · Take a three-tier application, web servers, application servers, a database.

**37:58** · Instead of saying the application server accepts traffic from particular addresses, create three security groups, one per tier, and write the rules in terms of groups.

**38:08** · The application server group says, "Allow traffic from the web server group on this port." The database group says, "Allow traffic only from the application server group on the database port." A new server in the web group is allowed automatically, and no address list ever needs updating. Three more facts. A security group is attached to a network interface, so it protects the resource's network connectivity, and a resource can have several groups. The effective permission is the union of everything they allow.

**38:39** · Security groups are allow-only. You write rules that permit traffic, and there is no deny rule. So, everyone except this address cannot be expressed here. And the default for a new group is to allow all outbound and nothing inbound, which is a sensible starting point. Back to the packet. It starts at a source, the route table sends it to the destination subnet, and when it reaches the resource, the security group checks whether that traffic is allowed. Route exists and group allows.

**39:10** · The resource receives the traffic. Security groups protect at the resource level. For another layer across an entire subnet, there are network ACLs.

### Network ACLs

**39:22** · We've seen how security groups protect individual resources.

**39:26** · AWS also gives us another layer of network security, the network access control list, or network ACL. And the main difference is where it operates. A security group is associated with a resource, more precisely, its network interface.

**39:42** · A network ACL works at the subnet level.

**39:45** · Take a subnet with several EC2 instances. Instead of defining a rule on each resource, a network ACL applies rules at the boundary of the whole subnet. Any traffic entering or leaving that subnet passes through the ACL.

**40:00** · So, the flow looks like this.

**40:03** · A packet is traveling toward an EC2 instance. It first reaches the subnet boundary, where the network ACL evaluates it. If allowed, it continues to the resource, where the security group applies its own rules.

**40:16** · The ACL does not replace the security group. They work at different levels, and both sit in the traffic path.

**40:23** · There is another important difference.

**40:25** · Security groups are stateful. Network ACLs are stateless.

**40:30** · We saw what stateful means. An allowed request automatically allows its reply.

**40:35** · Network ACLs do not work that way.

**40:39** · Let's say you allow inbound traffic on port 443. The response also has to leave the subnet, and because the ACL is stateless, the outbound rules must allow that return traffic explicitly.

**40:52** · This is where ephemeral ports matter.

**40:54** · When a client opens a connection to your server on port 443, the reply goes back to a high-numbered port the client chose at random, typically somewhere in the range from 1,024 up to 65,535.

**41:08** · So, an outbound rule that allows only port 443 will block every reply.

**41:14** · And the outbound rules on a network ACL almost always include that ephemeral range.

**41:20** · Another difference, security groups only have allow rules, and network ACLs support both allow and deny.

**41:29** · If you generally allow traffic from a network, but want to block one specific address range at the subnet level, an ACL can express that deny.

**41:38** · Network ACL rules are evaluated by rule number. AWS processes them in order from the lowest number, and the first rule that matches decides whether the traffic is allowed or denied. Nothing after it is considered.

**41:51** · Every ACL ends with an implicit rule that denies everything not matched above.

**41:57** · A default network ACL is created with your VPC, and it allows all traffic in and out. Subnets use it unless you associate a custom one, and you can create custom ACLs with your own inbound and outbound rules.

**42:11** · So, to compare them in one breath, security groups protect individual resources, are stateful, and contain only allow rules. Network ACLs protect traffic at the subnet boundary, are stateless, and support allow and deny.

**42:26** · For most application-level security, you will spend far more time with security groups. Network ACLs are the extra layer for a whole subnet, and the place to put a block that a security group cannot express. We now know how traffic moves with route tables, and how it is controlled with security groups and network ACLs.

### Tracing a Request Through Every Control

**42:46** · Let's take a single HTTPS request from a user on the internet to a web server in a public subnet and follow it in both directions through every control.

**42:56** · Start with the request. The user's browser opens a connection from its own address using an ephemeral source port, say 51,000, to our server's public address on destination port 443.

**43:09** · The packet enters the VPC through the internet gateway and reaches the boundary of the public subnet.

**43:15** · First control, the subnet's network ACL inbound rules.

**43:20** · The ACL needs an inbound rule allowing TCP port 443 from the source, which for a public website is anywhere.

**43:28** · Rule numbers are checked from the lowest. The first match decides.

**43:32** · Let's say rule 100 allows 443 from anywhere. The packet continues.

**43:38** · Second control, the security group on the server's network interface inbound rules.

**43:43** · It needs a rule allowing 443 from anywhere or from wherever your users are.

**43:49** · The rule exists, so the packet reaches the web server. The application answers.

**43:54** · Now the reply. The server sends a packet from its port 443 back to the user's address on port 51000.

**44:02** · Third control, the security group outbound.

**44:06** · Because the security group is stateful, it remembers that this connection was allowed in and it allows the reply out without consulting any outbound rule.

**44:15** · Fourth control, the network ACL outbound.

**44:19** · The ACL is stateless. It has no memory of the inbound packet. It sees a packet leaving the subnet to the user's address on destination port 51000 and it checks its outbound rules from the lowest number.

**44:31** · If the outbound rules allow only port 443, this packet is denied by the final implicit rule and the user's browser waits until it times out.

**44:41** · That is the mistake.

**44:43** · The fix is an outbound ACL rule that allows the ephemeral port range 1024 to 65,535 to the destinations your users come from.

**44:55** · Now, reverse the situation. The web server initiating a connection outward, for example, to download a package or call an API on port 443 somewhere on the internet.

**45:06** · Security group outbound. The default allows all outbound, so the request leaves. And being stateful, the group will allow the reply back in.

**45:16** · Network ACL outbound. Needs 443 allowed to the destination. Network ACL inbound.

**45:24** · The reply comes back to the server's ephemeral port, so the inbound rules must allow the ephemeral range from that destination.

**45:31** · Same lesson in the other direction.

**45:33** · Stateless means you write both halves of every conversation.

**45:37** · Two habits come out of this walk. First, when something works one way and not the other, or connects and then hangs, suspect the stateless layer and its ephemeral ports before anything else.

**45:49** · Second, when you troubleshoot, list the four checks in order. ACL in, security group in, security group out, ACL out.

**45:59** · And say what rule satisfies each. If you can name all four, the traffic works. If one has no answer, you have found the problem.

**46:08** · Most teams keep the network ACL permissive, allowing all in and out, and do the real work in security groups, precisely because the stateless bookkeeping is easy to get wrong.

**46:19** · That is a reasonable default, and the ACL stays available for the explicit deny that a security group cannot express.

### VPC Flow Logs

**46:27** · Route tables and firewalls are usually explained with an imaginary packet. AWS can show you the real ones.

**46:35** · VPC flow logs record a summary of every connection attempt for a VPC, a subnet, or a single network interface.

**46:43** · Each record has the source and destination addresses, the ports, the protocol, how many packets and bytes, and whether the traffic was accepted or rejected.

**46:53** · They are the single most useful tool for the question, was the packet allowed?

**46:58** · A flow log is not a packet capture. It does not contain the content of the traffic, and it records flows, summaries of a connection over a short window, rather than individual packets.

**47:10** · You choose where the records go, to CloudWatch logs or to an S3 bucket, and you choose whether to record accepted traffic, rejected traffic, or both.

**47:19** · For troubleshooting, rejected is the interesting half.

**47:23** · Read one record, and the two firewalls come together. Source 203.0.113.5, destination 10.0.1.10, destination port 443, protocol TCP, action accept. The request from the internet reached the web server and was allowed.

**47:44** · Same source, destination port 22, action reject. Someone tried to open a shell to the server, and a firewall refused, most likely the security group, which is exactly what you want to see.

**47:57** · Source 10.0.2.10, destination 10.0.3.10, destination port 5432, action reject.

**48:08** · The application server tried to reach the database and was blocked, which means the database's security group does not allow the application group on the database port, or the network ACL between the subnets is missing a rule.

**48:21** · In one line, the flow log has told you which of the two firewalls to open.

**48:26** · That is the diagnostic method, and it is fast.

**48:30** · Turn on flow logs for the interface or subnet in question. Reproduce the failing connection.

**48:35** · Filter the log for the destination address and port.

**48:39** · If there is no record at all, the packet never arrived, which means the problem is routing or addressing. Go back and check the route table and whether the destination address is right.

**48:49** · If there is a reject, the path exists and a firewall said no.

**48:54** · Check the security group first, because that is where the mistake usually is, then the network ACL. Keep in mind the order they are evaluated in is the other way round. Network ACL at the subnet edge first, and then the security group at the resource. And a reject record does not tell you which of the two said no. If there is an accept and the application still fails, networking is not your problem. The service on the far end is not listening on that port, or the application is failing after the connection opens.

**49:26** · Flow logs have limits. They do not record traffic to the VPC's own DNS resolver, and a few other AWS internal flows are excluded. They're delivered with a delay of minutes, so they're for diagnosis, not for real-time blocking.

**49:41** · And at high traffic volumes, the log itself costs money to store, which is why teams often keep them on for rejected traffic everywhere, and turn on accepted traffic only while investigating. Beyond troubleshooting, flow logs are a security record. A sudden rise in rejected connections to port 22 from one address is a scan.

**50:01** · Accepted connections from a subnet that should never talk to the database are a misconfiguration you can now prove.

**50:08** · Feed the logs into the monitoring tools your team uses, and alert on the patterns that matter.

**50:14** · The flow log is the last word on is it allowed. It shows what really happened.

### IAM Permissions for Network Changes

**50:20** · Security groups and network ACLs decide whether a packet is allowed through.

**50:25** · There is a second kind of permission that decides whether a person or a program is allowed to change the rules at all.

**50:32** · And if you leave it loose, every firewall you build can be undone by one over-permissioned account.

**50:38** · That permission lives in IAM, AWS's identity and access management, and it is the bridge between network security and account security.

**50:48** · IAM answers who may perform which action on which resource.

**50:54** · Every network object in AWS is a resource with actions that can be allowed or denied. That covers the VPC, subnets, route tables, security groups, network ACLs, gateways, and connections.

**51:07** · And the actions are create, describe, modify, and delete.

**51:13** · A policy attached to a user, a group, or a role lists the allowed actions.

**51:19** · The principle is least privilege. Grant only the actions a role needs.

**51:24** · It applies to the network like this.

**51:27** · The developer who deploys an application needs to read the network and attach security groups to instances.

**51:33** · They do not need to modify route tables or delete a VPC.

**51:37** · The platform team that owns the network needs those powers. Nobody else does.

**51:42** · Write the policies that way and a mistake in an application account cannot reroute the VPC.

**51:48** · Two habits protect the firewall rules you build.

**51:51** · First, separate who can change security group rules from who can change everything else because opening a security group to the world is the most common and most damaging network change and it should be reviewed.

**52:05** · Second, record changes.

**52:07** · AWS keeps a log of every API call in the account called CloudTrail and every change to a security group, route table, or gateway appears there with who made it and when.

**52:20** · When traffic that worked yesterday fails today, the change log is where the answer is and it pairs with the VPC flow log. One shows what the packet did, the other shows who changed the rule.

**52:32** · There is one more place IAM meets the network.

**52:35** · Some connections between networks and services can carry a policy of their own.

**52:40** · A gateway endpoint to S3 can restrict which buckets are reachable through it.

**52:45** · A resource policy on a service can restrict which VPC endpoints may call it.

**52:51** · So, is it allowed can be answered at four places for one packet. The network ACL, the security group, the endpoint policy, and the service's own policy.

**53:02** · Most of the time, the first two are the whole story. The last two are the reason an endpoint sometimes connects and still returns an access denied error.

**53:12** · That answers the question of who may change the network. Where is it? Where next? Is it allowed? Those three questions can now be answered for any packet that stays inside a VPC.

### Module 3 Recap

**53:24** · Let's recap module three.

**53:26** · You now know the two firewalls in every AWS network. Security groups, stateful and resource level allow only, and network ACLs, stateless and subnet level with numbered rules and the ability to explicitly deny. You've walked a single request through both of them in both directions, including the ephemeral port range that explains most of the connects but then hangs problems people run into.

**53:52** · You know how to read a flow log and get a direct accept or reject answer instead of guessing. And you know that IAM governs who can change any of this in the first place, which matters just as much as the rules themselves. At this point, you have every individual piece this course teaches. Where a network lives, where traffic goes next, and whether it's allowed. Module four is where we stop looking at pieces and start looking at a whole real architecture.

**54:19** · We'll bring in the internet gateway, the NAT gateway, the reason public and private subnets are separated in the first place, and the load balancer that usually sits in front of all of it. Then, we put everything from all three modules together into the three-tier VPC architecture you'll see behind most real AWS applications. Six subnets, four route tables, three security groups, and what actually happens when an entire availability zone goes down. Let's build something complete. Welcome to module four.

### Module 4: Internet & NAT Gateways

**54:51** · You know where a network lives, where traffic goes, and whether it's allowed.

**54:56** · Now, let's use all three to build something real. The architecture behind most applications running on AWS today.

**55:04** · We start with the internet gateway, the component that actually makes a subnet public, and the small but important detail that it's the route to the internet gateway that makes a subnet public, not just the presence of a public IP.

**55:17** · From there, we go to private subnets, where application servers and databases usually live, completely unreachable from the internet, and how you still reach them yourself through a bastion host or session manager when you need to.

**55:30** · Then comes the NAT gateway, which lets a private subnet's resources reach out to the internet for things like software updates without ever being reachable from it, including why you typically run one per availability zone, and what that costs.

**55:45** · We'll also compare a NAT gateway against a self-run NAT instance, so you know the trade-off between a managed service and something you operate yourself.

**55:53** · Next, load balancers, the public entry point in front of your application, how they interact with security groups, and how health checks quietly pull unhealthy servers out of rotation.

**56:05** · Everything comes together in the final lecture of this module, the complete three-tier VPC reference architecture.

**56:12** · Six subnets across two zones, every route table, every security group, and a full walk-through of what happens when one entire zone fails. By the end of this module, you'll be able to draw this architecture from memory and explain every hop in it.

**56:28** · Let's build the three-tier VPC. Inside a VPC, the local route lets every resource reach every other.

### Internet Gateway

**56:35** · Now, let's change the destination.

**56:38** · Our EC2 instance wants something on the internet, to download a package, call an external API, or serve a web application that users open in their browsers.

**56:48** · The destination is no longer inside our VPC, so we need a way to connect the VPC to the internet. That is the internet gateway.

**56:58** · An internet gateway is attached to a VPC and provides a path between the VPC and the internet.

**57:04** · But attaching it does not suddenly make every resource in the VPC reachable from the internet.

**57:09** · Say we have a VPC with two subnets and we attach an internet gateway.

**57:14** · The VPC now has a connection to the internet, but the resources in those subnets still need to know how to use it.

**57:21** · That takes us back to routing.

**57:24** · For traffic that stays inside the VPC, we have the local route. For destinations outside, we add destination 0.0.0.0/0 target the internet gateway.

**57:37** · When a resource sends traffic to an address with no more specific route, this default route sends it toward the gateway.

**57:45** · This is where the idea of a public subnet comes from and I want to get it exactly right because it is the most common misunderstanding in AWS networking.

**57:54** · There is no resource called a public subnet and no checkbox that makes one.

**57:59** · A subnet is public because of its routing.

**58:02** · If the route table associated with the subnet has a route to an internet gateway, we call it a public subnet.

**58:09** · Change the route and the same subnet becomes private.

**58:13** · So take this architecture, a VPC. Inside it, a subnet 10.0.1.0/24.

**58:21** · Its route table has the local route and the default route to the internet gateway.

**58:26** · Resources in that subnet now have a path to the internet.

**58:30** · There's still one piece missing.

**58:32** · Launch an EC2 instance in that subnet and it gets a private address 10.0.1.10, which is not routable on the internet.

**58:41** · For someone on the internet to reach it over IPv4, the instance also needs a public IPv4 address or an elastic IP.

**58:50** · And the internet gateway performs the translation between the public address and the private one.

**58:56** · So for an instance to be directly reachable from the internet over IPv4, the complete path has four pieces.

**59:03** · The VPC has an internet gateway attached, the subnet's route table sends internet-bound traffic to it, the instance has a public IPv4 or elastic IP, and the security group allows the traffic, say inbound 443 for a website.

**59:19** · Miss any one and the connection fails.

**59:22** · Assign a public address, but forget the route, and the traffic has nowhere to go.

**59:27** · Configure the gateway and the route, but block 443 in the security group, and the packet arrives and is refused.

**59:34** · The troubleshooting order follows the packet. Is there a path? Is the route right? Does the resource have public addressing? Is the firewall allowing it?

**59:44** · Add a VPC flow log and you can see which step failed.

**59:48** · For IPv6, the picture is simpler in one way and different in another.

**59:53** · Instances get globally unique addresses, so no translation is needed, but you still need the route, this time for the IPv6 default, written {colon}{colon}/0, to the internet gateway.

### Private Subnets

**1:00:06** · Take a subnet whose route table has no route to an internet gateway.

**1:00:10** · Resources in that subnet cannot communicate directly with the internet through the gateway in either direction.

**1:00:17** · We call this a private subnet, and that is a description of its routing, not a setting.

**1:00:23** · Now, a very common architecture starts to make sense.

**1:00:27** · Think about a real application. A web server that receives requests from users, an application server that processes them, and a database behind the application server.

**1:00:37** · The web server, or more often a load balancer in front of it, needs to be reachable from the internet.

**1:00:43** · The application server probably does not need to be directly reachable from the internet. The database definitely should not be.

**1:00:51** · So, the public-facing components go in public subnets, and the application servers and databases go in private subnets, communicating over private addresses.

**1:01:01** · This gives much better separation.

**1:01:03** · Public-facing resources handle incoming internet traffic. The internal parts of the application stay isolated from direct access.

**1:01:11** · Even if a security group on the database were misconfigured to allow the world, the world has no route to it because its subnet has no path from the internet gateway and it has no public address.

**1:01:23** · That is two independent walls and the private subnet is the stronger one because it is a missing route rather than a rule that could be loosened.

**1:01:32** · Private subnets change one habit, how you reach the servers inside them.

**1:01:37** · There is no public address to SSH to.

**1:01:41** · The traditional answer is a bastion host, a small instance in a public subnet that you connect to first and then hop from, locked down to your offices addresses.

**1:01:51** · The modern answer is AWS Systems Manager Session Manager, which opens a shell on a private instance through the AWS API without any inbound port at all, logged and controlled by IAM.

**1:02:05** · The instance still needs an outbound path to the Systems Manager service through NAT or through VPC endpoints, which is easy to forget.

**1:02:13** · Either way, the private subnet stays private. You enter through a controlled door rather than by opening the wall.

**1:02:21** · Now, the problem this creates.

**1:02:23** · Just because a resource is in a private subnet does not mean it should never talk to the internet.

**1:02:29** · An application server needs to download updates, install packages, call an external API, or reach a third-party service.

**1:02:37** · We want that server to initiate an outbound connection and receive the reply. We still do not want anyone on the internet to initiate a connection to it. Those are two different things and the route table as we have it cannot express the difference.

**1:02:52** · A route to the internet gateway allows both directions and having no route allows neither.

**1:02:58** · That is exactly the problem NAT solves and it is what a NAT gateway is for.

**1:03:03** · Private subnets get outbound internet access without becoming reachable from the internet.

### NAT Gateway

**1:03:09** · NAT stands for Network Address Translation and your home router is the everyday version.

**1:03:16** · A router sends every device's traffic out under one public address and remembers who asked. So, replies come back to the right device and nothing outside can start a connection in.

**1:03:27** · AWS gives you the same thing as a managed component, the NAT Gateway, and it is how private subnets reach the internet.

**1:03:35** · Follow the traffic.

**1:03:37** · We have an application server in a private subnet with the address 10.0.2.10, and it wants to reach a server on the internet.

**1:03:46** · The private subnet's route table sends internet-bound traffic to a NAT Gateway.

**1:03:51** · Destination 0.0.0.0/0, target the NAT Gateway.

**1:03:58** · The NAT Gateway itself sits in a public subnet, and that public subnet's route table sends its internet-bound traffic to the internet gateway.

**1:04:06** · So, the traffic flows. Private instance, NAT Gateway, internet gateway, internet.

**1:04:13** · When the NAT Gateway sends the traffic out, it translates the source address.

**1:04:18** · From the internet's point of view, the traffic comes from the NAT Gateway's elastic IP, not from 10.0.2.10.

**1:04:26** · The reply comes back to the NAT Gateway, which translates it back and delivers it to the original private instance.

**1:04:33** · That is the whole point. The private instance can initiate a connection to the internet. The internet cannot initiate a connection to the private instance because nothing on the internet knows about 10.0.2.10, and there is no route in.

**1:04:48** · Contrast the two route tables, and the design is clear. Public subnet, default route to the internet gateway.

**1:04:55** · Private subnet, default route to the NAT Gateway.

**1:04:59** · Two configuration facts matter.

**1:05:01** · The NAT Gateway must be created in a public subnet because it needs a path to the internet gateway. And it needs an elastic IP, which becomes the address the outside world sees for everything behind it, which is useful when a third party needs to allow your traffic by address.

**1:05:18** · Now, availability.

**1:05:20** · A NAT Gateway lives in one availability zone. If your application runs across three zones and every private subnet routes through one NAT gateway in zone A, then a failure of zone A cuts off outbound internet for zones B and C as well, and you have quietly built a single point of failure into a design that was meant to survive a zone loss.

**1:05:42** · The standard design is one NAT gateway per zone in that zone's public subnet with each zone's private subnets routing to their own gateway. That means one route table per zone for the private tier, which is why real VPCs have more route tables than beginners expect.

**1:05:59** · AWS has also introduced a regional NAT gateway that spans zones for you. So, one gateway and one route table can serve every private subnet at a different price.

**1:06:10** · The per-zone design is still the one to understand because it is what the routing shows.

**1:06:16** · Cost deserves one sentence because NAT surprises people on the bill. A NAT gateway is charged per hour and per gigabyte processed. A private subnet that pulls large data from the internet or from AWS services over the internet pays for every byte through NAT.

**1:06:33** · VPC endpoints exist partly to take that traffic off the NAT path.

**1:06:38** · For IPv6, there is a simpler equivalent.

**1:06:41** · Because IPv6 addresses are globally unique, no translation is needed. An egress-only internet gateway gives a private subnet outbound IPv6 access while blocking inbound connections, which is the same promise as NAT without the address rewriting.

**1:06:58** · The NAT gateway is a managed service.

**1:07:00** · AWS runs it and scales it, and your job is to create it and get the routing right. There is another way to get the same result, and next we compare them.

### NAT Instance

**1:07:11** · There is another way to achieve NAT and it predates the managed gateway. A NAT instance.

**1:07:18** · Instead of using the AWS managed NAT gateway, you launch an EC2 instance in a public subnet and configure it to perform network address translation.

**1:07:28** · AWS used to publish a ready-made image for this and no longer does. So, today it means setting up the forwarding rules yourself or using a community image.

**1:07:39** · The traffic flow is the same.

**1:07:41** · The private instance sends internet-bound traffic to the NAT instance. The NAT instance forwards it through the internet gateway to the internet. Replies come back through it.

**1:07:51** · Because it is an EC2 instance, you are responsible for it.

**1:07:55** · It's availability. If it stops, every private subnet routing through it loses outbound access. So, you need a plan to replace it or fail over.

**1:08:06** · It's capacity. It's network throughput is whatever its instance size allows and a busy fleet behind a small NAT instance will bottleneck.

**1:08:15** · It's operating system, patching, and security groups.

**1:08:19** · And one configuration that is easy to forget. An EC2 instance normally drops traffic that is not addressed to itself.

**1:08:27** · So, for a NAT instance, you must disable the source and destination check because its whole job is to accept traffic addressed elsewhere and forward it.

**1:08:37** · People still use one for two reasons, control and cost.

**1:08:42** · Because it is your instance, you can run additional software on it. A proxy that filters outbound destinations, extra monitoring, a custom firewall.

**1:08:51** · For a small environment or a test account, a small NAT instance can cost less than the managed gateway's hourly charge.

**1:08:59** · And in some regulated environments, a team wants to own and inspect the box that all outbound traffic passes through.

**1:09:07** · For most production architectures, the NAT gateway is the right choice. It is managed, it scales automatically, it is highly available within its zone, and it removes the operational responsibility.

**1:09:20** · The decision follows the same shape as every managed versus self-run choice in the cloud.

**1:09:25** · Take the managed service unless you have a specific reason you can name.

**1:09:30** · Do not think of them as two different networking concepts. They solve the same problem, letting private resources initiate outbound connections without being reachable from the internet.

**1:09:41** · And the route table entry looks almost the same. The default route points at a NAT gateway or at the NAT instance's network interface.

**1:09:49** · The difference is only who runs the box.

**1:09:53** · One design note that applies to both.

**1:09:55** · NAT is for traffic leaving toward the internet. It is not the way to reach AWS services privately, and it is not the way to reach another VPC.

**1:10:05** · Those have their own paths, endpoints, and peering, and sending them through NAT costs money and adds a hop for no benefit.

**1:10:14** · That completes the picture of how traffic gets in and out.

**1:10:18** · Public resources receive traffic directly from the internet. Private resources stay hidden, but can reach out when needed.

### Load Balancers (ALB & NLB)

**1:10:26** · Let's say we're deploying a web application. A user opens a browser and accesses it. The request comes from the internet into our AWS environment through the internet gateway attached to the VPC.

**1:10:39** · Inside, we have public subnets across multiple availability zones, each with a route to the internet gateway.

**1:10:46** · And in those public subnets sits the one public-facing component that most applications need, a load balancer.

**1:10:54** · AWS's load balancer for web traffic is the application load balancer, the ALB, which understands HTTP and can route by path and host name.

**1:11:04** · A network load balancer, the NLB, handles raw TCP and UDP at very high throughput.

**1:11:11** · The networking role is the same for both, and it is what matters here.

**1:11:15** · The load balancer receives requests from users on the internet and distributes them to application servers.

**1:11:21** · The application servers do not need to be in the public subnet. In the common architecture, they are in private subnets.

**1:11:29** · So, the traffic flow looks like this.

**1:11:31** · A user sends a request. It enters the VPC through the internet gateway and reaches the load balancer in a public subnet.

**1:11:39** · The load balancer forwards the request to one of the application servers in a private subnet using the local route because both are inside the VPC.

**1:11:48** · Notice what happened. The application server is serving requests from the user, but the user has no connection to the application server.

**1:11:56** · The only public entry point is the load balancer.

**1:12:00** · Security groups make that precise.

**1:12:03** · The load balancer security group, which application load balancers have always had and network load balancers gained more recently, allows HTTPS from the internet on port 443.

**1:12:15** · The application server security group allows traffic only from the load balancer security group on the application port.

**1:12:22** · Even though both are in the same VPC, we control exactly who talks to whom, and a new application server in the right group is allowed automatically.

**1:12:32** · Three networking facts about load balancers matter here.

**1:12:36** · They live in subnets you choose, one per zone, and each occupies addresses in those subnets. So, give load balancer subnets enough room.

**1:12:45** · They perform health checks on the servers behind them and stop sending traffic to any that fail, which is what turns three servers into we can lose one.

**1:12:55** · And a load balancer can itself be internal with no public address, placed in private subnets to sit in front of an internal tier, which is how the application tier is often fronted for the services that call it.

**1:13:07** · Now, the load balancer is where the public path ends and the private path begins. Everything behind it, the application servers, the database, the queues, lives in private subnets and talks over private addresses and security groups.

### Full VPC Architecture

**1:13:22** · We have learned all the pieces. The VPC, subnets, addresses, route tables, security groups and network ACLs, the internet gateway, the NAT gateway, and the load balancer.

**1:13:35** · Now, let's put them together into one architecture. The one you will see in some variation behind most applications on AWS.

**1:13:44** · Start with the VPC, 10.0.0.0/16 in one region spanning two availability zones.

**1:13:51** · In each zone, three subnets. A public subnet for the load balancer and the NAT gateway, a private subnet for the application servers, and a private subnet for the database. Six subnets in total.

**1:14:04** · Now, the route tables. The two public subnets share one table, the local route and the default route to the internet gateway.

**1:14:12** · Each zone's private application subnet has its own table, the local route and the default route to that zone's NAT gateway.

**1:14:20** · The database subnets have a table with only the local route. The database never needs the internet, so it gets no path to it at all.

**1:14:29** · Now, the security groups. Three of them.

**1:14:32** · The load balancer group. Inbound 443 from anywhere. Outbound to the application group on the application port.

**1:14:39** · The application group. Inbound from the load balancer group on the application port. Outbound to the database group on the database port and outbound 443 to the internet through NAT for updates and external APIs.

**1:14:53** · The database group. Inbound from the application group on the database port.

**1:14:58** · Nothing else.

**1:15:00** · Each layer allows only the communication it needs, and the rules are written in terms of groups, so replacing a server changes nothing.

**1:15:08** · Now, follow a user's request. It arrives at the internet gateway, reaches the load balancer in a public subnet, passes the load balancer security group on 443.

**1:15:19** · The load balancer forwards it over the local route to an application server in a private subnet, passing the application group's rule for the load balancer group.

**1:15:28** · The application server queries the database over the local route into the database subnet, passing the database group's rule for the application group.

**1:15:37** · The response retraces the path.

**1:15:39** · At no point did the user have a route to the application server or the database.

**1:15:44** · Now follow the application server calling an external API.

**1:15:48** · Its subnet's default route sends the traffic to the NAT gateway in the same zone's public subnet. The NAT gateway translates the source address and sends it through the internet gateway. The reply returns the same way. The server initiated the connection. The internet never could.

**1:16:05** · Now the zone failure. Zone A goes dark.

**1:16:09** · The load balancer in zone B keeps receiving traffic because the load balancer spans both zones and the health checks pull the zone A servers out. The zone B application servers reach the zone B database replica because the database was deployed across both zones.

**1:16:25** · The zone B private subnets route through the zone B NAT gateway, so outbound access continues. Users notice nothing because every tier existed in both zones and every route stayed inside its zone.

**1:16:38** · This is the reference architecture and the three-tier VPC download in the resources lists every subnet, route, and rule in it.

**1:16:47** · Of course, your application may differ.

**1:16:49** · Containers instead of instances, serverless functions, several VPCs, other AWS services.

**1:16:56** · The networking principles do not change.

**1:16:59** · Whenever you look at an AWS architecture, follow the packet. Where does the traffic come from? Which subnet does it enter? What does the route table say? Where does it go next? Which security rules let it continue? If you can follow that path, even a large architecture becomes readable.

**1:17:18** · We now understand networking inside a single VPC. Real architectures rarely stop there. You may need to connect one VPC to another, reach AWS services privately, connect your office to AWS, or let remote users in.

**1:17:34** · In module five, we go beyond one VPC.

### Module 4 Recap

**1:17:38** · Let's recap module four. You now know what actually makes a subnet public versus just having a public IP sitting unused in it. You know why application servers and databases usually live in private subnets and how to reach them yourself without putting them on the internet. You understand what a NAT gateway does, why it's typically deployed per zone, and how that compares to running your own NAT instance. You've seen where load balancers fit into the networking picture, not just the application picture.

**1:18:09** · And you've built the complete three-tier VPC in your head. Six subnets, four route tables, three security groups, and a zone that can fail without anyone noticing. That architecture is genuinely the capstone of this course. Everything before it was a piece. That lecture was the whole picture. Of course, your own application may look different. Containers, serverless, several VPCs, other services, but the principles underneath don't change. And that's exactly what the last module tests.

**1:18:43** · In module five, we go beyond a single VPC. Real companies rarely stop at one.

**1:18:49** · You'll need to connect two VPCs together, reach AWS services privately without touching the internet, connect an office network to AWS, or let individual remote workers in securely.

**1:19:01** · We'll cover peering, the transit gateway, VPC endpoints and private link, and VPN and Direct Connect, all organized around one simple question.

**1:19:11** · What exactly am I connecting? Let's go beyond one VPC. Welcome to module five, the final module.

### Module 5: Beyond One VPC

**1:19:19** · Everything so far has lived inside one VPC. Real companies almost never stop there, and this module is about everything that happens once you need to connect beyond it.

**1:19:30** · We'll start by naming the actual decision you're making every time someone asks you to connect one thing to another, because that one request hides several very different answers.

**1:19:40** · From there, we cover VPC peering, a direct connection between two networks where each side adds its own route and nothing is transitive.

**1:19:49** · Then the transit gateway, which replaces a tangle of peering connections with a single hub and supports transitive routing between many networks at once.

**1:19:58** · We'll look at VPC endpoints and private link, which let you reach AWS services or another company's service privately without the traffic ever touching the public internet. And we'll close the connectivity options with site-to-site VPN, Direct Connect, and client VPN for connecting an office network or individual remote users into AWS securely.

**1:20:21** · The module and the course ends with a full wrap-up that ties every module back into the three questions this entire course has been built around. Where does it live? Where does its traffic go next?

**1:20:33** · And is that traffic allowed? Plus the one extra question for anything beyond a single VPC.

**1:20:40** · What exactly am I connecting?

**1:20:42** · Let's finish the picture.

### VPC Connectivity Options

**1:20:45** · Most AWS networking starts inside a single VPC.

**1:20:50** · In a real AWS environment, a VPC rarely exists on its own. Another VPC may need to talk to it. You may need to reach an AWS service without sending traffic over the public internet. Your company may have a data center or an office that needs to connect to AWS. And individual people working from anywhere may need secure access to resources inside.

**1:21:14** · AWS gives us several connectivity options for those needs, and the challenge is not remembering their names. The challenge is understanding which problem each one solves.

**1:21:25** · So, rather than learning them as separate topics, let's build a decision framework first. It starts with one question, which is what exactly you are trying to connect.

**1:21:36** · The first scenario is simple. One VPC and another VPC and resources in both need to communicate directly. Say an application in one VPC and a shared service in another.

**1:21:50** · For one-to-one connectivity between VPCs, VPC peering is the option. A private connection between the two with routing configured so each side knows how to reach the other.

**1:22:02** · Now imagine not two VPCs, but 10, 20, or hundreds. If every VPC needs a connection to every other, the number of connections grows with the square of the count and becomes unmanageable.

**1:22:16** · That is what the transit gateway is for.

**1:22:18** · A central hub that VPCs attach to with the hub managing connectivity between them.

**1:22:25** · The second scenario is different. Your application in a VPC needs to reach an AWS service such as S3. It can use the service's public endpoint through the internet gateway or NAT. But in many environments, you do not want that traffic to leave your private path and travel over public connectivity and you do not want to pay NAT for it.

**1:22:47** · That is where VPC endpoints come in.

**1:22:50** · Private paths from your VPC to supported AWS services with no internet gateway or NAT involved.

**1:22:58** · And there is a related idea, private link, for when you want to expose your own service privately to another VPC or another AWS customer without giving them access to your whole network.

**1:23:10** · The consumer reaches the one service, not everything in it.

**1:23:15** · The third scenario moves outside AWS.

**1:23:18** · Your company has an on-premises network and it needs to communicate with your VPC. A site-to-site VPN sends the traffic over the internet encrypted between your network and AWS, which gives private secure connectivity without a dedicated physical link.

**1:23:35** · Some organizations need more.

**1:23:37** · Predictable performance, dedicated capacity, a private physical connection.

**1:23:42** · That is Direct Connect.

**1:23:45** · VPN is an encrypted tunnel over the internet. Direct Connect is dedicated connectivity.

**1:23:52** · The fourth scenario is not a network at all, but a person. Individual users working remotely need secure access to resources inside a VPC.

**1:24:01** · Client VPN lets individual devices establish that access, rather than connecting one network to another.

**1:24:09** · So, this is the framework to remember.

**1:24:11** · VPC to VPC. Peering or transit gateway, depending on scale.

**1:24:17** · Private access to a specific AWS or partner service. Endpoints and private link.

**1:24:23** · On-premises network to AWS. Site-to-site VPN or Direct Connect. Individual remote users. Client VPN.

**1:24:32** · Once you know which problem each option solves, choosing is easy.

### VPC Peering

**1:24:37** · Take two VPCs. VPC A is 10.0.0.0/16 and runs an application.

**1:24:46** · VPC B is 10.1.0.0/16 and runs a shared service the application needs, say, an internal authentication service.

**1:24:57** · Resources in A need to reach resources in B over private addresses without the internet. That is VPC peering.

**1:25:06** · A peering connection is a private link between two VPCs.

**1:25:10** · One side requests it, the other accepts it, and the two VPCs can be in the same account or different accounts, the same region or different regions.

**1:25:20** · Once accepted, the connection exists, but in AWS networking, existing is not the same as usable.

**1:25:28** · Follow the packet and you will see what else is needed.

**1:25:31** · An instance in VPC A at 10.0.1.10 sends a packet to 10.1.2.20 in VPC B.

**1:25:40** · The route table for its subnet is consulted.

**1:25:44** · The local route covers 10.0.0.0/16, which does not match.

**1:25:51** · So, we add a route. Destination 10.1.0.0/16, target the peering connection.

**1:25:59** · Now, the packet is handed across.

**1:26:02** · On the other side, it arrives in VPC B, and the destination security group must allow it from the source address or from a security group in the peered VPC if both are in the same region.

**1:26:14** · Then the reply.

**1:26:15** · VPC B's subnet route table needs a route back.

**1:26:19** · Destination 10.0.0.0/16, target the same peering connection.

**1:26:26** · Forget the return route, and the request arrives, but the reply vanishes, which is the most common peering mistake.

**1:26:33** · So, a working peering needs four things.

**1:26:36** · The connection accepted, a route on each side, and security rules on the destination.

**1:26:43** · Now for the rule that defines peering.

**1:26:46** · Peering is not transitive.

**1:26:48** · If A is peered with B, and B is peered with C, A cannot reach C through B.

**1:26:55** · Each pair needs its own connection, and traffic never passes through a peered VPC on its way to somewhere else.

**1:27:02** · A peered VPC will not forward to its internet gateway, its NAT gateway, or its other peerings on your behalf, either.

**1:27:10** · That is by design.

**1:27:11** · It keeps each connection simple, and each VPC in control of exactly who it talks to.

**1:27:17** · It is also why peering stops scaling.

**1:27:20** · 10 VPCs that all need each other means 45 connections.

**1:27:25** · Two constraints follow from how routing works.

**1:27:28** · The two VPCs cannot have overlapping address ranges because a route for 10.0.0.0/16 cannot point at both local and a peering connection at once. This is why CIDR ranges should be planned before you need them.

**1:27:44** · And there is no bandwidth bottleneck to design around. Peering runs on the AWS network at the speed of the instances themselves with the usual charge for data crossing between zones or regions.

**1:27:56** · Peering is the right choice for a small number of VPCs with a clear, stable relationship. An application VPC and a shared services VPC, a production VPC and a monitoring VPC.

**1:28:10** · When the count grows or when you also need to connect VPNs and direct connect into the same web, the one connection per pair model runs out and that is when you move to a hub, the transit gateway.

### Transit Gateway

**1:28:24** · A company grows to 20 VPCs, one per team, one per environment, a shared services VPC, a security VPC where all traffic is inspected.

**1:28:35** · Every one of them needs to reach shared services. Several need to reach each other and the office needs to reach most of them over a VPN.

**1:28:44** · With peering, that is dozens of connections, each with routes on both sides and every new VPC means touching every existing one.

**1:28:53** · The transit gateway replaces the mesh with a hub.

**1:28:57** · A transit gateway is a regional router that you attach VPCs to.

**1:29:02** · Each VPC attaches once through network interfaces the transit gateway places in subnets you choose, one per availability zone.

**1:29:11** · VPNs and direct connect attach to the same hub. Then the transit gateway routes between all of them.

**1:29:18** · Adding the 21st VPC means one attachment and one route, not 20 peerings.

**1:29:24** · Follow the packet. An instance in VPC A sends to an address in VPC B.

**1:29:30** · VPC A's subnet route table has a route, destination 10.1.0.0/16 or more simply a summary route covering all your VPCs, target the transit gateway.

**1:29:44** · The packet arrives at the hub. The transit gateway has its own route table which says which attachment serves 10.1.0.0/16 and forwards the packet into VPC B's attachment. In VPC B, the destination security group applies as always.

**1:30:01** · The reply follows the same path back.

**1:30:03** · So, VPC B's subnet route table also points the relevant ranges at the transit gateway.

**1:30:10** · Notice there are now two layers of routing. The VPC route table send traffic to the hub and the hub's route table sends it on. When traffic through a transit gateway fails, check both.

**1:30:22** · Unlike peering, the transit gateway is transitive and that is its point. A reaches C through the hub even though A and C never made a connection.

**1:30:32** · Which raises the question of control because you rarely want every VPC to reach every other. The answer is transit gateway route tables, plural. Each attachment is associated with one route table and you can have several.

**1:30:46** · Put production VPCs in one table and development VPCs in another and neither can reach the other.

**1:30:53** · Put the shared services VPCs range in both and everyone can reach it. This is how a hub can be both fully connected and segmented.

**1:31:02** · Two more things it does. It connects regions. Transit gateways in different regions can be peered with each other.

**1:31:09** · So, a global network becomes hubs connected to hubs.

**1:31:13** · And it centralizes the expensive things.

**1:31:16** · One set of NAT gateways in an egress VPC, one inspection point in a security VPC, one VPN with every other VPC routed through the hub to reach them instead of each VPC carrying its own. The tradeoffs follow the shape of any hub. It costs per attachment per hour and per gigabyte processed. So, for two VPCs, peering is cheaper.

**1:31:40** · Every packet between VPCs takes an extra hop through the hub, which adds a small amount of latency.

**1:31:47** · And a transit gateway with one default table and every VPC attached to it is a flat network with no segmentation, which is rarely what the security team wanted.

**1:31:58** · So, peering for a few VPCs with stable relationships, transit gateway when the count grows, when VPNs and direct connect need to join the same network, or when you want central egress and inspection.

### VPC Endpoints

**1:32:12** · An application server in a private subnet uploads files to S3.

**1:32:18** · Follow the packet. S3 is an AWS service with public addresses, so the traffic matches the default route, goes to the NAT gateway, out through the internet gateway, across the public path to S3 and back.

**1:32:33** · That works, and it has two problems. The traffic left your private network, which some policies forbid, and every gigabyte paid the NAT gateway's processing charge.

**1:32:45** · VPC endpoints remove both problems by giving the VPC a private path to the service.

**1:32:51** · There are two kinds, and the difference is how they show up in the route table.

**1:32:56** · A gateway endpoint is a target in a route table.

**1:32:59** · Gateway endpoints exist for two services, S3 and DynamoDB.

**1:33:05** · You create one, associate it with the route tables of the subnets that need it, and AWS adds a route. The service's address ranges target the endpoint.

**1:33:15** · Now, traffic for S3 matches that more specific route instead of the default route, goes straight to S3 over the AWS network, and never touches NAT or the internet gateway.

**1:33:26** · Gateway endpoints are free, and a gateway endpoint can carry a policy that limits which buckets are reachable through it, which is an endpoint policy.

**1:33:35** · An interface endpoint is a network interface in your subnet. For every other supported service, and there are many, S3 included if you need it reachable from an office over a private link, you create an interface endpoint in one or more subnets, one per zone for availability, and it gets a private address from each subnet's range.

**1:33:57** · DNS is then arranged, usually automatically, so that the service's name resolves inside your VPC to those private addresses instead of the public ones.

**1:34:06** · The application calls the same name, and the packet goes to a private address in its own VPC.

**1:34:13** · Because it is a network interface, it has a security group, which must allow the calling resources on port 443.

**1:34:21** · Interface endpoints cost per hour, per zone, and per gigabyte. Cheaper than NAT for the same traffic, but not free, so you create them for the services you use heavily.

**1:34:32** · The technology under interface endpoints is Private Link, and Private Link is also available to you as a provider.

**1:34:40** · Let's say your team runs an internal API that other teams'VPCs, or another companies', need to call.

**1:34:46** · Peering would give them a route into your whole network.

**1:34:49** · Instead, you put your service behind a network load balancer, create an endpoint service, and consumers create interface endpoints in their own VPCs that point at it.

**1:35:01** · They reach one service on one address.

**1:35:03** · They have no route to anything else in your VPC, and address overlap does not matter because no routes are exchanged at all.

**1:35:11** · That is the distinction to carry.

**1:35:13** · Peering and the transit gateway connect networks. Endpoints and Private Link give private access to a specific service.

**1:35:22** · Diagnosis follows the two kinds. A gateway endpoint that does not work is almost always not associated with the right route table. Check that the subnet's table has the endpoint route.

**1:35:34** · An interface endpoint that does not work is usually DNS. The name still resolves into the public address, or the endpoint security group not allowing the caller.

**1:35:45** · And an endpoint that connects but returns access denied is the endpoint policy, or the service's own policy saying no.

**1:35:53** · So, a private subnet can now reach AWS services without NAT and without the internet.

### VPN & Direct Connect

**1:36:00** · Your company has a data center with a database that the application in AWS must reach and an office where engineers need to reach private subnets.

**1:36:10** · Nothing in the VPC can see either and they cannot see the VPC.

**1:36:15** · Three options connect the outside in and they map to two different questions. Is it a network or a person and how much do you need to depend on the link?

**1:36:25** · A site-to-site VPN connects a network to your VPC over the internet with the traffic encrypted between the two ends.

**1:36:33** · On the AWS side, you attach a virtual private gateway to the VPC or use a transit gateway if you have one.

**1:36:40** · On your side, there is a customer gateway, a router or firewall that speaks the standard tunnel protocol IPsec.

**1:36:48** · AWS builds two tunnels for redundancy and it is your job to use both.

**1:36:54** · Follow the packet.

**1:36:56** · An instance sends to the office's range 192.168.0.0/16.

**1:37:03** · The subnet route table has a route for that range pointing at the virtual private gateway.

**1:37:08** · The traffic is encrypted, crosses the internet inside the tunnel and arrives at your router which delivers it to the office network.

**1:37:16** · The return route on the office router points the VPC's range back at the tunnel.

**1:37:21** · The routes on the AWS side can be written by hand or learned automatically through BGP which is called route propagation.

**1:37:29** · And each tunnel carries a fixed bandwidth which is one reason busy links move to direct connect.

**1:37:35** · A VPN is quick and cheap and its performance is whatever the internet path gives you.

**1:37:42** · Direct Connect is a dedicated physical connection between your network and AWS arranged through a co-location facility or a partner.

**1:37:50** · Traffic does not cross the public internet at all.

**1:37:54** · You get predictable latency, dedicated bandwidth in fixed sizes and often lower data transfer costs at volume.

**1:38:01** · The costs are lead time, often weeks to months to provision, and a monthly port charge.

**1:38:08** · And one physical link is a single point of failure, so serious designs order two, or pair Direct Connect with a VPN as a backup.

**1:38:17** · Direct Connect is private, but not encrypted by itself. And if the traffic must be encrypted on the wire, you run a VPN over it, or use the encryption options AWS offers on the link.

**1:38:29** · The rule between them is the one that decides most connectivity choices, which is how much you depend on the link.

**1:38:36** · A VPN is right when connectivity is useful, but the business survives a slow day. Direct Connect is right when the on-premises database is on the hot path of every request, or the data volumes make internet transfer too slow or too expensive.

**1:38:51** · Many organizations run both. Direct Connect as the primary path, VPN as the automatic backup, with routing that prefers the dedicated link and fails over.

**1:39:03** · Client VPN is for people rather than networks.

**1:39:06** · A user installs a VPN client on a laptop, authenticates with certificates or the company's identity provider, and for the session, the laptop can reach the VPC's network with an address from a separate range you allocate for clients and routes you define.

**1:39:23** · Security groups and an authorization rule on the client VPN endpoint decide what that user can reach. So, an engineer can be allowed the application subnets and denied the database subnets.

**1:39:35** · Client VPN is for people who need network access.

**1:39:39** · AWS Systems Manager Session Manager is for people who need a shell on one instance.

**1:39:45** · Whichever option you choose, the pattern does not change. A route in the VPC points the far network's range at the gateway. The far side points the VPC's range back, and the security groups on the resources decide whether the traffic is allowed.

**1:40:01** · Overlapping ranges break all three, which is the last reason to plan your CIDR before you need it.

### The Big Picture

**1:40:09** · We have covered a lot. VPCs, subnets, CIDR ranges, addresses, route tables, security groups, network ACLs, flow logs, the internet gateway, NAT, load balancers, and the ways networks and services connect to each other.

**1:40:27** · If you try to remember all of it as separate AWS services, it becomes confusing very quickly. So, let's finish by putting everything back into one simple picture.

**1:40:37** · Start with the VPC.

**1:40:39** · Your VPC is your private network boundary inside a region.

**1:40:43** · Inside it, you divide the network into subnets. And because each subnet belongs to one availability zone, subnets are also how you spread your architecture across zones.

**1:40:54** · Every resource in those subnets gets an address, and most of them are reached by a name that Route 53 resolves to that address.

**1:41:01** · That is the first question answered.

**1:41:04** · Where does it live, and what is its address?

**1:41:06** · Having an address does not tell us how to reach another resource. That is the job of routing.

**1:41:13** · Whenever a packet leaves a resource, the route table answers one question. Where should this packet go next?

**1:41:19** · If the destination is inside the VPC, the local route delivers it. If the destination is on the internet, the traffic goes through an internet gateway, or from a private subnet through a NAT gateway.

**1:41:32** · If the destination is an AWS service, it may go through an endpoint. If the destination is another network, the route points at a peering connection, a transit gateway, or a VPN or direct connect gateway.

**1:41:45** · The most specific route wins. That is the second question. Where next?

**1:41:51** · Having a path does not mean the traffic is allowed. Security groups protect the resources themselves and are stateful.

**1:41:58** · Network ACLs add a stateless layer at the subnet boundary.

**1:42:02** · Flow logs show you what happened, and IAM decides who may change any of it.

**1:42:07** · That is the third question. Is it allowed? So, whenever you are trying to understand why traffic is or is not working, do not look at the architecture as a collection of random services.

**1:42:20** · Follow the packet. Start at the source.

**1:42:23** · Where is it trying to go? Which subnet is it in?

**1:42:26** · What does that subnet's route table say, and what is the next hop?

**1:42:30** · Does the destination have a route back?

**1:42:33** · Do the security groups and network ACLs allow it in both directions?

**1:42:37** · Is there a flow log record, and does it say accept or reject?

**1:42:42** · If you can answer those questions, you can understand most VPC architectures without memorizing a single diagram, and you can find most faults in minutes.

**1:42:52** · When the architecture grows beyond one VPC, use the same thinking with one question first. What am I connecting?

**1:43:00** · Two networks, peering. Many networks, the transit gateway. A specific service, privately. Endpoints and private link.

**1:43:09** · An on-premises network, VPN or direct connect. Individual people, client VPN.

**1:43:17** · Once you know the problem, choosing the option is easy.

**1:43:20** · The biggest takeaway from this course is not a list of services. It is to think in terms of traffic. Where does it start? Where does it need to go? What route does it follow?

**1:43:31** · What security controls does it pass through? That is the way of thinking that connects everything we have learned.

**1:43:38** · AWS also offers a tool called reachability analyzer that automates this exact walk between two points and reports which hop blocked it. It is worth knowing it exists, though doing the walk by hand first is what builds the mental model.

**1:43:53** · The same diagram that answers whether traffic can get somewhere also hints at whether getting there costs money, particularly at zone boundaries, NAT gateways, and internet egress, which the cost card in the downloads covers.

**1:44:07** · The downloads carry the method with you.

**1:44:09** · The follow the packet checklist, the connectivity decision tree, the CIDR planning worksheet, the security group and network ACL card, the three-tier reference with every route and rule, the cost card, the concept map, the keyword sheet, and the interview questions for each module.

**1:44:28** · With that, we have completed the fundamentals of AWS networking. Thank you for taking this course.

### Module 5 Recap

**1:44:36** · That's every connectivity option this course covers.

**1:44:39** · Peering for two networks, a transit gateway for many, endpoints and private link for reaching a service privately, and VPN or Direct Connect for an office or a remote worker.

**1:44:53** · Each one answers the same question. What exactly am I connecting?

**1:44:58** · Just with a different shape of answer.

**1:45:01** · The final lecture of this course brings all five modules back into one method.

**1:45:05** · Follow the packet, name where it lives, name where it goes next, name whether it's allowed, and for anything beyond one VPC, name what it's actually connecting to.

**1:45:17** · That's the skill this entire course was built to hand you, and it's what makes a 20-box architecture diagram something you can read instead of something you're intimidated by.
