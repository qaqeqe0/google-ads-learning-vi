import React from 'react';
import { InteractiveChecklist } from './InteractiveChecklist';
import { VisualizerQualityScore, VisualizerAccountStructure } from './Visualizers';

export const Lesson5Content = () => (
  <div className="prose prose-blue max-w-none text-gray-800">
    <div className="bg-blue-50 border-l-4 border-blue-500 p-4 mb-6 rounded-r-lg">
      <p className="m-0 text-sm text-blue-800 font-medium">🎯 <strong>Vũ khí bí mật:</strong> Điểm chất lượng quyết định 70% việc bạn Top 1 mà trả rẻ hơn thằng bên cạnh. Bài này chỉ cách đẩy nó lên 9-10/10.</p>
    </div>

    <h3 className="text-2xl font-bold text-gray-900 border-b pb-2">1. Google chấm Điểm chất lượng dựa vào 3 cột</h3>
    <p>Google chấm từ 1-10. Từ khóa 7đ trở lên là ok, 9-10đ là ads đang "bay". Muốn lên 9-10đ thì phải đạt <strong>"Trên trung bình" cả 3 cột</strong>. Yếu 1 cột là rớt về 5-6đ ngay.</p>

    <VisualizerQualityScore />

    <h3 className="text-2xl font-bold text-gray-900 mt-10 border-b pb-2">2. Yếu tố 1: CTR dự kiến (Làm sao để khách bấm mình?)</h3>
    <p>CTR dự kiến = Google dự đoán dựa trên CTR lịch sử của bạn + đối thủ. (Ngành nail Mỹ trung bình 6-8%). <strong>4 cách tăng CTR:</strong></p>
    <ol className="space-y-3">
      <li>
        <strong>Nhét từ khóa vào Tiêu đề 1:</strong> Khách search "acrylic nails Houston" ➔ TĐ1 phải là "Acrylic Nails Houston". Google sẽ in đậm từ khóa đó, CTR tăng 20%.<br/>
        <span className="text-red-600 text-sm">❌ Sai: "Tiệm Nails Đẹp Nhất"</span><br/>
        <span className="text-green-600 text-sm font-bold">✅ Đúng: "Acrylic Nails Houston | $40 Full Set"</span>
      </li>
      <li>
        <strong>Chèn số + ưu đãi:</strong> Não người thích số. Dùng: "20% Off", "$5 Off Pedicure", "4.9★ 500+ Reviews".
      </li>
      <li>
        <strong>Dùng tiện ích mở rộng để Ads to gấp đôi:</strong> Thêm Sitelink (Book Now, Price List), Callout (Walk-ins Welcome), Call (SĐT). Ads chiếm diện tích lớn, đẩy đối thủ khuất tầm nhìn.
      </li>
      <li>
        <strong>Dùng RSA đúng cách:</strong> Ghim TĐ1 = Từ khóa. Các TĐ khác xoay quanh: Giá, Ưu đãi, Khác biệt ("No Wait Time", "Sanitized Tools").
      </li>
    </ol>

    <h3 className="text-2xl font-bold text-gray-900 mt-10 border-b pb-2">3. Yếu tố 2: Mức độ liên quan (Quy tắc 1 Nhóm = 1 Ý định)</h3>
    <p><strong>Lỗi 90% người mới:</strong> Nhét 50 key vào 1 Nhóm (nail salon, pedicure, gel x...). Google không biết ads nói về cái gì ➔ Liên quan = Dưới trung bình.</p>
    <p><strong>Giải pháp: Công thức STAG (Single Theme Ad Group)</strong></p>
    
    <div className="overflow-x-auto my-6">
      <table className="min-w-full bg-white border border-gray-200 text-sm rounded-lg overflow-hidden">
        <thead className="bg-indigo-50">
          <tr>
            <th className="py-3 px-4 text-left font-bold text-indigo-900">Nhóm quảng cáo</th>
            <th className="py-3 px-4 text-left font-bold text-indigo-900">Từ khóa</th>
            <th className="py-3 px-4 text-left font-bold text-indigo-900">Tiêu đề 1 của Ads</th>
            <th className="py-3 px-4 text-left font-bold text-indigo-900">Trang đích</th>
          </tr>
        </thead>
        <tbody className="divide-y divide-gray-100">
          <tr>
            <td className="py-3 px-4 font-semibold">Acrylic Nails</td>
            <td className="py-3 px-4 font-mono text-xs"><code>[acrylic nails]</code>, <code>"acrylic nails near me"</code></td>
            <td className="py-3 px-4 font-bold text-blue-600">Acrylic Nails 77084</td>
            <td className="py-3 px-4 text-slate-600">Trang chuyên Acrylic, bảng giá</td>
          </tr>
          <tr>
            <td className="py-3 px-4 font-semibold">Gel X Nails</td>
            <td className="py-3 px-4 font-mono text-xs"><code>[gel x nails]</code>, <code>"gel x price"</code></td>
            <td className="py-3 px-4 font-bold text-blue-600">Gel X Nails Houston</td>
            <td className="py-3 px-4 text-slate-600">Trang riêng giới thiệu Gel X</td>
          </tr>
          <tr>
            <td className="py-3 px-4 font-semibold">Pedicure</td>
            <td className="py-3 px-4 font-mono text-xs"><code>[pedicure]</code>, <code>"pedicure open now"</code></td>
            <td className="py-3 px-4 font-bold text-blue-600">Pedicure Near Me Open Now</td>
            <td className="py-3 px-4 text-slate-600">Trang dịch vụ làm chân</td>
          </tr>
        </tbody>
      </table>
    </div>
    <p className="mt-2 text-sm text-indigo-800"><strong>Kết quả:</strong> Từ khóa khớp 100% Tiêu đề, khớp 100% Landing Page ➔ Mức độ liên quan = Trên trung bình ➔ QS +2 điểm.</p>

    <h3 className="text-2xl font-bold text-gray-900 mt-10 border-b pb-2">4. Yếu tố 3: Trải nghiệm trang đích (Đừng để khách quay xe)</h3>
    <ul className="space-y-4">
      <li><strong>Tốc độ &lt;3s:</strong> Check bằng PageSpeed Insights. Ảnh nặng là tội đồ. 60% khách nail Mỹ dùng 4G click ads, web load 5s là họ out ngay.</li>
      <li><strong>Nội dung khớp ads "Above the fold" (Phần đầu trang):</strong> Ads hứa "Pedicure $25" ➔ Vừa load web 1s đầu phải thấy ngay chữ "Pedicure $25" to đùng + hình chân đẹp + nút Book. Đừng dẫn về trang chủ chung chung bắt khách tìm.</li>
      <li><strong>Dễ hành động trên mobile:</strong> Nút Call, Book Now phải dính chặt trên màn hình. Form đặt lịch chỉ 3 ô: Tên, SĐT, Dịch vụ. Đừng bắt tạo tài khoản.</li>
    </ul>

    <div className="bg-slate-800 text-white p-6 rounded-xl mt-10 shadow-lg">
      <h4 className="font-bold text-yellow-400 m-0 text-xl border-b border-slate-600 pb-2 mb-4">🩺 Bảng chẩn đoán & Sửa nhanh Điểm chất lượng</h4>
      <div className="space-y-4">
        <div>
          <div className="text-red-400 font-bold mb-1">❌ CTR dự kiến: Dưới TB</div>
          <div className="text-sm text-slate-300"><strong>Nguyên nhân:</strong> TĐ chung chung, thiếu số liệu, thiếu tiện ích.</div>
          <div className="text-sm text-emerald-400"><strong>Cách sửa (30p):</strong> Viết lại TĐ1 chứa nguyên xi từ khóa. Thêm 4 Sitelink, 4 Callout.</div>
        </div>
        <div>
          <div className="text-red-400 font-bold mb-1">❌ Mức độ liên quan: Dưới TB</div>
          <div className="text-sm text-slate-300"><strong>Nguyên nhân:</strong> 1 Nhóm QC nhồi nhét quá nhiều chủ đề mâu thuẫn.</div>
          <div className="text-sm text-emerald-400"><strong>Cách sửa (30p):</strong> Tách nhóm! 1 nhóm &lt;10 từ khóa cùng chung 1 ý định search.</div>
        </div>
        <div>
          <div className="text-red-400 font-bold mb-1">❌ Trải nghiệm trang đích: Dưới TB</div>
          <div className="text-sm text-slate-300"><strong>Nguyên nhân:</strong> Web chậm rùa bò, nội dung không có chữ giống Ads.</div>
          <div className="text-sm text-emerald-400"><strong>Cách sửa:</strong> Nén sạch ảnh &lt;200kb. Làm 1 Landing Page riêng biệt cho dịch vụ đó (VD: Ladipage).</div>
        </div>
      </div>
    </div>

    <InteractiveChecklist 
      id="chk5"
      title="Bài tập Bài 5"
      tasks={[
        "Lọc từ khóa có Điểm CL < 5.",
        "Chụp màn hình 3 cột thành phần gửi vào Group để được hỗ trợ.",
        "Kiểm tra Landing Page hiện tại: Chữ trên Quảng cáo có xuất hiện ngay dòng đầu của Web không?"
      ]}
    />
  </div>
);

