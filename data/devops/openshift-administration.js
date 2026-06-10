window.quizData = window.quizData || {};
window.quizData.openshiftAdmin = [
  {
    "question": "【基礎】OpenShiftのProjectはKubernetesの何に近い概念ですか？（No.1）",
    "choices": [
      "NodePort",
      "Containerfile",
      "PersistentVolume",
      "Namespace"
    ],
    "answer": "Namespace",
    "explanation": "ProjectはNamespaceにOpenShift独自機能を加えた管理単位です。 試験対策では、用語の意味と実務での使いどころをセットで確認しましょう。"
  },
  {
    "question": "【基礎】OpenShiftでRBACを使う主な目的は何ですか？（No.2）",
    "choices": [
      "Routeを必ず無効化する",
      "ユーザーやサービスアカウントの操作権限を制御する",
      "Gitの履歴を削除する",
      "PodのCPUを物理的に増設する"
    ],
    "answer": "ユーザーやサービスアカウントの操作権限を制御する",
    "explanation": "RBACにより最小権限でクラスタを管理できます。 試験対策では、用語の意味と実務での使いどころをセットで確認しましょう。"
  },
  {
    "question": "【基礎】Operatorの説明として正しいものはどれですか？（No.3）",
    "choices": [
      "ネットワークケーブルの規格",
      "必ずPodを削除するコマンド",
      "アプリやミドルウェアの運用知識を自動化する仕組み",
      "ユーザー画面の色設定"
    ],
    "answer": "アプリやミドルウェアの運用知識を自動化する仕組み",
    "explanation": "OperatorはKubernetes上の運用を自動化します。 試験対策では、用語の意味と実務での使いどころをセットで確認しましょう。"
  },
  {
    "question": "【基礎】OpenShift Routeの主な役割は何ですか？（No.4）",
    "choices": [
      "etcdを暗号通貨化する",
      "ノードのBIOSを更新する",
      "クラスタ外部からサービスへHTTP/HTTPSアクセスを公開する",
      "コンテナイメージを圧縮する"
    ],
    "answer": "クラスタ外部からサービスへHTTP/HTTPSアクセスを公開する",
    "explanation": "Routeは外部公開のためのOpenShiftリソースです。 試験対策では、用語の意味と実務での使いどころをセットで確認しましょう。"
  },
  {
    "question": "【基礎】PersistentVolumeClaimを使う目的は何ですか？（No.5）",
    "choices": [
      "Pod名を必ず変更する",
      "APIサーバーを停止する",
      "Secretを平文で公開する",
      "Podが利用する永続ストレージを要求する"
    ],
    "answer": "Podが利用する永続ストレージを要求する",
    "explanation": "PVCは永続ストレージの要求を表します。 試験対策では、用語の意味と実務での使いどころをセットで確認しましょう。"
  },
  {
    "question": "【基礎】ClusterVersionの確認が重要な理由は何ですか？（No.6）",
    "choices": [
      "クラスタのバージョンや更新状態を把握するため",
      "全Podのログを削除するため",
      "ユーザーの給与を計算するため",
      "Ingressを無効化するため"
    ],
    "answer": "クラスタのバージョンや更新状態を把握するため",
    "explanation": "管理ではバージョンと更新状態の把握が重要です。 試験対策では、用語の意味と実務での使いどころをセットで確認しましょう。"
  },
  {
    "question": "【設計】OpenShiftのProjectはKubernetesの何に近い概念ですか？（No.7）",
    "choices": [
      "Namespace",
      "Containerfile",
      "NodePort",
      "PersistentVolume"
    ],
    "answer": "Namespace",
    "explanation": "ProjectはNamespaceにOpenShift独自機能を加えた管理単位です。 試験対策では、用語の意味と実務での使いどころをセットで確認しましょう。"
  },
  {
    "question": "【設計】OpenShiftでRBACを使う主な目的は何ですか？（No.8）",
    "choices": [
      "Routeを必ず無効化する",
      "ユーザーやサービスアカウントの操作権限を制御する",
      "Gitの履歴を削除する",
      "PodのCPUを物理的に増設する"
    ],
    "answer": "ユーザーやサービスアカウントの操作権限を制御する",
    "explanation": "RBACにより最小権限でクラスタを管理できます。 試験対策では、用語の意味と実務での使いどころをセットで確認しましょう。"
  },
  {
    "question": "【設計】Operatorの説明として正しいものはどれですか？（No.9）",
    "choices": [
      "ネットワークケーブルの規格",
      "必ずPodを削除するコマンド",
      "ユーザー画面の色設定",
      "アプリやミドルウェアの運用知識を自動化する仕組み"
    ],
    "answer": "アプリやミドルウェアの運用知識を自動化する仕組み",
    "explanation": "OperatorはKubernetes上の運用を自動化します。 試験対策では、用語の意味と実務での使いどころをセットで確認しましょう。"
  },
  {
    "question": "【設計】OpenShift Routeの主な役割は何ですか？（No.10）",
    "choices": [
      "クラスタ外部からサービスへHTTP/HTTPSアクセスを公開する",
      "コンテナイメージを圧縮する",
      "ノードのBIOSを更新する",
      "etcdを暗号通貨化する"
    ],
    "answer": "クラスタ外部からサービスへHTTP/HTTPSアクセスを公開する",
    "explanation": "Routeは外部公開のためのOpenShiftリソースです。 試験対策では、用語の意味と実務での使いどころをセットで確認しましょう。"
  },
  {
    "question": "【設計】PersistentVolumeClaimを使う目的は何ですか？（No.11）",
    "choices": [
      "Pod名を必ず変更する",
      "Secretを平文で公開する",
      "Podが利用する永続ストレージを要求する",
      "APIサーバーを停止する"
    ],
    "answer": "Podが利用する永続ストレージを要求する",
    "explanation": "PVCは永続ストレージの要求を表します。 試験対策では、用語の意味と実務での使いどころをセットで確認しましょう。"
  },
  {
    "question": "【設計】ClusterVersionの確認が重要な理由は何ですか？（No.12）",
    "choices": [
      "クラスタのバージョンや更新状態を把握するため",
      "ユーザーの給与を計算するため",
      "全Podのログを削除するため",
      "Ingressを無効化するため"
    ],
    "answer": "クラスタのバージョンや更新状態を把握するため",
    "explanation": "管理ではバージョンと更新状態の把握が重要です。 試験対策では、用語の意味と実務での使いどころをセットで確認しましょう。"
  },
  {
    "question": "【運用】OpenShiftのProjectはKubernetesの何に近い概念ですか？（No.13）",
    "choices": [
      "Containerfile",
      "NodePort",
      "PersistentVolume",
      "Namespace"
    ],
    "answer": "Namespace",
    "explanation": "ProjectはNamespaceにOpenShift独自機能を加えた管理単位です。 試験対策では、用語の意味と実務での使いどころをセットで確認しましょう。"
  },
  {
    "question": "【運用】OpenShiftでRBACを使う主な目的は何ですか？（No.14）",
    "choices": [
      "Routeを必ず無効化する",
      "Gitの履歴を削除する",
      "ユーザーやサービスアカウントの操作権限を制御する",
      "PodのCPUを物理的に増設する"
    ],
    "answer": "ユーザーやサービスアカウントの操作権限を制御する",
    "explanation": "RBACにより最小権限でクラスタを管理できます。 試験対策では、用語の意味と実務での使いどころをセットで確認しましょう。"
  },
  {
    "question": "【運用】Operatorの説明として正しいものはどれですか？（No.15）",
    "choices": [
      "ユーザー画面の色設定",
      "アプリやミドルウェアの運用知識を自動化する仕組み",
      "ネットワークケーブルの規格",
      "必ずPodを削除するコマンド"
    ],
    "answer": "アプリやミドルウェアの運用知識を自動化する仕組み",
    "explanation": "OperatorはKubernetes上の運用を自動化します。 試験対策では、用語の意味と実務での使いどころをセットで確認しましょう。"
  },
  {
    "question": "【運用】OpenShift Routeの主な役割は何ですか？（No.16）",
    "choices": [
      "etcdを暗号通貨化する",
      "ノードのBIOSを更新する",
      "コンテナイメージを圧縮する",
      "クラスタ外部からサービスへHTTP/HTTPSアクセスを公開する"
    ],
    "answer": "クラスタ外部からサービスへHTTP/HTTPSアクセスを公開する",
    "explanation": "Routeは外部公開のためのOpenShiftリソースです。 試験対策では、用語の意味と実務での使いどころをセットで確認しましょう。"
  },
  {
    "question": "【運用】PersistentVolumeClaimを使う目的は何ですか？（No.17）",
    "choices": [
      "APIサーバーを停止する",
      "Secretを平文で公開する",
      "Pod名を必ず変更する",
      "Podが利用する永続ストレージを要求する"
    ],
    "answer": "Podが利用する永続ストレージを要求する",
    "explanation": "PVCは永続ストレージの要求を表します。 試験対策では、用語の意味と実務での使いどころをセットで確認しましょう。"
  },
  {
    "question": "【運用】ClusterVersionの確認が重要な理由は何ですか？（No.18）",
    "choices": [
      "クラスタのバージョンや更新状態を把握するため",
      "全Podのログを削除するため",
      "Ingressを無効化するため",
      "ユーザーの給与を計算するため"
    ],
    "answer": "クラスタのバージョンや更新状態を把握するため",
    "explanation": "管理ではバージョンと更新状態の把握が重要です。 試験対策では、用語の意味と実務での使いどころをセットで確認しましょう。"
  },
  {
    "question": "【セキュリティ】OpenShiftのProjectはKubernetesの何に近い概念ですか？（No.19）",
    "choices": [
      "NodePort",
      "Namespace",
      "PersistentVolume",
      "Containerfile"
    ],
    "answer": "Namespace",
    "explanation": "ProjectはNamespaceにOpenShift独自機能を加えた管理単位です。 試験対策では、用語の意味と実務での使いどころをセットで確認しましょう。"
  },
  {
    "question": "【セキュリティ】OpenShiftでRBACを使う主な目的は何ですか？（No.20）",
    "choices": [
      "Routeを必ず無効化する",
      "ユーザーやサービスアカウントの操作権限を制御する",
      "Gitの履歴を削除する",
      "PodのCPUを物理的に増設する"
    ],
    "answer": "ユーザーやサービスアカウントの操作権限を制御する",
    "explanation": "RBACにより最小権限でクラスタを管理できます。 試験対策では、用語の意味と実務での使いどころをセットで確認しましょう。"
  },
  {
    "question": "【セキュリティ】Operatorの説明として正しいものはどれですか？（No.21）",
    "choices": [
      "アプリやミドルウェアの運用知識を自動化する仕組み",
      "ユーザー画面の色設定",
      "ネットワークケーブルの規格",
      "必ずPodを削除するコマンド"
    ],
    "answer": "アプリやミドルウェアの運用知識を自動化する仕組み",
    "explanation": "OperatorはKubernetes上の運用を自動化します。 試験対策では、用語の意味と実務での使いどころをセットで確認しましょう。"
  },
  {
    "question": "【セキュリティ】OpenShift Routeの主な役割は何ですか？（No.22）",
    "choices": [
      "ノードのBIOSを更新する",
      "クラスタ外部からサービスへHTTP/HTTPSアクセスを公開する",
      "etcdを暗号通貨化する",
      "コンテナイメージを圧縮する"
    ],
    "answer": "クラスタ外部からサービスへHTTP/HTTPSアクセスを公開する",
    "explanation": "Routeは外部公開のためのOpenShiftリソースです。 試験対策では、用語の意味と実務での使いどころをセットで確認しましょう。"
  },
  {
    "question": "【セキュリティ】PersistentVolumeClaimを使う目的は何ですか？（No.23）",
    "choices": [
      "APIサーバーを停止する",
      "Secretを平文で公開する",
      "Podが利用する永続ストレージを要求する",
      "Pod名を必ず変更する"
    ],
    "answer": "Podが利用する永続ストレージを要求する",
    "explanation": "PVCは永続ストレージの要求を表します。 試験対策では、用語の意味と実務での使いどころをセットで確認しましょう。"
  },
  {
    "question": "【セキュリティ】ClusterVersionの確認が重要な理由は何ですか？（No.24）",
    "choices": [
      "全Podのログを削除するため",
      "クラスタのバージョンや更新状態を把握するため",
      "Ingressを無効化するため",
      "ユーザーの給与を計算するため"
    ],
    "answer": "クラスタのバージョンや更新状態を把握するため",
    "explanation": "管理ではバージョンと更新状態の把握が重要です。 試験対策では、用語の意味と実務での使いどころをセットで確認しましょう。"
  },
  {
    "question": "【トラブルシューティング】OpenShiftのProjectはKubernetesの何に近い概念ですか？（No.25）",
    "choices": [
      "Namespace",
      "NodePort",
      "Containerfile",
      "PersistentVolume"
    ],
    "answer": "Namespace",
    "explanation": "ProjectはNamespaceにOpenShift独自機能を加えた管理単位です。 試験対策では、用語の意味と実務での使いどころをセットで確認しましょう。"
  },
  {
    "question": "【トラブルシューティング】OpenShiftでRBACを使う主な目的は何ですか？（No.26）",
    "choices": [
      "PodのCPUを物理的に増設する",
      "Gitの履歴を削除する",
      "Routeを必ず無効化する",
      "ユーザーやサービスアカウントの操作権限を制御する"
    ],
    "answer": "ユーザーやサービスアカウントの操作権限を制御する",
    "explanation": "RBACにより最小権限でクラスタを管理できます。 試験対策では、用語の意味と実務での使いどころをセットで確認しましょう。"
  },
  {
    "question": "【トラブルシューティング】Operatorの説明として正しいものはどれですか？（No.27）",
    "choices": [
      "必ずPodを削除するコマンド",
      "アプリやミドルウェアの運用知識を自動化する仕組み",
      "ユーザー画面の色設定",
      "ネットワークケーブルの規格"
    ],
    "answer": "アプリやミドルウェアの運用知識を自動化する仕組み",
    "explanation": "OperatorはKubernetes上の運用を自動化します。 試験対策では、用語の意味と実務での使いどころをセットで確認しましょう。"
  },
  {
    "question": "【トラブルシューティング】OpenShift Routeの主な役割は何ですか？（No.28）",
    "choices": [
      "etcdを暗号通貨化する",
      "クラスタ外部からサービスへHTTP/HTTPSアクセスを公開する",
      "コンテナイメージを圧縮する",
      "ノードのBIOSを更新する"
    ],
    "answer": "クラスタ外部からサービスへHTTP/HTTPSアクセスを公開する",
    "explanation": "Routeは外部公開のためのOpenShiftリソースです。 試験対策では、用語の意味と実務での使いどころをセットで確認しましょう。"
  },
  {
    "question": "【トラブルシューティング】PersistentVolumeClaimを使う目的は何ですか？（No.29）",
    "choices": [
      "Podが利用する永続ストレージを要求する",
      "Pod名を必ず変更する",
      "APIサーバーを停止する",
      "Secretを平文で公開する"
    ],
    "answer": "Podが利用する永続ストレージを要求する",
    "explanation": "PVCは永続ストレージの要求を表します。 試験対策では、用語の意味と実務での使いどころをセットで確認しましょう。"
  },
  {
    "question": "【トラブルシューティング】ClusterVersionの確認が重要な理由は何ですか？（No.30）",
    "choices": [
      "Ingressを無効化するため",
      "ユーザーの給与を計算するため",
      "クラスタのバージョンや更新状態を把握するため",
      "全Podのログを削除するため"
    ],
    "answer": "クラスタのバージョンや更新状態を把握するため",
    "explanation": "管理ではバージョンと更新状態の把握が重要です。 試験対策では、用語の意味と実務での使いどころをセットで確認しましょう。"
  },
  {
    "question": "【ベストプラクティス】OpenShiftのProjectはKubernetesの何に近い概念ですか？（No.31）",
    "choices": [
      "Containerfile",
      "PersistentVolume",
      "NodePort",
      "Namespace"
    ],
    "answer": "Namespace",
    "explanation": "ProjectはNamespaceにOpenShift独自機能を加えた管理単位です。 試験対策では、用語の意味と実務での使いどころをセットで確認しましょう。"
  },
  {
    "question": "【ベストプラクティス】OpenShiftでRBACを使う主な目的は何ですか？（No.32）",
    "choices": [
      "PodのCPUを物理的に増設する",
      "ユーザーやサービスアカウントの操作権限を制御する",
      "Routeを必ず無効化する",
      "Gitの履歴を削除する"
    ],
    "answer": "ユーザーやサービスアカウントの操作権限を制御する",
    "explanation": "RBACにより最小権限でクラスタを管理できます。 試験対策では、用語の意味と実務での使いどころをセットで確認しましょう。"
  },
  {
    "question": "【ベストプラクティス】Operatorの説明として正しいものはどれですか？（No.33）",
    "choices": [
      "アプリやミドルウェアの運用知識を自動化する仕組み",
      "必ずPodを削除するコマンド",
      "ユーザー画面の色設定",
      "ネットワークケーブルの規格"
    ],
    "answer": "アプリやミドルウェアの運用知識を自動化する仕組み",
    "explanation": "OperatorはKubernetes上の運用を自動化します。 試験対策では、用語の意味と実務での使いどころをセットで確認しましょう。"
  },
  {
    "question": "【ベストプラクティス】OpenShift Routeの主な役割は何ですか？（No.34）",
    "choices": [
      "クラスタ外部からサービスへHTTP/HTTPSアクセスを公開する",
      "コンテナイメージを圧縮する",
      "etcdを暗号通貨化する",
      "ノードのBIOSを更新する"
    ],
    "answer": "クラスタ外部からサービスへHTTP/HTTPSアクセスを公開する",
    "explanation": "Routeは外部公開のためのOpenShiftリソースです。 試験対策では、用語の意味と実務での使いどころをセットで確認しましょう。"
  },
  {
    "question": "【ベストプラクティス】PersistentVolumeClaimを使う目的は何ですか？（No.35）",
    "choices": [
      "APIサーバーを停止する",
      "Podが利用する永続ストレージを要求する",
      "Secretを平文で公開する",
      "Pod名を必ず変更する"
    ],
    "answer": "Podが利用する永続ストレージを要求する",
    "explanation": "PVCは永続ストレージの要求を表します。 試験対策では、用語の意味と実務での使いどころをセットで確認しましょう。"
  },
  {
    "question": "【ベストプラクティス】ClusterVersionの確認が重要な理由は何ですか？（No.36）",
    "choices": [
      "クラスタのバージョンや更新状態を把握するため",
      "Ingressを無効化するため",
      "全Podのログを削除するため",
      "ユーザーの給与を計算するため"
    ],
    "answer": "クラスタのバージョンや更新状態を把握するため",
    "explanation": "管理ではバージョンと更新状態の把握が重要です。 試験対策では、用語の意味と実務での使いどころをセットで確認しましょう。"
  },
  {
    "question": "【基礎】OpenShiftのProjectはKubernetesの何に近い概念ですか？（No.37）",
    "choices": [
      "NodePort",
      "Namespace",
      "Containerfile",
      "PersistentVolume"
    ],
    "answer": "Namespace",
    "explanation": "ProjectはNamespaceにOpenShift独自機能を加えた管理単位です。 試験対策では、用語の意味と実務での使いどころをセットで確認しましょう。"
  },
  {
    "question": "【基礎】OpenShiftでRBACを使う主な目的は何ですか？（No.38）",
    "choices": [
      "Routeを必ず無効化する",
      "Gitの履歴を削除する",
      "PodのCPUを物理的に増設する",
      "ユーザーやサービスアカウントの操作権限を制御する"
    ],
    "answer": "ユーザーやサービスアカウントの操作権限を制御する",
    "explanation": "RBACにより最小権限でクラスタを管理できます。 試験対策では、用語の意味と実務での使いどころをセットで確認しましょう。"
  },
  {
    "question": "【基礎】Operatorの説明として正しいものはどれですか？（No.39）",
    "choices": [
      "ネットワークケーブルの規格",
      "アプリやミドルウェアの運用知識を自動化する仕組み",
      "必ずPodを削除するコマンド",
      "ユーザー画面の色設定"
    ],
    "answer": "アプリやミドルウェアの運用知識を自動化する仕組み",
    "explanation": "OperatorはKubernetes上の運用を自動化します。 試験対策では、用語の意味と実務での使いどころをセットで確認しましょう。"
  },
  {
    "question": "【基礎】OpenShift Routeの主な役割は何ですか？（No.40）",
    "choices": [
      "コンテナイメージを圧縮する",
      "ノードのBIOSを更新する",
      "クラスタ外部からサービスへHTTP/HTTPSアクセスを公開する",
      "etcdを暗号通貨化する"
    ],
    "answer": "クラスタ外部からサービスへHTTP/HTTPSアクセスを公開する",
    "explanation": "Routeは外部公開のためのOpenShiftリソースです。 試験対策では、用語の意味と実務での使いどころをセットで確認しましょう。"
  },
  {
    "question": "【基礎】PersistentVolumeClaimを使う目的は何ですか？（No.41）",
    "choices": [
      "Secretを平文で公開する",
      "APIサーバーを停止する",
      "Podが利用する永続ストレージを要求する",
      "Pod名を必ず変更する"
    ],
    "answer": "Podが利用する永続ストレージを要求する",
    "explanation": "PVCは永続ストレージの要求を表します。 試験対策では、用語の意味と実務での使いどころをセットで確認しましょう。"
  },
  {
    "question": "【基礎】ClusterVersionの確認が重要な理由は何ですか？（No.42）",
    "choices": [
      "Ingressを無効化するため",
      "全Podのログを削除するため",
      "ユーザーの給与を計算するため",
      "クラスタのバージョンや更新状態を把握するため"
    ],
    "answer": "クラスタのバージョンや更新状態を把握するため",
    "explanation": "管理ではバージョンと更新状態の把握が重要です。 試験対策では、用語の意味と実務での使いどころをセットで確認しましょう。"
  },
  {
    "question": "【設計】OpenShiftのProjectはKubernetesの何に近い概念ですか？（No.43）",
    "choices": [
      "PersistentVolume",
      "Namespace",
      "NodePort",
      "Containerfile"
    ],
    "answer": "Namespace",
    "explanation": "ProjectはNamespaceにOpenShift独自機能を加えた管理単位です。 試験対策では、用語の意味と実務での使いどころをセットで確認しましょう。"
  },
  {
    "question": "【設計】OpenShiftでRBACを使う主な目的は何ですか？（No.44）",
    "choices": [
      "Gitの履歴を削除する",
      "Routeを必ず無効化する",
      "ユーザーやサービスアカウントの操作権限を制御する",
      "PodのCPUを物理的に増設する"
    ],
    "answer": "ユーザーやサービスアカウントの操作権限を制御する",
    "explanation": "RBACにより最小権限でクラスタを管理できます。 試験対策では、用語の意味と実務での使いどころをセットで確認しましょう。"
  },
  {
    "question": "【設計】Operatorの説明として正しいものはどれですか？（No.45）",
    "choices": [
      "必ずPodを削除するコマンド",
      "ネットワークケーブルの規格",
      "アプリやミドルウェアの運用知識を自動化する仕組み",
      "ユーザー画面の色設定"
    ],
    "answer": "アプリやミドルウェアの運用知識を自動化する仕組み",
    "explanation": "OperatorはKubernetes上の運用を自動化します。 試験対策では、用語の意味と実務での使いどころをセットで確認しましょう。"
  },
  {
    "question": "【設計】OpenShift Routeの主な役割は何ですか？（No.46）",
    "choices": [
      "コンテナイメージを圧縮する",
      "ノードのBIOSを更新する",
      "etcdを暗号通貨化する",
      "クラスタ外部からサービスへHTTP/HTTPSアクセスを公開する"
    ],
    "answer": "クラスタ外部からサービスへHTTP/HTTPSアクセスを公開する",
    "explanation": "Routeは外部公開のためのOpenShiftリソースです。 試験対策では、用語の意味と実務での使いどころをセットで確認しましょう。"
  },
  {
    "question": "【設計】PersistentVolumeClaimを使う目的は何ですか？（No.47）",
    "choices": [
      "Pod名を必ず変更する",
      "APIサーバーを停止する",
      "Secretを平文で公開する",
      "Podが利用する永続ストレージを要求する"
    ],
    "answer": "Podが利用する永続ストレージを要求する",
    "explanation": "PVCは永続ストレージの要求を表します。 試験対策では、用語の意味と実務での使いどころをセットで確認しましょう。"
  },
  {
    "question": "【設計】ClusterVersionの確認が重要な理由は何ですか？（No.48）",
    "choices": [
      "全Podのログを削除するため",
      "ユーザーの給与を計算するため",
      "Ingressを無効化するため",
      "クラスタのバージョンや更新状態を把握するため"
    ],
    "answer": "クラスタのバージョンや更新状態を把握するため",
    "explanation": "管理ではバージョンと更新状態の把握が重要です。 試験対策では、用語の意味と実務での使いどころをセットで確認しましょう。"
  },
  {
    "question": "【運用】OpenShiftのProjectはKubernetesの何に近い概念ですか？（No.49）",
    "choices": [
      "Namespace",
      "Containerfile",
      "PersistentVolume",
      "NodePort"
    ],
    "answer": "Namespace",
    "explanation": "ProjectはNamespaceにOpenShift独自機能を加えた管理単位です。 試験対策では、用語の意味と実務での使いどころをセットで確認しましょう。"
  },
  {
    "question": "【運用】OpenShiftでRBACを使う主な目的は何ですか？（No.50）",
    "choices": [
      "PodのCPUを物理的に増設する",
      "ユーザーやサービスアカウントの操作権限を制御する",
      "Routeを必ず無効化する",
      "Gitの履歴を削除する"
    ],
    "answer": "ユーザーやサービスアカウントの操作権限を制御する",
    "explanation": "RBACにより最小権限でクラスタを管理できます。 試験対策では、用語の意味と実務での使いどころをセットで確認しましょう。"
  },
  {
    "question": "【運用】Operatorの説明として正しいものはどれですか？（No.51）",
    "choices": [
      "ユーザー画面の色設定",
      "必ずPodを削除するコマンド",
      "ネットワークケーブルの規格",
      "アプリやミドルウェアの運用知識を自動化する仕組み"
    ],
    "answer": "アプリやミドルウェアの運用知識を自動化する仕組み",
    "explanation": "OperatorはKubernetes上の運用を自動化します。 試験対策では、用語の意味と実務での使いどころをセットで確認しましょう。"
  },
  {
    "question": "【運用】OpenShift Routeの主な役割は何ですか？（No.52）",
    "choices": [
      "ノードのBIOSを更新する",
      "etcdを暗号通貨化する",
      "コンテナイメージを圧縮する",
      "クラスタ外部からサービスへHTTP/HTTPSアクセスを公開する"
    ],
    "answer": "クラスタ外部からサービスへHTTP/HTTPSアクセスを公開する",
    "explanation": "Routeは外部公開のためのOpenShiftリソースです。 試験対策では、用語の意味と実務での使いどころをセットで確認しましょう。"
  },
  {
    "question": "【運用】PersistentVolumeClaimを使う目的は何ですか？（No.53）",
    "choices": [
      "Pod名を必ず変更する",
      "Podが利用する永続ストレージを要求する",
      "APIサーバーを停止する",
      "Secretを平文で公開する"
    ],
    "answer": "Podが利用する永続ストレージを要求する",
    "explanation": "PVCは永続ストレージの要求を表します。 試験対策では、用語の意味と実務での使いどころをセットで確認しましょう。"
  },
  {
    "question": "【運用】ClusterVersionの確認が重要な理由は何ですか？（No.54）",
    "choices": [
      "Ingressを無効化するため",
      "ユーザーの給与を計算するため",
      "クラスタのバージョンや更新状態を把握するため",
      "全Podのログを削除するため"
    ],
    "answer": "クラスタのバージョンや更新状態を把握するため",
    "explanation": "管理ではバージョンと更新状態の把握が重要です。 試験対策では、用語の意味と実務での使いどころをセットで確認しましょう。"
  },
  {
    "question": "【セキュリティ】OpenShiftのProjectはKubernetesの何に近い概念ですか？（No.55）",
    "choices": [
      "Containerfile",
      "PersistentVolume",
      "NodePort",
      "Namespace"
    ],
    "answer": "Namespace",
    "explanation": "ProjectはNamespaceにOpenShift独自機能を加えた管理単位です。 試験対策では、用語の意味と実務での使いどころをセットで確認しましょう。"
  },
  {
    "question": "【セキュリティ】OpenShiftでRBACを使う主な目的は何ですか？（No.56）",
    "choices": [
      "Routeを必ず無効化する",
      "PodのCPUを物理的に増設する",
      "ユーザーやサービスアカウントの操作権限を制御する",
      "Gitの履歴を削除する"
    ],
    "answer": "ユーザーやサービスアカウントの操作権限を制御する",
    "explanation": "RBACにより最小権限でクラスタを管理できます。 試験対策では、用語の意味と実務での使いどころをセットで確認しましょう。"
  },
  {
    "question": "【セキュリティ】Operatorの説明として正しいものはどれですか？（No.57）",
    "choices": [
      "必ずPodを削除するコマンド",
      "アプリやミドルウェアの運用知識を自動化する仕組み",
      "ユーザー画面の色設定",
      "ネットワークケーブルの規格"
    ],
    "answer": "アプリやミドルウェアの運用知識を自動化する仕組み",
    "explanation": "OperatorはKubernetes上の運用を自動化します。 試験対策では、用語の意味と実務での使いどころをセットで確認しましょう。"
  },
  {
    "question": "【セキュリティ】OpenShift Routeの主な役割は何ですか？（No.58）",
    "choices": [
      "etcdを暗号通貨化する",
      "コンテナイメージを圧縮する",
      "クラスタ外部からサービスへHTTP/HTTPSアクセスを公開する",
      "ノードのBIOSを更新する"
    ],
    "answer": "クラスタ外部からサービスへHTTP/HTTPSアクセスを公開する",
    "explanation": "Routeは外部公開のためのOpenShiftリソースです。 試験対策では、用語の意味と実務での使いどころをセットで確認しましょう。"
  },
  {
    "question": "【セキュリティ】PersistentVolumeClaimを使う目的は何ですか？（No.59）",
    "choices": [
      "Podが利用する永続ストレージを要求する",
      "Pod名を必ず変更する",
      "APIサーバーを停止する",
      "Secretを平文で公開する"
    ],
    "answer": "Podが利用する永続ストレージを要求する",
    "explanation": "PVCは永続ストレージの要求を表します。 試験対策では、用語の意味と実務での使いどころをセットで確認しましょう。"
  },
  {
    "question": "【セキュリティ】ClusterVersionの確認が重要な理由は何ですか？（No.60）",
    "choices": [
      "Ingressを無効化するため",
      "全Podのログを削除するため",
      "ユーザーの給与を計算するため",
      "クラスタのバージョンや更新状態を把握するため"
    ],
    "answer": "クラスタのバージョンや更新状態を把握するため",
    "explanation": "管理ではバージョンと更新状態の把握が重要です。 試験対策では、用語の意味と実務での使いどころをセットで確認しましょう。"
  },
  {
    "question": "【トラブルシューティング】OpenShiftのProjectはKubernetesの何に近い概念ですか？（No.61）",
    "choices": [
      "PersistentVolume",
      "NodePort",
      "Containerfile",
      "Namespace"
    ],
    "answer": "Namespace",
    "explanation": "ProjectはNamespaceにOpenShift独自機能を加えた管理単位です。 試験対策では、用語の意味と実務での使いどころをセットで確認しましょう。"
  },
  {
    "question": "【トラブルシューティング】OpenShiftでRBACを使う主な目的は何ですか？（No.62）",
    "choices": [
      "ユーザーやサービスアカウントの操作権限を制御する",
      "Gitの履歴を削除する",
      "PodのCPUを物理的に増設する",
      "Routeを必ず無効化する"
    ],
    "answer": "ユーザーやサービスアカウントの操作権限を制御する",
    "explanation": "RBACにより最小権限でクラスタを管理できます。 試験対策では、用語の意味と実務での使いどころをセットで確認しましょう。"
  },
  {
    "question": "【トラブルシューティング】Operatorの説明として正しいものはどれですか？（No.63）",
    "choices": [
      "必ずPodを削除するコマンド",
      "ネットワークケーブルの規格",
      "アプリやミドルウェアの運用知識を自動化する仕組み",
      "ユーザー画面の色設定"
    ],
    "answer": "アプリやミドルウェアの運用知識を自動化する仕組み",
    "explanation": "OperatorはKubernetes上の運用を自動化します。 試験対策では、用語の意味と実務での使いどころをセットで確認しましょう。"
  },
  {
    "question": "【トラブルシューティング】OpenShift Routeの主な役割は何ですか？（No.64）",
    "choices": [
      "コンテナイメージを圧縮する",
      "クラスタ外部からサービスへHTTP/HTTPSアクセスを公開する",
      "etcdを暗号通貨化する",
      "ノードのBIOSを更新する"
    ],
    "answer": "クラスタ外部からサービスへHTTP/HTTPSアクセスを公開する",
    "explanation": "Routeは外部公開のためのOpenShiftリソースです。 試験対策では、用語の意味と実務での使いどころをセットで確認しましょう。"
  },
  {
    "question": "【トラブルシューティング】PersistentVolumeClaimを使う目的は何ですか？（No.65）",
    "choices": [
      "Podが利用する永続ストレージを要求する",
      "Pod名を必ず変更する",
      "Secretを平文で公開する",
      "APIサーバーを停止する"
    ],
    "answer": "Podが利用する永続ストレージを要求する",
    "explanation": "PVCは永続ストレージの要求を表します。 試験対策では、用語の意味と実務での使いどころをセットで確認しましょう。"
  },
  {
    "question": "【トラブルシューティング】ClusterVersionの確認が重要な理由は何ですか？（No.66）",
    "choices": [
      "全Podのログを削除するため",
      "Ingressを無効化するため",
      "ユーザーの給与を計算するため",
      "クラスタのバージョンや更新状態を把握するため"
    ],
    "answer": "クラスタのバージョンや更新状態を把握するため",
    "explanation": "管理ではバージョンと更新状態の把握が重要です。 試験対策では、用語の意味と実務での使いどころをセットで確認しましょう。"
  },
  {
    "question": "【ベストプラクティス】OpenShiftのProjectはKubernetesの何に近い概念ですか？（No.67）",
    "choices": [
      "Containerfile",
      "PersistentVolume",
      "NodePort",
      "Namespace"
    ],
    "answer": "Namespace",
    "explanation": "ProjectはNamespaceにOpenShift独自機能を加えた管理単位です。 試験対策では、用語の意味と実務での使いどころをセットで確認しましょう。"
  },
  {
    "question": "【ベストプラクティス】OpenShiftでRBACを使う主な目的は何ですか？（No.68）",
    "choices": [
      "Routeを必ず無効化する",
      "ユーザーやサービスアカウントの操作権限を制御する",
      "Gitの履歴を削除する",
      "PodのCPUを物理的に増設する"
    ],
    "answer": "ユーザーやサービスアカウントの操作権限を制御する",
    "explanation": "RBACにより最小権限でクラスタを管理できます。 試験対策では、用語の意味と実務での使いどころをセットで確認しましょう。"
  },
  {
    "question": "【ベストプラクティス】Operatorの説明として正しいものはどれですか？（No.69）",
    "choices": [
      "アプリやミドルウェアの運用知識を自動化する仕組み",
      "ユーザー画面の色設定",
      "ネットワークケーブルの規格",
      "必ずPodを削除するコマンド"
    ],
    "answer": "アプリやミドルウェアの運用知識を自動化する仕組み",
    "explanation": "OperatorはKubernetes上の運用を自動化します。 試験対策では、用語の意味と実務での使いどころをセットで確認しましょう。"
  },
  {
    "question": "【ベストプラクティス】OpenShift Routeの主な役割は何ですか？（No.70）",
    "choices": [
      "クラスタ外部からサービスへHTTP/HTTPSアクセスを公開する",
      "ノードのBIOSを更新する",
      "コンテナイメージを圧縮する",
      "etcdを暗号通貨化する"
    ],
    "answer": "クラスタ外部からサービスへHTTP/HTTPSアクセスを公開する",
    "explanation": "Routeは外部公開のためのOpenShiftリソースです。 試験対策では、用語の意味と実務での使いどころをセットで確認しましょう。"
  },
  {
    "question": "【ベストプラクティス】PersistentVolumeClaimを使う目的は何ですか？（No.71）",
    "choices": [
      "Secretを平文で公開する",
      "APIサーバーを停止する",
      "Pod名を必ず変更する",
      "Podが利用する永続ストレージを要求する"
    ],
    "answer": "Podが利用する永続ストレージを要求する",
    "explanation": "PVCは永続ストレージの要求を表します。 試験対策では、用語の意味と実務での使いどころをセットで確認しましょう。"
  },
  {
    "question": "【ベストプラクティス】ClusterVersionの確認が重要な理由は何ですか？（No.72）",
    "choices": [
      "ユーザーの給与を計算するため",
      "クラスタのバージョンや更新状態を把握するため",
      "Ingressを無効化するため",
      "全Podのログを削除するため"
    ],
    "answer": "クラスタのバージョンや更新状態を把握するため",
    "explanation": "管理ではバージョンと更新状態の把握が重要です。 試験対策では、用語の意味と実務での使いどころをセットで確認しましょう。"
  },
  {
    "question": "【基礎】OpenShiftのProjectはKubernetesの何に近い概念ですか？（No.73）",
    "choices": [
      "NodePort",
      "Containerfile",
      "PersistentVolume",
      "Namespace"
    ],
    "answer": "Namespace",
    "explanation": "ProjectはNamespaceにOpenShift独自機能を加えた管理単位です。 試験対策では、用語の意味と実務での使いどころをセットで確認しましょう。"
  },
  {
    "question": "【基礎】OpenShiftでRBACを使う主な目的は何ですか？（No.74）",
    "choices": [
      "PodのCPUを物理的に増設する",
      "Gitの履歴を削除する",
      "ユーザーやサービスアカウントの操作権限を制御する",
      "Routeを必ず無効化する"
    ],
    "answer": "ユーザーやサービスアカウントの操作権限を制御する",
    "explanation": "RBACにより最小権限でクラスタを管理できます。 試験対策では、用語の意味と実務での使いどころをセットで確認しましょう。"
  },
  {
    "question": "【基礎】Operatorの説明として正しいものはどれですか？（No.75）",
    "choices": [
      "必ずPodを削除するコマンド",
      "ネットワークケーブルの規格",
      "ユーザー画面の色設定",
      "アプリやミドルウェアの運用知識を自動化する仕組み"
    ],
    "answer": "アプリやミドルウェアの運用知識を自動化する仕組み",
    "explanation": "OperatorはKubernetes上の運用を自動化します。 試験対策では、用語の意味と実務での使いどころをセットで確認しましょう。"
  },
  {
    "question": "【基礎】OpenShift Routeの主な役割は何ですか？（No.76）",
    "choices": [
      "コンテナイメージを圧縮する",
      "etcdを暗号通貨化する",
      "ノードのBIOSを更新する",
      "クラスタ外部からサービスへHTTP/HTTPSアクセスを公開する"
    ],
    "answer": "クラスタ外部からサービスへHTTP/HTTPSアクセスを公開する",
    "explanation": "Routeは外部公開のためのOpenShiftリソースです。 試験対策では、用語の意味と実務での使いどころをセットで確認しましょう。"
  },
  {
    "question": "【基礎】PersistentVolumeClaimを使う目的は何ですか？（No.77）",
    "choices": [
      "Podが利用する永続ストレージを要求する",
      "APIサーバーを停止する",
      "Secretを平文で公開する",
      "Pod名を必ず変更する"
    ],
    "answer": "Podが利用する永続ストレージを要求する",
    "explanation": "PVCは永続ストレージの要求を表します。 試験対策では、用語の意味と実務での使いどころをセットで確認しましょう。"
  },
  {
    "question": "【基礎】ClusterVersionの確認が重要な理由は何ですか？（No.78）",
    "choices": [
      "Ingressを無効化するため",
      "全Podのログを削除するため",
      "ユーザーの給与を計算するため",
      "クラスタのバージョンや更新状態を把握するため"
    ],
    "answer": "クラスタのバージョンや更新状態を把握するため",
    "explanation": "管理ではバージョンと更新状態の把握が重要です。 試験対策では、用語の意味と実務での使いどころをセットで確認しましょう。"
  },
  {
    "question": "【設計】OpenShiftのProjectはKubernetesの何に近い概念ですか？（No.79）",
    "choices": [
      "Containerfile",
      "NodePort",
      "Namespace",
      "PersistentVolume"
    ],
    "answer": "Namespace",
    "explanation": "ProjectはNamespaceにOpenShift独自機能を加えた管理単位です。 試験対策では、用語の意味と実務での使いどころをセットで確認しましょう。"
  },
  {
    "question": "【設計】OpenShiftでRBACを使う主な目的は何ですか？（No.80）",
    "choices": [
      "ユーザーやサービスアカウントの操作権限を制御する",
      "PodのCPUを物理的に増設する",
      "Gitの履歴を削除する",
      "Routeを必ず無効化する"
    ],
    "answer": "ユーザーやサービスアカウントの操作権限を制御する",
    "explanation": "RBACにより最小権限でクラスタを管理できます。 試験対策では、用語の意味と実務での使いどころをセットで確認しましょう。"
  },
  {
    "question": "【設計】Operatorの説明として正しいものはどれですか？（No.81）",
    "choices": [
      "ネットワークケーブルの規格",
      "必ずPodを削除するコマンド",
      "ユーザー画面の色設定",
      "アプリやミドルウェアの運用知識を自動化する仕組み"
    ],
    "answer": "アプリやミドルウェアの運用知識を自動化する仕組み",
    "explanation": "OperatorはKubernetes上の運用を自動化します。 試験対策では、用語の意味と実務での使いどころをセットで確認しましょう。"
  },
  {
    "question": "【設計】OpenShift Routeの主な役割は何ですか？（No.82）",
    "choices": [
      "ノードのBIOSを更新する",
      "クラスタ外部からサービスへHTTP/HTTPSアクセスを公開する",
      "etcdを暗号通貨化する",
      "コンテナイメージを圧縮する"
    ],
    "answer": "クラスタ外部からサービスへHTTP/HTTPSアクセスを公開する",
    "explanation": "Routeは外部公開のためのOpenShiftリソースです。 試験対策では、用語の意味と実務での使いどころをセットで確認しましょう。"
  },
  {
    "question": "【設計】PersistentVolumeClaimを使う目的は何ですか？（No.83）",
    "choices": [
      "APIサーバーを停止する",
      "Podが利用する永続ストレージを要求する",
      "Secretを平文で公開する",
      "Pod名を必ず変更する"
    ],
    "answer": "Podが利用する永続ストレージを要求する",
    "explanation": "PVCは永続ストレージの要求を表します。 試験対策では、用語の意味と実務での使いどころをセットで確認しましょう。"
  },
  {
    "question": "【設計】ClusterVersionの確認が重要な理由は何ですか？（No.84）",
    "choices": [
      "全Podのログを削除するため",
      "Ingressを無効化するため",
      "ユーザーの給与を計算するため",
      "クラスタのバージョンや更新状態を把握するため"
    ],
    "answer": "クラスタのバージョンや更新状態を把握するため",
    "explanation": "管理ではバージョンと更新状態の把握が重要です。 試験対策では、用語の意味と実務での使いどころをセットで確認しましょう。"
  },
  {
    "question": "【運用】OpenShiftのProjectはKubernetesの何に近い概念ですか？（No.85）",
    "choices": [
      "NodePort",
      "PersistentVolume",
      "Namespace",
      "Containerfile"
    ],
    "answer": "Namespace",
    "explanation": "ProjectはNamespaceにOpenShift独自機能を加えた管理単位です。 試験対策では、用語の意味と実務での使いどころをセットで確認しましょう。"
  },
  {
    "question": "【運用】OpenShiftでRBACを使う主な目的は何ですか？（No.86）",
    "choices": [
      "ユーザーやサービスアカウントの操作権限を制御する",
      "PodのCPUを物理的に増設する",
      "Gitの履歴を削除する",
      "Routeを必ず無効化する"
    ],
    "answer": "ユーザーやサービスアカウントの操作権限を制御する",
    "explanation": "RBACにより最小権限でクラスタを管理できます。 試験対策では、用語の意味と実務での使いどころをセットで確認しましょう。"
  },
  {
    "question": "【運用】Operatorの説明として正しいものはどれですか？（No.87）",
    "choices": [
      "アプリやミドルウェアの運用知識を自動化する仕組み",
      "ネットワークケーブルの規格",
      "ユーザー画面の色設定",
      "必ずPodを削除するコマンド"
    ],
    "answer": "アプリやミドルウェアの運用知識を自動化する仕組み",
    "explanation": "OperatorはKubernetes上の運用を自動化します。 試験対策では、用語の意味と実務での使いどころをセットで確認しましょう。"
  },
  {
    "question": "【運用】OpenShift Routeの主な役割は何ですか？（No.88）",
    "choices": [
      "etcdを暗号通貨化する",
      "コンテナイメージを圧縮する",
      "ノードのBIOSを更新する",
      "クラスタ外部からサービスへHTTP/HTTPSアクセスを公開する"
    ],
    "answer": "クラスタ外部からサービスへHTTP/HTTPSアクセスを公開する",
    "explanation": "Routeは外部公開のためのOpenShiftリソースです。 試験対策では、用語の意味と実務での使いどころをセットで確認しましょう。"
  },
  {
    "question": "【運用】PersistentVolumeClaimを使う目的は何ですか？（No.89）",
    "choices": [
      "APIサーバーを停止する",
      "Podが利用する永続ストレージを要求する",
      "Pod名を必ず変更する",
      "Secretを平文で公開する"
    ],
    "answer": "Podが利用する永続ストレージを要求する",
    "explanation": "PVCは永続ストレージの要求を表します。 試験対策では、用語の意味と実務での使いどころをセットで確認しましょう。"
  },
  {
    "question": "【運用】ClusterVersionの確認が重要な理由は何ですか？（No.90）",
    "choices": [
      "クラスタのバージョンや更新状態を把握するため",
      "Ingressを無効化するため",
      "全Podのログを削除するため",
      "ユーザーの給与を計算するため"
    ],
    "answer": "クラスタのバージョンや更新状態を把握するため",
    "explanation": "管理ではバージョンと更新状態の把握が重要です。 試験対策では、用語の意味と実務での使いどころをセットで確認しましょう。"
  },
  {
    "question": "【セキュリティ】OpenShiftのProjectはKubernetesの何に近い概念ですか？（No.91）",
    "choices": [
      "Namespace",
      "NodePort",
      "Containerfile",
      "PersistentVolume"
    ],
    "answer": "Namespace",
    "explanation": "ProjectはNamespaceにOpenShift独自機能を加えた管理単位です。 試験対策では、用語の意味と実務での使いどころをセットで確認しましょう。"
  },
  {
    "question": "【セキュリティ】OpenShiftでRBACを使う主な目的は何ですか？（No.92）",
    "choices": [
      "ユーザーやサービスアカウントの操作権限を制御する",
      "Gitの履歴を削除する",
      "Routeを必ず無効化する",
      "PodのCPUを物理的に増設する"
    ],
    "answer": "ユーザーやサービスアカウントの操作権限を制御する",
    "explanation": "RBACにより最小権限でクラスタを管理できます。 試験対策では、用語の意味と実務での使いどころをセットで確認しましょう。"
  },
  {
    "question": "【セキュリティ】Operatorの説明として正しいものはどれですか？（No.93）",
    "choices": [
      "ユーザー画面の色設定",
      "ネットワークケーブルの規格",
      "アプリやミドルウェアの運用知識を自動化する仕組み",
      "必ずPodを削除するコマンド"
    ],
    "answer": "アプリやミドルウェアの運用知識を自動化する仕組み",
    "explanation": "OperatorはKubernetes上の運用を自動化します。 試験対策では、用語の意味と実務での使いどころをセットで確認しましょう。"
  },
  {
    "question": "【セキュリティ】OpenShift Routeの主な役割は何ですか？（No.94）",
    "choices": [
      "コンテナイメージを圧縮する",
      "ノードのBIOSを更新する",
      "etcdを暗号通貨化する",
      "クラスタ外部からサービスへHTTP/HTTPSアクセスを公開する"
    ],
    "answer": "クラスタ外部からサービスへHTTP/HTTPSアクセスを公開する",
    "explanation": "Routeは外部公開のためのOpenShiftリソースです。 試験対策では、用語の意味と実務での使いどころをセットで確認しましょう。"
  },
  {
    "question": "【セキュリティ】PersistentVolumeClaimを使う目的は何ですか？（No.95）",
    "choices": [
      "APIサーバーを停止する",
      "Podが利用する永続ストレージを要求する",
      "Secretを平文で公開する",
      "Pod名を必ず変更する"
    ],
    "answer": "Podが利用する永続ストレージを要求する",
    "explanation": "PVCは永続ストレージの要求を表します。 試験対策では、用語の意味と実務での使いどころをセットで確認しましょう。"
  },
  {
    "question": "【セキュリティ】ClusterVersionの確認が重要な理由は何ですか？（No.96）",
    "choices": [
      "クラスタのバージョンや更新状態を把握するため",
      "全Podのログを削除するため",
      "ユーザーの給与を計算するため",
      "Ingressを無効化するため"
    ],
    "answer": "クラスタのバージョンや更新状態を把握するため",
    "explanation": "管理ではバージョンと更新状態の把握が重要です。 試験対策では、用語の意味と実務での使いどころをセットで確認しましょう。"
  },
  {
    "question": "【トラブルシューティング】OpenShiftのProjectはKubernetesの何に近い概念ですか？（No.97）",
    "choices": [
      "Containerfile",
      "Namespace",
      "PersistentVolume",
      "NodePort"
    ],
    "answer": "Namespace",
    "explanation": "ProjectはNamespaceにOpenShift独自機能を加えた管理単位です。 試験対策では、用語の意味と実務での使いどころをセットで確認しましょう。"
  },
  {
    "question": "【トラブルシューティング】OpenShiftでRBACを使う主な目的は何ですか？（No.98）",
    "choices": [
      "Routeを必ず無効化する",
      "ユーザーやサービスアカウントの操作権限を制御する",
      "Gitの履歴を削除する",
      "PodのCPUを物理的に増設する"
    ],
    "answer": "ユーザーやサービスアカウントの操作権限を制御する",
    "explanation": "RBACにより最小権限でクラスタを管理できます。 試験対策では、用語の意味と実務での使いどころをセットで確認しましょう。"
  },
  {
    "question": "【トラブルシューティング】Operatorの説明として正しいものはどれですか？（No.99）",
    "choices": [
      "必ずPodを削除するコマンド",
      "アプリやミドルウェアの運用知識を自動化する仕組み",
      "ネットワークケーブルの規格",
      "ユーザー画面の色設定"
    ],
    "answer": "アプリやミドルウェアの運用知識を自動化する仕組み",
    "explanation": "OperatorはKubernetes上の運用を自動化します。 試験対策では、用語の意味と実務での使いどころをセットで確認しましょう。"
  },
  {
    "question": "【トラブルシューティング】OpenShift Routeの主な役割は何ですか？（No.100）",
    "choices": [
      "コンテナイメージを圧縮する",
      "クラスタ外部からサービスへHTTP/HTTPSアクセスを公開する",
      "etcdを暗号通貨化する",
      "ノードのBIOSを更新する"
    ],
    "answer": "クラスタ外部からサービスへHTTP/HTTPSアクセスを公開する",
    "explanation": "Routeは外部公開のためのOpenShiftリソースです。 試験対策では、用語の意味と実務での使いどころをセットで確認しましょう。"
  },
  {
    "question": "【トラブルシューティング】PersistentVolumeClaimを使う目的は何ですか？（No.101）",
    "choices": [
      "Pod名を必ず変更する",
      "Podが利用する永続ストレージを要求する",
      "APIサーバーを停止する",
      "Secretを平文で公開する"
    ],
    "answer": "Podが利用する永続ストレージを要求する",
    "explanation": "PVCは永続ストレージの要求を表します。 試験対策では、用語の意味と実務での使いどころをセットで確認しましょう。"
  },
  {
    "question": "【トラブルシューティング】ClusterVersionの確認が重要な理由は何ですか？（No.102）",
    "choices": [
      "Ingressを無効化するため",
      "全Podのログを削除するため",
      "クラスタのバージョンや更新状態を把握するため",
      "ユーザーの給与を計算するため"
    ],
    "answer": "クラスタのバージョンや更新状態を把握するため",
    "explanation": "管理ではバージョンと更新状態の把握が重要です。 試験対策では、用語の意味と実務での使いどころをセットで確認しましょう。"
  },
  {
    "question": "【ベストプラクティス】OpenShiftのProjectはKubernetesの何に近い概念ですか？（No.103）",
    "choices": [
      "PersistentVolume",
      "NodePort",
      "Containerfile",
      "Namespace"
    ],
    "answer": "Namespace",
    "explanation": "ProjectはNamespaceにOpenShift独自機能を加えた管理単位です。 試験対策では、用語の意味と実務での使いどころをセットで確認しましょう。"
  },
  {
    "question": "【ベストプラクティス】OpenShiftでRBACを使う主な目的は何ですか？（No.104）",
    "choices": [
      "Gitの履歴を削除する",
      "PodのCPUを物理的に増設する",
      "Routeを必ず無効化する",
      "ユーザーやサービスアカウントの操作権限を制御する"
    ],
    "answer": "ユーザーやサービスアカウントの操作権限を制御する",
    "explanation": "RBACにより最小権限でクラスタを管理できます。 試験対策では、用語の意味と実務での使いどころをセットで確認しましょう。"
  },
  {
    "question": "【ベストプラクティス】Operatorの説明として正しいものはどれですか？（No.105）",
    "choices": [
      "ネットワークケーブルの規格",
      "アプリやミドルウェアの運用知識を自動化する仕組み",
      "ユーザー画面の色設定",
      "必ずPodを削除するコマンド"
    ],
    "answer": "アプリやミドルウェアの運用知識を自動化する仕組み",
    "explanation": "OperatorはKubernetes上の運用を自動化します。 試験対策では、用語の意味と実務での使いどころをセットで確認しましょう。"
  },
  {
    "question": "【ベストプラクティス】OpenShift Routeの主な役割は何ですか？（No.106）",
    "choices": [
      "コンテナイメージを圧縮する",
      "etcdを暗号通貨化する",
      "ノードのBIOSを更新する",
      "クラスタ外部からサービスへHTTP/HTTPSアクセスを公開する"
    ],
    "answer": "クラスタ外部からサービスへHTTP/HTTPSアクセスを公開する",
    "explanation": "Routeは外部公開のためのOpenShiftリソースです。 試験対策では、用語の意味と実務での使いどころをセットで確認しましょう。"
  },
  {
    "question": "【ベストプラクティス】PersistentVolumeClaimを使う目的は何ですか？（No.107）",
    "choices": [
      "Pod名を必ず変更する",
      "Podが利用する永続ストレージを要求する",
      "APIサーバーを停止する",
      "Secretを平文で公開する"
    ],
    "answer": "Podが利用する永続ストレージを要求する",
    "explanation": "PVCは永続ストレージの要求を表します。 試験対策では、用語の意味と実務での使いどころをセットで確認しましょう。"
  },
  {
    "question": "【ベストプラクティス】ClusterVersionの確認が重要な理由は何ですか？（No.108）",
    "choices": [
      "ユーザーの給与を計算するため",
      "クラスタのバージョンや更新状態を把握するため",
      "全Podのログを削除するため",
      "Ingressを無効化するため"
    ],
    "answer": "クラスタのバージョンや更新状態を把握するため",
    "explanation": "管理ではバージョンと更新状態の把握が重要です。 試験対策では、用語の意味と実務での使いどころをセットで確認しましょう。"
  },
  {
    "question": "【基礎】OpenShiftのProjectはKubernetesの何に近い概念ですか？（No.109）",
    "choices": [
      "Namespace",
      "PersistentVolume",
      "Containerfile",
      "NodePort"
    ],
    "answer": "Namespace",
    "explanation": "ProjectはNamespaceにOpenShift独自機能を加えた管理単位です。 試験対策では、用語の意味と実務での使いどころをセットで確認しましょう。"
  },
  {
    "question": "【基礎】OpenShiftでRBACを使う主な目的は何ですか？（No.110）",
    "choices": [
      "PodのCPUを物理的に増設する",
      "ユーザーやサービスアカウントの操作権限を制御する",
      "Gitの履歴を削除する",
      "Routeを必ず無効化する"
    ],
    "answer": "ユーザーやサービスアカウントの操作権限を制御する",
    "explanation": "RBACにより最小権限でクラスタを管理できます。 試験対策では、用語の意味と実務での使いどころをセットで確認しましょう。"
  },
  {
    "question": "【基礎】Operatorの説明として正しいものはどれですか？（No.111）",
    "choices": [
      "ユーザー画面の色設定",
      "アプリやミドルウェアの運用知識を自動化する仕組み",
      "ネットワークケーブルの規格",
      "必ずPodを削除するコマンド"
    ],
    "answer": "アプリやミドルウェアの運用知識を自動化する仕組み",
    "explanation": "OperatorはKubernetes上の運用を自動化します。 試験対策では、用語の意味と実務での使いどころをセットで確認しましょう。"
  },
  {
    "question": "【基礎】OpenShift Routeの主な役割は何ですか？（No.112）",
    "choices": [
      "ノードのBIOSを更新する",
      "etcdを暗号通貨化する",
      "クラスタ外部からサービスへHTTP/HTTPSアクセスを公開する",
      "コンテナイメージを圧縮する"
    ],
    "answer": "クラスタ外部からサービスへHTTP/HTTPSアクセスを公開する",
    "explanation": "Routeは外部公開のためのOpenShiftリソースです。 試験対策では、用語の意味と実務での使いどころをセットで確認しましょう。"
  },
  {
    "question": "【基礎】PersistentVolumeClaimを使う目的は何ですか？（No.113）",
    "choices": [
      "Pod名を必ず変更する",
      "APIサーバーを停止する",
      "Secretを平文で公開する",
      "Podが利用する永続ストレージを要求する"
    ],
    "answer": "Podが利用する永続ストレージを要求する",
    "explanation": "PVCは永続ストレージの要求を表します。 試験対策では、用語の意味と実務での使いどころをセットで確認しましょう。"
  },
  {
    "question": "【基礎】ClusterVersionの確認が重要な理由は何ですか？（No.114）",
    "choices": [
      "Ingressを無効化するため",
      "クラスタのバージョンや更新状態を把握するため",
      "ユーザーの給与を計算するため",
      "全Podのログを削除するため"
    ],
    "answer": "クラスタのバージョンや更新状態を把握するため",
    "explanation": "管理ではバージョンと更新状態の把握が重要です。 試験対策では、用語の意味と実務での使いどころをセットで確認しましょう。"
  },
  {
    "question": "【設計】OpenShiftのProjectはKubernetesの何に近い概念ですか？（No.115）",
    "choices": [
      "Namespace",
      "NodePort",
      "PersistentVolume",
      "Containerfile"
    ],
    "answer": "Namespace",
    "explanation": "ProjectはNamespaceにOpenShift独自機能を加えた管理単位です。 試験対策では、用語の意味と実務での使いどころをセットで確認しましょう。"
  },
  {
    "question": "【設計】OpenShiftでRBACを使う主な目的は何ですか？（No.116）",
    "choices": [
      "ユーザーやサービスアカウントの操作権限を制御する",
      "Routeを必ず無効化する",
      "PodのCPUを物理的に増設する",
      "Gitの履歴を削除する"
    ],
    "answer": "ユーザーやサービスアカウントの操作権限を制御する",
    "explanation": "RBACにより最小権限でクラスタを管理できます。 試験対策では、用語の意味と実務での使いどころをセットで確認しましょう。"
  },
  {
    "question": "【設計】Operatorの説明として正しいものはどれですか？（No.117）",
    "choices": [
      "ネットワークケーブルの規格",
      "アプリやミドルウェアの運用知識を自動化する仕組み",
      "必ずPodを削除するコマンド",
      "ユーザー画面の色設定"
    ],
    "answer": "アプリやミドルウェアの運用知識を自動化する仕組み",
    "explanation": "OperatorはKubernetes上の運用を自動化します。 試験対策では、用語の意味と実務での使いどころをセットで確認しましょう。"
  },
  {
    "question": "【設計】OpenShift Routeの主な役割は何ですか？（No.118）",
    "choices": [
      "ノードのBIOSを更新する",
      "コンテナイメージを圧縮する",
      "クラスタ外部からサービスへHTTP/HTTPSアクセスを公開する",
      "etcdを暗号通貨化する"
    ],
    "answer": "クラスタ外部からサービスへHTTP/HTTPSアクセスを公開する",
    "explanation": "Routeは外部公開のためのOpenShiftリソースです。 試験対策では、用語の意味と実務での使いどころをセットで確認しましょう。"
  },
  {
    "question": "【設計】PersistentVolumeClaimを使う目的は何ですか？（No.119）",
    "choices": [
      "Secretを平文で公開する",
      "Podが利用する永続ストレージを要求する",
      "Pod名を必ず変更する",
      "APIサーバーを停止する"
    ],
    "answer": "Podが利用する永続ストレージを要求する",
    "explanation": "PVCは永続ストレージの要求を表します。 試験対策では、用語の意味と実務での使いどころをセットで確認しましょう。"
  },
  {
    "question": "【設計】ClusterVersionの確認が重要な理由は何ですか？（No.120）",
    "choices": [
      "ユーザーの給与を計算するため",
      "クラスタのバージョンや更新状態を把握するため",
      "Ingressを無効化するため",
      "全Podのログを削除するため"
    ],
    "answer": "クラスタのバージョンや更新状態を把握するため",
    "explanation": "管理ではバージョンと更新状態の把握が重要です。 試験対策では、用語の意味と実務での使いどころをセットで確認しましょう。"
  },
  {
    "question": "【運用】OpenShiftのProjectはKubernetesの何に近い概念ですか？（No.121）",
    "choices": [
      "NodePort",
      "PersistentVolume",
      "Containerfile",
      "Namespace"
    ],
    "answer": "Namespace",
    "explanation": "ProjectはNamespaceにOpenShift独自機能を加えた管理単位です。 試験対策では、用語の意味と実務での使いどころをセットで確認しましょう。"
  },
  {
    "question": "【運用】OpenShiftでRBACを使う主な目的は何ですか？（No.122）",
    "choices": [
      "Routeを必ず無効化する",
      "PodのCPUを物理的に増設する",
      "ユーザーやサービスアカウントの操作権限を制御する",
      "Gitの履歴を削除する"
    ],
    "answer": "ユーザーやサービスアカウントの操作権限を制御する",
    "explanation": "RBACにより最小権限でクラスタを管理できます。 試験対策では、用語の意味と実務での使いどころをセットで確認しましょう。"
  },
  {
    "question": "【運用】Operatorの説明として正しいものはどれですか？（No.123）",
    "choices": [
      "ユーザー画面の色設定",
      "ネットワークケーブルの規格",
      "必ずPodを削除するコマンド",
      "アプリやミドルウェアの運用知識を自動化する仕組み"
    ],
    "answer": "アプリやミドルウェアの運用知識を自動化する仕組み",
    "explanation": "OperatorはKubernetes上の運用を自動化します。 試験対策では、用語の意味と実務での使いどころをセットで確認しましょう。"
  },
  {
    "question": "【運用】OpenShift Routeの主な役割は何ですか？（No.124）",
    "choices": [
      "etcdを暗号通貨化する",
      "ノードのBIOSを更新する",
      "クラスタ外部からサービスへHTTP/HTTPSアクセスを公開する",
      "コンテナイメージを圧縮する"
    ],
    "answer": "クラスタ外部からサービスへHTTP/HTTPSアクセスを公開する",
    "explanation": "Routeは外部公開のためのOpenShiftリソースです。 試験対策では、用語の意味と実務での使いどころをセットで確認しましょう。"
  },
  {
    "question": "【運用】PersistentVolumeClaimを使う目的は何ですか？（No.125）",
    "choices": [
      "Pod名を必ず変更する",
      "Secretを平文で公開する",
      "APIサーバーを停止する",
      "Podが利用する永続ストレージを要求する"
    ],
    "answer": "Podが利用する永続ストレージを要求する",
    "explanation": "PVCは永続ストレージの要求を表します。 試験対策では、用語の意味と実務での使いどころをセットで確認しましょう。"
  },
  {
    "question": "【運用】ClusterVersionの確認が重要な理由は何ですか？（No.126）",
    "choices": [
      "全Podのログを削除するため",
      "クラスタのバージョンや更新状態を把握するため",
      "ユーザーの給与を計算するため",
      "Ingressを無効化するため"
    ],
    "answer": "クラスタのバージョンや更新状態を把握するため",
    "explanation": "管理ではバージョンと更新状態の把握が重要です。 試験対策では、用語の意味と実務での使いどころをセットで確認しましょう。"
  },
  {
    "question": "【セキュリティ】OpenShiftのProjectはKubernetesの何に近い概念ですか？（No.127）",
    "choices": [
      "NodePort",
      "PersistentVolume",
      "Namespace",
      "Containerfile"
    ],
    "answer": "Namespace",
    "explanation": "ProjectはNamespaceにOpenShift独自機能を加えた管理単位です。 試験対策では、用語の意味と実務での使いどころをセットで確認しましょう。"
  },
  {
    "question": "【セキュリティ】OpenShiftでRBACを使う主な目的は何ですか？（No.128）",
    "choices": [
      "Routeを必ず無効化する",
      "ユーザーやサービスアカウントの操作権限を制御する",
      "Gitの履歴を削除する",
      "PodのCPUを物理的に増設する"
    ],
    "answer": "ユーザーやサービスアカウントの操作権限を制御する",
    "explanation": "RBACにより最小権限でクラスタを管理できます。 試験対策では、用語の意味と実務での使いどころをセットで確認しましょう。"
  },
  {
    "question": "【セキュリティ】Operatorの説明として正しいものはどれですか？（No.129）",
    "choices": [
      "ネットワークケーブルの規格",
      "ユーザー画面の色設定",
      "アプリやミドルウェアの運用知識を自動化する仕組み",
      "必ずPodを削除するコマンド"
    ],
    "answer": "アプリやミドルウェアの運用知識を自動化する仕組み",
    "explanation": "OperatorはKubernetes上の運用を自動化します。 試験対策では、用語の意味と実務での使いどころをセットで確認しましょう。"
  },
  {
    "question": "【セキュリティ】OpenShift Routeの主な役割は何ですか？（No.130）",
    "choices": [
      "ノードのBIOSを更新する",
      "コンテナイメージを圧縮する",
      "etcdを暗号通貨化する",
      "クラスタ外部からサービスへHTTP/HTTPSアクセスを公開する"
    ],
    "answer": "クラスタ外部からサービスへHTTP/HTTPSアクセスを公開する",
    "explanation": "Routeは外部公開のためのOpenShiftリソースです。 試験対策では、用語の意味と実務での使いどころをセットで確認しましょう。"
  },
  {
    "question": "【セキュリティ】PersistentVolumeClaimを使う目的は何ですか？（No.131）",
    "choices": [
      "Podが利用する永続ストレージを要求する",
      "Secretを平文で公開する",
      "Pod名を必ず変更する",
      "APIサーバーを停止する"
    ],
    "answer": "Podが利用する永続ストレージを要求する",
    "explanation": "PVCは永続ストレージの要求を表します。 試験対策では、用語の意味と実務での使いどころをセットで確認しましょう。"
  },
  {
    "question": "【セキュリティ】ClusterVersionの確認が重要な理由は何ですか？（No.132）",
    "choices": [
      "Ingressを無効化するため",
      "全Podのログを削除するため",
      "クラスタのバージョンや更新状態を把握するため",
      "ユーザーの給与を計算するため"
    ],
    "answer": "クラスタのバージョンや更新状態を把握するため",
    "explanation": "管理ではバージョンと更新状態の把握が重要です。 試験対策では、用語の意味と実務での使いどころをセットで確認しましょう。"
  },
  {
    "question": "【トラブルシューティング】OpenShiftのProjectはKubernetesの何に近い概念ですか？（No.133）",
    "choices": [
      "NodePort",
      "PersistentVolume",
      "Namespace",
      "Containerfile"
    ],
    "answer": "Namespace",
    "explanation": "ProjectはNamespaceにOpenShift独自機能を加えた管理単位です。 試験対策では、用語の意味と実務での使いどころをセットで確認しましょう。"
  },
  {
    "question": "【トラブルシューティング】OpenShiftでRBACを使う主な目的は何ですか？（No.134）",
    "choices": [
      "Routeを必ず無効化する",
      "ユーザーやサービスアカウントの操作権限を制御する",
      "Gitの履歴を削除する",
      "PodのCPUを物理的に増設する"
    ],
    "answer": "ユーザーやサービスアカウントの操作権限を制御する",
    "explanation": "RBACにより最小権限でクラスタを管理できます。 試験対策では、用語の意味と実務での使いどころをセットで確認しましょう。"
  },
  {
    "question": "【トラブルシューティング】Operatorの説明として正しいものはどれですか？（No.135）",
    "choices": [
      "アプリやミドルウェアの運用知識を自動化する仕組み",
      "ネットワークケーブルの規格",
      "ユーザー画面の色設定",
      "必ずPodを削除するコマンド"
    ],
    "answer": "アプリやミドルウェアの運用知識を自動化する仕組み",
    "explanation": "OperatorはKubernetes上の運用を自動化します。 試験対策では、用語の意味と実務での使いどころをセットで確認しましょう。"
  },
  {
    "question": "【トラブルシューティング】OpenShift Routeの主な役割は何ですか？（No.136）",
    "choices": [
      "コンテナイメージを圧縮する",
      "クラスタ外部からサービスへHTTP/HTTPSアクセスを公開する",
      "ノードのBIOSを更新する",
      "etcdを暗号通貨化する"
    ],
    "answer": "クラスタ外部からサービスへHTTP/HTTPSアクセスを公開する",
    "explanation": "Routeは外部公開のためのOpenShiftリソースです。 試験対策では、用語の意味と実務での使いどころをセットで確認しましょう。"
  },
  {
    "question": "【トラブルシューティング】PersistentVolumeClaimを使う目的は何ですか？（No.137）",
    "choices": [
      "Secretを平文で公開する",
      "Pod名を必ず変更する",
      "APIサーバーを停止する",
      "Podが利用する永続ストレージを要求する"
    ],
    "answer": "Podが利用する永続ストレージを要求する",
    "explanation": "PVCは永続ストレージの要求を表します。 試験対策では、用語の意味と実務での使いどころをセットで確認しましょう。"
  },
  {
    "question": "【トラブルシューティング】ClusterVersionの確認が重要な理由は何ですか？（No.138）",
    "choices": [
      "全Podのログを削除するため",
      "Ingressを無効化するため",
      "クラスタのバージョンや更新状態を把握するため",
      "ユーザーの給与を計算するため"
    ],
    "answer": "クラスタのバージョンや更新状態を把握するため",
    "explanation": "管理ではバージョンと更新状態の把握が重要です。 試験対策では、用語の意味と実務での使いどころをセットで確認しましょう。"
  },
  {
    "question": "【ベストプラクティス】OpenShiftのProjectはKubernetesの何に近い概念ですか？（No.139）",
    "choices": [
      "Containerfile",
      "NodePort",
      "Namespace",
      "PersistentVolume"
    ],
    "answer": "Namespace",
    "explanation": "ProjectはNamespaceにOpenShift独自機能を加えた管理単位です。 試験対策では、用語の意味と実務での使いどころをセットで確認しましょう。"
  },
  {
    "question": "【ベストプラクティス】OpenShiftでRBACを使う主な目的は何ですか？（No.140）",
    "choices": [
      "Routeを必ず無効化する",
      "PodのCPUを物理的に増設する",
      "ユーザーやサービスアカウントの操作権限を制御する",
      "Gitの履歴を削除する"
    ],
    "answer": "ユーザーやサービスアカウントの操作権限を制御する",
    "explanation": "RBACにより最小権限でクラスタを管理できます。 試験対策では、用語の意味と実務での使いどころをセットで確認しましょう。"
  },
  {
    "question": "【ベストプラクティス】Operatorの説明として正しいものはどれですか？（No.141）",
    "choices": [
      "アプリやミドルウェアの運用知識を自動化する仕組み",
      "ネットワークケーブルの規格",
      "ユーザー画面の色設定",
      "必ずPodを削除するコマンド"
    ],
    "answer": "アプリやミドルウェアの運用知識を自動化する仕組み",
    "explanation": "OperatorはKubernetes上の運用を自動化します。 試験対策では、用語の意味と実務での使いどころをセットで確認しましょう。"
  },
  {
    "question": "【ベストプラクティス】OpenShift Routeの主な役割は何ですか？（No.142）",
    "choices": [
      "クラスタ外部からサービスへHTTP/HTTPSアクセスを公開する",
      "ノードのBIOSを更新する",
      "コンテナイメージを圧縮する",
      "etcdを暗号通貨化する"
    ],
    "answer": "クラスタ外部からサービスへHTTP/HTTPSアクセスを公開する",
    "explanation": "Routeは外部公開のためのOpenShiftリソースです。 試験対策では、用語の意味と実務での使いどころをセットで確認しましょう。"
  },
  {
    "question": "【ベストプラクティス】PersistentVolumeClaimを使う目的は何ですか？（No.143）",
    "choices": [
      "Pod名を必ず変更する",
      "APIサーバーを停止する",
      "Secretを平文で公開する",
      "Podが利用する永続ストレージを要求する"
    ],
    "answer": "Podが利用する永続ストレージを要求する",
    "explanation": "PVCは永続ストレージの要求を表します。 試験対策では、用語の意味と実務での使いどころをセットで確認しましょう。"
  },
  {
    "question": "【ベストプラクティス】ClusterVersionの確認が重要な理由は何ですか？（No.144）",
    "choices": [
      "Ingressを無効化するため",
      "クラスタのバージョンや更新状態を把握するため",
      "全Podのログを削除するため",
      "ユーザーの給与を計算するため"
    ],
    "answer": "クラスタのバージョンや更新状態を把握するため",
    "explanation": "管理ではバージョンと更新状態の把握が重要です。 試験対策では、用語の意味と実務での使いどころをセットで確認しましょう。"
  },
  {
    "question": "【基礎】OpenShiftのProjectはKubernetesの何に近い概念ですか？（No.145）",
    "choices": [
      "Namespace",
      "PersistentVolume",
      "NodePort",
      "Containerfile"
    ],
    "answer": "Namespace",
    "explanation": "ProjectはNamespaceにOpenShift独自機能を加えた管理単位です。 試験対策では、用語の意味と実務での使いどころをセットで確認しましょう。"
  },
  {
    "question": "【基礎】OpenShiftでRBACを使う主な目的は何ですか？（No.146）",
    "choices": [
      "PodのCPUを物理的に増設する",
      "Gitの履歴を削除する",
      "ユーザーやサービスアカウントの操作権限を制御する",
      "Routeを必ず無効化する"
    ],
    "answer": "ユーザーやサービスアカウントの操作権限を制御する",
    "explanation": "RBACにより最小権限でクラスタを管理できます。 試験対策では、用語の意味と実務での使いどころをセットで確認しましょう。"
  },
  {
    "question": "【基礎】Operatorの説明として正しいものはどれですか？（No.147）",
    "choices": [
      "ネットワークケーブルの規格",
      "アプリやミドルウェアの運用知識を自動化する仕組み",
      "必ずPodを削除するコマンド",
      "ユーザー画面の色設定"
    ],
    "answer": "アプリやミドルウェアの運用知識を自動化する仕組み",
    "explanation": "OperatorはKubernetes上の運用を自動化します。 試験対策では、用語の意味と実務での使いどころをセットで確認しましょう。"
  },
  {
    "question": "【基礎】OpenShift Routeの主な役割は何ですか？（No.148）",
    "choices": [
      "コンテナイメージを圧縮する",
      "etcdを暗号通貨化する",
      "クラスタ外部からサービスへHTTP/HTTPSアクセスを公開する",
      "ノードのBIOSを更新する"
    ],
    "answer": "クラスタ外部からサービスへHTTP/HTTPSアクセスを公開する",
    "explanation": "Routeは外部公開のためのOpenShiftリソースです。 試験対策では、用語の意味と実務での使いどころをセットで確認しましょう。"
  },
  {
    "question": "【基礎】PersistentVolumeClaimを使う目的は何ですか？（No.149）",
    "choices": [
      "APIサーバーを停止する",
      "Podが利用する永続ストレージを要求する",
      "Secretを平文で公開する",
      "Pod名を必ず変更する"
    ],
    "answer": "Podが利用する永続ストレージを要求する",
    "explanation": "PVCは永続ストレージの要求を表します。 試験対策では、用語の意味と実務での使いどころをセットで確認しましょう。"
  },
  {
    "question": "【基礎】ClusterVersionの確認が重要な理由は何ですか？（No.150）",
    "choices": [
      "クラスタのバージョンや更新状態を把握するため",
      "Ingressを無効化するため",
      "全Podのログを削除するため",
      "ユーザーの給与を計算するため"
    ],
    "answer": "クラスタのバージョンや更新状態を把握するため",
    "explanation": "管理ではバージョンと更新状態の把握が重要です。 試験対策では、用語の意味と実務での使いどころをセットで確認しましょう。"
  },
  {
    "question": "【設計】OpenShiftのProjectはKubernetesの何に近い概念ですか？（No.151）",
    "choices": [
      "Containerfile",
      "NodePort",
      "PersistentVolume",
      "Namespace"
    ],
    "answer": "Namespace",
    "explanation": "ProjectはNamespaceにOpenShift独自機能を加えた管理単位です。 試験対策では、用語の意味と実務での使いどころをセットで確認しましょう。"
  },
  {
    "question": "【設計】OpenShiftでRBACを使う主な目的は何ですか？（No.152）",
    "choices": [
      "ユーザーやサービスアカウントの操作権限を制御する",
      "Routeを必ず無効化する",
      "Gitの履歴を削除する",
      "PodのCPUを物理的に増設する"
    ],
    "answer": "ユーザーやサービスアカウントの操作権限を制御する",
    "explanation": "RBACにより最小権限でクラスタを管理できます。 試験対策では、用語の意味と実務での使いどころをセットで確認しましょう。"
  },
  {
    "question": "【設計】Operatorの説明として正しいものはどれですか？（No.153）",
    "choices": [
      "ネットワークケーブルの規格",
      "ユーザー画面の色設定",
      "必ずPodを削除するコマンド",
      "アプリやミドルウェアの運用知識を自動化する仕組み"
    ],
    "answer": "アプリやミドルウェアの運用知識を自動化する仕組み",
    "explanation": "OperatorはKubernetes上の運用を自動化します。 試験対策では、用語の意味と実務での使いどころをセットで確認しましょう。"
  },
  {
    "question": "【設計】OpenShift Routeの主な役割は何ですか？（No.154）",
    "choices": [
      "クラスタ外部からサービスへHTTP/HTTPSアクセスを公開する",
      "ノードのBIOSを更新する",
      "etcdを暗号通貨化する",
      "コンテナイメージを圧縮する"
    ],
    "answer": "クラスタ外部からサービスへHTTP/HTTPSアクセスを公開する",
    "explanation": "Routeは外部公開のためのOpenShiftリソースです。 試験対策では、用語の意味と実務での使いどころをセットで確認しましょう。"
  },
  {
    "question": "【設計】PersistentVolumeClaimを使う目的は何ですか？（No.155）",
    "choices": [
      "APIサーバーを停止する",
      "Podが利用する永続ストレージを要求する",
      "Pod名を必ず変更する",
      "Secretを平文で公開する"
    ],
    "answer": "Podが利用する永続ストレージを要求する",
    "explanation": "PVCは永続ストレージの要求を表します。 試験対策では、用語の意味と実務での使いどころをセットで確認しましょう。"
  },
  {
    "question": "【設計】ClusterVersionの確認が重要な理由は何ですか？（No.156）",
    "choices": [
      "Ingressを無効化するため",
      "全Podのログを削除するため",
      "クラスタのバージョンや更新状態を把握するため",
      "ユーザーの給与を計算するため"
    ],
    "answer": "クラスタのバージョンや更新状態を把握するため",
    "explanation": "管理ではバージョンと更新状態の把握が重要です。 試験対策では、用語の意味と実務での使いどころをセットで確認しましょう。"
  },
  {
    "question": "【運用】OpenShiftのProjectはKubernetesの何に近い概念ですか？（No.157）",
    "choices": [
      "NodePort",
      "Namespace",
      "Containerfile",
      "PersistentVolume"
    ],
    "answer": "Namespace",
    "explanation": "ProjectはNamespaceにOpenShift独自機能を加えた管理単位です。 試験対策では、用語の意味と実務での使いどころをセットで確認しましょう。"
  },
  {
    "question": "【運用】OpenShiftでRBACを使う主な目的は何ですか？（No.158）",
    "choices": [
      "PodのCPUを物理的に増設する",
      "ユーザーやサービスアカウントの操作権限を制御する",
      "Gitの履歴を削除する",
      "Routeを必ず無効化する"
    ],
    "answer": "ユーザーやサービスアカウントの操作権限を制御する",
    "explanation": "RBACにより最小権限でクラスタを管理できます。 試験対策では、用語の意味と実務での使いどころをセットで確認しましょう。"
  },
  {
    "question": "【運用】Operatorの説明として正しいものはどれですか？（No.159）",
    "choices": [
      "ネットワークケーブルの規格",
      "ユーザー画面の色設定",
      "アプリやミドルウェアの運用知識を自動化する仕組み",
      "必ずPodを削除するコマンド"
    ],
    "answer": "アプリやミドルウェアの運用知識を自動化する仕組み",
    "explanation": "OperatorはKubernetes上の運用を自動化します。 試験対策では、用語の意味と実務での使いどころをセットで確認しましょう。"
  },
  {
    "question": "【運用】OpenShift Routeの主な役割は何ですか？（No.160）",
    "choices": [
      "コンテナイメージを圧縮する",
      "ノードのBIOSを更新する",
      "etcdを暗号通貨化する",
      "クラスタ外部からサービスへHTTP/HTTPSアクセスを公開する"
    ],
    "answer": "クラスタ外部からサービスへHTTP/HTTPSアクセスを公開する",
    "explanation": "Routeは外部公開のためのOpenShiftリソースです。 試験対策では、用語の意味と実務での使いどころをセットで確認しましょう。"
  },
  {
    "question": "【運用】PersistentVolumeClaimを使う目的は何ですか？（No.161）",
    "choices": [
      "Podが利用する永続ストレージを要求する",
      "APIサーバーを停止する",
      "Secretを平文で公開する",
      "Pod名を必ず変更する"
    ],
    "answer": "Podが利用する永続ストレージを要求する",
    "explanation": "PVCは永続ストレージの要求を表します。 試験対策では、用語の意味と実務での使いどころをセットで確認しましょう。"
  },
  {
    "question": "【運用】ClusterVersionの確認が重要な理由は何ですか？（No.162）",
    "choices": [
      "ユーザーの給与を計算するため",
      "全Podのログを削除するため",
      "クラスタのバージョンや更新状態を把握するため",
      "Ingressを無効化するため"
    ],
    "answer": "クラスタのバージョンや更新状態を把握するため",
    "explanation": "管理ではバージョンと更新状態の把握が重要です。 試験対策では、用語の意味と実務での使いどころをセットで確認しましょう。"
  },
  {
    "question": "【セキュリティ】OpenShiftのProjectはKubernetesの何に近い概念ですか？（No.163）",
    "choices": [
      "Namespace",
      "PersistentVolume",
      "Containerfile",
      "NodePort"
    ],
    "answer": "Namespace",
    "explanation": "ProjectはNamespaceにOpenShift独自機能を加えた管理単位です。 試験対策では、用語の意味と実務での使いどころをセットで確認しましょう。"
  },
  {
    "question": "【セキュリティ】OpenShiftでRBACを使う主な目的は何ですか？（No.164）",
    "choices": [
      "Gitの履歴を削除する",
      "ユーザーやサービスアカウントの操作権限を制御する",
      "PodのCPUを物理的に増設する",
      "Routeを必ず無効化する"
    ],
    "answer": "ユーザーやサービスアカウントの操作権限を制御する",
    "explanation": "RBACにより最小権限でクラスタを管理できます。 試験対策では、用語の意味と実務での使いどころをセットで確認しましょう。"
  },
  {
    "question": "【セキュリティ】Operatorの説明として正しいものはどれですか？（No.165）",
    "choices": [
      "アプリやミドルウェアの運用知識を自動化する仕組み",
      "ネットワークケーブルの規格",
      "ユーザー画面の色設定",
      "必ずPodを削除するコマンド"
    ],
    "answer": "アプリやミドルウェアの運用知識を自動化する仕組み",
    "explanation": "OperatorはKubernetes上の運用を自動化します。 試験対策では、用語の意味と実務での使いどころをセットで確認しましょう。"
  },
  {
    "question": "【セキュリティ】OpenShift Routeの主な役割は何ですか？（No.166）",
    "choices": [
      "ノードのBIOSを更新する",
      "etcdを暗号通貨化する",
      "クラスタ外部からサービスへHTTP/HTTPSアクセスを公開する",
      "コンテナイメージを圧縮する"
    ],
    "answer": "クラスタ外部からサービスへHTTP/HTTPSアクセスを公開する",
    "explanation": "Routeは外部公開のためのOpenShiftリソースです。 試験対策では、用語の意味と実務での使いどころをセットで確認しましょう。"
  },
  {
    "question": "【セキュリティ】PersistentVolumeClaimを使う目的は何ですか？（No.167）",
    "choices": [
      "Pod名を必ず変更する",
      "Podが利用する永続ストレージを要求する",
      "APIサーバーを停止する",
      "Secretを平文で公開する"
    ],
    "answer": "Podが利用する永続ストレージを要求する",
    "explanation": "PVCは永続ストレージの要求を表します。 試験対策では、用語の意味と実務での使いどころをセットで確認しましょう。"
  },
  {
    "question": "【セキュリティ】ClusterVersionの確認が重要な理由は何ですか？（No.168）",
    "choices": [
      "クラスタのバージョンや更新状態を把握するため",
      "ユーザーの給与を計算するため",
      "Ingressを無効化するため",
      "全Podのログを削除するため"
    ],
    "answer": "クラスタのバージョンや更新状態を把握するため",
    "explanation": "管理ではバージョンと更新状態の把握が重要です。 試験対策では、用語の意味と実務での使いどころをセットで確認しましょう。"
  },
  {
    "question": "【トラブルシューティング】OpenShiftのProjectはKubernetesの何に近い概念ですか？（No.169）",
    "choices": [
      "Containerfile",
      "NodePort",
      "Namespace",
      "PersistentVolume"
    ],
    "answer": "Namespace",
    "explanation": "ProjectはNamespaceにOpenShift独自機能を加えた管理単位です。 試験対策では、用語の意味と実務での使いどころをセットで確認しましょう。"
  },
  {
    "question": "【トラブルシューティング】OpenShiftでRBACを使う主な目的は何ですか？（No.170）",
    "choices": [
      "Routeを必ず無効化する",
      "Gitの履歴を削除する",
      "ユーザーやサービスアカウントの操作権限を制御する",
      "PodのCPUを物理的に増設する"
    ],
    "answer": "ユーザーやサービスアカウントの操作権限を制御する",
    "explanation": "RBACにより最小権限でクラスタを管理できます。 試験対策では、用語の意味と実務での使いどころをセットで確認しましょう。"
  },
  {
    "question": "【トラブルシューティング】Operatorの説明として正しいものはどれですか？（No.171）",
    "choices": [
      "ネットワークケーブルの規格",
      "ユーザー画面の色設定",
      "必ずPodを削除するコマンド",
      "アプリやミドルウェアの運用知識を自動化する仕組み"
    ],
    "answer": "アプリやミドルウェアの運用知識を自動化する仕組み",
    "explanation": "OperatorはKubernetes上の運用を自動化します。 試験対策では、用語の意味と実務での使いどころをセットで確認しましょう。"
  },
  {
    "question": "【トラブルシューティング】OpenShift Routeの主な役割は何ですか？（No.172）",
    "choices": [
      "コンテナイメージを圧縮する",
      "etcdを暗号通貨化する",
      "ノードのBIOSを更新する",
      "クラスタ外部からサービスへHTTP/HTTPSアクセスを公開する"
    ],
    "answer": "クラスタ外部からサービスへHTTP/HTTPSアクセスを公開する",
    "explanation": "Routeは外部公開のためのOpenShiftリソースです。 試験対策では、用語の意味と実務での使いどころをセットで確認しましょう。"
  },
  {
    "question": "【トラブルシューティング】PersistentVolumeClaimを使う目的は何ですか？（No.173）",
    "choices": [
      "Podが利用する永続ストレージを要求する",
      "Pod名を必ず変更する",
      "Secretを平文で公開する",
      "APIサーバーを停止する"
    ],
    "answer": "Podが利用する永続ストレージを要求する",
    "explanation": "PVCは永続ストレージの要求を表します。 試験対策では、用語の意味と実務での使いどころをセットで確認しましょう。"
  },
  {
    "question": "【トラブルシューティング】ClusterVersionの確認が重要な理由は何ですか？（No.174）",
    "choices": [
      "Ingressを無効化するため",
      "全Podのログを削除するため",
      "クラスタのバージョンや更新状態を把握するため",
      "ユーザーの給与を計算するため"
    ],
    "answer": "クラスタのバージョンや更新状態を把握するため",
    "explanation": "管理ではバージョンと更新状態の把握が重要です。 試験対策では、用語の意味と実務での使いどころをセットで確認しましょう。"
  },
  {
    "question": "【ベストプラクティス】OpenShiftのProjectはKubernetesの何に近い概念ですか？（No.175）",
    "choices": [
      "PersistentVolume",
      "Containerfile",
      "NodePort",
      "Namespace"
    ],
    "answer": "Namespace",
    "explanation": "ProjectはNamespaceにOpenShift独自機能を加えた管理単位です。 試験対策では、用語の意味と実務での使いどころをセットで確認しましょう。"
  },
  {
    "question": "【ベストプラクティス】OpenShiftでRBACを使う主な目的は何ですか？（No.176）",
    "choices": [
      "PodのCPUを物理的に増設する",
      "Routeを必ず無効化する",
      "ユーザーやサービスアカウントの操作権限を制御する",
      "Gitの履歴を削除する"
    ],
    "answer": "ユーザーやサービスアカウントの操作権限を制御する",
    "explanation": "RBACにより最小権限でクラスタを管理できます。 試験対策では、用語の意味と実務での使いどころをセットで確認しましょう。"
  },
  {
    "question": "【ベストプラクティス】Operatorの説明として正しいものはどれですか？（No.177）",
    "choices": [
      "ネットワークケーブルの規格",
      "ユーザー画面の色設定",
      "必ずPodを削除するコマンド",
      "アプリやミドルウェアの運用知識を自動化する仕組み"
    ],
    "answer": "アプリやミドルウェアの運用知識を自動化する仕組み",
    "explanation": "OperatorはKubernetes上の運用を自動化します。 試験対策では、用語の意味と実務での使いどころをセットで確認しましょう。"
  },
  {
    "question": "【ベストプラクティス】OpenShift Routeの主な役割は何ですか？（No.178）",
    "choices": [
      "ノードのBIOSを更新する",
      "クラスタ外部からサービスへHTTP/HTTPSアクセスを公開する",
      "etcdを暗号通貨化する",
      "コンテナイメージを圧縮する"
    ],
    "answer": "クラスタ外部からサービスへHTTP/HTTPSアクセスを公開する",
    "explanation": "Routeは外部公開のためのOpenShiftリソースです。 試験対策では、用語の意味と実務での使いどころをセットで確認しましょう。"
  },
  {
    "question": "【ベストプラクティス】PersistentVolumeClaimを使う目的は何ですか？（No.179）",
    "choices": [
      "Podが利用する永続ストレージを要求する",
      "Pod名を必ず変更する",
      "Secretを平文で公開する",
      "APIサーバーを停止する"
    ],
    "answer": "Podが利用する永続ストレージを要求する",
    "explanation": "PVCは永続ストレージの要求を表します。 試験対策では、用語の意味と実務での使いどころをセットで確認しましょう。"
  },
  {
    "question": "【ベストプラクティス】ClusterVersionの確認が重要な理由は何ですか？（No.180）",
    "choices": [
      "全Podのログを削除するため",
      "ユーザーの給与を計算するため",
      "Ingressを無効化するため",
      "クラスタのバージョンや更新状態を把握するため"
    ],
    "answer": "クラスタのバージョンや更新状態を把握するため",
    "explanation": "管理ではバージョンと更新状態の把握が重要です。 試験対策では、用語の意味と実務での使いどころをセットで確認しましょう。"
  }
];
