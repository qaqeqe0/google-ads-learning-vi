import React from 'react';
import {
  Search, TrendingUp, Target, AlertTriangle, CheckCircle2,
  BarChart2, Zap, Users, Clock, RefreshCw, Award, Filter
} from 'lucide-react';
import { InteractiveChecklist } from './InteractiveChecklist';

// ─── Bài 21 ───────────────────────────────────────────────────────────────────
export const Lesson21Content = () => (
  <div className="prose prose-blue max-w-none text-gray-800">
    <div className="bg-blue-50 border-l-4 border-blue-500 p-4 mb-6 rounded-r-lg flex items-start gap-3">
      <Search className="text-blue-500 mt-0.5 shrink-0" size={24} />
      <p className="m-0 text-sm text-blue-800 font-medium">🎯 <strong>Search Terms Report = Két sắt của Google Ads.</strong> Chạy 2 tuần không xem báo cáo này = Lái xe không nhìn gương. 80% tiền tối ưu nằm ở đây.</p>
    </div>

    <h3 className="text-2xl font-bold text-gray-900 border-b pb-2">1. Search Terms khác gì Từ khóa?</h3>

    <div className="overflow-x-auto my-6">
      <table className="min-w-full bg-white border border-gray-200 text-sm rounded-lg overflow-hidden shadow-sm">
        <thead className="bg-slate-800 text-white">
          <tr>
            <th className="py-3 px-4 text-left font-bold w-1/4"></th>
            <th className="py-3 px-4 text-left font-bold">Từ khóa – Keywords</th>
            <th className="py-3 px-4 text-left font-bold">Search Terms – Cụm từ tìm kiếm</th>
          </tr>
        </thead>
        <tbody className="divide-y divide-gray-200">
          <tr><td className="py-2 px-4 font-bold">Là gì</td><td className="py-2 px-4">Cái bạn đặt bid trong Google Ads</td><td className="py-2 px-4">Cái khách <strong>THỰC SỰ</strong> gõ trên Google</td></tr>
          <tr><td className="py-2 px-4 font-bold">Ví dụ</td><td className="py-2 px-4">Bạn chạy <code>acrylic nails</code></td><td className="py-2 px-4">Khách gõ <code>acrylic nails near me cheap</code>, <code>acrylic nails 77084 price</code></td></tr>
          <tr><td className="py-2 px-4 font-bold">Kiểm soát</td><td className="py-2 px-4">Bạn kiểm soát</td><td className="py-2 px-4">Google kiểm soát, bạn chỉ xem + chặn</td></tr>
          <tr><td className="py-2 px-4 font-bold">Dùng để</td><td className="py-2 px-4">Ra lệnh cho Google hiển thị</td><td className="py-2 px-4">Tìm mỏ vàng + click rác để phủ định</td></tr>
        </tbody>
      </table>
    </div>
    <p className="bg-amber-50 border border-amber-200 p-3 rounded-lg text-sm font-medium text-amber-900">💡 1 từ khóa <code>"acrylic nails"</code> có thể đẻ ra 500 search terms. Trong đó 100 cái ra khách, 400 cái đốt tiền. Nhiệm vụ: giữ 100, giết 400.</p>

    <h3 className="text-2xl font-bold text-gray-900 mt-10 border-b pb-2">2. Vào Search Terms Report + 8 cột phải bật</h3>
    <p><strong>Đường dẫn:</strong> Google Ads → Chiến dịch → Chọn Campaign → Từ khóa → <strong>Cụm từ tìm kiếm</strong></p>
    <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 my-4">
      {[
        { n: 1, label: 'Cụm từ tìm kiếm', desc: 'Khách gõ gì' },
        { n: 2, label: 'Loại đối sánh', desc: 'Exact / Phrase / Broad' },
        { n: 3, label: 'Thêm bởi', desc: 'Từ khóa nào kích hoạt search term này' },
        { n: 4, label: 'Chi phí', desc: 'Đốt bao nhiêu tiền' },
        { n: 5, label: 'Số nhấp chuột', desc: 'Bao nhiêu click' },
        { n: 6, label: 'CTR', desc: '<3% = ads hoặc từ khóa lệch' },
        { n: 7, label: 'Chuyển đổi', desc: 'Bao nhiêu cuộc gọi / form' },
        { n: 8, label: 'CPA ⭐', desc: '1 chuyển đổi tốn bao nhiêu $. Cột quan trọng nhất' },
      ].map(c => (
        <div key={c.n} className="flex items-start gap-2 bg-slate-50 border border-slate-200 rounded-lg p-3">
          <span className="bg-slate-700 text-white text-xs font-bold rounded-full w-5 h-5 flex items-center justify-center shrink-0 mt-0.5">{c.n}</span>
          <div><div className="font-semibold text-slate-800 text-sm">{c.label}</div><div className="text-xs text-slate-500">{c.desc}</div></div>
        </div>
      ))}
    </div>
    <p className="text-sm text-slate-600"><strong>Quy tắc:</strong> Sắp xếp theo "Chi phí" từ cao → thấp. 20% search term đầu tiên ngốn 80% tiền.</p>

    <h3 className="text-2xl font-bold text-gray-900 mt-10 border-b pb-2">3. Quy trình 3 bước "Lọc vàng – Giết rác" mỗi 48 giờ</h3>

    <div className="space-y-6 my-6">
      <div className="border border-yellow-300 bg-yellow-50 rounded-xl p-5">
        <h4 className="font-bold text-yellow-800 mt-0 mb-3 flex items-center gap-2"><span className="bg-yellow-500 text-white text-xs px-2 py-0.5 rounded">Bước 1</span> Lọc TỪ KHÓA VÀNG – Add thành Exact</h4>
        <div className="overflow-x-auto">
          <table className="min-w-full text-xs rounded overflow-hidden">
            <thead className="bg-yellow-200 text-yellow-900">
              <tr><th className="py-2 px-3 text-left">Điều kiện VÀNG</th><th className="py-2 px-3 text-left">Hành động</th><th className="py-2 px-3 text-left">Ví dụ tiệm nail</th></tr>
            </thead>
            <tbody className="divide-y divide-yellow-100 bg-white">
              <tr><td className="py-2 px-3 font-medium">Chi phí &gt;$10 + CPA &lt;CPA mục tiêu</td><td className="py-2 px-3">Add Exact Match + Bid cao</td><td className="py-2 px-3"><code>acrylic nails 77084 open sunday</code> tốn $15 ra 2 call, CPA $7.5 → VÀNG</td></tr>
              <tr><td className="py-2 px-3 font-medium">Chuyển đổi ≥2 + CTR &gt;8%</td><td className="py-2 px-3">Add Exact + Tạo Ad Group riêng</td><td className="py-2 px-3"><code>gel x nails near me</code> 3 conv, CTR 12% → Tách Ad Group Gel X</td></tr>
              <tr><td className="py-2 px-3 font-medium">IS &lt;50% + Có chuyển đổi</td><td className="py-2 px-3">Tăng bid Exact +30%</td><td className="py-2 px-3"><code>walk in nail salon</code> có conv nhưng chỉ hiện 40% → Đang mất khách</td></tr>
            </tbody>
          </table>
        </div>
        <p className="text-xs mt-2 text-yellow-800 mb-0"><strong>Thao tác:</strong> Tick search term vàng → Thêm làm từ khóa → Exact → Bid cao hơn 20% so với Phrase gốc.</p>
      </div>

      <div className="border border-red-300 bg-red-50 rounded-xl p-5">
        <h4 className="font-bold text-red-800 mt-0 mb-3 flex items-center gap-2"><span className="bg-red-500 text-white text-xs px-2 py-0.5 rounded">Bước 2</span> Lọc TỪ KHÓA ĐỐT TIỀN – Phủ định ngay</h4>
        <div className="overflow-x-auto">
          <table className="min-w-full text-xs rounded overflow-hidden">
            <thead className="bg-red-200 text-red-900">
              <tr><th className="py-2 px-3 text-left">Điều kiện RÁC</th><th className="py-2 px-3 text-left">Hành động</th><th className="py-2 px-3 text-left">Ví dụ</th></tr>
            </thead>
            <tbody className="divide-y divide-red-100 bg-white">
              <tr><td className="py-2 px-3 font-medium">Chi phí &gt;$15 + 0 conv</td><td className="py-2 px-3">Phủ định rộng ngay</td><td className="py-2 px-3"><code>acrylic nails at home kit</code> $20, 0 call → Add <code>at home</code></td></tr>
              <tr><td className="py-2 px-3 font-medium">CTR &lt;1% + Hiển thị &gt;200</td><td className="py-2 px-3">Phủ định – Ads không liên quan</td><td className="py-2 px-3"><code>nail art designs 2024</code> 500 lần, CTR 0.8% → Add <code>designs</code></td></tr>
              <tr><td className="py-2 px-3 font-medium">CPA &gt;2x mục tiêu</td><td className="py-2 px-3">Phủ định nếu không có lý do giữ</td><td className="py-2 px-3"><code>cheap nail salon</code> CPA $45, target $20 → Add <code>cheap</code></td></tr>
              <tr><td className="py-2 px-3 font-medium">Sai dịch vụ</td><td className="py-2 px-3">Phủ định cấp Ad Group</td><td className="py-2 px-3">Ad Group Acrylic hiện <code>gel x nails</code> → Phủ định <code>gel x</code> trong Ad Group Acrylic</td></tr>
            </tbody>
          </table>
        </div>
      </div>

      <div className="border border-blue-300 bg-blue-50 rounded-xl p-5">
        <h4 className="font-bold text-blue-800 mt-0 mb-2 flex items-center gap-2"><span className="bg-blue-500 text-white text-xs px-2 py-0.5 rounded">Bước 3</span> Lọc TIỀM NĂNG – Theo dõi thêm</h4>
        <ul className="text-sm space-y-1 mb-0">
          <li>Chi phí $5-$15 + 0 conv + Click &lt;10 → <strong>Chưa đủ data. Đợi 7 ngày</strong></li>
          <li>CTR &gt;15% + 0 conv → <strong>Check trang đích trước khi phủ định</strong></li>
          <li>Search term mới → <strong>Add Phrase, bid thấp để test</strong></li>
        </ul>
      </div>
    </div>

    <h3 className="text-2xl font-bold text-gray-900 mt-10 border-b pb-2">4. 10 nhóm từ khóa đốt tiền của tiệm nail – Phủ định cấp Tài khoản</h3>
    <div className="overflow-x-auto my-6">
      <table className="min-w-full bg-white border border-gray-200 text-sm rounded-lg overflow-hidden shadow-sm">
        <thead className="bg-red-800 text-white">
          <tr>
            <th className="py-2 px-3 text-left font-bold">#</th>
            <th className="py-2 px-3 text-left font-bold">Nhóm đốt tiền</th>
            <th className="py-2 px-3 text-left font-bold">Search terms thường gặp</th>
            <th className="py-2 px-3 text-left font-bold">Ước tính đốt/tháng</th>
          </tr>
        </thead>
        <tbody className="divide-y divide-gray-200">
          {[
            ['1','DIY/Tự làm','how to, at home, diy, yourself, tutorial','$200-$400'],
            ['2','Tìm việc','jobs, hiring, salary, indeed, apply','$150-$300'],
            ['3','Đi học','school, course, training, license, class','$100-$200'],
            ['4','Mua sỉ','supply, wholesale, amazon, aliexpress, bulk','$80-$150'],
            ['5','Giá rẻ','cheap, free, dollar, groupon, coupon','$100-$250'],
            ['6','Đối thủ xa','Tên tiệm nail >3 miles','$50-$100'],
            ['7','Sai dịch vụ','hair, lashes, tattoo, massage, facial','$50-$150'],
            ['8','Nghiên cứu','ideas, pictures, pinterest, meaning, vs','$200-$500'],
            ['9','Bệnh lý','fungus, infection, doctor, medical','$20-$50'],
            ['10','Trẻ em','kids, children, baby','$30-$80'],
          ].map(([n,g,t,c]) => (
            <tr key={n} className={parseInt(n)%2===0?'bg-red-50/30':''}>
              <td className="py-2 px-3 text-center font-bold text-red-700">{n}</td>
              <td className="py-2 px-3 font-bold">{g}</td>
              <td className="py-2 px-3 text-slate-600 font-mono text-xs">{t}</td>
              <td className="py-2 px-3 font-bold text-red-600">{c}</td>
            </tr>
          ))}
        </tbody>
        <tfoot>
          <tr className="bg-red-100">
            <td colSpan={4} className="py-2 px-3 font-bold text-red-900 text-center">Không chặn = Mất $880 – $2,280/tháng tiền ngu</td>
          </tr>
        </tfoot>
      </table>
    </div>

    <h3 className="text-2xl font-bold text-gray-900 mt-10 border-b pb-2">5. Mẫu báo cáo Search Terms sau 14 ngày</h3>
    <div className="overflow-x-auto my-6">
      <table className="min-w-full bg-white border border-gray-200 text-xs rounded-lg overflow-hidden shadow-sm">
        <thead className="bg-slate-800 text-white">
          <tr>
            <th className="py-2 px-3 text-left">Cụm từ tìm kiếm</th>
            <th className="py-2 px-3 text-center">Chi phí</th>
            <th className="py-2 px-3 text-center">Click</th>
            <th className="py-2 px-3 text-center">CTR</th>
            <th className="py-2 px-3 text-center">Conv</th>
            <th className="py-2 px-3 text-center">CPA</th>
            <th className="py-2 px-3 text-left">Hành động</th>
          </tr>
        </thead>
        <tbody className="divide-y divide-gray-200">
          <tr className="bg-yellow-50"><td className="py-2 px-3 font-mono">acrylic nails 77084</td><td className="py-2 px-3 text-center">$89</td><td className="py-2 px-3 text-center">18</td><td className="py-2 px-3 text-center">9.2%</td><td className="py-2 px-3 text-center">4</td><td className="py-2 px-3 text-center">$22</td><td className="py-2 px-3 font-bold text-yellow-700">VÀNG: Add [Exact], Bid $5.5</td></tr>
          <tr><td className="py-2 px-3 font-mono">nail salon near me</td><td className="py-2 px-3 text-center">$156</td><td className="py-2 px-3 text-center">25</td><td className="py-2 px-3 text-center">6.1%</td><td className="py-2 px-3 text-center">3</td><td className="py-2 px-3 text-center">$52</td><td className="py-2 px-3 text-blue-700">TỐT: CPA cao. Tách camp, tăng Điểm CL</td></tr>
          <tr className="bg-yellow-50"><td className="py-2 px-3 font-mono">walk in nail salon open now</td><td className="py-2 px-3 text-center">$43</td><td className="py-2 px-3 text-center">7</td><td className="py-2 px-3 text-center">14.3%</td><td className="py-2 px-3 text-center">2</td><td className="py-2 px-3 text-center">$21.5</td><td className="py-2 px-3 font-bold text-yellow-700">VÀNG: CTR cao. Add Exact</td></tr>
          <tr className="bg-red-50"><td className="py-2 px-3 font-mono">acrylic nails at home</td><td className="py-2 px-3 text-center">$31</td><td className="py-2 px-3 text-center">12</td><td className="py-2 px-3 text-center">2.1%</td><td className="py-2 px-3 text-center">0</td><td className="py-2 px-3 text-center">-</td><td className="py-2 px-3 font-bold text-red-700">RÁC: Phủ định "at home"</td></tr>
          <tr className="bg-red-50"><td className="py-2 px-3 font-mono">nail salon jobs</td><td className="py-2 px-3 text-center">$24</td><td className="py-2 px-3 text-center">9</td><td className="py-2 px-3 text-center">1.8%</td><td className="py-2 px-3 text-center">0</td><td className="py-2 px-3 text-center">-</td><td className="py-2 px-3 font-bold text-red-700">RÁC: Phủ định "jobs"</td></tr>
          <tr className="bg-blue-50"><td className="py-2 px-3 font-mono">gel x nails price</td><td className="py-2 px-3 text-center">$19</td><td className="py-2 px-3 text-center">6</td><td className="py-2 px-3 text-center">7.8%</td><td className="py-2 px-3 text-center">0</td><td className="py-2 px-3 text-center">-</td><td className="py-2 px-3 font-bold text-blue-700">TIỀM NĂNG: CTR cao, check trang đích</td></tr>
          <tr className="bg-red-50"><td className="py-2 px-3 font-mono">cheap nail salon</td><td className="py-2 px-3 text-center">$17</td><td className="py-2 px-3 text-center">8</td><td className="py-2 px-3 text-center">3.2%</td><td className="py-2 px-3 text-center">0</td><td className="py-2 px-3 text-center">-</td><td className="py-2 px-3 font-bold text-red-700">RÁC: Phủ định "cheap"</td></tr>
        </tbody>
      </table>
    </div>

    <h3 className="text-2xl font-bold text-gray-900 mt-10 border-b pb-2">6. 4 sai lầm khi đọc Search Terms</h3>
    <ol className="space-y-2 text-sm">
      <li><strong>Chỉ xem 7 ngày:</strong> Data ít, sai lệch. Luôn xem 14-30 ngày.</li>
      <li><strong>Phủ định quá tay:</strong> CPA &lt;2.5x mục tiêu thì giữ lại tối ưu trang đích, đừng phủ định liền.</li>
      <li><strong>Không check "Loại đối sánh":</strong> Thấy search term tốt từ Broad thì phải add thành Exact, không phải Broad.</li>
      <li><strong>Quên xem "Thêm bởi":</strong> Biết từ khóa nào kích hoạt search term này để add đúng Ad Group.</li>
    </ol>

    <InteractiveChecklist
      id="chk21"
      title="Checklist Bài 21"
      tasks={[
        "Vào Search Terms Report, bật đủ 8 cột (đặc biệt cột CPA và Chi phí).",
        "Sắp xếp theo Chi phí cao → thấp, review top 20 dòng.",
        "Tô xanh ≥1 search term vàng và Add thành Exact Match với bid cao hơn 20%.",
        "Tô đỏ ≥1 search term rác (Chi phí >$15, 0 conv) và Phủ định ngay.",
        "Cài Rule tự động: Tạm dừng từ khóa nếu Chi phí >$20 + Chuyển đổi = 0.",
      ]}
    />
  </div>
);

