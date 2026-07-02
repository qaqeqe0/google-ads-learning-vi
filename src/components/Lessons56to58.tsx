import React from 'react';
import {
  AlertTriangle, CheckCircle2, Clock, Target, Zap, BookOpen,
  TrendingUp, Shield, DollarSign, Search
} from 'lucide-react';
import { InteractiveChecklist } from './InteractiveChecklist';

// ─── Bài 56 Visualizer: Google 2024-2026 Update Timeline ─────────────────────
const VisualizerUpdateTimeline = () => {
  const updates = [
    { time: 'T3/2024', name: 'Consent Mode v2 EU', impact: 'Mất track EU', color: 'bg-red-500' },
    { time: 'T3/2024', name: 'Discovery → Demand Gen', impact: 'Camp tắt', color: 'bg-orange-500' },
    { time: 'T5/2024', name: 'AI Overview Ads US', impact: 'CTR Search giảm', color: 'bg-blue-500' },
    { time: 'T7/2024', name: 'Broad Match bắt buộc tROAS', impact: 'Cụm từ khóa tắt', color: 'bg-purple-500' },
    { time: 'T1/2025', name: 'Cookie chết 100% Chrome', impact: 'Remarketing -30%', color: 'bg-red-600' },
    { time: 'T6/2025', name: 'Search + PMax tự tạo Asset AI', impact: 'Asset xấu tự chạy', color: 'bg-amber-500' },
    { time: 'T1/2026', name: 'AI Max for Search', impact: 'Không cần từ khóa', color: 'bg-emerald-600' },
  ];
  return (
    <div className="bg-slate-50 border border-slate-200 rounded-xl p-5 my-6">
      <h4 className="font-bold text-slate-700 mb-4 text-sm uppercase tracking-wide">📅 Lịch Update Google 2024-2026 – Lưu để Audit</h4>
      <div className="relative">
        <div className="absolute left-6 top-0 bottom-0 w-0.5 bg-slate-300" />
        <div className="space-y-3">
          {updates.map(({ time, name, impact, color }) => (
            <div key={name} className="relative flex gap-4 items-start pl-14">
              <div className={`absolute left-4 w-4 h-4 rounded-full ${color} -translate-x-1/2`} />
              <div className="flex-1 bg-white border border-slate-200 rounded-lg p-3">
                <div className="flex items-center gap-2 flex-wrap">
                  <span className="text-sm font-bold text-slate-700 bg-slate-100 px-2 py-0.5 rounded">{time}</span>
                  <span className="text-sm font-semibold text-slate-800">{name}</span>
                </div>
                <div className="text-xs text-slate-500 mt-1">{'→'} {impact}</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

// ─── Bài 57 Visualizer: Audit Score Meter ────────────────────────────────────
const VisualizerAuditScore = () => {
  const levels = [
    { range: '45-50', label: 'Xuất sắc', desc: 'Scale x2 ngân sách', color: 'bg-emerald-500', border: 'border-emerald-400' },
    { range: '40-44', label: 'Tốt', desc: 'Sửa 5 lỗi <7đ/nhóm', color: 'bg-blue-500', border: 'border-blue-400' },
    { range: '30-39', label: 'Báo động', desc: 'Tạm dừng 50% camp', color: 'bg-amber-500', border: 'border-amber-400' },
    { range: '<30', label: 'Dừng ngay', desc: 'Rebuild hoặc thuê audit', color: 'bg-red-600', border: 'border-red-500' },
  ];
  return (
    <div className="bg-slate-50 border border-slate-200 rounded-xl p-5 my-6">
      <h4 className="font-bold text-slate-700 mb-4 text-sm uppercase tracking-wide">🏆 Bảng chấm điểm 50 điểm Audit</h4>
      <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
        {levels.map(({ range, label, desc, color, border }) => (
          <div key={range} className={`border-2 ${border} rounded-xl overflow-hidden text-center`}>
            <div className={`${color} text-white font-bold py-2 text-lg`}>{range}</div>
            <div className="p-2">
              <p className="font-bold text-slate-800 text-sm">{label}</p>
              <p className="text-xs text-slate-500 mt-1">{desc}</p>
            </div>
          </div>
        ))}
      </div>
      <div className="mt-4 bg-blue-50 border border-blue-200 rounded-lg p-3">
        <p className="text-xs text-blue-800 font-semibold">⚡ Thứ tự sửa: Nhóm 1 Tracking → Nhóm 5 Lãng phí → Nhóm 3 Từ khóa → Nhóm 2 Cấu trúc → Nhóm 4 Ads</p>
      </div>
    </div>
  );
};

// ─── Bài 58 Visualizer: 5 Chứng chỉ lộ trình 1 ngày ─────────────────────────
const VisualizerCertRoadmap = () => {
  const schedule = [
    { time: '8:00-9:00', act: 'Học Search', note: 'Thuộc bảng Mục tiêu-Bid', color: 'bg-blue-50 border-blue-200 text-blue-800' },
    { time: '9:00-10:15', act: 'THI SEARCH', note: 'Pass >90%', color: 'bg-blue-600 border-blue-700 text-white' },
    { time: '10:30-11:30', act: 'Học Measurement', note: 'Thuộc 4 chủ đề GA4/Attribution/Consent/GCLID', color: 'bg-purple-50 border-purple-200 text-purple-800' },
    { time: '11:30-12:45', act: 'THI MEASUREMENT', note: 'Khó nhất – tập trung', color: 'bg-purple-600 border-purple-700 text-white' },
    { time: '14:00-14:30', act: 'Học Display', note: 'Nhớ 3 loại đối tượng', color: 'bg-emerald-50 border-emerald-200 text-emerald-800' },
    { time: '14:30-15:15', act: 'THI DISPLAY', note: 'Dễ – Pass nhanh', color: 'bg-emerald-600 border-emerald-700 text-white' },
    { time: '15:30-16:00', act: 'Học Video', note: 'Nhớ 4 format TrueView/Bumper/Masthead', color: 'bg-orange-50 border-orange-200 text-orange-800' },
    { time: '16:00-16:45', act: 'THI VIDEO', note: 'Dễ-TB', color: 'bg-orange-500 border-orange-600 text-white' },
    { time: '17:00-17:30', act: 'Học Shopping', note: 'Nhớ 5 cột feed bắt buộc', color: 'bg-rose-50 border-rose-200 text-rose-800' },
    { time: '17:30-18:15', act: 'THI SHOPPING', note: 'TMĐT phải có', color: 'bg-rose-600 border-rose-700 text-white' },
    { time: 'Tối', act: 'Up LinkedIn 5 chứng chỉ', note: '→ Nhận job 🎉', color: 'bg-slate-800 border-slate-700 text-white' },
  ];
  return (
    <div className="bg-slate-50 border border-slate-200 rounded-xl p-5 my-6">
      <h4 className="font-bold text-slate-700 mb-4 text-sm uppercase tracking-wide">📅 Lộ trình 1 ngày lấy 5 chứng chỉ</h4>
      <div className="space-y-2">
        {schedule.map(({ time, act, note, color }) => (
          <div key={time + act} className={`border rounded-lg px-4 py-2 flex items-center gap-4 ${color}`}>
            <span className="text-xs font-mono font-bold w-28 shrink-0 opacity-90">{time}</span>
            <span className="font-bold text-sm">{act}</span>
            <span className="text-xs opacity-80 ml-auto text-right">{note}</span>
          </div>
        ))}
      </div>
    </div>
  );
};

// ─────────────────────────────────────────────────────────────────────────────
// BÀI 56
// ─────────────────────────────────────────────────────────────────────────────
export const Lesson56Content = () => (
  <div className="prose prose-blue max-w-none text-gray-800">
    <h3 className="text-2xl font-bold text-gray-900 border-b pb-2">
      Bài 56: Theo dõi Update – AI Overview Ads, Demand Gen thay Discovery, Consent Mode v2
    </h3>

    <div className="bg-red-50 border-l-4 border-red-500 rounded-r-xl p-4 my-4">
      <p className="font-bold text-red-800 mb-1">⚡ 2025-2026 Google update lớn nhất 10 năm</p>
      <p className="text-red-700 text-sm">Không update = CPC x2, mất 40% tracking, camp tắt hàng loạt.</p>
      <p className="text-red-700 text-sm font-semibold mt-1">3 update bắt buộc biết: AI Overview Ads, Demand Gen thay Discovery, Consent Mode v2.</p>
    </div>

    <VisualizerUpdateTimeline />

    {/* ── Phần 1 ── */}
    <h4 className="text-lg font-bold text-blue-700 mt-6 mb-3">1. AI Overview Ads – Ads trong câu trả lời AI của Google</h4>

    <p>
      <strong>Là gì</strong>: Từ T5/2024, khi user search Google, AI Overview trả lời ngay trên đầu.{' '}
      <strong>Quảng cáo Search + Shopping hiện ngay trong câu trả lời AI</strong>.
    </p>

    <div className="bg-slate-800 text-white rounded-xl p-4 my-4 font-mono text-sm">
      <p className="text-slate-400 text-xs mb-2">Ví dụ: Search &#34;gel x nail là gì, bền bao lâu&#34;</p>
      <p className="text-emerald-300">AI trả lời: &#34;Gel X bền 3-4 tuần...&#34;</p>
      <p className="text-amber-300 mt-1">+ Dưới có 3 card Shopping: &#34;Gel X Kit $65 - LuxuryNails.com [Sponsored]&#34;</p>
    </div>

    <p className="font-semibold text-gray-700 mb-2">Ảnh hưởng tiệm nail / shop TMĐT:</p>
    <div className="overflow-x-auto my-4">
      <table className="min-w-full text-sm border border-slate-200 rounded-xl overflow-hidden">
        <thead className="bg-slate-800 text-white">
          <tr>
            <th className="px-4 py-2 text-left">Trước đây</th>
            <th className="px-4 py-2 text-left">Bây giờ với AI Overview Ads</th>
            <th className="px-4 py-2 text-left">Hành động</th>
          </tr>
        </thead>
        <tbody className="divide-y divide-slate-100">
          <tr className="bg-white">
            <td className="px-4 py-2 font-medium">Top 1 Search CTR 35%</td>
            <td className="px-4 py-2">CTR giảm còn 18% vì AI trả lời luôn</td>
            <td className="px-4 py-2 text-blue-700 font-semibold">Bắt buộc có Shopping. Chỉ Search text = Mất hiển thị</td>
          </tr>
          <tr className="bg-slate-50">
            <td className="px-4 py-2 font-medium">Từ khóa thông tin 0 conv</td>
            <td className="px-4 py-2">&#34;gel x là gì&#34; giờ hiện Ads, ra đơn</td>
            <td className="px-4 py-2 text-blue-700 font-semibold">Bỏ phủ định &#34;what is&#34;, &#34;là gì&#34;. Đổi thành Search camp</td>
          </tr>
          <tr className="bg-white">
            <td className="px-4 py-2 font-medium">Không cần ảnh</td>
            <td className="px-4 py-2">AI ưu tiên hiển thị SP có ảnh đẹp</td>
            <td className="px-4 py-2 text-blue-700 font-semibold">GMC: Ảnh lifestyle 1200x1200. Không có = Không vào AI</td>
          </tr>
        </tbody>
      </table>
    </div>

    <p className="font-semibold text-gray-700 mb-2">Cách tối ưu để vào AI Overview:</p>
    <ol className="list-decimal list-inside space-y-2 text-sm">
      <li><strong>Chạy PMax hoặc Shopping</strong>: Chỉ 2 loại này được vào AI. Search text không vào</li>
      <li><strong>Feed tối ưu AI</strong>: Tiêu đề = Câu hỏi. &#34;Gel X Kit - Móng giả bền 4 tuần tại nhà&#34; thay vì &#34;Gel X Kit 123&#34;</li>
      <li><strong>Review {'>'} 4.5 sao</strong>: GMC {'→'} Product Ratings. AI ưu tiên SP nhiều sao</li>
      <li><strong>Schema FAQ web</strong>: Dev gắn schema FAQPage. AI lấy text web bạn trả lời</li>
      <li><strong>Giá cạnh tranh</strong>: AI so 3 shop. Đắt hơn 20% = Loại</li>
    </ol>

    <div className="bg-blue-50 border border-blue-200 rounded-lg p-3 my-4 text-sm">
      <p className="font-semibold text-blue-800">📊 Đo lường:</p>
      <p className="text-blue-700">Google Ads {'→'} Chiến dịch {'→'} Phân đoạn {'→'} Mạng {'→'} Chọn &#34;Tìm kiếm + AI Overviews&#34;.</p>
      <p className="text-blue-700">CTR AI cao x1.5 Search thường nhưng CPC đắt hơn 30%. Chấp nhận vì conv cao.</p>
    </div>

    {/* ── Phần 2 ── */}
    <h4 className="text-lg font-bold text-blue-700 mt-6 mb-3">2. Demand Gen thay Discovery – Video + Ảnh, target mạnh hơn</h4>

    <div className="bg-red-50 border border-red-200 rounded-lg p-3 my-3 text-sm">
      <p className="font-bold text-red-800">🚨 Discovery Ads chết T10/2023. 100% chuyển Demand Gen T3/2024.</p>
      <p className="text-red-700">Nếu bạn còn Discovery = Đã tắt.</p>
    </div>

    <p className="font-semibold text-gray-700 mb-2">Demand Gen = Discovery x10 sức mạnh:</p>
    <div className="overflow-x-auto my-4">
      <table className="min-w-full text-sm border border-slate-200 rounded-xl overflow-hidden">
        <thead className="bg-slate-800 text-white">
          <tr>
            <th className="px-4 py-2 text-left">Discovery cũ</th>
            <th className="px-4 py-2 text-left">Demand Gen mới</th>
            <th className="px-4 py-2 text-left">Lợi cho ai</th>
          </tr>
        </thead>
        <tbody className="divide-y divide-slate-100">
          <tr className="bg-white">
            <td className="px-4 py-2">Chỉ ảnh tĩnh</td>
            <td className="px-4 py-2 text-emerald-700 font-medium">Ảnh + Video ngắn + Carousel + Sản phẩm</td>
            <td className="px-4 py-2">Tiệm nail: Chạy video đắp móng 15s</td>
          </tr>
          <tr className="bg-slate-50">
            <td className="px-4 py-2">Target cơ bản</td>
            <td className="px-4 py-2 text-emerald-700 font-medium">Lookalike 2.5%, 5%, 10% từ list MQL/Purchase</td>
            <td className="px-4 py-2">B2B: Up list 1000 CEO {'→'} Tìm 100k CEO giống</td>
          </tr>
          <tr className="bg-white">
            <td className="px-4 py-2">YouTube Shorts không có</td>
            <td className="px-4 py-2 text-emerald-700 font-medium">Chạy Shorts, In-feed, Gmail</td>
            <td className="px-4 py-2">Spa: Shorts Before-After rẻ $0.01/view</td>
          </tr>
          <tr className="bg-slate-50">
            <td className="px-4 py-2">Không A/B asset</td>
            <td className="px-4 py-2 text-emerald-700 font-medium">Thử nghiệm A/B tiêu đề, video</td>
            <td className="px-4 py-2">TMĐT: Test 5 hook</td>
          </tr>
        </tbody>
      </table>
    </div>

    <p className="font-semibold text-gray-700 mb-2">Setup Demand Gen cho tiệm nail $50/ngày:</p>
    <ol className="list-decimal list-inside space-y-2 text-sm">
      <li><strong>Tạo chiến dịch {'→'} Demand Gen</strong> {'→'} Mục tiêu: Chuyển đổi hoặc Lượt truy cập</li>
      <li>
        <strong>Nhóm quảng cáo</strong>:
        <ul className="list-disc list-inside ml-4 mt-1 space-y-1">
          <li><strong>Asset</strong>: 5 ảnh vuông 1200x1200 Before-After, 3 video 9:16 15s đắp Gel X, Logo, 5 tiêu đề, 5 mô tả</li>
          <li><strong>Đối tượng</strong>: 1. Remarketing 30 ngày. 2. Lookalike 2.5% từ khách mua {'>'} $100. 3. In-market: Beauty Services</li>
          <li><strong>Sản phẩm</strong>: Link GMC, bật &#34;Sử dụng feed sản phẩm&#34; {'→'} Hiện card SP dưới video</li>
        </ul>
      </li>
      <li><strong>Bid</strong>: tCPA = CPA Search x 1.5. VD Search $25 {'→'} Demand Gen $37 vì phễu lạnh hơn</li>
      <li><strong>Địa lý</strong>: Bán kính 8km. B2B toàn VN bỏ trống</li>
    </ol>

    <div className="bg-emerald-50 border border-emerald-200 rounded-lg p-3 my-4 text-sm">
      <p className="font-semibold text-emerald-800">📊 KPI: CTR {'>'} 1.5%, VTR {'>'} 25%, CPA {'<'} 2x Search. Thấp hơn = Đổi video.</p>
      <p className="text-emerald-700 mt-1"><strong>Lưu ý B2B/SaaS</strong>: Demand Gen = Kênh nuôi #1 thay LinkedIn Ads. Video &#34;Lỗi kế toán 90% cty mắc&#34; chạy Lookalike CFO. CPM $4 rẻ hơn LinkedIn $25.</p>
    </div>

    {/* ── Phần 3 ── */}
    <h4 className="text-lg font-bold text-blue-700 mt-6 mb-3">3. Consent Mode v2 – Không có = Mất 40% chuyển đổi từ T3/2024</h4>

    <div className="bg-amber-50 border border-amber-300 rounded-lg p-3 my-3 text-sm">
      <p className="font-bold text-amber-800">⚠️ EU bắt buộc T3/2024. VN chưa bắt buộc nhưng T1/2025 Google áp cho traffic EU/US.</p>
      <p className="text-amber-700">Khách bạn ở Mỹ = Mất data. Consent Mode = Xin phép user track. Không đồng ý = Google dùng AI bù data.</p>
    </div>

    <p className="font-semibold text-gray-700 mb-2">2 cấp độ:</p>
    <div className="overflow-x-auto my-4">
      <table className="min-w-full text-sm border border-slate-200 rounded-xl overflow-hidden">
        <thead className="bg-slate-800 text-white">
          <tr>
            <th className="px-4 py-2 text-left">Mode</th>
            <th className="px-4 py-2 text-left">Khi user Từ chối</th>
            <th className="px-4 py-2 text-left">Hậu quả nếu không có</th>
            <th className="px-4 py-2 text-left">Cách bật</th>
          </tr>
        </thead>
        <tbody className="divide-y divide-slate-100">
          <tr className="bg-white">
            <td className="px-4 py-2 font-bold text-red-700">Basic</td>
            <td className="px-4 py-2">Không bắn thẻ GA4/Ads</td>
            <td className="px-4 py-2 text-red-700 font-medium">Mất 100% conv từ user từ chối</td>
            <td className="px-4 py-2">Gắn CMP + code cơ bản</td>
          </tr>
          <tr className="bg-slate-50">
            <td className="px-4 py-2 font-bold text-emerald-700">Advanced v2</td>
            <td className="px-4 py-2">Bắn thẻ ẩn danh, không cookie</td>
            <td className="px-4 py-2 text-amber-700 font-medium">Mất 5-10% conv. AI modeling bù 40-65%</td>
            <td className="px-4 py-2">Gắn CMP + code + 2 tham số mới</td>
          </tr>
        </tbody>
      </table>
    </div>

    <div className="bg-red-50 border border-red-300 rounded-lg p-3 my-3 text-sm">
      <p className="font-bold text-red-800">🔑 2 tham số mới v2 bắt buộc: <code className="bg-red-100 px-1 rounded">ad_user_data</code> + <code className="bg-red-100 px-1 rounded">ad_personalization</code></p>
      <p className="text-red-700">Không gửi = Google dừng remarketing EU/US.</p>
    </div>

    <p className="font-semibold text-gray-700 mb-2">Setup 3 bước cho web VN:</p>
    <ol className="list-decimal list-inside space-y-2 text-sm">
      <li><strong>Cài CMP đạt chuẩn Google</strong>: Cookiebot, OneTrust, Consent Manager. Giá $10/tháng. Có banner &#34;Đồng ý&#34;</li>
      <li><strong>GTM</strong>: Dùng template Consent Mode {'→'} Set Default: <code className="bg-slate-100 px-1 rounded">denied</code> hết. Update khi user OK {'→'} <code className="bg-slate-100 px-1 rounded">granted</code></li>
      <li><strong>Check</strong>: Google Ads {'→'} Công cụ {'→'} Chuyển đổi {'→'} Diagnostis {'→'} Thấy &#34;Consent Mode: Active&#34; + &#34;Modeling: On&#34; = OK</li>
    </ol>

    <div className="bg-red-50 border border-red-400 rounded-lg p-3 my-4 text-sm">
      <p className="font-bold text-red-800">🚨 Nếu không làm:</p>
      <p className="text-red-700">T1/2025 chạy ads Mỹ/EU, báo cáo thiếu 40% conv. tROAS 400% thành 240%. AI bid sai, lỗ.</p>
    </div>

    {/* ── Phần 4 ── */}
    <h4 className="text-lg font-bold text-blue-700 mt-6 mb-3">4. Lịch update Google 2024-2026 – Lưu để audit</h4>

    <div className="overflow-x-auto my-4">
      <table className="min-w-full text-sm border border-slate-200 rounded-xl overflow-hidden">
        <thead className="bg-slate-800 text-white">
          <tr>
            <th className="px-4 py-2 text-left">Thời gian</th>
            <th className="px-4 py-2 text-left">Update</th>
            <th className="px-4 py-2 text-left">Ảnh hưởng</th>
            <th className="px-4 py-2 text-left">Việc phải làm</th>
          </tr>
        </thead>
        <tbody className="divide-y divide-slate-100 text-xs">
          {[
            ['T3/2024', 'Consent Mode v2 EU', 'Mất track EU', 'Gắn CMP trước T12/2024'],
            ['T3/2024', 'Discovery → Demand Gen', 'Camp tắt', 'Migrate thủ công, không tự đổi'],
            ['T5/2024', 'AI Overview Ads US', 'CTR Search giảm', 'Bật PMax + Shopping, ảnh đẹp'],
            ['T7/2024', 'Broad Match từ khóa bắt buộc cho tROAS', 'Cụm từ khóa tắt', 'Đổi exact → broad + Phủ định mạnh'],
            ['T1/2025', 'Third-party cookie chết 100% Chrome', 'Remarketing mất 30% size', 'Bật Enhanced Conv + Customer Match'],
            ['T6/2025', 'Search + PMax tự tạo asset AI', 'Asset xấu tự chạy', 'Vào Cài đặt → Tắt "Tự động tạo" nếu brand quan trọng'],
            ['T1/2026', 'AI Max for Search', 'Từ khóa mở rộng bằng AI, không cần từ khóa', 'Chuẩn bị phủ định 200 từ, asset nhóm tốt'],
          ].map(([time, update, impact, action]) => (
            <tr key={time + update} className="bg-white even:bg-slate-50">
              <td className="px-4 py-2 font-bold text-slate-700 whitespace-nowrap">{time}</td>
              <td className="px-4 py-2 font-semibold">{update}</td>
              <td className="px-4 py-2 text-red-700">{impact}</td>
              <td className="px-4 py-2 text-emerald-700">{action}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>

    <div className="bg-slate-50 border border-slate-200 rounded-lg p-3 my-4 text-sm">
      <p className="font-semibold text-slate-700 mb-1">📡 Theo dõi ở đâu:</p>
      <ol className="list-decimal list-inside space-y-1 text-slate-600">
        <li>Google Ads {'→'} Trợ giúp {'→'} Thông báo</li>
        <li>Blog: <code className="bg-slate-100 px-1 rounded">blog.google/products/ads-commerce/</code></li>
        <li><code className="bg-slate-100 px-1 rounded">ads.google.com/updates</code> hàng tuần</li>
      </ol>
    </div>

    {/* ── Phần 5 ── */}
    <h4 className="text-lg font-bold text-blue-700 mt-6 mb-3">5. Checklist Audit Q4/2026 – 15 phút/tuần</h4>

    <div className="overflow-x-auto my-4">
      <table className="min-w-full text-sm border border-slate-200 rounded-xl overflow-hidden">
        <thead className="bg-slate-800 text-white">
          <tr>
            <th className="px-4 py-2 text-left">Hạng mục</th>
            <th className="px-4 py-2 text-left">Check gì</th>
            <th className="px-4 py-2 text-left">Đỏ nếu</th>
            <th className="px-4 py-2 text-left">Fix</th>
          </tr>
        </thead>
        <tbody className="divide-y divide-slate-100 text-xs">
          {[
            ['1. AI Overview', 'Phân đoạn → AI Overviews', 'Impression = 0', 'Bật Shopping/PMax, sửa feed ảnh'],
            ['2. Demand Gen', 'Còn Discovery nào không', 'Có', 'Tắt, tạo Demand Gen'],
            ['3. Consent Mode', 'Chuyển đổi → Diagnostis', 'Inactive', 'Gắn CMP + GTM'],
            ['4. Enhanced Conv', 'Chuyển đổi → Cải tiến', 'Chưa thiết lập', 'Bật, tăng 10% conv'],
            ['5. Broad Match', 'Từ khóa Exact >50%', 'Đúng', 'Đổi 80% sang Broad + phủ định'],
            ['6. Asset AI', 'Cài đặt camp → Tự động tạo', 'Bật với brand cao cấp', 'Tắt nếu sợ sai brand'],
          ].map(([item, check, fail, fix]) => (
            <tr key={item} className="bg-white even:bg-slate-50">
              <td className="px-4 py-2 font-bold text-slate-700">{item}</td>
              <td className="px-4 py-2">{check}</td>
              <td className="px-4 py-2 text-red-600 font-medium">{fail}</td>
              <td className="px-4 py-2 text-emerald-700">{fix}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>

    {/* ── Phần 6 ── */}
    <h4 className="text-lg font-bold text-blue-700 mt-6 mb-3">6. 3 câu hỏi sếp sẽ hỏi T1/2025 – Trả lời sao</h4>

    <div className="space-y-3 my-4">
      {[
        {
          q: '"Sao báo cáo mất 30% chuyển đổi?"',
          a: 'Do Consent Mode v2 + Cookie chết. Bật Advanced + Enhanced Conv. Số modeling bù 65%. Không phải lỗ thật.',
        },
        {
          q: '"Sao Discovery tắt hết?"',
          a: 'Google xóa T3/2024. Đã migrate Demand Gen. Video rẻ hơn 40%, ra lead nhiều hơn.',
        },
        {
          q: '"AI Overview là gì, sao không thấy ads mình?"',
          a: 'Là câu trả lời AI trên Google. Chỉ Shopping/PMax vào. Đã thêm ảnh SP, đợi 7 ngày duyệt.',
        },
      ].map(({ q, a }) => (
        <div key={q} className="border border-slate-200 rounded-xl overflow-hidden">
          <div className="bg-slate-700 text-white px-4 py-2 font-semibold text-sm">{q}</div>
          <div className="bg-emerald-50 px-4 py-2 text-sm text-emerald-800">{'→'} {a}</div>
        </div>
      ))}
    </div>

    {/* ── Chốt ── */}
    <div className="bg-gradient-to-r from-blue-600 to-blue-800 text-white rounded-xl p-5 my-6">
      <p className="font-bold text-lg mb-2">🏁 Chốt Bài 56: 2024-2026 = AI + Privacy</p>
      <p className="text-blue-100 text-sm mb-2">
        <strong className="text-white">Công thức sống sót:</strong>{' '}
        PMax/Shopping vào AI + Demand Gen video + Consent v2 + Enhanced Conv = Không mất data, không mất hiển thị.
      </p>
      <p className="text-blue-100 text-sm">
        <strong className="text-white">Quy tắc 3T:</strong>{' '}
        Tự động hóa AI + Tùy chỉnh thủ công phủ định + Tuân thủ Privacy = ROAS bền.
      </p>
    </div>

    <div className="bg-amber-50 border border-amber-200 rounded-lg p-3 my-4 text-sm">
      <p className="font-semibold text-amber-800">💡 Mẹo cuối: Bật &#34;Thông tin chi tiết tự động&#34; trong Ads. Google mail khi có update ảnh hưởng tài khoản. Đọc 2 phút/tuần.</p>
      <p className="text-amber-700 mt-1"><strong>Bài tập:</strong> Vào Ads {'→'} Phân đoạn {'→'} Mạng {'→'} Check AI Overviews bao nhiêu impr. Vào Chuyển đổi {'→'} Diagnostis {'→'} Check Consent Mode. Chụp 2 màn hình.</p>
    </div>

    <InteractiveChecklist
      id="chk56"
      title="Checklist Cập nhật Google Ads 2025-2026"
      tasks={[
        'Kiểm tra AI Overview Ads: Phân đoạn → Mạng → AI Overviews (chụp màn hình impression)',
        'Xác nhận đã migrate từ Discovery → Demand Gen (không còn Discovery nào đang chạy)',
        'Check Consent Mode: Chuyển đổi → Diagnostis → Status = Active + Modeling = On',
        'Bật Enhanced Conversions cho Web + Lead Form',
        'Cập nhật feed GMC: ảnh lifestyle 1200x1200 cho sản phẩm chính',
        'Bật Thông tin chi tiết tự động để nhận email update từ Google',
      ]}
    />
  </div>
);

// ─────────────────────────────────────────────────────────────────────────────
// BÀI 57
// ─────────────────────────────────────────────────────────────────────────────
export const Lesson57Content = () => (
  <div className="prose prose-blue max-w-none text-gray-800">
    <h3 className="text-2xl font-bold text-gray-900 border-b pb-2">
      Bài 57: Checklist Audit Tài Khoản 50 Điểm – Từ Tracking đến Cấu trúc đến Lãng phí
    </h3>

    <div className="bg-blue-50 border-l-4 border-blue-500 rounded-r-xl p-4 my-4">
      <p className="font-bold text-blue-800 mb-1">🏥 Audit = Khám bệnh tổng quát</p>
      <p className="text-blue-700 text-sm">Không audit 3 tháng = Lãng phí 30% ngân sách mà không biết.</p>
      <p className="text-blue-700 text-sm mt-1"><strong>50 điểm dưới đây</strong> chia 5 nhóm. Tick {'<'} 40 điểm = Camp đang đốt tiền. {'>'} 45 điểm = Scale được.</p>
      <p className="text-blue-700 text-sm"><strong>Thời gian</strong>: 60 phút. Làm mỗi quý 1 lần.</p>
    </div>

    <VisualizerAuditScore />

    {/* ── NHÓM 1 ── */}
    <h4 className="text-lg font-bold text-purple-700 mt-6 mb-1">NHÓM 1: TRACKING &amp; ĐO LƯỜNG – 10 điểm – Sai là mù</h4>

    <div className="overflow-x-auto my-4">
      <table className="min-w-full text-xs border border-slate-200 rounded-xl overflow-hidden">
        <thead className="bg-slate-800 text-white">
          <tr>
            <th className="px-3 py-2 text-left w-8">#</th>
            <th className="px-3 py-2 text-left">Hạng mục check</th>
            <th className="px-3 py-2 text-left">Cách check</th>
            <th className="px-3 py-2 text-left">Fail nếu</th>
            <th className="px-3 py-2 text-left">Fix 5 phút</th>
          </tr>
        </thead>
        <tbody className="divide-y divide-slate-100">
          {[
            ['1', 'Google Ads link GA4', 'Công cụ → Liên kết', 'Chưa link', 'Link ngay'],
            ['2', 'Google Signals bật', 'GA4 → Quản trị → Thu thập data', 'Tắt', 'Bật để có cross-device'],
            ['3', 'Chuyển đổi chính = Mua hàng/Lead chất', 'Công cụ → Chuyển đổi → Cột "Chính"', 'Để Pageview là chính', 'Chỉ chọn Purchase, Submit lead, Call >60s'],
            ['4', 'Giá trị chuyển đổi đúng', 'Vào conv Purchase', 'Để 0 hoặc 1', 'Bật "Dùng giá trị" + Transaction specific'],
            ['5', 'GCLID Auto-tag bật', 'Cài đặt TK → Tự động gắn thẻ', 'Tắt', 'Bật. Không có GCLID = Không import offline'],
            ['6', 'Enhanced Conversions bật', 'Chuyển đổi → Cài đặt', 'Tắt', 'Bật cho Web + Lead. Tăng 10% conv'],
            ['7', 'Offline Import hoạt động', 'Chuyển đổi → Tải lên → Xem 7 ngày', '0 lượt nhập hoặc Lỗi 80%', 'Check GCLID hết hạn'],
            ['8', 'Call Tracking >60s = Conv', 'Tiện ích cuộc gọi → Đếm conv', 'Để 0s hoặc không đếm', 'Đổi >60s, giá trị $25'],
            ['9', 'Loại trừ IP nội bộ', 'Cài đặt → Loại trừ IP', 'Chưa nhập IP cty/nhà', 'Nhập IP. Tránh click ảo'],
            ['10', 'Phân bổ = Data-driven', 'Công cụ → Phân bổ', 'Last Click', 'Đổi DDA nếu >300 conv'],
          ].map(([num, item, how, fail, fix]) => (
            <tr key={num} className="bg-white even:bg-slate-50">
              <td className="px-3 py-2 font-bold text-purple-700">{num}</td>
              <td className="px-3 py-2 font-medium">{item}</td>
              <td className="px-3 py-2 text-slate-600">{how}</td>
              <td className="px-3 py-2 text-red-600 font-medium">{fail}</td>
              <td className="px-3 py-2 text-emerald-700">{fix}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
    <div className="bg-purple-50 border border-purple-200 rounded-lg p-3 text-sm mb-4">
      <p className="font-bold text-purple-800">📊 Chấm điểm Nhóm 1: 8/10 = Đạt. {'<'} 6 = Dừng ads, sửa tracking trước.</p>
    </div>

    {/* ── NHÓM 2 ── */}
    <h4 className="text-lg font-bold text-blue-700 mt-6 mb-1">NHÓM 2: CẤU TRÚC TÀI KHOẢN – 10 điểm – Sai là rối</h4>

    <div className="overflow-x-auto my-4">
      <table className="min-w-full text-xs border border-slate-200 rounded-xl overflow-hidden">
        <thead className="bg-slate-800 text-white">
          <tr>
            <th className="px-3 py-2 text-left w-8">#</th>
            <th className="px-3 py-2 text-left">Hạng mục</th>
            <th className="px-3 py-2 text-left">Chuẩn</th>
            <th className="px-3 py-2 text-left">Fail nếu</th>
            <th className="px-3 py-2 text-left">Tác hại</th>
          </tr>
        </thead>
        <tbody className="divide-y divide-slate-100">
          {[
            ['11', 'Tách Search vs PMax vs Display', '3 camp riêng', 'Gộp 1 PMax', 'Không kiểm soát bid, search ăn gian'],
            ['12', 'Tách Brand vs Non-brand', '2 camp Search riêng', 'Gộp chung', 'Brand ROAS 20x làm ảo tưởng'],
            ['13', 'Tách theo Lãi gộp TMĐT', 'PMax High/Mid/Low', '1 PMax 500 SKU', 'Drill lỗ, Acrylic lãi'],
            ['14', 'Tách theo Địa lý Local', 'Camp bán kính 5km riêng', 'Toàn VN 1 camp', 'Tiền bay tỉnh khác'],
            ['15', 'Nhóm quảng cáo <15 từ khóa', '5-10 kw, chung chủ đề', '50 kw/nhóm', 'Điểm CL <5, CPC cao'],
            ['16', 'Từ khóa khớp cụm + chính xác', '80% cụm [ ], ""', '100% mở rộng', 'Rác, CPC cao'],
            ['17', '3 mẫu ads/nhóm', 'RSA 3-5 mẫu', '1 mẫu', 'IPM <2, không test'],
            ['18', 'Tách AG PMax theo tín hiệu', 'AG1: Khách cũ, AG2: New', '1 AG tất cả', 'AI học chậm'],
            ['19', 'Đặt tên chuẩn', 'Search_NonBrand_GelX_77084', 'Camp 1', '6 tháng sau không biết camp gì'],
            ['20', 'Ngân sách >50% cho camp win', 'Camp ROAS 5x chiếm 70% tiền', 'Chia đều', 'Camp lỗ sống, camp lãi đói'],
          ].map(([num, item, std, fail, harm]) => (
            <tr key={num} className="bg-white even:bg-slate-50">
              <td className="px-3 py-2 font-bold text-blue-700">{num}</td>
              <td className="px-3 py-2 font-medium">{item}</td>
              <td className="px-3 py-2 text-emerald-700">{std}</td>
              <td className="px-3 py-2 text-red-600">{fail}</td>
              <td className="px-3 py-2 text-slate-600">{harm}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
    <div className="bg-blue-50 border border-blue-200 rounded-lg p-3 text-sm mb-4">
      <p className="font-bold text-blue-800">📊 Chấm điểm Nhóm 2: {'<'} 7 = Cấu trúc nát. Rebuild.</p>
    </div>

    {/* ── NHÓM 3 ── */}
    <h4 className="text-lg font-bold text-red-700 mt-6 mb-1">NHÓM 3: TỪ KHÓA &amp; PHỦ ĐỊNH – 10 điểm – Sai là đốt tiền</h4>

    <div className="overflow-x-auto my-4">
      <table className="min-w-full text-xs border border-slate-200 rounded-xl overflow-hidden">
        <thead className="bg-slate-800 text-white">
          <tr>
            <th className="px-3 py-2 text-left w-8">#</th>
            <th className="px-3 py-2 text-left">Hạng mục</th>
            <th className="px-3 py-2 text-left">Cách check</th>
            <th className="px-3 py-2 text-left">Fail nếu</th>
            <th className="px-3 py-2 text-left">Ví dụ nail</th>
          </tr>
        </thead>
        <tbody className="divide-y divide-slate-100">
          {[
            ['21', 'Báo cáo search terms 30 ngày', 'Từ khóa → Cụm từ tìm kiếm', 'Không check 30 ngày', 'Lòi ra "nail salon job" đốt $50'],
            ['22', 'Phủ định cấp TK', 'Công cụ → DS phủ định', 'Không có list', 'Thêm: free, cheap, job, salary, course, diy, amazon'],
            ['23', 'Phủ định chéo Brand', 'Camp Non-brand phủ định brand', 'Không phủ định', 'Non-brand ăn từ "luxury nails"'],
            ['24', 'Từ khóa thông tin loại bỏ', 'Search "how to", "tutorial"', 'Chạy "how to gel x"', 'CPC $1, 0 đơn'],
            ['25', 'Từ khóa 1 từ loại bỏ', 'Chạy "nails"', 'Chạy "nails"', 'Quá rộng, CPC $5'],
            ['26', 'Tỷ lệ hiển thị mất do xếp hạng >20%', 'Cột "IS mất do XH"', '>40%', 'Bid thấp hoặc CL thấp'],
            ['27', 'Từ khóa điểm CL <5', 'Từ khóa → Cột CL', '>30% kw CL 3/10', 'Xóa hoặc landing mới'],
            ['28', 'Từ khóa 0 hiển thị 90 ngày', 'Bộ lọc: Hiển thị = 0', 'Giữ lại', 'Xóa cho gọn'],
            ['29', 'Từ khóa trùng lặp', 'Công cụ → Chỉnh sửa → Tìm trùng', '1 kw 3 camp', 'Tự đấu giá, CPC tăng'],
            ['30', 'Đối sánh rộng + Smart Bidding', 'Dùng mở rộng', 'Mở rộng + CPC thủ công', 'Rác. Mở rộng chỉ đi với tROAS/tCPA'],
          ].map(([num, item, how, fail, eg]) => (
            <tr key={num} className="bg-white even:bg-slate-50">
              <td className="px-3 py-2 font-bold text-red-700">{num}</td>
              <td className="px-3 py-2 font-medium">{item}</td>
              <td className="px-3 py-2 text-slate-600">{how}</td>
              <td className="px-3 py-2 text-red-600">{fail}</td>
              <td className="px-3 py-2 text-amber-700">{eg}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
    <div className="bg-red-50 border border-red-200 rounded-lg p-3 text-sm mb-4">
      <p className="font-bold text-red-800">📊 Chấm điểm Nhóm 3: {'<'} 7 = Đang đốt 25% tiền cho rác.</p>
    </div>

    {/* ── NHÓM 4 ── */}
    <h4 className="text-lg font-bold text-amber-700 mt-6 mb-1">NHÓM 4: QUẢNG CÁO &amp; LANDING – 10 điểm – Sai là không ai click</h4>

    <div className="overflow-x-auto my-4">
      <table className="min-w-full text-xs border border-slate-200 rounded-xl overflow-hidden">
        <thead className="bg-slate-800 text-white">
          <tr>
            <th className="px-3 py-2 text-left w-8">#</th>
            <th className="px-3 py-2 text-left">Hạng mục</th>
            <th className="px-3 py-2 text-left">Chuẩn</th>
            <th className="px-3 py-2 text-left">Cách check</th>
            <th className="px-3 py-2 text-left">Fail nếu</th>
          </tr>
        </thead>
        <tbody className="divide-y divide-slate-100">
          {[
            ['31', 'RSA mức QC Tốt/Xuất sắc', 'Hiệu quả quảng cáo', 'Xem cột Hiệu quả', 'TB hoặc Kém – <8 tiêu đề, thiếu Ghim'],
            ['32', 'Có 4 tiện ích cơ bản', 'Sitelink, Callout, Structured, Call', 'Tiện ích → Danh sách', '<3 tiện ích'],
            ['33', 'Sitelink có mô tả', '4 sitelink đều có 2 dòng mô tả', 'Click vào Sitelink', 'Không mô tả – CTR giảm 10%'],
            ['34', 'Callout có số', '"10 năm kinh nghiệm", "1000+ khách"', 'Đọc callout text', 'Chung chung "Uy tín"'],
            ['35', 'Landing đúng từ khóa', 'Kw "gel x 77084" → Trang Gel X', 'Click từng kw, xem URL', 'Vào trang chủ – Điểm CL 3/10'],
            ['36', 'Landing load <3s mobile', 'PageSpeed Insights', 'Test URL mobile', '>5s – 50% thoát'],
            ['37', 'Landing có SĐT click-to-call', 'Mobile bấm gọi được', 'Mở mobile, bấm SĐT', 'Không bấm được – Mất 40% khách'],
            ['38', 'Không có link gãy 404', 'Dùng Script Bài 47', 'Script check tự động', 'Có 404 – đốt tiền'],
            ['39', 'URL theo dõi có utm', '?utm_source=google', 'GA4 → Acquisition → Source', 'Không utm – GA4 không biết nguồn'],
            ['40', 'Chính sách bảo mật ở form', 'Link privacy', 'Xem form Lead', 'Không có – Lead Form từ chối'],
          ].map(([num, item, std, how, fail]) => (
            <tr key={num} className="bg-white even:bg-slate-50">
              <td className="px-3 py-2 font-bold text-amber-700">{num}</td>
              <td className="px-3 py-2 font-medium">{item}</td>
              <td className="px-3 py-2 text-emerald-700">{std}</td>
              <td className="px-3 py-2 text-slate-600">{how}</td>
              <td className="px-3 py-2 text-red-600">{fail}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
    <div className="bg-amber-50 border border-amber-200 rounded-lg p-3 text-sm mb-4">
      <p className="font-bold text-amber-800">📊 Chấm điểm Nhóm 4: {'<'} 7 = CTR {'<'} 3%, CVR {'<'} 5%. Ads + Web đang đuổi khách.</p>
    </div>

    {/* ── NHÓM 5 ── */}
    <h4 className="text-lg font-bold text-emerald-700 mt-6 mb-1">NHÓM 5: NGÂN SÁCH &amp; LÃNG PHÍ – 10 điểm – Sai là lỗ</h4>

    <div className="overflow-x-auto my-4">
      <table className="min-w-full text-xs border border-slate-200 rounded-xl overflow-hidden">
        <thead className="bg-slate-800 text-white">
          <tr>
            <th className="px-3 py-2 text-left w-8">#</th>
            <th className="px-3 py-2 text-left">Hạng mục</th>
            <th className="px-3 py-2 text-left">Cách check</th>
            <th className="px-3 py-2 text-left">Chuẩn</th>
            <th className="px-3 py-2 text-left">Lãng phí nếu</th>
          </tr>
        </thead>
        <tbody className="divide-y divide-slate-100">
          {[
            ['41', '% Ngân sách mất do XH', 'Cột "IS mất do NS"', '<10%', '>30% = Tăng tiền camp win'],
            ['42', 'Lịch quảng cáo tối ưu', 'Báo cáo → Giờ/ngày', 'Tắt giờ 1am-6am nếu CVR 0%', 'Chạy 24/7'],
            ['43', 'Thiết bị tối ưu', 'Thiết bị → Chuyển đổi', 'Mobile CVR 5%, PC 1% → Giảm PC -50%', 'Không điều chỉnh'],
            ['44', 'Vị trí địa lý rác', 'Vị trí → Báo cáo người dùng', 'Có click ngoài 20km với local', 'Thêm loại trừ địa lý'],
            ['45', 'GDN vị trí đặt app trẻ em', 'Vị trí đặt → mobileapp::2', 'Chạy GDN có app', 'Loại trừ adsenseformobileapps.com'],
            ['46', 'PMax bị Search ăn thị phần', 'Thông tin chi tiết → Tìm kiếm', 'Search ăn >50% impression PMax', 'Loại trừ brand khỏi PMax'],
            ['47', 'Quy tắc tự động có chưa', 'Công cụ → Quy tắc', '<5 quy tắc', 'Không có Rule 1,7 Bài 46'],
            ['48', 'CPA > 2x LTV 3 tháng', 'Cột CPA vs LTV', 'CPA $60, LTV 3th $40', 'Lỗ. Giảm bid/tắt'],
            ['49', 'ROAS < Hòa vốn 14 ngày', 'Báo cáo → ROAS', 'ROAS 200% mà hòa vốn 300%', 'Lỗ 14 ngày = Tắt'],
            ['50', 'Nhãn "Cần tối ưu"', 'Nhãn cho kw/camp lỗ', 'Không nhãn', 'Không biết gì đang lỗ'],
          ].map(([num, item, how, std, waste]) => (
            <tr key={num} className="bg-white even:bg-slate-50">
              <td className="px-3 py-2 font-bold text-emerald-700">{num}</td>
              <td className="px-3 py-2 font-medium">{item}</td>
              <td className="px-3 py-2 text-slate-600">{how}</td>
              <td className="px-3 py-2 text-blue-700">{std}</td>
              <td className="px-3 py-2 text-red-600">{waste}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
    <div className="bg-emerald-50 border border-emerald-200 rounded-lg p-3 text-sm mb-4">
      <p className="font-bold text-emerald-800">📊 Chấm điểm Nhóm 5: {'<'} 7 = Lãng phí 20-40% ngân sách.</p>
    </div>

    {/* ── Cách chấm & Hành động ── */}
    <h4 className="text-lg font-bold text-slate-700 mt-6 mb-3">CÁCH CHẤM ĐIỂM &amp; HÀNH ĐỘNG</h4>

    <div className="bg-slate-50 border border-slate-200 rounded-xl p-4 my-4 text-sm space-y-1">
      <p><strong className="text-emerald-700">45-50</strong>: Xuất sắc. Scale x2 ngân sách</p>
      <p><strong className="text-blue-700">40-44</strong>: Tốt. Sửa 5 lỗi {'<'} 7 điểm mỗi nhóm</p>
      <p><strong className="text-amber-700">30-39</strong>: Báo động. Tạm dừng 50% camp, audit 1 ngày</p>
      <p><strong className="text-red-700">{'<'}30</strong>: Dừng toàn bộ. Thuê audit hoặc rebuild</p>
    </div>

    <div className="bg-blue-50 border border-blue-200 rounded-lg p-3 my-4 text-sm">
      <p className="font-semibold text-blue-800">⚡ Thứ tự sửa:</p>
      <p className="text-blue-700">Nhóm 1 Tracking {'→'} Nhóm 5 Lãng phí {'→'} Nhóm 3 Từ khóa {'→'} Nhóm 2 Cấu trúc {'→'} Nhóm 4 Ads</p>
    </div>

    <h4 className="text-lg font-bold text-slate-700 mt-6 mb-2">Template Sheet Audit 50 điểm – Copy dùng</h4>
    <div className="bg-slate-800 text-white rounded-xl p-4 my-4 font-mono text-sm">
      <p className="text-slate-400 text-xs mb-2">Tạo Google Sheet 4 cột:</p>
      <p className="text-emerald-300">Nhóm | # | Hạng mục | Pass/Fail | Ghi chú</p>
      <p className="text-slate-300 mt-2 text-xs">Tick Fail {'→'} Cột Ghi chú ghi &#34;CPC $5 do CL 3&#34;. Sửa xong chuyển Pass.</p>
      <p className="text-slate-300 text-xs">Mỗi quý in ra, tick lại. {'<'} 40 điểm không tăng ngân sách.</p>
    </div>

    <div className="bg-gradient-to-r from-slate-700 to-slate-900 text-white rounded-xl p-5 my-6">
      <p className="font-bold text-lg mb-2">🏁 Chốt Bài 57: Audit không phải để tìm lỗi</p>
      <p className="text-slate-200 text-sm mb-1"><strong className="text-white">Audit để tìm 20% nguyên nhân gây 80% lãng phí.</strong></p>
      <p className="text-slate-200 text-sm mb-1"><strong className="text-white">Quy tắc 80/20:</strong> Sửa 10 điểm fail nhất = Tiết kiệm 80% tiền ngu.</p>
      <p className="text-slate-200 text-sm"><strong className="text-white">Quy tắc 60 phút:</strong> Mỗi quý bỏ 60 phút tick 50 điểm. Tiết kiệm $500-$5000/quý.</p>
    </div>

    <div className="bg-amber-50 border border-amber-200 rounded-lg p-3 my-4 text-sm">
      <p className="font-semibold text-amber-800">💡 Mẹo cuối: Dùng Công cụ {'→'} Đề xuất {'→'} Điểm tối ưu hóa. Google chỉ lỗi nhưng không phải lúc nào cũng đúng. Đối chiếu 50 điểm trên mới chuẩn.</p>
      <p className="text-amber-700 mt-1"><strong>Bài tập:</strong> Mở TK, tick 10 điểm Nhóm 1 Tracking. Comment số điểm /10. {'<'} 6 điểm mình gửi hướng dẫn sửa gấp.</p>
    </div>

    <InteractiveChecklist
      id="chk57"
      title="50-điểm Audit Checklist"
      tasks={[
        'Hoàn thành Nhóm 1 Tracking (10 điểm) – ghi điểm số thực tế của tài khoản',
        'Hoàn thành Nhóm 5 Lãng phí (10 điểm) – tìm ít nhất 3 mục cần sửa',
        'Hoàn thành Nhóm 3 Từ khóa (10 điểm) – kiểm tra search terms 30 ngày',
        'Lập Google Sheet audit 5 cột và tick Pass/Fail tất cả 50 điểm',
        'Tổng điểm ≥ 40 mới được tăng ngân sách; dưới 40 phải sửa trước',
      ]}
    />
  </div>
);

// ─────────────────────────────────────────────────────────────────────────────
// BÀI 58
// ─────────────────────────────────────────────────────────────────────────────
export const Lesson58Content = () => (
  <div className="prose prose-blue max-w-none text-gray-800">
    <h3 className="text-2xl font-bold text-gray-900 border-b pb-2">
      Bài 58: Thi Chứng chỉ Google Ads – Search, Display, Video, Shopping, Measurement. Mẹo Pass 90%
    </h3>

    <div className="bg-blue-50 border-l-4 border-blue-500 rounded-r-xl p-4 my-4">
      <p className="font-bold text-blue-800 mb-1">🎓 Sự thật về chứng chỉ Google Ads</p>
      <p className="text-blue-700 text-sm">Chứng chỉ Google Ads = Vé vào cửa. Agency yêu cầu, khách hàng tin. Thi rớt = Mất job $1k.</p>
      <p className="text-blue-700 text-sm mt-1"><strong>5 chứng chỉ chính 2026</strong>: Search, Display, Video, Shopping, Measurement. Pass 80%, làm lại free. Nhưng thi 5 lần = Mất 5 tiếng.</p>
      <p className="text-blue-700 text-sm font-semibold mt-1">Mục tiêu: Đọc bài này {'→'} Thi 1 lần pass cả 5, {'>'} 90% điểm.</p>
    </div>

    {/* ── Phần 1 ── */}
    <h4 className="text-lg font-bold text-blue-700 mt-6 mb-3">1. 5 Chứng chỉ bắt buộc 2026 – Thi cái nào trước</h4>

    <div className="overflow-x-auto my-4">
      <table className="min-w-full text-sm border border-slate-200 rounded-xl overflow-hidden">
        <thead className="bg-slate-800 text-white">
          <tr>
            <th className="px-3 py-2 text-left">#</th>
            <th className="px-3 py-2 text-left">Tên chứng chỉ</th>
            <th className="px-3 py-2 text-left">Khó</th>
            <th className="px-3 py-2 text-left">Thời gian</th>
            <th className="px-3 py-2 text-left">Số câu</th>
            <th className="px-3 py-2 text-left">Thi khi nào</th>
            <th className="px-3 py-2 text-left">Ứng dụng thực tế</th>
          </tr>
        </thead>
        <tbody className="divide-y divide-slate-100 text-xs">
          {[
            ['1. Google Ads Search', 'TB', '75p', '50 câu', 'Thi đầu tiên', 'Bắt buộc cho mọi job ads', 'bg-blue-50'],
            ['2. Google Ads Measurement', 'Khó nhất', '75p', '50 câu', 'Thi thứ 2', 'Biết đọc GA4, phân bổ. Không có = Mù số', 'bg-purple-50'],
            ['3. Google Ads Display', 'Dễ', '75p', '50 câu', 'Thi thứ 3', 'Chạy GDN, Remarketing', 'bg-emerald-50'],
            ['4. Shopping Ads', 'TB', '75p', '50 câu', 'TMĐT phải có', 'Chạy PMax, GMC', 'bg-white'],
            ['5. Google Ads Video', 'Dễ-TB', '75p', '50 câu', 'Chạy YouTube', 'Demand Gen, UAC', 'bg-orange-50'],
            ['6. Apps', 'TB', '75p', '50 câu', 'Có app mới thi', 'UAC tCPI, tCPA', 'bg-white'],
          ].map(([name, diff, time, qs, when, use, bg]) => (
            <tr key={name} className={bg}>
              <td className="px-3 py-2 font-bold">{name}</td>
              <td className="px-3 py-2">
                <span className={`px-2 py-0.5 rounded text-xs font-bold ${diff === 'Khó nhất' ? 'bg-red-100 text-red-700' : diff === 'Dễ' ? 'bg-emerald-100 text-emerald-700' : diff === 'Dễ-TB' ? 'bg-yellow-100 text-yellow-700' : 'bg-amber-100 text-amber-700'}`}>{diff}</span>
              </td>
              <td className="px-3 py-2">{time}</td>
              <td className="px-3 py-2">{qs}</td>
              <td className="px-3 py-2 font-semibold text-blue-700">{when}</td>
              <td className="px-3 py-2">{use}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>

    <div className="bg-blue-50 border border-blue-200 rounded-lg p-3 text-sm mb-4">
      <p className="font-semibold text-blue-800">📅 Lộ trình 1 ngày: Sáng Search + Measurement. Chiều Display + Video + Shopping = Xong 5 cái.</p>
      <p className="text-blue-700">Hạn: 1 năm. Hết hạn thi lại.</p>
    </div>

    <VisualizerCertRoadmap />

    {/* ── Phần 2 ── */}
    <h4 className="text-lg font-bold text-blue-700 mt-6 mb-3">2. Vào đâu thi – Free 100%, không cần thẻ</h4>

    <ol className="list-decimal list-inside space-y-2 text-sm">
      <li>Vào <code className="bg-slate-100 px-1 rounded">skillshop.withgoogle.com</code> {'→'} Đăng nhập Gmail</li>
      <li>Tìm &#34;Google Ads&#34; {'→'} Chọn chứng chỉ {'→'} Học {'→'} Đánh giá</li>
      <li><strong>Không giới hạn lần thi</strong>. Rớt đợi 24h thi lại</li>
    </ol>

    <div className="bg-red-50 border border-red-200 rounded-lg p-3 my-3 text-sm">
      <p className="font-bold text-red-800">🚫 Lưu ý: Đổi tab, copy câu hỏi = Google phát hiện = Khóa TK. Học mẹo dưới là đủ.</p>
    </div>

    {/* ── Phần 3 ── */}
    <h4 className="text-lg font-bold text-blue-700 mt-6 mb-3">3. 7 dạng câu hỏi lặp 80% đề – Học 1 lần trúng 40 câu</h4>

    <div className="overflow-x-auto my-4">
      <table className="min-w-full text-sm border border-slate-200 rounded-xl overflow-hidden">
        <thead className="bg-slate-800 text-white">
          <tr>
            <th className="px-4 py-2 text-left">Dạng câu</th>
            <th className="px-4 py-2 text-left">Tỷ lệ ra</th>
            <th className="px-4 py-2 text-left">Mẹo chọn đáp án</th>
            <th className="px-4 py-2 text-left">Ví dụ</th>
          </tr>
        </thead>
        <tbody className="divide-y divide-slate-100 text-xs">
          {[
            ['1. "Mục tiêu X thì dùng chiến lược bid nào?"', '25%', 'Thuộc bảng: Lead=Max Conv, ROAS=tROAS, Nhận biết=CPM', '"Muốn nhiều lead nhất trong $500" → Max Conversions'],
            ['2. "Chỉ số nào đo Y?"', '20%', 'Nhận biết=Impression, Cân nhắc=CTR, Chuyển đổi=CPA', '"Đo mức độ quan tâm" → CTR'],
            ['3. "Tính năng Z làm gì?"', '15%', 'Từ khóa mở rộng = Tiếp cận, Phủ định = Loại trừ', '"Broad match dùng để?" → Mở rộng tiếp cận'],
            ['4. "Tình huống lỗi thì sửa sao?"', '15%', 'CTR thấp = Sửa ads, CPA cao = Sửa bid/landing', '"CTR 1%, làm gì" → Viết lại quảng cáo'],
            ['5. "Định nghĩa X"', '10%', 'Thuộc định nghĩa DDA, PMax, GCLID', '"DDA là gì" → Phân bổ theo data'],
            ['6. "Thứ tự các bước"', '10%', 'Search: Kw → Ads → Tiện ích → Bid', '"Tạo Search camp bước đầu?" → Chọn mục tiêu'],
            ['7. "Policy"', '5%', 'Thuốc, rượu, cờ bạc = Hạn chế. Claim y tế = Cấm', '"Quảng cáo thuốc giảm cân?" → Bị hạn chế'],
          ].map(([type, pct, tip, eg]) => (
            <tr key={type} className="bg-white even:bg-slate-50">
              <td className="px-4 py-2 font-medium">{type}</td>
              <td className="px-4 py-2">
                <span className="bg-blue-100 text-blue-700 px-2 py-0.5 rounded font-bold">{pct}</span>
              </td>
              <td className="px-4 py-2 text-emerald-700">{tip}</td>
              <td className="px-4 py-2 text-slate-600 italic">{eg}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>

    <div className="bg-emerald-50 border border-emerald-200 rounded-lg p-3 text-sm mb-4">
      <p className="font-bold text-emerald-800">✅ Chốt: Thuộc 7 dạng = 40/50 câu. 10 câu còn lại dùng loại trừ.</p>
    </div>

    {/* ── Phần 4 ── */}
    <h4 className="text-lg font-bold text-blue-700 mt-6 mb-3">4. Bảng &#34;Chọn nhanh&#34; – Gặp là khoanh, khỏi nghĩ</h4>

    <div className="overflow-x-auto my-4">
      <table className="min-w-full text-sm border border-slate-200 rounded-xl overflow-hidden">
        <thead className="bg-slate-800 text-white">
          <tr>
            <th className="px-4 py-2 text-left">Thấy từ khóa</th>
            <th className="px-4 py-2 text-left">Chọn đáp án có chữ</th>
            <th className="px-4 py-2 text-left">Lý do</th>
          </tr>
        </thead>
        <tbody className="divide-y divide-slate-100 text-xs">
          {[
            ['Nhiều lead nhất, không quan tâm CPA', 'Maximize Conversions', 'Max số lượng'],
            ['ROAS 500%, CPA cụ thể $20', 'tROAS, tCPA', 'Có con số'],
            ['Nhận biết thương hiệu mới', 'CPM, YouTube Reach', 'Tính tiền hiển thị'],
            ['Khách đã vào web', 'Remarketing, Customer Match', 'Nhắm lại'],
            ['Gần tôi, bán kính 5km', 'Tiện ích địa điểm, Local', 'Local'],
            ['Không đủ chuyển đổi', 'Max Clicks, chuyển tCPI', 'Chưa có data'],
            ['Muốn kiểm soát bid từng kw', 'CPC thủ công', 'Chỉ Display/Smart không có'],
            ['Đo hiệu quả đa kênh', 'Data-driven Attribution', 'Bỏ Last Click'],
            ['Video 6s không bỏ qua', 'Bumper Ads', '6s'],
            ['Feed sản phẩm', 'Shopping, PMax', 'Phải có GMC'],
          ].map(([trigger, answer, reason]) => (
            <tr key={trigger} className="bg-white even:bg-slate-50">
              <td className="px-4 py-2 font-medium text-slate-700">{trigger}</td>
              <td className="px-4 py-2">
                <span className="bg-emerald-100 text-emerald-800 px-2 py-0.5 rounded font-bold">{answer}</span>
              </td>
              <td className="px-4 py-2 text-slate-500">{reason}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>

    {/* ── Phần 5 ── */}
    <h4 className="text-lg font-bold text-blue-700 mt-6 mb-3">5. Mẹo thi Search – 50 câu hay lừa nhất</h4>

    <div className="space-y-3 my-4">
      {[
        { num: '1', q: 'Câu &#34;Smart Bidding học gì&#34;', a: 'Luôn chọn: Truy vấn, thiết bị, vị trí, giờ, danh sách đối tượng. Không chọn "Giá thầu thủ công"' },
        { num: '2', q: 'Câu &#34;Điểm chất lượng gồm&#34;', a: 'CTR dự kiến + Mức độ liên quan + Trải nghiệm trang đích. Không có "Giá thầu"' },
        { num: '3', q: 'Câu &#34;Tại sao dùng tiện ích&#34;', a: 'Tăng CTR, Ad Rank, không tốn tiền thêm. Không chọn "Giảm CPC"' },
        { num: '4', q: 'Câu &#34;Chiến lược portfolio&#34;', a: 'Dùng khi Nhiều camp chung mục tiêu CPA. Không chọn "1 camp"' },
        { num: '5', q: 'Câu &#34;Tại sao IS mất do XH thấp&#34;', a: 'Bid thấp HOẶC Điểm CL thấp. Chọn cả 2' },
      ].map(({ num, q, a }) => (
        <div key={num} className="border border-slate-200 rounded-xl overflow-hidden">
          <div className="bg-blue-700 text-white px-4 py-2 text-sm font-semibold">Bẫy #{num}: <span dangerouslySetInnerHTML={{ __html: q }} /></div>
          <div className="bg-blue-50 px-4 py-2 text-sm text-blue-800">✅ {a}</div>
        </div>
      ))}
    </div>

    <div className="bg-amber-50 border border-amber-300 rounded-lg p-3 my-3 text-sm">
      <p className="font-bold text-amber-800">⚠️ Bẫy: Hỏi &#34;CPC thủ công dùng khi nào&#34;</p>
      <p className="text-amber-700">Đáp án đúng: Khi muốn kiểm soát hoàn toàn + không đủ conv cho Smart. Đừng chọn &#34;Khi muốn rẻ nhất&#34;.</p>
    </div>

    {/* ── Phần 6 ── */}
    <h4 className="text-lg font-bold text-blue-700 mt-6 mb-3">6. Mẹo thi Measurement – Khó nhất, 60% rớt</h4>

    <p className="text-sm font-semibold text-gray-700 mb-2">3 chủ đề chiếm 70% đề:</p>
    <div className="overflow-x-auto my-4">
      <table className="min-w-full text-sm border border-slate-200 rounded-xl overflow-hidden">
        <thead className="bg-slate-800 text-white">
          <tr>
            <th className="px-4 py-2 text-left">Chủ đề</th>
            <th className="px-4 py-2 text-left">Phải nhớ</th>
            <th className="px-4 py-2 text-left">Câu hay hỏi</th>
          </tr>
        </thead>
        <tbody className="divide-y divide-slate-100 text-xs">
          {[
            ['1. GA4 vs UA', 'GA4 = Sự kiện, UA = Phiên. GA4 không có Bounce Rate', '"Khác biệt GA4?" → Dựa trên sự kiện'],
            ['2. Attribution', 'DDA cần 300 conv + 3000 click. Last Click lỗi thời', '"Khi nào dùng DDA?" → Đủ data'],
            ['3. Consent Mode', 'v2 có 2 tham số: ad_user_data, ad_personalization. Mất = mất 40% data', '"Không có Consent Mode?" → Mất dữ liệu'],
            ['4. GCLID', 'Lưu 90 ngày. Dùng Offline Import', '"Track khách 100 ngày cọc?" → Enhanced Conv'],
          ].map(([topic, remember, eg]) => (
            <tr key={topic} className="bg-white even:bg-slate-50">
              <td className="px-4 py-2 font-bold text-purple-700">{topic}</td>
              <td className="px-4 py-2 text-emerald-700 font-medium">{remember}</td>
              <td className="px-4 py-2 text-slate-600 italic">{eg}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>

    <div className="bg-red-50 border border-red-200 rounded-lg p-3 my-3 text-sm">
      <p className="font-bold text-red-800">🪤 Bẫy Measurement: Hỏi &#34;Thời gian xem trang tính sao trong GA4&#34;</p>
      <p className="text-red-700">Đáp án: GA4 không có Time on Page, dùng Engagement Time. Chọn Time on Page = Sai.</p>
    </div>

    {/* ── Phần 7 ── */}
    <h4 className="text-lg font-bold text-blue-700 mt-6 mb-3">7. Mẹo thi Display, Video, Shopping – Học 15 phút</h4>

    <div className="grid grid-cols-1 md:grid-cols-3 gap-4 my-4">
      {[
        {
          title: 'Display',
          icon: '🖼️',
          tips: [
            'Đối tượng tùy chỉnh = URL đối thủ',
            'Tiếp cận tối ưu = Mở rộng',
            'Tần suất = Số lần/người',
          ],
          trap: '"Reach là gì" → Số người duy nhất. Không phải "Lượt hiển thị".',
          headerColor: 'bg-emerald-600 text-white',
          bodyColor: 'bg-emerald-50 border-emerald-300',
        },
        {
          title: 'Video',
          icon: '📹',
          tips: [
            'TrueView In-stream = Bỏ qua sau 5s, trả tiền khi xem 30s',
            'Bumper = 6s không bỏ qua',
            'Masthead = Trang chủ YouTube',
          ],
          trap: '"Tối ưu nhận biết rẻ nhất" → CPM hoặc CPV. Không chọn CPA.',
          headerColor: 'bg-orange-500 text-white',
          bodyColor: 'bg-orange-50 border-orange-300',
        },
        {
          title: 'Shopping',
          icon: '🛒',
          tips: [
            'Feed bắt buộc: id, title, price, image, availability',
            'Merchant Center bị tạm ngưng nếu: Giá sai, Ship sai',
            'PMax dùng toàn bộ kênh',
          ],
          trap: '"Shopping chạy ở đâu" → Search + YouTube + GDN + Gmail. Không chỉ Search.',
          headerColor: 'bg-rose-600 text-white',
          bodyColor: 'bg-rose-50 border-rose-300',
        },
      ].map(({ title, icon, tips, trap, headerColor, bodyColor }) => (
        <div key={title} className={`border-2 ${bodyColor} rounded-xl overflow-hidden`}>
          <div className={`${headerColor} font-bold px-4 py-2`}>{icon} {title}</div>
          <div className="p-3 space-y-1">
            {tips.map(t => (
              <div key={t} className="text-xs text-slate-700">✅ {t}</div>
            ))}
            <div className="text-xs text-red-700 bg-red-50 rounded p-2 mt-2">🪤 Bẫy: {trap}</div>
          </div>
        </div>
      ))}
    </div>

    {/* ── Phần 8 ── */}
    <h4 className="text-lg font-bold text-blue-700 mt-6 mb-3">8. 7 mẹo phòng thi – Tăng 15% điểm</h4>

    <div className="space-y-2 my-4">
      {[
        ['1', 'Thi tiếng Anh', 'English dễ hơn 20% vì dịch tiếng Việt sai. Dùng Google Translate cả trang nếu yếu', 'bg-blue-50 border-blue-200'],
        ['2', 'Mở 2 tab', 'Tab 1 đề, Tab 2 support.google.com/google-ads. Ctrl+F search từ khóa đề', 'bg-emerald-50 border-emerald-200'],
        ['3', 'Làm 30 phút đầu', 'Câu dễ khoanh ngay. Đánh dấu câu khó. 45p sau quay lại', 'bg-slate-50 border-slate-200'],
        ['4', 'Câu "Tất cả đều đúng"', '90% đáp án đúng nếu có option này', 'bg-amber-50 border-amber-200'],
        ['5', 'Câu có số', 'ROAS 300%, CPA $20 → Thường đúng. Google thích con số', 'bg-purple-50 border-purple-200'],
        ['6', 'Câu "Không nên"', 'Dùng loại trừ. 3 đáp án tốt, 1 đáp án xấu → Chọn xấu', 'bg-orange-50 border-orange-200'],
        ['7', 'Screenshot đề', 'Rớt thì 24h sau đề lặp 70%. Có ảnh ôn nhanh', 'bg-rose-50 border-rose-200'],
      ].map(([num, title, desc, color]) => (
        <div key={num} className={`border rounded-lg px-4 py-2 flex gap-3 items-start ${color}`}>
          <span className="font-bold text-slate-600 w-5 shrink-0">#{num}</span>
          <div>
            <span className="font-semibold text-slate-800">{title}: </span>
            <span className="text-sm text-slate-600">{desc}</span>
          </div>
        </div>
      ))}
    </div>

    <div className="bg-red-50 border border-red-300 rounded-lg p-3 my-3 text-sm">
      <p className="font-bold text-red-800">🚫 Cấm: Dùng tool, nhờ người. Google ban vĩnh viễn.</p>
    </div>

    {/* ── Phần 9 ── */}
    <h4 className="text-lg font-bold text-blue-700 mt-6 mb-3">9. Checklist 1 ngày lấy 5 chứng chỉ</h4>

    <div className="space-y-1 my-4 text-sm">
      {[
        ['8:00-9:00', 'Học Search', 'Thuộc bảng Mục tiêu-Bid'],
        ['9:00-10:15', 'Thi Search', 'Pass >90%'],
        ['10:30-11:30', 'Học Measurement', 'Thuộc 4 chủ đề mục 6'],
        ['11:30-12:45', 'Thi Measurement', ''],
        ['14:00-14:30', 'Học Display', 'Nhớ 3 loại đối tượng'],
        ['14:30-15:15', 'Thi Display', ''],
        ['15:30-16:00', 'Học Video', 'Nhớ 4 format'],
        ['16:00-16:45', 'Thi Video', ''],
        ['17:00-17:30', 'Học Shopping', 'Nhớ 5 cột feed'],
        ['17:30-18:15', 'Thi Shopping', ''],
        ['Tối', 'Up LinkedIn 5 chứng chỉ', 'Nhận job'],
      ].map(([time, act, note]) => (
        <div key={time + act} className="flex gap-3 items-center text-xs">
          <span className="font-mono font-bold text-slate-600 w-28 shrink-0">{time}</span>
          <span className="font-semibold text-slate-800">{act}</span>
          {note && <span className="text-slate-500 italic">{note}</span>}
        </div>
      ))}
    </div>

    {/* ── Phần 10 ── */}
    <h4 className="text-lg font-bold text-blue-700 mt-6 mb-3">10. Sau khi pass – Dùng sao cho ra tiền</h4>

    <ol className="list-decimal list-inside space-y-2 text-sm">
      <li><strong>Link chứng chỉ</strong>: Skillshop {'→'} Hồ sơ {'→'} Công khai {'→'} Copy link bỏ CV/Proposal</li>
      <li><strong>Gia hạn</strong>: Trước 1 năm Google mail. Thi lại 30p</li>
      <li><strong>Google Partner</strong>: Có 1 người pass Search + 1 người pass bất kỳ + Chi $10k/90 ngày = Huy hiệu Partner</li>
      <li><strong>Lương</strong>: Junior có 5 chứng chỉ lương $700-$1000. Không có $400</li>
    </ol>

    <div className="bg-gradient-to-r from-blue-600 to-indigo-700 text-white rounded-xl p-5 my-6">
      <p className="font-bold text-lg mb-2">🏁 Chốt Bài 58: Chứng chỉ = Bằng lái</p>
      <p className="text-blue-100 text-sm mb-1">Không có bằng lái chạy xe = Công an phạt.</p>
      <p className="text-blue-100 text-sm mb-1">
        <strong className="text-white">Công thức pass:</strong>{' '}
        Thuộc 7 dạng câu + Bảng chọn nhanh + Thi tiếng Anh = 90%.
      </p>
      <p className="text-blue-100 text-sm">
        <strong className="text-white">Quy tắc 24h:</strong>{' '}
        Rớt hôm nay, mai thi lại đề giống 70%. Chụp màn hình.
      </p>
    </div>

    <div className="bg-amber-50 border border-amber-200 rounded-lg p-3 my-4 text-sm">
      <p className="font-semibold text-amber-800">💡 Mẹo cuối: Vào Skillshop {'→'} Knowledge Check làm bài test 10 câu trước. Đúng 9/10 thì thi thật. Dưới 7/10 thì học tiếp.</p>
      <p className="text-amber-700 mt-1"><strong>Bài tập:</strong> Vào skillshop, làm Knowledge Check Search. Chụp điểm. {'>'} 80% thì thi thật luôn. Comment &#34;Đã pass Search&#34;.</p>
    </div>

    <InteractiveChecklist
      id="chk58"
      title="Checklist thi chứng chỉ Google Ads"
      tasks={[
        'Làm Knowledge Check Search trên Skillshop – đạt >80% mới thi thật',
        'Thuộc bảng "Chọn nhanh" (10 dòng) – gặp từ khóa là khoanh ngay',
        'Thuộc 7 dạng câu hỏi lặp 80% đề',
        'Pass chứng chỉ Google Ads Search (thi tiếng Anh, >90%)',
        'Pass thêm Measurement (khó nhất – thuộc GA4/Attribution/Consent/GCLID)',
        'Up LinkedIn 5 chứng chỉ sau khi hoàn thành tất cả',
      ]}
    />
  </div>
);
