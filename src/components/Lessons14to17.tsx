import React from 'react';
import { Search, Target, Filter, Shield, TrendingUp, AlertTriangle, CheckCircle2, DollarSign } from 'lucide-react';
import { InteractiveChecklist } from './InteractiveChecklist';

// ─── Visualizer: 3-Ring Keyword Funnel ───────────────────────────────────────
const VisualizerKeywordFunnel = () => (
  <div className="my-6 p-5 bg-gradient-to-b from-slate-50 to-white border border-slate-200 rounded-xl shadow-sm">
    <h4 className="text-center font-bold text-slate-700 mb-4 text-base">Phễu 3 Vòng Từ Khóa – Tiệm Nail</h4>
    <div className="flex flex-col gap-2 items-center">
      {/* Outer ring */}
      <div className="w-full max-w-lg bg-orange-50 border-2 border-orange-200 rounded-2xl p-3 text-center relative">
        <div className="text-xs font-bold text-orange-600 uppercase tracking-wide mb-1">🔴 VÒNG NGOÀI – Research Intent</div>
        <div className="text-xs text-orange-700 font-mono">"nail designs", "how to remove acrylic nails", "nail care tips"</div>
        <div className="mt-1 flex justify-center gap-4 text-[11px] text-orange-500 font-medium">
          <span>CPC $0.5–$1.5</span><span>CVR 0.5–2%</span><span className="font-bold text-red-600">⚠ Đừng chạy Search!</span>
        </div>
      </div>
      {/* Middle ring */}
      <div className="w-full max-w-md bg-blue-50 border-2 border-blue-300 rounded-2xl p-3 text-center">
        <div className="text-xs font-bold text-blue-700 uppercase tracking-wide mb-1">🟡 VÒNG TRONG – Commercial Intent</div>
        <div className="text-xs text-blue-800 font-mono">"nail salon near me", "acrylic nails 77084", "walk in nail salon"</div>
        <div className="mt-1 flex justify-center gap-4 text-[11px] text-blue-600 font-medium">
          <span>CPC $2–$6</span><span>CVR 8–20%</span><span className="font-bold text-blue-700">✅ Dồn 80% ngân sách</span>
        </div>
      </div>
      {/* Brand ring */}
      <div className="w-full max-w-sm bg-emerald-50 border-2 border-emerald-400 rounded-2xl p-3 text-center">
        <div className="text-xs font-bold text-emerald-700 uppercase tracking-wide mb-1">🟢 VÒNG BRAND – Navigational Intent</div>
        <div className="text-xs text-emerald-800 font-mono">"luxury nails dallas", "luxury nails reviews"</div>
        <div className="mt-1 flex justify-center gap-4 text-[11px] text-emerald-600 font-medium">
          <span>CPC $0.5–$2</span><span>CVR 20–40%</span><span className="font-bold text-emerald-700">✅ Bắt buộc chạy</span>
        </div>
      </div>
    </div>
    <p className="text-center text-xs text-slate-500 mt-3 italic">Phễu càng hẹp = Khách càng sắp mua = Tỷ lệ chốt càng cao</p>
  </div>
);

// ─── Visualizer: Match Type Comparison ───────────────────────────────────────
const VisualizerMatchTypes = () => (
  <div className="my-6 p-5 bg-slate-50 border border-slate-200 rounded-xl shadow-sm">
    <h4 className="text-center font-bold text-slate-700 mb-4 text-base">Lưới Đánh Cá – 3 Loại Đối Sánh</h4>
    <div className="grid grid-cols-3 gap-3 text-center text-xs">
      {/* Exact */}
      <div className="flex flex-col gap-2">
        <div className="bg-emerald-600 text-white font-bold py-2 px-3 rounded-t-lg text-sm">[ ] Exact</div>
        <div className="border-2 border-emerald-400 rounded-b-lg p-2 bg-white space-y-1 text-emerald-800 font-medium text-[11px]">
          <div className="bg-emerald-50 rounded p-1">acrylic nails ✅</div>
          <div className="bg-emerald-50 rounded p-1">acrylic nail ✅</div>
          <div className="bg-red-50 rounded p-1 text-red-500">best acrylic nails ❌</div>
          <div className="bg-red-50 rounded p-1 text-red-500">nail tech jobs ❌</div>
        </div>
        <div className="text-emerald-700 font-bold text-[11px]">Kiểm soát CHẶT nhất</div>
      </div>
      {/* Phrase */}
      <div className="flex flex-col gap-2">
        <div className="bg-blue-600 text-white font-bold py-2 px-3 rounded-t-lg text-sm">" " Phrase</div>
        <div className="border-2 border-blue-400 rounded-b-lg p-2 bg-white space-y-1 text-blue-800 font-medium text-[11px]">
          <div className="bg-blue-50 rounded p-1">acrylic nails near me ✅</div>
          <div className="bg-blue-50 rounded p-1">best acrylic nails ✅</div>
          <div className="bg-red-50 rounded p-1 text-red-500">gel x nails ❌</div>
          <div className="bg-red-50 rounded p-1 text-red-500">nail tech jobs ❌</div>
        </div>
        <div className="text-blue-700 font-bold text-[11px]">Thăm dò – Khuyến nghị</div>
      </div>
      {/* Broad */}
      <div className="flex flex-col gap-2">
        <div className="bg-red-500 text-white font-bold py-2 px-3 rounded-t-lg text-sm">Broad ⚠</div>
        <div className="border-2 border-red-300 rounded-b-lg p-2 bg-white space-y-1 text-red-700 font-medium text-[11px]">
          <div className="bg-red-50 rounded p-1">nail school ❌</div>
          <div className="bg-red-50 rounded p-1">nail tech jobs ❌</div>
          <div className="bg-red-50 rounded p-1">press on nails amazon ❌</div>
          <div className="bg-red-50 rounded p-1">nail art designs ❌</div>
        </div>
        <div className="text-red-700 font-bold text-[11px]">⛔ Cấm dùng &lt;$500/ngày</div>
      </div>
    </div>
    <p className="text-center text-xs text-slate-500 mt-3 italic">Chiến lược: Phrase thăm dò → Exact khóa lời. Không dùng Broad trừ khi ngân sách &gt;$500/ngày.</p>
  </div>
);

