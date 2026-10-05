---
title: "오픈 모델 돌리려면 1000만원... 그냥 Runpod에서 빌려 씁니다 | RTX 5090 + Qwen 3.8"
author: "개발동생"
site: "YouTube"
published: 2026-10-02T18:00:00-07:00
source: "https://www.youtube.com/watch?v=D_eJVFr3vLc"
domain: "youtube.com"
language: "en-US"
description: "Runpod 가입하고 RTX 5090 빌려 보기 👉 https://fandf.co/4hfBCaa이 영상은 Runpod의 유료 광고를 포함하고 있습니다.GPU 개비싸서 못 사겠더라고요. 오픈 모델 하나 돌려 보려 해도 RTX 5090이 900만 원 가까이, 본체까지 치면 천만 원은..."
word_count: 3813
---

![](https://www.youtube.com/watch?v=D_eJVFr3vLc)

## Transcript

### 오픈 모델, 이제 개인 GPU로

**0:00** · Uh, everyone, OpenModel performance has improved significantly lately, hasn't it? I've mentioned a few times in my previous videos that we should pay attention to OpenModels, and in this video, I'm going to talk about how to actually run and utilize OpenModels on personal GPUs. First, generally speaking, when we talk about using OpenModels, we can assume that to run them on personal GPU equipment, we need to use models with small parameter sizes, ranging from about 4 billion to 40 billion. So, there are currently models like these that are suitable for use.

**0:29** · However, among them, this QN 3.8 model with 27 billion parameters seems to be the most optimal OpenModel that we can realistically run on personal equipment. If you look here, the Intelligence score is listed as 34.

**0:45** · While a score of 34 isn't quite at the level of a "frontier" model right now, compared to models from about a year ago—those frontier models we used back then...For example, the Offset 4.5 model and the GPT 5 model can be seen as the models we utilized as frontier models about a year ago.

**1:02** · So, if we compare the intelligence figures when maximizing the reasoning function with these two models—specifically the QN 3.8 27 billion model—we see that the QN 3.8 model has a score of 34, Offset 4.5 has 29, and GPT 5 has 23. This confirms that even though it is a 27 billion model, it yielded the highest intelligence.

**1:26** · Of course, we must take into account that the Offset 4.5 and GPT 5 models were released around the end of last year, but you can consider this 27 billion model to be a scale that can realistically be run even on personal equipment. Typically, people purchase a lot of GPU equipment for the RTX 5090. If we look at the prices of that equipment, we can see ranges of around 9.6 million, 9.2 million, 8.9 million, and 8.7 million won— basically, prices are formed in the high 8 million to low 9 million won range.

### RTX 5090 가격, 얼마나 올랐나

**1:58** · Besides the RTX 5090, many people also purchase equipment called the DGX Spark. If we look at this equipment, prices are around 9.3 million won and 8.69 million won, which are at a level very similar to the 5090 GPU prices we saw earlier. So, roughly speaking, if we wanted to run a 27 billion dollar open model personally, we can see that it has become possible only if we invest about 10 million won.

**2:30** · In fact, the cost of such GPU equipment has risen significantly today. Uh, even the price of an RTX 5090 like this has almost doubled since its launch, so it is true that buying such equipment right away just to try running an open model can be a bit of a burden. So, in this video, I would like to introduce you to a service called RunPod, which allows you to rent and utilize GPUs on an hourly basis for exactly what you need, without having to purchase them.

### 사지 않고 빌리기, Runpod 소개

**3:00** · This video includes a paid advertisement for RunPod. To start by introducing RunPod, it is a service where you can pay an hourly fee to rent and use GPUs ranging from the RTX 5090 shown earlier to H and A100 models. So, you can think of it as a cloud service that rents out GPUs. So, in this video, I will be using RunPod's "Pod" service to rent an RTX 5090 and run the QN 3.8 8, 27 model I showed you earlier on RunPod.

**3:30** · I will also be running the test on my MacBook using a rented GPU without the physical equipment. Please consider this a tutorial on how to launch open models on RunPod. First, before we rent the GPU from RunPod, I will compare the price difference between purchasing this equipment directly and renting it from RunPod.

### 살까, 빌릴까: 손익분기 계산

**3:54** · For instance, among the RTX 5090 units I found, around 8.7 million won is currently considered a relatively affordable price range. If we were to purchase the equipment directly, it would cost around 8.7 million won. If we were to add things like a PC, it could add about 1 million won more.

**4:12** · Let's assume the cost is 8.7 million won. However, if we were to run the same RTX 5090 equipment on an hourly basis at RunPod, the price would be $ 0.99 to $ 9. If we divide 8.7 million won using the current exchange rate of around 1,300 won, we get 92 hours. If you divide 6,500 hours by 24 hours, it comes out to about 9 months. If you run it 24 hours a day for 9 months without ever turning it off, you should consider that buying the equipment outright is more cost-effective.

**4:44** · However, if you don't run the GPU equipment 24 hours a day but only use it for an hour or two, it would take about 9 years to recoup the cost of buying a GPU outright. For reference, this figure only includes the cost of the graphics card; it does not account for other expenses such as purchasing a PC or electricity bills. So, the conclusion is that if you plan to buy GPU equipment and run it 24 hours a day , buying a GPU is likely the more advantageous option.

**5:11** · However, if you only run the GPU occasionally or want to test the performance of the equipment yourself before purchasing, I highly recommend trying the RunPod introduced in this video. Okay, so now we’re going to create a Pod. You can enter by clicking on this Pod in the Resources section. Then, the window for creating a Pod will appear. First, we need to set up the workload that will run the Pod. At the bottom, we are going to set up the GPU machine.

### Pod 만들기 ① vLLM 템플릿 설정

**5:38** · Once the GPU machine is set up, we plan to run the LLM model QN 3.8. So, we will set the workload to serve that QN 3.8 model as an API. If you click on " Explore" here, you will see various templates provided by Pods. Since we are going to use VLM, please select VLM . Click on that, and then click "Set Override" to overwrite a few settings.

**6:10** · First, the container image version is currently set to the latest version, so we will fix this version. Please set the version to 0.29.00, not the latest version. I will add the guest link to the description section; if you follow it, look at the very bottom where I have placed the command. You can copy this and replace the container start command accordingly. For the container disk, 60GB should be sufficient.

**6:36** · Below that, you can leave the volume mount path and HTTP port at their default values. If you expand the environment variables here, you will see two variables listed. I will only change the first one: the VLM API Key. By default, your RumPods partition value is entered in this format. You can use this as is, but it is not a very secure key value.

**7:06** · For example, I will generate an API key using a site called a " random keygen," copy it from here, and use it. Now, if you look next to the key value here, you will see a key icon ; please click on that. Next, let's create a secret. Click "Create Secret," enter a name of your choice—such as " My Key"—and paste your API key value here. Then, save it. Once you select the secret and enter the API key value you just created, it will be added.

**7:37** · You need to remember this key value well, as we will use it later when calling the QM model via the LM API. We have now clicked "Override" to complete the VLM workload setup. Below that, you can select the compute GPU or CPU, but let's apply a filter first. If you click "Filter," you can specify the type to search for when looking for GPUs. The first option is "Cloud Type."

### Pod 만들기 ② GPU 고르기 (Secure vs Community)

**8:08** · There are broadly two types of Cloud Types. The first is the Secure type, and the second is the Community type. I would explain that the Secure type is a method where RunPod uses GPUs located in a data center. On the other hand, the Community type refers to a method where RunPod does not operate its own data center but instead rents GPUs from small hosts or individuals certified by RunPod. So, in a way, you can think of the CQ type as a more reliable and secure option.

**8:37** · Basically, you should assume that the Secure type is slightly more expensive than the Community type.

**8:45** · Since we are testing in this video, we will select the Community type. If you scroll down a bit, you can set the CUDA version as well; please set all versions to 13 or higher. We will set the CUDA version to 13.1 and then click Apply Filter to apply the changes. We can select the GPU that fits the filter ; here, please select the RTX 5090 GPU like this. As you can see, the GPU cost is $ 0.69.

**9:18** · Since we selected the Community type earlier, you can view this as a slightly lower cost. If you had selected the CQ type, the hourly cost would have been $ 0.99 or $ 99. As for the container disk cost, we allocated 60GB of disk space to the container, so you can consider the fee for that 60GB to be $ 0.008, or $ 8.

### 배포하고 웹 터미널로 확인

**9:44** · After setting the rest to the default values, if you click Deploy, the Pod will be deployed, so let's click Deploy . It will probably take about 10 minutes. If you come over to the Logs tab here, you can check the current download status. And later, once the deployment is complete, the HTTP service here on the Connect tab will change to a Ready state. If you click on the VM server here to enter, your Pod's HTTP address will appear like this.

**10:14** · We will be making API requests from the Codex using this address later , so please check this address then.

**10:23** · Also, you can consider the part at the beginning of this address as your Pod ID. For now, please make sure to copy this address. Once it changes to a Ready state like this, you can consider everything ready. From here, you can connect directly to a terminal from your local machine using SSH, or if you want to do it more conveniently, you can simply use the Web Terminal feature here. In this video, we will try using the Web Terminal. If you activate the Web Terminal like this, a button to access the terminal will appear.

**10:53** · Let's click the button here to enter the terminal. We have now connected to the web terminal so that we can use it. To check if the GPU we borrowed has been installed correctly, please enter the command called \` Nv Dia SMI\`. This will allow you to confirm that the G-Force RTX 5090 GPU is working properly. Next, we will use the \` ecur\` command to actually call a model and see if it is being detected correctly.

**11:20** · After calling the model in this way, we confirmed that the QN 3.8 27 billion model is being detected correctly. You can check the \` ecur\` command in the guide link I shared. Also, to perform a simple conversation test, we will send a message saying, "Hello, who are you?"

**11:38** · After sending it, we confirmed that we received a proper response saying, "It is a large-scale language model developed by Alibaba Group." Thus, we have confirmed that the Pod has launched successfully and the QN 3.8 27 billion model is running smoothly on the GPU. Now, let's try connecting this to the Codex. To add this to the Codex, you need to modify the config.tl.toml file. You could modify the global directory, but creating a separate Codex RunPod config file in the Home directory makes management a bit easier , so I will create it in this path.

### Codex에 연결하기

**12:10** · You can open that path using a code editor or similar program. I have used the cursor to open the config file like this. You just need to enter these settings here. I have already shared a draft of the settings with you, so please copy what is here and paste it into the settings. Then, you only need to change the Base URL. You just need to change the URL that appears before the URL version.

**12:40** · I mentioned that URL earlier, right? If you look at the Connect tab in your Pod, click on the VLM server here. You can consider the URL shown here as the HTTP URL. Copy that URL and change the part before the version like this. Then, save it. Also, remember the API key value we issued at the very beginning? You need to have recorded that carefully.

**13:04** · If you click on the Pod, the key value you entered here in the Environment Variables section is the key value you need to keep. I recorded the key value I created earlier, so enter that key value into your Environment Variables.

**13:24** · Then, set the Codex Home path to the project path where we created the config.toml (toml) file a moment ago, and then you just need to run the Codex . I will use the export command to insert the VLM API key. After entering the key value I received into the export field, I have now navigated to the RunPod demo folder. I will run the Codex from that folder.

**13:47** · I will set the Codex Home to the Codex RunPod path, and then enter the actual Codex execution command to launch the Codex like this. Once the Codex is launched, you can see that the QN 3.8 27 Billion model is selected. I am going to try creating a simple Python file and requesting it to print. The code generation speed seems to be very fast.

### Codex로 코딩 테스트, 추론 강도 바꾸기

**14:15** · Having confirmed that numbers from 1 to 10 are printed correctly in the Hello Pi application, I will now try submitting another request to see if it runs successfully. Wow, the printing speed seems much faster than I expected . And if you want to change the port level, I have already entered it into the configuration file. So, I will try changing it to the port level. First, close the Codex again. If you look here in the Codex configuration file, the Model Reasoning is set to Low, but I will change this to X High.

**14:47** · After changing it to X High and saving, I entered the Codex execution command again to run the Codex like this. This time, I changed the port to X High Reasoning for QN 3.8 27 Bion. Since there are already many benchmarks and results available regarding Q&amp;Model performance, I will wrap up my testing here. I have now deployed a 5090 GPU using the 'Pod' feature in a service called RunPod.

### 실제 요금 확인, Stop과 Terminate

**15:18** · You can consider the total cost per hour, including the computer, GPU, and container costs, to be $ 0.70. I have kept this GPU running for 47 or 48 minutes now, but it hasn't even reached $ 0.70 yet. So, you can view this as me using the 5090 GPU for almost an hour for less than $ 0.70 or $ 70,000. Therefore, if you decide you no longer need the GPU while using it, you can simply turn it off. You just need to press the Stop button here.

**15:51** · When you press the Stop button, it will ask if you want to terminate the Pod.

**15:55** · If you press Stop Pod here, the GPU will be shut down. However, just because it has come to this point does not mean the Pod has been completely deleted. If you look here, there is also a button called "Termine." When we stopped the Pod earlier using the "Stop " button, it only halted GPU billing; it left the Pod intact so that we could restart it with the same settings at any time later. You can view "Stop" as that.

**16:23** · However, if we press "Termine," you can consider the entire Pod to be completely deleted. Therefore, if you do not terminate it, you may still incur costs for the disk volume even while it is in a stopped state. So, if you do not plan to use the Pod for an extended period, I recommend pressing " Termine" to completely shut down the Pod. So, we have now completely shut down the Pod. Now, let me share my honest impressions of using the RunPod service.

### 직접 써 본 소감

**16:55** · First off, I would say that the speed itself was quite a bit faster than expected. It seems to have achieved the speeds typically seen when creating, modifying, and fixing files using a coding agent. Furthermore, considering that this is a 27 billion dollar model, the quality of the code was surprisingly well-made. Therefore, simple coding tasks and daily operations involving testing and fixing issues proceeded without any major issues.

**17:21** · Of course, it naturally doesn't reach the performance level of current models like Astropla or Fable, but given that this is an open model capable of running on our local machines, I felt it demonstrated excellent performance. Also, launching the Pods takes a bit longer than anticipated. I would say it took about 10 to 15 minutes for the server to be ready. Uh, 10 to 15 minutes might seem like a long time to some, while others might think they can tolerate that amount of time.

**17:52** · If you have a pattern of using the server for four or five hours a day, turning it off, and then using it again for four or five hours the next day, then I think you should utilize the feature called Pods.

**18:05** · However, if you want to activate and use elements like image generation models in your service only when a request comes in, you should consider using serverless resources rather than Pods. I plan to cover the use of serverless resources later if the opportunity arises. If you are curious about serverless computing, please feel free to leave comments. Also, when setting up this VLM workload, it is recommended to set the version to a fixed value for more stable operation.

### 안정적으로 쓰는 팁 (버전 고정, API 키)

**18:34** · Therefore, please consider the settings I shared as having used version 0.29 as a fixed value. Regarding the VLM API key, anyone with the key value can request the API simply by knowing your Pod address. Consequently, you must manage this key carefully to ensure it is never leaked externally. I would recommend that instead of using the default Pod ID, you create your own key , store it in a RunPod Secret, and retrieve it for use; this approach offers a safer user experience.

**19:06** · So, I think I will be using RunPod quite often in the future. I expect to use it frequently by running GPUs on it to test new open models when they are released. Also, when I conduct corporate training these days, if I share API keys with students, I can launch them on RunPod. For instance, if I run two or three RunPod instances and share the endpoint, I only have to pay an hourly cost.

### 이럴 때 빌려 쓰세요

**19:33** · Since that cost remains the same regardless of how many API calls are made within the resource, I think it can be very useful in such situations as well. Furthermore, if our team wants to try using an open model together or test it, instead of buying expensive GPU equipment right from the start, setting it up on RunPod and testing it there could be a good way to utilize it.

**19:55** · Alternatively, the biggest advantage of RunPod is that you don't have to use it for tasks that strictly require a GPU 24/7; instead, you can rent it only when you need it and return it when you don't. So, for example, whether you are building an in-house legacy system for the first time or fine-tuning a model, I would say it is extremely useful for tasks that require heavy GPU usage in a short period of time before being finished.

### 기존 클라우드 대비 요금, 마무리

**20:22** · Furthermore, if you look at the pricing policy for renting GPUs here, you can see that it is significantly cheaper than traditional cloud providers. In some cases, the cost difference compared to existing cloud services can be up to 90%, so when you are considering using GPUs, I recommend comparing various cloud services and verifying just how cost-effective RunPod is. I plan to organize and share the settings and setup methods used in this video via links in the description section.

**20:53** · Please try using it by following the guide I am sharing exactly as is. If you have any questions, please leave them in the comments, and I will answer them. I also hope you will sign up via the link in the description and give it a try.

**21:06** · For those who need a GPU, instead of buying an expensive one right away, I recommend renting one from RunPod first to test it out and then making a decision based on cost-effectiveness. I will wrap up this video here and look forward to seeing you again with a better one next time.
