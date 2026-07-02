import React from 'react';
import { 
  BarChart, TrendingUp, Target, Activity, AlertOctagon, 
  AlertTriangle, CheckCircle2, Smartphone, FileText 
} from 'lucide-react';
import { InteractiveChecklist } from './InteractiveChecklist';
import { VisualizerFunnel, VisualizerGA4Flow, VisualizerGTMStructure } from './Visualizers';

export const Lesson9Content = () => (
  <div className="prose prose-blue max-w-none text-gray-800">
    <div className="bg-blue-50 border-l-4 border-blue-500 p-4 mb-6 rounded-r-lg flex items-start gap-3">
      <BarChart className="text-blue-500 mt-0.5 shrink-0" size={24} />
      <p className="m-0 text-sm text-blue-800 font-medium">🎯 <strong>Ads không phải bộ môn "cảm giác".</strong> Tất cả nằm ở 9 con số này. Biết đọc là biết tiệm đang lời hay lỗ.</p>
    </div>

    <h3 className="text-2xl font-bold text-gray-900 border-b pb-2">1. Bảng 9 chỉ số sống còn cho tiệm nail</h3>
    
    <div className="overflow-x-auto my-6">
      <table className="min-w-full bg-white border border-gray-200 text-sm rounded-lg overflow-hidden shadow-sm">
        <thead className="bg-slate-800 text-white">
          <tr>
            <th className="py-3 px-4 text-left font-bold w-1/5">Chỉ số</th>
            <th className="py-3 px-4 text-left font-bold w-1/5">Công thức</th>
            <th className="py-3 px-4 text-left font-bold w-1/4">Ý nghĩa đơn giản</th>
            <th className="py-3 px-4 text-left font-bold">Bao nhiêu là tốt (Mỹ)?</th>
          </tr>
        </thead>
        <tbody className="divide-y divide-gray-200">
          <tr>
            <td className="py-3 px-4 font-bold text-slate-700">1. Impression<br/><span className="text-xs font-normal text-slate-500">Lượt hiển thị</span></td>
            <td className="py-3 px-4 text-slate-600">Google đếm</td>
            <td className="py-3 px-4">Ads của bạn hiện ra mấy lần</td>
            <td className="py-3 px-4 text-slate-600">Không quan trọng số tuyệt đối. Quan trọng Impression Share.</td>
          </tr>
          <tr>
            <td className="py-3 px-4 font-bold text-blue-700">2. Click</td>
            <td className="py-3 px-4 text-slate-600">Google đếm</td>
            <td className="py-3 px-4">Có mấy người bấm vào ads</td>
            <td className="py-3 px-4 text-slate-600">10-30 click/ngày/tiệm là ok với ngân sách $50.</td>
          </tr>
          <tr>
            <td className="py-3 px-4 font-bold text-blue-700">3. CTR<br/><span className="text-xs font-normal text-slate-500">Click-Through Rate</span></td>
            <td className="py-3 px-4 font-mono text-xs bg-slate-100 p-1 rounded">Click / Impr</td>
            <td className="py-3 px-4">100 người thấy, mấy người bấm</td>
            <td className="py-3 px-4 font-medium text-emerald-600">Search: &gt;6% là ngon.<br/>Display: &gt;0.5% là ngon.</td>
          </tr>
          <tr>
            <td className="py-3 px-4 font-bold text-orange-600">4. Avg. CPC<br/><span className="text-xs font-normal text-slate-500">Cost Per Click</span></td>
            <td className="py-3 px-4 font-mono text-xs bg-slate-100 p-1 rounded">Tiền / Click</td>
            <td className="py-3 px-4">Mỗi click tốn bao nhiêu tiền</td>
            <td className="py-3 px-4 text-slate-600">Nail Mỹ: $2-$6. &gt;$8 là đắt, check lại.</td>
          </tr>
          <tr className="bg-emerald-50/30">
            <td className="py-3 px-4 font-bold text-emerald-700">5. Conversion<br/><span className="text-xs font-normal text-slate-500">Chuyển đổi</span></td>
            <td className="py-3 px-4 text-slate-600">Google đếm</td>
            <td className="py-3 px-4 font-medium">Có mấy người Gọi, Đặt lịch, Nhắn tin</td>
            <td className="py-3 px-4 text-red-500 font-medium">Phải cài tracking mới có số này.</td>
          </tr>
          <tr>
            <td className="py-3 px-4 font-bold text-emerald-700">6. CVR<br/><span className="text-xs font-normal text-slate-500">Conversion Rate</span></td>
            <td className="py-3 px-4 font-mono text-xs bg-slate-100 p-1 rounded">Conv / Click</td>
            <td className="py-3 px-4">100 click, mấy người thành khách</td>
            <td className="py-3 px-4 text-slate-600">Landing tốt: 10-20%. Tệ: &lt;5%.</td>
          </tr>
          <tr className="bg-amber-50/30">
            <td className="py-3 px-4 font-black text-amber-700">7. CPA<br/><span className="text-xs font-normal text-slate-500">Cost Per Acquisition</span></td>
            <td className="py-3 px-4 font-mono text-xs bg-slate-100 p-1 rounded">Tiền / Conv</td>
            <td className="py-3 px-4 font-bold text-amber-800">Kiếm 1 khách tốn bao nhiêu tiền ads</td>
            <td className="py-3 px-4 text-slate-600">Acrylic $50 ➔ CPA &lt;$20 là lời.<br/>Pedicure $30 ➔ CPA &lt;$12.</td>
          </tr>
          <tr className="bg-yellow-50/50">
            <td className="py-3 px-4 font-black text-yellow-700">8. ROAS<br/><span className="text-xs font-normal text-slate-500">Return On Ad Spend</span></td>
            <td className="py-3 px-4 font-mono text-xs bg-slate-100 p-1 rounded">Doanh thu / Tiền</td>
            <td className="py-3 px-4 font-bold text-yellow-800">1$ ads ra mấy $ doanh thu</td>
            <td className="py-3 px-4 font-bold text-emerald-600">Tiệm nail: ROAS &gt;3 là lời. &gt;5 là rất tốt.</td>
          </tr>
          <tr>
            <td className="py-3 px-4 font-bold text-purple-700">9. Impr. Share<br/><span className="text-xs font-normal text-slate-500">% hiển thị</span></td>
            <td className="py-3 px-4 font-mono text-xs bg-slate-100 p-1 rounded">Impr bạn / Tổng</td>
            <td className="py-3 px-4">Bạn đang chiếm bao nhiêu % thị trường</td>
            <td className="py-3 px-4 text-slate-600">&gt;60% là đè đối thủ. &lt;30% là mất khách.</td>
          </tr>
        </tbody>
      </table>
    </div>

    <h3 className="text-2xl font-bold text-gray-900 mt-10 border-b pb-2">2. Câu chuyện dòng tiền của 1 click – Hiểu để tối ưu đúng chỗ</h3>
    <p>Cùng xem ví dụ thật: Tiệm Luxury Nails Dallas chạy từ khóa "acrylic nails near me".</p>

    <VisualizerFunnel />

    <p className="font-bold text-slate-800">Đọc kết quả: ROAS 2.06 = Lời mỏng. Muốn ROAS lên 4 thì phải làm gì?</p>
    
    <div className="grid grid-cols-1 md:grid-cols-2 gap-4 my-4">
      <div className="border border-emerald-200 bg-emerald-50 p-4 rounded-xl">
         <h4 className="font-bold text-emerald-800 mt-0 mb-2 flex items-center gap-2"><TrendingUp size={18}/> Mục tiêu: Tăng ROAS (Lợi nhuận)</h4>
         <ul className="text-sm space-y-2 m-0 pl-4">
           <li><strong>Sửa cái gì:</strong> Giảm CPC (Bằng cách tăng Điểm CL) HOẶC Tăng CVR (Sửa Web mượt hơn).</li>
           <li><strong>Kết quả:</strong> CPC từ $4 {'->'} $3. CVR từ 15% {'->'} 20%.</li>
           <li className="font-bold text-emerald-700">➔ CPA còn $15. ROAS = 3.6. Lời to!</li>
         </ul>
      </div>
      <div className="border border-blue-200 bg-blue-50 p-4 rounded-xl">
         <h4 className="font-bold text-blue-800 mt-0 mb-2 flex items-center gap-2"><Target size={18}/> Mục tiêu: Tăng số khách</h4>
         <ul className="text-sm space-y-2 m-0 pl-4">
           <li><strong>Sửa cái gì:</strong> Tăng ngân sách HOẶC Tăng Impression Share (Tăng bid).</li>
           <li><strong>Kết quả:</strong> Impr Share từ 40% {'->'} 70%. Clicks từ 80 {'->'} 140.</li>
           <li className="font-bold text-blue-700">➔ Số khách từ 12 lên 21 người.</li>
         </ul>
      </div>
    </div>
    <p className="text-red-600 font-medium">➔ Bài học: Đừng chỉ nhìn CPC. CPA và ROAS mới quyết định sự sống còn.</p>

    <h3 className="text-2xl font-bold text-gray-900 mt-10 border-b pb-2">3. Benchmark ngành Nail Salon Mỹ 2026 – So để biết mình đang đâu</h3>
    
    <div className="overflow-x-auto my-6">
      <table className="min-w-full text-sm rounded-lg overflow-hidden border border-gray-200 text-center">
         <thead className="bg-slate-100 text-slate-700">
           <tr>
             <th className="py-3 px-4 font-bold text-left">Chỉ số</th>
             <th className="py-3 px-4 font-bold border-l border-white">Kém 😰</th>
             <th className="py-3 px-4 font-bold border-l border-white">Trung bình 😐</th>
             <th className="py-3 px-4 font-bold border-l border-white">Tốt 🙂</th>
             <th className="py-3 px-4 font-bold border-l border-white">Xuất sắc 🚀</th>
           </tr>
         </thead>
         <tbody className="divide-y divide-gray-100">
           <tr>
             <td className="py-3 px-4 font-bold text-left bg-white">CTR Search</td>
             <td className="py-3 px-4 bg-red-50 text-red-700 font-medium">&lt;3%</td>
             <td className="py-3 px-4 bg-orange-50 text-orange-700">4-6%</td>
             <td className="py-3 px-4 bg-emerald-50 text-emerald-700">6-10%</td>
             <td className="py-3 px-4 bg-emerald-100 text-emerald-800 font-bold">&gt;10%</td>
           </tr>
           <tr>
             <td className="py-3 px-4 font-bold text-left bg-white">Avg CPC</td>
             <td className="py-3 px-4 bg-red-50 text-red-700 font-medium">&gt;$7</td>
             <td className="py-3 px-4 bg-orange-50 text-orange-700">$4-$6</td>
             <td className="py-3 px-4 bg-emerald-50 text-emerald-700">$2.5-$4</td>
             <td className="py-3 px-4 bg-emerald-100 text-emerald-800 font-bold">&lt;$2.5</td>
           </tr>
           <tr>
             <td className="py-3 px-4 font-bold text-left bg-white">CVR (Tỷ lệ chốt)</td>
             <td className="py-3 px-4 bg-red-50 text-red-700 font-medium">&lt;5%</td>
             <td className="py-3 px-4 bg-orange-50 text-orange-700">5-10%</td>
             <td className="py-3 px-4 bg-emerald-50 text-emerald-700">10-18%</td>
             <td className="py-3 px-4 bg-emerald-100 text-emerald-800 font-bold">&gt;18%</td>
           </tr>
           <tr>
             <td className="py-3 px-4 font-bold text-left bg-white">CPA (Giá 1 khách)</td>
             <td className="py-3 px-4 bg-red-50 text-red-700 font-medium">&gt;$35</td>
             <td className="py-3 px-4 bg-orange-50 text-orange-700">$20-$30</td>
             <td className="py-3 px-4 bg-emerald-50 text-emerald-700">$12-$20</td>
             <td className="py-3 px-4 bg-emerald-100 text-emerald-800 font-bold">&lt;$12</td>
           </tr>
           <tr>
             <td className="py-3 px-4 font-bold text-left bg-white">ROAS</td>
             <td className="py-3 px-4 bg-red-50 text-red-700 font-medium">&lt;2</td>
             <td className="py-3 px-4 bg-orange-50 text-orange-700">2-3</td>
             <td className="py-3 px-4 bg-emerald-50 text-emerald-700">3-5</td>
             <td className="py-3 px-4 bg-emerald-100 text-emerald-800 font-bold">&gt;5</td>
           </tr>
         </tbody>
      </table>
    </div>
    <p className="text-sm italic text-gray-500">Lưu ý: Cali, NY thường CPC đắt hơn Texas 20-30%. Zipcode khu giàu đắt hơn khu thường.</p>

    <h3 className="text-2xl font-bold text-gray-900 mt-10 border-b pb-2">4. 3 cặp chỉ số phải đọc cùng nhau, đọc lẻ là sai</h3>
    
    <div className="grid grid-cols-1 md:grid-cols-3 gap-4 my-6">
       <div className="bg-white border border-slate-200 p-4 rounded-xl shadow-sm">
          <div className="font-bold text-blue-700 mb-2 flex justify-between items-center">
            <span>1. CPC + CVR</span> <Activity size={18}/>
          </div>
          <p className="text-sm text-slate-600 m-0">CPC đắt $8 nhưng Web chốt tốt (CVR 25%) thì tốn <strong>$32/khách</strong>. Vẫn ngon hơn CPC rẻ $3 nhưng web cùi (CVR 5%) tốn <strong>$60/khách</strong>. Đừng ham click rẻ.</p>
       </div>
       <div className="bg-white border border-slate-200 p-4 rounded-xl shadow-sm">
          <div className="font-bold text-indigo-700 mb-2 flex justify-between items-center">
            <span>2. CTR + Impr. Share</span> <Activity size={18}/>
          </div>
          <p className="text-sm text-slate-600 m-0">CTR 15% (Ads rất hay) nhưng IS 10% ➔ Quá ít người thấy, đang phí phạm. Phải tăng bid. Ngược lại CTR 2% mà IS 80% ➔ Đang spam tốn tiền, phải sửa ads.</p>
       </div>
       <div className="bg-white border border-slate-200 p-4 rounded-xl shadow-sm">
          <div className="font-bold text-emerald-700 mb-2 flex justify-between items-center">
            <span>3. Conv. + ROAS</span> <Activity size={18}/>
          </div>
          <p className="text-sm text-slate-600 m-0">50 khách (Conv) nhưng ROAS 1.5 ➔ Đang lỗ, càng chạy càng chết. 10 khách nhưng ROAS 6 ➔ Lời đậm, phải tăng ngân sách để scale ngay lập tức.</p>
       </div>
    </div>

    <h3 className="text-2xl font-bold text-gray-900 mt-10 border-b pb-2">5. Vào đâu để xem 8 chỉ số này?</h3>
    <p>Trong giao diện Google Ads ➔ <strong>Chiến dịch</strong> ➔ <strong>Cột (Columns)</strong> ➔ <strong>Sửa đổi cột (Modify columns)</strong>. Thêm các cột: <code>Impr.</code>, <code>Clicks</code>, <code>CTR</code>, <code>Avg. CPC</code>, <code>Conversions</code>, <code>Cost / conv.</code>, <code>Conv. rate</code>, <code>Search impr. share</code>.</p>
    <p><strong>Cách tạo cột ROAS:</strong> Mục Cột ➔ + Cột tùy chỉnh (Custom column) ➔ Tên: ROAS ➔ Công thức: <code>Conversion value / Cost</code> ➔ Định dạng: Số ➔ Lưu. (Lưu ý: Phải gán giá trị tiền cho Conversion mới tính được).</p>

    <div className="bg-red-50 border border-red-200 p-5 rounded-xl my-10 relative">
       <div className="absolute -top-4 left-4 bg-red-600 text-white flex items-center gap-2 px-3 py-1 rounded-full font-bold text-sm shadow-sm">
         <AlertOctagon size={16} /> BÁO ĐỘNG ĐỎ: Khi nào phải TẮT ads ngay
       </div>
       <ol className="mt-2 text-red-900 font-medium space-y-2 mb-0">
         <li>Tiêu $100, 0 conversion, CVR = 0% ➔ Tracking đang cài sai hoặc web bị sập.</li>
         <li>CTR &lt;1% sau 1000 lượt hiển thị ➔ Ads quá rác, Google ép điểm CL 1/10. Tắt viết lại.</li>
         <li>CPA &gt; Giá dịch vụ (Bán bộ nail $50 mà tốn CPA $60) ➔ Tắt ngay kẻo sạt nghiệp.</li>
         <li>Search Impr. Share &lt;10% do Rank ➔ Bid quá bèo, điểm CL bét bảng. Vô hình trên mạng.</li>
       </ol>
    </div>

    <h3 className="text-2xl font-bold text-gray-900 mt-10 border-b pb-2">6. Công thức tính ngược ngân sách (Cho chủ tiệm)</h3>
    <p>Giả sử bạn muốn có <strong>10 khách mới/ngày</strong> từ Google Ads:</p>
    <div className="bg-slate-100 p-4 rounded-lg font-mono text-sm space-y-2 border border-slate-200">
      <div>1. Giả định Web chốt được 10% (CVR 10%) ➔ Cần kéo 100 lượt Click/ngày.</div>
      <div>2. Giả định giá click là $4 (Avg CPC $4) ➔ Cần <strong className="text-blue-600">$400/ngày</strong>.</div>
      <div>3. Test thử nghiệm trong 7 ngày ➔ Ngân sách test = $400 x 7 = <strong className="text-green-600">$2,800</strong>.</div>
    </div>
    <p className="mt-3 text-slate-600 italic">Nếu trong túi chỉ có $500 để test? Hãy giảm mục tiêu xuống còn 2 khách/ngày ➔ Chạy $80/ngày thôi.</p>

    <InteractiveChecklist 
      id="chk9"
      title="Checklist Bài 9 (Kết thúc Giai đoạn 1)"
      tasks={[
        "Đã lôi đủ 8 cột chỉ số ra ngoài màn hình Chiến dịch chính.",
        "Đã cài đặt Cột tùy chỉnh để tính ROAS.",
        "Xác định được mức CPA tối đa có thể chịu đựng cho dịch vụ chủ lực (VD: Lãi $30 thì CPA max là $25).",
        "Hiểu được luật chơi: Không bao giờ nhìn mỗi giá Click (CPC) để đánh giá Ads đắt hay rẻ."
      ]}
    />
  </div>
);