// ─────────────────────────────────────────────────────────────────────────────
export const Lesson14Content = () => (
  <div className="prose prose-blue max-w-none text-gray-800">
    <div className="bg-orange-50 border-l-4 border-orange-500 p-4 mb-6 rounded-r-lg flex items-start gap-3">
      <Target className="text-orange-500 mt-0.5 shrink-0" size={24} />
      <p className="m-0 text-sm text-orange-800 font-medium">
        🎯 <strong>Chọn sai từ khóa = Trả tiền cho người không mua.</strong> Tư duy phân loại 3 vòng giúp bạn đốt tiền đúng chỗ, lời đậm.
      </p>
    </div>

    <h3 className="text-2xl font-bold text-gray-900 border-b pb-2">1. Bản chất: Khách search gì = Khách đang ở giai đoạn nào của phễu</h3>
    <p>
      Google Ads không phải Facebook. Khách <strong>tự gõ từ khóa</strong> = họ đã nói cho bạn biết họ muốn gì.
      Việc của bạn là phân loại 3 "vòng" để bid tiền khác nhau.
    </p>

    <VisualizerKeywordFunnel />

    <h3 className="text-2xl font-bold text-gray-900 mt-10 border-b pb-2">2. Mổ xẻ từng vòng + Ví dụ tiệm nail ở Mỹ</h3>
    <div className="overflow-x-auto my-6">
      <table className="min-w-full bg-white border border-gray-200 text-sm rounded-lg overflow-hidden shadow-sm">
        <thead className="bg-slate-800 text-white">
          <tr>
            <th className="py-3 px-4 text-left font-bold">Vòng</th>
            <th className="py-3 px-4 text-left font-bold">Ý định khách hàng</th>
            <th className="py-3 px-4 text-left font-bold">Đặc điểm</th>
            <th className="py-3 px-4 text-left font-bold">Ví dụ từ khóa nail</th>
            <th className="py-3 px-4 text-left font-bold">Có nên chạy?</th>
          </tr>
        </thead>
        <tbody className="divide-y divide-gray-200">
          <tr className="bg-orange-50/40">
            <td className="py-3 px-4 font-bold text-orange-700">VÒNG NGOÀI<br/><span className="text-xs font-normal text-orange-500">Research Intent</span></td>
            <td className="py-3 px-4 text-slate-600">Đang tìm hiểu, chưa có ý định mua ngay. Muốn xem mẫu, học cách làm</td>
            <td className="py-3 px-4 text-slate-600">Volume cao<br/>CPC rẻ<br/>CVR cực thấp</td>
            <td className="py-3 px-4 font-mono text-xs text-slate-700">nail art ideas<br/>french manicure designs<br/>how long do acrylics last</td>
            <td className="py-3 px-4 font-bold text-red-600">❌ Không chạy Search.<br/>Đốt tiền thuần.</td>
          </tr>
          <tr className="bg-blue-50/40">
            <td className="py-3 px-4 font-bold text-blue-700">VÒNG TRONG<br/><span className="text-xs font-normal text-blue-500">Commercial Intent</span></td>
            <td className="py-3 px-4 text-slate-600">Đã biết mình cần làm nails. Đang so sánh giá, địa điểm, đặt lịch</td>
            <td className="py-3 px-4 text-slate-600">Volume vừa<br/>CPC cao<br/>CVR cao nhất</td>
            <td className="py-3 px-4 font-mono text-xs text-slate-700">nail salon near me<br/>acrylic nails 77084<br/>pedicure near me open now<br/>gel x nails price<br/>best nail salon dallas</td>
            <td className="py-3 px-4 font-bold text-blue-700">✅ Dồn 80% ngân sách.<br/>Đây là mỏ vàng.</td>
          </tr>
          <tr className="bg-emerald-50/40">
            <td className="py-3 px-4 font-bold text-emerald-700">VÒNG BRAND<br/><span className="text-xs font-normal text-emerald-500">Navigational Intent</span></td>
            <td className="py-3 px-4 text-slate-600">Biết tên tiệm bạn rồi, đang tìm SĐT, địa chỉ, giờ mở cửa</td>
            <td className="py-3 px-4 text-slate-600">Volume thấp<br/>CPC rất rẻ<br/>CVR cao nhất</td>
            <td className="py-3 px-4 font-mono text-xs text-slate-700">luxury nails dallas<br/>luxury nails phone number<br/>luxury nails reviews</td>
            <td className="py-3 px-4 font-bold text-emerald-700">✅ Bắt buộc chạy.<br/>Chặn đối thủ cướp khách.</td>
          </tr>
        </tbody>
      </table>
    </div>

    <h3 className="text-2xl font-bold text-gray-900 mt-10 border-b pb-2">3. Quy tắc phân bổ ngân sách theo 3 vòng</h3>
    <p className="font-semibold text-slate-700">Công thức cho tiệm nail mới, ngân sách $50/ngày:</p>
    <div className="overflow-x-auto my-4">
      <table className="min-w-full bg-white border border-gray-200 text-sm rounded-lg overflow-hidden shadow-sm">
        <thead className="bg-slate-100 text-slate-700">
          <tr>
            <th className="py-2 px-4 text-left font-bold">Vòng</th>
            <th className="py-2 px-4 text-center font-bold">% Ngân sách</th>
            <th className="py-2 px-4 text-center font-bold">$/ngày</th>
            <th className="py-2 px-4 text-left font-bold">Mục tiêu</th>
            <th className="py-2 px-4 text-left font-bold">Chiến lược giá thầu</th>
          </tr>
        </thead>
        <tbody className="divide-y divide-gray-200">
          <tr className="bg-blue-50/30">
            <td className="py-2 px-4 font-bold text-blue-700">Vòng Trong</td>
            <td className="py-2 px-4 text-center font-bold text-blue-700">70–80%</td>
            <td className="py-2 px-4 text-center font-bold">$35–$40</td>
            <td className="py-2 px-4 text-slate-600">Ra khách, ra doanh thu</td>
            <td className="py-2 px-4 text-slate-600 font-mono text-xs">tCPA hoặc Max Conversions</td>
          </tr>
          <tr className="bg-emerald-50/30">
            <td className="py-2 px-4 font-bold text-emerald-700">Vòng Brand</td>
            <td className="py-2 px-4 text-center font-bold text-emerald-700">10–15%</td>
            <td className="py-2 px-4 text-center font-bold">$5–$7</td>
            <td className="py-2 px-4 text-slate-600">Chặn đối thủ bid tên mình</td>
            <td className="py-2 px-4 text-slate-600 font-mono text-xs">Target Impression Share 95%</td>
          </tr>
          <tr className="bg-orange-50/30">
            <td className="py-2 px-4 font-bold text-orange-700">Vòng Ngoài</td>
            <td className="py-2 px-4 text-center font-bold text-orange-700">0–10%</td>
            <td className="py-2 px-4 text-center font-bold">$0–$5</td>
            <td className="py-2 px-4 text-slate-600">Phủ thương hiệu, remarketing</td>
            <td className="py-2 px-4 text-slate-600 font-mono text-xs">Chỉ chạy khi dư tiền + có video</td>
          </tr>
        </tbody>
      </table>
    </div>
    <p className="text-slate-600 italic text-sm">
      <strong>Lý do:</strong> $100 đổ vào Vòng Trong ra 5 khách. $100 đổ vào Vòng Ngoài ra 0.5 khách. Bạn chọn cái nào?
    </p>

    <h3 className="text-2xl font-bold text-gray-900 mt-10 border-b pb-2">4. Cách tự phân loại từ khóa vào 3 vòng – Dấu hiệu nhận biết</h3>

    <div className="grid grid-cols-1 md:grid-cols-2 gap-4 my-4">
      <div className="border border-blue-200 bg-blue-50 p-4 rounded-xl">
        <h4 className="font-bold text-blue-800 mt-0 mb-2 text-base">✅ VÒNG TRONG – Thấy là bid mạnh tay</h4>
        <ol className="text-sm space-y-1 text-blue-900 m-0 pl-4">
          <li><strong>"near me", "nearby", zipcode</strong>: nail salon near me, 77084</li>
          <li><strong>"price", "cost", "how much"</strong>: acrylic nails price</li>
          <li><strong>"best", "top", "reviews"</strong>: best nail salon dallas</li>
          <li><strong>"open now", "walk in", "appointment"</strong>: Ý định làm ngay</li>
          <li><strong>Tên dịch vụ cụ thể</strong>: gel x nails, dip powder, russian manicure</li>
        </ol>
      </div>
      <div className="border border-red-200 bg-red-50 p-4 rounded-xl">
        <h4 className="font-bold text-red-800 mt-0 mb-2 text-base">❌ VÒNG NGOÀI – Thêm vào Phủ định ngay</h4>
        <ol className="text-sm space-y-1 text-red-900 m-0 pl-4">
          <li><strong>"how to", "diy", "at home"</strong>: Khách muốn tự làm</li>
          <li><strong>"job", "salary", "school"</strong>: Tuyển dụng</li>
          <li><strong>"supply", "wholesale"</strong>: Mua đồ nghề</li>
          <li><strong>"designs", "ideas", "pictures"</strong>: Chỉ xem mẫu</li>
          <li><strong>Tên đối thủ</strong>: regal nails → Né nếu ngân sách thấp</li>
        </ol>
      </div>
    </div>

    <div className="border border-emerald-200 bg-emerald-50 p-4 rounded-xl my-4">
      <h4 className="font-bold text-emerald-800 mt-0 mb-1 text-base">🟢 VÒNG BRAND – Luôn tách Campaign riêng</h4>
      <p className="text-sm text-emerald-800 m-0">
        Chỉ chứa tên tiệm bạn + biến thể gõ sai: <code className="bg-emerald-100 px-1 rounded">luxury nails</code>, <code className="bg-emerald-100 px-1 rounded">luxery nails</code>, <code className="bg-emerald-100 px-1 rounded">luxury nail dallas</code>
      </p>
    </div>

    <h3 className="text-2xl font-bold text-gray-900 mt-10 border-b pb-2">5. Bộ từ khóa Vòng Trong cho tiệm nail Mỹ – Copy dùng ngay</h3>

    <div className="grid grid-cols-1 md:grid-cols-3 gap-4 my-4">
      <div className="bg-white border border-slate-200 rounded-xl p-4 shadow-sm">
        <div className="font-bold text-slate-700 mb-2 text-sm">Nhóm 1: Dịch vụ chính</div>
        <div className="font-mono text-xs bg-slate-50 p-3 rounded space-y-1 text-slate-700">
          <div>[acrylic nails near me]</div>
          <div>"acrylic nails 77084"</div>
          <div>[gel x nails]</div>
          <div>"gel x nails price"</div>
          <div>[dip powder nails near me]</div>
          <div>[pedicure near me]</div>
          <div>"spa pedicure"</div>
          <div>[russian manicure]</div>
        </div>
        <div className="text-xs text-slate-500 mt-2">CPC cao nhất, CVR cao nhất</div>
      </div>
      <div className="bg-white border border-slate-200 rounded-xl p-4 shadow-sm">
        <div className="font-bold text-slate-700 mb-2 text-sm">Nhóm 2: Ý định khẩn cấp</div>
        <div className="font-mono text-xs bg-slate-50 p-3 rounded space-y-1 text-slate-700">
          <div>[walk in nail salon]</div>
          <div>"nail salon open now"</div>
          <div>"nail salon open sunday"</div>
          <div>[nail salon near me open]</div>
          <div>"same day nail appointment"</div>
        </div>
        <div className="text-xs text-emerald-600 mt-2 font-medium">CVR &gt;15% – Khách cần ngay</div>
      </div>
      <div className="bg-white border border-slate-200 rounded-xl p-4 shadow-sm">
        <div className="font-bold text-slate-700 mb-2 text-sm">Nhóm 3: So sánh & địa phương</div>
        <div className="font-mono text-xs bg-slate-50 p-3 rounded space-y-1 text-slate-700">
          <div>[best nail salon dallas]</div>
          <div>"nail salon 77084 reviews"</div>
          <div>"luxury nail salon near me"</div>
          <div>[top rated nail salon]</div>
        </div>
        <div className="text-xs text-slate-500 mt-2">CPC trung bình, CVR tốt</div>
      </div>
    </div>
    <p className="text-sm text-slate-600 italic">
      <strong>Quy tắc:</strong> Bắt đầu với 20–30 từ khóa Vòng Trong. Chạy 2 tuần, xem Search Terms Report rồi mới mở rộng.
    </p>

    <h3 className="text-2xl font-bold text-gray-900 mt-10 border-b pb-2">6. 3 sai lầm đốt tiền khi chọn từ khóa</h3>
    <div className="bg-red-50 border border-red-200 p-5 rounded-xl my-4">
      <ol className="space-y-3 text-red-900 m-0 pl-4 text-sm">
        <li>
          <strong>Chạy từ khóa Vòng Ngoài trên Search:</strong> Từ "nail designs" CPC $1 nhưng 200 click mới có 1 khách → CPA $200. Toang.
        </li>
        <li>
          <strong>Không chạy từ khóa Brand:</strong> Đối thủ bid tên tiệm bạn $0.5/click. Khách search "Luxury Nails" bấm vào đối thủ vì bạn không có mặt. Mất khách ấm ức nhất.
        </li>
        <li>
          <strong>Gộp Vòng Trong + Vòng Ngoài chung 1 Ad Group:</strong> Google không biết tối ưu cho ai. Điểm CL tụt về 3/10.
        </li>
      </ol>
    </div>

    <div className="bg-slate-800 text-white p-4 rounded-xl my-6 text-sm">
      <p className="m-0 font-bold text-yellow-300">📌 Chốt Bài 14:</p>
      <p className="m-0 mt-1">Tiền chỉ đổ vào Vòng Trong + Brand. Vòng Ngoài là bẫy đốt tiền. Nhớ câu này: <em>"Khách search gì, mình bán cái đó. Khách chưa search, đừng bán."</em></p>
    </div>

    <InteractiveChecklist
      id="chk14"
      title="Checklist Bài 14"
      tasks={[
        "Liệt kê 3 dịch vụ lợi nhuận cao nhất (VD: Acrylic, Gel X, Pedicure)",
        "Với mỗi dịch vụ, ghi 5 từ khóa Vòng Trong theo công thức [dịch vụ] + near me/price/zipcode",
        "Vào Keyword Planner check: Search volume >50/tháng, CPC $2–$6 là chiến được",
        "Lập sẵn list từ khóa phủ định Vòng Ngoài: ideas, designs, how to, diy, job, school, supply",
        "Tách 1 Campaign Brand riêng: Chỉ chạy tên tiệm bạn, ngân sách $3–$5/ngày",
      ]}
    />
  </div>
);

