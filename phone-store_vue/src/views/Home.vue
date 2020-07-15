<template>
    <div class="home">

        <van-tabs active="1" bind:change="onChange">
            <van-tab title="媚焰红"></van-tab>
            <van-tab title="极光蓝"></van-tab>
            <van-tab title="铂金光"></van-tab>
            <van-tab title="幻夜黑"></van-tab>
        </van-tabs>
        <van-card
                num="2"
                tag="热门"
                price="10.00"
                desc="描述信息"
                title="商品标题"
                thumb="https://img.yzcdn.cn/vant/ipad.jpeg"
        >
            <template slot="footer">
                <van-button round type="info" size="small">购买</van-button>
            </template>
        </van-card>


        <van-goods-action>
            <van-goods-action-icon icon="chat-o" text="客服"/>
            <van-goods-action-icon icon="cart-o" text="购物车" info="5"/>
            <van-goods-action-icon icon="shop-o" text="店铺"/>
            <van-goods-action-button color="#7232dd" text="加入购物" type="warning"/>
            <van-goods-action-button plain color="#7232dd" text="立即购买"/>
        </van-goods-action>



    </div>
</template>

<script>
    import {
        Toast,
        PullRefresh,
        Swipe,
        SwipeItem
    } from 'vant';
    export default {
        data() {
            return {


            }
        },
        onBuyClicked(item){
            this.$store.state.specsId = item.selectedSkuComb.s1
            this.$store.state.quantity = item.selectedNum
            this.$router.push('/addressList')
        }

    }
</script>