// ─── Bài 22 ───────────────────────────────────────────────────────────────────
export const Lesson22Content = () => (
  <div className="prose prose-blue max-w-none text-gray-800">
    <div className="bg-blue-50 border-l-4 border-blue-500 p-4 mb-6 rounded-r-lg flex items-start gap-3">
      <BarChart2 className="text-blue-500 mt-0.5 shrink-0" size={24} />
      <p className="m-0 text-sm text-blue-800 font-medium">🎯 <strong>Auction Insights = Camera quay lén đối thủ.</strong> Cho bạn biết ai đang bid cùng từ khóa, ai cướp 60% impression, và tại sao ads bạn không hiện top 1.</p>
    </div>
    <p><strong>Vào:</strong> Google Ads → Chiến dịch → Từ khóa → <strong>Thông tin chi tiết về phiên đấu giá</strong></p>

    <h3 className="text-2xl font-bold text-gray-900 border-b pb-2">1. 6 cột trong Auction Insights phải đọc được</h3>
    <div className="overflow-x-auto my-6">
      <table className="min-w-full bg-white border border-gray-200 text-sm rounded-lg overflow-hidden shadow-sm">
        <thead className="bg-slate-800 text-white">
          <tr>
            <th className="py-3 px-4 text-left font-bold w-1/4">Cột</th>
            <th className="py-3 px-4 text-left font-bold">Ý nghĩa cho tiệm nail</th>
            <th className="py-3 px-4 text-left font-bold text-red-300">Số báo động</th>
          </tr>
        </thead>
        <tbody className="divide-y divide-gray-200">
          <tr><td className="py-3 px-4 font-bold text-slate-700">1. Tỷ lệ hiển thị<br/><span className="text-xs font-normal text-blue-600">Impression Share</span></td><td className="py-3 px-4">1000 người search, bạn hiện bao nhiêu lần. 20% = chỉ hiện 200 lần</td><td className="py-3 px-4 text-red-600 font-medium">&lt;20%: Mất 80% khách vào tay đối thủ</td></tr>
          <tr className="bg-slate-50"><td className="py-3 px-4 font-bold text-slate-700">2. Tỷ lệ trùng lặp<br/><span className="text-xs font-normal text-blue-600">Overlap Rate</span></td><td className="py-3 px-4">Khi bạn hiện, đối thủ cũng hiện bao nhiêu %</td><td className="py-3 px-4 text-red-600 font-medium">&gt;70%: Đang đốt tiền đấu nhau trực tiếp</td></tr>
          <tr><td className="py-3 px-4 font-bold text-slate-700">3. Vị trí cao hơn<br/><span className="text-xs font-normal text-blue-600">Position Above Rate</span></td><td className="py-3 px-4">Khi cả 2 cùng hiện, nó đứng trên bạn bao nhiêu %</td><td className="py-3 px-4 text-red-600 font-medium">&gt;60%: Điểm CL hoặc bid của bạn thua</td></tr>
          <tr className="bg-slate-50"><td className="py-3 px-4 font-bold text-slate-700">4. Tỷ lệ đầu trang<br/><span className="text-xs font-normal text-blue-600">Top of Page Rate</span></td><td className="py-3 px-4">Bao nhiêu % lần hiện bạn ở top 4</td><td className="py-3 px-4 text-red-600 font-medium">&lt;40%: Khách mobile không thấy bạn</td></tr>
          <tr><td className="py-3 px-4 font-bold text-slate-700">5. Đầu trang tuyệt đối<br/><span className="text-xs font-normal text-blue-600">Abs. Top of Page Rate</span></td><td className="py-3 px-4">Bao nhiêu % bạn đứng #1</td><td className="py-3 px-4 text-red-600 font-medium">&lt;10%: Mất khách nóng nhất (70% Mỹ click #1)</td></tr>
          <tr className="bg-slate-50"><td className="py-3 px-4 font-bold text-slate-700">6. Tỷ lệ thắng<br/><span className="text-xs font-normal text-blue-600">Outranking Share</span></td><td className="py-3 px-4">Bạn xếp trên đối thủ bao nhiêu lần</td><td className="py-3 px-4 text-red-600 font-medium">&lt;30%: Bạn đang làm nền cho đối thủ</td></tr>
        </tbody>
      </table>
    </div>
    <p className="text-sm font-bold text-emerald-700 bg-emerald-50 border border-emerald-200 p-3 rounded-lg">🏆 Quy tắc 60-40-20: IS &gt;60%, Top of Page &gt;40%, Abs Top &gt;20% = Đang thống trị từ khóa đó.</p>

    <h3 className="text-2xl font-bold text-gray-900 mt-10 border-b pb-2">2. Kịch bản thực tế: Từ khóa [acrylic nails 77084]</h3>
    <div className="overflow-x-auto my-4">
      <table className="min-w-full text-xs border border-gray-200 rounded-lg overflow-hidden">
        <thead className="bg-slate-700 text-white">
          <tr>
            <th className="py-2 px-3 text-left">Tên miền</th>
            <th className="py-2 px-3 text-center">IS</th>
            <th className="py-2 px-3 text-center">Trùng lặp</th>
            <th className="py-2 px-3 text-center">Vị trí cao hơn</th>
            <th className="py-2 px-3 text-center">Đầu trang</th>
            <th className="py-2 px-3 text-center">Thắng</th>
          </tr>
        </thead>
        <tbody className="divide-y divide-gray-100">
          <tr className="bg-blue-50"><td className="py-2 px-3 font-bold text-blue-800">Bạn: luxurynails.com</td><td className="py-2 px-3 text-center font-bold text-red-600">22%</td><td className="py-2 px-3 text-center">-</td><td className="py-2 px-3 text-center">-</td><td className="py-2 px-3 text-center font-bold text-red-600">35%</td><td className="py-2 px-3 text-center">-</td></tr>
          <tr className="bg-red-50"><td className="py-2 px-3 font-bold text-red-800">regal-nails.com</td><td className="py-2 px-3 text-center font-bold">65%</td><td className="py-2 px-3 text-center">80%</td><td className="py-2 px-3 text-center font-bold text-red-700">75%</td><td className="py-2 px-3 text-center">88%</td><td className="py-2 px-3 text-center">15%</td></tr>
          <tr><td className="py-2 px-3">happy-nails-dallas.com</td><td className="py-2 px-3 text-center">40%</td><td className="py-2 px-3 text-center">60%</td><td className="py-2 px-3 text-center">55%</td><td className="py-2 px-3 text-center">60%</td><td className="py-2 px-3 text-center">40%</td></tr>
          <tr><td className="py-2 px-3">booksy.com</td><td className="py-2 px-3 text-center">30%</td><td className="py-2 px-3 text-center text-green-700 font-bold">20%</td><td className="py-2 px-3 text-center">30%</td><td className="py-2 px-3 text-center">50%</td><td className="py-2 px-3 text-center">70%</td></tr>
        </tbody>
      </table>
    </div>
    <div className="bg-slate-50 border border-slate-200 p-4 rounded-lg text-sm space-y-2">
      <p className="m-0"><strong className="text-red-700">1. Bạn thua trắng Regal Nails:</strong> IS 65% vs bạn 22%. 75% lần nó đứng trên. Nó cướp 3 khách thì bạn mới được 1.</p>
      <p className="m-0"><strong className="text-emerald-700">2. Booksy không phải đối thủ trực tiếp:</strong> Trùng lặp chỉ 20%. Nó chạy từ khóa rộng toàn quốc.</p>
      <p className="m-0"><strong className="text-blue-700">3. Happy Nails là đối thủ ngang cơ:</strong> Trùng 60%, thắng 40-60%. Đây là thằng phải đè trước.</p>
    </div>

    <h3 className="text-2xl font-bold text-gray-900 mt-10 border-b pb-2">3. 4 cách phản công khi đang thua</h3>
    <div className="space-y-4 my-6">
      <div className="border-l-4 border-red-400 bg-red-50 p-4 rounded-r-lg">
        <h4 className="font-bold text-red-800 mt-0 mb-1">Tình huống 1: IS &lt;25%, Đầu trang &lt;40%</h4>
        <p className="text-sm m-0 text-slate-700">→ Nguyên nhân: Ngân sách + Bid thấp. Tăng ngân sách +30%, Tăng bid +20%, hoặc Pause từ khóa ăn tiền để dồn cho từ khóa chính.</p>
      </div>
      <div className="border-l-4 border-orange-400 bg-orange-50 p-4 rounded-r-lg">
        <h4 className="font-bold text-orange-800 mt-0 mb-1">Tình huống 2: Trùng lặp &gt;70%, Vị trí cao hơn &gt;60%</h4>
        <p className="text-sm m-0 text-slate-700">→ Nguyên nhân: Điểm CL thua. <strong>KHÔNG tăng bid vội.</strong> Làm 3 việc: (1) Viết lại tiêu đề RSA nhồi số + ưu đãi. (2) Tách Ad Group theo dịch vụ+zipcode. (3) PageSpeed &gt;85, form 2 trường, CTA above fold.</p>
      </div>
      <div className="border-l-4 border-purple-400 bg-purple-50 p-4 rounded-r-lg">
        <h4 className="font-bold text-purple-800 mt-0 mb-1">Tình huống 3: Abs. Top &lt;10% dù bid cao</h4>
        <p className="text-sm m-0 text-slate-700">→ Đối thủ dùng tROAS/tCPA, máy học khôn hơn. Giải pháp: Bật tCPA, đặt = CPA thực 30 ngày x1.2. Để Google tự đấu.</p>
      </div>
      <div className="border-l-4 border-blue-400 bg-blue-50 p-4 rounded-r-lg">
        <h4 className="font-bold text-blue-800 mt-0 mb-1">Tình huống 4: Thấy đối thủ lạ (Groupon)</h4>
        <p className="text-sm m-0 text-slate-700">→ Tạo Campaign bid từ khóa <code>+groupon +nail</code>, RSA viết: <em>"No Groupon Needed – $35 Pedi, No Expiry"</em>. Hớt khách lại.</p>
      </div>
    </div>

    <h3 className="text-2xl font-bold text-gray-900 mt-10 border-b pb-2">4. Ăn cắp chiến lược đối thủ từ Auction Insights</h3>
    <ol className="text-sm space-y-2">
      <li><strong>Xem giờ nào đối thủ yếu:</strong> Phân đoạn "Thời gian trong ngày". Nếu 6pm-9pm IS đối thủ tụt → Bạn tăng bid +50% khung đó.</li>
      <li><strong>Xem thiết bị nào nó kém:</strong> Phân đoạn "Thiết bị". IS Mobile đối thủ 30% → Bạn bid +40% mobile để đè.</li>
      <li><strong>Xem Landing Page nó:</strong> Search từ khóa, click ads đối thủ, học cái hay, né cái dở.</li>
    </ol>

    <h3 className="text-2xl font-bold text-gray-900 mt-10 border-b pb-2">5. Tần suất check và KPI cần đạt</h3>
    <div className="overflow-x-auto my-4">
      <table className="min-w-full text-sm border border-gray-200 rounded-lg overflow-hidden">
        <thead className="bg-slate-100 text-slate-700">
          <tr><th className="py-2 px-4 text-left font-bold">Giai đoạn</th><th className="py-2 px-4 text-left font-bold">Tần suất</th><th className="py-2 px-4 text-left font-bold">KPI mục tiêu từ khóa Vòng Trong</th></tr>
        </thead>
        <tbody className="divide-y divide-gray-200">
          <tr><td className="py-2 px-4 font-medium">Tuần 1-2: Máy học</td><td className="py-2 px-4">2 ngày/lần</td><td className="py-2 px-4">IS &gt;30%. Không quan tâm thắng thua</td></tr>
          <tr className="bg-slate-50"><td className="py-2 px-4 font-medium">Tháng 1: Tối ưu</td><td className="py-2 px-4">1 tuần/lần</td><td className="py-2 px-4">Đầu trang &gt;60%, Abs Top &gt;20%, Thắng &gt;50% vs đối thủ trực tiếp</td></tr>
          <tr><td className="py-2 px-4 font-medium">Tháng 2+: Scale</td><td className="py-2 px-4">2 tuần/lần</td><td className="py-2 px-4">IS &gt;60%. Outranking Share &gt;70% vs 2 đối thủ gần nhất</td></tr>
        </tbody>
      </table>
    </div>

    <InteractiveChecklist
      id="chk22"
      title="Checklist Bài 22"
      tasks={[
        "Vào 1 Campaign chính, chọn tab Auction Insights, chọn 30 ngày.",
        "Xác định đối thủ trực tiếp (Overlap Rate >50%) và đối thủ không đáng sợ (Overlap <20%).",
        "Kiểm tra Abs. Top of Page Rate — nếu <10% thì ưu tiên sửa Điểm CL trước khi tăng bid.",
        "Xem phân đoạn theo Thiết bị để tìm khung giờ/thiết bị đối thủ yếu.",
      ]}
    />
  </div>
);