// ─────────────────────────────────────────────────────────────────────────────
export const Lesson15Content = () => (
  <div className="prose prose-blue max-w-none text-gray-800">
    <div className="bg-blue-50 border-l-4 border-blue-500 p-4 mb-6 rounded-r-lg flex items-start gap-3">
      <Search className="text-blue-500 mt-0.5 shrink-0" size={24} />
      <p className="m-0 text-sm text-blue-800 font-medium">
        🎯 <strong>Keyword Planner = Máy X-Ray từ khóa.</strong> Đọc đúng 4 cột này là biết từ khóa nào ra khách, từ khóa nào đốt tiền — trước khi chạy 1$.
      </p>
    </div>

    <h3 className="text-2xl font-bold text-gray-900 border-b pb-2">1. Vào Keyword Planner ở đâu?</h3>
    <div className="bg-slate-100 p-4 rounded-lg text-sm font-mono border border-slate-200 my-4">
      Google Ads → Công cụ → Lập kế hoạch → Công cụ lập kế hoạch từ khóa → <strong>Khám phá từ khóa mới</strong>
    </div>
    <p>
      Dán 10–20 từ khóa seed bạn nghĩ ra từ Bài 14:
      <code className="ml-1 text-xs bg-slate-100 px-2 py-0.5 rounded">acrylic nails, gel x nails, pedicure near me, nail salon 77084, walk in nail salon</code>
    </p>
    <p>Bấm <strong>"Nhận kết quả"</strong>. Google trả về 100–500 từ khóa. Giờ học đọc 4 cột chính.</p>

    <h3 className="text-2xl font-bold text-gray-900 mt-10 border-b pb-2">2. Giải mã 4 cột sống còn</h3>
    <div className="overflow-x-auto my-6">
      <table className="min-w-full bg-white border border-gray-200 text-sm rounded-lg overflow-hidden shadow-sm">
        <thead className="bg-slate-800 text-white">
          <tr>
            <th className="py-3 px-4 text-left font-bold w-1/4">Cột</th>
            <th className="py-3 px-4 text-left font-bold">Google nói gì</th>
            <th className="py-3 px-4 text-left font-bold">Ý nghĩa cho tiệm nail</th>
            <th className="py-3 px-4 text-left font-bold">Cách đọc để ra quyết định</th>
          </tr>
        </thead>
        <tbody className="divide-y divide-gray-200">
          <tr>
            <td className="py-3 px-4 font-bold text-blue-700">1. Số lượt tìm kiếm TB<br/><span className="text-xs font-normal text-slate-500">Avg. monthly searches</span></td>
            <td className="py-3 px-4 text-slate-600">Tháng rồi có bao nhiêu người search từ này ở khu vực bạn target</td>
            <td className="py-3 px-4">Thị trường to hay nhỏ. &lt;10 là quá ngách, &gt;1000 là cạnh tranh</td>
            <td className="py-3 px-4"><strong>Vòng Trong:</strong> 50–500 là đẹp. 2000+ thì đắt<br/><strong>Vòng Brand:</strong> 10–50 là ok</td>
          </tr>
          <tr className="bg-slate-50/50">
            <td className="py-3 px-4 font-bold text-orange-700">2. Mức độ cạnh tranh<br/><span className="text-xs font-normal text-slate-500">Competition</span></td>
            <td className="py-3 px-4 text-slate-600">Thấp / Trung bình / Cao. Đếm số nhà quảng cáo đang bid từ này</td>
            <td className="py-3 px-4">Dễ hay khó lên Top</td>
            <td className="py-3 px-4"><strong>Thấp:</strong> Ngon, ít người bid<br/><strong>Cao:</strong> Phải Điểm CL 9/10 mới đấu lại</td>
          </tr>
          <tr>
            <td className="py-3 px-4 font-bold text-emerald-700">3. Giá thầu đầu trang – Thấp<br/><span className="text-xs font-normal text-slate-500">Top of page bid – Low range</span></td>
            <td className="py-3 px-4 text-slate-600">Nhà QC trả ít nhất bao nhiêu để lên trang 1</td>
            <td className="py-3 px-4">CPC sàn. Bid thấp hơn = không hiển thị</td>
            <td className="py-3 px-4">Giá bạn trả nếu Điểm CL 10/10</td>
          </tr>
          <tr className="bg-slate-50/50">
            <td className="py-3 px-4 font-bold text-red-700">4. Giá thầu đầu trang – Cao<br/><span className="text-xs font-normal text-slate-500">Top of page bid – High range</span></td>
            <td className="py-3 px-4 text-slate-600">Nhà QC trả nhiều nhất để lên Top 1</td>
            <td className="py-3 px-4">CPC trần</td>
            <td className="py-3 px-4">Giá bạn trả nếu Điểm CL 3/10</td>
          </tr>
        </tbody>
      </table>
    </div>

    <h3 className="text-2xl font-bold text-gray-900 mt-10 border-b pb-2">3. Đọc số thực tế cho ngành nail Dallas, TX – Ví dụ 5 từ khóa</h3>
    <div className="overflow-x-auto my-6">
      <table className="min-w-full bg-white border border-gray-200 text-sm rounded-lg overflow-hidden shadow-sm">
        <thead className="bg-slate-100 text-slate-700">
          <tr>
            <th className="py-2 px-4 text-left font-bold">Từ khóa</th>
            <th className="py-2 px-3 text-center font-bold">Volume</th>
            <th className="py-2 px-3 text-center font-bold">Competition</th>
            <th className="py-2 px-3 text-center font-bold">Bid Thấp</th>
            <th className="py-2 px-3 text-center font-bold">Bid Cao</th>
            <th className="py-2 px-4 text-left font-bold">Đọc vị</th>
          </tr>
        </thead>
        <tbody className="divide-y divide-gray-200 text-sm">
          <tr className="bg-amber-50/30">
            <td className="py-2 px-4 font-mono font-bold text-slate-700">nail salon near me</td>
            <td className="py-2 px-3 text-center">8,100</td>
            <td className="py-2 px-3 text-center text-red-600 font-medium">Cao</td>
            <td className="py-2 px-3 text-center">$2.80</td>
            <td className="py-2 px-3 text-center font-bold text-red-600">$7.50</td>
            <td className="py-2 px-4 text-slate-600"><strong>Mỏ vàng nhưng đắt.</strong> Phải tách Ad Group riêng, Điểm CL 9/10 mới lãi.</td>
          </tr>
          <tr className="bg-emerald-50/30">
            <td className="py-2 px-4 font-mono font-bold text-slate-700">acrylic nails 77084</td>
            <td className="py-2 px-3 text-center">320</td>
            <td className="py-2 px-3 text-center text-orange-600 font-medium">TB</td>
            <td className="py-2 px-3 text-center">$2.10</td>
            <td className="py-2 px-3 text-center">$5.20</td>
            <td className="py-2 px-4 text-emerald-700 font-medium"><strong>Ngon nhất.</strong> Volume đủ, ý định rõ, cạnh tranh vừa. Bid $3–$3.5.</td>
          </tr>
          <tr>
            <td className="py-2 px-4 font-mono font-bold text-slate-700">gel x nails price</td>
            <td className="py-2 px-3 text-center">170</td>
            <td className="py-2 px-3 text-center text-emerald-600 font-medium">Thấp</td>
            <td className="py-2 px-3 text-center">$1.90</td>
            <td className="py-2 px-3 text-center">$4.80</td>
            <td className="py-2 px-4 text-blue-700 font-medium"><strong>Hidden gem.</strong> Ít người bid. Khách hỏi giá = sắp mua. Bid $2.5.</td>
          </tr>
          <tr className="bg-amber-50/30">
            <td className="py-2 px-4 font-mono font-bold text-slate-700">walk in nail salon open now</td>
            <td className="py-2 px-3 text-center">90</td>
            <td className="py-2 px-3 text-center text-orange-600 font-medium">TB</td>
            <td className="py-2 px-3 text-center">$3.20</td>
            <td className="py-2 px-3 text-center font-bold text-red-600">$8.10</td>
            <td className="py-2 px-4 text-slate-600"><strong>CPC đắt nhưng CVR &gt;20%.</strong> Khách cần gấp. Dám bid $5 vì CPA vẫn rẻ.</td>
          </tr>
          <tr className="bg-red-50/30">
            <td className="py-2 px-4 font-mono font-bold text-red-600">nail art ideas</td>
            <td className="py-2 px-3 text-center">5,400</td>
            <td className="py-2 px-3 text-center text-emerald-600 font-medium">Thấp</td>
            <td className="py-2 px-3 text-center text-emerald-600">$0.60</td>
            <td className="py-2 px-3 text-center text-emerald-600">$1.90</td>
            <td className="py-2 px-4 text-red-700 font-bold">⚠ Bẫy Vòng Ngoài. Rẻ nhưng không ai mua. Add phủ định ngay!</td>
          </tr>
        </tbody>
      </table>
    </div>
    <p className="text-sm bg-yellow-50 border border-yellow-200 p-3 rounded-lg text-yellow-800">
      <strong>Bài học:</strong> Không phải cứ Volume cao là ngon. "nail art ideas" 5400 search nhưng 0 khách. "gel x nails price" 170 search ra 15 khách.
    </p>

    <h3 className="text-2xl font-bold text-gray-900 mt-10 border-b pb-2">4. 3 công thức ra quyết định trong 10 giây</h3>
    <div className="space-y-4 my-4">
      <div className="bg-blue-50 border border-blue-200 p-4 rounded-xl">
        <h4 className="font-bold text-blue-800 mt-0 mb-2 text-base">Công thức 1: Tính CPC tối đa bạn chịu được</h4>
        <p className="font-mono text-sm bg-white border border-blue-100 p-2 rounded m-0">CPC max = CPA mục tiêu × CVR dự kiến</p>
        <p className="text-sm mt-2 text-blue-800 m-0">
          VD: Tiệm lời nếu CPA &lt;$20. CVR dự kiến 10% = 0.1<br/>
          → CPC max = $20 × 0.1 = <strong>$2.0</strong><br/>
          → Từ nào Bid Cao &gt;$4 thì bỏ hoặc phải làm CVR &gt;20% mới đấu.
        </p>
      </div>
      <div className="bg-orange-50 border border-orange-200 p-4 rounded-xl">
        <h4 className="font-bold text-orange-800 mt-0 mb-2 text-base">Công thức 2: Đánh giá độ khó từ khóa</h4>
        <p className="font-mono text-sm bg-white border border-orange-100 p-2 rounded m-0">Competition = Cao + (Bid Cao − Bid Thấp) &gt; $3 = Thị trường đẫm máu</p>
        <p className="text-sm mt-2 text-orange-800 m-0">
          Chỉ lao vào khi: Ngân sách &gt;$50/ngày + Điểm CL &gt;7/10<br/>
          VD: "nail salon near me": Cao + ($7.5−$2.8=$4.7) → Khó. Người mới tránh.
        </p>
      </div>
      <div className="bg-emerald-50 border border-emerald-200 p-4 rounded-xl">
        <h4 className="font-bold text-emerald-800 mt-0 mb-2 text-base">Công thức 3: Tìm "Hidden Gem"</h4>
        <p className="font-mono text-sm bg-white border border-emerald-100 p-2 rounded m-0">Volume 100–500 + Competition Thấp + Bid Cao &lt;$5 = Mỏ vàng</p>
        <p className="text-sm mt-2 text-emerald-800 m-0">
          → "gel x nails price", "dip powder nails near me", "russian manicure 77084" thường rơi vào nhóm này.
        </p>
      </div>
    </div>

    <h3 className="text-2xl font-bold text-gray-900 mt-10 border-b pb-2">5. Quy trình 4 bước dùng Keyword Planner cho tiệm nail</h3>
    <div className="space-y-3 my-4">
      {[
        {
          step: 'Bước 1: Lọc địa lý trước khi xem',
          content: 'Trong Keyword Planner → Vị trí → Chọn "United States: Texas, Dallas" hoặc nhập Zipcode 77084. Nếu để US thì số Volume sai bét — người Alaska search không liên quan tiệm Dallas.',
        },
        {
          step: 'Bước 2: Lọc từ khóa ban đầu',
          content: 'Bộ lọc → Thêm bộ lọc → "Văn bản từ khóa" → Chứa: nails, pedicure, manicure → Loại trừ: jobs, school, supply, ideas, how to',
        },
        {
          step: 'Bước 3: Sort theo 4 cột tìm kèo thơm',
          content: '① Sort "Bid Thấp" thấp→cao: Tìm từ <$3 mà Volume >50\n② Sort "Competition" = Thấp: Tìm từ dễ ăn\n③ Sort "Volume" cao→thấp: Biết đối thủ đang đánh từ nào',
        },
        {
          step: 'Bước 4: Tải về Excel, thêm 2 cột tự tính',
          content: 'Thêm cột "CPC Max của bạn" = CPA × CVR. Thêm công thức: Nếu Bid Cao < CPC Max → "Chạy", Ngược lại → "Tối ưu CL trước"',
        },
      ].map(({ step, content }) => (
        <div key={step} className="bg-slate-50 border border-slate-200 p-4 rounded-lg">
          <h4 className="font-bold text-slate-700 m-0 text-sm">{step}</h4>
          <p className="text-sm m-0 mt-1 text-slate-600 whitespace-pre-line">{content}</p>
        </div>
      ))}
    </div>

    <h3 className="text-2xl font-bold text-gray-900 mt-10 border-b pb-2">6. 4 hiểu lầm chết người khi đọc Keyword Planner</h3>
    <div className="bg-red-50 border border-red-200 p-5 rounded-xl my-4">
      <ol className="space-y-2 text-red-900 text-sm m-0 pl-4">
        <li><strong>"Bid Thấp = Mình trả đúng số đó":</strong> Sai. Đó là giá cho Điểm CL 10/10. Bạn CL 5/10 thì trả Bid Cao hoặc hơn.</li>
        <li><strong>"Volume 0 = Không ai search":</strong> Sai. Google ẩn số nếu &lt;10. Nhưng 8 người search "luxury nails dallas" là 8 khách nóng. Vẫn chạy.</li>
        <li><strong>"Competition Thấp = Dễ":</strong> Đôi khi thấp vì không ai ra đơn được. Check thêm Bid Cao. Nếu Bid Cao &lt;$1 thì từ khóa vô giá trị.</li>
        <li><strong>Dùng dữ liệu US thay vì Zipcode:</strong> Volume "nail salon" cả nước 1M/tháng, nhưng 77084 chỉ 300/tháng. Đặt ngân sách sai.</li>
      </ol>
    </div>

    <div className="bg-slate-800 text-white p-4 rounded-xl my-6 text-sm">
      <p className="m-0 font-bold text-yellow-300">📌 Chốt Bài 15:</p>
      <p className="m-0 mt-1">Keyword Planner không đoán tương lai, nhưng cho bạn biết quá khứ. Từ nào Bid Cao $8 mà Volume 50 thì đừng đụng vào khi mới chạy. Chọn Volume 200, Bid Cao $4, Competition Thấp = 3 tháng sau bạn lãi.</p>
    </div>

    <InteractiveChecklist
      id="chk15"
      title="Checklist Bài 15"
      tasks={[
        "Vào Keyword Planner, set Vị trí = Zipcode tiệm + bán kính 5 miles",
        "Nhập 10 từ khóa seed Vòng Trong từ Bài 14",
        "Export ra Excel, lọc lấy 20 từ: Volume >50, Bid Cao <$6",
        "Với mỗi từ, tính CPC Max = CPA mục tiêu × CVR dự kiến. Từ nào Bid Cao vượt CPC Max → ghi chú 'Phải làm CL 9/10'",
        "Add 20 từ này vào Ad Group. Từ nào Volume >1000 tách Campaign riêng",
      ]}
    />
  </div>
);

