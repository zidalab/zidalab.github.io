---
title: "ZidaLab - 团队成员"
layout: gridlay
excerpt: "ZidaLab 团队成员"
sitemap: false
permalink: /zh/team/
lang: zh
---

# 团队成员

## 课题组负责人

<div class="row">
<div class="col-sm-6 clearfix">
  <img src="{{ site.url }}{{ site.baseurl }}/images/teampic/Zida.jpg" class="img-responsive" width="25%" style="float: left" />
  <h4><a class="team-member-link" href="{{ site.url }}{{ site.baseurl }}/zh/zidali/">李自达</a></h4>
  <i>副教授</i> <br>
  email: zidali AT szu.edu.cn<br>
  <ul style="overflow: hidden">
  <li>美国密歇根大学博士（2013-2018）</li>
  <li>香港大学研究助理（2012-2013）</li>
  <li>中国科学技术大学学士（2008-2012）</li>
  </ul>
</div>
</div>

## 核心成员

{% assign number_printed = 0 %}
{% for member in site.data.team_members %}

{% assign even_odd = number_printed | modulo: 2 %}

{% if even_odd == 0 %}
<div class="row">
{% endif %}

<div class="col-sm-6 clearfix">
  <img src="{{ site.url }}{{ site.baseurl }}/images/teampic/{{ member.photo }}" class="img-responsive" width="25%" style="float: left" />
  <h4><a class="team-member-link" href="{{ site.url }}{{ site.baseurl }}/zh/team/{{ member.name | slugify }}/">{{ member.name_zh | default: member.name }}</a></h4>
  <i>研究生</i> <br>
  email: {{ member.email }}
  <ul style="overflow: hidden">

  {% if member.number_educ == 1 %}
  <li> {{ member.education1_zh | default: member.education1 }} </li>
  {% endif %}

  {% if member.number_educ == 2 %}
  <li> {{ member.education1_zh | default: member.education1 }} </li>
  <li> {{ member.education2_zh | default: member.education2 }} </li>
  {% endif %}

  {% if member.number_educ == 3 %}
  <li> {{ member.education1_zh | default: member.education1 }} </li>
  <li> {{ member.education2_zh | default: member.education2 }} </li>
  <li> {{ member.education3_zh | default: member.education3 }} </li>
  {% endif %}

  {% if member.number_educ == 4 %}
  <li> {{ member.education1_zh | default: member.education1 }} </li>
  <li> {{ member.education2_zh | default: member.education2 }} </li>
  <li> {{ member.education3_zh | default: member.education3 }} </li>
  <li> {{ member.education4_zh | default: member.education4 }} </li>
  {% endif %}

  {% if member.number_educ == 5 %}
  <li> {{ member.education1_zh | default: member.education1 }} </li>
  <li> {{ member.education2_zh | default: member.education2 }} </li>
  <li> {{ member.education3_zh | default: member.education3 }} </li>
  <li> {{ member.education4_zh | default: member.education4 }} </li>
  <li> {{ member.education5_zh | default: member.education5 }} </li>
  {% endif %}

  </ul>
</div>

{% assign number_printed = number_printed | plus: 1 %}

{% if even_odd == 1 %}
</div>
{% endif %}

{% endfor %}

{% assign even_odd = number_printed | modulo: 2 %}
{% if even_odd == 1 %}
</div>
{% endif %}

## 本科生

{% assign number_printed = 0 %}
{% for member in site.data.students %}

{% assign even_odd = number_printed | modulo: 2 %}

{% if even_odd == 0 %}
<div class="row">
{% endif %}

<div class="col-sm-6 clearfix">
  <img src="{{ site.url }}{{ site.baseurl }}/images/teampic/{{ member.photo }}" class="img-responsive" width="25%" style="float: left" />
  <h4>{{ member.name }}</h4>
  <i>{{ member.info }}</i> <br>
  email: <{{ member.email }}>
  <ul style="overflow: hidden">
  {% if member.number_educ == 1 %}
  <li> {{ member.education1 }} </li>
  {% endif %}
  {% if member.number_educ == 2 %}
  <li> {{ member.education1 }} </li>
  <li> {{ member.education2 }} </li>
  {% endif %}
  {% if member.number_educ == 3 %}
  <li> {{ member.education1 }} </li>
  <li> {{ member.education2 }} </li>
  <li> {{ member.education3 }} </li>
  {% endif %}
  {% if member.number_educ == 4 %}
  <li> {{ member.education1 }} </li>
  <li> {{ member.education2 }} </li>
  <li> {{ member.education3 }} </li>
  <li> {{ member.education4 }} </li>
  {% endif %}
  </ul>
</div>

{% assign number_printed = number_printed | plus: 1 %}

{% if even_odd == 1 %}
</div>
{% endif %}

{% endfor %}

{% assign even_odd = number_printed | modulo: 2 %}
{% if even_odd == 1 %}
</div>
{% endif %}

## 已毕业核心成员

{% assign number_printed = 0 %}
{% for member in site.data.alumni_members %}

{% assign even_odd = number_printed | modulo: 2 %}
{% if even_odd == 0 %}
<div class="row">
{% endif %}

<div class="col-sm-6 clearfix">
  <img src="{{ site.url }}{{ site.baseurl }}/images/teampic/{{ member.photo }}" class="img-responsive" width="25%" style="float: left" />
  <h4>{{ member.name_zh | default: member.name }}</h4>
  <i>{{ member.duration_zh | default: member.duration }} <br></i>
  论文题目：{{ member.thesis_zh | default: member.thesis }}<br>
  目前去向：{{ member.current_zh | default: member.current }}
  {% if member.education1_zh or member.education1 %}
  <ul style="overflow: hidden">
    <li>{{ member.education1_zh | default: member.education1 }}</li>
  </ul>
  {% endif %}
</div>

{% assign number_printed = number_printed | plus: 1 %}

{% if even_odd == 1 %}
</div>
{% endif %}

{% endfor %}

{% assign even_odd = number_printed | modulo: 2 %}
{% if even_odd == 1 %}
</div>
{% endif %}

## 已毕业本科生

{% for member in site.data.alumni_undergrads %}
<h4>{{ member.name_zh | default: member.name }}</h4>
<i>{{ member.duration_zh | default: member.duration }}</i><br>
目前去向：{{ member.current_zh | default: member.current}}
{% endfor %}
