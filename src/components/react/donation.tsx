import React, { useState } from 'react';

interface DonationProps {
  classname?: string;
}

const Donation: React.FC<DonationProps> = ({ classname }) => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [activeTab, setActiveTab] = useState<'alipay' | 'wechat'>('alipay');

  const openModal = () => setIsModalOpen(true);
  const closeModal = () => setIsModalOpen(false);

  return (
    <>
      <button
        onClick={openModal}
        className={`border relative group w-36 mx-auto cursor-pointer h-32 grid place-content-center p-4 bg-primary rounded-md overflow-hidden transition-all duration-300 hover:shadow-lg ${classname || ''}`}
      >
        {/* 爱心图标动画 */}
        <div className="relative z-10 flex flex-col items-center gap-2 text-white">
          <svg
            className="w-8 h-8 group-hover:scale-110 transition-transform duration-300"
            viewBox="0 0 24 24"
            fill="currentColor"
          >
            <path d="M12,21.35L10.55,20.03C5.4,15.36 2,12.27 2,8.5 2,5.41 4.42,3 7.5,3C9.24,3 10.91,3.81 12,5.08C13.09,3.81 14.76,3 16.5,3C19.58,3 22,5.41 22,8.5C22,12.27 18.6,15.36 13.45,20.03L12,21.35Z" />
          </svg>
          <span className="text-sm font-medium">支持一下</span>
        </div>
        
        {/* 背景装饰 */}
        <div className="absolute inset-0 bg-gradient-to-br from-red-500 to-pink-500 opacity-20 group-hover:opacity-30 transition-opacity duration-300"></div>
      </button>

      {/* 模态框 */}
      {isModalOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
          {/* 背景遮罩 */}
          <div 
            className="absolute inset-0 bg-black/50 backdrop-blur-sm"
            onClick={closeModal}
          />
          
          {/* 模态框内容 */}
          <div className="relative bg-white dark:bg-gray-800 rounded-lg shadow-xl max-w-md w-full p-6">
            {/* 关闭按钮 */}
            <button
              onClick={closeModal}
              className="absolute top-4 right-4 text-gray-500 hover:text-gray-700 dark:text-gray-400 dark:hover:text-gray-200"
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>

            {/* 标题 */}
            <div className="text-center mb-6">
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">
                感谢您的支持 ❤️
              </h3>
              <p className="text-gray-600 dark:text-gray-300 text-sm">
                您的支持是我继续创作的动力
              </p>
            </div>

            {/* 选项卡 */}
            <div className="flex mb-6">
              <button
                onClick={() => setActiveTab('alipay')}
                className={`flex-1 py-2 px-4 text-sm font-medium rounded-l-md border transition-colors ${
                  activeTab === 'alipay'
                    ? 'bg-blue-500 text-white border-blue-500'
                    : 'bg-gray-100 text-gray-700 border-gray-300 hover:bg-gray-200 dark:bg-gray-700 dark:text-gray-300 dark:border-gray-600'
                }`}
              >
                支付宝
              </button>
              <button
                onClick={() => setActiveTab('wechat')}
                className={`flex-1 py-2 px-4 text-sm font-medium rounded-r-md border border-l-0 transition-colors ${
                  activeTab === 'wechat'
                    ? 'bg-green-500 text-white border-green-500'
                    : 'bg-gray-100 text-gray-700 border-gray-300 hover:bg-gray-200 dark:bg-gray-700 dark:text-gray-300 dark:border-gray-600'
                }`}
              >
                微信
              </button>
            </div>

            {/* 二维码区域 */}
            <div className="text-center">
              {activeTab === 'alipay' ? (
                <div className="space-y-4">
                  <div className="w-48 h-48 mx-auto bg-gray-100 dark:bg-gray-700 rounded-lg flex items-center justify-center overflow-hidden">
                    {/* 支付宝二维码 - 当您有图片时，请取消注释下面这行并注释掉占位符 */}
                    {/* <img src="/qrcodes/alipay-qr.png" alt="支付宝赞赏码" className="w-full h-full object-contain" /> */}
                    
                    {/* 占位符 - 当您添加了二维码图片后可以删除这部分 */}
                    <div className="text-center text-gray-500 dark:text-gray-400">
                      <svg className="w-12 h-12 mx-auto mb-2" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M3 3h18v18H3V3zm16 16V5H5v14h14zM7 7h2v2H7V7zm4 0h2v2h-2V7zm4 0h2v2h-2V7zM7 11h2v2H7v-2zm4 0h2v2h-2v-2zm4 0h2v2h-2v-2zM7 15h2v2H7v-2zm4 0h2v2h-2v-2zm4 0h2v2h-2v-2z"/>
                      </svg>
                      <p className="text-sm">支付宝赞赏码</p>
                      <p className="text-xs mt-1">请将您的支付宝二维码<br/>图片放在 public/qrcodes/ 目录</p>
                    </div>
                  </div>
                  <p className="text-sm text-gray-600 dark:text-gray-300">
                    使用支付宝扫码支持
                  </p>
                </div>
              ) : (
                <div className="space-y-4">
                  <div className="w-48 h-48 mx-auto bg-gray-100 dark:bg-gray-700 rounded-lg flex items-center justify-center overflow-hidden">
                    {/* 微信二维码 - 当您有图片时，请取消注释下面这行并注释掉占位符 */}
                    {/* <img src="/qrcodes/wechat-qr.png" alt="微信赞赏码" className="w-full h-full object-contain" /> */}
                    
                    {/* 占位符 - 当您添加了二维码图片后可以删除这部分 */}
                    <div className="text-center text-gray-500 dark:text-gray-400">
                      <svg className="w-12 h-12 mx-auto mb-2" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M3 3h18v18H3V3zm16 16V5H5v14h14zM7 7h2v2H7V7zm4 0h2v2h-2V7zm4 0h2v2h-2V7zM7 11h2v2H7v-2zm4 0h2v2h-2v-2zm4 0h2v2h-2v-2zM7 15h2v2H7v-2zm4 0h2v2h-2v-2zm4 0h2v2h-2v-2z"/>
                      </svg>
                      <p className="text-sm">微信赞赏码</p>
                      <p className="text-xs mt-1">请将您的微信二维码<br/>图片放在 public/qrcodes/ 目录</p>
                    </div>
                  </div>
                  <p className="text-sm text-gray-600 dark:text-gray-300">
                    使用微信扫码支持
                  </p>
                </div>
              )}
            </div>

            {/* 底部提示 */}
            <div className="mt-6 pt-4 border-t border-gray-200 dark:border-gray-600">
              <p className="text-xs text-gray-500 dark:text-gray-400 text-center">
                您的每一份支持都是我前进的动力 🚀
              </p>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Donation
