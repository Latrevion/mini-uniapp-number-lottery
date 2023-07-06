<template>
	<view class="content">
		
		<unicloud-db ref="udb" v-slot:default="{data, pagination, loading, hasMore, error}" :collection="collectionList"
			field="title,photo">
			<view v-if="error">{{error.message}}</view>
			<view v-else-if="data">
				<uni-list class="list">
					<uni-list-item v-for="(item, index) in data" :key="index" :class="{active:index===num}">
						<template v-slot:body>
							<view class="item">
								<!-- 此处默认显示为_id，请根据需要自行修改为其他字段 -->
								<!-- 如果使用了联表查询，请参考生成的 admin 项目中 list.vue 页面 -->
								<view>
									<image :src="item.photo.url" mode="aspectFill"></image>
								</view>
								<view>
									{{item.title}}
								</view>
							</view>
						</template>
					</uni-list-item>
				</uni-list>
			</view>
			<uni-load-more :status="loading?'loading':(hasMore ? 'more' : 'noMore')"></uni-load-more>
		</unicloud-db>

		<view class="button-area">
			<button v-show="isOver" @click='start'>开始抽奖</button>
			<button v-show="!isOver" @click='stop'>结束抽奖</button>
		</view>
	</view>
</template>

<script>
	const db = uniCloud.database();
	const dbCollectionName = 'lottery';


	export default {
		data() {
			return {
				collectionList: dbCollectionName,
				num: 0,
				isOver: true,
				max: 0, //不包含
				interval: 100, //ms 时间
				clock: null,
				loadMore: {
					contentdown: '',
					contentrefresh: '',
					contentnomore: ''
				}
			}
		},
		onLoad() {

		},
		onShow() {

		},
		created() {
			this.$nextTick(
				() => {
					db.collection(dbCollectionName)
						.get()
						.then((res) => {
							this.max = res.result.data.length
						})
				}
			)
		},
		onPullDownRefresh() {
			this.$refs.udb.loadData({
				clear: true
			}, () => {
				uni.stopPullDownRefresh()
			})
		},
		onReachBottom() {
			this.$refs.udb.loadMore()
		},
		methods: {
			start() {
				this.isOver = false;
				this.getRandomNum()
			},
			getRandomNum() {
				this.clock = setInterval(
					() => {
						this.num =  Math.floor(Math.random() *parseInt( this.max))
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
		.uni-list {
			display: flex;
			flex-wrap: wrap;
			flex-direction: row;
			justify-content: center;
		}

		.uni-list-item {
			border: 4rpx solid transparent;
		}

		.active {
			border-color: red;
		} 
	}


	.item {
		text-align: center;

		image {
			width: 200rpx;
			height: 200rpx;
		}
	}

	.panel {
		width: 600rpx;
		height: 400rpx;
		border-radius: 8rpx;
		margin-top: 60rpx;
		display: flex;
		align-items: center;
		justify-content: center;
		border: 1rpx solid $uni-border-color;
		box-shadow: 0 0 40rpx 0 rgba(0, 0, 0, 0.1);

		text {
			font-size: 180rpx;
		}
	}

	.button-area {
		margin-top: 120rpx;
	}

	.content {
		display: flex;
		flex-direction: column;
		align-items: center;
		justify-content: center;
	}
</style>