export const Lesson10Content = () => (
  <div className="prose prose-blue max-w-none text-gray-800">
    <div className="bg-blue-50 border-l-4 border-blue-500 p-4 mb-6 rounded-r-lg">
      <p className="m-0 text-sm text-blue-800 font-medium">🎯 <strong>Tâm điểm:</strong> Đây là bài "cầm chuột". Làm sai múi giờ + tiền tệ là toang, không sửa được. Làm 1 lần dùng cả đời tiệm.</p>
    </div>

    <h3 className="text-2xl font-bold text-gray-900 border-b pb-2">1. Tạo MCC – Tài khoản quản lý tổng cho chủ tiệm nail</h3>
    <div className="space-y-4">
      <p><strong>Bước 1: Vào link tạo MCC</strong><br/>
      Truy cập: <code>https://ads.google.com/home/tools/manager-accounts/</code><br/>
      Bấm "Tạo tài khoản người quản lý"</p>

      <p><strong>Bước 2: Điền thông tin cực quan trọng</strong></p>
      <div className="overflow-x-auto">
        <table className="min-w-full bg-white border border-gray-200 text-sm rounded-lg shadow-sm">
          <thead className="bg-slate-800 text-white">
            <tr>
              <th className="py-2 px-3 text-left w-1/4">Mục</th>
              <th className="py-2 px-3 text-left w-1/3">Điền gì cho tiệm nail ở Mỹ</th>
              <th className="py-2 px-3 text-left text-red-300">Sai là toang gì</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-gray-200">
            <tr>
              <td className="py-2 px-3 font-bold">Tên tài khoản</td>
              <td className="py-2 px-3 font-mono text-xs">Luxury Nails Group</td>
              <td className="py-2 px-3 text-red-600">Đặt lung tung sau này loạn</td>
            </tr>
            <tr>
              <td className="py-2 px-3 font-bold">Mục đích sử dụng</td>
              <td className="py-2 px-3">Chọn "Để quản lý tài khoản của tôi"</td>
              <td className="py-2 px-3 text-red-600">Bị bắt xác minh doanh nghiệp rườm rà</td>
            </tr>
            <tr>
              <td className="py-2 px-3 font-bold">Quốc gia</td>
              <td className="py-2 px-3">United States</td>
              <td className="py-2 px-3 text-red-600">Lỗi phương thức thanh toán</td>
            </tr>
            <tr>
              <td className="py-2 px-3 font-bold">Múi giờ</td>
              <td className="py-2 px-3 bg-yellow-50">GMT-6 Central Time (Texas)<br/>GMT-8 Pacific (Cali)</td>
              <td className="py-2 px-3 text-red-600 font-bold uppercase">KHÔNG SỬA ĐƯỢC. Report lệch ngày</td>
            </tr>
            <tr>
              <td className="py-2 px-3 font-bold">Đơn vị tiền tệ</td>
              <td className="py-2 px-3 bg-yellow-50">US Dollar - USD ($)</td>
              <td className="py-2 px-3 text-red-600 font-bold uppercase">KHÔNG SỬA ĐƯỢC. Đặt VND sau khóc</td>
            </tr>
          </tbody>
        </table>
      </div>
      <p><strong>Bước 3: Xác nhận email.</strong> Dùng Gmail chính của bạn. Nên tạo Gmail riêng: <code>luxurynails.ads@gmail.com</code> để sau bàn giao.</p>
    </div>

    <h3 className="text-2xl font-bold text-gray-900 mt-10 border-b pb-2">2. Tạo tài khoản con cho từng tiệm – Quy tắc 1 tiệm = 1 TK</h3>
    <ol className="space-y-3">
      <li><strong>Bước 1:</strong> Trong MCC, bấm dấu <strong>[+]</strong> xanh ➔ "Tạo tài khoản mới"</li>
      <li><strong>Bước 2:</strong> Điền thông tin tài khoản con:
        <ul className="list-disc pl-5 mt-2 space-y-1">
          <li>Tên: <code>Luxury Nails - Dallas - 77084</code> (Nhìn là biết tiệm nào)</li>
          <li>Múi giờ: <strong>Phải giống MCC</strong>. Để report khớp nhau.</li>
          <li>Tiền tệ: <strong>USD</strong>.</li>
          <li>Thanh toán: Tạm chọn "Không có thông tin thanh toán".</li>
        </ul>
      </li>
      <li><strong>Bước 3:</strong> Lặp lại nếu có chi nhánh Houston.</li>
    </ol>

    <h3 className="text-2xl font-bold text-gray-900 mt-10 border-b pb-2">3. Cài đặt thanh toán – Dùng 1 thẻ cho cả Group</h3>
    <p><strong>Tại sao cài ở MCC:</strong> Add 1 thẻ Business vào MCC. Tất cả tài khoản con tự động trừ tiền từ thẻ đó. Cuối tháng 1 Bill tổng.</p>
    <div className="bg-slate-100 p-5 rounded-xl text-sm space-y-3">
      <div><strong>Bước 1:</strong> Vào MCC ➔ Công cụ & cài đặt ➔ Thanh toán ➔ Cài đặt</div>
      <div><strong>Bước 2:</strong> Chọn "Cài đặt thanh toán tổng hợp" ➔ Hồ sơ thanh toán mới</div>
      <div><strong>Bước 3:</strong> Loại: <code>Doanh nghiệp</code>. Tên: <code>Luxury Nails LLC</code>. Mã số thuế: <code>EIN của tiệm</code>.</div>
      <div><strong>Bước 4:</strong> Thêm thẻ tín dụng. Ưu tiên thẻ Business (Chase Ink, Amex) lấy cashback. Tránh dùng Debit Card vì dễ bị Google khóa nhầm.</div>
      <div><strong>Bước 5:</strong> Vào từng TK con ➔ Thanh toán ➔ Chọn "Sử dụng cài đặt thanh toán tổng hợp".</div>
    </div>

    <div className="bg-red-50 border-l-4 border-red-500 p-4 my-8">
      <h4 className="font-bold text-red-800 mt-0 flex items-center gap-2"><AlertTriangle size={20}/> 3 Lỗi chết người 99% dính</h4>
      <ul className="text-sm text-red-900 mt-2 space-y-2 mb-0">
        <li><strong>1. Đặt múi giờ VN (GMT+7):</strong> Report lệch 15 tiếng. Không tối ưu theo giờ mở cửa tiệm được. Sửa bằng cách: Bỏ TK cũ, tạo TK mới.</li>
        <li><strong>2. Đặt tiền VND:</strong> CPC hiện 50,000đ tưởng rẻ, Google quy đổi ra $2.1. Lú lẫn khi tính toán. Sửa: Tạo TK mới.</li>
        <li><strong>3. Dùng thẻ Visa Debit cá nhân:</strong> Google nghi ngờ gian lận, khóa "Thanh toán đáng ngờ". Phải kháng nghị 14 ngày.</li>
      </ul>
    </div>

    <InteractiveChecklist 
      id="chk10"
      title="Checklist Bài 10 (Chỉ làm 1 lần)"
      tasks={[
        "Tên MCC = Tên thương hiệu + Group",
        "Múi giờ MCC = Múi giờ tài khoản con = Múi giờ tiệm nail",
        "Tiền tệ tất cả = USD ($)",
        "Đã add 1 thẻ Credit Business vào cấp MCC",
        "Mỗi tiệm 1 tài khoản con, đặt tên: Brand - City - Zipcode"
      ]}
    />
  </div>
);

