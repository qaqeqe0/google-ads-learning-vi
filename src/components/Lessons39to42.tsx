import React from 'react';
import {
  Layers, AlertTriangle, CheckCircle2, Package, ShoppingCart,
  BarChart2, Eye, Target, TrendingUp, Zap, Search, AlertOctagon
} from 'lucide-react';
import { InteractiveChecklist } from './InteractiveChecklist';

// ─── Visualizer: PMax 3 Chân Kiềng ────────────────────────────────────────────
const VisualizerPMaxArchitecture = () => (
  <div className="my-6 bg-slate-50 border border-slate-200 rounded-xl p-5">
    <h4 className="text-center font-bold text-slate-700 mb-4 text-sm uppercase tracking-wide">PMax = Asset × Signal × Feed</h4>
    <div className="grid grid-cols-3 gap-3 text-center text-xs">
      <div className="bg-blue-100 border border-blue-300 rounded-lg p-3">
        <div className="text-2xl mb-1">🎨</div>
        <div className="font-bold text-blue-800">Asset Group</div>
        <div className="text-blue-600 mt-1">Ảnh · Video · Tiêu đề · Logo · Mô tả</div>
        <div className="mt-2 bg-blue-200 text-blue-900 rounded px-2 py-0.5 font-mono text-[10px]">Google ghép thành ads</div>
      </div>
      <div className="bg-purple-100 border border-purple-300 rounded-lg p-3">
        <div className="text-2xl mb-1">🎯</div>
        <div className="font-bold text-purple-800">Audience Signal</div>
        <div className="text-purple-600 mt-1">List khách cũ · Custom Segment · Remarketing</div>
        <div className="mt-2 bg-purple-200 text-purple-900 rounded px-2 py-0.5 font-mono text-[10px]">AI học 7 ngày thay 30</div>
      </div>
      <div className="bg-emerald-100 border border-emerald-300 rounded-lg p-3">
        <div className="text-2xl mb-1">📦</div>
        <div className="font-bold text-emerald-800">Data Feed</div>
        <div className="text-emerald-600 mt-1">Tên dịch vụ · Giá · Ảnh · Link đặt lịch</div>
        <div className="mt-2 bg-emerald-200 text-emerald-900 rounded px-2 py-0.5 font-mono text-[10px]">Mất = -40% sức mạnh</div>
      </div>
    </div>
    <div className="mt-4 text-center">
      <div className="inline-flex items-center gap-2 bg-slate-800 text-white px-4 py-2 rounded-full text-sm font-bold">
        <Zap size={14} className="text-yellow-400" />
        Search · YouTube · Display · Discover · Gmail · Maps
      </div>
    </div>
  </div>
);

// ─── Visualizer: PMax 7-Day Learning Timeline ──────────────────────────────────
const VisualizerPMax7Days = () => (
  <div className="my-6 overflow-x-auto">
    <table className="min-w-full bg-white border border-gray-200 text-sm rounded-lg overflow-hidden shadow-sm">
      <thead className="bg-slate-800 text-white">
        <tr>
          <th className="py-3 px-4 text-left font-bold">Ngày</th>
          <th className="py-3 px-4 text-left font-bold">AI làm gì</th>
          <th className="py-3 px-4 text-left font-bold">Bạn thấy gì</th>
          <th className="py-3 px-4 text-left font-bold text-yellow-300">Bạn cần làm gì</th>
        </tr>
      </thead>
      <tbody className="divide-y divide-gray-200">
        <tr className="bg-red-50">
          <td className="py-3 px-4 font-bold text-red-700">Ngày 1–3</td>
          <td className="py-3 px-4">Học Signal. Rải ads YouTube, Display giá rẻ</td>
          <td className="py-3 px-4">Impression cao, Click ít, 0–1 Conv. CPA cao</td>
          <td className="py-3 px-4 font-bold text-red-700">Kệ. Không đụng. Đụng là reset máy học</td>
        </tr>
        <tr className="bg-orange-50">
          <td className="py-3 px-4 font-bold text-orange-700">Ngày 4–7</td>
          <td className="py-3 px-4">Tìm kênh ra tiền. Dồn tiền Search, Maps</td>
          <td className="py-3 px-4">Conv tăng, CPA giảm 50%</td>
          <td className="py-3 px-4 text-slate-700">Check Asset → Xem tổ hợp CTR cao</td>
        </tr>
        <tr className="bg-yellow-50">
          <td className="py-3 px-4 font-bold text-yellow-700">Ngày 8–14</td>
          <td className="py-3 px-4">Scale kênh win. Tắt kênh lỗ</td>
          <td className="py-3 px-4">CPA ổn định</td>
          <td className="py-3 px-4 text-slate-700">Thêm Signal mới, thêm Asset mới</td>
        </tr>
        <tr className="bg-emerald-50">
          <td className="py-3 px-4 font-bold text-emerald-700">Ngày 15+</td>
          <td className="py-3 px-4">Chạy ổn định, tối ưu dài hạn</td>
          <td className="py-3 px-4 font-bold text-emerald-700">ROAS 4x–8x</td>
          <td className="py-3 px-4 text-slate-700">Tăng ngân sách 20%/tuần</td>
        </tr>
      </tbody>
    </table>
  </div>
);

// ─── Visualizer: PMax Channel Distribution ────────────────────────────────────
const VisualizerPMaxChannels = () => (
  <div className="my-6 grid grid-cols-2 md:grid-cols-5 gap-2 text-xs text-center">
    {[
      { label: 'Search', local: '40–60%', ecom: '20–40%', color: 'blue' },
      { label: 'YouTube', local: '20–30%', ecom: '10–20%', color: 'red' },
      { label: 'Display', local: '10–20%', ecom: '20–30%', color: 'purple' },
      { label: 'Maps/Local', local: '10–20%', ecom: '0%', color: 'emerald' },
      { label: 'Gmail/Discover', local: '<10%', ecom: '10–20%', color: 'orange' },
    ].map(({ label, local, ecom, color }) => (
      <div key={label} className={`bg-${color}-50 border border-${color}-200 rounded-lg p-2`}>
        <div className={`font-bold text-${color}-700 mb-1`}>{label}</div>
        <div className="text-slate-500">Nail Local</div>
        <div className={`font-bold text-${color}-600`}>{local}</div>
        <div className="text-slate-400 mt-1 text-[10px]">TMĐT</div>
        <div className="text-slate-500 font-medium">{ecom}</div>
      </div>
    ))}
  </div>
);

