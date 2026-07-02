import React from 'react';
import {
  TrendingUp, TrendingDown, AlertTriangle, AlertOctagon,
  CheckCircle2, DollarSign, BarChart, Target, Zap, Search
} from 'lucide-react';
import { InteractiveChecklist } from './InteractiveChecklist';

// ─── Bài 28 Visualizer: Impression Share breakdown ───────────────────────────
const VisualizerImpressionShare = () => (
  <div className="bg-slate-50 border border-slate-200 rounded-xl p-5 my-6">
    <h4 className="font-bold text-slate-700 mb-4 text-sm uppercase tracking-wide">📊 Case Study: Tiệm Acrylic 77084 – Phân tích Impression Share</h4>
    <div className="space-y-3">
      {[
        { label: '✅ % Hiển thị thực tế', pct: 22, color: 'bg-emerald-500', text: 'text-emerald-700', note: '22% – Bạn đang có' },
        { label: '💸 Mất do Ngân sách', pct: 31, color: 'bg-amber-400', text: 'text-amber-700', note: '31% – Tăng tiền lấy lại' },
        { label: '📉 Mất do Xếp hạng', pct: 47, color: 'bg-red-400', text: 'text-red-700', note: '47% – Sửa Điểm CL lấy lại' },
      ].map(({ label, pct, color, text, note }) => (
        <div key={label}>
          <div className="flex justify-between text-xs mb-1">
            <span className={`font-medium ${text}`}>{label}</span>
            <span className={`font-bold ${text}`}>{note}</span>
          </div>
          <div className="w-full bg-slate-200 rounded-full h-5">
            <div className={`${color} h-5 rounded-full flex items-center justify-end pr-2`} style={{ width: `${pct}%` }}>
              <span className="text-white text-xs font-bold">{pct}%</span>
            </div>
          </div>
        </div>
      ))}
    </div>
    <p className="text-xs text-slate-500 mt-4 italic">Tổng 22 + 31 + 47 = 100%. Mất 78% khách vì ngân sách + xếp hạng yếu.</p>
  </div>
);

// ─── Bài 29 Visualizer: SKAG vs STAG data flow ───────────────────────────────
const VisualizerSKAGvsSTAG = () => (
  <div className="grid grid-cols-1 md:grid-cols-2 gap-4 my-6">
    <div className="border-2 border-red-200 rounded-xl p-4 bg-red-50">
      <div className="font-bold text-red-700 mb-3 flex items-center gap-2 text-base">
        🚲 SKAG – Kiểu cũ 2015
      </div>
      <div className="space-y-1 text-xs font-mono">
        {['[acrylic nails 77084]', '[acrylic nails near me]', '[acrylic full set 77084]', '[best acrylic nails]', '... (20 Ad Group)'].map(kw => (
          <div key={kw} className="bg-white border border-red-200 rounded px-2 py-1 text-red-600">{kw}</div>
        ))}
      </div>
      <div className="mt-3 text-xs text-red-700 bg-red-100 rounded p-2">
        ❌ Mỗi Ad Group chỉ 5-10 impression/ngày → AI đói data → CPA cao
      </div>
    </div>
    <div className="border-2 border-emerald-300 rounded-xl p-4 bg-emerald-50">
      <div className="font-bold text-emerald-700 mb-3 flex items-center gap-2 text-base">
        🚗 STAG – Chuẩn 2026
      </div>
      <div className="bg-white border border-emerald-300 rounded p-3 text-xs font-mono">
        <div className="font-bold text-emerald-800 mb-2">Ad Group: Acrylic Theme</div>
        {['acrylic nails', 'acrylic full set', 'acrylic nails 77084', 'acrylic nails near me', 'best acrylic nails'].map(kw => (
          <div key={kw} className="text-emerald-700 py-0.5">• {kw}</div>
        ))}
        <div className="text-slate-400 mt-1">Broad + Phrase Match</div>
      </div>
      <div className="mt-3 text-xs text-emerald-700 bg-emerald-100 rounded p-2">
        ✅ 1 Ad Group 200 impression/ngày → AI no data → CPA giảm 40%
      </div>
    </div>
  </div>
);

// ─── Bài 30 Visualizer: CPA tăng – quy trình chẩn đoán ──────────────────────
const VisualizerCPADiagnosis = () => (
  <div className="bg-slate-50 border border-slate-200 rounded-xl p-5 my-6">
    <h4 className="font-bold text-slate-700 mb-4 text-sm">⚡ Quy trình chẩn đoán CPA tăng – Làm đúng thứ tự</h4>
    <div className="flex flex-col gap-2">
      {[
        { step: '1', label: 'Tracking bị gãy?', sub: 'Conv = 0 → Sửa GTag/GTM trước', color: 'bg-purple-100 border-purple-300 text-purple-800' },
        { step: '2', label: 'Search Terms rác?', sub: 'Click tăng, Conv giữ nguyên → Phủ định ngay', color: 'bg-red-100 border-red-300 text-red-800' },
        { step: '3', label: 'Trang đích chết?', sub: 'CTR ok, CVR tụt → Test book thử, check tốc độ', color: 'bg-orange-100 border-orange-300 text-orange-800' },
        { step: '4', label: 'Đối thủ mới đè?', sub: 'CPC tăng, IS tụt → Auction Insights', color: 'bg-amber-100 border-amber-300 text-amber-800' },
        { step: '5', label: 'Thị trường theo mùa?', sub: 'Bão/lễ/trend → Google Trends kiểm tra', color: 'bg-blue-100 border-blue-300 text-blue-800' },
      ].map(({ step, label, sub, color }) => (
        <div key={step} className={`flex items-center gap-3 border rounded-lg px-4 py-2 ${color}`}>
          <div className="font-black text-lg w-6 shrink-0">{step}</div>
          <div>
            <div className="font-bold text-sm">{label}</div>
            <div className="text-xs opacity-80">{sub}</div>
          </div>
        </div>
      ))}
    </div>
  </div>
);