// ─────────────────────────────────────────────────────────────────────────────
export const Lesson16Content = () => (
  <div className="prose prose-blue max-w-none text-gray-800">
    <div className="bg-purple-50 border-l-4 border-purple-500 p-4 mb-6 rounded-r-lg flex items-start gap-3">
      <Filter className="text-purple-500 mt-0.5 shrink-0" size={24} />
      <p className="m-0 text-sm text-purple-800 font-medium">
        🎯 <strong>Đối sánh = Độ rộng của lưới đánh cá.</strong> Quăng lưới rộng Broad thì vớt nhiều cá rác. Quăng lưới khít Exact thì toàn cá to. 2024 Google bỏ Broad Match Modifier — luật chơi đổi hoàn toàn.
      </p>
    </div>

    <h3 className="text-2xl font-bold text-gray-900 border-b pb-2">1. Bảng so sánh 3 loại đối sánh – Cập nhật 2026</h3>

    <VisualizerMatchTypes />

    <div className="overflow-x-auto my-6">
      <table className="min-w-full bg-white border border-gray-200 text-sm rounded-lg overflow-hidden shadow-sm">
        <thead className="bg-slate-800 text-white">
          <tr>
            <th className="py-3 px-4 text-left font-bold">Loại</th>
            <th className="py-3 px-4 text-left font-bold">Ký hiệu</th>
            <th className="py-3 px-4 text-left font-bold">Google cho hiển thị khi</th>
            <th className="py-3 px-4 text-left font-bold">Ví dụ khớp</th>
            <th className="py-3 px-4 text-left font-bold">Kiểm soát</th>
          </tr>
        </thead>
        <tbody className="divide-y divide-gray-200">
          <tr className="bg-emerald-50/30">
            <td className="py-3 px-4 font-bold text-emerald-700">1. Exact Match</td>
            <td className="py-3 px-4 font-mono font-bold text-emerald-700">[acrylic nails]</td>
            <td className="py-3 px-4 text-slate-600">Đúng ý định, biến thể gần, sai chính tả, số ít/số nhiều</td>
            <td className="py-3 px-4 font-mono text-xs text-slate-700">acrylic nails, acrylic nail, acrylics nails</td>
            <td className="py-3 px-4 font-bold text-emerald-700">Chặt nhất</td>
          </tr>
          <tr className="bg-blue-50/30">
            <td className="py-3 px-4 font-bold text-blue-700">2. Phrase Match</td>
            <td className="py-3 px-4 font-mono font-bold text-blue-700">"acrylic nails"</td>
            <td className="py-3 px-4 text-slate-600">Cụm từ có nghĩa tương tự, phải có từ khóa hoặc nghĩa tương đương</td>
            <td className="py-3 px-4 font-mono text-xs text-slate-700">acrylic nails near me, best acrylic nails dallas, acrylic nails price</td>
            <td className="py-3 px-4 font-bold text-blue-700">Vừa phải</td>
          </tr>
          <tr className="bg-red-50/30">
            <td className="py-3 px-4 font-bold text-red-700">3. Broad Match</td>
            <td className="py-3 px-4 font-mono font-bold text-red-700">acrylic nails</td>
            <td className="py-3 px-4 text-slate-600">Bất cứ thứ gì Google AI nghĩ là liên quan</td>
            <td className="py-3 px-4 font-mono text-xs text-red-700">gel nails, nail art, nail tech jobs, nail supply store</td>
            <td className="py-3 px-4 font-bold text-red-700">Rộng nhất ⚠</td>
          </tr>
        </tbody>
      </table>
    </div>

    <div className="bg-yellow-50 border border-yellow-200 p-4 rounded-xl my-4 text-sm">
      <h4 className="font-bold text-yellow-800 mt-0 mb-2">⚡ Thay đổi lớn 2024–2026:</h4>
      <ol className="space-y-1 text-yellow-900 m-0 pl-4">
        <li><strong>Bỏ Broad Match Modifier +từ khóa.</strong> Giờ chỉ còn Broad thường.</li>
        <li><strong>Exact không còn "exact":</strong> [acrylic nails] vẫn khớp "acrylic nail salon" nếu Google thấy cùng ý định.</li>
        <li><strong>Phrase mạnh lên:</strong> "acrylic nails" bắt được "gel x vs acrylic" vì cùng ý định so sánh.</li>
      </ol>
    </div>

    <h3 className="text-2xl font-bold text-gray-900 mt-10 border-b pb-2">2. Test thực chiến – Từ khóa "acrylic nails near me"</h3>
    <div className="overflow-x-auto my-4">
      <table className="min-w-full bg-white border border-gray-200 text-sm rounded-lg overflow-hidden shadow-sm">
        <thead className="bg-slate-100 text-slate-700">
          <tr>
            <th className="py-2 px-4 text-left font-bold">Khách search</th>
            <th className="py-2 px-3 text-center font-bold">Exact [ ]</th>
            <th className="py-2 px-3 text-center font-bold">Phrase " "</th>
            <th className="py-2 px-3 text-center font-bold">Broad</th>
            <th className="py-2 px-4 text-left font-bold">Kết quả</th>
          </tr>
        </thead>
        <tbody className="divide-y divide-gray-200 text-sm">
          {[
            { search: 'acrylic nails near me', exact: '✅', phrase: '✅', broad: '✅', result: 'Ra khách', rowClass: 'bg-emerald-50/20' },
            { search: 'acrylic nail near me', exact: '✅', phrase: '✅', broad: '✅', result: 'Ra khách', rowClass: 'bg-emerald-50/20' },
            { search: 'best acrylic nails dallas', exact: '❌', phrase: '✅', broad: '✅', result: 'Ra khách', rowClass: '' },
            { search: 'acrylic full set price', exact: '❌', phrase: '✅', broad: '✅', result: 'Ra khách', rowClass: '' },
            { search: 'gel x nails', exact: '❌', phrase: '❌', broad: '✅', result: '50/50, dễ lỗ', rowClass: 'bg-yellow-50/40' },
            { search: 'nail tech jobs', exact: '❌', phrase: '❌', broad: '✅', result: '🔥 Đốt tiền', rowClass: 'bg-red-50/40' },
            { search: 'nail art designs', exact: '❌', phrase: '✅', broad: '✅', result: '🔥 Đốt tiền', rowClass: 'bg-red-50/40' },
          ].map(({ search, exact, phrase, broad, result, rowClass }) => (
            <tr key={search} className={rowClass}>
              <td className="py-2 px-4 font-mono text-slate-700">{search}</td>
              <td className="py-2 px-3 text-center text-lg">{exact}</td>
              <td className="py-2 px-3 text-center text-lg">{phrase}</td>
              <td className="py-2 px-3 text-center text-lg">{broad}</td>
              <td className={`py-2 px-4 font-medium text-sm ${result.includes('🔥') ? 'text-red-600' : result.includes('50/50') ? 'text-orange-600' : 'text-emerald-700'}`}>{result}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
    <p className="text-red-700 font-medium text-sm bg-red-50 border border-red-200 p-3 rounded-lg">
      ⚠ <strong>Kết luận:</strong> Broad match 2026 = Google tiêu tiền hộ bạn. 1 từ Broad có thể phình ra 1000 search term rác.
    </p>

    <h3 className="text-2xl font-bold text-gray-900 mt-10 border-b pb-2">3. Quy tắc 2024–2026: Ưu tiên Exact + Phrase, Né Broad</h3>
    <p className="font-semibold text-slate-700">Tại sao phải né Broad cho tiệm nail ngân sách &lt;$200/ngày:</p>
    <ol className="space-y-2 text-sm text-slate-700">
      <li><strong>Tốn tiền ngu:</strong> Chạy "acrylic nails" Broad, Google cho khớp "nail school dallas", "press on nails amazon". Bạn trả $4/click cho sinh viên tìm trường học.</li>
      <li><strong>Phá nát Điểm chất lượng:</strong> CTR thấp vì hiển thị sai người → QS tụt 3/10 → CPC ×2 tất cả từ khóa khác.</li>
      <li><strong>Không kiểm soát Search Terms:</strong> Mỗi ngày vào report thấy 200 search term mới, 190 cái phải phủ định. Mất 1h/ngày làm việc vô nghĩa.</li>
    </ol>

    <div className="bg-slate-100 border border-slate-200 p-4 rounded-xl my-4 text-sm">
      <h4 className="font-bold text-slate-700 mt-0 mb-2">Khi nào mới dùng Broad:</h4>
      <ol className="space-y-1 text-slate-700 m-0 pl-4">
        <li>Ngân sách &gt;$500/ngày</li>
        <li>Đã có &gt;100 conversion/tháng, tCPA chạy mượt</li>
        <li>Dùng Broad để Google AI tự tìm mỏ vàng mới — nhưng phải kèm danh sách phủ định 200 từ + bật tCPA chặt.</li>
      </ol>
      <p className="mt-2 font-bold text-red-700 m-0">⛔ Tiệm nail 1–3 chi nhánh: CẤM dùng Broad 3 tháng đầu.</p>
    </div>

    <h3 className="text-2xl font-bold text-gray-900 mt-10 border-b pb-2">4. Công thức phối hợp Exact + Phrase – SKAG 2026</h3>
    <p className="text-sm text-slate-600"><strong>Nguyên tắc SKAG phiên bản 2026:</strong> Single Keyword Ad Group nhưng dùng 2 loại đối sánh.</p>

    <div className="grid grid-cols-1 md:grid-cols-3 gap-4 my-4">
      <div className="bg-white border border-blue-200 p-4 rounded-xl shadow-sm">
        <div className="font-bold text-blue-700 text-sm mb-2">Bước 1: Thăm dò bằng Phrase (7–14 ngày)</div>
        <div className="font-mono text-xs bg-slate-50 p-3 rounded space-y-1 text-slate-700">
          <div>"acrylic nails near me"</div>
          <div>"acrylic nails 77084"</div>
          <div>"acrylic nails price"</div>
          <div>"best acrylic nails"</div>
        </div>
        <p className="text-xs text-slate-500 mt-2 m-0">→ Vào Search Terms Report xem khách thật gõ gì</p>
      </div>
      <div className="bg-white border border-emerald-200 p-4 rounded-xl shadow-sm">
        <div className="font-bold text-emerald-700 text-sm mb-2">Bước 2: Khóa mỏ vàng bằng Exact</div>
        <p className="text-xs text-slate-600 m-0">Vào Search Terms thấy "acrylic nails dallas" ra 5 cuộc gọi, CPA $15.</p>
        <p className="text-xs text-slate-600 m-0 mt-1">→ Add ngay <code>[acrylic nails dallas]</code>, bid cao hơn Phrase 20%.</p>
      </div>
      <div className="bg-white border border-purple-200 p-4 rounded-xl shadow-sm">
        <div className="font-bold text-purple-700 text-sm mb-2">Bước 3: Cấu trúc sau 1 tháng</div>
        <div className="font-mono text-xs bg-slate-50 p-3 rounded space-y-1 text-slate-700">
          <div>[acrylic nails near me] $5.0</div>
          <div>[acrylic nails dallas] $5.5</div>
          <div>[acrylic nails 77084] $4.5</div>
          <div>"acrylic nails price" $4.0</div>
          <div>"best acrylic nails" $4.2</div>
        </div>
        <p className="text-xs text-emerald-600 font-medium mt-2 m-0">80% Exact đã test lời. 20% Phrase bắt mỏ mới.</p>
      </div>
    </div>

    <h3 className="text-2xl font-bold text-gray-900 mt-10 border-b pb-2">5. 4 lỗi chết người với đối sánh 2026</h3>
    <div className="overflow-x-auto my-4">
      <table className="min-w-full bg-white border border-gray-200 text-sm rounded-lg overflow-hidden shadow-sm">
        <thead className="bg-slate-800 text-white">
          <tr>
            <th className="py-2 px-4 text-left font-bold">Lỗi</th>
            <th className="py-2 px-4 text-left font-bold">Ví dụ sai</th>
            <th className="py-2 px-4 text-left font-bold">Hậu quả</th>
            <th className="py-2 px-4 text-left font-bold">Sửa thế nào</th>
          </tr>
        </thead>
        <tbody className="divide-y divide-gray-200">
          {[
            {
              loi: '1. Dùng Broad không có tCPA',
              sai: 'Chạy "nail salon" Broad + Max Clicks',
              hq: '$100/ngày hết trong 2h, toàn click "nail salon jobs"',
              sua: 'Đổi hết sang Phrase + Exact ngay',
            },
            {
              loi: '2. Chỉ dùng Exact',
              sai: 'Chỉ chạy [nail salon near me]',
              hq: 'Mất 70% khách vì bỏ qua "best nail salon near me"',
              sua: 'Luôn cặp Exact + Phrase',
            },
            {
              loi: '3. Không xem Search Terms',
              sai: 'Chạy "acrylic nails" 1 tháng không check',
              hq: 'Không biết đang trả tiền cho "acrylic nails at home kit"',
              sua: 'Tuần check 2 lần, phủ định ngay',
            },
            {
              loi: '4. Bid Exact = Phrase',
              sai: 'Exact $4, Phrase $4',
              hq: 'Google ưu tiên Phrase, Exact không được chạy',
              sua: 'Exact phải bid cao hơn Phrase 15–30%',
            },
          ].map(({ loi, sai, hq, sua }) => (
            <tr key={loi}>
              <td className="py-2 px-4 font-bold text-red-700">{loi}</td>
              <td className="py-2 px-4 font-mono text-xs text-slate-600">{sai}</td>
              <td className="py-2 px-4 text-slate-600">{hq}</td>
              <td className="py-2 px-4 text-emerald-700 font-medium">{sua}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>

    <h3 className="text-2xl font-bold text-gray-900 mt-10 border-b pb-2">6. Cách đọc Search Terms Report để tối ưu đối sánh</h3>
    <p className="text-sm text-slate-600">Vào: <strong>Từ khóa → Cụm từ tìm kiếm</strong>. Nhìn 3 cột: Cụm từ tìm kiếm | Loại đối sánh | Chuyển đổi</p>
    <div className="overflow-x-auto my-4">
      <table className="min-w-full bg-white border border-gray-200 text-sm rounded-lg overflow-hidden shadow-sm">
        <thead className="bg-slate-100 text-slate-700">
          <tr>
            <th className="py-2 px-4 text-left font-bold">Khách gõ</th>
            <th className="py-2 px-3 text-center font-bold">Đối sánh</th>
            <th className="py-2 px-3 text-center font-bold">Conv</th>
            <th className="py-2 px-4 text-left font-bold">Hành động</th>
          </tr>
        </thead>
        <tbody className="divide-y divide-gray-200 text-sm">
          <tr className="bg-emerald-50/30">
            <td className="py-2 px-4 font-mono">acrylic nails dallas</td>
            <td className="py-2 px-3 text-center">Phrase</td>
            <td className="py-2 px-3 text-center font-bold text-emerald-700">3</td>
            <td className="py-2 px-4 text-emerald-700 font-medium">Add [acrylic nails dallas] Exact</td>
          </tr>
          <tr>
            <td className="py-2 px-4 font-mono">acrylic nails near me open sunday</td>
            <td className="py-2 px-3 text-center">Phrase</td>
            <td className="py-2 px-3 text-center font-bold text-emerald-700">1</td>
            <td className="py-2 px-4 text-blue-700 font-medium">Add "nail salon open sunday" Phrase</td>
          </tr>
          <tr className="bg-red-50/30">
            <td className="py-2 px-4 font-mono">acrylic nails at home</td>
            <td className="py-2 px-3 text-center">Phrase</td>
            <td className="py-2 px-3 text-center text-red-500">0</td>
            <td className="py-2 px-4 text-red-700 font-medium">Add "at home" vào Phủ định</td>
          </tr>
          <tr className="bg-red-50/30">
            <td className="py-2 px-4 font-mono">nail tech jobs</td>
            <td className="py-2 px-3 text-center">Phrase</td>
            <td className="py-2 px-3 text-center text-red-500">0</td>
            <td className="py-2 px-4 text-red-700 font-medium">Add "jobs" vào Phủ định cấp Campaign</td>
          </tr>
        </tbody>
      </table>
    </div>
    <p className="text-sm text-slate-600 italic">Quy tắc: Cứ 2 tuần lọc Search Terms có &gt;2 click + 0 conversion → Phủ định hết.</p>

    <div className="bg-slate-800 text-white p-4 rounded-xl my-6 text-sm">
      <p className="m-0 font-bold text-yellow-300">📌 Chốt Bài 16:</p>
      <p className="m-0 mt-1">2024–2026, Broad = Dao 2 lưỡi. Pro thì dùng ra tiền, newbie thì đứt tay. Tiệm nail cứ <strong>Phrase thăm dò → Exact khóa lời</strong>. Giàu rồi tính tiếp.</p>
    </div>

    <InteractiveChecklist
      id="chk16"
      title="Checklist Bài 16"
      tasks={[
        "Tài khoản mới 0–30 ngày: 100% Phrase. Chưa dùng Exact, chưa dùng Broad.",
        "Vào tài khoản, lọc từ khóa nào đang chạy Broad → Pause hết → Thay bằng Phrase cùng nghĩa",
        "Sau 15 conversion: Lấy top 10 search term ra đơn → Add Exact → Bid cao hơn Phrase 20%",
        "Từ khóa Brand: Dùng Exact [tên tiệm bạn] để chặn đối thủ, CPC rẻ",
        "7 ngày sau khi chuyển Broad → Phrase: So sánh CPA xem giảm bao nhiêu %",
      ]}
    />
  </div>
);

// ─────────────────────────────────────────────────────────────────────────────
export const Lesson17Content = () => (
  <div className="prose prose-blue max-w-none text-gray-800">
    <div className="bg-red-50 border-l-4 border-red-500 p-4 mb-6 rounded-r-lg flex items-start gap-3">
      <Shield className="text-red-500 mt-0.5 shrink-0" size={24} />
      <p className="m-0 text-sm text-red-800 font-medium">
        🎯 <strong>Từ khóa phủ định = Tiết kiệm 30–50% ngân sách.</strong> Không cài phủ định thì 100 click có 40 click rác từ học sinh, thợ nail tìm việc, người muốn tự làm ở nhà.
      </p>
    </div>

    <h3 className="text-2xl font-bold text-gray-900 border-b pb-2">1. Từ khóa phủ định là gì? Tại sao phải có ngay ngày đầu?</h3>
    <div className="bg-slate-50 border border-slate-200 p-5 rounded-xl my-4">
      <p className="font-bold text-slate-700 m-0 mb-2">📌 Định nghĩa:</p>
      <p className="text-sm text-slate-600 m-0">Từ khóa phủ định = Ra lệnh cho Google: <em>"Khách search có chữ này thì ĐỪNG hiện ads của tao."</em></p>

      <p className="font-bold text-red-700 mt-4 mb-2 m-0">💥 Ví dụ toang nếu không có phủ định:</p>
      <div className="bg-red-50 border border-red-200 p-3 rounded text-sm text-red-800 font-mono">
        Bạn chạy "nail salon" (Phrase)<br/>
        → Khách search: "nail salon jobs near me"<br/>
        → Ads bạn vẫn hiện → Họ click → Mất $4 → Không bao giờ đặt lịch
      </div>

      <p className="mt-3 text-sm text-slate-700 m-0">
        <strong>Thực tế tiệm nail Mỹ:</strong> Không cài phủ định, 1 ngày mất <strong>$15–$30 cho click rác</strong>. 1 tháng mất $900 mà không ra 1 khách.
      </p>
    </div>

    <h3 className="text-2xl font-bold text-gray-900 mt-10 border-b pb-2">2. 3 cấp độ từ khóa phủ định – Cài ở đâu cho đúng</h3>
    <div className="overflow-x-auto my-4">
      <table className="min-w-full bg-white border border-gray-200 text-sm rounded-lg overflow-hidden shadow-sm">
        <thead className="bg-slate-800 text-white">
          <tr>
            <th className="py-3 px-4 text-left font-bold">Cấp độ</th>
            <th className="py-3 px-4 text-left font-bold">Tác động</th>
            <th className="py-3 px-4 text-left font-bold">Dùng khi nào</th>
            <th className="py-3 px-4 text-left font-bold">Cách vào</th>
          </tr>
        </thead>
        <tbody className="divide-y divide-gray-200">
          <tr className="bg-red-50/30">
            <td className="py-3 px-4 font-bold text-red-700">1. Tài khoản</td>
            <td className="py-3 px-4 text-slate-600">Chặn toàn bộ tài khoản, tất cả campaign</td>
            <td className="py-3 px-4 font-medium text-red-700">Từ siêu rác: free, cheap, diy, job</td>
            <td className="py-3 px-4 text-slate-600 text-xs">MCC → Công cụ → Danh sách từ khóa phủ định</td>
          </tr>
          <tr className="bg-orange-50/30">
            <td className="py-3 px-4 font-bold text-orange-700">2. Chiến dịch</td>
            <td className="py-3 px-4 text-slate-600">Chặn riêng 1 campaign</td>
            <td className="py-3 px-4 text-orange-700">Campaign Search thì chặn youtube, tiktok</td>
            <td className="py-3 px-4 text-slate-600 text-xs">Chiến dịch → Từ khóa → Từ khóa phủ định</td>
          </tr>
          <tr className="bg-yellow-50/30">
            <td className="py-3 px-4 font-bold text-yellow-700">3. Nhóm quảng cáo</td>
            <td className="py-3 px-4 text-slate-600">Chặn riêng 1 Ad Group</td>
            <td className="py-3 px-4 text-yellow-700">Ad Group "Acrylic" chặn "gel x", "dip"</td>
            <td className="py-3 px-4 text-slate-600 text-xs">Nhóm QC → Từ khóa → Từ khóa phủ định</td>
          </tr>
        </tbody>
      </table>
    </div>
    <p className="text-sm text-slate-600 italic">
      <strong>Quy tắc:</strong> Từ càng rác thì đẩy lên cấp càng cao. "jobs" cho lên Tài khoản. "gel x" chỉ chặn ở Ad Group "Acrylic".
    </p>

    <h3 className="text-2xl font-bold text-gray-900 mt-10 border-b pb-2">3. Bộ 100+ từ khóa phủ định cho tiệm nail Mỹ – Copy dùng ngay</h3>

    <div className="bg-blue-50 border border-blue-200 p-4 rounded-xl mb-4 text-sm">
      <strong className="text-blue-800">Bước 1 – Tạo Danh sách dùng chung trong MCC:</strong>
      <p className="text-blue-800 m-0 mt-1">MCC → Công cụ → Danh sách từ khóa phủ định → + Danh sách mới → Tên <code className="bg-blue-100 px-1 rounded">"Nail - Global Negative - 2026"</code> → Dán list dưới → Áp dụng cho tất cả tài khoản con.</p>
    </div>

    <div className="grid grid-cols-1 md:grid-cols-2 gap-4 my-4">
      {[
        {
          label: 'A. Nhóm TÌM VIỆC',
          pct: '~40% click rác',
          color: 'red',
          words: 'job, jobs, career, careers, employment, hiring, hire, apply, application\nsalary, pay, wage, indeed, ziprecruiter, linkedin\nnail tech job, nail technician job, hiring nail tech',
        },
        {
          label: 'B. Nhóm HỌC NGHỀ & TỰ LÀM',
          pct: '~30% click rác',
          color: 'orange',
          words: 'school, schools, class, classes, course, courses, training, license\nhow to, diy, at home, yourself, tutorial, youtube, video\nlearn, student, kit, beginner, step by step',
        },
        {
          label: 'C. Nhóm MUA SỈ & ĐỒ NGHỀ',
          pct: 'Click đắt, 0 khách',
          color: 'amber',
          words: 'supply, supplies, wholesale, distributor, vendor, warehouse\naliexpress, alibaba, amazon, shein, temu\nbulk, gallon, liter, equipment, furniture, chair',
        },
        {
          label: 'D. Nhóm GIÁ RẺ & MIỄN PHÍ',
          pct: 'Khách không đúng tệp',
          color: 'yellow',
          words: 'cheap, cheaply, free, dollar, $1, discount, coupon, groupon\nwalmart, costco, target\nbudget, affordable, low cost',
        },
        {
          label: 'E. Nhóm ĐỐI THỦ & FRANCHISE LỚN',
          pct: 'Tránh click rác',
          color: 'purple',
          words: 'regal nails, pro nails, happy nails, solar nails, fancy nails\nquyen, lisa, lee nails\n[+ 10 tiệm gần bạn 2 miles]',
        },
        {
          label: 'F. Nhóm SAI DỊCH VỤ',
          pct: 'Không phải nail',
          color: 'indigo',
          words: 'hair, haircut, barber, spa, massage, facial, waxing, lashes, brows\ntattoo, piercing',
        },
        {
          label: 'G. Nhóm NGHIÊN CỨU & GIẢI TRÍ',
          pct: 'Chỉ xem, không mua',
          color: 'slate',
          words: 'ideas, designs, pictures, pics, images, pinterest, instagram\nquotes, meaning, definition, what is, vs, difference between\nfungus, infection, health, doctor, medical',
        },
        {
          label: 'H. Nhóm TỆP TRẺ EM/NGƯỜI GIÀ',
          pct: 'Không đúng tệp',
          color: 'gray',
          words: 'kids, children, baby, toddler, senior, elderly, medicare',
        },
      ].map(({ label, pct, color, words }) => {
        const colorMap: Record<string, string> = {
          red: 'border-red-200 bg-red-50 text-red-700',
          orange: 'border-orange-200 bg-orange-50 text-orange-700',
          amber: 'border-amber-200 bg-amber-50 text-amber-700',
          yellow: 'border-yellow-200 bg-yellow-50 text-yellow-700',
          purple: 'border-purple-200 bg-purple-50 text-purple-700',
          indigo: 'border-indigo-200 bg-indigo-50 text-indigo-700',
          slate: 'border-slate-200 bg-slate-50 text-slate-700',
          gray: 'border-gray-200 bg-gray-50 text-gray-700',
        };
        return (
          <div key={label} className={`border rounded-xl p-4 ${colorMap[color]}`}>
            <div className="font-bold text-sm mb-1">{label}</div>
            <div className="text-xs opacity-70 mb-2 italic">{pct}</div>
            <div className="font-mono text-[11px] bg-white/60 p-2 rounded whitespace-pre-line leading-5">{words}</div>
          </div>
        );
      })}
    </div>

    <h3 className="text-2xl font-bold text-gray-900 mt-10 border-b pb-2">4. Quy tắc đối sánh cho phủ định – Khác với từ khóa thường</h3>
    <div className="overflow-x-auto my-4">
      <table className="min-w-full bg-white border border-gray-200 text-sm rounded-lg overflow-hidden shadow-sm">
        <thead className="bg-slate-100 text-slate-700">
          <tr>
            <th className="py-2 px-4 text-left font-bold">Loại đối sánh</th>
            <th className="py-2 px-3 text-left font-bold">Cú pháp</th>
            <th className="py-2 px-4 text-left font-bold">Chặn được gì</th>
            <th className="py-2 px-4 text-left font-bold">Dùng cho tiệm nail</th>
          </tr>
        </thead>
        <tbody className="divide-y divide-gray-200 text-sm">
          <tr className="bg-emerald-50/30">
            <td className="py-2 px-4 font-bold text-emerald-700">Đối sánh rộng</td>
            <td className="py-2 px-3 font-mono text-slate-700">jobs</td>
            <td className="py-2 px-4 text-slate-600">nail salon jobs, jobs at nail salon, part time jobs nail</td>
            <td className="py-2 px-4 font-bold text-emerald-700">✅ Dùng 90%. Chặn hết biến thể.</td>
          </tr>
          <tr>
            <td className="py-2 px-4 font-bold text-blue-700">Đối sánh cụm</td>
            <td className="py-2 px-3 font-mono text-slate-700">"nail school"</td>
            <td className="py-2 px-4 text-slate-600">nail school near me, best nail school</td>
            <td className="py-2 px-4 text-blue-700">Dùng khi muốn chặn chính xác cụm</td>
          </tr>
          <tr className="bg-red-50/30">
            <td className="py-2 px-4 font-bold text-red-700">Đối sánh chính xác</td>
            <td className="py-2 px-3 font-mono text-slate-700">[free]</td>
            <td className="py-2 px-4 text-slate-600">Chỉ chặn khi khách search đúng "free"</td>
            <td className="py-2 px-4 text-red-700">⚠ Hạn chế dùng. Dễ lọt biến thể.</td>
          </tr>
        </tbody>
      </table>
    </div>
    <p className="text-sm text-slate-600 italic">
      <strong>Mẹo:</strong> 95% từ phủ định cứ để Đối sánh rộng. Google tự chặn hết biến thể cho bạn.
    </p>

    <h3 className="text-2xl font-bold text-gray-900 mt-10 border-b pb-2">5. Quy trình 3 bước thêm phủ định – Làm mỗi tuần 10 phút</h3>
    <div className="space-y-3 my-4">
      <div className="bg-slate-50 border border-slate-200 p-4 rounded-lg">
        <h4 className="font-bold text-slate-700 m-0 text-sm">Bước 1: Xem Search Terms Report</h4>
        <p className="text-sm m-0 mt-1 text-slate-600">Google Ads → Chiến dịch → Thông tin chi tiết → Cụm từ tìm kiếm. Lọc 30 ngày, Sắp xếp theo Chi phí cao → thấp.</p>
      </div>
      <div className="bg-slate-50 border border-slate-200 p-4 rounded-lg">
        <h4 className="font-bold text-slate-700 m-0 text-sm">Bước 2: Dùng quy tắc "3 Không" để loại</h4>
        <p className="text-sm m-0 mt-1 text-slate-600">Gặp từ khóa có 3 dấu hiệu sau thì phủ định ngay:</p>
        <ol className="text-sm text-slate-700 m-0 mt-1 pl-4 space-y-1">
          <li><strong>Không liên quan dịch vụ:</strong> nail tech resume</li>
          <li><strong>Không ra tiền:</strong> how to remove gel nails at home → Click $3, CVR 0%</li>
          <li><strong>Không đúng tệp khách:</strong> cheap nail salon → Khách ham rẻ, khó upsale</li>
        </ol>
      </div>
      <div className="bg-slate-50 border border-slate-200 p-4 rounded-lg">
        <h4 className="font-bold text-slate-700 m-0 text-sm">Bước 3: Add vào đúng cấp</h4>
        <p className="text-sm m-0 mt-1 text-slate-600">
          Từ rác chung (jobs, diy, school) → Add vào <strong>Danh sách cấp Tài khoản</strong>.<br/>
          Từ lẫn dịch vụ (Ad Group "Acrylic" thấy "gel x") → Add "gel x" vào <strong>phủ định cấp Ad Group</strong>.
        </p>
        <p className="text-sm text-slate-500 mt-2 m-0 italic">Tần suất: Tuần 1–2 check mỗi ngày. Tuần 3–4 check 2 lần. Sau tháng 1 check 1 lần/tuần.</p>
      </div>
    </div>

    <h3 className="text-2xl font-bold text-gray-900 mt-10 border-b pb-2">6. 4 sai lầm khiến phủ định vô tác dụng</h3>
    <div className="overflow-x-auto my-4">
      <table className="min-w-full bg-white border border-gray-200 text-sm rounded-lg overflow-hidden shadow-sm">
        <thead className="bg-slate-800 text-white">
          <tr>
            <th className="py-2 px-4 text-left font-bold">Lỗi</th>
            <th className="py-2 px-4 text-left font-bold">Hậu quả</th>
            <th className="py-2 px-4 text-left font-bold">Sửa thế nào</th>
          </tr>
        </thead>
        <tbody className="divide-y divide-gray-200">
          <tr>
            <td className="py-2 px-4 font-bold text-red-700">1. Phủ định từ khóa đang chạy</td>
            <td className="py-2 px-4 text-slate-600">Bạn chạy "acrylic nails", lại phủ định "acrylic" → Ads tắt</td>
            <td className="py-2 px-4 text-emerald-700">Check trước khi add. Dùng tool "Xung đột từ khóa" trong Google Ads</td>
          </tr>
          <tr className="bg-slate-50/30">
            <td className="py-2 px-4 font-bold text-red-700">2. Chỉ phủ định đối sánh chính xác</td>
            <td className="py-2 px-4 text-slate-600">Phủ định [jobs] thì "nail jobs" vẫn lọt</td>
            <td className="py-2 px-4 text-emerald-700">Luôn dùng đối sánh rộng cho phủ định</td>
          </tr>
          <tr>
            <td className="py-2 px-4 font-bold text-red-700">3. Không phủ định tên đối thủ gần nhà</td>
            <td className="py-2 px-4 text-slate-600">Khách search tiệm cách 0.5 mile, click $5 rồi thoát vì xa</td>
            <td className="py-2 px-4 text-emerald-700">Search "nail salon near me" Maps, lấy 10 tên gần nhất cho vào phủ định</td>
          </tr>
          <tr className="bg-slate-50/30">
            <td className="py-2 px-4 font-bold text-red-700">4. Quên phủ định Vòng Ngoài</td>
            <td className="py-2 px-4 text-slate-600">Chạy "nail salon" không chặn "designs, ideas" → 50% ngân sách bay</td>
            <td className="py-2 px-4 text-emerald-700">Bài 14 + Bài 17 luôn làm cùng lúc</td>
          </tr>
        </tbody>
      </table>
    </div>

    <div className="bg-amber-50 border border-amber-300 p-5 rounded-xl my-6">
      <h4 className="font-bold text-amber-800 mt-0 mb-3 text-base flex items-center gap-2">
        <CheckCircle2 size={18} /> Checklist trước khi bật Campaign đầu tiên
      </h4>
      <p className="text-sm text-amber-900 mb-2 m-0">Tick đủ 5 ô này mới bấm "Đăng":</p>
      <ol className="space-y-1 text-sm text-amber-900 m-0 pl-4">
        <li>Đã tạo Danh sách phủ định cấp Tài khoản "Nail - Global" và áp dụng</li>
        <li>Danh sách có tối thiểu 50 từ: job, school, diy, how to, supply, cheap, free, wholesale</li>
        <li>Đã phủ định tên 10 đối thủ gần tiệm nhất</li>
        <li>Mỗi Ad Group có phủ định chéo dịch vụ: Ad Group Acrylic chặn "gel x, dip powder"</li>
        <li>Đã bật cảnh báo: Cột → Sửa đổi cột → Thêm "% chi phí từ tìm kiếm không hợp lệ". Nếu &gt;10% thì báo động.</li>
      </ol>
    </div>

    <div className="bg-slate-800 text-white p-4 rounded-xl my-6 text-sm">
      <p className="m-0 font-bold text-yellow-300">📌 Chốt Bài 17:</p>
      <p className="m-0 mt-1">Từ khóa = Chân ga. Từ khóa phủ định = Chân phanh. Chạy xe chỉ biết đạp ga thì đâm tường. Cài xong bộ phủ định này là bạn tiết kiệm ngay <strong>$300–$800/tháng</strong>.</p>
    </div>

    <div className="bg-blue-50 border border-blue-200 p-4 rounded-xl my-4 text-sm">
      <h4 className="font-bold text-blue-800 mt-0 mb-2">📝 Bài tập thực chiến:</h4>
      <ol className="space-y-1 text-blue-900 m-0 pl-4">
        <li>Vào Google Ads → Search Terms Report 30 ngày qua</li>
        <li>Export ra Excel, lọc những từ tốn &gt;$10 mà 0 conversion</li>
        <li>Xác định 10 từ tốn tiền nhất → Phủ định theo đúng cấp (Tài khoản / Campaign / Ad Group)</li>
      </ol>
    </div>

    <InteractiveChecklist
      id="chk17"
      title="Checklist Bài 17"
      tasks={[
        "Tạo Danh sách phủ định cấp Tài khoản tên 'Nail - Global Negative' với ≥50 từ",
        "Copy 8 nhóm từ phủ định (A–H) vào danh sách và áp dụng cho toàn bộ campaigns",
        "Search Maps tìm 10 tiệm nail gần nhà trong 2 miles → Add tên vào phủ định",
        "Mỗi Ad Group: Add phủ định chéo dịch vụ (Acrylic chặn 'gel x, dip powder')",
        "Tuần này: Xem Search Terms Report, Export ra Excel, phủ định ít nhất 20 từ rác",
        "Sau 30 ngày: So sánh CPA trước/sau khi cài phủ định",
      ]}
    />
  </div>
);