// ─── LESSON 39 ─────────────────────────────────────────────────────────────────
export const Lesson39Content = () => (
  <div className="prose prose-blue max-w-none text-gray-800">
    <div className="bg-purple-50 border-l-4 border-purple-500 p-4 mb-6 rounded-r-lg flex items-start gap-3">
      <Layers className="text-purple-500 mt-0.5 shrink-0" size={24} />
      <p className="m-0 text-sm text-purple-800 font-medium">
        <strong>PMax = Trùm cuối Google 2026.</strong> 1 camp chạy hết: Search, YouTube, Display, Discover, Gmail, Maps.
        Chạy đúng = 1 camp thay 5 camp, ROAS x3. Chạy sai = Đốt $2,000/tuần không biết tiền đi đâu.
        <br />
        <strong>Tư duy mới:</strong> PMax không phải "chạy là xong". PMax = "Nuôi AI". Cho AI ăn Asset + Signal + Feed → AI trả khách.
      </p>
    </div>

    <h3 className="text-2xl font-bold text-gray-900 border-b pb-2">1. PMax hoạt động thế nào – 3 chân kiềng bắt buộc</h3>

    <VisualizerPMaxArchitecture />

    <div className="overflow-x-auto my-4">
      <table className="min-w-full bg-white border border-gray-200 text-sm rounded-lg overflow-hidden shadow-sm">
        <thead className="bg-slate-800 text-white">
          <tr>
            <th className="py-3 px-4 text-left font-bold">Chân kiềng</th>
            <th className="py-3 px-4 text-left font-bold">Là gì</th>
            <th className="py-3 px-4 text-left font-bold">Ví dụ tiệm nail</th>
            <th className="py-3 px-4 text-left font-bold text-red-300">Nếu thiếu</th>
          </tr>
        </thead>
        <tbody className="divide-y divide-gray-200">
          <tr>
            <td className="py-3 px-4 font-bold text-blue-700">1. Asset Group</td>
            <td className="py-3 px-4">Tổ hợp: Ảnh, Video, Tiêu đề, Mô tả, Logo, CTA</td>
            <td className="py-3 px-4">1 AG "Acrylic": 15 ảnh móng, 3 video 15s, 5 tiêu đề <code>Acrylic $45</code></td>
            <td className="py-3 px-4 text-red-600">Google không có nguyên liệu → Ads xấu, CTR 0.3%</td>
          </tr>
          <tr className="bg-purple-50/30">
            <td className="py-3 px-4 font-bold text-purple-700">2. Tín hiệu đối tượng</td>
            <td className="py-3 px-4">Chỉ đường cho AI: Khách của tôi là ai</td>
            <td className="py-3 px-4">List khách cũ, từ khóa search, web đối thủ, Custom Segment 77084</td>
            <td className="py-3 px-4 text-red-600">AI mò 2 tuần, đốt $500 học, CPA x2</td>
          </tr>
          <tr>
            <td className="py-3 px-4 font-bold text-emerald-700">3. Data Feed</td>
            <td className="py-3 px-4">Bảng dịch vụ/SP: Tên, giá, ảnh, link</td>
            <td className="py-3 px-4">Feed: <code>Acrylic Full Set</code>, $45, ảnh móng, link/book</td>
            <td className="py-3 px-4 text-red-600">Mất Shopping, Maps. Mất 40% sức mạnh</td>
          </tr>
        </tbody>
      </table>
    </div>
    <p className="text-sm font-bold text-slate-800 bg-slate-100 p-3 rounded-lg">Chốt: PMax = Asset × Signal × Feed. <span className="text-red-600">0 điểm 1 cái = PMax phế.</span></p>

    <h3 className="text-2xl font-bold text-gray-900 mt-10 border-b pb-2">2. Asset Group – Nhà kho nguyên liệu cho AI ghép ads</h3>
    <p>1 PMax có 1–100 Asset Group. <strong>Tiệm nail local: 2–4 Asset Group là đủ.</strong> Tách theo dịch vụ: Acrylic, Gel X, Pedi.</p>

    <div className="overflow-x-auto my-4">
      <table className="min-w-full bg-white border border-gray-200 text-sm rounded-lg overflow-hidden shadow-sm">
        <thead className="bg-blue-700 text-white">
          <tr>
            <th className="py-2 px-3 text-left">Loại Asset</th>
            <th className="py-2 px-3 text-center">Tối thiểu</th>
            <th className="py-2 px-3 text-center">Tối đa</th>
            <th className="py-2 px-3 text-left">Cần gì cho nail</th>
            <th className="py-2 px-3 text-left">Mẹo</th>
          </tr>
        </thead>
        <tbody className="divide-y divide-gray-200 text-xs">
          <tr>
            <td className="py-2 px-3 font-bold">Ảnh</td>
            <td className="py-2 px-3 text-center">1</td>
            <td className="py-2 px-3 text-center">20</td>
            <td className="py-2 px-3"><strong>15 ảnh</strong>: 5 ảnh tiệm, 5 ảnh móng đẹp, 5 Before/After</td>
            <td className="py-2 px-3">1200×1200 + 1200×628. Chữ &lt;20%</td>
          </tr>
          <tr className="bg-slate-50">
            <td className="py-2 px-3 font-bold">Logo</td>
            <td className="py-2 px-3 text-center">1</td>
            <td className="py-2 px-3 text-center">5</td>
            <td className="py-2 px-3">1 vuông 1200×1200 nền trắng, 1 ngang 1200×300</td>
            <td className="py-2 px-3">Không nền trong suốt</td>
          </tr>
          <tr>
            <td className="py-2 px-3 font-bold text-red-700">Video</td>
            <td className="py-2 px-3 text-center">0</td>
            <td className="py-2 px-3 text-center">5</td>
            <td className="py-2 px-3"><strong>2 video</strong>: 15s ngang + 30s dọc</td>
            <td className="py-2 px-3 text-red-600">Không có → Google tự cắt ảnh thành video dở</td>
          </tr>
          <tr className="bg-slate-50">
            <td className="py-2 px-3 font-bold">Tiêu đề (30 ký tự)</td>
            <td className="py-2 px-3 text-center">3</td>
            <td className="py-2 px-3 text-center">5</td>
            <td className="py-2 px-3"><code>Acrylic $45 No Lifting</code> · <code>77084 Nail Salon</code> · <code>New Client $5 Off</code></td>
            <td className="py-2 px-3">Nhét Giá + Địa phương</td>
          </tr>
          <tr>
            <td className="py-2 px-3 font-bold">Tiêu đề dài (90 ký tự)</td>
            <td className="py-2 px-3 text-center">1</td>
            <td className="py-2 px-3 text-center">5</td>
            <td className="py-2 px-3"><code>Luxury Nails 77084 – 10Yr Techs, Sterilized, 4.9★ 1200 Reviews</code></td>
            <td className="py-2 px-3">Nhét USP + Trust</td>
          </tr>
          <tr className="bg-slate-50">
            <td className="py-2 px-3 font-bold">Mô tả (90 ký tự)</td>
            <td className="py-2 px-3 text-center">1</td>
            <td className="py-2 px-3 text-center">5</td>
            <td className="py-2 px-3"><code>Walk-ins Welcome. Free Parking. Book Online. 3 Slots Today.</code></td>
            <td className="py-2 px-3">Có CTA + Khan hiếm</td>
          </tr>
        </tbody>
      </table>
    </div>

    <div className="bg-blue-50 border border-blue-200 p-4 rounded-lg my-4">
      <p className="font-bold text-blue-800 m-0 mb-1">Quy tắc 3-3-3:</p>
      <p className="text-sm text-blue-700 m-0">1 Asset Group cần ≥3 ảnh, ≥3 tiêu đề, ≥3 mô tả. Ít hơn = Google báo "Asset thấp", reach kém 70%.</p>
    </div>

    <div className="bg-amber-50 border border-amber-200 p-4 rounded-lg my-4">
      <p className="font-bold text-amber-800 m-0 mb-2">Khi nào tách Asset Group:</p>
      <ul className="text-sm text-amber-900 m-0 space-y-1">
        <li><strong>Dịch vụ khác nhau:</strong> Acrylic ≠ Gel X ≠ Pedi. 1 AG = 1 nhu cầu.</li>
        <li><strong>Giá khác nhau:</strong> Dịch vụ $45 khác $85. AI ghép sai giá = Khách chửi.</li>
        <li><strong>Khách khác nhau:</strong> New Client AG khác Returning Client AG.</li>
      </ul>
    </div>

    <h3 className="text-2xl font-bold text-gray-900 mt-10 border-b pb-2">3. Tín hiệu đối tượng – Dạy AI 7 ngày thay vì 30 ngày</h3>
    <p className="text-sm bg-purple-50 p-3 rounded-lg border border-purple-200 text-purple-800">
      <strong>Signal ≠ Target.</strong> PMax vẫn mở rộng ra ngoài Signal. Signal chỉ để "mồi" – cho AI biết điểm xuất phát là ai.
    </p>

    <div className="overflow-x-auto my-4">
      <table className="min-w-full bg-white border border-gray-200 text-sm rounded-lg overflow-hidden shadow-sm">
        <thead className="bg-purple-700 text-white">
          <tr>
            <th className="py-3 px-4 text-left font-bold">#</th>
            <th className="py-3 px-4 text-left font-bold">Loại Signal</th>
            <th className="py-3 px-4 text-left font-bold">Ví dụ 77084</th>
            <th className="py-3 px-4 text-center font-bold">Độ mạnh</th>
          </tr>
        </thead>
        <tbody className="divide-y divide-gray-200">
          <tr className="bg-emerald-50">
            <td className="py-3 px-4 font-bold text-emerald-700">1</td>
            <td className="py-3 px-4 font-bold text-emerald-700">List khách cũ</td>
            <td className="py-3 px-4">Upload SĐT/email 1,000 khách đã book</td>
            <td className="py-3 px-4 text-center font-bold text-emerald-700">10/10</td>
          </tr>
          <tr>
            <td className="py-3 px-4 font-bold">2</td>
            <td className="py-3 px-4 font-bold">Custom Segment</td>
            <td className="py-3 px-4">Từ khóa: <code>acrylic nails near me</code>, <code>nail salon 77084</code>; URL đối thủ</td>
            <td className="py-3 px-4 text-center font-bold text-blue-700">9/10</td>
          </tr>
          <tr className="bg-slate-50">
            <td className="py-3 px-4 font-bold">3</td>
            <td className="py-3 px-4 font-bold">Remarketing web</td>
            <td className="py-3 px-4">All Visitors 30d, Viewed Price 14d</td>
            <td className="py-3 px-4 text-center font-bold text-blue-700">9/10</td>
          </tr>
          <tr>
            <td className="py-3 px-4 font-bold">4</td>
            <td className="py-3 px-4 font-bold">Tìm kiếm trên Google</td>
            <td className="py-3 px-4">10 từ khóa Search chính của tiệm</td>
            <td className="py-3 px-4 text-center font-bold text-orange-600">8/10</td>
          </tr>
          <tr className="bg-slate-50">
            <td className="py-3 px-4 font-bold">5</td>
            <td className="py-3 px-4 font-bold">Sở thích & Nhân khẩu</td>
            <td className="py-3 px-4">Nữ 25–54, Thu nhập top 50%, Quan tâm "Làm đẹp"</td>
            <td className="py-3 px-4 text-center font-bold text-slate-400">5/10</td>
          </tr>
        </tbody>
      </table>
    </div>
    <p className="text-sm text-red-700 font-medium bg-red-50 p-3 rounded-lg border border-red-200">
      Sai lầm phổ biến: Không thêm Signal. PMax "Tối đa hiệu suất" nhưng không biết khách bạn là ai → 14 ngày đầu đốt $1,000 học ngu.
    </p>

    <h3 className="text-2xl font-bold text-gray-900 mt-10 border-b pb-2">4. Data Feed – Linh hồn của PMax</h3>

    <div className="grid grid-cols-1 md:grid-cols-2 gap-4 my-4">
      <div className="bg-white border border-emerald-200 rounded-xl p-4 shadow-sm">
        <h4 className="font-bold text-emerald-800 mt-0 text-base flex items-center gap-2"><Package size={16}/>Google Merchant Center</h4>
        <p className="text-sm text-slate-600 m-0">Dùng khi bán Gift Card, khóa học, supplies online. Shopify/Woo tự sync. Cho phép chạy Shopping Ads + Free Listing.</p>
      </div>
      <div className="bg-white border border-blue-200 rounded-xl p-4 shadow-sm">
        <h4 className="font-bold text-blue-800 mt-0 text-base flex items-center gap-2"><Layers size={16}/>Business Data Feed</h4>
        <p className="text-sm text-slate-600 m-0">Dùng khi bán dịch vụ tại chỗ. Vào Google Ads → Công cụ → Dữ liệu doanh nghiệp → Nguồn cấp dịch vụ. Hiện Local Ads, Maps, Gói dịch vụ.</p>
      </div>
    </div>

    <p className="font-semibold text-slate-700">Feed dịch vụ tiệm nail – 5 cột bắt buộc:</p>
    <div className="overflow-x-auto my-2">
      <table className="min-w-full bg-white border border-gray-200 text-sm rounded-lg overflow-hidden shadow-sm">
        <thead className="bg-slate-700 text-white">
          <tr>
            <th className="py-2 px-3 text-left">ID</th>
            <th className="py-2 px-3 text-left">Item title</th>
            <th className="py-2 px-3 text-left">Final URL</th>
            <th className="py-2 px-3 text-left">Price</th>
            <th className="py-2 px-3 text-left">Image URL</th>
          </tr>
        </thead>
        <tbody className="divide-y divide-gray-200 font-mono text-xs">
          <tr>
            <td className="py-2 px-3">acrylic_01</td>
            <td className="py-2 px-3">Acrylic Full Set</td>
            <td className="py-2 px-3">luxurynails.com/acrylic</td>
            <td className="py-2 px-3 font-bold text-emerald-700">45 USD</td>
            <td className="py-2 px-3 text-blue-600">link ảnh móng</td>
          </tr>
          <tr className="bg-slate-50">
            <td className="py-2 px-3">gelx_01</td>
            <td className="py-2 px-3">Gel X Extensions</td>
            <td className="py-2 px-3">luxurynails.com/gelx</td>
            <td className="py-2 px-3 font-bold text-emerald-700">65 USD</td>
            <td className="py-2 px-3 text-blue-600">link ảnh</td>
          </tr>
          <tr>
            <td className="py-2 px-3">pedi_01</td>
            <td className="py-2 px-3">Deluxe Pedicure</td>
            <td className="py-2 px-3">luxurynails.com/pedi</td>
            <td className="py-2 px-3 font-bold text-emerald-700">40 USD</td>
            <td className="py-2 px-3 text-blue-600">link ảnh</td>
          </tr>
        </tbody>
      </table>
    </div>
    <p className="text-sm text-slate-600">PMax tự lấy giá + ảnh ghép vào ads Search, Maps. CTR x2 vì có giá hiển thị. Không có feed → CPA đắt hơn 30%.</p>

    <h3 className="text-2xl font-bold text-gray-900 mt-10 border-b pb-2">5. Luồng 7 ngày đầu – Quy tắc không được đụng</h3>
    <VisualizerPMax7Days />
    <div className="bg-amber-50 border border-amber-300 p-3 rounded-lg text-sm font-bold text-amber-800">
      Quy tắc 14 ngày: Không đánh giá PMax trước ngày 14. Tắt sớm = Vứt tiền học. Ngày 15 mới tối ưu.
    </div>

    <h3 className="text-2xl font-bold text-gray-900 mt-10 border-b pb-2">6. 5 sai lầm khiến PMax lỗ cho local</h3>
    <div className="overflow-x-auto my-4">
      <table className="min-w-full bg-white border border-gray-200 text-sm rounded-lg overflow-hidden shadow-sm">
        <thead className="bg-red-700 text-white">
          <tr>
            <th className="py-3 px-4 text-left font-bold">Lỗi</th>
            <th className="py-3 px-4 text-left font-bold">Hậu quả</th>
            <th className="py-3 px-4 text-left font-bold">Sửa sao</th>
          </tr>
        </thead>
        <tbody className="divide-y divide-gray-200">
          <tr>
            <td className="py-3 px-4 font-bold">1. 1 Asset Group cho cả tiệm</td>
            <td className="py-3 px-4 text-red-700">AI ghép ảnh Gel X + giá Acrylic $45 → Khách chửi</td>
            <td className="py-3 px-4 text-emerald-700 font-medium">Tách AG: Acrylic riêng, Gel X riêng, Pedi riêng</td>
          </tr>
          <tr className="bg-slate-50">
            <td className="py-3 px-4 font-bold">2. Không có Signal</td>
            <td className="py-3 px-4 text-red-700">14 ngày đầu CPA $200, không ra khách</td>
            <td className="py-3 px-4 text-emerald-700 font-medium">Thêm List khách cũ + Custom Segment 77084</td>
          </tr>
          <tr>
            <td className="py-3 px-4 font-bold">3. Không loại trừ Brand</td>
            <td className="py-3 px-4 text-red-700">PMax cướp hết conv Brand Search, tưởng PMax lời</td>
            <td className="py-3 px-4 text-emerald-700 font-medium">Cài đặt → Loại trừ thương hiệu → Nhập tên tiệm</td>
          </tr>
          <tr className="bg-slate-50">
            <td className="py-3 px-4 font-bold">4. Không có video</td>
            <td className="py-3 px-4 text-red-700">Google tự ghép ảnh thành slideshow xấu, View Rate 10%</td>
            <td className="py-3 px-4 text-emerald-700 font-medium">Quay 1 video 15s bằng iPhone là đủ</td>
          </tr>
          <tr>
            <td className="py-3 px-4 font-bold">5. Đặt tROAS 1000% ngày 1</td>
            <td className="py-3 px-4 text-red-700">Impression = 0. AI không dám chi tiêu</td>
            <td className="py-3 px-4 text-emerald-700 font-medium">Bắt đầu Max Conversion 14 ngày. Có 30 conv mới sang tROAS 400%</td>
          </tr>
        </tbody>
      </table>
    </div>

    <div className="bg-slate-800 text-white p-4 rounded-xl mt-6 text-sm">
      <p className="font-bold text-yellow-300 m-0 mb-1">Công thức Local $50/ngày:</p>
      <p className="m-0 font-mono text-emerald-300">4 Asset Group dịch vụ + List khách cũ + Feed giá + 5 miles = CPA &lt;$30</p>
      <p className="m-0 mt-2 text-slate-300">Không có Signal = PMax cờ bạc. Có Signal = PMax máy in khách.</p>
    </div>

    <InteractiveChecklist
      id="chk39"
      title="Checklist Bài 39 – Setup PMax Local"
      tasks={[
        "Tạo Asset Group theo từng dịch vụ (Acrylic, Gel X, Pedi). Mỗi AG ≥15 ảnh, ≥2 video, ≥5 tiêu đề có giá + zipcode.",
        "Upload list 1,000 SĐT/email khách cũ làm Signal #1. Thêm Custom Segment 10 từ khóa + 3 URL đối thủ.",
        "Tạo file Feed dịch vụ 5 dịch vụ chính (Google Sheet): ID, title, link, price, image_link. Nạp vào Google Ads.",
        "Cài Brand Exclusion: Cài đặt camp → Loại trừ thương hiệu → Nhập tên tiệm để PMax không cướp Search.",
        "Đặt Bid = Max Conversion 14 ngày đầu. Sau 30 conv mới chuyển sang tCPA = $25.",
        "Đặt lịch review ngày 15: Mở 5 báo cáo Insight. Không đụng camp trước ngày đó."
      ]}
    />
  </div>
);