export const Lesson11Content = () => (
  <div className="prose prose-blue max-w-none text-gray-800">
    <div className="bg-blue-50 border-l-4 border-blue-500 p-4 mb-6 rounded-r-lg">
      <p className="m-0 text-sm text-blue-800 font-medium">🎯 <strong>Sự thật phũ phàng:</strong> 90% tiệm nail chạy ads lỗ vì bỏ qua bài này. Google Ads = Tay chân. GA4 = Đôi mắt. Không link thì bạn đang nhắm mắt lái xe.</p>
    </div>

    <VisualizerGA4Flow />

    <h3 className="text-2xl font-bold text-gray-900 mt-10 border-b pb-2">1. 4 Lý do sống còn phải link GA4</h3>
    <ul className="space-y-3">
      <li><strong>Cho AI ăn data:</strong> Link xong, Google biết khách bấm ads xong có xem bảng giá không, có ở lại web &gt;2 phút không. Nó sẽ đi tìm những khách "chất lượng" tương tự cho bạn.</li>
      <li><strong>Vá lỗ hổng iOS:</strong> Apple chặn tracking. Chỉ dùng Ads tag bị hụt 30% data cuộc gọi. Bật <em>Enhanced Conversions</em> với GA4 giúp thu thập email/SĐT để đối soát, lấy lại số liệu.</li>
      <li><strong>Remarketing siêu cấp:</strong> Tạo tệp "Người đã xem giá Acrylic &gt;60s nhưng chưa book" để chạy ads bám đuổi tỷ lệ chốt x3.</li>
      <li><strong>Đo lường đa kênh:</strong> Thấy được khách đi từ Facebook ➔ Google ➔ Đặt lịch. Không bị ảo tưởng là 100% khách từ Google.</li>
    </ul>

    <h3 className="text-2xl font-bold text-gray-900 mt-10 border-b pb-2">2. Cách link trong 3 phút (Làm 1 lần dùng cả đời)</h3>
    
    <div className="space-y-4">
      <div className="bg-slate-50 p-4 border border-slate-200 rounded-lg">
        <h4 className="font-bold text-blue-700 m-0 text-base">Bước 1: Tạo GA4 (analytics.google.com)</h4>
        <p className="text-sm m-0 mt-1 text-slate-600">Tạo tài sản tên <code>Luxury Nails Dallas - GA4</code>. Chú ý Múi giờ và Tiền tệ (USD) phải KHỚP Google Ads. Lấy mã đo lường G-XXXXXX gắn lên web.</p>
      </div>

      <div className="bg-slate-50 p-4 border border-slate-200 rounded-lg">
         <h4 className="font-bold text-blue-700 m-0 text-base">Bước 2: Link từ Google Ads sang GA4</h4>
         <p className="text-sm m-0 mt-1 text-slate-600">Google Ads ➔ Công cụ ➔ Liên kết tài khoản ➔ GA4. Bấm "Liên kết". Bật 2 nút: "Nhập đối tượng" và "Bật tính năng quảng cáo".</p>
      </div>

      <div className="bg-slate-50 p-4 border border-slate-200 rounded-lg relative overflow-hidden">
         <div className="absolute top-0 right-0 bg-red-500 text-white text-[10px] font-bold px-2 py-1 rounded-bl">HAY QUÊN NHẤT</div>
         <h4 className="font-bold text-blue-700 m-0 text-base">Bước 3: Import Conversion ngược về Ads</h4>
         <p className="text-sm m-0 mt-1 text-slate-600">Google Ads ➔ Công cụ ➔ Chuyển đổi ➔ Mới ➔ Nhập ➔ Chọn GA4. Import sự kiện <code>call_click</code>. Chọn đếm "Một".</p>
      </div>
    </div>

    <h3 className="text-2xl font-bold text-gray-900 mt-10 border-b pb-2">3. 4 Sự kiện bắt buộc phải đo cho Tiệm Nail</h3>
    <div className="overflow-x-auto my-6">
      <table className="min-w-full bg-white border border-gray-200 text-sm rounded-lg shadow-sm">
        <thead className="bg-emerald-50 text-emerald-900">
          <tr>
            <th className="py-2 px-3 text-left">Sự kiện (Event)</th>
            <th className="py-2 px-3 text-left">Hành động của khách</th>
            <th className="py-2 px-3 text-center">Gán giá trị</th>
            <th className="py-2 px-3 text-center">Bao gồm trong CĐ chính?</th>
          </tr>
        </thead>
        <tbody className="divide-y divide-gray-200">
          <tr>
            <td className="py-3 px-3 font-mono font-bold text-blue-600">call_click</td>
            <td className="py-3 px-3">Bấm nút gọi điện thoại</td>
            <td className="py-3 px-3 text-center font-bold">$50</td>
            <td className="py-3 px-3 text-center"><CheckCircle2 className="inline text-green-500" size={18}/> Có</td>
          </tr>
          <tr>
            <td className="py-3 px-3 font-mono font-bold text-blue-600">form_submit</td>
            <td className="py-3 px-3">Gửi form đặt lịch thành công</td>
            <td className="py-3 px-3 text-center font-bold">$60</td>
            <td className="py-3 px-3 text-center"><CheckCircle2 className="inline text-green-500" size={18}/> Có</td>
          </tr>
          <tr>
            <td className="py-3 px-3 font-mono font-bold text-slate-600">price_view</td>
            <td className="py-3 px-3">Xem trang bảng giá &gt;10s</td>
            <td className="py-3 px-3 text-center">$5</td>
            <td className="py-3 px-3 text-center text-slate-400">Không (Chỉ phụ)</td>
          </tr>
        </tbody>
      </table>
    </div>

    <InteractiveChecklist 
      id="chk11"
      title="Bài tập Bài 11"
      tasks={[
        "Tạo thuộc tính GA4 và lấy được mã G-XXXXXX.",
        "Liên kết thành công 2 chiều giữa Google Ads và GA4.",
        "Dùng điện thoại bấm vào ads của mình -> Bấm nút Gọi -> Mở GA4 (Thời gian thực) xem có nhảy sự kiện không."
      ]}
    />
  </div>
);

