---
lang: en
date: 2020-05-14T11:56:28+02:00
page_id: news:oliver-ist-verschwunden
title: The strange dissapearance of Oliver
title_image: /assets/images/news/Oliver_ist_verschwunden…_title.jpg

---

Well it wasn’t really that strange, I was just on Sabbatical for one semester for the purpose of moving forward on my PhD which I am usually doing in my free time. But now that you already fell for the clickbait here is what I did during that time. First of all, I organized everything I wanted to do beforehand. I met Bill Langdon at [ICSE](http://www.icse-conferences.org/) 2019 and simply asked if I could come visit and collaborate on Genetic Improvement. I also messaged some Professors, most of which replied favorably, leading to smaller exchanges that I won’t go into detail about.[Jason Steen](https://www.linkedin.com/in/jasonfsteen) and I met by sheer coincidence at an HL7 Event and since he needed someone who knows their way around education, and I had a lot of time on my hand when he needed that someone, we planned several education sessions that eventually took place at the HL7 Workgroup Meeting in Sydney.

So for anyone looking forward to their own sabbatical – Plan everything _before_ you go on sabbatical (organizing most of this took months), and also make sure you don’t overload. All of this took a lot of work, but ultimately I learned a lot from the people I visited and have a much stronger foundation moving forward on my own work as well as continuing to collaborate with them.

### Research Stay at the University College London (UCL)

The visit to UCL was planned with a specific topic in mind – Utilizing [Genetic Improvement (GI)](http://geneticimprovementofsoftware.com/) to update or introduce code constants in code. This is a niche research area in GI, which usually deals with the improvement of the code itself. The [approach](http://www0.cs.ucl.ac.uk/staff/W.Langdon/ftp/papers/Langdon_2018_SSBSE.pdf) [was](http://www0.cs.ucl.ac.uk/staff/W.Langdon/ftp/papers/langdon_2019_GI7.pdf) [previously](http://www0.cs.ucl.ac.uk/staff/W.Langdon/ftp/papers/langdon_2019_ieeeblog.pdf) [shown](http://www0.cs.ucl.ac.uk/staff/W.Langdon/ftp/papers/langdon_2019_log2.pdf) to work really well by evolving lookup tables that were made for one mathematical function, to a lookuptable for another function, using the Covariance Matrix Adaption – Evolution Strategy ([CMA-ES](http://cma.gforge.inria.fr/)). CMA-ES is a “relatively” new algorithm in the evolutionary search domain capable of updating all of its configuration values internally during the run. It has been shown to work on a variety of global and local optimization problems.

So what we did during the collaboration at the Centre for Research in Evolution, Search and Testing ([CREST](http://crest.cs.ucl.ac.uk/about/)), is adapt the approach to become more generic, accepting any given function that can be approximated using [Newton Raphson](https://en.wikipedia.org/wiki/Newton%27s_method). The results are quite successful, for cube root even outperforming the accuracy of the calculation of the Java and C++ standard implementations. You can take a look at the resulting paper, and presentation at EuroGP 2020 [here](https://github.com/oliver-krauss/Replication_GI_Division_Free_Division). There are also some publications upcoming related to this research field.

If you get to visit London the next time, be sure to stop by at UCL and visit [Jeremy Bentham](https://en.wikipedia.org/wiki/Jeremy_Bentham), the spiritual founder of UCL, and so dedicated to his job that he is still attending board meetings even now, close to 200 years after his death.

   

### Research Stay at the University of Edinburgh

When visiting [Christophe Dubach](https://cdubach.bitbucket.io/) who is the lead of the [LIFT](https://www.lift-project.org/) project was still employed at the University. He has since moved on to [McGill](https://www.mcgill.ca/) Univesity in Montreal, which is a really beautiful city and you should consider doing a [PHD](https://cdubach.bitbucket.io/openings/) there. The LIFT project is a language and compiler written in Scala and cross compiling to OpenCL code. The target is to proide a functional language that is highly parallelized. Optimization in LIFT works based on rewriting-rules that guarantee semantic equivalence when rewriting a given LIFT function.

The focus of the collaboration lies on utilizing Genetic Algorithms to select and sequence these rewriting rules to optimize given LIFT functions, with the target of providing this as an internal compiler optimization.

   

### HL7 Working Group Meeting (WGM) 2020 Sydney

The WGM in Sydney was probably the last one happening in person for some time. Next to the usual work on HL7 Healthcare Standards, primarily HL7 [FHIR](http://hl7.org/fhir/), I helped out with the education track, teaching several of the courses. Next to the FHIR Starter (what is FHIR, how does it Work) and FHIR Arsonist (How to extend the standard towards your use cases) which you can also usually find at the [HL7 Austria](https://hl7.at/) annual meeting, I did courses on FHIR for Managers, FHIR in Australia and ChildHealthcare, Patient Summary and finally Workflow. Also concerning workflow we are currently doing a [project](https://aist.fh-hagenberg.at/index.php/de/projekte/projekt-msbpmn) on making [BPMN](http://www.bpmn.org/) and [FHIR PlanDefinition](https://www.hl7.org/fhir/plandefinition.html) [interoperable](http://build.fhir.org/ig/HL7/cqf-recommendations/branches/master/documentation-methodology.html).

Jason Steen and the whole of HL7 Australia did a lot to make the WGM successful. I would absolutely work together with them again, and look forward to any events they are doing!


<div class="gallery" markdown="1">

![](/assets/images/news/Oliver_ist_verschwunden…_gallery_0.jpg)
![](/assets/images/news/Oliver_ist_verschwunden…_gallery_1.jpg)
![](/assets/images/news/Oliver_ist_verschwunden…_gallery_2.jpg)
![](/assets/images/news/Oliver_ist_verschwunden…_gallery_3.jpg)
![](/assets/images/news/Oliver_ist_verschwunden…_gallery_4.jpg)
![](/assets/images/news/Oliver_ist_verschwunden…_gallery_5.jpg)
![](/assets/images/news/Oliver_ist_verschwunden…_gallery_6.jpg)
![](/assets/images/news/Oliver_ist_verschwunden…_gallery_7.jpg)
![](/assets/images/news/Oliver_ist_verschwunden…_gallery_8.jpg)
![](/assets/images/news/Oliver_ist_verschwunden…_gallery_9.jpg)
![](/assets/images/news/Oliver_ist_verschwunden…_gallery_10.jpg)
![](/assets/images/news/Oliver_ist_verschwunden…_gallery_11.jpg)
![](/assets/images/news/Oliver_ist_verschwunden…_gallery_12.jpg)
![](/assets/images/news/Oliver_ist_verschwunden…_gallery_13.jpg)
![](/assets/images/news/Oliver_ist_verschwunden…_gallery_14.jpg)
![](/assets/images/news/Oliver_ist_verschwunden…_gallery_15.jpg)
![](/assets/images/news/Oliver_ist_verschwunden…_gallery_16.jpg)

</div>