// ─── Bài 23 ───────────────────────────────────────────────────────────────────
export const Lesson23Content = () => (
  <div className="prose prose-blue max-w-none text-gray-800">
    <div className="bg-blue-50 border-l-4 border-blue-500 p-4 mb-6 rounded-r-lg flex items-start gap-3">
      <Filter className="text-blue-500 mt-0.5 shrink-0" size={24} />
      <p className="m-0 text-sm text-blue-800 font-medium">🎯 <strong>Báo cáo phân đoạn = Kính lúp tìm tiền.</strong> Chạy 1 tháng không xem = 30% ngân sách đổ vào giờ chết, thiết bị rác, zipcode không có khách. Biết cắt đúng chỗ, CPA giảm 20-40% ngay.</p>
    </div>
    <p><strong>Vào:</strong> Google Ads → Chiến dịch → Thông tin chi tiết → Thời điểm &amp; vị trí. <em>Hoặc</em> Cột → Sửa đổi cột → Phân đoạn.</p>
    <p className="text-sm bg-amber-50 border border-amber-200 p-3 rounded-lg text-amber-900"><strong>⚠️ Nguyên tắc:</strong> Chỉ điều chỉnh khi có tối thiểu <strong>100 click hoặc 10 conversion/phân đoạn</strong>. Dưới số đó là nhiễu, chưa đủ data.</p>

    <h3 className="text-2xl font-bold text-gray-900 mt-8 border-b pb-2">1. Phân đoạn Thiết bị – Mobile vs Desktop vs Tablet</h3>
    <p className="text-sm text-slate-600 italic">Thực tế tiệm nail Mỹ: 75-85% click từ Mobile. 90% cuộc gọi từ Mobile. Desktop CVR thấp.</p>
    <div className="overflow-x-auto my-4">
      <table className="min-w-full text-sm border border-gray-200 rounded-lg overflow-hidden">
        <thead className="bg-slate-800 text-white">
          <tr><th className="py-2 px-4 text-left font-bold">Thiết bị</th><th className="py-2 px-4 text-left font-bold">Dấu hiệu</th><th className="py-2 px-4 text-left font-bold">Quy tắc Bid Adj</th></tr>
        </thead>
        <tbody className="divide-y divide-gray-200">
          <tr className="bg-emerald-50"><td className="py-2 px-4 font-bold text-emerald-700">📱 Mobile</td><td className="py-2 px-4">CPA $15, CVR 12%</td><td className="py-2 px-4 font-bold text-emerald-700">+20% nếu CPA thấp hơn target 30%</td></tr>
          <tr className="bg-orange-50"><td className="py-2 px-4 font-bold text-orange-700">🖥 Desktop</td><td className="py-2 px-4">CPA $35, CVR 4%</td><td className="py-2 px-4 font-bold text-orange-700">-50% hoặc -100% nếu không ra khách</td></tr>
          <tr className="bg-red-50"><td className="py-2 px-4 font-bold text-red-700">📟 Tablet</td><td className="py-2 px-4">100 click, 0 conv</td><td className="py-2 px-4 font-bold text-red-700">-100% luôn. Tablet = khách lướt chơi</td></tr>
        </tbody>
      </table>
    </div>
    <p className="text-sm"><strong>Cách đặt:</strong> Chiến dịch → Cài đặt → Thiết bị → Tăng/giảm %. Ví dụ: Mobile CPA $12, Desktop CPA $28, Target $20 → Mobile <strong>+30%</strong>, Desktop <strong>-40%</strong>.</p>

    <h3 className="text-2xl font-bold text-gray-900 mt-10 border-b pb-2">2. Phân đoạn Vị trí – Zipcode, Bán kính</h3>
    <p className="text-sm text-slate-600 italic">Thực tế: Khách nail đi &lt;5 miles. Zipcode 77084 ra khách, zipcode 77095 cách 12 miles chỉ tốn tiền.</p>
    <div className="overflow-x-auto my-4">
      <table className="min-w-full text-sm border border-gray-200 rounded-lg overflow-hidden">
        <thead className="bg-slate-800 text-white">
          <tr><th className="py-2 px-4 text-left font-bold">Tình huống</th><th className="py-2 px-4 text-left font-bold">Dữ liệu</th><th className="py-2 px-4 text-left font-bold">Bid Adj</th></tr>
        </thead>
        <tbody className="divide-y divide-gray-200">
          <tr className="bg-yellow-50"><td className="py-2 px-4 font-bold text-yellow-700">Zipcode vàng</td><td className="py-2 px-4 text-sm">77084: 200 click, 25 conv, CPA $14</td><td className="py-2 px-4 font-bold text-emerald-700">+50%: Cướp top 1 tuyệt đối</td></tr>
          <tr className="bg-red-50"><td className="py-2 px-4 font-bold text-red-700">Zipcode đắt</td><td className="py-2 px-4 text-sm">77095: 150 click, 3 conv, CPA $45</td><td className="py-2 px-4 font-bold text-red-700">-70% hoặc Loại trừ luôn</td></tr>
          <tr><td className="py-2 px-4 font-bold">Bán kính lồng</td><td className="py-2 px-4 text-sm">0-2mi: CVR 18% / 5-10mi: CVR 6%</td><td className="py-2 px-4 text-sm">0-2mi: <strong>+40%</strong> / 2-5mi: 0% / 5-15mi: <strong>-80%</strong></td></tr>
        </tbody>
      </table>
    </div>
    <p className="text-sm text-slate-600">💡 Mẹo Pro: Vào GBP xem "Khách tìm đường từ đâu". Zipcode nào nhiều thì +bid zipcode đó.</p>

    <h3 className="text-2xl font-bold text-gray-900 mt-10 border-b pb-2">3. Phân đoạn Giờ trong ngày – Dayparting</h3>
    <p className="text-sm text-slate-600 italic">9am-11am: Khách văn phòng book giờ nghỉ trưa. 4pm-7pm: Khách tan làm. 11pm-6am: Chỉ có click phá.</p>
    <div className="overflow-x-auto my-4">
      <table className="min-w-full text-sm border border-gray-200 rounded-lg overflow-hidden">
        <thead className="bg-slate-800 text-white">
          <tr><th className="py-2 px-3 text-left font-bold">Khung giờ</th><th className="py-2 px-3 text-left font-bold">Hành vi khách</th><th className="py-2 px-3 text-center font-bold">CPA</th><th className="py-2 px-3 text-center font-bold">Bid Adj</th></tr>
        </thead>
        <tbody className="divide-y divide-gray-200">
          <tr className="bg-red-50"><td className="py-2 px-3 font-medium">12am – 6am</td><td className="py-2 px-3">Bot, khách mất ngủ</td><td className="py-2 px-3 text-center">$80</td><td className="py-2 px-3 text-center font-bold text-red-700">-100%</td></tr>
          <tr><td className="py-2 px-3 font-medium">6am – 9am</td><td className="py-2 px-3">Mở cửa, khách check</td><td className="py-2 px-3 text-center">$25</td><td className="py-2 px-3 text-center font-medium text-orange-700">-30%</td></tr>
          <tr className="bg-yellow-50"><td className="py-2 px-3 font-bold text-yellow-700">9am – 12pm ⭐</td><td className="py-2 px-3 font-bold">Book giờ trưa/chiều – GIỜ VÀNG #1</td><td className="py-2 px-3 text-center">$14</td><td className="py-2 px-3 text-center font-bold text-emerald-700">+40%</td></tr>
          <tr><td className="py-2 px-3 font-medium">12pm – 2pm</td><td className="py-2 px-3">Khách nghỉ trưa tìm walk-in</td><td className="py-2 px-3 text-center">$16</td><td className="py-2 px-3 text-center font-medium text-emerald-700">+20%</td></tr>
          <tr className="bg-slate-50"><td className="py-2 px-3 font-medium">2pm – 4pm</td><td className="py-2 px-3">Giờ chậm</td><td className="py-2 px-3 text-center">$22</td><td className="py-2 px-3 text-center">0%</td></tr>
          <tr className="bg-yellow-50"><td className="py-2 px-3 font-bold text-yellow-700">4pm – 7pm ⭐</td><td className="py-2 px-3 font-bold">Tan làm, cao điểm – GIỜ VÀNG #2</td><td className="py-2 px-3 text-center">$15</td><td className="py-2 px-3 text-center font-bold text-emerald-700">+35%</td></tr>
          <tr><td className="py-2 px-3 font-medium">7pm – 10pm</td><td className="py-2 px-3">Đóng cửa, book ngày mai</td><td className="py-2 px-3 text-center">$28</td><td className="py-2 px-3 text-center font-medium text-red-700">-50%</td></tr>
          <tr className="bg-red-50"><td className="py-2 px-3 font-medium">10pm – 12am</td><td className="py-2 px-3">Rác</td><td className="py-2 px-3 text-center">$60</td><td className="py-2 px-3 text-center font-bold text-red-700">-90%</td></tr>
        </tbody>
      </table>
    </div>

    <h3 className="text-2xl font-bold text-gray-900 mt-10 border-b pb-2">4. Phân đoạn Ngày trong tuần</h3>
    <div className="overflow-x-auto my-4">
      <table className="min-w-full text-sm border border-gray-200 rounded-lg overflow-hidden">
        <thead className="bg-slate-100 text-slate-700">
          <tr><th className="py-2 px-4 text-left font-bold">Ngày</th><th className="py-2 px-4 text-left font-bold">Insight</th><th className="py-2 px-4 text-center font-bold">CPA</th><th className="py-2 px-4 text-center font-bold">Bid Adj</th></tr>
        </thead>
        <tbody className="divide-y divide-gray-200">
          <tr><td className="py-2 px-4">Thứ 2</td><td className="py-2 px-4">Chậm, khách hết tiền</td><td className="py-2 px-4 text-center">$26</td><td className="py-2 px-4 text-center font-medium text-orange-700">-20%</td></tr>
          <tr className="bg-emerald-50"><td className="py-2 px-4 font-bold text-emerald-700">Thứ 3 – Thứ 5</td><td className="py-2 px-4">Đặt lịch cuối tuần, CPA rẻ, ít đối thủ</td><td className="py-2 px-4 text-center">$16</td><td className="py-2 px-4 text-center font-bold text-emerald-700">+25%</td></tr>
          <tr><td className="py-2 px-4">Thứ 6</td><td className="py-2 px-4">Cao điểm, cạnh tranh gắt</td><td className="py-2 px-4 text-center">$20</td><td className="py-2 px-4 text-center font-medium text-emerald-700">+10%</td></tr>
          <tr className="bg-emerald-50"><td className="py-2 px-4 font-bold text-emerald-700">Thứ 7</td><td className="py-2 px-4">Đông nhất, khách walk-in</td><td className="py-2 px-4 text-center">$18</td><td className="py-2 px-4 text-center font-bold text-emerald-700">+30%</td></tr>
          <tr><td className="py-2 px-4">Chủ Nhật</td><td className="py-2 px-4">50% tiệm đóng cửa → Nếu bạn mở = mỏ vàng</td><td className="py-2 px-4 text-center">$14</td><td className="py-2 px-4 text-center font-bold">+50% nếu mở / -100% nếu đóng</td></tr>
        </tbody>
      </table>
    </div>

    <h3 className="text-2xl font-bold text-gray-900 mt-10 border-b pb-2">5. 5 Quy tắc vàng đặt Bid Adjustment</h3>
    <div className="space-y-3 my-4">
      <div className="bg-slate-50 border border-slate-200 rounded-lg p-4 text-sm">
        <p className="font-bold text-slate-800 mb-1">Quy tắc 1: Cộng dồn được</p>
        <p className="m-0 text-slate-600">Mobile +40% × Giờ 9am +40% × Zipcode +50% = Bid x2.94. Nếu &gt;3x thì giảm bớt vì CPC vọt nóc.</p>
      </div>
      <div className="bg-blue-50 border border-blue-200 rounded-lg p-4 text-sm">
        <p className="font-bold text-blue-800 mb-1">Quy tắc 2: Không điều chỉnh tay khi chạy tCPA/tROAS</p>
        <p className="m-0 text-blue-700">Smart Bidding tự chỉnh. Bạn chỉnh tay là phá AI. Chỉ tay với Manual CPC/Max Clicks. Với tCPA thì dùng "Loại trừ" thay vì giảm bid.</p>
      </div>
      <div className="bg-slate-50 border border-slate-200 rounded-lg p-4 text-sm">
        <p className="font-bold text-slate-800 mb-1">Quy tắc 3: 80/20 – Chỉ tối ưu 20% gây ra 80% chi phí</p>
        <p className="m-0 text-slate-600">Chỉ chỉnh 3 giờ vàng + 2 zipcode tệ nhất + Desktop là giảm 30% CPA.</p>
      </div>
      <div className="bg-slate-50 border border-slate-200 rounded-lg p-4 text-sm">
        <p className="font-bold text-slate-800 mb-1">Quy tắc 4: Đủ 14 ngày dữ liệu mới chỉnh</p>
        <p className="m-0 text-slate-600">Mới chạy 3 ngày thấy Thứ 2 đắt mà -80% là sai. Đợi &gt;500 click mới đủ mẫu thống kê.</p>
      </div>
      <div className="bg-red-50 border border-red-200 rounded-lg p-4 text-sm">
        <p className="font-bold text-red-800 mb-1">Quy tắc 5: Âm 100% = Loại trừ cho sạch</p>
        <p className="m-0 text-red-700">Thay vì -90% để lại 10% rác, đặt -100%. Giờ 2am, Tablet, Zipcode xa -100% hết.</p>
      </div>
    </div>

    <InteractiveChecklist
      id="chk23"
      title="Checklist Bài 23 (Thứ 2 hàng tuần – 15 phút)"
      tasks={[
        "Thiết bị: Mobile CPA <Target 30% → +20%. Desktop CPA >2x Target → -50%.",
        "Vị trí: 3 zipcode CPA >2x Target → -70% hoặc Loại trừ.",
        "Giờ: 3 giờ CPA <Target 40% → +30%. 3 giờ CPA >2x Target → -80%.",
        "Ngày: Đóng cửa ngày nào thì -100% ngày đó để không lãng phí tiền.",
        "Kiểm tra cộng dồn: Bid tổng >3x thì giảm bớt 1 điều chỉnh.",
      ]}
    />
  </div>
);

