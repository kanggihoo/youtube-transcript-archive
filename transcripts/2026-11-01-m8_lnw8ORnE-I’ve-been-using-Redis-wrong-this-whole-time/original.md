---
title: "I’ve been using Redis wrong this whole time..."
author: "The Coding Gopher"
site: "YouTube"
published: 2026-11-01T08:45:12-08:00
source: "https://www.youtube.com/watch?v=m8_lnw8ORnE"
domain: "youtube.com"
language: "en"
description: "🖤 Check out Neon: https://neon.plug.dev/w4tqzme🎓 My System Design course: https://codinggopher.com/courses/system-design?utm_source=youtube&utm_campaign=m8..."
word_count: 1949
---

![](https://www.youtube.com/watch?v=m8_lnw8ORnE)

## Transcript

**0:00** · Redis is an open source in-memory key-value database, and it happens to be blazingly fast. Created in 2009 when apps like Twitter were growing exponentially and desperately needed faster data delivery, Redis changed the game. It proved that by reading and writing data directly from the main computer memory instead of a slow disk, you could achieve a true sub-millisecond latency. Historically, it's been viewed strictly as a temporary caching layer to slap in front of a heavy relational database. But, here is where your mind is about to be blown. Using Redis only as a cache is a massive waste of its talents.

**0:30** · With advanced persistence, clustering, and rich querying modules, modern Redis can act as a fully capable primary database. Yet, if you walk into a system design meeting and suggest using Redis as your primary database, your tech lead will probably report you to HR for architectural terrorism. But, why? It comes down to two major misconceptions. First, that because data lives in RAM, it must be ephemeral and easily lost. Second, that a simple key-value store cannot handle complex data structures, queries, or transactions.

**0:59** · Today, we are going to completely debunk those myths and take a deep dive into the core architecture of Redis to show you what it is actually capable of. Before we address those misconceptions, let's look at the engine under the hood. Why is Redis fast enough to handle millions of operations per second? At its core, Redis executes your commands using a single-threaded event loop. By utilizing OS-level IO multiplexing like epoll or kqueue, Redis completely bypasses the massive CPU overhead of thread context switching and lock contention.

**1:28** · Because command execution is serialized, it maximizes CPU cache locality. Every read and write happens directly in RAM with zero disk seek latency, meaning interacting with the database happens in microseconds.

**1:41** · So, let's address that first major concern, volatility. If everything happens in RAM, what happens when the server loses power? While Redis reads and writes from RAM, it simultaneously syncs its data to the disk. This means the database is fully durable through two distinct mechanisms. First is RDB or Redis database snapshots. At scheduled intervals, Redis invokes an OS-level fork command.

**2:04** · Thanks to the operating system's copy-on-write memory management, a background child process safely writes a compressed binary snapshot of your entire database directly to disk without ever blocking your active memory thread. And then there is AOF or append-only file. This is a continuous write-ahead log. Every single write command is logged sequentially to a disk file. configure this to sync every second or even sync on every single write using fsync always for maximum data safety.

**2:33** · If your server crashes, Redis boots back up, replays the append-only file log, and restores your exact state. So, Redis database and append-only file are the two primary data persistence mechanisms built into Redis. RDB creates compact point-in-time snapshots of your data set at timed intervals, while AOF logs every individual write command received by the server to disk in real time. But persistence is only half the battle.

**3:00** · Running a single database instance means you are one hardware glitch away from an outage, and RAM is finite. Redis handles reliability and scale through two distributed topologies. For high availability, you use Redis Sentinel.

**3:14** · It's a distributed monitoring system that constantly checks the health of your primary node using a quorum. If the primary goes offline, the Sentinels initiate a distributed vote, automatically promote a read replica to be the new primary, and broadcast the new routing topology to your clients for automated failover. When your application scales so large that your active data can no longer fit into a single machine's RAM, you use Redis Cluster. This splits your data set across multiple physical nodes using a mathematical mapping system called hash slots.

**3:46** · The cluster is divided into exactly 16,384 logical slots, which are routed using a CRC16 hashing algorithm. This allows you to horizontally scale out 2 TB of data across multiple physical shards. So, to recap, Redis Sentinel provides high availability and automatic failover for a single primary replica Redis setup, and Redis Cluster provides horizontal scaling by sharding data across multiple primary nodes while also handling high availability.

**4:16** · Now that we know the data is safe and scalable, let's address the second major concern. It's just a simple key-value store. In reality, Redis is a data structure server. You store data naturally exactly how you would in your favorite programming language. It supports strings and bitmaps. So, yes, Redis does hold strings, but a Redis string can be up to 512 MB.

**4:37** · It also supports atomic counters or INCR, and because strings are binary safe, you can use them as bitmaps to track millions of boolean values like active daily users in just a few megabytes of memory. Then there's Redis lists, which behave like linked lists. This gives you constant O of 1 inserts at the head or tail, making it perfect for activity streams or chronological timelines using LPUSH and RPOP. Sets. These are unordered collections of unique strings.

**5:06** · You can run server-side mathematical set operations like computing the intersection or center of two users' friends' lists to find mutual friends instantly. Also, hashes. This is perfect for storing complex objects. You can target, retrieve, or update individual fields inside a hash instantly using HGET or HSET in constant time. And then there's sorted sets or ZSETs. If you want to build a high-performance leaderboard, a sorted set uses a hash table combined with a skip list under the hood.

**5:37** · It maintains your data in a pre-sorted state, allowing you to fetch top rankings in logarithmic or O of log n time. Because RAM is premium real estate, you do not store 5-year-old cold financial tax records, heavy analytical reports, or massive historical logs in RAM. For cold, deeply structured relational data, you still need a heavy-duty, highly durable SQL database.

**5:59** · And when you do, you want to use today's sponsor, Neon. Neon is a fully managed serverless Postgres platform built specifically for the cloud. They've re-engineered Postgres by separating compute from storage. My absolute favorite part about Neon is database branching. Just like you branch your code in Git, Neon lets you instantly branch your Postgres database to test a risky schema migration safely with zero impact on production. Plus, because Neon is true serverless, it automatically scales compute based on your application's workload and scales down to zero when it's not in use.

**6:30** · Use Redis for your sub-millisecond hot paths and pair it with Neon for your serverless Postgres cold storage anchor. Neon is my go-to fully managed serverless Postgres service that supports auto-scaling, scale to zero, instant database branching, point-in-time recovery, and connection pooling and drivers. Check out Neon using the link in the description. Now, back to Redis. Of course, storing all these rich data structures in RAM brings up the elephant in the room. RAM is expensive.

**6:57** · What happens when the database fills up? a highly sophisticated memory management engine. You configure a max memory limit, and when Redis hits that limit, it uses an eviction policy. If you are using Redis strictly as a cache, you might use all keys LRU or least recently used, which automatically evicts the oldest, least accessed data to make room for new data. However, if you are using Redis as a primary database, you configure the policy to no eviction.

**7:25** · This tells Redis to never delete your data automatically, ensuring your primary records remain safe and simply returning an error on write if you run out of physical memory. If the primitive data structures aren't enough, modern Redis stack supports a multi-model architecture via native add-on modules that extend its capabilities. For example, Redis JSON. This allows you to structure your data hierarchically, just like a document-oriented database, supporting deep JSON path queries and atomic updates to nested arrays. Also, Redis search.

**7:55** · It turns your database into a full-text search engine, complete with typo tolerance, fuzzy matching, and secondary index indexing. Also, vector search. This \[music\] is built directly into the Redis search module, and it allows you to natively store high-dimensional vectors alongside your JSON documents using hierarchical navigable small worlds graph algorithms to find approximate nearest neighbors for AI and rag workloads. Now, let's talk about why Lua scripting is used in Redis. In standard application development, updating data often requires a read, modify, write cycle.

**8:28** · Your application reads a value from Redis, decides what to do based on that value, and writes a change back. Because these steps happen over a network, a race condition can easily occur if another client modifies the same data in the split second between your read and write. Traditionally, fixing this requires building complex, slow, and deadlock-prone distributed locks. Lua scripting solves this fundamentally by moving your application logic directly onto the Redis server, turning multi-step operations into a single network request with built-in data safety.

**8:56** · Redis achieves this safety by executing the entire Lua script sequentially from start to finish without letting other client commands interrupt. For single instance deployments or single hash slot operations in a cluster, this design completely eliminates multi-client race conditions. However, this execution model introduces two core architectural tradeoffs. Because Redis processes the script in an unbroken loop, a poorly optimized CPU-heavy script will temporarily block all other incoming database traffic until it finishes. So, that's the performance bottleneck.

**9:27** · There's also a lack of rollbacks. This atomicity guarantees isolation, but it does not provide relational-style transactional safety. Redis Lua scripts lack automatic rollback capabilities. If a runtime error occurs midway through execution, any database mutations performed prior to the failure remain permanently applied in memory. So, ultimately, developers must write deterministic, self-contained scripts, and handle partial state failures manually to harness the full power of Lua in Redis. Finally, Redis isn't just about storing state. It is built for moving data in real time.

**9:58** · It natively supports pub/sub for lightweight fire and forget messaging. If you need something more robust, it features Redis Streams, which provides a persistent append-only log of events. With streams, you can use consumer groups to securely distribute incoming jobs to available backend workers, track which worker is processing which job in a pending entries list, and expect an explicit acknowledgement or ack. This gives you complex, robust event-driven architecture directly inside your primary data store.

**10:27** · So, the TLDR is that Redis Streams is a data type that acts like an in-memory append only log. It lets you record events in order, save message history, and let multiple workers process jobs safely using consumer groups without losing data if a client goes offline.

**10:44** · To really level up as a software engineer, you have to build hard things. That's why I highly recommend CodeCrafters. Instead of building basic apps, they guide you through building real developer tooling from scratch.

**10:54** · You'll write your own working versions of Redis, Git, Kafka, Docker, and even modern AI tools like Cloud Code. It completely changes how you understand software. Check the description for a link that automatically applies a 40% discount to your account. Also in the description is a link to my free newsletter, where I share exclusive deep dives on system design and real-world backend development. The stuff you won't find in basic coding tutorials.
