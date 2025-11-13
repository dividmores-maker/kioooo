// 🔥 firebase.js
// ملف الربط الرئيسي بين الموقع وفايربيس (Firestore + Storage)

// ✅ اكتب هنا إعدادات مشروعك من Firebase Console
// تقدر تلاقيها من:
// Firebase Console > Project Settings > General > SDK setup and configuration > "CDN"
const firebaseConfig = {
    apiKey: "AIzaSyCHpkIlf8A13cL6TLggr7-3u8FM-PxzfSY",
    authDomain: "activitiescommittee-5b22c.firebaseapp.com",
    projectId: "activitiescommittee-5b22c",
    storageBucket: "activitiescommittee-5b22c.firebasestorage.app",
    messagingSenderId: "378991885059",
    appId: "1:378991885059:web:d8db039a6fc569fffb8736"
  };

// 🔹 تهيئة Firebase
firebase.initializeApp(firebaseConfig);

// 🔹 إنشاء مراجع للـ Firestore و Storage
const db = firebase.firestore();
const storage = firebase.storage();

// --------------------------------------------------
// 🧩 دالة لرفع الوسائط (صور أو فيديوهات) وتُرجع روابطها
async function uploadMedia(files, folderName = "uploads") {
  const urls = [];
  for (let file of files) {
    const fileRef = storage.ref(`${folderName}/${Date.now()}_${file.name}`);
    await fileRef.put(file);
    const url = await fileRef.getDownloadURL();
    urls.push(url);
  }
  return urls;
}

// --------------------------------------------------
// 🧩 دالة لإضافة البيانات في Firestore
// collectionName: اسم المجموعة (زي news, masses...)
// title: عنوان المحتوى
// description: التفاصيل
// files: قائمة الصور أو الفيديوهات
async function addData(collectionName, title, description, files) {
  let mediaUrls = [];
  if (files && files.length > 0) {
    mediaUrls = await uploadMedia(files, collectionName);
  }

  const data = {
    title,
    description,
    media: mediaUrls,
    date: new Date().toISOString(),
  };

  await db.collection(collectionName).add(data);
  alert("✅ تم حفظ المحتوى بنجاح!");
}

// --------------------------------------------------
// 🧩 دالة عامة لقراءة البيانات من Firestore
async function getData(collectionName) {
  const snapshot = await db.collection(collectionName)
    .orderBy("date", "desc")
    .get();
  return snapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));
}

// --------------------------------------------------
// 🧩 دالة لحذف منشور (لو عاوز تستخدمها بعدين)
async function deleteItem(collectionName, id) {
  await db.collection(collectionName).doc(id).delete();
  alert("🗑️ تم حذف العنصر بنجاح!");
}
