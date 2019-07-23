let index = 1;
function getJSONP(data){
	let tab_item = $(".tab_item");
	let items = $("#items");
	for(let i = 0; i < data.length; i++){
		let A = tab_item.clone();
		A.css("display","block");
		A.find(".tab_item_cap > img").attr("src",data[i].imgUrl[0]);
		A.find(".tab_item_content > .tab_item_name").html(data[i].name);
		A.find(".tab_item_discount > #discount_pct").html(`-${data[i].discount * 100}%`)
		if(data[i].discount == 0){
			A.find(".tab_item_discount > #discount_pct").html("");
		}
		A.find(".tab_item_discount > .discount_original_price").html(`￥${data[i].originPrice}`);
		if(data[i].originPrice == "免费开玩"){
			A.find(".tab_item_discount > .discount_final_price").html(`${data[i].price}`);
		}
		A.find(".tab_item_discount > .discount_final_price").html(`￥${data[i].price}`);
		if(data[i].price == "免费开玩"){
			A.find(".tab_item_discount > .discount_final_price").html(`${data[i].price}`);
		}
		if(data[i].originPrice == data[i].price){
			A.find(".tab_item_discount > .discount_original_price").html("");
		}
		items.append(A);
	}
}	

$(".pagebtn").click(function(){
	index++;
	console.log(index)
	let src = $("#src").attr("src","http://pujie1213.top:90/gamePage?page=" + index + "&callback=getJSONP")
})