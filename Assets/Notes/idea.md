## アイデアと変更履歴

### 2024-07-30
- `fallwords.html` のボタンにCSSクラス `.version-button` を適用し、サイズを統一しました。また、JavaScriptコードを簡素化し、`iframe` のHTMLを共通部分と動的な部分に分けました。
- `fallwords.html`のボタンデザインを改善しました。既存の`.version-button`クラスを適用し、ホバーアニメーションを追加、さらに`style.css`に`.version-button-container`クラスを追加してボタンのレイアウトを調整しました。
- `fallwords.html`のJavaScriptコードの冗長性を解消するため、ゲーム埋め込みHTMLを生成する共通関数`loadGameVersion`を作成し、各ボタンのイベントリスナーから呼び出すようにリファクタリングしました。
- `fallwords.html`にver3、ver4、ver5のボタンを追加し、それぞれのボタンがクリックされたときに新しいiframeのURLでゲームがロードされるようにJavaScriptを更新しました。
- **メモ:** itch.ioでゲームを埋め込む際は、配布するページの「Embed Game」セクションから埋め込み用のURLを取得する必要がある。また、埋め込んだゲームが表示されるためには、プロジェクトが公開設定になっている必要がある。一つのプロジェクトに複数のビルドをアップロードできるため、バージョン管理にはこの方法が推奨される。