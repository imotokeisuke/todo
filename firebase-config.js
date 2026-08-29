// ==========================================================
// Firebase 設定ファイル（他の端末とデータを同期するための設定）
// ==========================================================
//
// このファイルを編集しなければ、アプリは今まで通り
// この端末だけのローカル保存で動作します（何も壊れません）。
//
// 他の端末（iPhone・iPad・PCなど）とデータを同期したい場合は、
// 以下の手順で値を書き換えてください。
//
// 1. https://console.firebase.google.com/ を開き、
//    Googleアカウントでログインする
// 2. 「プロジェクトを追加」から新しいプロジェクトを作成する
//    （名前は何でもOK。Googleアナリティクスは無効でよい）
// 3. 左メニュー「構築」→「Firestore Database」→
//    「データベースの作成」→ ロケーションを選び、
//    「本番環境モードで開始」を選択する
// 4. 左メニュー「構築」→「Authentication」→「始める」→
//    「Sign-in method」タブで「メール/パスワード」を有効にする
// 5. 左メニューの歯車アイコン→「プロジェクトの設定」→
//    「全般」タブを一番下までスクロールし、
//    「マイアプリ」→ </> (ウェブ) のアイコンをクリックして
//    アプリを登録する（Firebase Hostingの設定はスキップでよい）
// 6. 表示された firebaseConfig の値を、下の
//    window.FIREBASE_CONFIG にそのまま貼り付ける
// 7. Firestore の「ルール」タブを開き、README.md に記載の
//    セキュリティルールに置き換えて「公開」する
// 8. このファイルと index.html を GitHub にアップロードし直す
//
// ==========================================================

  const firebaseConfig = {
    apiKey: "AIzaSyBgpCcIalVHppZyynjwVEn0Bjf0raMl6dE",
    authDomain: "to-do-d2cf2.firebaseapp.com",
    projectId: "to-do-d2cf2",
    storageBucket: "to-do-d2cf2.firebasestorage.app",
    messagingSenderId: "310346797557",
    appId: "1:310346797557:web:e23e5945528f577d22d0bc",
    measurementId: "G-83B3F9J558"
  };