// ─── LESSON 40 ─────────────────────────────────────────────────────────────────
export const Lesson40Content = () => (
  <div className="prose prose-blue max-w-none text-gray-800">
    <div className="bg-amber-50 border-l-4 border-amber-500 p-4 mb-6 rounded-r-lg flex items-start gap-3">
      <AlertOctagon className="text-amber-500 mt-0.5 shrink-0" size={24} />
      <p className="m-0 text-sm text-amber-800 font-medium">
        <strong>Không có GMC = Không chạy Shopping Ads, PMax e-commerce, Dynamic Remarketing.</strong><br />
        Sai 1 lỗi = Cả feed 1,000 sản phẩm bị từ chối, ads tắt 0 impression. 90% shop mới chết ở đây.<br />
        <strong>Áp dụng cho:</strong> Tiệm nail bán supplies online, gift card, khóa học. Bán dịch vụ tại chỗ không cần GMC.
      </p>
    </div>

    <h3 className="text-2xl font-bold text-gray-900 border-b pb-2">1. Setup GMC từ A-Z trong 30 phút – Làm đúng thứ tự</h3>

    <div className="space-y-4 my-4">
      <div className="bg-slate-50 p-4 border border-slate-200 rounded-lg">
        <h4 className="font-bold text-blue-700 m-0 text-base">Bước 1: Tạo tài khoản + Verify web</h4>
        <p className="text-sm m-0 mt-1 text-slate-600">Vào <code>merchants.google.com</code> → Tạo tài khoản → Quốc gia: United States. Xác minh website bằng thẻ HTML vào <code>&lt;head&gt;</code> hoặc upload file HTML. Shopify/Woo có app 1 click.</p>
      </div>
      <div className="bg-slate-50 p-4 border border-slate-200 rounded-lg">
        <h4 className="font-bold text-blue-700 m-0 text-base">Bước 2: Cài đặt thông tin doanh nghiệp</h4>
        <p className="text-sm m-0 mt-1 text-slate-600">Bánh răng → Thông tin doanh nghiệp: Tên trùng 100% với web + Google Business Profile. Địa chỉ thật (PO Box dễ bị tạm ngưng). SĐT gọi được (Google sẽ gọi test). Xác minh bằng hóa đơn điện hoặc ĐKKD – mất 3–7 ngày, không làm giới hạn 100 sản phẩm.</p>
      </div>
      <div className="bg-slate-50 p-4 border border-slate-200 rounded-lg">
        <h4 className="font-bold text-blue-700 m-0 text-base">Bước 3: Link Google Ads</h4>
        <p className="text-sm m-0 mt-1 text-slate-600">Bánh răng → Tài khoản được liên kết → Google Ads → Nhập ID → Gửi. Vào Google Ads chấp nhận. Không link = PMax không chạy được.</p>
      </div>
      <div className="bg-slate-50 p-4 border border-slate-200 rounded-lg relative overflow-hidden">
        <div className="absolute top-0 right-0 bg-blue-600 text-white text-[10px] font-bold px-2 py-1 rounded-bl">BƯỚC QUAN TRỌNG</div>
        <h4 className="font-bold text-blue-700 m-0 text-base">Bước 4: Up Feed sản phẩm</h4>
        <p className="text-sm m-0 mt-1 text-slate-600">Sản phẩm → Nguồn cấp dữ liệu → + → Chọn "Trang tính Google" để dễ sửa. <strong>6 cột bắt buộc:</strong> <code>id</code>, <code>title</code>, <code>description</code>, <code>link</code>, <code>image_link</code>, <code>price</code>. Thêm: <code>availability</code>, <code>brand</code>, <code>gtin</code>, <code>shipping</code>, <code>google_product_category</code>.</p>
      </div>
    </div>
    <p className="text-sm text-emerald-700 font-medium bg-emerald-50 p-3 rounded-lg border border-emerald-200">Shopify/Woo: Cài app "Google & YouTube" hoặc "Google Listings & Ads". Auto sync 100%, không cần làm tay.</p>

    <h3 className="text-2xl font-bold text-gray-900 mt-10 border-b pb-2">2. Lỗi #1: GTIN – 70% shop mới bị từ chối</h3>
    <p className="text-sm">GTIN = Mã vạch quốc tế: UPC Mỹ 12 số, EAN 13 số. Google dùng để biết hàng thật hay fake.</p>

    <div className="overflow-x-auto my-4">
      <table className="min-w-full bg-white border border-gray-200 text-sm rounded-lg overflow-hidden shadow-sm">
        <thead className="bg-slate-800 text-white">
          <tr>
            <th className="py-3 px-4 text-left font-bold">Tình huống</th>
            <th className="py-3 px-4 text-left font-bold">Google yêu cầu</th>
            <th className="py-3 px-4 text-left font-bold">Bạn làm gì</th>
            <th className="py-3 px-4 text-left font-bold">Kết quả</th>
          </tr>
        </thead>
        <tbody className="divide-y divide-gray-200 text-xs">
          <tr className="bg-emerald-50">
            <td className="py-2 px-4">SP có mã vạch (Kupa, OPI, NotPolish)</td>
            <td className="py-2 px-4">Bắt buộc nhập <code>gtin</code></td>
            <td className="py-2 px-4">Quét mã vạch sau hộp, nhập đủ 12–14 số</td>
            <td className="py-2 px-4 font-bold text-emerald-700">Duyệt ✓</td>
          </tr>
          <tr>
            <td className="py-2 px-4">Hàng custom (gift card, dịch vụ, khóa học)</td>
            <td className="py-2 px-4">Không bắt buộc</td>
            <td className="py-2 px-4">Để trống gtin, thêm cột <code>identifier_exists</code> = <code>FALSE</code></td>
            <td className="py-2 px-4 font-bold text-emerald-700">Duyệt ✓</td>
          </tr>
          <tr className="bg-red-50">
            <td className="py-2 px-4">Hàng hãng nhưng để trống gtin</td>
            <td className="py-2 px-4">Bắt buộc gtin</td>
            <td className="py-2 px-4">Để trống hoặc bịa số</td>
            <td className="py-2 px-4 font-bold text-red-700">Từ chối: Missing GTIN ✗</td>
          </tr>
          <tr className="bg-red-50">
            <td className="py-2 px-4">Nhập sai số (12 số nhưng nhập 11)</td>
            <td className="py-2 px-4">12–14 số chính xác</td>
            <td className="py-2 px-4">Nhập sai</td>
            <td className="py-2 px-4 font-bold text-red-700">Invalid GTIN ✗</td>
          </tr>
        </tbody>
      </table>
    </div>

    <div className="bg-red-50 border border-red-200 p-4 rounded-lg my-4">
      <p className="font-bold text-red-800 m-0 mb-1 flex items-center gap-2"><AlertTriangle size={16}/>Tuyệt đối không:</p>
      <p className="text-sm text-red-700 m-0">Bịa GTIN, copy GTIN sản phẩm khác → Bị ban GMC vĩnh viễn. Mua GTIN hợp pháp tại <strong>GS1US.org</strong> (~$30) nếu hàng OEM tự đặt.</p>
    </div>

    <h3 className="text-2xl font-bold text-gray-900 mt-10 border-b pb-2">3. Lỗi #2: Chính sách – Thiếu 3 trang là bị treo tài khoản</h3>
    <p className="text-sm text-slate-600">Google quét web bằng bot. Thiếu 3 trang này = <code>Tài khoản bị tạm ngưng: Vi phạm chính sách mua sắm</code>.</p>

    <div className="overflow-x-auto my-4">
      <table className="min-w-full bg-white border border-gray-200 text-sm rounded-lg overflow-hidden shadow-sm">
        <thead className="bg-slate-800 text-white">
          <tr>
            <th className="py-3 px-4 text-left font-bold">Trang bắt buộc</th>
            <th className="py-3 px-4 text-left font-bold">Yêu cầu Google</th>
            <th className="py-3 px-4 text-left font-bold">Mẫu cho tiệm nail bán online</th>
            <th className="py-3 px-4 text-left font-bold">Đặt ở đâu</th>
          </tr>
        </thead>
        <tbody className="divide-y divide-gray-200 text-xs">
          <tr>
            <td className="py-3 px-4 font-bold text-red-700">1. Chính sách hoàn tiền</td>
            <td className="py-3 px-4">Ghi rõ: Hoàn tiền khi nào, bao ngày, ai trả ship</td>
            <td className="py-3 px-4"><code>Hoàn tiền 30 ngày nếu chưa dùng. Khách trả ship hoàn.</code></td>
            <td className="py-3 px-4">Footer web</td>
          </tr>
          <tr className="bg-slate-50">
            <td className="py-3 px-4 font-bold text-red-700">2. Chính sách vận chuyển</td>
            <td className="py-3 px-4">Phí ship, bao lâu giao, ship đi đâu</td>
            <td className="py-3 px-4"><code>Free ship &gt;$50. USPS 3–5 ngày. Ship 50 bang US.</code></td>
            <td className="py-3 px-4">Footer web</td>
          </tr>
          <tr>
            <td className="py-3 px-4 font-bold text-red-700">3. Liên hệ (Contact Us)</td>
            <td className="py-3 px-4">Có địa chỉ thật, SĐT, Email. Không được chỉ có form</td>
            <td className="py-3 px-4"><code>Luxury Nails, 123 Bellaire Blvd, Houston TX 77084. (281) xxx-xxxx</code></td>
            <td className="py-3 px-4">Footer + Menu</td>
          </tr>
        </tbody>
      </table>
    </div>

    <div className="grid grid-cols-1 md:grid-cols-3 gap-3 my-4">
      {[
        { title: 'Web chưa hoàn thiện', desc: 'Còn chữ Lorem ipsum, trang trống → Hoàn thiện 100% mới submit GMC' },
        { title: 'Thanh toán không an toàn', desc: 'Không https, không icon Visa/MC checkout → Mua SSL, dùng Stripe/PayPal' },
        { title: 'Giá không khớp', desc: 'Giá GMC $45, vào web $49 → Price mismatch. Dùng app auto sync' },
      ].map(({ title, desc }) => (
        <div key={title} className="bg-red-50 border border-red-200 rounded-lg p-3">
          <p className="font-bold text-red-800 text-sm m-0 mb-1">{title}</p>
          <p className="text-xs text-red-700 m-0">{desc}</p>
        </div>
      ))}
    </div>

    <h3 className="text-2xl font-bold text-gray-900 mt-10 border-b pb-2">4. Lỗi #3: Vận chuyển – Cài sai = Từ chối từng sản phẩm</h3>
    <p className="text-sm font-bold text-slate-700 bg-yellow-50 p-3 rounded-lg border border-yellow-200">
      Nguyên tắc: Giá khách thấy trên ads = Giá khách trả khi checkout. Sai $0.01 cũng từ chối.
    </p>

    <div className="grid grid-cols-1 md:grid-cols-2 gap-4 my-4">
      <div className="bg-emerald-50 border border-emerald-200 rounded-lg p-4">
        <h4 className="font-bold text-emerald-800 m-0 mb-2 text-sm">Mẫu 1: Free Ship toàn US – Dễ nhất</h4>
        <ol className="text-xs text-emerald-900 m-0 space-y-1 pl-4">
          <li>Bánh răng → Vận chuyển và trả hàng → +Dịch vụ vận chuyển</li>
          <li>Tên: <code>Free US Shipping</code> · Quốc gia: United States</li>
          <li>Phí: <strong>Miễn phí cho tất cả</strong> · Thời gian: 3–5 ngày</li>
          <li>Lưu → 100% sản phẩm được duyệt</li>
        </ol>
      </div>
      <div className="bg-blue-50 border border-blue-200 rounded-lg p-4">
        <h4 className="font-bold text-blue-800 m-0 mb-2 text-sm">Mẫu 2: Tính ship theo giá đơn hàng</h4>
        <ol className="text-xs text-blue-900 m-0 space-y-1 pl-4">
          <li>Phí → Theo bảng giá</li>
          <li>0–$49.99: $5.99 ship / ≥$50: Free</li>
          <li>Nếu ship khác nhau từng SP → Thêm cột <code>shipping</code> vào feed</li>
          <li>Thuế Tax: Bánh răng → Thuế → Chọn bang → Để Google tự tính</li>
        </ol>
      </div>
    </div>

    <h3 className="text-2xl font-bold text-gray-900 mt-10 border-b pb-2">5. Đọc tab Chẩn đoán – Fix lỗi 5 phút</h3>
    <div className="overflow-x-auto my-4">
      <table className="min-w-full bg-white border border-gray-200 text-sm rounded-lg overflow-hidden shadow-sm">
        <thead className="bg-slate-700 text-white">
          <tr>
            <th className="py-2 px-4 text-left">Cấp độ</th>
            <th className="py-2 px-4 text-left">Ý nghĩa</th>
            <th className="py-2 px-4 text-left">Làm gì</th>
          </tr>
        </thead>
        <tbody className="divide-y divide-gray-200 text-sm">
          <tr className="bg-red-50">
            <td className="py-2 px-4 font-bold text-red-700">Từ chối</td>
            <td className="py-2 px-4">0 impression. SP không hiện trên Google</td>
            <td className="py-2 px-4 font-medium">Sửa trong 3 ngày, không sẽ ảnh hưởng tài khoản</td>
          </tr>
          <tr className="bg-yellow-50">
            <td className="py-2 px-4 font-bold text-yellow-700">Cần chú ý</td>
            <td className="py-2 px-4">Vẫn hiện nhưng bị hạn chế reach</td>
            <td className="py-2 px-4">Sửa trong 14 ngày</td>
          </tr>
          <tr className="bg-slate-50">
            <td className="py-2 px-4 font-bold text-slate-500">Đang chờ xem xét</td>
            <td className="py-2 px-4">Mới up, đợi Google duyệt 24–72h</td>
            <td className="py-2 px-4 text-slate-500">Kệ, uống cà phê</td>
          </tr>
        </tbody>
      </table>
    </div>

    <div className="bg-slate-50 p-4 rounded-lg border border-slate-200 my-4">
      <p className="font-bold text-slate-800 m-0 mb-2">3 lỗi từ chối nhiều nhất + Fix nhanh:</p>
      <ul className="text-sm text-slate-700 m-0 space-y-2">
        <li><strong className="text-red-600">Vi phạm chính sách: Thông tin sai lệch</strong> → Web thiếu Return Policy → Thêm trang, submit lại xem xét</li>
        <li><strong className="text-red-600">Thiếu GTIN</strong> → SP hãng nhưng trống gtin → Thêm GTIN hoặc <code>identifier_exists: FALSE</code> nếu hàng custom</li>
        <li><strong className="text-red-600">Giá không khớp</strong> → Web $45, Feed $44.99 → Dùng app sync hoặc sửa tay cho khớp 100%</li>
      </ul>
    </div>

    <div className="bg-amber-50 border border-amber-300 p-4 rounded-lg my-4">
      <p className="font-bold text-amber-800 m-0 mb-2">Khi bị Tạm ngưng tài khoản – Cứu trong 7 ngày:</p>
      <ol className="text-sm text-amber-900 m-0 space-y-1 pl-4">
        <li>Đọc lý do: Chính sách → Vấn đề về tài khoản</li>
        <li>Sửa triệt để: Sửa web + feed + ship. Không sửa nửa vời</li>
        <li>Yêu cầu xem xét: Viết 3 dòng giải thích đã sửa gì</li>
        <li>Đợi 3–7 ngày. Không submit liên tục (chỉ 1 lần/tuần)</li>
        <li>Nếu trượt lần 3: Thuê agency GMC $200. Tự sửa lần 3 trượt = Ban vĩnh viễn</li>
      </ol>
    </div>

    <div className="bg-slate-800 text-white p-4 rounded-xl mt-6 text-sm">
      <p className="font-bold text-yellow-300 m-0 mb-1">Công thức duyệt 24h:</p>
      <p className="m-0 font-mono text-emerald-300">Feed sạch + Web đủ chính sách + Ship đúng + GTIN đúng = Duyệt trong 24h</p>
      <p className="m-0 mt-2 text-slate-300">Quy tắc 1 lỗi: 1 SP sai GTIN = Cả tài khoản bị gắn cờ. 1,000 SP phải đúng 1,000 SP.</p>
    </div>

    <InteractiveChecklist
      id="chk40"
      title="Checklist Bài 40 – Setup GMC đúng chuẩn"
      tasks={[
        "Tạo tài khoản GMC, xác minh website bằng thẻ HTML. Link Google Ads vào GMC.",
        "Điền thông tin doanh nghiệp: Tên trùng web + GBP, địa chỉ thật, SĐT gọi được. Upload hóa đơn xác minh.",
        "Kiểm tra web có đủ 3 trang bắt buộc ở Footer: Return Policy, Shipping Policy, Contact Us với địa chỉ + SĐT.",
        "Cài đặt Vận chuyển cấp tài khoản: Free Ship hoặc Bảng giá ship theo đơn hàng. Khớp 100% với checkout.",
        "Up feed sản phẩm. Vào Chẩn đoán: Kiểm tra lỗi GTIN, Giá không khớp, Vi phạm chính sách. Fix hết trước khi bật ads.",
        "Kiểm tra thực tế: Bỏ 1 SP vào giỏ hàng checkout → giá cuối phải bằng giá trong GMC (bao gồm ship)."
      ]}
    />
  </div>
);