// ─── Lesson 28 ────────────────────────────────────────────────────────────────
export const Lesson28Content = () => (
  <div className="prose prose-blue max-w-none text-gray-800">
    <div className="bg-amber-50 border-l-4 border-amber-500 p-4 mb-6 rounded-r-lg flex items-start gap-3">
      <DollarSign className="text-amber-500 mt-0.5 shrink-0" size={24} />
      <p className="m-0 text-sm text-amber-800 font-medium">
        💰 <strong>Tăng ngân sách đúng = Doanh thu x3, lợi nhuận giữ.</strong> Tăng sai = CPA x2 trong 7 ngày. 90% chủ tiệm thấy ra khách là tăng $20 → $100 ngay — máy học loạn, CPA vọt $18 lên $45.
      </p>
    </div>

    <h3 className="text-2xl font-bold text-gray-900 border-b pb-2">1. 3 Dấu hiệu VÀNG – Được tăng ngân sách ngay</h3>
    <p>Vào: <strong>Chiến dịch → Cột "Trạng thái"</strong>. Thấy <strong>"Bị giới hạn bởi ngân sách"</strong> = Google đang nói: "Đưa thêm tiền, tôi bán thêm khách."</p>

    <div className="overflow-x-auto my-6">
      <table className="min-w-full bg-white border border-gray-200 text-sm rounded-lg overflow-hidden shadow-sm">
        <thead className="bg-emerald-700 text-white">
          <tr>
            <th className="py-3 px-4 text-left font-bold">Dấu hiệu</th>
            <th className="py-3 px-4 text-left font-bold">Xem ở đâu</th>
            <th className="py-3 px-4 text-left font-bold">Con số đạt chuẩn</th>
            <th className="py-3 px-4 text-left font-bold">Hành động</th>
          </tr>
        </thead>
        <tbody className="divide-y divide-gray-200">
          <tr className="bg-emerald-50/40">
            <td className="py-3 px-4 font-bold text-emerald-800">1. Limited by Budget</td>
            <td className="py-3 px-4 text-slate-600">Cột Trạng thái</td>
            <td className="py-3 px-4">Hiện 3 ngày liên tiếp</td>
            <td className="py-3 px-4 font-medium text-emerald-700">Tăng 20–30%. VD: $50 → $65</td>
          </tr>
          <tr>
            <td className="py-3 px-4 font-bold text-emerald-800">2. IS mất do Ngân sách &gt;10%</td>
            <td className="py-3 px-4 text-slate-600">Cột → Cạnh tranh → "% hiển thị bị mất do ngân sách"</td>
            <td className="py-3 px-4 font-bold text-red-600">&gt;15%</td>
            <td className="py-3 px-4">Đang mất 15% khách vì hết tiền giữa ngày. Tăng ngay</td>
          </tr>
          <tr className="bg-emerald-50/40">
            <td className="py-3 px-4 font-bold text-emerald-800">3. CPA thực tế &lt; tCPA 20%</td>
            <td className="py-3 px-4 text-slate-600">Báo cáo 7 ngày</td>
            <td className="py-3 px-4">tCPA $20 → thực tế $15</td>
            <td className="py-3 px-4 font-medium text-emerald-700">Dư địa lợi nhuận. Tăng 30–50% để hốt thêm</td>
          </tr>
        </tbody>
      </table>
    </div>

    <div className="bg-emerald-50 border border-emerald-200 rounded-xl p-4 my-4">
      <p className="font-bold text-emerald-800 mb-1">📌 Ví dụ thực tế: Camp "Acrylic 77084" ngân sách $40/ngày</p>
      <ul className="text-sm text-emerald-900 space-y-1 mb-0">
        <li>Trạng thái: <strong>Limited by Budget</strong></li>
        <li>% hiển thị mất do ngân sách: <strong>28%</strong></li>
        <li>CPA 7 ngày: <strong>$16</strong>. Target $20 → Đang lời $4/khách</li>
        <li className="font-bold text-emerald-700">→ Tăng lên $60/ngày ngay. Đang bỏ lỡ 28% khách mà CPA vẫn có lời.</li>
      </ul>
    </div>

    <h3 className="text-2xl font-bold text-gray-900 mt-10 border-b pb-2">2. 4 Dấu hiệu ĐỎ – Cấm tăng ngân sách, tăng là toang</h3>

    <div className="overflow-x-auto my-6">
      <table className="min-w-full bg-white border border-gray-200 text-sm rounded-lg overflow-hidden shadow-sm">
        <thead className="bg-red-700 text-white">
          <tr>
            <th className="py-3 px-4 text-left font-bold">Dấu hiệu đỏ</th>
            <th className="py-3 px-4 text-left font-bold">Xem ở đâu</th>
            <th className="py-3 px-4 text-left font-bold">Tại sao cấm tăng</th>
            <th className="py-3 px-4 text-left font-bold">Sửa gì trước</th>
          </tr>
        </thead>
        <tbody className="divide-y divide-gray-200">
          <tr className="bg-red-50/30">
            <td className="py-3 px-4 font-bold text-red-800">1. IS mất do Xếp hạng &gt;40%</td>
            <td className="py-3 px-4 text-slate-600">Cột "% hiển thị mất do xếp hạng"</td>
            <td className="py-3 px-4 text-red-700">Ads yếu: Điểm CL thấp/bid thấp. Đổ thêm tiền vẫn thua</td>
            <td className="py-3 px-4">Sửa Điểm CL: Sửa ads + trang đích. Xem Bài 22</td>
          </tr>
          <tr>
            <td className="py-3 px-4 font-bold text-red-800">2. CPA cao hơn target 30%</td>
            <td className="py-3 px-4 text-slate-600">Target $20, thực tế $28</td>
            <td className="py-3 px-4 text-red-700">Camp chưa tối ưu. Scale = nhân cái lỗ</td>
            <td className="py-3 px-4">Tối ưu Search Terms, RLSA, Trang đích trước</td>
          </tr>
          <tr className="bg-red-50/30">
            <td className="py-3 px-4 font-bold text-red-800">3. CVR &lt;3%</td>
            <td className="py-3 px-4 text-slate-600">Cột CVR</td>
            <td className="py-3 px-4 text-red-700">100 click ra 2 khách. Trang đích tệ / từ khóa sai</td>
            <td className="py-3 px-4">Sửa web trước. Xem Bài 20</td>
          </tr>
          <tr>
            <td className="py-3 px-4 font-bold text-red-800">4. Chưa đủ 30 conversion</td>
            <td className="py-3 px-4 text-slate-600">Công cụ → Chuyển đổi</td>
            <td className="py-3 px-4 text-red-700">Máy học chưa hiểu. Tăng tiền = dạy máy học sai</td>
            <td className="py-3 px-4">Đợi đủ 30 conv hãy scale</td>
          </tr>
        </tbody>
      </table>
    </div>

    <div className="bg-slate-800 text-white p-4 rounded-xl my-4 text-sm font-medium">
      📐 <strong>Quy tắc vàng:</strong> % mất do <span className="text-amber-300">Ngân sách</span> cao → Tăng tiền. % mất do <span className="text-red-300">Xếp hạng</span> cao → Tăng chất lượng.
    </div>

    <h3 className="text-2xl font-bold text-gray-900 mt-10 border-b pb-2">3. Công thức tăng ngân sách 20-30-50 an toàn</h3>
    <p className="text-sm text-slate-600"><strong>Nguyên tắc máy học Google 2026:</strong> Tăng &gt;50%/lần = Reset giai đoạn học 3-7 ngày → CPA nhảy loạn.</p>

    <div className="overflow-x-auto my-6">
      <table className="min-w-full bg-white border border-gray-200 text-sm rounded-lg overflow-hidden shadow-sm">
        <thead className="bg-slate-800 text-white">
          <tr>
            <th className="py-3 px-4 text-left font-bold">Ngân sách hiện tại</th>
            <th className="py-3 px-4 text-left font-bold">% tăng mỗi lần</th>
            <th className="py-3 px-4 text-left font-bold">Tần suất tăng</th>
            <th className="py-3 px-4 text-left font-bold">Ví dụ 30 ngày</th>
          </tr>
        </thead>
        <tbody className="divide-y divide-gray-200">
          <tr>
            <td className="py-3 px-4 font-bold text-blue-700">&lt;$50/ngày</td>
            <td className="py-3 px-4 font-bold text-emerald-600">30%</td>
            <td className="py-3 px-4">3 ngày/lần</td>
            <td className="py-3 px-4 font-mono text-xs text-slate-600">$30 → $39 → $50 → $65 → $84</td>
          </tr>
          <tr className="bg-slate-50">
            <td className="py-3 px-4 font-bold text-blue-700">$50–$150/ngày</td>
            <td className="py-3 px-4 font-bold text-emerald-600">20%</td>
            <td className="py-3 px-4">4 ngày/lần</td>
            <td className="py-3 px-4 font-mono text-xs text-slate-600">$60 → $72 → $86 → $103 → $124</td>
          </tr>
          <tr>
            <td className="py-3 px-4 font-bold text-blue-700">&gt;$150/ngày</td>
            <td className="py-3 px-4 font-bold text-emerald-600">15%</td>
            <td className="py-3 px-4">7 ngày/lần</td>
            <td className="py-3 px-4 font-mono text-xs text-slate-600">$200 → $230 → $264 → $303</td>
          </tr>
        </tbody>
      </table>
    </div>

    <div className="bg-blue-50 border border-blue-200 rounded-xl p-4 my-4 text-sm">
      <p className="font-bold text-blue-800 mb-1">⚡ Khi nào được tăng 50%? Chỉ khi CẢ 3 điều kiện đúng:</p>
      <ol className="text-blue-900 space-y-1 mb-0">
        <li>Impression Share &lt;30% do Ngân sách</li>
        <li>CPA &lt;70% target (Target $20 → thực tế $13)</li>
        <li>Đang dùng tCPA/tROAS, không phải Manual CPC</li>
      </ol>
    </div>

    <h3 className="text-2xl font-bold text-gray-900 mt-10 border-b pb-2">4. Đọc báo cáo Impression Share để quyết định tăng tiền hay tăng chất lượng</h3>
    <p className="text-sm text-slate-600">Vào: <strong>Cột → Sửa đổi cột → Cạnh tranh → Tick 4 cột</strong></p>

    <VisualizerImpressionShare />

    <div className="overflow-x-auto my-6">
      <table className="min-w-full bg-white border border-gray-200 text-sm rounded-lg overflow-hidden shadow-sm">
        <thead className="bg-slate-800 text-white">
          <tr>
            <th className="py-3 px-4 text-left font-bold">Cột</th>
            <th className="py-3 px-4 text-left font-bold">Ý nghĩa</th>
            <th className="py-3 px-4 text-left font-bold">Tiệm 77084 – Case study</th>
          </tr>
        </thead>
        <tbody className="divide-y divide-gray-200">
          <tr>
            <td className="py-3 px-4 font-bold text-slate-700">1. % hiển thị tìm kiếm</td>
            <td className="py-3 px-4 text-slate-600">Bạn xuất hiện bao nhiêu % khi có người search</td>
            <td className="py-3 px-4 font-mono font-bold text-blue-700">22% = 1000 search → bạn hiện 220 lần</td>
          </tr>
          <tr className="bg-slate-50">
            <td className="py-3 px-4 font-bold text-amber-700">2. % mất do ngân sách</td>
            <td className="py-3 px-4 text-slate-600">Hết tiền giữa ngày nên mất khách</td>
            <td className="py-3 px-4 font-bold text-amber-700">31% → Mất 310 lần hiện. <span className="text-emerald-600">Phải tăng ngân sách</span></td>
          </tr>
          <tr>
            <td className="py-3 px-4 font-bold text-red-700">3. % mất do xếp hạng</td>
            <td className="py-3 px-4 text-slate-600">Bid thấp hoặc Điểm CL thấp nên thua</td>
            <td className="py-3 px-4 font-bold text-red-700">47% → Mất 470 lần vì ads yếu. <span className="text-orange-600">Phải sửa ads/CL</span></td>
          </tr>
          <tr className="bg-slate-50">
            <td className="py-3 px-4 font-bold text-purple-700">4. % hiển thị đầu trang</td>
            <td className="py-3 px-4 text-slate-600">Bao nhiêu % bạn ở top 4</td>
            <td className="py-3 px-4 font-mono">38% = Mobile ít thấy bạn. Cần lên &gt;60%</td>
          </tr>
        </tbody>
      </table>
    </div>

    <h3 className="text-2xl font-bold text-gray-900 mt-10 border-b pb-2">5. Kịch bản Scale từ $30 → $300/ngày cho 1 tiệm nail</h3>
    <p className="text-sm text-slate-600">Giả định: Camp "Acrylic + Gel X 77084" chạy tCPA $20, đang lãi.</p>

    <div className="overflow-x-auto my-6">
      <table className="min-w-full bg-white border border-gray-200 text-xs rounded-lg overflow-hidden shadow-sm">
        <thead className="bg-slate-700 text-white">
          <tr>
            {['Tuần', 'Ngân sách', '% hiển thị', '% mất NS', '% mất XH', 'CPA', 'Hành động'].map(h => (
              <th key={h} className="py-2 px-3 text-left font-bold">{h}</th>
            ))}
          </tr>
        </thead>
        <tbody className="divide-y divide-gray-200">
          {[
            { tuần: 'Tuần 1', ns: '$30', is: '18%', ns2: '35%', xh: '47%', cpa: '$17', hd: 'Limited. Tăng 30%', bg: 'bg-amber-50' },
            { tuần: 'Tuần 2', ns: '$39', is: '24%', ns2: '28%', xh: '48%', cpa: '$16', hd: 'Vẫn Limited. Tăng 30%', bg: '' },
            { tuần: 'Tuần 3', ns: '$50', is: '31%', ns2: '18%', xh: '51%', cpa: '$17', hd: 'Hết Limited. Dừng tăng tiền → Sửa CL vì mất 51% do XH', bg: 'bg-blue-50' },
            { tuần: 'Tuần 4-5', ns: '$50', is: '45%', ns2: '8%', xh: '35%', cpa: '$15', hd: 'CL lên 8/10. Giờ tăng tiếp được', bg: 'bg-emerald-50' },
            { tuần: 'Tuần 6', ns: '$65', is: '52%', ns2: '12%', xh: '36%', cpa: '$16', hd: 'Tăng 20%', bg: '' },
            { tuần: 'Tuần 8', ns: '$100', is: '58%', ns2: '15%', xh: '27%', cpa: '$18', hd: 'Tăng 20%', bg: '' },
            { tuần: 'Tuần 12', ns: '$200', is: '65%', ns2: '18%', xh: '17%', cpa: '$19', hd: 'Dừng. 65% là trần local. Muốn nữa phải mở zipcode mới', bg: 'bg-purple-50' },
          ].map(r => (
            <tr key={r.tuần} className={r.bg}>
              <td className="py-2 px-3 font-bold text-slate-700">{r.tuần}</td>
              <td className="py-2 px-3 font-mono font-bold text-blue-700">{r.ns}</td>
              <td className="py-2 px-3 font-mono">{r.is}</td>
              <td className="py-2 px-3 font-mono text-amber-600 font-bold">{r.ns2}</td>
              <td className="py-2 px-3 font-mono text-red-600">{r.xh}</td>
              <td className="py-2 px-3 font-mono text-emerald-700 font-bold">{r.cpa}</td>
              <td className="py-2 px-3 text-slate-600">{r.hd}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>

    <div className="bg-slate-50 border border-slate-200 rounded-xl p-4 my-4 text-sm">
      <p className="font-bold text-slate-700 mb-1">📖 Bài học từ kịch bản:</p>
      <p className="text-slate-600 mb-0">Scale không phải đường thẳng. Tăng tiền → Đụng trần Xếp hạng → Sửa chất lượng → Tăng tiền tiếp. Cứ lặp vòng này.</p>
    </div>

    <h3 className="text-2xl font-bold text-gray-900 mt-10 border-b pb-2">6. 5 Lỗi scale ngân sách khiến CPA nổ tung</h3>

    <div className="overflow-x-auto my-6">
      <table className="min-w-full bg-white border border-gray-200 text-sm rounded-lg overflow-hidden shadow-sm">
        <thead className="bg-red-800 text-white">
          <tr>
            <th className="py-3 px-4 text-left font-bold">Lỗi</th>
            <th className="py-3 px-4 text-left font-bold">Ví dụ sai</th>
            <th className="py-3 px-4 text-left font-bold">Hậu quả</th>
            <th className="py-3 px-4 text-left font-bold">Làm đúng</th>
          </tr>
        </thead>
        <tbody className="divide-y divide-gray-200">
          {[
            { loi: '1. Tăng x3 một lúc', sai: '$50 → $200 trong 1 ngày', hq: 'Máy học reset. CPA $18 → $50 trong 3 ngày', dung: 'Max 30%/lần, cách 3 ngày' },
            { loi: '2. Tăng lúc đang sửa ads/web', sai: 'Vừa đổi trang đích vừa tăng $50→$100', hq: 'Google không biết do web hay do tiền', dung: 'Khóa ads/web 7 ngày sau mỗi lần tăng' },
            { loi: '3. Tăng khi CPA đang cao', sai: 'CPA target $20, thực tế $27 vẫn tăng', hq: 'Lỗ x2. $100/ngày lỗ $35/ngày', dung: 'Sửa CPA về <target mới tăng' },
            { loi: '4. Không xem giờ', sai: 'Tăng tiền nhưng 60% đổ vào 12am-6am', hq: 'Click rác hết tiền', dung: 'Dùng Bài 23: -100% giờ rác trước khi scale' },
            { loi: '5. Scale camp mới chạy 3 ngày', sai: 'Mới 5 conv đã tăng ngân sách', hq: 'Máy học sai, scale cái sai', dung: 'Đợi ≥30 conv + 14 ngày' },
          ].map((r, i) => (
            <tr key={i} className={i % 2 === 0 ? 'bg-red-50/20' : ''}>
              <td className="py-3 px-4 font-bold text-red-800">{r.loi}</td>
              <td className="py-3 px-4 text-slate-600 text-xs">{r.sai}</td>
              <td className="py-3 px-4 text-red-600 text-xs font-medium">{r.hq}</td>
              <td className="py-3 px-4 text-emerald-700 text-xs font-medium">{r.dung}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>

    <div className="bg-amber-50 border-l-4 border-amber-400 p-5 rounded-r-xl my-6">
      <p className="font-bold text-amber-800 mb-2">🔑 Chốt Bài 28:</p>
      <p className="text-amber-900 text-sm mb-1">Ngân sách = Xăng. Xe Điểm CL 9/10 đổ xăng chạy nhanh. Xe CL 4/10 đổ xăng chỉ tốn tiền, vẫn thua xe đạp.</p>
      <p className="text-amber-900 text-sm font-bold mb-0">Quy tắc 20-30: Limited by Budget → tăng 20-30%. Không Limited → đừng tăng, đi sửa chất lượng.</p>
    </div>

    <div className="bg-blue-50 border border-blue-200 rounded-xl p-4 my-4 text-sm">
      <p className="font-bold text-blue-800 mb-1">💡 Mẹo cuối: Dùng Công cụ lập kế hoạch hiệu suất</p>
      <p className="text-blue-900 mb-0">Công cụ → Lập kế hoạch → Kế hoạch hiệu suất → Google dự báo tăng $50→$70 thì CPA bao nhiêu, Conv bao nhiêu. Độ chính xác 85%.</p>
    </div>

    <InteractiveChecklist
      id="chk28"
      title="Checklist Bài 28 – Trước khi bấm tăng ngân sách"
      tasks={[
        'Trạng thái chiến dịch: "Limited by Budget" ≥2 ngày liên tiếp',
        '% hiển thị mất do Ngân sách: >15% (nếu <10% thì tăng vô ích)',
        '% hiển thị mất do Xếp hạng: <40% (nếu >50% thì sửa Điểm CL trước)',
        'CPA 7 ngày: <tCPA hoặc <target 10%',
        'CVR: >5% (nếu <3% thì sửa web trước)',
        'Conversion 30 ngày: ≥30 (đủ cho máy học)',
      ]}
    />
  </div>
);

// ─── Lesson 29 ────────────────────────────────────────────────────────────────
export const Lesson29Content = () => (
  <div className="prose prose-blue max-w-none text-gray-800">
    <div className="bg-blue-50 border-l-4 border-blue-500 p-4 mb-6 rounded-r-lg flex items-start gap-3">
      <BarChart className="text-blue-500 mt-0.5 shrink-0" size={24} />
      <p className="m-0 text-sm text-blue-800 font-medium">
        🤖 <strong>SKAG = Single Keyword Ad Group | STAG = Single Theme Ad Group.</strong> Google 2015–2020: SKAG là vua. Google 2024–2026: STAG + Broad Match + Smart Bidding mới là vua. Chạy SKAG năm 2026 = Lái xe số sàn trong thời đại Tesla tự lái.
      </p>
    </div>

    <h3 className="text-2xl font-bold text-gray-900 border-b pb-2">1. SKAG vs STAG – Nhìn bảng so sánh 10 giây hiểu ngay</h3>

    <div className="overflow-x-auto my-6">
      <table className="min-w-full bg-white border border-gray-200 text-sm rounded-lg overflow-hidden shadow-sm">
        <thead className="bg-slate-800 text-white">
          <tr>
            <th className="py-3 px-4 text-left font-bold w-1/5"></th>
            <th className="py-3 px-4 text-left font-bold text-red-300">🚲 SKAG – Cũ 2015</th>
            <th className="py-3 px-4 text-left font-bold text-emerald-300">🚗 STAG – Mới 2024</th>
          </tr>
        </thead>
        <tbody className="divide-y divide-gray-200">
          {[
            { label: 'Cấu trúc', skag: '1 Ad Group = 1 từ khóa Exact\n[acrylic nails 77084]', stag: '1 Ad Group = 1 chủ đề 3–10 từ khóa\nAcrylic Theme: acrylic nails, full set, refill...' },
            { label: 'Đối sánh', skag: 'Chỉ Exact Match', stag: 'Broad Match + Phrase + Exact trộn' },
            { label: 'Số Ad Group', skag: '50–200 Ad Group/tài khoản', stag: '5–15 Ad Group/tài khoản' },
            { label: 'Ads', skag: '1 RSA viết riêng cho từng từ khóa', stag: '1–2 RSA viết chung cho cả theme' },
            { label: 'Bid', skag: 'Manual CPC từng từ khóa', stag: 'tCPA/tROAS cấp Campaign' },
            { label: 'Google thích', skag: '😡 Ghét. Khó cho AI học', stag: '✅ Thích. AI gom data nhanh' },
          ].map(r => (
            <tr key={r.label} className="align-top">
              <td className="py-3 px-4 font-bold text-slate-700">{r.label}</td>
              <td className="py-3 px-4 text-red-700 whitespace-pre-line text-xs">{r.skag}</td>
              <td className="py-3 px-4 text-emerald-700 whitespace-pre-line text-xs font-medium">{r.stag}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>

    <VisualizerSKAGvsSTAG />

    <h3 className="text-2xl font-bold text-gray-900 mt-10 border-b pb-2">2. Tại sao SKAG chết năm 2024? 4 lý do Google giết SKAG</h3>

    <div className="overflow-x-auto my-6">
      <table className="min-w-full bg-white border border-gray-200 text-sm rounded-lg overflow-hidden shadow-sm">
        <thead className="bg-red-700 text-white">
          <tr>
            <th className="py-3 px-4 text-left font-bold">Lý do</th>
            <th className="py-3 px-4 text-left font-bold">SKAG bị gì</th>
            <th className="py-3 px-4 text-left font-bold">STAG giải quyết sao</th>
          </tr>
        </thead>
        <tbody className="divide-y divide-gray-200">
          <tr>
            <td className="py-3 px-4 font-bold text-slate-700">1. Smart Bidding cần data</td>
            <td className="py-3 px-4 text-red-600">1 SKAG 3 conv/tháng → Máy học mù</td>
            <td className="py-3 px-4 text-emerald-700">1 STAG 30 conv/tháng → AI khôn, CPA giảm 40%</td>
          </tr>
          <tr className="bg-slate-50">
            <td className="py-3 px-4 font-bold text-slate-700">2. Broad Match 2024 quá khôn</td>
            <td className="py-3 px-4 text-red-600">SKAG chặn Broad vì sợ rác → Mất 60% volume</td>
            <td className="py-3 px-4 text-emerald-700">STAG + Broad + tCPA = AI tự tìm biến thể mới</td>
          </tr>
          <tr>
            <td className="py-3 px-4 font-bold text-slate-700">3. Search Terms Report thay thế</td>
            <td className="py-3 px-4 text-red-600">SKAG dùng để kiểm soát search term</td>
            <td className="py-3 px-4 text-emerald-700">STAG + phủ định tốt = Kiểm soát còn ngon hơn</td>
          </tr>
          <tr className="bg-slate-50">
            <td className="py-3 px-4 font-bold text-slate-700">4. Quản lý cực khổ</td>
            <td className="py-3 px-4 text-red-600">200 Ad Group, sửa giá 1 cái mất 2 tiếng</td>
            <td className="py-3 px-4 text-emerald-700">10 STAG, sửa 10 phút xong</td>
          </tr>
        </tbody>
      </table>
    </div>

    <div className="bg-slate-800 text-white p-4 rounded-xl my-4 text-sm">
      🔑 <strong>Kết luận Google Ads 2026:</strong> SKAG không bị cấm, nhưng chạy SKAG + Smart Bidding = Đốt tiền. Vì bạn bóp nghẹt data của AI.
    </div>

    <h3 className="text-2xl font-bold text-gray-900 mt-10 border-b pb-2">3. Khi nào SKAG vẫn còn dùng được? 3 trường hợp duy nhất</h3>

    <div className="overflow-x-auto my-6">
      <table className="min-w-full bg-white border border-gray-200 text-sm rounded-lg overflow-hidden shadow-sm">
        <thead className="bg-amber-600 text-white">
          <tr>
            <th className="py-3 px-4 text-left font-bold">Trường hợp</th>
            <th className="py-3 px-4 text-left font-bold">Tại sao dùng SKAG</th>
            <th className="py-3 px-4 text-left font-bold">Cách setup</th>
          </tr>
        </thead>
        <tbody className="divide-y divide-gray-200">
          <tr>
            <td className="py-3 px-4 font-bold text-slate-700">1. Từ khóa Brand</td>
            <td className="py-3 px-4">[Luxury Nails Dallas] phải ads riêng, CPC $0.3</td>
            <td className="py-3 px-4 text-slate-600">1 SKAG Exact, bid thấp, ads chứa tên brand</td>
          </tr>
          <tr className="bg-slate-50">
            <td className="py-3 px-4 font-bold text-slate-700">2. Từ khóa 10K search/tháng</td>
            <td className="py-3 px-4">"nail salon near me" 1 mình đủ data</td>
            <td className="py-3 px-4 text-slate-600">1 SKAG Exact + Broad, tCPA riêng</td>
          </tr>
          <tr>
            <td className="py-3 px-4 font-bold text-slate-700">3. Ngân sách &lt;$10/ngày</td>
            <td className="py-3 px-4">Tài khoản quá nhỏ, máy học không chạy</td>
            <td className="py-3 px-4 text-slate-600">Tạm SKAG Manual CPC. Lên $30/ngày đổi STAG ngay</td>
          </tr>
        </tbody>
      </table>
    </div>
    <p className="font-medium text-slate-700">Ngoài 3 trường hợp trên, <strong>100% dùng STAG</strong>.</p>

    <h3 className="text-2xl font-bold text-gray-900 mt-10 border-b pb-2">4. Công thức STAG chuẩn 2026 – 5 Ad Group là đủ cho tiệm nail</h3>
    <p className="text-sm text-slate-600">Campaign: Search – Dallas 77084</p>

    <div className="overflow-x-auto my-6">
      <table className="min-w-full bg-white border border-gray-200 text-sm rounded-lg overflow-hidden shadow-sm">
        <thead className="bg-emerald-700 text-white">
          <tr>
            <th className="py-3 px-4 text-left font-bold">Ad Group = Theme</th>
            <th className="py-3 px-4 text-left font-bold">Từ khóa (5–10 từ)</th>
            <th className="py-3 px-4 text-left font-bold">Đối sánh</th>
            <th className="py-3 px-4 text-left font-bold">Search intent</th>
          </tr>
        </thead>
        <tbody className="divide-y divide-gray-200">
          {[
            { ag: '1. Acrylic Theme', kw: 'acrylic nails, acrylic full set, acrylic nail salon, acrylic refill, long acrylic nails', match: 'Broad + Phrase', intent: 'Khách muốn làm Acrylic' },
            { ag: '2. Gel X Theme', kw: 'gel x nails, gel x extensions, apres gel x, gel x near me', match: 'Broad + Phrase', intent: 'Khách muốn Gel X, giá cao' },
            { ag: '3. Pedicure Theme', kw: 'pedicure, spa pedicure, deluxe pedicure, pedicure near me', match: 'Broad + Phrase', intent: 'Khách muốn Pedi, dễ upsell' },
            { ag: '4. Walk-in Theme', kw: 'walk in nail salon, nail salon open now, nail salon no appointment, same day nails', match: 'Phrase + Exact', intent: 'Khách nóng, cần ngay' },
            { ag: '5. Price Theme', kw: 'acrylic nails price, gel x price, how much nail salon, nail salon cost', match: 'Phrase + Exact', intent: 'Khách so giá. Ads ghi giá' },
          ].map((r, i) => (
            <tr key={i} className={i % 2 === 0 ? 'bg-emerald-50/20' : ''}>
              <td className="py-3 px-4 font-bold text-emerald-800">{r.ag}</td>
              <td className="py-3 px-4 font-mono text-xs text-slate-600">{r.kw}</td>
              <td className="py-3 px-4 text-blue-700 font-medium text-xs">{r.match}</td>
              <td className="py-3 px-4 text-slate-600 text-xs">{r.intent}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
    <div className="bg-blue-50 border border-blue-200 rounded-xl p-4 my-4 text-sm">
      📐 <strong>Quy tắc:</strong> 1 Theme = 1 nhu cầu khách. Acrylic khác Gel X. Walk-in khác Book. <strong>Không trộn.</strong>
    </div>

    <h3 className="text-2xl font-bold text-gray-900 mt-10 border-b pb-2">5. Bảng so sánh kết quả thực tế: SKAG vs STAG sau 30 ngày</h3>
    <p className="text-sm text-slate-500 italic">Test trên tiệm nail Houston, ngân sách $100/ngày:</p>

    <div className="overflow-x-auto my-6">
      <table className="min-w-full bg-white border border-gray-200 text-sm rounded-lg overflow-hidden shadow-sm text-center">
        <thead className="bg-slate-100 text-slate-700">
          <tr>
            <th className="py-3 px-4 text-left font-bold">Chỉ số</th>
            <th className="py-3 px-4 font-bold text-red-600">SKAG – 40 Ad Group</th>
            <th className="py-3 px-4 font-bold text-emerald-600">STAG – 5 Ad Group</th>
            <th className="py-3 px-4 font-bold">Chênh lệch</th>
          </tr>
        </thead>
        <tbody className="divide-y divide-gray-200">
          {[
            { metric: 'Impressions', skag: '18,000', stag: '32,000', diff: 'STAG +77%', good: true },
            { metric: 'CTR', skag: '4.2%', stag: '7.1%', diff: 'STAG +69%', good: true },
            { metric: 'Conversions', skag: '41', stag: '68', diff: 'STAG +65%', good: true },
            { metric: 'CPA', skag: '$73', stag: '$44', diff: 'STAG rẻ hơn 40%', good: true },
            { metric: 'Thời gian quản lý', skag: '5 giờ/tuần', stag: '45 phút/tuần', diff: 'STAG nhàn x7', good: true },
          ].map((r, i) => (
            <tr key={i} className={i % 2 === 0 ? 'bg-slate-50' : ''}>
              <td className="py-3 px-4 text-left font-bold text-slate-700">{r.metric}</td>
              <td className="py-3 px-4 text-red-600">{r.skag}</td>
              <td className="py-3 px-4 text-emerald-700 font-bold">{r.stag}</td>
              <td className="py-3 px-4 text-emerald-700 font-bold">{r.diff} 🏆</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>

    <h3 className="text-2xl font-bold text-gray-900 mt-10 border-b pb-2">6. 4 Sai lầm khi làm STAG khiến nát như SKAG</h3>

    <div className="overflow-x-auto my-6">
      <table className="min-w-full bg-white border border-gray-200 text-sm rounded-lg overflow-hidden shadow-sm">
        <thead className="bg-red-700 text-white">
          <tr>
            <th className="py-3 px-4 text-left font-bold">Lỗi</th>
            <th className="py-3 px-4 text-left font-bold">Hậu quả</th>
            <th className="py-3 px-4 text-left font-bold">Sửa sao</th>
          </tr>
        </thead>
        <tbody className="divide-y divide-gray-200">
          {[
            { loi: '1. 1 STAG nhồi 50 từ khóa', hq: 'Google rối, ads không liên quan, QS tụt', fix: '1 STAG max 10 từ. Nhiều hơn tách theme mới' },
            { loi: '2. Trộn Acrylic + Gel X chung STAG', hq: 'Ads "Acrylic $45" hiện cho khách search gel x → CTR 2%', fix: '1 ý định = 1 STAG. Tách ra' },
            { loi: '3. Không phủ định chéo', hq: 'STAG Acrylic hiện cho "gel x nails" vì Broad', fix: 'Ad Group Acrylic thêm phủ định [gel x]' },
            { loi: '4. Dùng Manual CPC cho STAG', hq: 'Broad Match + Manual = Click rác vỡ mồm', fix: 'STAG bắt buộc đi với tCPA hoặc Max Conv' },
          ].map((r, i) => (
            <tr key={i} className={i % 2 === 0 ? 'bg-red-50/20' : ''}>
              <td className="py-3 px-4 font-bold text-red-800">{r.loi}</td>
              <td className="py-3 px-4 text-red-600 text-xs">{r.hq}</td>
              <td className="py-3 px-4 text-emerald-700 text-xs font-medium">{r.fix}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>

    <h3 className="text-2xl font-bold text-gray-900 mt-10 border-b pb-2">7. Lộ trình cho chủ tiệm nail</h3>

    <div className="overflow-x-auto my-6">
      <table className="min-w-full bg-white border border-gray-200 text-sm rounded-lg overflow-hidden shadow-sm">
        <thead className="bg-slate-800 text-white">
          <tr>
            <th className="py-3 px-4 text-left font-bold">Bạn đang ở đâu</th>
            <th className="py-3 px-4 text-left font-bold">Hành động tuần này</th>
          </tr>
        </thead>
        <tbody className="divide-y divide-gray-200">
          <tr className="bg-blue-50/30">
            <td className="py-3 px-4 font-bold text-blue-700">Mới chạy, &lt;$30/ngày</td>
            <td className="py-3 px-4">Dùng STAG + Max Conversions luôn. Đừng SKAG</td>
          </tr>
          <tr>
            <td className="py-3 px-4 font-bold text-amber-700">Đang SKAG 50 Ad Group</td>
            <td className="py-3 px-4">Giữ 30 ngày nữa lấy data. Tuần sau gom thành 5 STAG theo mục 5</td>
          </tr>
          <tr className="bg-slate-50">
            <td className="py-3 px-4 font-bold text-slate-700">Đã STAG nhưng CPA cao</td>
            <td className="py-3 px-4">Check: 1. Có phủ định chéo chưa 2. Có &gt;10 từ/STAG không 3. Đang Manual CPC không</td>
          </tr>
          <tr>
            <td className="py-3 px-4 font-bold text-purple-700">Muốn scale &gt;$200/ngày</td>
            <td className="py-3 px-4">Bắt buộc STAG + tROAS. SKAG không scale nổi</td>
          </tr>
        </tbody>
      </table>
    </div>

    <div className="bg-emerald-50 border-l-4 border-emerald-500 p-5 rounded-r-xl my-6">
      <p className="font-bold text-emerald-800 mb-1">🏆 Câu thần chú 2026:</p>
      <p className="text-emerald-900 text-sm font-bold mb-0">"Broad + STAG + tCPA + Phủ định tốt = Vô địch"<br/>SKAG = Xe đạp. STAG + Smart Bidding = Tesla.</p>
    </div>

    <InteractiveChecklist
      id="chk29"
      title="Checklist Bài 29 – Chuyển từ SKAG sang STAG"
      tasks={[
        'Tải báo cáo từ khóa 90 ngày, sort theo Conv cao → thấp, giữ 50 từ khóa ra tiền',
        'Gom 50 từ thành 5 Theme: Acrylic, Gel X, Pedi, Walk-in, Price (dùng ChatGPT gom nhanh)',
        'Tạo 5 STAG mới – mỗi STAG 8–10 từ cùng theme, để Broad + Phrase',
        'Chạy song song STAG mới + SKAG cũ 7 ngày. STAG CPA thấp hơn → pause SKAG',
        'Thêm phủ định chéo: Ad Group Acrylic phủ định [gel x], [pedi] và ngược lại',
      ]}
    />
  </div>
);

// ─── Lesson 30 ────────────────────────────────────────────────────────────────
export const Lesson30Content = () => (
  <div className="prose prose-blue max-w-none text-gray-800">
    <div className="bg-red-50 border-l-4 border-red-500 p-4 mb-6 rounded-r-lg flex items-start gap-3">
      <AlertOctagon className="text-red-500 mt-0.5 shrink-0" size={24} />
      <p className="m-0 text-sm text-red-800 font-medium">
        🩸 <strong>CPA tăng đột biến = Chảy máu.</strong> CPA từ $18 vọt lên $45 trong 3 ngày = Đốt $270/ngày mà không hay. Quy tắc: CPA tăng &gt;30% so với 7 ngày trước = Báo động đỏ. Phải xử lý trong 24h.
      </p>
    </div>

    <h3 className="text-2xl font-bold text-gray-900 border-b pb-2">1. Quy trình chẩn đoán 5 phút – Vào đâu, xem gì trước</h3>
    <p className="text-sm text-slate-600">Vào: <strong>Chiến dịch → Chọn khoảng thời gian "7 ngày qua so với 7 ngày trước"</strong> → Nhìn cột CPA, CVR, CTR.</p>

    <div className="overflow-x-auto my-6">
      <table className="min-w-full bg-white border border-gray-200 text-sm rounded-lg overflow-hidden shadow-sm">
        <thead className="bg-slate-800 text-white">
          <tr>
            <th className="py-3 px-4 text-left font-bold">Chỉ số nhảy</th>
            <th className="py-3 px-4 text-left font-bold">Nguyên nhân thường gặp</th>
            <th className="py-3 px-4 text-left font-bold">Check tiếp ở đâu</th>
          </tr>
        </thead>
        <tbody className="divide-y divide-gray-200">
          {[
            { signal: 'CTR tụt + CPA tăng', cause: 'Ads hoặc đối thủ', where: 'Auction Insights + Ads' },
            { signal: 'CVR tụt + CPA tăng', cause: 'Trang đích hoặc từ khóa rác', where: 'Search Terms + Trang đích' },
            { signal: 'CPC tăng + CPA tăng', cause: 'Đấu giá gắt hoặc bid sai', where: 'Auction Insights + Lịch sử thay đổi' },
            { signal: 'Conv giảm + CPA tăng', cause: 'Mất tracking hoặc nhu cầu thị trường', where: 'Công cụ → Chuyển đổi + Google Trends' },
            { signal: 'Click tăng + Conv không tăng', cause: 'Click rác, bot', where: 'Search Terms + Phân đoạn Giờ/Thiết bị' },
          ].map((r, i) => (
            <tr key={i} className={i % 2 === 0 ? 'bg-slate-50' : ''}>
              <td className="py-3 px-4 font-bold text-red-700">{r.signal}</td>
              <td className="py-3 px-4 text-slate-600">{r.cause}</td>
              <td className="py-3 px-4 text-blue-700 font-mono text-xs">{r.where}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>

    <VisualizerCPADiagnosis />

    <h3 className="text-2xl font-bold text-gray-900 mt-10 border-b pb-2">2. 5 Nguyên nhân khiến CPA nổ tung + Cách dập lửa</h3>

    {/* Nguyên nhân 1 */}
    <div className="border border-red-200 rounded-xl p-5 my-4 bg-red-50/30">
      <div className="flex items-center gap-2 mb-2">
        <span className="bg-red-600 text-white text-xs font-bold px-2 py-1 rounded-full">50% case</span>
        <h4 className="font-bold text-red-800 m-0 text-base">Nguyên nhân 1: Search Terms rác bùng phát</h4>
      </div>
      <p className="text-sm text-slate-600 mb-2"><strong>Dấu hiệu:</strong> Click tăng 40%, Conv giữ nguyên. CPA x2.<br/><strong>Check:</strong> Từ khóa → Cụm từ tìm kiếm → Sort Chi phí 7 ngày → Xem top 10.</p>
      <div className="overflow-x-auto">
        <table className="min-w-full bg-white border border-red-200 text-xs rounded-lg">
          <thead className="bg-red-100">
            <tr>
              <th className="py-2 px-3 text-left font-bold">Ví dụ tiệm nail</th>
              <th className="py-2 px-3 text-left font-bold">Vì sao bùng</th>
              <th className="py-2 px-3 text-left font-bold">Xử lý ngay</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td className="py-2 px-3 font-mono text-red-600">"acrylic nails diy", "nail school", "cheap nail salon" tốn $80, 0 conv</td>
              <td className="py-2 px-3">Broad Match hốt rác. Tiktok trend DIY nổi lên</td>
              <td className="py-2 px-3 text-emerald-700">Phủ định: thêm "diy", "school", "cheap" cấp Tài khoản. Tạm pause Broad 24h</td>
            </tr>
            <tr className="bg-slate-50">
              <td className="py-2 px-3 font-mono text-red-600">"groupon nail salon" tốn $35</td>
              <td className="py-2 px-3">Groupon chạy ads mạnh tuần này</td>
              <td className="py-2 px-3 text-emerald-700">Phủ định "groupon". Hoặc bid từ khóa +groupon + ads "No Groupon Needed"</td>
            </tr>
          </tbody>
        </table>
      </div>
      <p className="text-xs text-emerald-700 font-bold mt-2 mb-0">⚡ Thời gian cứu: 15 phút phủ định xong, CPA về lại trong 24–48h.</p>
    </div>

    {/* Nguyên nhân 2 */}
    <div className="border border-orange-200 rounded-xl p-5 my-4 bg-orange-50/30">
      <div className="flex items-center gap-2 mb-2">
        <span className="bg-orange-500 text-white text-xs font-bold px-2 py-1 rounded-full">20% case</span>
        <h4 className="font-bold text-orange-800 m-0 text-base">Nguyên nhân 2: Đối thủ mới vào + Đè bid</h4>
      </div>
      <p className="text-sm text-slate-600 mb-2"><strong>Dấu hiệu:</strong> CPC tăng từ $3.2 → $5.8. Impression Share tụt 60% → 25%.<br/><strong>Check:</strong> Từ khóa → Thông tin đấu giá → Xem 7 ngày qua vs 7 ngày trước.</p>
      <div className="overflow-x-auto">
        <table className="min-w-full bg-white border border-orange-200 text-xs rounded-lg">
          <thead className="bg-orange-100">
            <tr>
              <th className="py-2 px-3 text-left font-bold">Phát hiện</th>
              <th className="py-2 px-3 text-left font-bold">Hành động</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td className="py-2 px-3 font-mono">Đối thủ mới IS 0% → 55%. Position Above Rate 80%</td>
              <td className="py-2 px-3 text-emerald-700">Không đấu bid. Check CL bạn. CL &lt;6 → sửa ads + trang đích. CL 8/10 → tăng tCPA +20% để test. Đánh giờ nó yếu</td>
            </tr>
            <tr className="bg-slate-50">
              <td className="py-2 px-3 font-mono">Booksy, Groupon vào</td>
              <td className="py-2 px-3 text-emerald-700">Kệ. Khách của nó khác bạn. Loại trừ từ khóa "booksy", "appointment app"</td>
            </tr>
          </tbody>
        </table>
      </div>
      <p className="text-xs text-orange-700 font-bold mt-2 mb-0">⏱ Thời gian cứu: 3–7 ngày. Không vội.</p>
    </div>

    {/* Nguyên nhân 3 */}
    <div className="border border-amber-200 rounded-xl p-5 my-4 bg-amber-50/30">
      <div className="flex items-center gap-2 mb-2">
        <span className="bg-amber-500 text-white text-xs font-bold px-2 py-1 rounded-full">15% case</span>
        <h4 className="font-bold text-amber-800 m-0 text-base">Nguyên nhân 3: Trang đích chết</h4>
      </div>
      <p className="text-sm text-slate-600 mb-2"><strong>Dấu hiệu:</strong> CTR vẫn 8%, CVR từ 12% → 3%. CPA x4.<br/><strong>Check 3 thứ trong 2 phút:</strong></p>
      <div className="overflow-x-auto">
        <table className="min-w-full bg-white border border-amber-200 text-xs rounded-lg">
          <thead className="bg-amber-100">
            <tr>
              <th className="py-2 px-3 text-left font-bold">Check</th>
              <th className="py-2 px-3 text-left font-bold">Cách làm</th>
              <th className="py-2 px-3 text-left font-bold">Lỗi hay gặp</th>
              <th className="py-2 px-3 text-left font-bold">Sửa ngay</th>
            </tr>
          </thead>
          <tbody>
            <tr><td className="py-2 px-3 font-bold">1. Tốc độ</td><td className="py-2 px-3 font-mono">pagespeed.web.dev</td><td className="py-2 px-3">Update plugin làm web load 8s</td><td className="py-2 px-3 text-emerald-700">Tắt plugin, nén ảnh. Tạm chạy Brand ads</td></tr>
            <tr className="bg-slate-50"><td className="py-2 px-3 font-bold">2. Form/Call</td><td className="py-2 px-3">Tự bấm đặt lịch, gọi số hotline</td><td className="py-2 px-3">Form lỗi, số sai, Square hết slot</td><td className="py-2 px-3 text-emerald-700">Sửa form. Đổi số. Mở thêm slot</td></tr>
            <tr><td className="py-2 px-3 font-bold">3. Message Match</td><td className="py-2 px-3">So sánh ads vs web H1</td><td className="py-2 px-3">Ads: "Acrylic $45". Web H1: "Welcome"</td><td className="py-2 px-3 text-emerald-700">Sửa H1 khớp 100% ads. Xem Bài 20</td></tr>
          </tbody>
        </table>
      </div>
      <p className="text-xs text-emerald-700 font-bold mt-2 mb-0">⚡ Thời gian cứu: Sửa web xong 1h, CPA về lại ngay.</p>
    </div>

    {/* Nguyên nhân 4 */}
    <div className="border border-purple-200 rounded-xl p-5 my-4 bg-purple-50/30">
      <div className="flex items-center gap-2 mb-2">
        <span className="bg-purple-600 text-white text-xs font-bold px-2 py-1 rounded-full">10% case</span>
        <h4 className="font-bold text-purple-800 m-0 text-base">Nguyên nhân 4: Tracking chuyển đổi gãy</h4>
      </div>
      <p className="text-sm text-slate-600 mb-2"><strong>Dấu hiệu:</strong> Click, CPC bình thường. Conv từ 5/ngày → 0/ngày. CPA = Vô cực.<br/><strong>Check:</strong> Công cụ → Chuyển đổi → Cột "Trạng thái" + "Lần ghi nhận cuối".</p>
      <div className="overflow-x-auto">
        <table className="min-w-full bg-white border border-purple-200 text-xs rounded-lg">
          <thead className="bg-purple-100">
            <tr>
              <th className="py-2 px-3 text-left font-bold">Lỗi</th>
              <th className="py-2 px-3 text-left font-bold">Nguyên nhân</th>
              <th className="py-2 px-3 text-left font-bold">Sửa sao</th>
            </tr>
          </thead>
          <tbody>
            <tr><td className="py-2 px-3 font-bold text-red-600">Trạng thái: Không hoạt động</td><td className="py-2 px-3">IT sửa web xóa mất GTag</td><td className="py-2 px-3 text-emerald-700">Cài lại GTag. Dùng GTM test</td></tr>
            <tr className="bg-slate-50"><td className="py-2 px-3 font-bold text-red-600">Lần ghi nhận: 3 ngày trước</td><td className="py-2 px-3">Form đổi URL thank-you</td><td className="py-2 px-3 text-emerald-700">Vào Conv → Sửa URL đích</td></tr>
            <tr><td className="py-2 px-3 font-bold text-red-600">Cuộc gọi = 0</td><td className="py-2 px-3">Hết tiền CallRail, số forward sai</td><td className="py-2 px-3 text-emerald-700">Nạp tiền CallRail. Test gọi thử</td></tr>
          </tbody>
        </table>
      </div>
      <div className="bg-purple-100 rounded-lg p-2 mt-2 text-xs text-purple-800 font-medium">
        ⚠️ Trong lúc sửa tracking, Google Ads mù. Tạm chuyển bid về Manual CPC. Sửa xong 48h mới về tCPA.
      </div>
    </div>

    {/* Nguyên nhân 5 */}
    <div className="border border-blue-200 rounded-xl p-5 my-4 bg-blue-50/30">
      <div className="flex items-center gap-2 mb-2">
        <span className="bg-blue-500 text-white text-xs font-bold px-2 py-1 rounded-full">5% case</span>
        <h4 className="font-bold text-blue-800 m-0 text-base">Nguyên nhân 5: Thị trường theo mùa + Sự kiện</h4>
      </div>
      <p className="text-sm text-slate-600 mb-2"><strong>Dấu hiệu:</strong> CPA tăng cả tài khoản, cả đối thủ. Search Terms toàn rác.<br/><strong>Check:</strong> Google Trends → Gõ "nail salon" → Chọn 7 ngày qua.</p>
      <div className="overflow-x-auto">
        <table className="min-w-full bg-white border border-blue-200 text-xs rounded-lg">
          <thead className="bg-blue-100">
            <tr>
              <th className="py-2 px-3 text-left font-bold">Sự kiện</th>
              <th className="py-2 px-3 text-left font-bold">Ảnh hưởng</th>
              <th className="py-2 px-3 text-left font-bold">Xử lý</th>
            </tr>
          </thead>
          <tbody>
            <tr><td className="py-2 px-3 font-bold">Bão, tuyết ở Dallas</td><td className="py-2 px-3">Không ai đi làm nail. Click vẫn tốn tiền</td><td className="py-2 px-3 text-emerald-700">Giảm ngân sách 70% hoặc Pause 2–3 ngày</td></tr>
            <tr className="bg-slate-50"><td className="py-2 px-3 font-bold">Tiktok trend "DIY nails"</td><td className="py-2 px-3">Search "acrylic nails" toàn trẻ em</td><td className="py-2 px-3 text-emerald-700">Phủ định "tiktok", "diy", "under 18" + Thêm tuổi 18+ vào Đối tượng</td></tr>
            <tr><td className="py-2 px-3 font-bold">Lễ 2/9, Tết</td><td className="py-2 px-3">Tiệm đóng cửa nhưng quên tắt ads</td><td className="py-2 px-3 text-emerald-700">Cài Lịch quảng cáo: -100% ngày đóng cửa</td></tr>
            <tr className="bg-slate-50"><td className="py-2 px-3 font-bold">Đối thủ chạy $5 All Set</td><td className="py-2 px-3">Khách so giá, CVR bạn tụt</td><td className="py-2 px-3 text-emerald-700">Tăng ưu đãi: "Free Design" thay vì giảm giá. Hoặc kệ, đợi nó hết tiền</td></tr>
          </tbody>
        </table>
      </div>
    </div>

    <h3 className="text-2xl font-bold text-gray-900 mt-10 border-b pb-2">3. Khi nào nên Pause – Khi nào nên Cứu</h3>

    <div className="overflow-x-auto my-6">
      <table className="min-w-full bg-white border border-gray-200 text-sm rounded-lg overflow-hidden shadow-sm">
        <thead className="bg-slate-800 text-white">
          <tr>
            <th className="py-3 px-4 text-left font-bold">Tình huống</th>
            <th className="py-3 px-4 text-left font-bold text-red-300">⛔ Pause ngay</th>
            <th className="py-3 px-4 text-left font-bold text-emerald-300">🔧 Cứu tiếp</th>
          </tr>
        </thead>
        <tbody className="divide-y divide-gray-200">
          {[
            { situation: 'CPA $18 → $80, do tracking gãy', pause: 'Pause 24h. Sửa tracking xong chạy lại', fix: '' },
            { situation: 'CPA $18 → $35, do đối thủ', pause: '', fix: 'Cứu. Sửa CL + tăng tCPA 20%' },
            { situation: 'CPA $18 → $50, do web sập', pause: 'Pause hết. Sửa web xong mới bật', fix: '' },
            { situation: 'Ngày lễ, bão', pause: 'Pause 2–3 ngày', fix: '' },
            { situation: 'CPA tăng 2 ngày, ngày 3 giảm lại', pause: '', fix: 'Kệ. Dao động bình thường' },
          ].map((r, i) => (
            <tr key={i} className={i % 2 === 0 ? 'bg-slate-50' : ''}>
              <td className="py-3 px-4 text-slate-700">{r.situation}</td>
              <td className="py-3 px-4 text-red-700 font-medium">{r.pause}</td>
              <td className="py-3 px-4 text-emerald-700 font-medium">{r.fix}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>

    <div className="bg-slate-800 text-white p-4 rounded-xl my-4 text-sm">
      ⏱ <strong>Quy tắc 3 ngày:</strong> CPA tăng 1 ngày = Kệ. 2 ngày = Check. 3 ngày liên tiếp = Mổ xẻ + Giảm ngân sách.
    </div>

    <h3 className="text-2xl font-bold text-gray-900 mt-10 border-b pb-2">4. Template báo cáo "CPA tăng" – Ghi lại để tháng sau biết đường xử</h3>

    <div className="overflow-x-auto my-6">
      <table className="min-w-full bg-white border border-gray-200 text-sm rounded-lg overflow-hidden shadow-sm">
        <thead className="bg-slate-800 text-white">
          <tr>
            {['Ngày', 'CPA cũ', 'CPA mới', '% tăng', 'Nguyên nhân số 1', 'Hành động', 'Kết quả 48h sau'].map(h => (
              <th key={h} className="py-2 px-3 text-left font-bold text-xs">{h}</th>
            ))}
          </tr>
        </thead>
        <tbody className="divide-y divide-gray-200 text-xs">
          <tr>
            <td className="py-2 px-3">25/6</td>
            <td className="py-2 px-3 text-emerald-700 font-bold">$17</td>
            <td className="py-2 px-3 text-red-600 font-bold">$42</td>
            <td className="py-2 px-3 text-red-600 font-bold">+147%</td>
            <td className="py-2 px-3">Search term "diy" tốn $60</td>
            <td className="py-2 px-3">Phủ định "diy", "tutorial"</td>
            <td className="py-2 px-3 text-emerald-700 font-bold">$19 – Về lại ✅</td>
          </tr>
          <tr className="bg-slate-50">
            <td className="py-2 px-3">2/7</td>
            <td className="py-2 px-3 text-emerald-700 font-bold">$18</td>
            <td className="py-2 px-3 text-red-600 font-bold">$33</td>
            <td className="py-2 px-3 text-red-600 font-bold">+83%</td>
            <td className="py-2 px-3">Regal Nails đè, IS tụt 30%</td>
            <td className="py-2 px-3">Tăng tCPA $20→$24, sửa TĐ ads</td>
            <td className="py-2 px-3 text-emerald-700 font-bold">$22 – Ổn ✅</td>
          </tr>
        </tbody>
      </table>
    </div>

    <div className="bg-amber-50 border-l-4 border-amber-400 p-5 rounded-r-xl my-6">
      <p className="font-bold text-amber-800 mb-2">🔑 Chốt Bài 30:</p>
      <p className="text-amber-900 text-sm mb-2">CPA tăng không đáng sợ. <strong>Không biết tại sao tăng mới chết.</strong> 90% case nằm ở 5 nguyên nhân trên. Xử đúng bệnh 24h là cầm máu.</p>
      <p className="text-amber-900 text-sm mb-0"><strong>Công cụ cứu nhanh:</strong><br/>
        1. Rule tự động: Công cụ → Quy tắc → "Tạm dừng từ khóa nếu CPA &gt;$40 + Chi phí &gt;$30"<br/>
        2. Alert: Cài đặt → Thông báo → CPA tăng 50% gửi email.</p>
    </div>

    <InteractiveChecklist
      id="chk30"
      title="Checklist Bài 30 – Xử lý CPA tăng đột biến (đúng thứ tự)"
      tasks={[
        'Check Tracking trước: Conv = 0? → Sửa tracking. Nếu ok mới đi tiếp',
        'Check Search Terms 7 ngày: Top 10 dòng tốn tiền mà 0 conv → Phủ định hết',
        'Check Trang đích: Tự book thử. Load >4s hoặc form lỗi → Sửa web, pause ads 2h',
        'Check Auction Insights: Đối thủ mới đè 80%? CL<7 → sửa ads; CL>8 → tăng tCPA 20%',
        'Check Lịch sử thay đổi: 3 ngày qua tăng bid/đổi ads không → Hoàn tác nếu nghi ngờ',
        'Giảm ngân sách tạm 50% nếu sau 5 bước trên chưa ra bệnh – tránh chảy máu thêm',
      ]}
    />
  </div>
);
