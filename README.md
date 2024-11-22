# FSEC plotter

This is a program for plotting data from Shimadzu Fluorescence-Detection Size-Exclusion Chromatography output files (text files).
<br>島津 Fluorescence-Detection Size-Exclusion Chromatographyのアウトプットデータ(テキストファイル)から作図を行うためのプログラムです。
![FSEC plotter](https://github.com/toasty-kj/FSECplot/assets/74779681/29bba90b-cdfc-4e92-9445-103bb9625ae6)

## feature
- plotting multiple data
<br>複数データの描画
- save plotting data as image
<br>データの保存
- automatically set default name
<br>FSEC時に設定した名前の自動抽出とデータ名の自動設定
- change title and data name (if you want)
<br>タイトル名とデータ名の変更(必要であれば)


# How to run immediately

すぐに実行するには

Download the latest version installer (Setup.exe) from [here](https://github.com/toasty-kj/FSECplot/releases/latest).
<br>[こちら](https://github.com/toasty-kj/FSECplot/releases/latest)から最新バージョンのインストーラー(Setup.exe)をダウンロードする。
![image](https://github.com/toasty-kj/FSECplot/assets/74779681/6e952326-10e0-40ea-9bf9-2bb63b2d2d45)

## all you have to do to run this app 🖱️
- Double-click the downloaded installer to run it
  <br>ダウンロードしたインストーラーをダブルクリックして実行する
- Launch the program
  <br>プログラムを起動する

<br>that's all! enjoy🤣
---

# How to edit the program プログラムを編集するには🚀

The following steps are necessary when editing the FSEC plotter program. If no editing is required, you do not need to follow these steps.
<br>下記手順はFSEC plotterのプログラムを編集する際に必要な手順です。編集が必要な場合は実施不要です。

## Initial Stage 初期段階

The steps are described assuming that the following has already been done. (If not done, please perform these steps first.)
<br>下記についてはすでに行われている前提で手順を記載します。(されていない場合は先にこちらを実施してから後続の手順を行ってください)

- Creating a github account
  <br>githubのアカウント作成
- Installing git bash
  <br>git bashのインストール

## Clone the git repository

```bash
git clone https://github.com/toasty-kj/FSECplot.git
cd FSECplot
```

## Install package パッケージのインストール

```bash
npm ci
```

## create and activate vertual enviroment pythonの仮想環境の作成とバックエンドのパッケージインストール

仮想環境の作成

```powershell
python -m venv env
env\Scripts\Activate.ps1
```

## Install python package into vertual enviroment 仮想環境にパッケージをインストールする

```bash
pip install -r requirements.txt
```

5. serve in dev mode 開発モードでプログラムを起動する

```bash
npm run serve
```

ランする際はのFSEC plotter.exeをダブルクリックで起動してください。
# electron-angular-starter
