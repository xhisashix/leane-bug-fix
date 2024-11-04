# 進め方

1. 環境構築
2. プログラムの実行方法の確認
3. 問題を解く

## 環境構築

### 1. リポジトリをクローン

```bash
git clone xxx
```

### 2. docker-compose で環境構築

```bash
docker-compose up -d
```

### 3. 構築できるかの確認

```bash
docker-compose ps
```

■ 結果

```bash
docker compose ps
NAME                  COMMAND                  SERVICE             STATUS              PORTS
lean-bug-fix-app-1   "docker-entrypoint.s…"   app                 running             0.0.0.0:3000->3000/tcp
```

## プログラムの実行方法の確認

`docker compose exec app node {パス}` で実行できます。

例: `q1.js` を実行する場合

```bash
docker compose exec app node js/q1.js
```

## 問題を解く

`js` ディレクトリに問題があります。

解答例は、`answer` ディレクトリにあります。

