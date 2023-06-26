<template>
	<view class="content">
		<view class="list">
			<view class="uni-form-item uni-column">
				<view class="title">最大值</view>
				<input class="uni-input" type="number" placeholder="最大值" />
			</view>
			<view class="uni-form-item uni-column">
				<view class="title">最小值</view>
				<input class="uni-input" type="number" placeholder="最小值" />
			</view>
			<view class="uni-form-item uni-column">
				<view class="title">时间间隔（ms）</view>
				<input class="uni-input" type="number" placeholder="时间间隔" />
			</view>
		</view>
		<view class="button-area">
			<button>保存</button>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {

			}
		},
		methods: {

		}
	}
</script>

<style lang="scss">
	.content {
		padding: 40rpx;
	}

	.uni-form-item {
		margin-top: 20rpx;
	}

	.uni-input {
		border-bottom: 1px solid $uni-border-color;
		font-size: 26rpx;
		margin-top: 16rpx;
	}

	.button-area {
		margin-top: 120rpx;
		display: flex;
		justify-content: center;

		button {

			width: 400rpx;
		}
	}
</style>