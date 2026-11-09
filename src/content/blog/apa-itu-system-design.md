---
title: 01 - Apa Itu System Design?
date: 2026-04-05
image: /blog-images/apa-itu-system-design.webp
slug: apa-itu-system-design
description: 'Pernah kepikiran ga, lu bisa ngescroll ratusan post tanpa masalah, nontoh puluhan story, ngirim dm. Semuanya itu terasa cepet bangetnya, ga ada error, ga ada lemot lemot, meskipun lu lakuin itu semua bersamaan dengan jutaan pengguna Instagram lainnya. Apa yang terjadi di belakang? Kok bisa gitu?'
tags:
  - programming
  - system-design
---

Di tahun 2026 ini Instagram kira kira punya 3 miliar pengguna, apa lu salah satunya? Kalau iya, pernah kepikiran ga, lu bisa ngescroll ratusan post tanpa masalah, nontoh puluhan story, ngirim dm. Semuanya itu terasa cepet bangetnya, ga ada error, ga ada lemot lemot, meskipun lu lakuin itu semua bersamaan dengan jutaan pengguna Instagram lainnya. Apa yang terjadi di belakang? Kok bisa gitu?

Jawabannya adalah karena **System Design**.

---

## Karena Masalah Ini Nih!

Bayangin, lu baru aja buat sebuah aplikasi web, ada satu server, satu database, dan satu user yang baru aja sign up. Semuanya berjalan dengan lancar, semuanya happy.

Terus, alhamdulillah, aplikasi lu viral. Tiba tiba aplikasi lu punya satu juta user. Satu juta user lu itu akses server aplikasi lu di waktu yang bersamaan. Apa yang terjadi?

Server lu kebakaran. Database lu meledak karena banyaknya query yang masuk. Responsenya melambat. Dan lama kelamaan crash... Error bermunculan, user pergi dan mungkin ga akan pernah kembali lagi.

Kok bisa gitu? Padahal code lu bagus bagus aja, logicnya bener. Semua featurenya berjalan lancar.

Tapi, system nya ga didesain untuk bisa ngehandle sekian banyak cobaan.

> **Code yang bener ga cukup. Lu perlu mikirin juga gimana system yang lu buat bisa menghandle sekian banyak request, data, dan user.**

Ini inti masalah yang diselesaikan sama **system design**.

---

## Apa Itu System Design?

System design adalah proses menentukan setiap komponen yang diperlukan untuk membuat sebuah system sesuai dengan requirement yang ada. Tidak hanya menentukan saja, tapi juga menjelaskan tentang interaksi dan hubungan antar komponennya.

## Functional dan Non-functional Requirements

System design dilakukan untuk memenuhi functional dan non-functional requirement yang spesifik, karena setiap system memiliki fungsi dan tujuannya masing-masing.
Functional requirements berkaitan dengan spesifik behaviors, actions, dan features yang harus bisa dilakukan oleh sistem, atau lebih mudahnya functional requirements menjawab pertanyaan 

> "Apa yang dilakukan sistem?"

Contoh functional requirement, saat user menekan button "Buy", maka akan memproses pembelian dan mengirimkan pesan konfirmasi.

Non-functional requirements berkaitan dengan attributes, constraints, dan performance standards dari sebuah sistem, atau lebih mudahnya non-functional requirements menjawab pertanyaan

> "Bagaimana sistem bekerja?"

Contoh non-functional requirement, saat 10.000 user menekan button "Buy" bersamaan, pastikan proses pembelian dan pengiriman pesan konfirmasi tetap berjalan tanpa ada gangguan.

Non-functional requirements memastikan bahwa sebuah sistem bekerja dengan efficient, secure, reliable, dan scalable. 4 constraint utama dalam system design yaitu,
1. Availability -> Memastikan sistem selalu dapat diakses.
2. Scalability -> Memastikan sistem dapat mengatasi beban kerja yang terus bertambah.
3. Latency -> Memastikan sistem dapat dengan cepat merespon request dari user.
4. Consistenty -> Memastikan data pada sistem selalu konsisten.

Pada penerapan sebenarnya, tidak ada sistem yang secara sempurna memiliki keempat constraint sekaligus. System design adalah seni menentukan trade-off. Untuk bisa mendapatkan latency yang cepat, kadang kita harus merelakan consistency data yang sedikit tertunda.

Selain itu, sebelum kita mulai mendesain sistem, kita perlu mengetahui scale dan constraint yang akan dihadapi, contoh seberapa besar traffic yang akan dihadapi? Apakah 100 user perhari atau 10.000 user perhari? Berapa besar kapasitas penyimpanan yang dimiliki?

## High Level Design dan Low Level Design

Setelah semua requirements jelas, barulah system design merumuskan High Level Design (HLD) and Low Level Design (LLD).

High Level Design (HLD) menjelaskan tentang arsitektur dari sebuah sistem dan mendefinisikan setiap komponen dan interaksi antar komponennya. Sehingga, High Level Design (HLD) berfokus dalam scalability, performance, dan reliability dan menjawab pertanyaan "what" dan "why" dari sebuah sistem, komponen-komponen apa aja yang digunakan? Kenapa memakai database SQL? Kapan kita membutuhkan caching?

Low Level Design (LLD) menjelaskan tentang detail class dan module, logic, data structure, dan API. Sehingga, Low Level Design (LLD) berfokus dalam implementasi dan menjawab pertanyaan "how" dari sebuah sistem, bagaimana feature X bekerja?