export const Lesson6Content = () => (
  <div className="prose prose-blue max-w-none text-gray-800">
    <div className="bg-blue-50 border-l-4 border-blue-500 p-4 mb-6 rounded-r-lg">
      <p className="m-0 text-sm text-blue-800 font-medium">🎯 <strong>Giá thầu = Cần câu cơm.</strong> Chọn sai là lỗ. Chọn đúng là Google tự vác khách về mà CPA vẫn rẻ. Bài này chia sẻ 7 loại Giá thầu chia làm 3 cấp độ.</p>
    </div>

    <h3 className="text-2xl font-bold text-gray-900 border-b pb-2">1. Bảng tổng quan 7 loại Chiến lược Giá thầu</h3>
    
    <div className="overflow-x-auto my-6">
      <table className="min-w-full bg-white border border-gray-200 text-sm rounded-lg overflow-hidden shadow-sm">
        <thead className="bg-slate-800 text-white">
          <tr>
            <th className="py-3 px-4 text-left font-bold w-1/4">Loại giá thầu</th>
            <th className="py-3 px-4 text-left font-bold w-1/3">Google làm gì?</th>
            <th className="py-3 px-4 text-left font-bold">Khi nào dùng?</th>
          </tr>
        </thead>
        <tbody className="divide-y divide-gray-200">
          <tr className="bg-slate-100"><td colSpan={3} className="py-2 px-4 font-bold text-slate-700 uppercase text-xs">Nhóm 1: Thủ công</td></tr>
          <tr>
            <td className="py-3 px-4 font-bold text-slate-800">1. Manual CPC</td>
            <td className="py-3 px-4">Bạn tự đặt giá trần cho từng từ khóa.</td>
            <td className="py-3 px-4">Tuần 1-2, tài khoản mới tinh chưa có số liệu (0 conversion).</td>
          </tr>
          <tr className="bg-slate-100"><td colSpan={3} className="py-2 px-4 font-bold text-slate-700 uppercase text-xs">Nhóm 2: Tự động theo Click & Conversion</td></tr>
          <tr>
            <td className="py-3 px-4 font-bold text-blue-700">2. Maximize Clicks</td>
            <td className="py-3 px-4">Đốt sạch ngân sách để gom nhiều click nhất.</td>
            <td className="py-3 px-4">Tuần 2-4, cần data. <em className="text-red-500">Phải đặt Max CPC Limit!</em></td>
          </tr>
          <tr>
            <td className="py-3 px-4 font-bold text-emerald-600">3. Maximize Conversions</td>
            <td className="py-3 px-4">Đốt sạch tiền để ra nhiều đơn nhất, kệ CPA đắt hay rẻ.</td>
            <td className="py-3 px-4">Tháng 1-2, có &ge;15 đơn/30 ngày.</td>
          </tr>
          <tr>
            <td className="py-3 px-4 font-bold text-emerald-700">4. Target CPA (tCPA)</td>
            <td className="py-3 px-4">Giữ chi phí 1 đơn hàng = mức bạn khoán.</td>
            <td className="py-3 px-4">Tháng 2-3, có &ge;30 đơn/30 ngày, muốn kiểm soát lợi nhuận.</td>
          </tr>
           <tr className="bg-slate-100"><td colSpan={3} className="py-2 px-4 font-bold text-slate-700 uppercase text-xs">Nhóm 3: Tự động theo Giá trị/Hiển thị</td></tr>
           <tr>
            <td className="py-3 px-4 font-bold text-purple-600">5. Maximize Conv. Value</td>
            <td className="py-3 px-4">Ưu tiên bán sản phẩm giá trị cao nhất.</td>
            <td className="py-3 px-4">Khi có nhiều phân khúc giá (Mani $25 vs Combo $120).</td>
          </tr>
          <tr>
            <td className="py-3 px-4 font-bold text-purple-700">6. Target ROAS (tROAS)</td>
            <td className="py-3 px-4">Giữ lợi nhuận = mức khoán (VD: Bỏ $1 thu $4).</td>
            <td className="py-3 px-4">Tháng 3+, Level cao nhất. Có &ge;50 đơn/tháng.</td>
          </tr>
           <tr>
            <td className="py-3 px-4 font-bold text-orange-600">7. Target Impression Share</td>
            <td className="py-3 px-4">Cố sống cố chết để giữ Top 1 (VD: 90% thời gian).</td>
            <td className="py-3 px-4">Chạy từ khóa Brand tiệm mình để đối thủ không cướp.</td>
          </tr>
        </tbody>
      </table>
    </div>

    <h3 className="text-2xl font-bold text-gray-900 mt-10 border-b pb-2">2. Giải thích chi tiết qua Ví dụ Tiệm Nail</h3>
    <ul className="space-y-4">
      <li>
        <strong>Manual CPC (Số sàn):</strong> Bạn đặt $3/click cho "acrylic nails". Google không trừ quá $3. Dùng để test từ khóa lúc mới lập tiệm. <em>Rủi ro: Sau 1 tháng không đổi sang Tự động là phí tiền vì Google ngu đi.</em>
      </li>
      <li>
        <strong>Maximize Clicks (Câu click):</strong> Ngân sách $30/ngày. Bạn đặt Max CPC $3. Google sẽ đem về ~10 click thay vì 3 click giá $10. <em>Cảnh báo: Không chặn giá trần, Google có thể bid $15 cho 1 click "ảo tưởng", cháy túi trong 1h.</em>
      </li>
      <li>
        <strong>Maximize Conversions (Đốt lấy số):</strong> AI biết lúc 10am thứ 7 dễ ra khách. Nó sẵn sàng bid $8/click giờ đó để ra cuộc gọi đặt lịch, dù bình thường chỉ bid $3. Phù hợp khi cần lấp kín lịch hẹn gấp.
      </li>
      <li>
        <strong>Target CPA (Khoán chi phí):</strong> Bạn tính: Làm bộ Acrylic $50, lãi $25. Vậy chi phí QC (CPA) phải &lt;$25 mới lời. Bạn đặt lệnh tCPA = $18. Google sẽ tự cân đối sao cho trung bình 1 khách chỉ tốn $18. <em>Mẹo: Đặt tCPA = CPA thực tế 30 ngày qua + 20% cho AI thở. Đặt thấp quá nó không chạy.</em>
      </li>
      <li>
        <strong>Target ROAS (Khoán lợi nhuận):</strong> Bạn biết 40% khách Acrylic sẽ quay lại trong 6 tháng ➔ LTV (Giá trị vòng đời) = $204. Bạn ra lệnh tROAS 300% (Bỏ 1$ ăn 3$). Tức là bạn dám trả CPA lên tới $68 cho 1 khách mới mà vẫn lời dài hạn!
      </li>
    </ul>

    <h3 className="text-2xl font-bold text-gray-900 mt-10 border-b pb-2">3. Lộ trình 90 ngày lên đỉnh (Không được nhảy cóc)</h3>
    <p>Nguyên tắc sống còn: <strong>Tự động hóa (Smart Bidding) cần có Data (Chuyển đổi) để AI học.</strong> Bật tCPA lúc tài khoản 0 đơn = AI mù đường, ads đắp chiếu.</p>
    
    <div className="flex flex-col md:flex-row gap-4 my-8">
       <div className="flex-1 bg-white border border-gray-200 p-5 rounded-xl shadow-sm relative text-center">
         <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-slate-800 text-white px-3 py-1 text-xs rounded-full font-bold">Tuần 1-2</div>
         <h4 className="font-bold text-slate-700 mt-2 text-lg">Manual CPC</h4>
         <p className="text-sm text-slate-500 mt-2">Test từ khóa<br/>Lấy CTR & Impression</p>
       </div>
       <div className="flex-1 bg-blue-50 border border-blue-200 p-5 rounded-xl shadow-sm relative text-center">
         <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-blue-600 text-white px-3 py-1 text-xs rounded-full font-bold">Tuần 3-4</div>
         <h4 className="font-bold text-blue-800 mt-2 text-lg">Max Clicks</h4>
         <p className="text-sm text-blue-600/80 mt-2">Ép Traffic<br/>Thu thập &ge;15 Chuyển đổi</p>
       </div>
       <div className="flex-1 bg-emerald-50 border border-emerald-300 p-5 rounded-xl shadow-md relative text-center transform scale-105">
         <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-emerald-600 text-white px-3 py-1 text-xs rounded-full font-bold shadow-sm">Tháng 2-3</div>
         <h4 className="font-bold text-emerald-800 mt-2 text-xl">tCPA</h4>
         <p className="text-sm text-emerald-700/80 mt-2 font-medium">Bơm Lợi Nhuận<br/>Khóa chi phí an toàn</p>
       </div>
    </div>

    <InteractiveChecklist 
      id="chk6"
      title="Bài tập Bài 6"
      tasks={[
        "Kiểm tra Chiến dịch hiện tại: Nếu đang dùng Max Clicks, đảm bảo bạn ĐÃ thiết lập Giới hạn CPC tối đa.",
        "Tính toán CPA hòa vốn cho dịch vụ chủ lực của bạn.",
        "Nếu tài khoản đã có >30 đơn/tháng, mạnh dạn nhân bản 1 chiến dịch sang chạy thử Target CPA (tCPA)."
      ]}
    />
  </div>
);