// ─── Bài 24 ───────────────────────────────────────────────────────────────────
export const Lesson24Content = () => (
  <div className="prose prose-blue max-w-none text-gray-800">
    <div className="bg-blue-50 border-l-4 border-blue-500 p-4 mb-6 rounded-r-lg flex items-start gap-3">
      <RefreshCw className="text-blue-500 mt-0.5 shrink-0" size={24} />
      <p className="m-0 text-sm text-blue-800 font-medium">🎯 <strong>Nguyên tắc #1: Không đoán. Test.</strong> Ads CTR 6% vs CTR 12% = Cùng $1000, bên ra 60 click, bên ra 120 click. Khác biệt gấp đôi tiền. <strong>Nguyên tắc #2: Mỗi lần chỉ test 1 thứ.</strong></p>
    </div>

    <h3 className="text-2xl font-bold text-gray-900 border-b pb-2">1. Thứ tự ưu tiên test RSA – Cái nào ảnh hưởng CTR mạnh nhất</h3>
    <div className="overflow-x-auto my-6">
      <table className="min-w-full bg-white border border-gray-200 text-sm rounded-lg overflow-hidden shadow-sm">
        <thead className="bg-slate-800 text-white">
          <tr>
            <th className="py-3 px-3 text-left font-bold w-12">#</th>
            <th className="py-3 px-3 text-left font-bold">Yếu tố</th>
            <th className="py-3 px-3 text-left font-bold">Tác động CTR</th>
            <th className="py-3 px-3 text-left font-bold">Thời gian đủ data</th>
            <th className="py-3 px-3 text-left font-bold">Ví dụ test Acrylic</th>
          </tr>
        </thead>
        <tbody className="divide-y divide-gray-200">
          <tr className="bg-yellow-50">
            <td className="py-3 px-3 font-bold text-yellow-700 text-center">1</td>
            <td className="py-3 px-3 font-bold">Tiêu đề (Headline 1-2-3)</td>
            <td className="py-3 px-3 font-bold text-emerald-700">+++ 60% CTR</td>
            <td className="py-3 px-3">7-14 ngày / 1000 impr</td>
            <td className="py-3 px-3 text-xs"><code>Acrylic $45</code> vs <code>New Client $5 Off</code> vs <code>Walk-ins Welcome</code></td>
          </tr>
          <tr>
            <td className="py-3 px-3 font-bold text-blue-700 text-center">2</td>
            <td className="py-3 px-3">Mô tả (Description 1)</td>
            <td className="py-3 px-3 text-blue-700">++ 20% CTR</td>
            <td className="py-3 px-3">14 ngày / 2000 impr</td>
            <td className="py-3 px-3 text-xs"><code>Book today</code> vs <code>Free parking 77084</code></td>
          </tr>
          <tr className="bg-slate-50">
            <td className="py-3 px-3 font-bold text-slate-600 text-center">3</td>
            <td className="py-3 px-3">Đường dẫn hiển thị (Path 1/2)</td>
            <td className="py-3 px-3 text-slate-600">+ 10% CTR</td>
            <td className="py-3 px-3">14 ngày</td>
            <td className="py-3 px-3 text-xs"><code>/Acrylic</code> vs <code>/Price-List</code> vs <code>/Book-Now</code></td>
          </tr>
          <tr>
            <td className="py-3 px-3 font-bold text-slate-600 text-center">4</td>
            <td className="py-3 px-3">Tiện ích (Sitelink, Callout)</td>
            <td className="py-3 px-3 text-slate-600">+ 10% CTR</td>
            <td className="py-3 px-3">7 ngày</td>
            <td className="py-3 px-3 text-xs">Sitelink <code>Book Now</code> vs <code>See Designs</code></td>
          </tr>
        </tbody>
      </table>
    </div>
    <p className="text-sm font-medium text-blue-800 bg-blue-50 border border-blue-200 p-3 rounded-lg">💡 1 tháng đầu chỉ test Tiêu đề. Đừng phí thời gian test mấy cái khác khi CTR còn &lt;5%.</p>

    <h3 className="text-2xl font-bold text-gray-900 mt-10 border-b pb-2">2. Quy trình A/B Test Tiêu đề 4 bước</h3>
    <div className="space-y-4 my-6">
      <div className="bg-slate-50 border border-slate-200 rounded-xl p-4">
        <h4 className="font-bold text-blue-700 mt-0 mb-2 text-base">Bước 1: Tạo 2 RSA trong cùng 1 Ad Group</h4>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
          <div className="bg-white border border-slate-300 rounded-lg p-3">
            <p className="font-bold text-slate-700 text-xs mb-2 uppercase tracking-wide">RSA A – Bản Gốc: Đánh vào Giá</p>
            <div className="font-mono text-xs space-y-1">
              <div>TĐ1: <strong>Acrylic Nails 77084</strong></div>
              <div>TĐ2: <strong>Acrylic Full Set $45</strong></div>
              <div>TĐ3: <strong>New Client $5 Off</strong></div>
            </div>
          </div>
          <div className="bg-white border border-blue-300 rounded-lg p-3">
            <p className="font-bold text-blue-700 text-xs mb-2 uppercase tracking-wide">RSA B – Bản Test: Đánh vào Niềm tin</p>
            <div className="font-mono text-xs space-y-1">
              <div>TĐ1: <strong>Acrylic Nails 77084</strong> (giữ nguyên)</div>
              <div>TĐ2: <span className="text-blue-600">10+ Years Experienced Techs</span></div>
              <div>TĐ3: <span className="text-blue-600">Rated 4.9★ On Google</span></div>
            </div>
          </div>
        </div>
        <p className="text-xs text-slate-500 mt-2 mb-0">Giữ nguyên TĐ1 chứa từ khóa. Chỉ thay TĐ2, TĐ3 để test "Giá" vs "Uy tín".</p>
      </div>
      <div className="bg-slate-50 border border-slate-200 rounded-xl p-4">
        <h4 className="font-bold text-blue-700 mt-0 mb-1 text-base">Bước 2: Cài Luân phiên quảng cáo</h4>
        <p className="text-sm m-0 text-slate-600">Chiến dịch → Cài đặt → Cài đặt khác → Luân phiên quảng cáo → Chọn <strong>"Không tối ưu hóa: Luân phiên không giới hạn"</strong>. Bắt Google chia 50/50 traffic.</p>
      </div>
      <div className="bg-slate-50 border border-slate-200 rounded-xl p-4">
        <h4 className="font-bold text-blue-700 mt-0 mb-1 text-base">Bước 3: Chạy đến khi đủ dữ liệu</h4>
        <div className="flex flex-wrap gap-3 mt-2">
          {['Mỗi ads ≥3000 impressions','Mỗi ads ≥100 click','Chạy ≥7 ngày'].map(c=>(
            <span key={c} className="bg-emerald-100 text-emerald-800 text-xs font-medium px-3 py-1 rounded-full">{c}</span>
          ))}
        </div>
        <p className="text-xs text-slate-500 mt-2 mb-0">Thiếu 1 trong 3 = Data chưa đủ, đừng kết luận vội.</p>
      </div>
      <div className="bg-slate-50 border border-slate-200 rounded-xl p-4">
        <h4 className="font-bold text-blue-700 mt-0 mb-2 text-base">Bước 4: Đọc kết quả &amp; Ra quyết định</h4>
        <div className="overflow-x-auto">
          <table className="min-w-full text-xs border border-gray-200 rounded overflow-hidden">
            <thead className="bg-slate-700 text-white">
              <tr><th className="py-2 px-3 text-left">Ads</th><th className="py-2 px-3 text-center">Impr</th><th className="py-2 px-3 text-center">Click</th><th className="py-2 px-3 text-center">CTR</th><th className="py-2 px-3 text-center">Conv</th><th className="py-2 px-3 text-center">CPA</th><th className="py-2 px-3 text-left">Kết luận</th></tr>
            </thead>
            <tbody>
              <tr className="bg-emerald-50"><td className="py-2 px-3 font-bold">RSA A – Giá</td><td className="py-2 px-3 text-center">4,200</td><td className="py-2 px-3 text-center">252</td><td className="py-2 px-3 text-center font-bold text-emerald-700">6.0%</td><td className="py-2 px-3 text-center">18</td><td className="py-2 px-3 text-center">$22</td><td className="py-2 px-3 font-bold text-emerald-700">THẮNG ✓</td></tr>
              <tr className="bg-red-50"><td className="py-2 px-3">RSA B – Uy tín</td><td className="py-2 px-3 text-center">4,100</td><td className="py-2 px-3 text-center">164</td><td className="py-2 px-3 text-center text-red-600">4.0%</td><td className="py-2 px-3 text-center">12</td><td className="py-2 px-3 text-center">$33</td><td className="py-2 px-3 text-red-600">Thua</td></tr>
            </tbody>
          </table>
        </div>
        <p className="text-xs mt-2 mb-0 text-slate-600"><strong>Hành động:</strong> Pause RSA B → Copy RSA A thành RSA C → Giữ TĐ "$45" (win), test tiếp TĐ3: <code>Free Gel Top Coat</code> vs <code>Walk-ins Welcome</code>.</p>
      </div>
    </div>

    <h3 className="text-2xl font-bold text-gray-900 mt-10 border-b pb-2">3. Test cái gì trong Tiêu đề? 5 góc độ tâm lý</h3>
    <div className="overflow-x-auto my-4">
      <table className="min-w-full text-sm border border-gray-200 rounded-lg overflow-hidden">
        <thead className="bg-slate-100 text-slate-700">
          <tr><th className="py-2 px-3 text-left font-bold">Góc độ</th><th className="py-2 px-3 text-left font-bold">Tiêu đề A</th><th className="py-2 px-3 text-left font-bold">Tiêu đề B</th><th className="py-2 px-3 text-left font-bold">Khách nào cắn câu</th></tr>
        </thead>
        <tbody className="divide-y divide-gray-200">
          <tr><td className="py-2 px-3 font-bold">1. Giá vs Chất lượng</td><td className="py-2 px-3 font-mono text-xs">Acrylic Full Set $45</td><td className="py-2 px-3 font-mono text-xs">Premium Acrylic, No Lifting</td><td className="py-2 px-3 text-xs">Ham rẻ vs Sợ hỏng</td></tr>
          <tr className="bg-slate-50"><td className="py-2 px-3 font-bold">2. Khan hiếm vs Dễ dàng</td><td className="py-2 px-3 font-mono text-xs">Only 5 Slots Today</td><td className="py-2 px-3 font-mono text-xs">Walk-ins Welcome Daily</td><td className="py-2 px-3 text-xs">FOMO vs Lười book</td></tr>
          <tr><td className="py-2 px-3 font-bold">3. Nỗi đau vs Ước muốn</td><td className="py-2 px-3 font-mono text-xs">No More Chipped Nails</td><td className="py-2 px-3 font-mono text-xs">Get Instagram-Ready Nails</td><td className="py-2 px-3 text-xs">Ghét móng gãy vs Thích đẹp</td></tr>
          <tr className="bg-slate-50"><td className="py-2 px-3 font-bold">4. Con số vs Cảm xúc</td><td className="py-2 px-3 font-mono text-xs">1,200+ 5-Star Reviews</td><td className="py-2 px-3 font-mono text-xs">Loved By Dallas Clients</td><td className="py-2 px-3 text-xs">Tin số liệu vs Tin cảm xúc</td></tr>
          <tr><td className="py-2 px-3 font-bold">5. Địa phương vs Kỹ thuật</td><td className="py-2 px-3 font-mono text-xs">Nail Salon 77084</td><td className="py-2 px-3 font-mono text-xs">Gel X Certified Techs</td><td className="py-2 px-3 text-xs">Gần nhà vs Tay nghề cao</td></tr>
        </tbody>
      </table>
    </div>

    <h3 className="text-2xl font-bold text-gray-900 mt-10 border-b pb-2">4. Lộ trình 90 ngày test sau Tiêu đề</h3>
    <div className="overflow-x-auto my-4">
      <table className="min-w-full text-sm border border-gray-200 rounded-lg overflow-hidden">
        <thead className="bg-slate-100 text-slate-700">
          <tr><th className="py-2 px-3 font-bold">Tuần</th><th className="py-2 px-3 font-bold">Test cái gì</th><th className="py-2 px-3 font-bold">Mục tiêu</th></tr>
        </thead>
        <tbody className="divide-y divide-gray-200">
          <tr><td className="py-2 px-3 font-bold">Tuần 1-2</td><td className="py-2 px-3">Tiêu đề: Giá vs Uy tín</td><td className="py-2 px-3">CTR từ 4% → 7%</td></tr>
          <tr className="bg-slate-50"><td className="py-2 px-3 font-bold">Tuần 3-4</td><td className="py-2 px-3">Tiêu đề: CTA <code>Book Now</code> vs <code>Call Now</code></td><td className="py-2 px-3">Tăng CVR</td></tr>
          <tr><td className="py-2 px-3 font-bold">Tuần 5-6</td><td className="py-2 px-3">Mô tả 1: <code>Free Parking</code> vs <code>Open Sunday</code></td><td className="py-2 px-3">CTR +1-2%</td></tr>
          <tr className="bg-slate-50"><td className="py-2 px-3 font-bold">Tuần 7-8</td><td className="py-2 px-3">Đường dẫn: <code>/Acrylic</code> vs <code>/Book-Now</code></td><td className="py-2 px-3">QS tăng từ 7→8</td></tr>
          <tr><td className="py-2 px-3 font-bold">Tuần 9-12</td><td className="py-2 px-3">Sitelink: <code>Price List</code> vs <code>Our Designs</code></td><td className="py-2 px-3">Sitelink nào CTR cao thì ghim</td></tr>
        </tbody>
      </table>
    </div>

    <h3 className="text-2xl font-bold text-gray-900 mt-10 border-b pb-2">5. 5 sai lầm A/B test khiến kết quả sai bét</h3>
    <div className="overflow-x-auto my-4">
      <table className="min-w-full text-sm border border-gray-200 rounded-lg overflow-hidden">
        <thead className="bg-red-100 text-red-900">
          <tr><th className="py-2 px-3 text-left font-bold">Lỗi</th><th className="py-2 px-3 text-left font-bold">Tại sao sai</th><th className="py-2 px-3 text-left font-bold">Cách sửa</th></tr>
        </thead>
        <tbody className="divide-y divide-red-50">
          <tr><td className="py-2 px-3 font-medium">1. Test lúc camp mới chạy</td><td className="py-2 px-3 text-xs">Data chưa ổn định, CTR nhảy loạn</td><td className="py-2 px-3 text-xs">Đợi 30+ conv rồi mới test</td></tr>
          <tr className="bg-slate-50"><td className="py-2 px-3 font-medium">2. Thay 5 tiêu đề 1 lúc</td><td className="py-2 px-3 text-xs">Không biết cái nào làm CTR tăng</td><td className="py-2 px-3 text-xs">Mỗi lần chỉ thay 1-2 tiêu đề</td></tr>
          <tr><td className="py-2 px-3 font-medium">3. Kết luận sau 2 ngày</td><td className="py-2 px-3 text-xs">Thứ 2 CTR 8%, Thứ 7 CTR 3% do biến động</td><td className="py-2 px-3 text-xs">Đủ 7 ngày + 3000 impressions</td></tr>
          <tr className="bg-slate-50"><td className="py-2 px-3 font-medium">4. Chỉ so CTR, quên CPA</td><td className="py-2 px-3 text-xs">CTR 10% CPA $40 vs CTR 7% CPA $18</td><td className="py-2 px-3 text-xs">Luôn xem CTR + CPA. CPA thấp thắng</td></tr>
          <tr><td className="py-2 px-3 font-medium">5. Pause ads thua ngay</td><td className="py-2 px-3 text-xs">CTR thấp nhưng conversion value cao</td><td className="py-2 px-3 text-xs">Xem cột "Giá trị chuyển đổi" trước khi pause</td></tr>
        </tbody>
      </table>
    </div>

    <div className="bg-emerald-50 border border-emerald-200 p-4 rounded-xl my-6">
      <p className="font-bold text-emerald-800 m-0">💰 Chốt: A/B test = Lãi kép. Tháng 1 CTR 4% tốn $5/click. Tháng 3 CTR 12% tốn $1.8/click với cùng vị trí. Cùng $1000: trước ra 200 click, sau ra 555 click. Không tăng ngân sách vẫn x2.8 khách.</p>
    </div>

    <InteractiveChecklist
      id="chk24"
      title="Checklist Bài 24"
      tasks={[
        "Vào Ad Group nhiều tiền nhất, copy RSA đang chạy thành RSA B.",
        "Sửa 2 tiêu đề theo công thức: Giữ TĐ1 có từ khóa, thay TĐ2 = Giá $XX, TĐ3 = 4.9★ Reviews.",
        "Bật Luân phiên không giới hạn để Google chia 50/50 traffic.",
        "Đặt lịch xem kết quả sau 7 ngày (đủ 3000 impr mỗi ads).",
        "Sau khi có winner: Pause ads thua, tạo RSA C test tiếp 1 biến số mới.",
      ]}
    />
  </div>
);


