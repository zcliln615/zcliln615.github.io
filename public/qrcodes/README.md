# 赞赏二维码使用指南

## 📱 添加二维码步骤

### 1. 准备二维码图片
- **支付宝**：将收款码保存为 `alipay-qr.png`
- **微信**：将收款码保存为 `wechat-qr.png`
- **建议尺寸**：400x400像素，PNG格式

### 2. 启用二维码显示
编辑文件：`src/components/react/donation.tsx`

**支付宝部分 (约第104行)：**
```tsx
// 取消注释这行
<img src="/qrcodes/alipay-qr.png" alt="支付宝赞赏码" className="w-full h-full object-contain" />

// 删除占位符部分 (第106-114行)
```

**微信部分 (约第125行)：**
```tsx  
// 取消注释这行
<img src="/qrcodes/wechat-qr.png" alt="微信赞赏码" className="w-full h-full object-contain" />

// 删除占位符部分 (第127-135行)
```

### 3. 测试功能
1. 保存文件后，开发服务器会自动重新加载
2. 访问 `/projects` 页面
3. 点击右上角的 "支持一下" 按钮
4. 验证二维码正确显示

## ✅ 功能已完成

- ✅ 中文支付宝/微信支持
- ✅ 模态框弹窗设计
- ✅ 选项卡切换功能  
- ✅ 深色模式适配
- ✅ 响应式设计
- ✅ 爱心动画效果

## 🎨 自定义选项

您可以在 `donation.tsx` 中修改：
- 按钮文案（"支持一下"）
- 标题文案（"感谢您的支持"）
- 颜色主题
- 动画效果