export const Lesson12Content = () => (
  <div className="prose prose-blue max-w-none text-gray-800">
    <div className="bg-blue-50 border-l-4 border-blue-500 p-4 mb-6 rounded-r-lg">
      <p className="m-0 text-sm text-blue-800 font-medium">🎯 <strong>Cảnh báo:</strong> Cài code trực tiếp lên web là cách làm của 10 năm trước. Giờ đây mọi Agency đều xài Google Tag Manager (GTM). Cài 1 lần, quản lý 100 loại mã không cần nhờ IT.</p>
    </div>

    <VisualizerGTMStructure />

    <h3 className="text-2xl font-bold text-gray-900 mt-10 border-b pb-2">1. Cài GTM lên Website</h3>
    <ol className="space-y-2">
      <li>Vào <code>tagmanager.google.com</code> ➔ Tạo tài khoản ➔ Lấy 2 đoạn mã GTM.</li>
      <li>Dán 1 đoạn vào sau <code>&lt;head&gt;</code>, 1 đoạn sau <code>&lt;body&gt;</code> của website.</li>
      <li><strong>Check thành công:</strong> Cài extension <em>Google Tag Assistant</em> trên Chrome. Thấy thẻ GTM màu xanh lá là ngon.</li>
    </ol>

    <h3 className="text-2xl font-bold text-gray-900 mt-10 border-b pb-2">2. Tạo 4 loại Conversion "Tiền Tỉ" cho Tiệm Nail</h3>
    
    <div className="space-y-6 my-6">
       <div className="border border-blue-200 rounded-xl p-5 bg-white shadow-sm">
         <h4 className="font-bold text-blue-800 mt-0 flex items-center gap-2 text-lg border-b border-blue-100 pb-2">
            <Smartphone size={20}/> 1. Gọi điện (Call Click) - Chiếm 60% KH
         </h4>
         <p className="text-sm text-slate-600">Cách dễ nhất là đếm số người bấm vào link SĐT trên mobile.</p>
         <ul className="text-sm bg-slate-50 p-3 rounded mt-2 font-mono space-y-1">
           <li><strong className="text-slate-700">Trigger (GTM):</strong> Click URL chứa <code>tel:</code></li>
           <li><strong className="text-slate-700">Thẻ (GTM):</strong> Google Ads Conversion (Dán ID/Label)</li>
           <li><strong className="text-slate-700">Google Ads:</strong> Tạo chuyển đổi "Lượt nhấp gọi", gán giá trị $50.</li>
         </ul>
       </div>

       <div className="border border-emerald-200 rounded-xl p-5 bg-white shadow-sm">
         <h4 className="font-bold text-emerald-800 mt-0 flex items-center gap-2 text-lg border-b border-emerald-100 pb-2">
            <FileText size={20}/> 2. Điền form Đặt Lịch (Form Submit)
         </h4>
         <p className="text-sm text-slate-600">Bắt buộc phải có trang <strong>Thank You Page</strong> (Ví dụ: luxurynails.com/thank-you). Khách điền xong form phải nhảy ra trang này.</p>
         <ul className="text-sm bg-slate-50 p-3 rounded mt-2 font-mono space-y-1">
           <li><strong className="text-slate-700">Trigger (GTM):</strong> Xem trang ➔ Page URL chứa <code>/thank-you</code></li>
           <li><strong className="text-slate-700">Thẻ (GTM):</strong> Google Ads Conversion</li>
           <li><strong className="text-slate-700">Google Ads:</strong> Tạo chuyển đổi "Gửi biểu mẫu", gán giá trị $40.</li>
         </ul>
       </div>

       <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
         <div className="border border-purple-200 rounded-xl p-4 bg-white shadow-sm">
           <h4 className="font-bold text-purple-800 mt-0 text-base">3. Chat Messenger/IG</h4>
           <div className="text-xs bg-slate-50 p-2 rounded mt-2 font-mono">
             Trigger: Click URL chứa <code>m.me/</code> hoặc <code>ig.me/</code>
           </div>
         </div>
         <div className="border border-orange-200 rounded-xl p-4 bg-white shadow-sm">
           <h4 className="font-bold text-orange-800 mt-0 text-base">4. Bấm Chỉ Đường (Maps)</h4>
           <div className="text-xs bg-slate-50 p-2 rounded mt-2 font-mono">
             Trigger: Click URL chứa <code>maps.google.com</code>
           </div>
         </div>
       </div>
    </div>

    <h3 className="text-2xl font-bold text-gray-900 mt-10 border-b pb-2">3. Test bằng GTM Preview (Bắt buộc)</h3>
    <p>Cài xong không được tin tưởng ngay. Trong GTM, bấm <strong>Xem trước (Preview)</strong> ➔ Nhập link web.</p>
    <p>Ra ngoài web bấm thử nút Call. Quay lại tab Preview, nếu thấy Thẻ (Tag) vừa tạo nhảy từ khu vực <em>Tags Not Fired</em> lên <em>Tags Fired</em> ➔ Chúc mừng, bạn đã cài đúng.</p>

    <div className="bg-amber-50 border border-amber-200 p-4 rounded-lg mt-6">
      <h4 className="font-bold text-amber-800 m-0 mb-2">💡 Nhập vào Campaign (Quan trọng)</h4>
      <p className="text-sm m-0 text-amber-900">Vào Cài đặt Chiến dịch ➔ Mục tiêu ➔ Chọn "Sử dụng mục tiêu cấp chiến dịch" ➔ Tick chọn 4 cái Conversion vừa tạo. Nếu không làm bước này, Google AI sẽ không dùng data này để tối ưu.</p>
    </div>

    <InteractiveChecklist 
      id="chk12"
      title="Checklist Bài 12"
      tasks={[
        "Đã cài GTM thành công lên web (Check bằng extension).",
        "Tạo Thẻ Google Tag (Mã nền) kích hoạt trên All Pages.",
        "Tạo Trigger và Tag cho nút Gọi Điện.",
        "Tạo Trigger và Tag cho trang Thank You (Form Submit).",
        "Đã dùng GTM Preview để test thử thẻ có Fired hay không."
      ]}
    />
  </div>
);