export const Lesson25Content = () => (
  <div className="prose prose-blue max-w-none text-gray-800">
    <div className="bg-blue-50 border-l-4 border-blue-500 p-4 mb-6 rounded-r-lg">
      <p className="m-0 text-sm text-blue-800 font-medium">🎯 <strong>Sự thật:</strong> 90% người làm Ad Strength "Excellent" xong CTR còn tệ hơn "Good". Đạt "Excellent" là điều kiện cần. CTR {'>'} 8% mới là điều kiện đủ để có lãi.</p>
    </div>

    <h3 className="text-2xl font-bold text-gray-900 border-b pb-2">1. 5 Yếu tố Google chấm điểm Ad Strength</h3>
    <div className="overflow-x-auto my-6">
      <table className="min-w-full bg-white border border-gray-200 text-sm rounded-lg overflow-hidden shadow-sm">
        <thead className="bg-slate-800 text-white">
          <tr>
            <th className="py-3 px-4 text-left font-bold">Yếu tố</th>
            <th className="py-3 px-4 text-left font-bold">Mức "Good"</th>
            <th className="py-3 px-4 text-left font-bold">Mức "Excellent"</th>
          </tr>
        </thead>
        <tbody className="divide-y divide-gray-200">
          <tr className="hover:bg-gray-50"><td className="py-3 px-4 font-bold">1. Số lượng tiêu đề</td><td className="py-3 px-4">8-10 TĐ</td><td className="py-3 px-4 font-bold text-emerald-600">15 TĐ</td></tr>
          <tr className="hover:bg-gray-50"><td className="py-3 px-4 font-bold">2. Số lượng mô tả</td><td className="py-3 px-4">2 Mô tả</td><td className="py-3 px-4 font-bold text-emerald-600">4 Mô tả</td></tr>
          <tr className="hover:bg-gray-50"><td className="py-3 px-4 font-bold">3. Tính độc đáo</td><td className="py-3 px-4">&lt;3 TĐ trùng</td><td className="py-3 px-4 font-bold text-emerald-600">0 TĐ trùng ý</td></tr>
          <tr className="hover:bg-gray-50"><td className="py-3 px-4 font-bold">4. Liên quan từ khóa</td><td className="py-3 px-4">2 TĐ chứa từ khóa</td><td className="py-3 px-4 font-bold text-emerald-600">3-5 TĐ chứa từ khóa</td></tr>
          <tr className="hover:bg-gray-50"><td className="py-3 px-4 font-bold">5. Độ đa dạng</td><td className="py-3 px-4">Thiếu 1 nhóm</td><td className="py-3 px-4 font-bold text-emerald-600">Đủ 5 nhóm: Lợi ích, Giá, CTA, Brand, KM</td></tr>
        </tbody>
      </table>
    </div>

    <h3 className="text-2xl font-bold text-gray-900 border-b pb-2">2. Công thức 15+4 cho tiệm nail đạt "Excellent" + CTR 12%</h3>
    <div className="overflow-x-auto my-6">
      <table className="min-w-full bg-white border border-gray-200 text-sm rounded-lg overflow-hidden shadow-sm">
        <thead className="bg-slate-800 text-white">
          <tr>
            <th className="py-3 px-4 text-left font-bold">Cụm (5 nhóm bắt buộc)</th>
            <th className="py-3 px-4 text-left font-bold w-16">Số TĐ</th>
            <th className="py-3 px-4 text-left font-bold">Ví dụ</th>
          </tr>
        </thead>
        <tbody className="divide-y divide-gray-200">
          <tr className="hover:bg-gray-50"><td className="py-3 px-4 font-bold text-blue-700">Cụm 1: Từ khóa</td><td className="py-3 px-4 text-center">3-4</td><td className="py-3 px-4 text-xs">Acrylic Nails 77084 | Best Acrylic Nails Near Me | Acrylic Full Set Dallas</td></tr>
          <tr className="hover:bg-gray-50"><td className="py-3 px-4 font-bold text-blue-700">Cụm 2: Thương hiệu</td><td className="py-3 px-4 text-center">2</td><td className="py-3 px-4 text-xs">Luxury Nails Official | Licensed Nail Salon 77084</td></tr>
          <tr className="hover:bg-gray-50"><td className="py-3 px-4 font-bold text-blue-700">Cụm 3: Lợi ích/USP</td><td className="py-3 px-4 text-center">4</td><td className="py-3 px-4 text-xs">No Lifting For 3 Weeks | Sterilized Tools Only | 10+ Years Master Techs | 1000+ Designs</td></tr>
          <tr className="hover:bg-gray-50"><td className="py-3 px-4 font-bold text-blue-700">Cụm 4: Giá/Khuyến mãi</td><td className="py-3 px-4 text-center">3</td><td className="py-3 px-4 text-xs">Acrylic Full Set $45 | New Client $5 Off | Free Gel Top Coat</td></tr>
          <tr className="hover:bg-gray-50"><td className="py-3 px-4 font-bold text-blue-700">Cụm 5: CTA</td><td className="py-3 px-4 text-center">2</td><td className="py-3 px-4 text-xs">Book Online 24/7 | Walk-ins Welcome Today</td></tr>
        </tbody>
      </table>
    </div>

    <h3 className="text-2xl font-bold text-gray-900 border-b pb-2">3. Quy tắc Ghim & 4 bẫy thường gặp</h3>
    <div className="bg-amber-50 border border-amber-200 rounded-xl p-4 my-4">
      <p className="font-bold text-amber-800 m-0">Quy tắc vàng: Ghim TĐ1 = Từ khóa. TĐ2 = Brand (nếu cần). Tối đa 2 vị trí. Ghim 5+ vị trí → Google hết tổ hợp → CTR giảm 40%.</p>
    </div>
    <div className="grid grid-cols-1 md:grid-cols-2 gap-3 my-4">
      {[
        ['Nhồi từ khóa máy móc', 'Chỉ 3-4 TĐ có từ khóa. Còn lại là USP cụ thể'],
        ['Dùng Best/Top/Great/Premier cùng lúc', 'Thay = Sterilized Tools, 10 Years Experience'],
        ['Ghim quá nhiều vị trí', 'Chỉ ghim tối đa 2 vị trí'],
        ['Viết cho Google, không cho người', 'Acrylic Nails $45 – No Lifting ngắn gọn hơn Professional Services'],
      ].map(([bep, ct], i) => (
        <div key={i} className="bg-red-50 border border-red-200 rounded-lg p-3">
          <p className="font-bold text-red-700 m-0 text-sm">❌ Bẫy: {bep}</p>
          <p className="text-emerald-700 m-0 text-sm mt-1">✅ Sửa: {ct}</p>
        </div>
      ))}
    </div>

    <div className="bg-emerald-50 border border-emerald-200 rounded-xl p-4 my-6">
      <p className="font-bold text-emerald-800 m-0">💡 Chốt Bài 25: "Excellent" CTR 12% tốt hơn "Good" CTR 3%. Sau 30 ngày, xóa 3 TĐ CTR &lt;4% dù Ad Strength tụt về "Good".</p>
    </div>

    <InteractiveChecklist
      id="chk25"
      title="Checklist Bài 25"
      tasks={[
        'Kiểm tra Ad Strength RSA hiện tại – đang ở mức nào?',
        'Đếm đủ 15 TĐ với 5 cụm: Từ khóa (3-4) + Brand (2) + USP (4) + Giá (3) + CTA (2)',
        'Viết đủ 4 mô tả, mỗi cái >80 ký tự với góc nhìn khác nhau',
        'Chỉ ghim tối đa 2 vị trí: TĐ1 từ khóa + TĐ2 brand',
        'Sau 30 ngày: xóa TĐ CTR <4% dù Ad Strength tụt về Good',
      ]}
    />
  </div>
);