export const Lesson7Content = () => (
  <div className="prose prose-blue max-w-none text-gray-800">
    <div className="bg-blue-50 border-l-4 border-blue-500 p-4 mb-6 rounded-r-lg">
      <p className="m-0 text-sm text-blue-800 font-medium">🎯 <strong>Mục tiêu:</strong> Xây nhà phải từ móng. Cấu trúc tài khoản sai từ đầu, sau này sửa chữa hoặc mở rộng (Scale) sẽ cực kỳ đau đớn.</p>
    </div>

    <h3 className="text-2xl font-bold text-gray-900 border-b pb-2">1. Tài khoản thường vs MCC (My Client Center)</h3>
    <p><strong>Tài khoản thường = 1 Cửa hàng.</strong> Mỗi tài khoản có 1 ID, 1 thẻ thanh toán, 1 bộ chiến dịch. Phù hợp nếu bạn chỉ có 1 tiệm duy nhất và không bao giờ mở thêm.<br/>
    <em>Nhược điểm chí mạng:</em> Có 2 tiệm thì phải Log in - Log out 2 email. Không so sánh được hiệu quả. Không share được tệp khách hàng.</p>
    
    <p><strong>MCC (Tài khoản người quản lý) = Công ty mẹ.</strong> Chứa hàng chục tài khoản "Cửa hàng" bên trong. Log in 1 lần thấy tất cả.</p>

    <VisualizerAccountStructure />

    <h3 className="text-2xl font-bold text-gray-900 mt-10 border-b pb-2">2. 7 Lý do chủ tiệm Nail PHẢI dùng MCC ngay từ đầu</h3>
    
    <div className="overflow-x-auto my-6">
      <table className="min-w-full bg-white border border-gray-200 text-sm rounded-lg overflow-hidden">
        <thead className="bg-slate-100 text-slate-700">
          <tr>
            <th className="py-3 px-4 text-left font-bold w-1/4">Lý do</th>
            <th className="py-3 px-4 text-left font-bold w-5/12">Thực chiến cho tiệm Nail</th>
            <th className="py-3 px-4 text-left font-bold text-red-600">Nếu KHÔNG dùng MCC</th>
          </tr>
        </thead>
        <tbody className="divide-y divide-gray-200">
          <tr>
            <td className="py-3 px-4 font-bold text-blue-700">1. Mở rộng không giới hạn</td>
            <td className="py-3 px-4">Nay 1 tiệm Dallas. Năm sau mở Houston chỉ cần bấm "Tạo TK con" trong 30s.</td>
            <td className="py-3 px-4">Phải tạo Gmail mới, xác minh lại từ đầu.</td>
          </tr>
          <tr>
            <td className="py-3 px-4 font-bold text-emerald-600">2. Một thẻ cho N Tiệm</td>
            <td className="py-3 px-4">Add 1 thẻ Credit vào MCC. Các tiệm tự trừ tiền. Cuối tháng 1 Bill tổng.</td>
            <td className="py-3 px-4">Thẻ lỗi 1 tiệm, ads tiệm đó tắt. Kế toán loạn.</td>
          </tr>
          <tr>
            <td className="py-3 px-4 font-bold text-purple-600">3. So sánh hiệu quả 10s</td>
            <td className="py-3 px-4">Dashboard MCC báo: Dallas CPA $18, Houston CPA $25. Biết ngay đâu đang lỗ.</td>
            <td className="py-3 px-4">Phải log in từng TK, xuất Excel, cộng tay.</td>
          </tr>
          <tr>
            <td className="py-3 px-4 font-bold text-orange-600">4. Share "Tài sản" chung</td>
            <td className="py-3 px-4">Tạo 1 danh sách từ phủ định (school, cheap) ➔ Share 1 click cho 3 tiệm.</td>
            <td className="py-3 px-4">Copy-paste tay cho từng tiệm, mất 2 tiếng.</td>
          </tr>
          <tr>
            <td className="py-3 px-4 font-bold text-slate-700">5. Phân quyền an toàn</td>
            <td className="py-3 px-4">Thuê nhân viên chỉ cho xem Dallas. Bạn nắm MCC ➔ Đuổi việc cắt quyền 1 click.</td>
            <td className="py-3 px-4">Giao Pass TK thường = Giao chìa khóa két.</td>
          </tr>
          <tr>
            <td className="py-3 px-4 font-bold text-pink-600">6. Sandbox / Chạy thử</td>
            <td className="py-3 px-4">Tạo TK con "Test" để thử Landing Page mới. Toang thì xóa, không ảnh hưởng tiệm chính.</td>
            <td className="py-3 px-4">Test trên TK chính, hỏng phát là rớt rank ngay.</td>
          </tr>
        </tbody>
      </table>
    </div>

    <h3 className="text-2xl font-bold text-gray-900 mt-10 border-b pb-2">3. Cách tạo MCC (Miễn phí 100%)</h3>
    <ol className="space-y-2 font-medium">
      <li>Vào link: <code>ads.google.com/home/tools/manager-accounts/</code></li>
      <li>Bấm "Tạo tài khoản người quản lý".</li>
      <li>Đặt tên: "Luxury Nails Group" (Tên thương hiệu mẹ).</li>
      <li>Chọn "Để quản lý tài khoản của tôi" ➔ Múi giờ ➔ Tiền tệ (Cẩn thận, tạo xong không đổi được tiền tệ cấp MCC).</li>
      <li>Xong! Vào trong bấm Dấu [+] ➔ "Tạo tài khoản mới" để tạo chi nhánh Dallas đầu tiên.</li>
    </ol>

    <InteractiveChecklist 
      id="chk7"
      title="Bài tập Bài 7"
      tasks={[
        "Tạo ngay 1 tài khoản MCC nếu bạn chưa có.",
        "Link tài khoản Google Ads cũ của bạn vào MCC (Bằng cách lấy ID 10 số, vào MCC > Cài đặt TK phụ > Gửi lời mời).",
        "Tạo cấu trúc tên chuẩn: MCC = Tên Group. TK Con = Tên Thương hiệu + Thành phố + Zipcode."
      ]}
    />
  </div>
);

