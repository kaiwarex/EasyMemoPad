//追加ボタン押下時に実行する関数
const onClickAdd = () => {
    //テキストボックスのElementを取得
    const textEl = document.getElementById("add-text");
    //テキストボックスの値を取得
    const text = textEl.value;
    //テキストボックスを初期化
    textEl.value = "";
    //liタグ生成
    const li = document.createElement("li");
    //divタグ生成
    const div = document.createElement("div");
    //pタグ生成
    const p = document.createElement("p");
    p.textContent1 = text;
    //buttonタグ生成
    const button = document.createElement("button");
    button.textContent = "削除";

    /**
     * 下記はボタン押下時に行を削除する処理
     */
    button.addEventListener("click",()=>{
        //削除対象の行(li)を取得
        //closestは親要素に一致する文字列を探すメソッド
        const deleteTarget = button.closest("li");
        //ulタグ配下から上記で特定した行を削除
        document.getElementById("memo-list").removeChild(deleteTarget);
    });
  //divタグ配下にpタグとbuttonタグを設定
  div.appendChild(p);
  div.appendChild(button);
  //liタグ配下にdivタグを設定
  li.appendChild(div);
  // メモの一覧のリストに上記のliタグを設定
  document.getElementById("memo-list").appendChild(li); 
};