export const Lesson26Content = () => (
  <div className="prose prose-blue max-w-none text-gray-800">
    <div className="bg-blue-50 border-l-4 border-blue-500 p-4 mb-6 rounded-r-lg">
      <p className="m-0 text-sm text-blue-800 font-medium">🎯 <strong>RLSA = Nhặt tiền rơi.</strong> 96% khách vào web không book. RLSA giúp hốt lại 15-25% với CPA rẻ bằng 1/3 khách mới.</p>
    </div>

    <h3 className="text-2xl font-bold text-gray-900 border-b pb-2">1. 4 điều kiện để chạy RLSA</h3>
    <div className="overflow-x-auto my-6">
      <table className="min-w-full bg-white border border-gray-200 text-sm rounded-lg overflow-hidden shadow-sm">
        <thead className="bg-slate-800 text-white">
          <tr>
            <th className="py-3 px-4 text-left font-bold">Điều kiện</th>
            <th className="py-3 px-4 text-left font-bold">Yêu cầu</th>
            <th className="py-3 px-4 text-left font-bold">Cách check</th>
          </tr>
        </thead>
        <tbody className="divide-y divide-gray-200">
          <tr className="hover:bg-gray-50"><td className="py-3 px-4 font-bold">1. Tag Google Ads</td><td className="py-3 px-4">GTag hoặc GA4 đã link</td><td className="py-3 px-4 text-blue-600 text-xs">Công cụ → Trình quản lý dữ liệu → Google Tag</td></tr>
          <tr className="hover:bg-gray-50"><td className="py-3 px-4 font-bold">2. Danh sách ≥1000 người</td><td className="py-3 px-4">1000 user/30 ngày</td><td className="py-3 px-4 text-blue-600 text-xs">Công cụ → Danh sách đối tượng → Cột Quy mô</td></tr>
          <tr className="hover:bg-gray-50"><td className="py-3 px-4 font-bold">3. Chính sách</td><td className="py-3 px-4">Không chạy ngành nhạy cảm</td><td className="py-3 px-4 text-emerald-600 text-xs">Nail/Spa chạy ok</td></tr>
          <tr className="hover:bg-gray-50"><td className="py-3 px-4 font-bold">4. Tài khoản ≥90 ngày</td><td className="py-3 px-4">Tài khoản mới không dùng được</td><td className="py-3 px-4 text-blue-600 text-xs">Xem ngày tạo tài khoản</td></tr>
        </tbody>
      </table>
    </div>

    <h3 className="text-2xl font-bold text-gray-900 border-b pb-2">2. 5 Danh sách RLSA phải tạo ngay + Bid Adjustment</h3>
    <div className="overflow-x-auto my-6">
      <table className="min-w-full bg-white border border-gray-200 text-sm rounded-lg overflow-hidden shadow-sm">
        <thead className="bg-slate-800 text-white">
          <tr>
            <th className="py-3 px-4 text-left font-bold">Danh sách</th>
            <th className="py-3 px-4 text-left font-bold">Ai vào đây</th>
            <th className="py-3 px-4 text-left font-bold">Bid Adj</th>
          </tr>
        </thead>
        <tbody className="divide-y divide-gray-200">
          <tr className="hover:bg-gray-50"><td className="py-3 px-4 font-bold text-blue-700">Booking Abandon 7d</td><td className="py-3 px-4">Vào /book không hoàn thành</td><td className="py-3 px-4 font-bold text-red-600">+150%</td></tr>
          <tr className="hover:bg-gray-50"><td className="py-3 px-4 font-bold text-blue-700">Viewed Price Page 14d</td><td className="py-3 px-4">Xem trang /price</td><td className="py-3 px-4 font-bold text-orange-600">+80%</td></tr>
          <tr className="hover:bg-gray-50"><td className="py-3 px-4 font-bold text-blue-700">All Visitors 30d</td><td className="py-3 px-4">Tất cả người vào web</td><td className="py-3 px-4 font-bold text-blue-600">+30%</td></tr>
          <tr className="hover:bg-gray-50"><td className="py-3 px-4 font-bold text-blue-700">High Time on Site 30d</td><td className="py-3 px-4">Ở web &gt;2 phút, xem &gt;3 trang</td><td className="py-3 px-4 font-bold text-emerald-600">+50%</td></tr>
          <tr className="hover:bg-gray-50 bg-red-50"><td className="py-3 px-4 font-bold text-red-700">Converted 90d</td><td className="py-3 px-4">Đã book/call thành công</td><td className="py-3 px-4 font-bold text-red-700">Loại trừ</td></tr>
        </tbody>
      </table>
    </div>

    <h3 className="text-2xl font-bold text-gray-900 border-b pb-2">3. 3 cách dùng RLSA</h3>
    <div className="space-y-4 my-4">
      <div className="bg-blue-50 border border-blue-200 rounded-xl p-4">
        <h4 className="font-bold text-blue-800 mt-0">Cách 1: Bid Only – Quan sát + Tăng bid (Khuyến nghị 90%)</h4>
        <p className="m-0 text-sm">Campaign chính → Đối tượng → Thêm list → Chọn <strong>Quan sát</strong> → Đặt bid +40%. Người lạ bid $4, người đã vào web bid $5.6 tự động.</p>
      </div>
      <div className="bg-emerald-50 border border-emerald-200 rounded-xl p-4">
        <h4 className="font-bold text-emerald-800 mt-0">Cách 2: Chỉ hiện cho khách cũ (Targeting)</h4>
        <p className="m-0 text-sm">Tạo campaign riêng + chọn "Nhắm mục tiêu" + Booking Abandon 7d. Ads: "Quên Book Lịch? Còn 3 Slot Hôm Nay – $5 Off". CTR 15-25%.</p>
      </div>
      <div className="bg-gray-50 border border-gray-200 rounded-xl p-4">
        <h4 className="font-bold text-gray-800 mt-0">Cách 3: Loại trừ khách đã convert</h4>
        <p className="m-0 text-sm">Campaign chính → Đối tượng → Loại trừ → "Converted 90d". Tiết kiệm $200-500/tháng, không làm phiền khách đã book.</p>
      </div>
    </div>

    <InteractiveChecklist
      id="chk26"
      title="Checklist Bài 26"
      tasks={[
        'Check Google Tag đang thu thập dữ liệu: Công cụ → Google Tag',
        'Tạo 5 danh sách: Booking Abandon 7d, Price Page 14d, All Visitors 30d, High Time 30d, Converted 90d',
        'Đợi 7-14 ngày cho list đạt 1000 người',
        'Áp Quan sát cho campaign chính + đặt bid adjustment',
        'Loại trừ Converted 90d để không tốn tiền với khách đã book',
      ]}
    />
  </div>
);

