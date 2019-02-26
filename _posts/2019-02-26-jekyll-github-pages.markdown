---
layout: post
title:  "Jekyll ve Github Pages!"
date:   2019-02-26 02:05:01 +0300
categories: jekyll
---

---

Ruby geliştiricisi Yukihiro Matsumoto:
>Açık kodlu proje, köpek balığına benzer. Hareket etmelidir, yoksa ölür!

---

Merhaba, size bu yazımda Jekyll ve Github Pages kullanarak saniyeler içinde bu web sayfasını nasıl oluşturduğumu anlatacağım. Öncelikle kısaca Jekyll ve Github Pages‘in ne olduklarından bahsedelim.

## Jekyll Nedir ? 

[Jekyll](https://jekyllrb.com/ "Jekyll") açık kaynak kodlu, MIT lisanslı, Ruby dili ile yazılmış statik bir site üreticisidir. Basit ama güçlü bir alt yapıya sahiptir. Veritabanı yazılımı kullanmak yerine Markdown ya da Textile ile Liquid şablonuyla oluşturulan içeriği işleyip, web sunucusunda host edilmeye hazır hale getirmektedir.

Github'ın kurucularından Tom Preston-Werner tarafından geliştirilmeye başlanmıştır dolayısıyla Github Pages tarafından desteklenen bir mekanizmadır. Bu da herhangi bir hosting hizmeti almadan blog sayfasınızı Github Pages üzerinden yayınlamaya imkan sağlamaktadır.

### Jekyll Kurulum ve Blog Sitesi Oluşturma

Jekyll Ruby ile yazılmış bir dil olduğu için öncelikle bilgisayarınıza Ruby‘i kurmanız gerekiyor.
Sisteminize uygun Ruby geliştirme ortamını kurduktan sonra aşağıdaki adımları uygulayın.

1. Jekyll ve Bundler gemlerini yükleyin.
```
gem install jekyll bundler
```
2. ./{proje adı} adresinde yeni bir Jekyll sitesi oluşturun.
```
jekyll new {proje adı}
```
Örn: `jekyll new kullaniciadi.github.io`

3. Oluşturduğunuz projeye gidin.
```
cd {proje adı}
```
4. Siteyi oluşturun ve yerel bir sunucuda kullanılabilir duruma getirin
```
bundle exec jekyll serve
```
Kullanılabilir duruma getirdikten sonra ***`http://localhost:4000`*** adresinden blogunuza göz atabilirsiniz.

### Github Page'e Projenizin Yüklenmesi

Bu işlemi [Github Desktop](https://desktop.github.com/ "Github Desktop") yükleyerekte yapabilirsiniz. Ben terminal üzerinden işlem yapacağım.

1. [Github](https://github.com/ "Github") adresine gidin ve yeni bir  ***"kullanıcıadı.github.io"*** adında repositories oluşturun.

2. Bilgisayar üzerinden oluşturduğunuz projeye gidin.
```
cd {proje adı}
```
3. Dosyalarınızı Github sayfasını yüklemek için aşağıdaki komutları sırasıyla çalıştırınız.
```
git init                     
git add .                    
git commit -m "first commit" 
git remote add origin https://github.com/kullaniciadi/kullaniciadi.github.io.git #
git push -u origin master    
``` 
`git push -u origin master` kodunu çalıştırdıktan sonra Github kullanıcı adı ve şifresinizi isteyecek. Kullanıcı adı ve şifrenizi girdikten sonra yükleme işleminiz gerçekleşecektir. Blog sayfanıza **https://kullanıcıadı.github.io** adresinizden ulaşabilirsiniz.

---

<a href="{{ site.github }}">{{ site.github }}</a> - Powered by Jekyll.
<div class="btn-github" style="float:right;">
    <iframe src="https://ghbtns.com/github-btn.html?user=srcemre&repo=srcemre.github.io&type=star&count=true" frameborder="0" scrolling="0" width="85" height="20px"></iframe>
    <iframe src="https://ghbtns.com/github-btn.html?user=srcemre&repo=srcemre.github.io&type=fork&count=true" frameborder="0" scrolling="0" width="85" height="20px"></iframe>
</div>