export const Lesson13Content = () => (
  <div className="prose prose-blue max-w-none text-gray-800">
    <div className="bg-blue-50 border-l-4 border-blue-500 p-4 mb-6 rounded-r-lg">
      <p className="m-0 text-sm text-blue-800 font-medium">🎯 <strong>Đây là "vũ khí bí mật" 2024-2026.</strong> Không cài là mất 20-30% conversion do iOS 14, AdBlock, Safari chặn. Google Ads sẽ tối ưu sai, bạn tốn tiền.</p>
    </div>

    <h3 className="text-2xl font-bold text-gray-900 border-b pb-2">1. Enhanced Conversions giải quyết vấn đề gì?</h3>
    <div className="bg-slate-50 p-5 rounded-xl border border-slate-200 my-6">
       <p className="font-bold text-red-600 mb-2 flex items-center gap-2"><AlertTriangle size={18}/> Vấn đề cũ (Mất Data):</p>
       <p className="text-sm mb-4 text-slate-700">Khách click ads trên iPhone ➔ Đặt lịch ➔ Safari chặn cookie ➔ Google Ads không biết có conversion ➔ Báo cáo 10 cuộc gọi nhưng Ads chỉ ghi 7.</p>
       
       <p className="font-bold text-emerald-600 mb-2 mt-6 flex items-center gap-2"><CheckCircle2 size={18}/> Giải pháp: Enhanced Conversions (Data Mã hóa)</p>
       <p className="text-sm text-slate-700">Khi khách điền form: Tên + SĐT + Email ➔ Google mã hóa (SHA256) rồi đối chiếu với tài khoản Google của khách ➔ Ghi nhận conversion dù mất cookie.</p>
    </div>

    <h3 className="text-2xl font-bold text-gray-900 mt-10 border-b pb-2">2. Hướng dẫn cài Enhanced Conversions For Web bằng GTM (5 bước)</h3>
    <ol className="space-y-4 mt-4 list-decimal pl-5">
      <li><strong>Bật trong Google Ads:</strong> Vào Mục tiêu ➔ Cài đặt ➔ Enhanced conversions ➔ Tick "Bật cho web" ➔ Chọn "Google Tag Manager".</li>
      <li><strong>Vào GTM mở Tag Conversion:</strong> Tìm tag tên "Google Ads - Book Appointment".</li>
      <li><strong>Bật tùy chọn data người dùng:</strong> Tick vào ô "Include user-provided data from your website" ➔ Chọn "New Variable".</li>
      <li><strong>Tạo Variable lấy data:</strong> Chọn "Manual Configuration" ➔ Tick Email, Phone. Dùng CSS Selector (VD: <code>input[name=email]</code>) để lấy data từ form.</li>
      <li><strong>Submit & Test:</strong> Dùng GTM Preview test điền form. Vào Google Ads ➔ Trạng thái "Recording" là OK.</li>
    </ol>
  </div>
);
