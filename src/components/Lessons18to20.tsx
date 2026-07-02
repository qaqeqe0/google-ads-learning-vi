import React from 'react';
import { FileText, Zap, CheckCircle2, AlertTriangle, Star, Phone, MapPin, Image, DollarSign, Layout } from 'lucide-react';
import { InteractiveChecklist } from './InteractiveChecklist';

// ─── Visualizer: RSA 5-Group Structure ───────────────────────────────────────
const VisualizerRSAGroups = () => (
  <div className="my-6 p-5 bg-slate-50 border border-slate-200 rounded-xl">
    <h4 className="font-bold text-slate-700 text-center mb-4 text-base">Cấu trúc 15 Tiêu đề RSA – 5 Nhóm bất bại</h4>
    <div className="grid grid-cols-1 sm:grid-cols-5 gap-2 text-xs text-center">
      {[
        { label: 'Nhóm 1', title: 'Từ khóa chính', count: '3 TĐ', color: 'bg-blue-100 border-blue-300 text-blue-800', ex: 'Acrylic Nails 77084' },
        { label: 'Nhóm 2', title: 'Lợi ích / USP', count: '4 TĐ', color: 'bg-emerald-100 border-emerald-300 text-emerald-800', ex: 'Walk-ins Welcome Daily' },
        { label: 'Nhóm 3', title: 'Ưu đãi / Giá', count: '3 TĐ', color: 'bg-orange-100 border-orange-300 text-orange-800', ex: 'Acrylic Full Set $45' },
        { label: 'Nhóm 4', title: 'Call to Action', count: '3 TĐ', color: 'bg-purple-100 border-purple-300 text-purple-800', ex: 'Book Online 24/7' },
        { label: 'Nhóm 5', title: 'Niềm tin', count: '2 TĐ', color: 'bg-yellow-100 border-yellow-300 text-yellow-800', ex: 'Rated 4.9★ On Google' },
      ].map((g) => (
        <div key={g.label} className={`border rounded-lg p-3 ${g.color}`}>
          <div className="font-bold text-[10px] uppercase tracking-wide mb-1">{g.label}</div>
          <div className="font-semibold text-sm mb-1">{g.title}</div>
          <div className="font-bold text-lg mb-2">{g.count}</div>
          <div className="bg-white/60 rounded px-2 py-1 text-[10px] font-mono">{g.ex}</div>
        </div>
      ))}
    </div>
    <div className="text-center mt-3 text-xs text-slate-500">→ Google AI trộn thành hàng nghìn biến thể → Test cái nào CTR cao nhất → Hiển thị nhiều hơn</div>
  </div>
);

// ─── Visualizer: Ad Strength Meter ───────────────────────────────────────────
const VisualizerAdStrength = () => (
  <div className="my-4 flex items-center gap-3 p-4 bg-white border border-slate-200 rounded-xl shadow-sm flex-wrap">
    <span className="text-sm font-semibold text-slate-600 shrink-0">Ad Strength:</span>
    {[
      { label: 'Poor', color: 'bg-red-500', w: 'w-16' },
      { label: 'Average', color: 'bg-orange-400', w: 'w-24' },
      { label: 'Good', color: 'bg-blue-500', w: 'w-28' },
      { label: 'Excellent ✓', color: 'bg-emerald-500', w: 'w-36' },
    ].map((s) => (
      <div key={s.label} className="flex flex-col items-center gap-1">
        <div className={`h-3 rounded-full ${s.color} ${s.w}`} />
        <span className={`text-[11px] font-medium ${s.label.includes('Excellent') ? 'text-emerald-600 font-bold' : 'text-slate-500'}`}>{s.label}</span>
      </div>
    ))}
    <span className="text-xs text-slate-500 ml-auto italic">Phải đạt "Good" hoặc "Excellent" mới chạy tốt</span>
  </div>
);

// ─── Visualizer: Extensions Diagram ──────────────────────────────────────────
const VisualizerExtensions = () => (
  <div className="my-6 border border-slate-200 rounded-xl overflow-hidden shadow-sm">
    <div className="bg-slate-800 text-white text-xs font-mono px-4 py-2">Google Search – Ads với đầy đủ 8 tiện ích</div>
    <div className="bg-white p-4 space-y-2 text-sm">
      {/* Ad title line */}
      <div className="text-blue-700 font-semibold text-base">Acrylic Nails 77084 – Full Set from $45 | Luxury Nails</div>
      <div className="text-green-700 text-xs">✓ luxurynails.com/acrylic</div>
      {/* Description */}
      <div className="text-slate-700 text-xs">Premium acrylic nails by licensed techs in Dallas 77084. 4.9★ 500+ reviews. Walk-ins welcome.</div>
      {/* Sitelinks */}
      <div className="flex flex-wrap gap-2 mt-1">
        {['Book Appointment', 'Price List', 'Our Designs', '5-Star Reviews'].map((s) => (
          <span key={s} className="text-blue-600 text-xs border-b border-blue-400 cursor-pointer">{s}</span>
        ))}
        <span className="text-xs text-slate-400 ml-1">← Sitelink +25% CTR</span>
      </div>
      {/* Callouts */}
      <div className="flex flex-wrap gap-2 text-xs text-slate-600">
        {['Walk-ins Welcome', 'Sterilized Tools', 'Free Parking', 'Open 7 Days'].map((c) => (
          <span key={c} className="bg-slate-100 px-2 py-0.5 rounded">{c}</span>
        ))}
        <span className="text-slate-400 italic">← Callout +15% Ad Rank</span>
      </div>
      {/* Call + Location */}
      <div className="flex flex-wrap gap-4 text-xs">
        <span className="text-blue-700 font-medium">📞 (713) xxx-xxxx <span className="text-slate-400 font-normal">← Call +40% mobile CTR</span></span>
        <span className="text-blue-700 font-medium">📍 0.8 miles away · Open until 7PM <span className="text-slate-400 font-normal">← Location</span></span>
      </div>
    </div>
  </div>
);

// ─── Visualizer: Landing Page Above the Fold ─────────────────────────────────
const VisualizerLandingPage = () => (
  <div className="my-6 border-2 border-slate-300 rounded-xl overflow-hidden shadow-md max-w-sm mx-auto">
    <div className="bg-slate-700 text-white text-[10px] px-3 py-1 flex items-center gap-2">
      <span className="w-2 h-2 rounded-full bg-red-400 inline-block" />
      <span className="w-2 h-2 rounded-full bg-yellow-400 inline-block" />
      <span className="w-2 h-2 rounded-full bg-green-400 inline-block" />
      <span className="ml-2 font-mono opacity-70">luxurynails.com/acrylic</span>
    </div>
    {/* Header */}
    <div className="bg-white border-b flex items-center justify-between px-3 py-2">
      <span className="text-sm font-bold text-slate-800">💅 Luxury Nails</span>
      <div className="flex gap-2">
        <span className="bg-rose-600 text-white text-[10px] font-bold px-2 py-1 rounded cursor-pointer">Book Now</span>
        <span className="text-blue-600 text-[10px] font-medium">📞 Call</span>
      </div>
    </div>
    {/* Hero */}
    <div className="bg-gradient-to-br from-pink-50 to-white px-4 py-5 text-center space-y-2">
      <div className="text-lg font-extrabold text-slate-900 leading-tight">Acrylic Nails in 77084<br/><span className="text-rose-600">Long-Lasting, No Lifting</span></div>
      <div className="text-xs text-emerald-700 font-semibold bg-emerald-50 border border-emerald-200 rounded px-2 py-1">🎁 New Client: $5 Off Full Set + Free Gel Top Coat</div>
      <div className="text-yellow-600 text-xs font-medium">★★★★★ 4.9/5 · 1,287 Google Reviews</div>
      <div className="w-full h-20 bg-gradient-to-br from-pink-200 to-rose-100 rounded-lg flex items-center justify-center text-slate-400 text-xs">[Ảnh Acrylic đẹp nhất tiệm]</div>
      <button className="w-full bg-rose-600 text-white font-bold py-2 rounded-lg text-sm">💅 Book Acrylic Appointment</button>
      <button className="w-full bg-white border border-rose-300 text-rose-600 font-medium py-1.5 rounded-lg text-xs">📞 Call Now – Walk-ins Welcome</button>
      <div className="flex justify-around text-[10px] text-slate-600 pt-1">
        <span>✓ 10+ Yrs</span><span>✓ Sterilized</span><span>✓ 7-Day Fix</span>
      </div>
    </div>
    <div className="bg-slate-100 text-center text-[9px] text-slate-400 py-1">← 3 inch đầu: khách thấy đủ H1 + Giá + CTA + Trust</div>
  </div>
);