// ─── LESSON 41 ─────────────────────────────────────────────────────────────────
export const Lesson41Content = () => (
  <div className="prose prose-blue max-w-none text-gray-800">
    <div className="bg-emerald-50 border-l-4 border-emerald-500 p-4 mb-6 rounded-r-lg flex items-start gap-3">
      <ShoppingCart className="text-emerald-500 mt-0.5 shrink-0" size={24} />
      <p className="m-0 text-sm text-emerald-800 font-medium">
        <strong>Shopping Ads = Gian hàng trên Google.</strong> Khách search "kupa drill" → Thấy ảnh + giá + tên shop của bạn ngay.<br />
        Nhưng 100 shop bán Kupa, Google chỉ cho 5 shop lên top. <strong>Thắng thua do 3 thứ: Tiêu đề + Ảnh + Giá.</strong>
        Thua 1 cái = CPC x2, ROAS /2.
      </p>
    </div>

    <h3 className="text-2xl font-bold text-gray-900 border-b pb-2">1. Tiêu đề (Title) – Yếu tố #1 quyết định CTR</h3>
    <p className="text-sm text-slate-600 bg-slate-50 p-3 rounded-lg border border-slate-200">
      <strong>Quy tắc Google:</strong> Tiêu đề = Nội dung Search của khách. Khách search <code>acrylic powder clear</code> mà title bạn <code>Bột đắp móng số 1</code> → Không hiện.
    </p>

    <div className="bg-blue-50 border border-blue-200 p-4 rounded-lg my-4">
      <p className="font-bold text-blue-800 m-0 mb-1">Công thức Title 70 ký tự cho nail supplies:</p>
      <p className="font-mono text-sm text-blue-700 m-0">Thương hiệu + Dòng SP + Thuộc tính + Size/Màu + Từ khóa phụ</p>
    </div>

    <div className="overflow-x-auto my-4">
      <table className="min-w-full bg-white border border-gray-200 text-sm rounded-lg overflow-hidden shadow-sm">
        <thead className="bg-slate-800 text-white">
          <tr>
            <th className="py-3 px-4 text-left font-bold text-red-300">Dở – Không ai click</th>
            <th className="py-3 px-4 text-left font-bold text-emerald-300">Tốt – CTR 2.5%</th>
            <th className="py-3 px-4 text-left font-bold">Lý do win</th>
          </tr>
        </thead>
        <tbody className="divide-y divide-gray-200 text-xs">
          <tr>
            <td className="py-2 px-4 text-red-700 line-through">Bột đắp móng cao cấp</td>
            <td className="py-2 px-4 font-bold text-emerald-700">NotPolish Acrylic Powder Clear 2oz – For Nails Salon</td>
            <td className="py-2 px-4">Có brand + màu + size + từ khóa <code>salon</code></td>
          </tr>
          <tr className="bg-slate-50">
            <td className="py-2 px-4 text-red-700 line-through">Máy mài Kupa</td>
            <td className="py-2 px-4 font-bold text-emerald-700">Kupa ManiPro Passport Nail Drill 2024 – Electric File Pink</td>
            <td className="py-2 px-4">Có model + năm + màu sắc</td>
          </tr>
          <tr>
            <td className="py-2 px-4 text-red-700 line-through">Gift Card Tiệm</td>
            <td className="py-2 px-4 font-bold text-emerald-700">$50 Gift Card – Luxury Nails Houston TX – E-Delivery</td>
            <td className="py-2 px-4">Có giá + địa phương + loại giao hàng</td>
          </tr>
        </tbody>
      </table>
    </div>

    <div className="space-y-3 my-4">
      <h4 className="font-bold text-slate-800 text-base m-0">5 quy tắc viết Title Shopping:</h4>
      {[
        { num: '1', rule: '35 ký tự đầu = Sinh tử', detail: 'Mobile chỉ hiện 35 ký tự. Nhét từ khóa + brand vào đầu. Đúng: Kupa ManiPro Passport Drill Pink. Sai: Professional Electric Nail Drill Machine For Manicure...' },
        { num: '2', rule: 'Thêm thuộc tính khách lọc', detail: 'Size, màu, chất liệu. VD: Young Nails Acrylic Powder Cover Pink 45g – 1.5oz' },
        { num: '3', rule: 'Thêm từ khóa ý định mua', detail: 'for salon, professional, bulk, kit. VD: 100pcs Nail Tips Coffin Clear – For Salon Professional' },
        { num: '4', rule: 'Cấm từ spam', detail: 'Best, Top, Cheap, Free Ship, #1. Google phạt, CTR thấp. Không dùng.' },
        { num: '5', rule: 'A/B test', detail: 'Tạo 2 feed song song. Feed A vs Feed B. Chạy 7 ngày, giữ cái CTR cao.' },
      ].map(({ num, rule, detail }) => (
        <div key={num} className="flex gap-3 bg-slate-50 p-3 rounded-lg border border-slate-200">
          <div className="w-6 h-6 bg-blue-600 text-white rounded-full flex items-center justify-center text-xs font-bold shrink-0">{num}</div>
          <div>
            <span className="font-bold text-slate-800 text-sm">{rule}: </span>
            <span className="text-sm text-slate-600">{detail}</span>
          </div>
        </div>
      ))}
    </div>

    <h3 className="text-2xl font-bold text-gray-900 mt-10 border-b pb-2">2. Ảnh (Image) – 80% quyết định click</h3>

    <div className="bg-amber-50 border border-amber-200 p-4 rounded-lg my-4">
      <p className="font-bold text-amber-800 m-0 mb-2">Yêu cầu bắt buộc Google:</p>
      <ul className="text-sm text-amber-900 m-0 space-y-1">
        <li>≥800×800px, khuyến nghị <strong>1500×1500px</strong></li>
        <li>Nền trắng 100% <code>#FFFFFF</code>. Không bóng đổ, không logo, không text, không watermark</li>
        <li>SP chiếm 75–90% khung hình</li>
        <li>Ảnh thật, không phải ảnh render</li>
      </ul>
    </div>

    <div className="overflow-x-auto my-4">
      <table className="min-w-full bg-white border border-gray-200 text-sm rounded-lg overflow-hidden shadow-sm">
        <thead className="bg-slate-800 text-white">
          <tr>
            <th className="py-3 px-4 text-left font-bold text-red-300">Lỗi ảnh</th>
            <th className="py-3 px-4 text-left font-bold">Hậu quả</th>
            <th className="py-3 px-4 text-left font-bold text-emerald-300">Ảnh đúng cho nail supplies</th>
          </tr>
        </thead>
        <tbody className="divide-y divide-gray-200 text-xs">
          <tr>
            <td className="py-2 px-4 text-red-700 font-medium">Nền màu, lifestyle</td>
            <td className="py-2 px-4">Từ chối: Promotional overlay</td>
            <td className="py-2 px-4 text-emerald-700">Nền trắng 100%, chỉ có hũ bột</td>
          </tr>
          <tr className="bg-slate-50">
            <td className="py-2 px-4 text-red-700 font-medium">Chụp mờ, thiếu sáng</td>
            <td className="py-2 px-4">CTR 0.4%. Khách tưởng hàng fake</td>
            <td className="py-2 px-4 text-emerald-700">Chụp box sáng, ảnh nét căng</td>
          </tr>
          <tr>
            <td className="py-2 px-4 text-red-700 font-medium">Có chữ "Sale 20%"</td>
            <td className="py-2 px-4">Từ chối: Text on image</td>
            <td className="py-2 px-4 text-emerald-700">Xóa hết chữ. Giá để ở field <code>price</code></td>
          </tr>
          <tr className="bg-slate-50">
            <td className="py-2 px-4 text-red-700 font-medium">Nhiều SP 1 ảnh</td>
            <td className="py-2 px-4">CTR thấp, Google không biết bán gì</td>
            <td className="py-2 px-4 text-emerald-700">1 ảnh = 1 SKU. Bán set thì chụp cả set</td>
          </tr>
          <tr>
            <td className="py-2 px-4 text-red-700 font-medium">Ảnh &lt;500px</td>
            <td className="py-2 px-4">Vỡ trên mobile, CTR giảm 50%</td>
            <td className="py-2 px-4 text-emerald-700">Luôn 1500×1500px</td>
          </tr>
        </tbody>
      </table>
    </div>

    <div className="bg-emerald-50 border border-emerald-200 p-4 rounded-lg my-4">
      <p className="font-bold text-emerald-800 m-0 mb-2">Mẹo chụp 1,000 SP/1 ngày:</p>
      <ol className="text-sm text-emerald-900 m-0 space-y-1 pl-4">
        <li>Mua lều chụp 60×60cm $25 + 2 đèn $20</li>
        <li>Đặt SP lên giấy A3 trắng. iPhone 12 trở lên, chế độ Vuông 1:1</li>
        <li>Dùng app <strong>PhotoRoom</strong> xóa nền 1 click → Trắng 100%</li>
        <li>Chạy action Photoshop resize 1500×1500 hàng loạt</li>
      </ol>
      <p className="text-sm text-emerald-700 m-0 mt-2"><strong>Ảnh phụ:</strong> Thêm 3–8 ảnh <code>additional_image_link</code>. Ảnh phụ được phép có tay mẫu, lifestyle. Ảnh chính mới bắt buộc nền trắng.</p>
    </div>

    <h3 className="text-2xl font-bold text-gray-900 mt-10 border-b pb-2">3. Giá (Price) – Yếu tố #2. Đắt hơn $1 cũng mất khách</h3>
    <p className="text-sm text-slate-600">Google xếp hạng: Relevance → Giá → Chất lượng Feed. Bạn relevance 10/10 nhưng đắt hơn đối thủ $2 = Xuống vị trí 4.</p>

    <div className="overflow-x-auto my-4">
      <table className="min-w-full bg-white border border-gray-200 text-sm rounded-lg overflow-hidden shadow-sm">
        <thead className="bg-slate-700 text-white">
          <tr>
            <th className="py-3 px-4 text-left font-bold">Chiến thuật</th>
            <th className="py-3 px-4 text-left font-bold">Khi nào dùng</th>
            <th className="py-3 px-4 text-left font-bold">Ví dụ</th>
            <th className="py-3 px-4 text-left font-bold">Rủi ro</th>
          </tr>
        </thead>
        <tbody className="divide-y divide-gray-200 text-sm">
          <tr>
            <td className="py-2 px-4 font-bold">1. Bằng giá thấp nhất</td>
            <td className="py-2 px-4">SP phổ thông: Kupa, OPI, acetone</td>
            <td className="py-2 px-4">Đối thủ $189, bạn $189</td>
            <td className="py-2 px-4 text-red-600">Lãi mỏng 5–8%</td>
          </tr>
          <tr className="bg-slate-50">
            <td className="py-2 px-4 font-bold">2. Đắt hơn $1–2 nhưng Free Ship</td>
            <td className="py-2 px-4">SP &gt;$50</td>
            <td className="py-2 px-4">Bạn $52 Free Ship vs đối thủ $50 + $6 ship</td>
            <td className="py-2 px-4">Khách thích "Free", nhưng margin tốt hơn</td>
          </tr>
          <tr>
            <td className="py-2 px-4 font-bold">3. Theo combo</td>
            <td className="py-2 px-4">SP nhỏ &lt;$10</td>
            <td className="py-2 px-4">Bán set 3 hũ $27 vs lẻ $10/hũ</td>
            <td className="py-2 px-4 text-emerald-700">AOV cao, lãi tốt</td>
          </tr>
        </tbody>
      </table>
    </div>

    <div className="bg-slate-50 border border-slate-200 p-4 rounded-lg my-4">
      <p className="font-bold text-slate-800 m-0 mb-2">3 quy tắc giá không được vi phạm:</p>
      <ul className="text-sm text-slate-700 m-0 space-y-2">
        <li><strong>Giá Feed = Giá Checkout:</strong> Vào web bỏ vào giỏ, ra giá cuối. Khác 1 cent = Price mismatch, bị từ chối</li>
        <li><strong>Sale price:</strong> Dùng cột <code>sale_price</code> khi giảm. <code>price</code> = giá gốc gạch ngang. CTR tăng 30%</li>
        <li><strong>Auto pricing:</strong> Shopify app "Google Channel" tự sync giá 24h/lần. Không sync tay</li>
      </ul>
    </div>

    <h3 className="text-2xl font-bold text-gray-900 mt-10 border-b pb-2">4. 7 trường tối ưu thêm – Từ CTR 1% lên 3%</h3>
    <div className="overflow-x-auto my-4">
      <table className="min-w-full bg-white border border-gray-200 text-sm rounded-lg overflow-hidden shadow-sm">
        <thead className="bg-emerald-700 text-white">
          <tr>
            <th className="py-2 px-3 text-left font-bold">Trường GMC</th>
            <th className="py-2 px-3 text-left font-bold">Tối ưu sao</th>
            <th className="py-2 px-3 text-left font-bold">Tác dụng</th>
          </tr>
        </thead>
        <tbody className="divide-y divide-gray-200 text-xs">
          <tr>
            <td className="py-2 px-3 font-bold font-mono">description</td>
            <td className="py-2 px-3">500–1,000 ký tự. 150 ký tự đầu chứa từ khóa. VD: <code>Kupa ManiPro Passport is professional electric nail drill 35000RPM...</code></td>
            <td className="py-2 px-3">Google đọc để hiểu SP. Hiện khi khách lọc</td>
          </tr>
          <tr className="bg-slate-50">
            <td className="py-2 px-3 font-bold font-mono">google_product_category</td>
            <td className="py-2 px-3">Chọn sâu nhất: <code>Health &gt; Personal Care &gt; Cosmetics &gt; Nail Care</code></td>
            <td className="py-2 px-3">Hiện đúng người tìm nail</td>
          </tr>
          <tr>
            <td className="py-2 px-3 font-bold font-mono">product_type</td>
            <td className="py-2 px-3">Tự do: <code>Nail Supplies &gt; Electric Files &gt; Kupa</code></td>
            <td className="py-2 px-3">Dùng để chia nhóm bid trong Ads</td>
          </tr>
          <tr className="bg-slate-50">
            <td className="py-2 px-3 font-bold font-mono">gtin + mpn</td>
            <td className="py-2 px-3">Nhập đủ cả 2</td>
            <td className="py-2 px-3">Hiện badge "Top Quality Store"</td>
          </tr>
          <tr>
            <td className="py-2 px-3 font-bold font-mono">custom_label_0–4</td>
            <td className="py-2 px-3">Gắn nhãn: <code>margin_high</code>, <code>best_seller</code>, <code>season_winter</code></td>
            <td className="py-2 px-3">PMax/Shopping bid riêng theo nhãn này</td>
          </tr>
        </tbody>
      </table>
    </div>

    <h3 className="text-2xl font-bold text-gray-900 mt-10 border-b pb-2">5. Đọc báo cáo Shopping – 4 cột quan trọng</h3>
    <p className="text-sm text-slate-600">Vào Google Ads → Chiến dịch Shopping → Sản phẩm</p>
    <div className="overflow-x-auto my-4">
      <table className="min-w-full bg-white border border-gray-200 text-sm rounded-lg overflow-hidden shadow-sm text-center">
        <thead className="bg-slate-700 text-white">
          <tr>
            <th className="py-3 px-4 text-left">Cột</th>
            <th className="py-3 px-4">Tốt</th>
            <th className="py-3 px-4">Xấu</th>
            <th className="py-3 px-4 text-left">Hành động khi xấu</th>
          </tr>
        </thead>
        <tbody className="divide-y divide-gray-200 text-sm">
          <tr>
            <td className="py-3 px-4 font-bold text-left">1. CTR</td>
            <td className="py-3 px-4 text-emerald-700 font-bold">&gt;1.5%</td>
            <td className="py-3 px-4 text-red-700 font-bold">&lt;0.8%</td>
            <td className="py-3 px-4 text-left">Đổi ảnh + title. Xem lại giá có cao không</td>
          </tr>
          <tr className="bg-slate-50">
            <td className="py-3 px-4 font-bold text-left">2. Impr. Share mất do xếp hạng</td>
            <td className="py-3 px-4 text-emerald-700 font-bold">&lt;50%</td>
            <td className="py-3 px-4 text-red-700 font-bold">&gt;80%</td>
            <td className="py-3 px-4 text-left">Tăng bid 30% hoặc giảm giá $1</td>
          </tr>
          <tr>
            <td className="py-3 px-4 font-bold text-left">3. Giá mỗi click</td>
            <td className="py-3 px-4 text-emerald-700 font-bold">&lt;$0.8</td>
            <td className="py-3 px-4 text-red-700 font-bold">&gt;$1.5</td>
            <td className="py-3 px-4 text-left">CTR thấp + Giá cao. Sửa mục 1+2</td>
          </tr>
          <tr className="bg-slate-50">
            <td className="py-3 px-4 font-bold text-left">4. ROAS</td>
            <td className="py-3 px-4 text-emerald-700 font-bold">&gt;400%</td>
            <td className="py-3 px-4 text-red-700 font-bold">&lt;200%</td>
            <td className="py-3 px-4 text-left">Loại trừ SP lỗ, đẩy ngân sách vào SP lãi</td>
          </tr>
        </tbody>
      </table>
    </div>
    <p className="text-sm text-slate-600 bg-slate-50 p-3 rounded-lg border border-slate-200">
      <strong>Quy tắc 80/20:</strong> 20% SKU ra 80% doanh thu. Sau 30 ngày: Lọc SP ROAS &lt;150% → Loại khỏi camp hoặc giảm bid 50%.
    </p>

    <div className="bg-slate-800 text-white p-4 rounded-xl mt-6 text-sm">
      <p className="font-bold text-yellow-300 m-0 mb-1">Công thức Shopping thắng:</p>
      <p className="m-0 font-mono text-emerald-300">CTR 2% + CVR 3% + Giá $50 = CPC $0.6 → CPA $20</p>
      <p className="m-0 mt-2 text-slate-300">Quy tắc 1 giây: Khách nhìn ảnh + giá + title trong 1s quyết định click. 3 thứ này phải win trong 1s.</p>
    </div>

    <InteractiveChecklist
      id="chk41"
      title="Checklist Bài 41 – Tối ưu Shopping"
      tasks={[
        "Sửa Title 1 SP bán chạy nhất theo công thức: Brand + Dòng SP + Thuộc tính trong 35 ký tự đầu. So CTR trước vs sau 7 ngày.",
        "Chụp lại ảnh chính: 1500×1500px, nền trắng 100% (dùng PhotoRoom). Không text, không watermark, SP chiếm 75–90% khung.",
        "Kiểm tra giá: Vào Google Shopping search tên SP → So 5 shop đầu. Điều chỉnh giá hoặc thêm Free Ship để cạnh tranh.",
        "Vào GMC → Tăng trưởng → Cơ hội: Xem Google gợi ý cải thiện ảnh, GTIN nào. Sửa theo gợi ý đó.",
        "Gắn custom_label_0 cho top 20% SKU lãi cao nhất (margin_high). Tạo nhóm SP riêng trong camp bid cao hơn 30%."
      ]}
    />
  </div>
);