export const Lesson8Content = () => (
  <div className="prose prose-blue max-w-none text-gray-800">
    <div className="bg-blue-50 border-l-4 border-blue-500 p-4 mb-6 rounded-r-lg">
      <p className="m-0 text-sm text-blue-800 font-medium">🎯 <strong>Mục tiêu:</strong> Học các "chia ngăn" cấu trúc bên trong 1 tài khoản. Quy tắc 1 Ad Group = 1 Chủ đề sẽ giúp bạn cắt giảm 30% CPC.</p>
    </div>

    <h3 className="text-2xl font-bold text-gray-900 border-b pb-2">1. Sơ đồ Cấu trúc chuẩn 4 Cấp độ</h3>
    <p>Bên trong Tài khoản Con (VD: Dallas 77084), chúng hãy chia thành 4 lớp. Mỗi lớp có nhiệm vụ riêng:</p>

    <div className="grid grid-cols-1 md:grid-cols-2 gap-4 my-6">
      <div className="border border-slate-300 p-5 rounded-lg bg-white shadow-sm border-t-4 border-t-blue-500">
        <h4 className="font-bold text-blue-800 mt-0">1. Campaign (Chiến dịch)</h4>
        <p className="text-sm mt-2 mb-2 text-slate-600">Nắm trùm: Ngân sách/ngày, Vị trí địa lý (5 miles), Loại chiến dịch (Search/PMax), Chiến lược giá thầu (tCPA).</p>
        <div className="bg-slate-100 p-2 rounded text-xs font-mono">VD: Search - Acrylic - Dallas $40/ngày</div>
      </div>
      <div className="border border-slate-300 p-5 rounded-lg bg-white shadow-sm border-t-4 border-t-indigo-500">
        <h4 className="font-bold text-indigo-800 mt-0">2. Ad Group (Nhóm QC)</h4>
        <p className="text-sm mt-2 mb-2 text-slate-600">Gom nhóm theo <strong>1 Ý định tìm kiếm duy nhất</strong> của khách.</p>
        <div className="bg-slate-100 p-2 rounded text-xs font-mono">VD: Nhóm "Gel X Nails"</div>
      </div>
      <div className="border border-slate-300 p-5 rounded-lg bg-white shadow-sm border-t-4 border-t-emerald-500">
        <h4 className="font-bold text-emerald-800 mt-0">3. Keywords & Ads</h4>
        <p className="text-sm mt-2 mb-2 text-slate-600">Từ khóa kích hoạt QC. QC phải chứa nguyên văn Từ khóa.</p>
        <div className="bg-slate-100 p-2 rounded text-xs font-mono">Key: [gel x nails] {'->'} Ads: "Gel X Dallas"</div>
      </div>
      <div className="border border-slate-300 p-5 rounded-lg bg-white shadow-sm border-t-4 border-t-orange-500">
        <h4 className="font-bold text-orange-800 mt-0">4. Tiện ích (Assets)</h4>
        <p className="text-sm mt-2 mb-2 text-slate-600">Làm phình to Quảng cáo bằng Sitelink, Nút gọi, Hình ảnh.</p>
        <div className="bg-slate-100 p-2 rounded text-xs font-mono">Sitelink: Price List, Book Now</div>
      </div>
    </div>

    <h3 className="text-2xl font-bold text-gray-900 mt-10 border-b pb-2">2. Quy tắc Vàng STAG (1 Nhóm = 1 Chủ đề)</h3>
    <p><strong>Sai lầm 90% người mới:</strong> Nhét tất cả mọi thứ vào "Group 1". Từ <code>nail salon</code> đến <code>pedicure</code>, <code>eyelash</code>. Kết quả là khách tìm "pedicure" lại ra ads ghi "All Nail Services". Họ không bấm ➔ Điểm CL = 3 ➔ Trả tiền đắt x2.</p>
    
    <p><strong>Làm đúng: Tách theo ý định tìm kiếm.</strong> Dịch vụ nào chiếm &gt;20% doanh thu tiệm ➔ Tách làm 1 Ad Group riêng.</p>

    <div className="overflow-x-auto my-6">
      <table className="min-w-full bg-white border border-gray-200 text-sm rounded-lg overflow-hidden">
         <thead className="bg-emerald-50">
          <tr>
            <th className="py-2 px-4 text-left font-bold text-emerald-900">Ad Group</th>
            <th className="py-2 px-4 text-left font-bold text-emerald-900">Ý định khách hàng</th>
            <th className="py-2 px-4 text-left font-bold text-emerald-900">Từ khóa (Keywords)</th>
          </tr>
        </thead>
        <tbody className="divide-y divide-gray-100">
          <tr>
            <td className="py-3 px-4 font-bold">Acrylic Nails</td>
            <td className="py-3 px-4">Muốn đắp bột</td>
            <td className="py-3 px-4 font-mono text-xs"><code>[acrylic nails near me]</code>, <code>[acrylic full set 77084]</code></td>
          </tr>
          <tr>
            <td className="py-3 px-4 font-bold">Pedicure</td>
            <td className="py-3 px-4">Muốn chăm sóc chân</td>
            <td className="py-3 px-4 font-mono text-xs"><code>[pedicure near me]</code>, <code>"spa pedicure"</code></td>
          </tr>
          <tr>
            <td className="py-3 px-4 font-bold">Walk-in Salon</td>
            <td className="py-3 px-4">Cần làm gấp, không hẹn</td>
            <td className="py-3 px-4 font-mono text-xs"><code>[walk in nail salon]</code>, <code>[nail salon open now]</code></td>
          </tr>
        </tbody>
      </table>
    </div>

    <InteractiveChecklist 
      id="chk8"
      title="Checklist Bài 8 (Trước khi bấm Đăng)"
      tasks={[
        "Mỗi Campaign chỉ target ĐÚNG 1 bán kính/zipcode (Không target toàn nước Mỹ).",
        "Mỗi Ad Group chỉ nói về 1 chủ đề. Đọc tên Ad Group là biết ngay từ khóa bên trong.",
        "Từ khóa trong Ad Group có xuất hiện trong Tiêu đề 1 của Ads.",
        "Đã cài ít nhất 4 Sitelink và 4 Callout cho toàn bộ Campaign."
      ]}
    />
  </div>
);