// ─── Bài 18 ───────────────────────────────────────────────────────────────────
export const Lesson18Content = () => (
  <div className="prose prose-blue max-w-none text-gray-800">
    <div className="bg-blue-50 border-l-4 border-blue-500 p-4 mb-6 rounded-r-lg flex items-start gap-3">
      <FileText className="text-blue-500 mt-0.5 shrink-0" size={24} />
      <p className="m-0 text-sm text-blue-800 font-medium">
        🎯 <strong>RSA = Responsive Search Ads:</strong> Bạn nhập 15 tiêu đề + 4 mô tả. Google AI tự trộn thành hàng nghìn biến thể, test thằng nào CTR cao thì hiển thị nhiều. Viết dở = Google có test 1000 lần vẫn CTR 2%.
      </p>
    </div>

    <h3 className="text-2xl font-bold text-gray-900 border-b pb-2">1. Luật Google 2026 về RSA – Vi phạm là ads không chạy</h3>

    <div className="overflow-x-auto my-6">
      <table className="min-w-full bg-white border border-gray-200 text-sm rounded-lg overflow-hidden shadow-sm">
        <thead className="bg-slate-800 text-white">
          <tr>
            <th className="py-3 px-4 text-left font-bold">Luật</th>
            <th className="py-3 px-4 text-left font-bold">Quy định</th>
            <th className="py-3 px-4 text-left font-bold text-red-300">Ví dụ SAI</th>
            <th className="py-3 px-4 text-left font-bold text-emerald-300">Ví dụ ĐÚNG</th>
          </tr>
        </thead>
        <tbody className="divide-y divide-gray-200">
          <tr>
            <td className="py-3 px-4 font-bold text-slate-700">1. Độ dài</td>
            <td className="py-3 px-4">Tiêu đề ≤30 ký tự. Mô tả ≤90 ký tự</td>
            <td className="py-3 px-4 text-red-600 font-mono text-xs">Luxury Acrylic Nails In Dallas Texas <span className="font-normal">(36 ký)</span></td>
            <td className="py-3 px-4 text-emerald-700 font-mono text-xs">Luxury Acrylic Nails Dallas <span className="font-normal">(28 ký)</span></td>
          </tr>
          <tr>
            <td className="py-3 px-4 font-bold text-slate-700">2. Dấu chấm than</td>
            <td className="py-3 px-4">Chỉ 1 dấu ! trong toàn ads</td>
            <td className="py-3 px-4 text-red-600 font-mono text-xs">Book Now!!! Free Gift!!!</td>
            <td className="py-3 px-4 text-emerald-700 font-mono text-xs">Book Now. Free Gift Today</td>
          </tr>
          <tr>
            <td className="py-3 px-4 font-bold text-slate-700">3. Không viết HOA hết</td>
            <td className="py-3 px-4">Chỉ hoa chữ cái đầu</td>
            <td className="py-3 px-4 text-red-600 font-mono text-xs">BEST NAIL SALON DALLAS</td>
            <td className="py-3 px-4 text-emerald-700 font-mono text-xs">Best Nail Salon Dallas</td>
          </tr>
          <tr>
            <td className="py-3 px-4 font-bold text-slate-700">4. Phải có từ khóa</td>
            <td className="py-3 px-4">≥1 trong 15 TĐ chứa từ khóa Ad Group</td>
            <td className="py-3 px-4 text-red-600 text-xs">Ad Group "Acrylic" nhưng 15 TĐ không có chữ Acrylic</td>
            <td className="py-3 px-4 text-emerald-700 font-mono text-xs">TĐ1: Acrylic Nails 77084</td>
          </tr>
          <tr>
            <td className="py-3 px-4 font-bold text-slate-700">5. Không trùng lặp</td>
            <td className="py-3 px-4">15 TĐ phải khác ý nhau</td>
            <td className="py-3 px-4 text-red-600 font-mono text-xs">Nail Salon Dallas / Dallas Nail Salon</td>
            <td className="py-3 px-4 text-emerald-700 font-mono text-xs">Nail Salon Dallas / Walk-ins Welcome</td>
          </tr>
        </tbody>
      </table>
    </div>

    <div className="bg-amber-50 border border-amber-200 p-4 rounded-lg mb-6">
      <p className="m-0 text-amber-900 text-sm font-medium">💡 <strong>Mẹo:</strong> Trong lúc viết, Google báo "Ad strength: Poor / Average / Good / Excellent". Phải kéo lên <strong>"Good"</strong> hoặc <strong>"Excellent"</strong> mới chạy hiệu quả.</p>
    </div>

    <VisualizerAdStrength />

    <h3 className="text-2xl font-bold text-gray-900 mt-10 border-b pb-2">2. Công thức 15 tiêu đề bất bại – 5 Nhóm</h3>
    <p className="text-slate-600">Nguyên tắc: <strong>1 Ad Group = 1 dịch vụ = 15 tiêu đề nói về đúng dịch vụ đó.</strong> Đừng nói chung chung.</p>
    <p className="text-slate-500 italic text-sm">Ví dụ minh họa: Ad Group <code>[acrylic nails 77084]</code></p>

    <VisualizerRSAGroups />

    <div className="overflow-x-auto my-6">
      <table className="min-w-full bg-white border border-gray-200 text-sm rounded-lg overflow-hidden shadow-sm">
        <thead className="bg-slate-800 text-white">
          <tr>
            <th className="py-3 px-4 text-left font-bold">Nhóm</th>
            <th className="py-3 px-4 text-left font-bold">Số TĐ</th>
            <th className="py-3 px-4 text-left font-bold">Mục đích</th>
            <th className="py-3 px-4 text-left font-bold">Ví dụ cho Acrylic Nails</th>
          </tr>
        </thead>
        <tbody className="divide-y divide-gray-200 text-xs">
          <tr className="bg-blue-50">
            <td className="py-3 px-4 font-bold text-blue-700">1. Từ khóa chính</td>
            <td className="py-3 px-4 text-center font-bold">3</td>
            <td className="py-3 px-4">Khớp 100% search term → Tăng Điểm CL</td>
            <td className="py-3 px-4 font-mono">Acrylic Nails 77084 · Acrylic Nails Near Me · Best Acrylic Nails Dallas</td>
          </tr>
          <tr className="bg-emerald-50">
            <td className="py-3 px-4 font-bold text-emerald-700">2. Lợi ích / USP</td>
            <td className="py-3 px-4 text-center font-bold">4</td>
            <td className="py-3 px-4">Tại sao chọn bạn mà không phải tiệm kế bên</td>
            <td className="py-3 px-4 font-mono">Walk-ins Welcome Daily · 10+ Years Experienced · 1000+ Designs Available · Sterilized Tools Guaranteed</td>
          </tr>
          <tr className="bg-orange-50">
            <td className="py-3 px-4 font-bold text-orange-700">3. Ưu đãi / Giá</td>
            <td className="py-3 px-4 text-center font-bold">3</td>
            <td className="py-3 px-4">Kích thích bấm ngay. Dùng số cụ thể</td>
            <td className="py-3 px-4 font-mono">New Client $5 Off · Acrylic Full Set $45 · Free Gel Top Coat</td>
          </tr>
          <tr className="bg-purple-50">
            <td className="py-3 px-4 font-bold text-purple-700">4. Call to Action</td>
            <td className="py-3 px-4 text-center font-bold">3</td>
            <td className="py-3 px-4">Bảo khách làm gì tiếp theo</td>
            <td className="py-3 px-4 font-mono">Book Online 24/7 · Call Now For Pricing · Visit Us Today</td>
          </tr>
          <tr className="bg-yellow-50">
            <td className="py-3 px-4 font-bold text-yellow-700">5. Niềm tin</td>
            <td className="py-3 px-4 text-center font-bold">2</td>
            <td className="py-3 px-4">Xóa nỗi sợ, tạo uy tín</td>
            <td className="py-3 px-4 font-mono">Rated 4.9★ On Google · 500+ Happy Clients</td>
          </tr>
        </tbody>
      </table>
    </div>

    <div className="bg-blue-50 border border-blue-200 p-4 rounded-lg my-4">
      <p className="m-0 text-sm text-blue-900 font-medium">✅ <strong>Checklist sau khi viết:</strong> Đếm đủ 15 TĐ · 3 TĐ có chữ "Acrylic" · 3 TĐ có số cụ thể · 3 TĐ có CTA. Thiếu là CTR thấp.</p>
    </div>

    <h3 className="text-2xl font-bold text-gray-900 mt-10 border-b pb-2">3. Công thức 4 mô tả – 90 ký tự kể câu chuyện</h3>
    <p className="text-slate-600 text-sm">Mô tả = Nơi giải thích thêm, chèn lợi ích phụ, ép hành động.</p>

    <div className="overflow-x-auto my-6">
      <table className="min-w-full bg-white border border-gray-200 text-sm rounded-lg overflow-hidden shadow-sm">
        <thead className="bg-slate-800 text-white">
          <tr>
            <th className="py-3 px-4 text-left font-bold">Mô tả</th>
            <th className="py-3 px-4 text-left font-bold">Công thức</th>
            <th className="py-3 px-4 text-left font-bold">Ví dụ cho Acrylic</th>
          </tr>
        </thead>
        <tbody className="divide-y divide-gray-200 text-xs">
          <tr>
            <td className="py-3 px-4 font-bold text-slate-700">Mô tả 1</td>
            <td className="py-3 px-4">Lợi ích chính + Địa chỉ</td>
            <td className="py-3 px-4 font-mono italic">Get long-lasting acrylic nails by licensed techs. Located in 77084 Dallas. Free parking.</td>
          </tr>
          <tr>
            <td className="py-3 px-4 font-bold text-slate-700">Mô tả 2</td>
            <td className="py-3 px-4">Ưu đãi + Giới hạn thời gian</td>
            <td className="py-3 px-4 font-mono italic">New clients get $5 off full set + free gel top coat. Book today, offer ends Sunday.</td>
          </tr>
          <tr>
            <td className="py-3 px-4 font-bold text-slate-700">Mô tả 3</td>
            <td className="py-3 px-4">Niềm tin + Khác biệt</td>
            <td className="py-3 px-4 font-mono italic">We use only premium powders & sterilize tools after each client. 4.9★ from 500+ reviews.</td>
          </tr>
          <tr>
            <td className="py-3 px-4 font-bold text-slate-700">Mô tả 4</td>
            <td className="py-3 px-4">CTA mạnh + SĐT</td>
            <td className="py-3 px-4 font-mono italic">Call 713-xxx-xxxx or book online now. Walk-ins welcome 9am-7pm. See you soon!</td>
          </tr>
        </tbody>
      </table>
    </div>

    <div className="bg-slate-100 border border-slate-200 p-4 rounded-lg mb-6 text-sm">
      <strong>Quy tắc ghim:</strong> Ghim TĐ1 = Từ khóa chính. Ghim TĐ2 hoặc TĐ3 = Tên tiệm. Còn lại để Google tự xoay. <span className="text-red-600 font-medium">Đừng ghim hết 15 TĐ — Google hết chỗ test.</span>
    </div>

    <h3 className="text-2xl font-bold text-gray-900 mt-10 border-b pb-2">4. 3 cấp độ RSA – Từ Newbie đến Pro</h3>

    <div className="grid grid-cols-1 md:grid-cols-3 gap-4 my-6">
      <div className="border border-slate-200 rounded-xl p-4 bg-white shadow-sm">
        <div className="font-bold text-slate-700 mb-2 text-sm flex items-center gap-2">
          <span className="bg-slate-200 text-slate-600 text-xs px-2 py-0.5 rounded-full">Cấp 1</span> An toàn – Tài khoản mới
        </div>
        <p className="text-xs text-slate-600 mb-2">Tập trung từ khóa + lợi ích cơ bản. Không đao to búa lớn.</p>
        <div className="font-mono text-[10px] bg-slate-50 p-2 rounded text-slate-700">Acrylic Nails Dallas · Walk-ins Welcome · Licensed Nail Techs · Book Online Now</div>
        <div className="mt-2 text-xs text-emerald-700 font-medium">→ Mục tiêu: CTR 4-6%, QS 6/10</div>
      </div>
      <div className="border border-blue-200 rounded-xl p-4 bg-blue-50 shadow-sm">
        <div className="font-bold text-blue-700 mb-2 text-sm flex items-center gap-2">
          <span className="bg-blue-200 text-blue-700 text-xs px-2 py-0.5 rounded-full">Cấp 2</span> Tấn công – 30+ conversion
        </div>
        <p className="text-xs text-blue-800 mb-2">Nhồi USP mạnh + khan hiếm + giá.</p>
        <div className="font-mono text-[10px] bg-white/70 p-2 rounded text-blue-900">$45 Acrylic Full Set · 4.9★ Google Reviews · 10 Years Experience · Only 3 Slots Today</div>
        <div className="mt-2 text-xs text-blue-700 font-medium">→ Mục tiêu: CTR 8-12%, QS 9/10</div>
      </div>
      <div className="border border-purple-200 rounded-xl p-4 bg-purple-50 shadow-sm">
        <div className="font-bold text-purple-700 mb-2 text-sm flex items-center gap-2">
          <span className="bg-purple-200 text-purple-700 text-xs px-2 py-0.5 rounded-full">Cấp 3</span> Thống trị – Brand + Remarketing
        </div>
        <p className="text-xs text-purple-800 mb-2">Dùng tên tiệm + remarketing cho khách cũ.</p>
        <div className="font-mono text-[10px] bg-white/70 p-2 rounded text-purple-900">Luxury Nails Official · Welcome Back · Your $10 Off Awaits · See New Fall Designs</div>
        <div className="mt-2 text-xs text-purple-700 font-medium">→ Khách quay lại, CVR rất cao</div>
      </div>
    </div>

    <h3 className="text-2xl font-bold text-gray-900 mt-10 border-b pb-2">5. 7 lỗi viết RSA khiến CTR &lt;3% dù bid cao</h3>

    <div className="overflow-x-auto my-6">
      <table className="min-w-full bg-white border border-gray-200 text-sm rounded-lg overflow-hidden shadow-sm">
        <thead className="bg-red-800 text-white">
          <tr>
            <th className="py-3 px-4 text-left font-bold">Lỗi</th>
            <th className="py-3 px-4 text-left font-bold">Ví dụ sai</th>
            <th className="py-3 px-4 text-left font-bold">Tại sao toang</th>
            <th className="py-3 px-4 text-left font-bold">Sửa thành</th>
          </tr>
        </thead>
        <tbody className="divide-y divide-gray-200 text-xs">
          {[
            ['1. Nhồi từ khóa', '10/15 TĐ đều là "Acrylic Nails Dallas"', 'Google đánh giá "Poor", không hiển thị', 'Chỉ 3 TĐ chứa từ khóa'],
            ['2. Không có số', '"Cheap price", "Good service"', 'Não người thích số cụ thể: $45, 4.9★, 10+ năm', '"Acrylic $45", "Rated 4.9★"'],
            ['3. Chung chung', '"Best Service In Town"', 'Tiệm nào cũng nói vậy, không khác biệt', '"Sterilized Tools For Each Client"'],
            ['4. Không có CTA', 'Chỉ mô tả tiệm đẹp', 'Khách không biết làm gì tiếp theo', '"Book Online Now"'],
            ['5. Quên địa phương', 'Tiệm Dallas nhưng không có chữ Dallas', 'Điểm CL thấp vì không liên quan', '"Acrylic Nails 77084"'],
            ['6. Hứa láo', '"Free Full Set" nhưng vào không có', 'Google ban tài khoản vì sai lệch', '"Free Gel Top Coat With Full Set"'],
            ['7. Viết cho mình đọc', '"We Use OPI & Kiara Sky"', 'Khách không biết OPI là gì', '"Long-Lasting, No Chipping 3 Weeks"'],
          ].map(([loi, sai, tai_sao, sua]) => (
            <tr key={loi}>
              <td className="py-2 px-4 font-bold text-red-700">{loi}</td>
              <td className="py-2 px-4 text-slate-600 font-mono">{sai}</td>
              <td className="py-2 px-4 text-slate-600">{tai_sao}</td>
              <td className="py-2 px-4 text-emerald-700 font-mono">{sua}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>

    <h3 className="text-2xl font-bold text-gray-900 mt-10 border-b pb-2">6. Template Copy-Paste cho 3 Ad Group chính</h3>

    <div className="space-y-4 my-6">
      <div className="bg-slate-800 text-slate-100 rounded-xl p-4 text-xs font-mono leading-relaxed">
        <div className="text-slate-400 mb-2 font-sans font-semibold text-sm not-italic">Ad Group: Acrylic Nails</div>
        <div>TĐ1: Acrylic Nails 77084 | TĐ2: Best Acrylic Nails Near Me | TĐ3: Walk-ins Welcome Daily</div>
        <div>TĐ4: $45 Acrylic Full Set | TĐ5: New Client $5 Off | TĐ6: Free Gel Top Coat</div>
        <div>TĐ7: 10+ Years Experienced | TĐ8: 1000+ Designs Available | TĐ9: Sterilized Tools Only</div>
        <div>TĐ10: Book Online 24/7 | TĐ11: Call 713-xxx-xxxx | TĐ12: Visit Us Today</div>
        <div>TĐ13: Rated 4.9★ Google | TĐ14: 500+ Happy Clients | TĐ15: Free Fix Within 3 Days</div>
        <div className="mt-2 text-slate-300">Mô tả1: Premium acrylic nails by licensed techs in Dallas 77084. Free parking, clean salon.</div>
        <div>Mô tả2: New client special: $5 off + free top coat. Limited slots this week. Book now!</div>
        <div>Mô tả3: 4.9★ rated with 500+ reviews. We sterilize all tools. Your safety is priority.</div>
        <div>Mô tả4: Call now or book online 24/7. Walk-ins welcome 9am-7pm. See you at Luxury Nails!</div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
        <div className="border border-slate-200 rounded-lg p-3 text-sm">
          <div className="font-bold text-slate-700 mb-1">Ad Group: Gel X Nails</div>
          <div className="text-slate-600 text-xs">Thay "Acrylic" → "Gel X", đổi giá → $55, thêm <code>No Damage To Natural Nails</code></div>
        </div>
        <div className="border border-slate-200 rounded-lg p-3 text-sm">
          <div className="font-bold text-slate-700 mb-1">Ad Group: Pedicure</div>
          <div className="text-slate-600 text-xs">Thay lợi ích: <code>Massage Chairs</code> · <code>Hot Stone Pedicure $35</code> · <code>Relax 45 Minutes</code></div>
        </div>
      </div>
    </div>

    <h3 className="text-2xl font-bold text-gray-900 mt-10 border-b pb-2">7. Quy trình test A/B 1 RSA trong 7 ngày</h3>
    <ol className="space-y-3 text-sm">
      <li><strong>Ngày 1:</strong> Viết 1 RSA đủ 15+4, Ad strength đạt "Good".</li>
      <li><strong>Ngày 3:</strong> Vào Ads → Xem "Nội dung" → Xem kết hợp nào CTR cao. Ghim TĐ CTR cao nhất vào vị trí 1.</li>
      <li><strong>Ngày 7:</strong> CTR &lt;4% → Pause, viết RSA mới đổi 5 TĐ nhóm USP. CTR &gt;8% → Nhân bản sang Ad Group khác.</li>
    </ol>

    <div className="bg-emerald-50 border border-emerald-200 p-4 rounded-xl mt-8">
      <p className="m-0 font-bold text-emerald-800">🏆 Chốt Bài 18:</p>
      <p className="m-0 text-emerald-900 text-sm mt-1">RSA hay = CTR cao = Điểm CL cao = CPC rẻ = CPA thấp. Viết 1 lần dùng 6 tháng. Đừng tiếc 30 phút viết cho tử tế.</p>
    </div>

    <InteractiveChecklist
      id="chk18"
      title="Checklist Bài 18"
      tasks={[
        "Viết đủ 15 tiêu đề theo 5 nhóm (3 từ khóa / 4 USP / 3 giá / 3 CTA / 2 trust).",
        "Viết đủ 4 mô tả, mỗi mô tả ≤90 ký tự, đúng công thức.",
        "Ad Strength đạt 'Good' hoặc 'Excellent' trước khi đăng.",
        "Ghim TĐ1 = từ khóa chính, TĐ2 hoặc 3 = tên tiệm, không ghim thêm.",
        "Ngày 7 kiểm tra kết hợp nào CTR cao, cập nhật ghim tương ứng.",
      ]}
    />
  </div>
);

// ─── Bài 19 ───────────────────────────────────────────────────────────────────
export const Lesson19Content = () => (
  <div className="prose prose-blue max-w-none text-gray-800">
    <div className="bg-blue-50 border-l-4 border-blue-500 p-4 mb-6 rounded-r-lg flex items-start gap-3">
      <Zap className="text-blue-500 mt-0.5 shrink-0" size={24} />
      <p className="m-0 text-sm text-blue-800 font-medium">
        🎯 <strong>Tiện ích = Đồ chơi miễn phí Google cho.</strong> Ads không có tiện ích = Nhà mặt tiền nhưng không bật đèn bảng hiệu. Đối thủ full tiện ích thì ads cao gấp 3 lần bạn, khách click họ hết.
      </p>
    </div>

    <div className="bg-amber-50 border border-amber-200 p-4 rounded-lg mb-6">
      <p className="m-0 text-amber-900 font-semibold text-sm">⚡ Quy tắc vàng: Cài đủ 8 loại dưới đây. Thiếu 1 loại là Ad Rank thua đối thủ 10-15 điểm. Google ưu tiên ads "béo" nhiều thông tin.</p>
    </div>

    <VisualizerExtensions />

    <h3 className="text-2xl font-bold text-gray-900 border-b pb-2">1. Bảng 8 tiện ích bắt buộc cho tiệm nail Mỹ 2026</h3>

    <div className="overflow-x-auto my-6">
      <table className="min-w-full bg-white border border-gray-200 text-sm rounded-lg overflow-hidden shadow-sm">
        <thead className="bg-slate-800 text-white">
          <tr>
            <th className="py-3 px-4 text-left font-bold">#</th>
            <th className="py-3 px-4 text-left font-bold">Tiện ích</th>
            <th className="py-3 px-4 text-left font-bold">Hiển thị gì</th>
            <th className="py-3 px-4 text-left font-bold">Tác động</th>
            <th className="py-3 px-4 text-left font-bold">Setup</th>
          </tr>
        </thead>
        <tbody className="divide-y divide-gray-200 text-xs">
          {[
            ['1', 'Sitelink', <><Star size={12} className="inline text-yellow-500 mr-1"/>Liên kết trang web</>, '4-6 link phụ dưới ads: Book Now, Price List, Reviews', <span className="text-blue-700 font-bold">CTR +25%</span>, '5 phút'],
            ['2', 'Call', <><Phone size={12} className="inline text-emerald-500 mr-1"/>Cuộc gọi</>, 'Nút "Gọi" mobile + số hiển thị desktop', <span className="text-emerald-700 font-bold">Mobile CTR +40%</span>, '2 phút'],
            ['3', 'Location', <><MapPin size={12} className="inline text-red-500 mr-1"/>Địa điểm</>, 'Địa chỉ, Map, Khoảng cách, Giờ mở cửa', <span className="text-red-700 font-bold">Local Pack</span>, '10 phút (cần GBP)'],
            ['4', 'Callout', <><CheckCircle2 size={12} className="inline text-slate-500 mr-1"/>Chú thích</>, 'Ý ngắn không click: Walk-ins Welcome', <span className="text-slate-700 font-bold">Ad Rank +15%</span>, '3 phút'],
            ['5', 'Structured Snippet', <><FileText size={12} className="inline text-purple-500 mr-1"/>Đoạn cấu trúc</>, 'Services: Acrylic, Gel X, Dip', <span className="text-purple-700 font-bold">CTR +5%</span>, '2 phút'],
            ['6', 'Lead Form', <><FileText size={12} className="inline text-rose-500 mr-1"/>Biểu mẫu</>, 'Form hiện ngay trên Google, không vào web', <span className="text-rose-700 font-bold">CVR +30%</span>, '5 phút'],
            ['7', 'Image', <><Image size={12} className="inline text-orange-500 mr-1"/>Hình ảnh</>, '3 ảnh vuông bên cạnh ads', <span className="text-orange-700 font-bold">CTR +10%</span>, '3 phút'],
            ['8', 'Price', <><DollarSign size={12} className="inline text-teal-500 mr-1"/>Giá</>, 'Bảng giá: Acrylic $45, Pedi $30', <span className="text-teal-700 font-bold">CVR +20%</span>, '5 phút'],
          ].map(([num, ten, icon, hien, tac_dong, setup]) => (
            <tr key={String(num)}>
              <td className="py-3 px-4 font-bold text-slate-400">{num}</td>
              <td className="py-3 px-4 font-bold text-slate-700">{ten}</td>
              <td className="py-3 px-4 text-slate-600">{hien}</td>
              <td className="py-3 px-4">{tac_dong}</td>
              <td className="py-3 px-4 text-slate-500">{setup}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>

    <h3 className="text-2xl font-bold text-gray-900 mt-10 border-b pb-2">2. Hướng dẫn cài chi tiết 8 loại + Mẫu tiệm nail</h3>
    <p className="text-slate-500 text-sm">Vào: <strong>Google Ads → Chiến dịch → Tài sản → + Tạo tài sản</strong></p>

    <div className="space-y-6 my-6">
      {/* Sitelink */}
      <div className="border border-blue-200 rounded-xl p-5 bg-white shadow-sm">
        <h4 className="font-bold text-blue-800 mt-0 flex items-center gap-2 text-base border-b border-blue-100 pb-2">
          <Star size={18} className="text-yellow-500"/> 1. Sitelink – 4 link bắt buộc phải có
        </h4>
        <p className="text-xs text-slate-600 mb-3">Quy tắc: Link phải trỏ đúng trang. Text &lt;25 ký tự. Mô tả 2 dòng &lt;35 ký tự/dòng.</p>
        <div className="overflow-x-auto">
          <table className="min-w-full text-xs border border-gray-200 rounded-lg overflow-hidden">
            <thead className="bg-slate-100 text-slate-700">
              <tr>
                <th className="py-2 px-3 text-left">Văn bản liên kết</th>
                <th className="py-2 px-3 text-left">URL đích</th>
                <th className="py-2 px-3 text-left">Dòng mô tả 1</th>
                <th className="py-2 px-3 text-left">Dòng mô tả 2</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-100 font-mono">
              {[
                ['Book Appointment', '/booking', 'Book Online 24/7', 'No Wait Time'],
                ['Price List', '/price', 'Acrylic from $45', 'Gel X from $55'],
                ['Our Designs', '/gallery', '500+ Nail Designs', 'Instagram Ready'],
                ['5-Star Reviews', '/reviews', '2,000+ Happy Clients', 'See Real Photos'],
              ].map(([text, url, d1, d2]) => (
                <tr key={text}>
                  <td className="py-2 px-3 font-bold text-blue-700">{text}</td>
                  <td className="py-2 px-3 text-green-700">{url}</td>
                  <td className="py-2 px-3 text-slate-600">{d1}</td>
                  <td className="py-2 px-3 text-slate-600">{d2}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <p className="text-xs text-slate-500 mt-2 italic">Mẹo: Tạo 2 bộ Sitelink. Bộ 1 cho Campaign Acrylic/Gel X. Bộ 2 cho Campaign Pedicure.</p>
      </div>

      {/* Call */}
      <div className="border border-emerald-200 rounded-xl p-5 bg-white shadow-sm">
        <h4 className="font-bold text-emerald-800 mt-0 flex items-center gap-2 text-base border-b border-emerald-100 pb-2">
          <Phone size={18} className="text-emerald-600"/> 2. Call – Số chuyển tiếp của Google
        </h4>
        <ol className="text-xs text-slate-600 space-y-1 list-decimal pl-4 mt-2">
          <li>Chọn Quốc gia: United States → Nhập SĐT tiệm: +1 713-xxx-xxxx</li>
          <li><strong>Bật "Báo cáo cuộc gọi"</strong> = Bắt buộc. Google thay số bằng số tracking. Biết call từ từ khóa nào, dài bao lâu.</li>
          <li><strong>Đếm chuyển đổi:</strong> Cuộc gọi &gt;60 giây = 1 conversion. Vì &lt;60s là hỏi giá rồi cúp.</li>
        </ol>
        <div className="mt-2 bg-emerald-50 rounded p-2 text-xs text-emerald-800">→ Kết quả: Mobile ads hiện nút "Gọi". Khách bấm là gọi, không mất click vào web.</div>
      </div>

      {/* Location */}
      <div className="border border-red-200 rounded-xl p-5 bg-white shadow-sm">
        <h4 className="font-bold text-red-800 mt-0 flex items-center gap-2 text-base border-b border-red-100 pb-2">
          <MapPin size={18} className="text-red-500"/> 3. Location – Phải link Google Business Profile
        </h4>
        <ol className="text-xs text-slate-600 space-y-1 list-decimal pl-4 mt-2">
          <li>Điều kiện: Có GBP đã xác minh, tên + địa chỉ trùng tiệm.</li>
          <li>Vào Tiện ích → Địa điểm → Liên kết GBP → Chọn địa chỉ tiệm.</li>
          <li><strong>Bật "Cuộc gọi" và "Chỉ đường"</strong> trong GBP.</li>
        </ol>
        <div className="mt-2 bg-red-50 rounded p-2 text-xs text-red-800">→ Kết quả: Ads hiện "0.8 miles away · Open until 7PM". Khách thấy gần là click.</div>
      </div>

      {/* Callout */}
      <div className="border border-slate-200 rounded-xl p-5 bg-white shadow-sm">
        <h4 className="font-bold text-slate-700 mt-0 text-base border-b border-slate-100 pb-2">4. Callout – 10 cái dùng xoay vòng</h4>
        <p className="text-xs text-slate-600 mb-2">Google cho hiện 4 cái/lần. Nên tạo 10 cái để xoay. Mỗi cái &lt;25 ký tự.</p>
        <div className="flex flex-wrap gap-2">
          {['Walk-ins Welcome','No Wait Time','10+ Years Experience','Sterilized Tools','Free Parking','Open 7 Days/Week','5-Star Rated Salon','Master Techs Only','Gel X Certified','Complimentary Drinks'].map((c) => (
            <span key={c} className="bg-slate-100 text-slate-700 text-xs px-2 py-1 rounded border border-slate-200 font-mono">{c}</span>
          ))}
        </div>
      </div>

      {/* Structured Snippet */}
      <div className="border border-purple-200 rounded-xl p-5 bg-white shadow-sm">
        <h4 className="font-bold text-purple-800 mt-0 text-base border-b border-purple-100 pb-2">5. Structured Snippet – Header "Services"</h4>
        <div className="text-xs text-slate-600 mt-2">
          <strong>Header:</strong> Services → <strong>Giá trị:</strong>
          <span className="font-mono ml-1">Acrylic, Gel X, Dip Powder, Pedicure, Manicure, Nail Art, Waxing</span>
          <br/>Ngăn cách bằng dấu phẩy. Tối đa 10 giá trị.
        </div>
      </div>

      {/* Lead Form */}
      <div className="border border-rose-200 rounded-xl p-5 bg-white shadow-sm">
        <h4 className="font-bold text-rose-800 mt-0 text-base border-b border-rose-100 pb-2">6. Lead Form – Ra khách không cần web</h4>
        <div className="text-xs text-slate-600 space-y-1 mt-2">
          <div><strong>Tiêu đề:</strong> Book Your Nail Appointment Today</div>
          <div><strong>Mô tả:</strong> Get $5 Off First Visit. We'll Call to Confirm.</div>
          <div><strong>Câu hỏi:</strong> Tên · SĐT · Email · Dịch vụ muốn làm</div>
          <div><strong>Thông báo hoàn thành:</strong> Thank you! We'll call in 15 mins</div>
          <div><strong>Webhook:</strong> Nối vào Google Sheet/Zapier để nhân viên gọi ngay</div>
        </div>
        <div className="mt-2 bg-rose-50 rounded p-2 text-xs text-rose-800">⚠️ Lead Form chỉ hiện trên Mobile. CTR cao nhưng chất lượng lead thấp hơn web 20%. Bù lại số lượng x2.</div>
      </div>

      {/* Image + Price */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div className="border border-orange-200 rounded-xl p-4 bg-white shadow-sm">
          <h4 className="font-bold text-orange-800 mt-0 text-base border-b border-orange-100 pb-2">7. Image – 3 ảnh vuông 1200×1200px</h4>
          <div className="text-xs text-slate-600 space-y-1 mt-2">
            <div className="text-emerald-700">✓ Ảnh mặt tiền tiệm sáng, sạch</div>
            <div className="text-emerald-700">✓ Ảnh Acrylic dài, đính đá rõ nét</div>
            <div className="text-emerald-700">✓ Ảnh khách cười + móng đẹp</div>
            <div className="text-red-600 mt-1">✗ Ảnh stock · Ảnh mờ · Ảnh nhiều chữ</div>
          </div>
          <div className="mt-2 text-xs text-orange-700 bg-orange-50 rounded p-2">Google duyệt 24h. Bị từ chối 90% do có chữ + logo to.</div>
        </div>
        <div className="border border-teal-200 rounded-xl p-4 bg-white shadow-sm">
          <h4 className="font-bold text-teal-800 mt-0 text-base border-b border-teal-100 pb-2">8. Price – Lọc khách hỏi giá từ đầu</h4>
          <div className="text-xs text-slate-600 space-y-1 mt-2 font-mono">
            <div>Acrylic Full Set | $45 | Bền 3 tuần</div>
            <div>Gel X Extension | $55 | Nhẹ, không hại móng</div>
            <div>Spa Pedicure | $35 | Ghế massage</div>
          </div>
          <div className="mt-2 text-xs text-teal-700 bg-teal-50 rounded p-2">Mẹo: Để giá thấp nhất trong range. Acrylic $45-$65 thì để $45. Khách vào rồi upsell sau.</div>
        </div>
      </div>
    </div>

    <h3 className="text-2xl font-bold text-gray-900 mt-10 border-b pb-2">3. Quy tắc cài tiện ích 2026: Cấp nào ăn cấp đó</h3>

    <div className="overflow-x-auto my-6">
      <table className="min-w-full bg-white border border-gray-200 text-sm rounded-lg overflow-hidden shadow-sm">
        <thead className="bg-slate-800 text-white">
          <tr>
            <th className="py-3 px-4 text-left font-bold">Cấp</th>
            <th className="py-3 px-4 text-left font-bold">Ghi đè</th>
            <th className="py-3 px-4 text-left font-bold">Chiến lược</th>
          </tr>
        </thead>
        <tbody className="divide-y divide-gray-200 text-sm">
          <tr>
            <td className="py-3 px-4 font-bold text-slate-600">Tài khoản</td>
            <td className="py-3 px-4 text-slate-500">Yếu nhất</td>
            <td className="py-3 px-4">Sitelink chung: Home, Contact, About</td>
          </tr>
          <tr className="bg-blue-50">
            <td className="py-3 px-4 font-bold text-blue-700">Chiến dịch</td>
            <td className="py-3 px-4 text-blue-600">Đè Tài khoản</td>
            <td className="py-3 px-4">Campaign Acrylic: Sitelink Book Acrylic, Price Acrylic</td>
          </tr>
          <tr className="bg-emerald-50">
            <td className="py-3 px-4 font-bold text-emerald-700">Nhóm quảng cáo</td>
            <td className="py-3 px-4 text-emerald-600 font-bold">Mạnh nhất</td>
            <td className="py-3 px-4">Ad Group "Gel X" có Callout riêng "Gel X Certified"</td>
          </tr>
        </tbody>
      </table>
    </div>

    <h3 className="text-2xl font-bold text-gray-900 mt-10 border-b pb-2">4. 5 lỗi khiến tiện ích không hiện dù đã cài</h3>

    <div className="space-y-3 my-6">
      {[
        ['Ad Rank thấp', 'Bid $1, Điểm CL 3/10 → Google không cho hiện vì không đủ top.', 'Tăng bid hoặc tăng Điểm Chất Lượng'],
        ['Không đủ 2-3 tiện ích', 'Google yêu cầu tối thiểu 2 tiện ích mới hiện. Thiếu thì ads trụi lủi.', 'Cài đủ cả 8 loại'],
        ['Text vi phạm chính sách', '"#1 Nail Salon Dallas" → Bị từ chối do không chứng minh được #1.', 'Đổi thành "Top Rated Salon"'],
        ['Link Sitelink 404', 'Link chết là cả bộ Sitelink tắt.', 'Check link hàng tuần'],
        ['Không link GBP', 'Tiện ích Location không hiện nếu GBP chưa verify. 50% tiệm nail dính lỗi này.', 'Xác minh GBP trước'],
      ].map(([loi, mo_ta, sua]) => (
        <div key={loi} className="flex gap-3 border border-red-100 bg-red-50 rounded-lg p-3">
          <AlertTriangle size={16} className="text-red-500 mt-0.5 shrink-0" />
          <div className="text-xs">
            <span className="font-bold text-red-700">{loi}: </span>
            <span className="text-slate-600">{mo_ta} </span>
            <span className="text-emerald-700 font-medium">→ {sua}</span>
          </div>
        </div>
      ))}
    </div>

    <div className="bg-emerald-50 border border-emerald-200 p-4 rounded-xl mt-8">
      <p className="m-0 font-bold text-emerald-800">🏆 Chốt Bài 19:</p>
      <p className="m-0 text-emerald-900 text-sm mt-1">Tiện ích = Miễn phí tăng 30% khách. Không cài là dâng khách cho đối thủ. Tiệm nail là ngành local + thị giác → <strong>Call + Location + Image + Lead Form</strong> là 4 vũ khí mạnh nhất.</p>
    </div>

    <InteractiveChecklist
      id="chk19"
      title="Checklist Bài 19 – Triển khai trong 30 phút"
      tasks={[
        "Sitelink: 4 cái, link sống, đúng chủ đề Campaign.",
        "Call: Bật báo cáo cuộc gọi, đếm conversion >60 giây.",
        "Location: Đã link GBP đã xác minh, hiện khoảng cách.",
        "Callout: Tối thiểu 8 cái, không vi phạm chính sách.",
        "Lead Form: Đã test form, lead về Google Sheet/Zapier.",
        "Image: 3 ảnh vuông 1200×1200, không chữ, đã được duyệt.",
      ]}
    />
  </div>
);

// ─── Bài 20 ───────────────────────────────────────────────────────────────────
export const Lesson20Content = () => (
  <div className="prose prose-blue max-w-none text-gray-800">
    <div className="bg-blue-50 border-l-4 border-blue-500 p-4 mb-6 rounded-r-lg flex items-start gap-3">
      <Layout className="text-blue-500 mt-0.5 shrink-0" size={24} />
      <div>
        <p className="m-0 text-sm text-blue-800 font-medium">🎯 <strong>Sự thật phũ phàng:</strong></p>
        <p className="m-0 text-sm text-blue-800 mt-1">Ads 10 điểm + Trang đích 2 điểm = CVR 3%. Ads 7 điểm + Trang đích 9 điểm = CVR 18%. <strong>Trang đích quyết định 70% tiền ads có ra khách hay không.</strong></p>
        <p className="m-0 text-xs text-blue-700 mt-1 italic">80% khách tiệm nail vào bằng mobile → Check trên điện thoại trước, máy tính sau.</p>
      </div>
    </div>

    <h3 className="text-2xl font-bold text-gray-900 border-b pb-2">1. Công thức 3 Giây – 3 Inch – 3 Click</h3>

    <div className="grid grid-cols-1 md:grid-cols-3 gap-4 my-6">
      {[
        { rule: '3 Giây', icon: '⚡', desc: 'Load xong <3s', warn: '>3s mất 53% khách. 1s chậm = CVR giảm 7%', color: 'border-red-200 bg-red-50' },
        { rule: '3 Inch', icon: '📱', desc: 'Cuộn 3 inch đầu tiên phải thấy CTA + Ưu đãi', warn: 'Khách không cuộn, không thấy nút Book = thoát', color: 'border-orange-200 bg-orange-50' },
        { rule: '3 Click', icon: '👆', desc: 'Vào web → Đặt lịch xong ≤3 click', warn: '5 click là khách bỏ. Khách Mỹ thiếu kiên nhẫn', color: 'border-blue-200 bg-blue-50' },
      ].map((r) => (
        <div key={r.rule} className={`border rounded-xl p-4 ${r.color}`}>
          <div className="text-3xl mb-2">{r.icon}</div>
          <div className="font-bold text-xl text-slate-800 mb-1">{r.rule}</div>
          <div className="text-sm font-medium text-slate-700 mb-2">{r.desc}</div>
          <div className="text-xs text-red-600 italic">{r.warn}</div>
        </div>
      ))}
    </div>

    <VisualizerLandingPage />

    <h3 className="text-2xl font-bold text-gray-900 mt-10 border-b pb-2">2. Checklist 12 điểm trang đích – Chấm thử web bạn được mấy điểm</h3>

    {/* Part 1: Speed */}
    <div className="my-6">
      <div className="bg-red-700 text-white font-bold text-sm px-4 py-2 rounded-t-lg">PHẦN 1: TỐC ĐỘ & KỸ THUẬT – 3 điểm</div>
      <div className="overflow-x-auto border border-red-200 rounded-b-lg">
        <table className="min-w-full bg-white text-xs">
          <thead className="bg-red-50 text-red-800">
            <tr>
              <th className="py-2 px-3 text-left font-bold">#</th>
              <th className="py-2 px-3 text-left font-bold">Tiêu chí</th>
              <th className="py-2 px-3 text-left font-bold">Cách check 30 giây</th>
              <th className="py-2 px-3 text-left font-bold">Pass khi</th>
              <th className="py-2 px-3 text-left font-bold">Tool</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-gray-100">
            <tr>
              <td className="py-2 px-3 font-bold text-red-600">1</td>
              <td className="py-2 px-3 font-bold">Tốc độ &lt;3s trên 4G</td>
              <td className="py-2 px-3 font-mono">pagespeed.web.dev → Nhập URL</td>
              <td className="py-2 px-3 text-emerald-700 font-medium">Mobile ≥80 điểm, Load &lt;2.5s</td>
              <td className="py-2 px-3 text-slate-500">Google PageSpeed</td>
            </tr>
            <tr>
              <td className="py-2 px-3 font-bold text-red-600">2</td>
              <td className="py-2 px-3 font-bold">Không vỡ giao diện mobile</td>
              <td className="py-2 px-3">Mở web bằng iPhone/Android thật</td>
              <td className="py-2 px-3 text-emerald-700 font-medium">Nút to dễ bấm, chữ không bé, không zoom</td>
              <td className="py-2 px-3 text-slate-500">Test trực tiếp</td>
            </tr>
            <tr>
              <td className="py-2 px-3 font-bold text-red-600">3</td>
              <td className="py-2 px-3 font-bold">Có SSL https</td>
              <td className="py-2 px-3">Nhìn URL có ổ khóa không</td>
              <td className="py-2 px-3 text-emerald-700 font-medium">Có https. Không có = Google Ads cấm</td>
              <td className="py-2 px-3 text-slate-500">Trình duyệt</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>

    {/* Part 2: Above the fold */}
    <div className="my-6">
      <div className="bg-orange-600 text-white font-bold text-sm px-4 py-2 rounded-t-lg">PHẦN 2: ABOVE THE FOLD – 3 inch đầu quyết định 80% – 5 điểm</div>
      <div className="overflow-x-auto border border-orange-200 rounded-b-lg">
        <table className="min-w-full bg-white text-xs">
          <thead className="bg-orange-50 text-orange-800">
            <tr>
              <th className="py-2 px-3 text-left font-bold">#</th>
              <th className="py-2 px-3 text-left font-bold">Tiêu chí</th>
              <th className="py-2 px-3 text-left font-bold">Ví dụ ĐÚNG cho tiệm Dallas</th>
              <th className="py-2 px-3 text-left font-bold text-red-500">Ví dụ SAI</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-gray-100">
            {[
              ['4', 'Tiêu đề khớp 100% ads', 'Ads: "Acrylic Nails 77084" → H1: "Acrylic Nails in 77084 – Set from $45"', 'Ads: Acrylic → Web: "Welcome to Luxury Nails"'],
              ['5', 'CTA thấy ngay không cần cuộn', 'Nút "Book Now" + "Call (713)xxx-xxxx" góc phải trên mobile', 'Nút Book ở cuối trang'],
              ['6', 'Ưu đãi rõ ràng', '"New Client: $5 Off Acrylic Full Set" ngay dưới H1', 'Không có ưu đãi, hoặc để ở footer'],
              ['7', 'Trust Signal', '"★★★★★ 1,200+ Google Reviews" + 5 sao vàng', 'Không có review'],
              ['8', 'Hình ảnh Hero đúng dịch vụ', 'Trang Acrylic thì ảnh tay làm Acrylic đẹp', 'Ảnh stock Tây, không giống tiệm'],
            ].map(([num, tieu_chi, dung, sai]) => (
              <tr key={num}>
                <td className="py-2 px-3 font-bold text-orange-600">{num}</td>
                <td className="py-2 px-3 font-bold text-slate-700">{tieu_chi}</td>
                <td className="py-2 px-3 text-emerald-700">{dung}</td>
                <td className="py-2 px-3 text-red-600">{sai}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>

    {/* Part 3: Content & Conversion */}
    <div className="my-6">
      <div className="bg-blue-700 text-white font-bold text-sm px-4 py-2 rounded-t-lg">PHẦN 3: NỘI DUNG & CHUYỂN ĐỔI – 4 điểm</div>
      <div className="overflow-x-auto border border-blue-200 rounded-b-lg">
        <table className="min-w-full bg-white text-xs">
          <thead className="bg-blue-50 text-blue-800">
            <tr>
              <th className="py-2 px-3 text-left font-bold">#</th>
              <th className="py-2 px-3 text-left font-bold">Tiêu chí</th>
              <th className="py-2 px-3 text-left font-bold">Tại sao bắt buộc</th>
              <th className="py-2 px-3 text-left font-bold">Cách làm đúng</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-gray-100">
            {[
              ['9', 'Bảng giá minh bạch', '70% khách nail Mỹ thoát nếu không thấy giá', 'Bảng Acrylic/Gel X/Pedi rõ ràng. "From $45" đừng ghi "Call for price"'],
              ['10', 'Form ≤3 trường', 'Mỗi trường thêm giảm CVR 10%', 'Chỉ cần: Tên + SĐT + Dịch vụ. Bỏ Email, Địa chỉ'],
              ['11', 'Click-to-Call + SMS', '60% khách bấm gọi luôn', '<a href="tel:..."> + Nút "Text Us" kế bên'],
              ['12', 'Bằng chứng xã hội', 'Người Mỹ tin review hơn quảng cáo', 'Chèn 3 review Google thật + ảnh Before/After khách thật'],
            ].map(([num, tieu_chi, tai_sao, cach]) => (
              <tr key={num}>
                <td className="py-2 px-3 font-bold text-blue-600">{num}</td>
                <td className="py-2 px-3 font-bold text-slate-700">{tieu_chi}</td>
                <td className="py-2 px-3 text-slate-600">{tai_sao}</td>
                <td className="py-2 px-3 text-emerald-700">{cach}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>

    <div className="bg-slate-800 text-white p-4 rounded-xl my-6 text-center">
      <div className="font-bold text-lg mb-1">Cách chấm điểm</div>
      <div className="text-sm text-slate-300">1 tiêu chí = 1 điểm · Tổng 12 điểm</div>
      <div className="mt-3 flex justify-center gap-4 text-xs flex-wrap">
        <span className="bg-red-600 text-white px-3 py-1 rounded-full">&lt;6 điểm → Dừng chạy ads, sửa web trước</span>
        <span className="bg-orange-500 text-white px-3 py-1 rounded-full">6-8 điểm → Chạy nhưng tối ưu gấp</span>
        <span className="bg-emerald-600 text-white px-3 py-1 rounded-full">≥9 điểm → Tự tin scale budget</span>
      </div>
    </div>

    <h3 className="text-2xl font-bold text-gray-900 mt-10 border-b pb-2">3. Template "Above the fold" bất bại cho Landing Page Acrylic</h3>

    <div className="bg-slate-800 text-slate-100 rounded-xl p-5 my-6 font-mono text-xs leading-relaxed">
      <div className="text-slate-400 mb-3 font-sans font-semibold text-sm not-italic">Cấu trúc 3 inch đầu tiên – Mobile first</div>
      <div>[Logo Luxury Nails] ·········· [Call: (713)xxx-xxxx] [Book Now 🔴]</div>
      <div className="mt-2 text-yellow-300">H1: Acrylic Nails in 77084 – Long-Lasting, No Lifting</div>
      <div className="text-emerald-300">Dòng phụ: New Client Special: $5 Off Full Set + Free Gel Top Coat</div>
      <div className="text-yellow-400">[★★★★★ 4.9/5 from 1,287 Google Reviews]</div>
      <div className="mt-2 text-slate-300">[Ảnh: Tay mẫu Acrylic đẹp nhất tiệm]</div>
      <div className="mt-2 text-white font-bold">[Nút to full màn hình]: 💅 Book Acrylic Appointment</div>
      <div>[Nút phụ]: 📞 Call Now – Walk-ins Welcome</div>
      <div className="mt-2 text-slate-300">[3 Icon lợi ích]: ✓ 10+ Years Techs  ✓ Sterilized Tools  ✓ 7-Day Guarantee</div>
      <div className="mt-3 text-emerald-400 text-[10px] font-sans">→ Khách vào 2s hiểu: Bạn bán gì · Giá bao nhiêu · Tại sao chọn bạn · Làm gì tiếp theo</div>
    </div>

    <h3 className="text-2xl font-bold text-gray-900 mt-10 border-b pb-2">4. 5 lỗi giết chết CVR của 90% web tiệm nail</h3>

    <div className="overflow-x-auto my-6">
      <table className="min-w-full bg-white border border-gray-200 text-sm rounded-lg overflow-hidden shadow-sm">
        <thead className="bg-red-800 text-white">
          <tr>
            <th className="py-3 px-4 text-left font-bold">Lỗi</th>
            <th className="py-3 px-4 text-left font-bold">Tỷ lệ gặp</th>
            <th className="py-3 px-4 text-left font-bold">CVR giảm</th>
            <th className="py-3 px-4 text-left font-bold">Sửa thế nào</th>
          </tr>
        </thead>
        <tbody className="divide-y divide-gray-200 text-xs">
          {[
            ['1. Hero Banner là video nặng', '60%', '-40% CVR (load 8s)', 'Đổi thành ảnh .webp <200KB. Video để dưới fold'],
            ['2. Menu 10 mục', '80%', '-25% CVR', 'Landing page xóa menu. Chỉ giữ Logo + Call'],
            ['3. Bắt tạo tài khoản để book', '30%', '-50% CVR', 'Dùng Calendly/Square/Booksy nhúng thẳng. 1 click chọn giờ'],
            ['4. Không khớp Message Match', '90%', '-60% CVR', 'Ads nói "Gel X $55" → Web phải có chữ "Gel X $55" ngay đầu'],
            ['5. Pop-up xin email che màn hình', '40%', 'Khách thoát ngay', 'Bỏ pop-up. Muốn lấy email thì tặng $5 off SAU KHI book'],
          ].map(([loi, ty_le, giam, sua]) => (
            <tr key={loi}>
              <td className="py-3 px-4 font-bold text-red-700">{loi}</td>
              <td className="py-3 px-4 text-center text-slate-600">{ty_le}</td>
              <td className="py-3 px-4 text-center text-red-600 font-bold">{giam}</td>
              <td className="py-3 px-4 text-emerald-700">{sua}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>

    <h3 className="text-2xl font-bold text-gray-900 mt-10 border-b pb-2">5. Quy trình test trang đích 15 phút trước khi chạy ads</h3>

    <div className="space-y-3 my-6">
      {[
        ['Test 4G', 'Tắt Wifi, bật 4G, vào web. Đếm 1-2-3. Chưa thấy CTA = Fail.'],
        ['Test 5 Giây', 'Đưa cho người lạ xem web 5s rồi tắt. Hỏi: "Tiệm bán gì? Ưu đãi gì? Bấm đâu để đặt?". Trả lời sai 1 câu = Sửa lại Hero.'],
        ['Test 3 Click', 'Tự bấm: vào web → Chọn dịch vụ → Chọn giờ → Điền SĐT → Xong. >3 click thì rút gọn.'],
        ['Test Tracking', 'Bấm nút Call, gửi form test. Vào GA4 Realtime thấy sự kiện = Pass. Không thấy = Mất tiền oan.'],
      ].map(([ten, mo_ta], i) => (
        <div key={ten} className="flex gap-3 bg-white border border-slate-200 rounded-lg p-3 shadow-sm">
          <div className="w-7 h-7 bg-blue-600 text-white rounded-full flex items-center justify-center font-bold text-sm shrink-0">{i + 1}</div>
          <div>
            <div className="font-bold text-slate-800 text-sm">{ten}</div>
            <div className="text-xs text-slate-600 mt-0.5">{mo_ta}</div>
          </div>
        </div>
      ))}
    </div>

    <h3 className="text-2xl font-bold text-gray-900 mt-10 border-b pb-2">6. Bộ tool miễn phí chủ tiệm nail phải dùng</h3>

    <div className="grid grid-cols-1 md:grid-cols-2 gap-3 my-6">
      {[
        ['pagespeed.web.dev', 'Tốc độ', 'Google chấm. Dưới 70 điểm thì kêu IT tối ưu ảnh, tắt plugin thừa.', 'bg-red-50 border-red-200'],
        ['Microsoft Clarity', 'Heatmap – Miễn phí 100%', 'Xem khách click đâu, cuộn tới đâu thì bỏ. Cài 5 phút.', 'bg-blue-50 border-blue-200'],
        ['Google Optimize', 'Test A/B', 'Test 2 tiêu đề xem cái nào nhiều người Book hơn.', 'bg-yellow-50 border-yellow-200'],
        ['Typeform / Square Appointments', 'Form đặt lịch', 'Tỷ lệ điền form cao hơn form mặc định của web.', 'bg-purple-50 border-purple-200'],
      ].map(([tool, loai, mo_ta, color]) => (
        <div key={tool} className={`border rounded-lg p-3 ${color}`}>
          <div className="font-bold text-slate-800 text-sm">{tool}</div>
          <div className="text-xs font-medium text-slate-500 mb-1">{loai}</div>
          <div className="text-xs text-slate-600">{mo_ta}</div>
        </div>
      ))}
    </div>

    <div className="bg-emerald-50 border border-emerald-200 p-5 rounded-xl mt-8">
      <p className="m-0 font-bold text-emerald-800 text-base">🏆 Chốt Bài 20:</p>
      <p className="m-0 text-emerald-900 text-sm mt-2">Traffic = Mua. Conversion = Kiếm tiền. Đừng mang xô thủng đi hứng nước. Web &lt;8/12 điểm thì <strong>tắt ads</strong>, lấy $500 tiền ads đó đi làm lại trang đích. CVR từ 5% lên 15% = <strong>x3 khách với cùng ngân sách.</strong></p>
    </div>

    <InteractiveChecklist
      id="chk20"
      title="Checklist Bài 20 – Trang đích"
      tasks={[
        "Test tốc độ: Mobile PageSpeed ≥80 điểm, load <2.5s trên 4G.",
        "Tiêu đề H1 khớp 100% với từ khóa/nội dung ads (Message Match).",
        "Nút Book Now và số điện thoại thấy ngay trong 3 inch đầu mobile.",
        "Form đặt lịch chỉ có ≤3 trường: Tên + SĐT + Dịch vụ.",
        "Chèn ít nhất 3 Google Reviews thật + ảnh Before/After khách thật.",
        "Test 3 click: Vào web → Chọn dịch vụ → Đặt lịch thành công ≤3 bước.",
      ]}
    />
  </div>
);
