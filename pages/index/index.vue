<template>
	<view class="content">
		<view class="panel">
			<text>
				{{num}}
			</text>
		</view>
		<view class="button-area">
			<button v-show="isOver" @click='start'>开始抽奖</button>
			<button v-show="!isOver" @click='stop'>结束抽奖</button>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				num: 0,
				isOver: true,
				min: 0, //包含
				max: 100, //不包含
				interval: 100, //ms 时间
				clock: null
			}
		},
		onLoad() {

		},
		onShow() {
			let setting = uni.getStorageSync('setting')|| {max:100,min:0,interval:100}
			this.min = setting.min
			this.max = setting.max
			this.interval = setting.interval
		},
		methods: {
			start() {
				this.isOver = false;
				this.getRandomNum()
			},
			getRandomNum() {
				this.clock = setInterval(
					() => {
						this.num = parseInt(this.min) + parseInt(Math.floor(Math.random() * (this.max - this.min)))
					}, this.interval)
			},
			stop() {
				this.isOver = true;
				clearInterval(this.clock)
			}
		}
	}
</script>

<style lang="scss">
	.content {
		display: flex;
		flex-direction: column;
		align-items: center;
		justify-content: center;
	}

	.panel {
		margin: 20rpx;
		border: 1rpx solid $uni-border-color;
		width: 600rpx;
		height: 400rpx;
		display: flex;
		justify-content: center;
		align-items: center;
		border-radius: 8rpx;
		box-shadow: 0 0 40rpx 10rpx rgba(0, 0, 0, 0.1);
		margin-top: 60rpx;

		text {
			font-size: 120rpx;
		}
	}

	.button-area {
		margin-top: 120rpx;
	}
</style>