export const Lesson27Content = () => (
  <div className="prose prose-blue max-w-none text-gray-800">
    <div className="bg-amber-50 border-l-4 border-amber-500 p-4 mb-6 rounded-r-lg">
      <p className="m-0 text-sm text-amber-800 font-medium">⚠️ <strong>Quy tắc sống còn:</strong> Đổi chiến lược bid sai thời điểm = Máy học reset, CPA x2, mất 7 ngày. Luôn đi theo thứ tự: Manual → Max Conv → tCPA → tROAS.</p>
    </div>

    <h3 className="text-2xl font-bold text-gray-900 border-b pb-2">1. 5 chiến lược giá thầu Google 2026</h3>
    <div className="overflow-x-auto my-6">
      <table className="min-w-full bg-white border border-gray-200 text-sm rounded-lg overflow-hidden shadow-sm">
        <thead className="bg-slate-800 text-white">
          <tr>
            <th className="py-3 px-4 text-left font-bold">Chiến lược</th>
            <th className="py-3 px-4 text-left font-bold">Khi nào dùng</th>
            <th className="py-3 px-4 text-left font-bold">Ưu điểm</th>
            <th className="py-3 px-4 text-left font-bold">Nhược điểm</th>
          </tr>
        </thead>
        <tbody className="divide-y divide-gray-200">
          <tr className="hover:bg-gray-50"><td className="py-3 px-4 font-bold text-blue-700">Manual CPC</td><td className="py-3 px-4 text-xs">Tuần 1-2, &lt;15 conv/tháng</td><td className="py-3 px-4 text-xs text-emerald-700">Kiểm soát 100%</td><td className="py-3 px-4 text-xs text-red-600">Tốn công, không cạnh tranh máy học</td></tr>
          <tr className="hover:bg-gray-50"><td className="py-3 px-4 font-bold text-blue-700">Max Clicks</td><td className="py-3 px-4 text-xs">Tuần 2-4, cần data nhanh</td><td className="py-3 px-4 text-xs text-emerald-700">Click rẻ, đủ data</td><td className="py-3 px-4 text-xs text-red-600">Click rác nhiều</td></tr>
          <tr className="hover:bg-gray-50"><td className="py-3 px-4 font-bold text-blue-700">Max Conversions</td><td className="py-3 px-4 text-xs">Tháng 1-2, 15-30 conv/tháng</td><td className="py-3 px-4 text-xs text-emerald-700">CPA giảm mạnh</td><td className="py-3 px-4 text-xs text-red-600">Cần đủ data, mới chạy CPA nhảy</td></tr>
          <tr className="hover:bg-gray-50"><td className="py-3 px-4 font-bold text-blue-700">tCPA</td><td className="py-3 px-4 text-xs">Tháng 2-3, 30-50 conv/tháng</td><td className="py-3 px-4 text-xs text-emerald-700">Lợi nhuận ổn định, scale dễ</td><td className="py-3 px-4 text-xs text-red-600">Đặt thấp quá mất hiển thị</td></tr>
          <tr className="hover:bg-gray-50"><td className="py-3 px-4 font-bold text-blue-700">tROAS</td><td className="py-3 px-4 text-xs">Tháng 3+, có gói giá trị khác nhau</td><td className="py-3 px-4 text-xs text-emerald-700">Lời nhất, ưu tiên khách combo $150</td><td className="py-3 px-4 text-xs text-red-600">Cần tracking giá trị, khó nhất</td></tr>
        </tbody>
      </table>
    </div>

    <h3 className="text-2xl font-bold text-gray-900 border-b pb-2">2. Lộ trình 90 ngày – Timeline thực tế tiệm nail $20 → $200/ngày</h3>
    <div className="space-y-4 my-4">
      <div className="border-l-4 border-blue-400 pl-4 py-2">
        <h4 className="font-bold text-blue-800 mt-0">Giai đoạn 1: Ngày 1-14 – Manual CPC + eCPC</h4>
        <p className="m-0 text-sm text-slate-700">Bid Exact: $3.5-$5.0. Bật eCPC. Ngân sách $20-$40/ngày. <strong>Điều kiện chuyển:</strong> ≥15 conversion trong 30 ngày + CPA ±20% mục tiêu.</p>
      </div>
      <div className="border-l-4 border-purple-400 pl-4 py-2">
        <h4 className="font-bold text-purple-800 mt-0">Giai đoạn 2: Ngày 15-45 – Max Conversions</h4>
        <p className="m-0 text-sm text-slate-700">Đổi sang Max Conversions. <strong>KHÔNG đặt CPA mục tiêu vội</strong> – để trống 14 ngày. Tăng ngân sách +50%. 7 ngày đầu CPA nhảy: bình thường, đừng hoảng. <strong>Điều kiện chuyển:</strong> ≥30 conv/30 ngày + CPA ổn định 7 ngày.</p>
      </div>
      <div className="border-l-4 border-emerald-400 pl-4 py-2">
        <h4 className="font-bold text-emerald-800 mt-0">Giai đoạn 3: Ngày 46-75 – tCPA</h4>
        <p className="m-0 text-sm text-slate-700">Công thức: tCPA = CPA trung bình x1.2. VD: CPA $17 → tCPA $20. Tăng ngân sách 20%/3 ngày. Giảm tCPA 10-15% mỗi 2 tuần khi CPA thực tế thấp hơn mục tiêu.</p>
      </div>
      <div className="border-l-4 border-orange-400 pl-4 py-2">
        <h4 className="font-bold text-orange-800 mt-0">Giai đoạn 4: Ngày 76+ – tROAS</h4>
        <p className="m-0 text-sm text-slate-700">Bắt buộc: tracking giá trị (Pedi $35, Acrylic $55, Combo $150). ≥50 conv có giá trị/30 ngày. Tính: Thu $5000, Ads $1000 → ROAS 500% → Đặt tROAS 400% để an toàn.</p>
      </div>
    </div>

    <h3 className="text-2xl font-bold text-gray-900 border-b pb-2">3. Lỗi hay gặp nhất</h3>
    <div className="bg-red-50 border border-red-200 rounded-xl p-4 my-4">
      <p className="font-bold text-red-800 m-0">❌ Đổi thẳng từ Manual CPC lên tROAS khi chưa đủ data → Máy học reset hoàn toàn, CPA x3, mất 21 ngày mới ổn lại. Luôn đi từng bước theo thứ tự.</p>
    </div>

    <InteractiveChecklist
      id="chk27"
      title="Checklist Bài 27"
      tasks={[
        'Xác định hiện đang ở giai đoạn nào trong lộ trình 90 ngày',
        'Đếm số conversion 30 ngày qua – đủ 15 thì chuyển Max Conversions',
        'Đủ 30 conv + CPA ổn định 7 ngày → tính tCPA = CPA x1.2',
        'Tăng ngân sách không quá 20%/3 ngày để tránh reset máy học',
        'Setup tracking giá trị trong GA4 để chuẩn bị cho tROAS',
      ]}
    />
  </div>
);