// ─── LESSON 42 ─────────────────────────────────────────────────────────────────
export const Lesson42Content = () => (
  <div className="prose prose-blue max-w-none text-gray-800">
    <div className="bg-indigo-50 border-l-4 border-indigo-500 p-4 mb-6 rounded-r-lg flex items-start gap-3">
      <BarChart2 className="text-indigo-500 mt-0.5 shrink-0" size={24} />
      <p className="m-0 text-sm text-indigo-800 font-medium">
        <strong>Vấn đề PMax:</strong> 1 camp chạy Search + YouTube + GDN + Gmail + Maps nhưng Google giấu từ khóa, giấu vị trí đặt.
        Không đọc báo cáo = Mù, không biết tiền đốt kênh nào.<br />
        <strong>Mục tiêu bài này:</strong> Mở 5 báo cáo, biết 80% tiền PMax đi đâu, kênh nào lãi, asset nào win.
      </p>
    </div>

    <h3 className="text-2xl font-bold text-gray-900 border-b pb-2">1. PMax khác Search – Không có từ khóa, đọc gì?</h3>

    <div className="overflow-x-auto my-4">
      <table className="min-w-full bg-white border border-gray-200 text-sm rounded-lg overflow-hidden shadow-sm">
        <thead className="bg-slate-800 text-white">
          <tr>
            <th className="py-3 px-4 text-left font-bold">Search có</th>
            <th className="py-3 px-4 text-center font-bold">PMax không có</th>
            <th className="py-3 px-4 text-left font-bold text-emerald-300">PMax có thay thế</th>
          </tr>
        </thead>
        <tbody className="divide-y divide-gray-200 text-sm">
          <tr>
            <td className="py-3 px-4">Từ khóa, cụm từ tìm kiếm</td>
            <td className="py-3 px-4 text-center text-red-500 font-bold">❌</td>
            <td className="py-3 px-4 text-emerald-700 font-medium">Thông tin chi tiết tìm kiếm + Chủ đề tìm kiếm</td>
          </tr>
          <tr className="bg-slate-50">
            <td className="py-3 px-4">Vị trí đặt GDN/YouTube</td>
            <td className="py-3 px-4 text-center text-red-500 font-bold">❌</td>
            <td className="py-3 px-4 text-emerald-700 font-medium">Thông tin chi tiết vị trí + Danh mục video</td>
          </tr>
          <tr>
            <td className="py-3 px-4">Giờ, thiết bị, địa lý chi tiết</td>
            <td className="py-3 px-4 text-center text-emerald-500 font-bold">✅</td>
            <td className="py-3 px-4">Vẫn có, xem như Search bình thường</td>
          </tr>
          <tr className="bg-slate-50">
            <td className="py-3 px-4">Asset nào chạy kênh nào</td>
            <td className="py-3 px-4 text-center text-red-500 font-bold">❌</td>
            <td className="py-3 px-4 text-emerald-700 font-medium">Báo cáo tổ hợp asset + Báo cáo kênh</td>
          </tr>
        </tbody>
      </table>
    </div>
    <p className="text-sm font-bold text-indigo-800 bg-indigo-50 p-3 rounded-lg border border-indigo-200">
      Chốt: PMax không cho data thô. Cho data "Insight" đã xử lý. Đọc Insight đúng cách là ra tiền.
    </p>

    <h3 className="text-2xl font-bold text-gray-900 mt-10 border-b pb-2">2. 5 báo cáo bắt buộc mở mỗi tuần</h3>
    <p className="text-sm text-slate-500 italic">Đường dẫn chung: Chiến dịch → Chọn camp PMax → Thông tin chi tiết</p>

    {/* Report 1 */}
    <div className="border border-blue-200 rounded-xl p-5 my-4 bg-white shadow-sm">
      <div className="flex items-center gap-2 mb-3">
        <Search size={20} className="text-blue-600" />
        <h4 className="font-bold text-blue-800 m-0 text-base">Báo cáo 1: Thông tin chi tiết tìm kiếm (Search Terms Insight)</h4>
      </div>
      <p className="text-sm text-slate-600 m-0 mb-3">Cho biết khách search từ gì thì PMax hiện ads. <strong>Đường dẫn:</strong> Thông tin chi tiết → Cụm từ tìm kiếm</p>
      <div className="overflow-x-auto">
        <table className="min-w-full bg-slate-50 border border-slate-200 text-xs rounded-lg overflow-hidden">
          <thead className="bg-blue-700 text-white">
            <tr>
              <th className="py-2 px-3 text-left">Cột quan trọng</th>
              <th className="py-2 px-3 text-left">Ý nghĩa cho tiệm nail</th>
              <th className="py-2 px-3 text-left">Hành động</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-slate-200">
            <tr>
              <td className="py-2 px-3 font-bold">Danh mục tìm kiếm</td>
              <td className="py-2 px-3">Google gom nhóm: <code>nail salon services</code>, <code>acrylic nails</code>, <code>gel x</code></td>
              <td className="py-2 px-3">Thấy <code>nail supplies wholesale</code> nhiều mà bạn bán dịch vụ → Tạo Signal loại trừ</td>
            </tr>
            <tr className="bg-white">
              <td className="py-2 px-3 font-bold">Lượt chuyển đổi</td>
              <td className="py-2 px-3">Cụm nào ra booking</td>
              <td className="py-2 px-3">Top 10 cụm ra booking → Đắp vào Search camp, Custom Segment</td>
            </tr>
            <tr>
              <td className="py-2 px-3 font-bold">Chỉ số hiệu suất</td>
              <td className="py-2 px-3">Thanh xanh = Cao hơn trung bình tài khoản</td>
              <td className="py-2 px-3">Xanh nhiều = PMax đúng tệp. Đỏ nhiều = Signal sai, cần điều chỉnh</td>
            </tr>
          </tbody>
        </table>
      </div>
      <div className="mt-3 bg-blue-50 p-3 rounded-lg text-xs text-blue-800">
        <strong>Mẹo:</strong> Nếu 50% conv từ <code>nail salon near me</code> → PMax đang cướp Search. Thêm Brand Exclusion + Từ khóa phủ định <code>near me</code> cấp tài khoản nếu muốn PMax chỉ chạy YouTube/GDN.
      </div>
    </div>

    {/* Report 2 */}
    <div className="border border-purple-200 rounded-xl p-5 my-4 bg-white shadow-sm">
      <div className="flex items-center gap-2 mb-3">
        <Target size={20} className="text-purple-600" />
        <h4 className="font-bold text-purple-800 m-0 text-base">Báo cáo 2: Thông tin chi tiết đối tượng (Audience Insight)</h4>
      </div>
      <p className="text-sm text-slate-600 m-0 mb-3">Cho biết PMax đang hiện cho ai. <strong>Đường dẫn:</strong> Thông tin chi tiết → Đối tượng</p>
      <div className="overflow-x-auto">
        <table className="min-w-full bg-slate-50 border border-slate-200 text-xs rounded-lg overflow-hidden">
          <thead className="bg-purple-700 text-white">
            <tr>
              <th className="py-2 px-3 text-left">Tab</th>
              <th className="py-2 px-3 text-left">Xem gì</th>
              <th className="py-2 px-3 text-left">Tối ưu sao</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-slate-200">
            <tr>
              <td className="py-2 px-3 font-bold">Phân khúc của bạn</td>
              <td className="py-2 px-3">Remarketing, List khách cũ ra bao nhiêu % conv</td>
              <td className="py-2 px-3">Nếu &lt;20% → List nhỏ. Upload thêm SĐT khách cũ</td>
            </tr>
            <tr className="bg-white">
              <td className="py-2 px-3 font-bold">Phân khúc do Google tạo</td>
              <td className="py-2 px-3">In-market "Beauty", Affinity "Beauty Mavens"</td>
              <td className="py-2 px-3">Thấy "In-market Business Services" nhiều mà bán nail → Signal sai, thêm Negative</td>
            </tr>
            <tr>
              <td className="py-2 px-3 font-bold">Chỉ mục mối quan hệ</td>
              <td className="py-2 px-3">&gt;1 = Tệp này convert tốt hơn trung bình</td>
              <td className="py-2 px-3">Chỉ mục 3x ở "In-market Beauty" → Tăng tiền. &lt;0.5x thì loại</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>

    {/* Report 3 */}
    <div className="border border-emerald-200 rounded-xl p-5 my-4 bg-white shadow-sm">
      <div className="flex items-center gap-2 mb-3">
        <BarChart2 size={20} className="text-emerald-600" />
        <h4 className="font-bold text-emerald-800 m-0 text-base">Báo cáo 3: Thông tin chi tiết kênh (Channel Performance)</h4>
      </div>
      <p className="text-sm text-slate-600 m-0 mb-3">Cho biết tiền đổ vào Search, YouTube, Display, Gmail bao nhiêu %. <strong>Đường dẫn:</strong> Kênh</p>
      <VisualizerPMaxChannels />
      <div className="mt-2 bg-emerald-50 p-3 rounded-lg text-xs text-emerald-800">
        <strong>Hành động:</strong> Nếu 70% tiền vào Display mà CPA cao → Vào Asset Group → Xóa 5 ảnh xấu nhất. Bắt Google phân bổ tiền sang Search/YouTube.
      </div>
    </div>

    {/* Report 4 */}
    <div className="border border-orange-200 rounded-xl p-5 my-4 bg-white shadow-sm">
      <div className="flex items-center gap-2 mb-3">
        <Layers size={20} className="text-orange-600" />
        <h4 className="font-bold text-orange-800 m-0 text-base">Báo cáo 4: Tổ hợp Asset (Asset Audience Combination)</h4>
      </div>
      <p className="text-sm text-slate-600 m-0 mb-3">Cho biết Ảnh + Tiêu đề + Video nào ghép lại ra nhiều conv nhất. <strong>Đường dẫn:</strong> Asset Group → Xem chi tiết → Tổ hợp</p>
      <div className="overflow-x-auto">
        <table className="min-w-full bg-slate-50 border border-slate-200 text-xs rounded-lg overflow-hidden">
          <thead className="bg-orange-600 text-white">
            <tr>
              <th className="py-2 px-3 text-left">Xếp hạng</th>
              <th className="py-2 px-3 text-left">Tổ hợp win ví dụ</th>
              <th className="py-2 px-3 text-left">Ý nghĩa</th>
              <th className="py-2 px-3 text-left">Hành động</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-slate-200">
            <tr className="bg-emerald-50">
              <td className="py-2 px-3 font-bold text-emerald-700">Tốt ✓</td>
              <td className="py-2 px-3">Ảnh móng đỏ + Title "Acrylic $45" + Video 15s</td>
              <td className="py-2 px-3">CTR 3%, Conv chiếm 60%</td>
              <td className="py-2 px-3 font-medium">Nhân bản: Làm thêm 3 ảnh style móng đỏ tương tự</td>
            </tr>
            <tr className="bg-red-50">
              <td className="py-2 px-3 font-bold text-red-700">Thấp ✗</td>
              <td className="py-2 px-3">Logo + Title "Welcome" + Không video</td>
              <td className="py-2 px-3">CTR 0.2%, kéo CPA lên cao</td>
              <td className="py-2 px-3 font-medium">Xóa asset Logo khỏi AG, hoặc tách vào AG Brand riêng</td>
            </tr>
          </tbody>
        </table>
      </div>
      <p className="text-xs text-orange-700 mt-2 m-0 font-medium">Quy tắc: 2 tuần/lần xóa 20% asset "Thấp". Thêm asset mới giống "Tốt". PMax tự học lại, CTR x2.</p>
    </div>

    {/* Report 5 */}
    <div className="border border-red-200 rounded-xl p-5 my-4 bg-white shadow-sm">
      <div className="flex items-center gap-2 mb-3">
        <Eye size={20} className="text-red-600" />
        <h4 className="font-bold text-red-800 m-0 text-base">Báo cáo 5: Trang đích (Landing Page)</h4>
      </div>
      <p className="text-sm text-slate-600 m-0 mb-2">Cho biết PMax tự đưa khách vào trang nào. <strong>Đường dẫn:</strong> Thông tin chi tiết → Trang đích</p>
      <div className="bg-red-50 border border-red-200 p-3 rounded-lg text-xs text-red-800">
        <strong>Lỗi chết người:</strong> Bật "Mở rộng URL cuối cùng" → PMax đưa khách vào trang Blog, About Us, Policy. CVR = 0%.
        <br /><strong>Fix:</strong> Cài đặt camp → Mở rộng URL cuối cùng → <strong>TẮT</strong>. Hoặc Loại trừ URL: Nhập <code>/blog</code>, <code>/policy</code>.
      </div>
      <p className="text-xs text-slate-600 mt-2 m-0">Xem cột "Tỷ lệ chuyển đổi": Trang <code>/acrylic</code> CVR 8%, trang <code>/</code> CVR 2% → Thêm Signal trang đích: Asset Group → Tín hiệu → URL trang → Nhập <code>/acrylic</code>.</p>
    </div>

    <h3 className="text-2xl font-bold text-gray-900 mt-10 border-b pb-2">3. Bảng giải mã: Nhìn 5 chỉ số biết tiền đi đâu</h3>
    <div className="overflow-x-auto my-4">
      <table className="min-w-full bg-white border border-gray-200 text-sm rounded-lg overflow-hidden shadow-sm">
        <thead className="bg-indigo-700 text-white">
          <tr>
            <th className="py-3 px-3 text-left font-bold">Chỉ số</th>
            <th className="py-3 px-3 text-left font-bold">Xem ở đâu</th>
            <th className="py-3 px-3 text-center font-bold text-emerald-300">Tốt</th>
            <th className="py-3 px-3 text-center font-bold text-red-300">Xấu = Đang lệch</th>
            <th className="py-3 px-3 text-left font-bold">Sửa 5 phút</th>
          </tr>
        </thead>
        <tbody className="divide-y divide-gray-200 text-xs">
          <tr>
            <td className="py-3 px-3 font-bold">1. % Search</td>
            <td className="py-3 px-3">Tab Kênh</td>
            <td className="py-3 px-3 text-center text-emerald-700 font-bold">&gt;40%</td>
            <td className="py-3 px-3 text-center text-red-700 font-bold">&lt;15%</td>
            <td className="py-3 px-3">Thêm 5 tiêu đề chứa từ khóa + giá</td>
          </tr>
          <tr className="bg-slate-50">
            <td className="py-3 px-3 font-bold">2. View-through Conv (VTC)</td>
            <td className="py-3 px-3">Cột VTC</td>
            <td className="py-3 px-3 text-center text-emerald-700 font-bold">50–70% tổng conv</td>
            <td className="py-3 px-3 text-center text-red-700 font-bold">&lt;20%</td>
            <td className="py-3 px-3">Video 5s đầu không có brand, làm lại hook</td>
          </tr>
          <tr>
            <td className="py-3 px-3 font-bold">3. Top danh mục tìm kiếm</td>
            <td className="py-3 px-3">Cụm từ tìm kiếm</td>
            <td className="py-3 px-3 text-center text-emerald-700 font-bold"><code>nail salon</code>, <code>acrylic nails</code></td>
            <td className="py-3 px-3 text-center text-red-700 font-bold"><code>nail art tutorial kids</code></td>
            <td className="py-3 px-3">Phủ định <code>kids</code>, <code>diy</code> cấp tài khoản</td>
          </tr>
          <tr className="bg-slate-50">
            <td className="py-3 px-3 font-bold">4. Top đối tượng</td>
            <td className="py-3 px-3">Tab Đối tượng</td>
            <td className="py-3 px-3 text-center text-emerald-700 font-bold">Your data, Custom Intent 77084</td>
            <td className="py-3 px-3 text-center text-red-700 font-bold">Affinity Entertainment</td>
            <td className="py-3 px-3">Xóa Signal rộng, upload List 1,000 SĐT khách cũ</td>
          </tr>
          <tr>
            <td className="py-3 px-3 font-bold">5. Tổ hợp tốt</td>
            <td className="py-3 px-3">Tab Tổ hợp</td>
            <td className="py-3 px-3 text-center text-emerald-700 font-bold">Ảnh móng + Giá + 77084</td>
            <td className="py-3 px-3 text-center text-red-700 font-bold">Logo + "Welcome"</td>
            <td className="py-3 px-3">Xóa asset "Thấp", thêm ảnh mới giống "Tốt"</td>
          </tr>
        </tbody>
      </table>
    </div>

    <h3 className="text-2xl font-bold text-gray-900 mt-10 border-b pb-2">4. 3 kịch bản đọc báo cáo thực tế</h3>
    <div className="space-y-4 my-4">
      <div className="border border-red-200 rounded-xl p-4 bg-red-50">
        <h4 className="font-bold text-red-800 m-0 mb-2 text-sm">Kịch bản 1: CPA $80, cao quá</h4>
        <div className="text-xs text-red-900 space-y-1">
          <p className="m-0">→ Mở Kênh: Thấy 80% tiền vào Display, 5% Search.</p>
          <p className="m-0">→ Mở Tổ hợp: Ảnh lifestyle CTR 0.2%.</p>
          <p className="m-0 font-bold">Kết luận: AI không có asset để win Search/YouTube, spam Display.</p>
          <p className="m-0 text-emerald-800">Fix: Thêm 5 tiêu đề có "Acrylic $45 77084", 1 video 15s. Xóa ảnh lifestyle.</p>
        </div>
      </div>
      <div className="border border-orange-200 rounded-xl p-4 bg-orange-50">
        <h4 className="font-bold text-orange-800 m-0 mb-2 text-sm">Kịch bản 2: 0 conv từ PMax, Search vẫn ra đơn</h4>
        <div className="text-xs text-orange-900 space-y-1">
          <p className="m-0">→ Mở Cụm từ tìm kiếm: 90% là tên tiệm bạn.</p>
          <p className="m-0 font-bold">Kết luận: PMax đang cướp Brand Search của camp Search.</p>
          <p className="m-0 text-emerald-800">Fix: Cài đặt → Loại trừ thương hiệu → Nhập tên tiệm. 7 ngày sau PMax mới kiếm khách mới.</p>
        </div>
      </div>
      <div className="border border-blue-200 rounded-xl p-4 bg-blue-50">
        <h4 className="font-bold text-blue-800 m-0 mb-2 text-sm">Kịch bản 3: PMax ra lead nhưng toàn khách xa 20 miles</h4>
        <div className="text-xs text-blue-900 space-y-1">
          <p className="m-0">→ Mở Thông tin chi tiết → Địa lý: Houston, Katy, Sugar Land chiếm 60%.</p>
          <p className="m-0 font-bold">Kết luận: Chưa chặn bán kính địa lý đúng cách.</p>
          <p className="m-0 text-emerald-800">Fix: Cài đặt → Vị trí → Bán kính 5 miles từ 77084. Chọn "Hiện diện" thôi, bỏ "Quan tâm".</p>
        </div>
      </div>
    </div>

    <div className="bg-slate-800 text-white p-4 rounded-xl mt-6 text-sm">
      <p className="font-bold text-yellow-300 m-0 mb-1">Công thức đọc PMax:</p>
      <p className="m-0 font-mono text-emerald-300">Kênh + Cụm từ + Đối tượng + Tổ hợp + Trang đích = Biết 90% Google làm gì</p>
      <p className="m-0 mt-2 text-slate-300">PMax 14 ngày đầu không đụng. Ngày 15 mở 5 báo cáo. Đỏ chỗ nào sửa chỗ đó. 15 phút/tuần là đủ.</p>
    </div>

    <div className="bg-indigo-50 border border-indigo-200 p-4 rounded-lg mt-4">
      <p className="text-sm text-indigo-800 m-0">
        <strong>Mẹo cuối:</strong> Vào Thông tin chi tiết → Thông tin chi tiết về phiên đấu giá → Xem bạn thua ai.
        Nếu thua toàn <code>booksy.com</code> → Vào Signal thêm URL booksy làm Custom Intent để học từ đối thủ đó.
      </p>
    </div>

    <InteractiveChecklist
      id="chk42"
      title="Checklist Bài 42 – Review PMax 15 phút/tuần"
      tasks={[
        "Mở báo cáo Kênh: Search >40%? Nếu không, thêm 5 tiêu đề chứa từ khóa + feed giá dịch vụ.",
        "Mở Cụm từ tìm kiếm: Top 10 có 'near me', 'acrylic' không? Có 'jobs', 'diy', 'tutorial' thì phủ định ngay cấp tài khoản.",
        "Mở Đối tượng: 'Your data' (khách cũ) chiếm >30% conv? Nếu <10% thì upload thêm SĐT/email khách cũ.",
        "Mở Tổ hợp asset: Xóa 3 tổ hợp 'Thấp'. Thêm 2 ảnh mới giống phong cách tổ hợp 'Tốt'.",
        "Kiểm tra Trang đích: Tắt Mở rộng URL cuối cùng. Loại trừ /blog, /policy. CVR trang nào <2% thì loại trừ.",
        "Kiểm tra Brand Exclusion: Đã loại tên tiệm chưa? Nếu chưa PMax đang ăn conv Brand Search của bạn."
      ]}
    />
  </div>
);
