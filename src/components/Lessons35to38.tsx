import React from 'react';
import { InteractiveChecklist } from './InteractiveChecklist';

// ─── Lesson 35 ────────────────────────────────────────────────────────────────
export const Lesson35Content: React.FC = () => (
  <div className="prose prose-blue max-w-none text-gray-800">
    <div className="bg-amber-50 border-l-4 border-amber-500 p-4 mb-6 rounded-r-lg">
      <p className="m-0 text-sm text-amber-800 font-medium">
        📺 <strong>YouTube = TV 2026.</strong> Khách VN ở Mỹ xem 2h/ngày. CPC view $0.03-$0.15, rẻ hơn GDN. Nhưng chọn sai format = $500 không ra 1 booking.
      </p>
    </div>

    <div className="bg-blue-50 border border-blue-200 rounded-xl p-4 my-4 text-sm">
      <p className="font-bold text-blue-800 mb-1">💡 Tư duy</p>
      <p className="text-blue-900 mb-0">YouTube không để bán ngay. Dùng để <strong>phủ 5 miles + remarketing + cướp khách đối thủ đang xem video "nail design"</strong>.</p>
    </div>

    <h3 className="text-2xl font-bold text-gray-900 border-b pb-2">1. Bảng 5 format YouTube – Dùng cho tiệm nail local khi nào</h3>

    <div className="overflow-x-auto my-6">
      <table className="min-w-full bg-white border border-gray-200 text-sm rounded-lg overflow-hidden shadow-sm">
        <thead className="bg-red-700 text-white">
          <tr>
            <th className="py-3 px-4 text-left font-bold">#</th>
            <th className="py-3 px-4 text-left font-bold">Format</th>
            <th className="py-3 px-4 text-left font-bold">Thời lượng</th>
            <th className="py-3 px-4 text-left font-bold">Skip?</th>
            <th className="py-3 px-4 text-left font-bold">Trả tiền khi nào</th>
            <th className="py-3 px-4 text-left font-bold">CPC/CPV</th>
            <th className="py-3 px-4 text-left font-bold">Dùng cho mục tiêu gì</th>
          </tr>
        </thead>
        <tbody className="divide-y divide-gray-200">
          <tr className="bg-slate-50">
            <td className="py-3 px-4 font-bold text-slate-700">1</td>
            <td className="py-3 px-4 font-bold text-red-700">In-stream có thể bỏ qua</td>
            <td className="py-3 px-4">15s-3p</td>
            <td className="py-3 px-4">Bỏ qua sau 5s</td>
            <td className="py-3 px-4">Xem 30s hoặc click</td>
            <td className="py-3 px-4 font-bold text-emerald-700">CPV $0.03-$0.10</td>
            <td className="py-3 px-4"><strong>Remarketing + Giáo dục.</strong> Kể chuyện tiệm, quy trình sterilize</td>
          </tr>
          <tr>
            <td className="py-3 px-4 font-bold text-slate-700">2</td>
            <td className="py-3 px-4 font-bold text-red-700">In-stream không thể bỏ qua</td>
            <td className="py-3 px-4">15s</td>
            <td className="py-3 px-4">Không</td>
            <td className="py-3 px-4">Mỗi lần hiển thị</td>
            <td className="py-3 px-4 font-bold text-emerald-700">CPM $8-$15</td>
            <td className="py-3 px-4"><strong>Phủ brand 5 miles.</strong> Bắt xem hết 15s</td>
          </tr>
          <tr className="bg-slate-50">
            <td className="py-3 px-4 font-bold text-slate-700">3</td>
            <td className="py-3 px-4 font-bold text-red-700">In-feed Video</td>
            <td className="py-3 px-4">Tự do</td>
            <td className="py-3 px-4">Không</td>
            <td className="py-3 px-4">Click xem video</td>
            <td className="py-3 px-4 font-bold text-emerald-700">CPC $0.3-$0.8</td>
            <td className="py-3 px-4"><strong>Kiếm khách mới.</strong> Hiện khi họ search "acrylic nails tutorial"</td>
          </tr>
          <tr>
            <td className="py-3 px-4 font-bold text-slate-700">4</td>
            <td className="py-3 px-4 font-bold text-red-700">Bumper 6s</td>
            <td className="py-3 px-4">6s</td>
            <td className="py-3 px-4">Không</td>
            <td className="py-3 px-4">Mỗi lần hiển thị</td>
            <td className="py-3 px-4 font-bold text-emerald-700">CPM $4-$8</td>
            <td className="py-3 px-4"><strong>Nhắc thương hiệu.</strong> Rẻ nhất, phủ rộng</td>
          </tr>
          <tr className="bg-slate-50">
            <td className="py-3 px-4 font-bold text-slate-700">5</td>
            <td className="py-3 px-4 font-bold text-red-700">Shorts</td>
            <td className="py-3 px-4">&lt;60s dọc</td>
            <td className="py-3 px-4">Lướt</td>
            <td className="py-3 px-4">View 10s hoặc click</td>
            <td className="py-3 px-4 font-bold text-emerald-700">CPV $0.02-$0.06</td>
            <td className="py-3 px-4"><strong>Gen Z.</strong> Hiện giữa các clip Shorts</td>
          </tr>
        </tbody>
      </table>
    </div>

    <div className="bg-slate-800 text-white p-4 rounded-xl my-4 text-sm">
      📐 <strong>Chốt cho tiệm nail $30/ngày:</strong> 70% tiền vào <span className="text-amber-300">In-stream Skip + Bumper</span>. 30% vào <span className="text-blue-300">In-feed</span>. Non-skip chỉ chạy khi có video 15s cực hay.
    </div>

    <h3 className="text-2xl font-bold text-gray-900 mt-10 border-b pb-2">2. Mổ xẻ từng format – Làm video gì, target ai, KPI gì</h3>

    {/* FORMAT 1 */}
    <div className="border border-blue-200 rounded-xl p-5 my-4 bg-blue-50/30">
      <h4 className="font-bold text-blue-800 text-base mb-3">FORMAT 1: In-stream Skip – Trùm remarketing</h4>
      <p className="text-sm text-slate-700 mb-2"><strong>Cách hiện:</strong> Khách xem Youtube, ads bạn chen ngang. 5s đầu không skip được.</p>
      <p className="text-sm font-bold text-slate-700 mb-2">Video chuẩn 30s cho tiệm nail:</p>
      <div className="bg-white border border-blue-100 rounded-lg p-3 font-mono text-xs space-y-1 mb-3">
        <div><span className="text-blue-700 font-bold">0-3s Hook:</span> Cận cảnh móng gãy → Chữ to: <code>LIFTING? BROKEN?</code></div>
        <div><span className="text-blue-700 font-bold">3-20s Giải pháp:</span> Quay nhanh tiệm sạch, thợ 10 năm, khử trùng, móng sau khi làm</div>
        <div><span className="text-blue-700 font-bold">20-27s Offer:</span> <code>New Client $5 Off. 77084. Free Parking</code></div>
        <div><span className="text-blue-700 font-bold">27-30s CTA:</span> <code>Book Online – Link dưới comment. Call (xxx) xxx-xxxx</code></div>
      </div>
      <p className="text-sm font-bold text-slate-700 mb-1">Target:</p>
      <ol className="text-sm text-slate-600 space-y-1 mb-3">
        <li><strong>Remarketing:</strong> All Visitors 30d + Viewed Price 14d. Bid CPV max $0.08</li>
        <li><strong>Custom Segment:</strong> Người search <code>acrylic nails</code>, <code>nail salon near me</code> + vào web đối thủ</li>
      </ol>
      <div className="bg-blue-100 rounded-lg px-3 py-2 text-xs font-medium text-blue-800">
        <strong>KPI:</strong> View Rate &gt;30%, CTR &gt;0.8%, CPV &lt;$0.06. View-through Conv mới quan trọng. Khách xem 30s, 3 ngày sau search Google.
      </div>
    </div>

    {/* FORMAT 2 */}
    <div className="border border-orange-200 rounded-xl p-5 my-4 bg-orange-50/30">
      <h4 className="font-bold text-orange-800 text-base mb-3">FORMAT 2: In-stream Non-skip 15s – Ép xem</h4>
      <p className="text-sm text-slate-700 mb-2"><strong>Khi nào dùng:</strong> Bạn có 1 video 15s kể hết USP, và muốn 100% người xem hết. Ngân sách &gt;$20/ngày.</p>
      <p className="text-sm font-bold text-slate-700 mb-2">Kịch bản 15s:</p>
      <div className="bg-white border border-orange-100 rounded-lg p-3 font-mono text-xs space-y-1 mb-3">
        <div><span className="text-orange-700 font-bold">0-3s:</span> <code>Tiệm nail 77084 duy nhất khử trùng dụng cụ 3 bước</code></div>
        <div><span className="text-orange-700 font-bold">3-10s:</span> Quay nhanh 3 bước + móng đẹp + 4.9★ 1200 reviews</div>
        <div><span className="text-orange-700 font-bold">10-15s:</span> <code>Acrylic $45. Walk-ins Welcome. Book Now</code></div>
      </div>
      <p className="text-sm text-slate-700 mb-2"><strong>Target:</strong> Bán kính 3 miles 77084, Tuổi 18-55, Nữ. Không target từ khóa vì non-skip đắt.</p>
      <div className="bg-orange-100 rounded-lg px-3 py-2 text-xs font-medium text-orange-800">
        <strong>KPI:</strong> CPM &lt;$12, Brand Lift +20%. Đo bằng Google Brand Lift Study miễn phí.
      </div>
    </div>

    {/* FORMAT 3 */}
    <div className="border border-emerald-200 rounded-xl p-5 my-4 bg-emerald-50/30">
      <h4 className="font-bold text-emerald-800 text-base mb-3">FORMAT 3: In-feed Video – Mồi câu khách đang tìm</h4>
      <p className="text-sm text-slate-700 mb-2"><strong>Cách hiện:</strong> Khách search Youtube "gel x nails tutorial", video bạn nằm top kết quả, có chữ "Ad".</p>
      <p className="text-sm text-slate-700 mb-2"><strong>Video chuẩn:</strong> Làm 1 clip "3 mẫu Acrylic Hot 2024" dài 60s. Không bán, chỉ chia sẻ. Cuối clip 5s: <code>Làm tại Luxury Nails 77084 – Link đặt lịch dưới mô tả</code>.</p>
      <p className="text-sm text-slate-700 mb-2"><strong>Target:</strong> Từ khóa YouTube: <code>acrylic nails</code>, <code>gel x tutorial</code>, <code>nail design 2024</code>.</p>
      <div className="bg-emerald-100 rounded-lg px-3 py-2 text-xs font-medium text-emerald-800">
        <strong>KPI:</strong> CTR &gt;1.5%, CPV &lt;$0.10. Vì họ chủ động click xem.
      </div>
    </div>

    {/* FORMAT 4 */}
    <div className="border border-purple-200 rounded-xl p-5 my-4 bg-purple-50/30">
      <h4 className="font-bold text-purple-800 text-base mb-3">FORMAT 4: Bumper 6s – Nhắc tên 24/7</h4>
      <p className="text-sm text-slate-700 mb-2"><strong>Quy tắc 6s:</strong> 1 thông điệp duy nhất. Xem 100 lần nhớ tên.</p>
      <p className="text-sm font-bold text-slate-700 mb-2">3 mẫu 6s cho nail:</p>
      <ol className="text-sm text-slate-700 space-y-1 mb-3">
        <li>Brand: <code>Luxury Nails 77084 – 4.9★ 1200 Reviews</code> + quay mặt tiền tiệm 2s</li>
        <li>Offer: <code>Acrylic $45 – No Lifting 3 Weeks</code> + quay móng</li>
        <li>Địa phương: <code>Nail salon 77084 – Walk-ins Welcome</code> + map</li>
      </ol>
      <p className="text-sm text-slate-700 mb-2"><strong>Target:</strong> Remarketing + Custom Segment 5 miles. Tần suất 4 lần/user/tuần.</p>
      <div className="bg-purple-100 rounded-lg px-3 py-2 text-xs font-medium text-purple-800">
        <strong>KPI:</strong> CPM &lt;$6. Không đo click. Đo View-through Conv + Search Lift.
      </div>
    </div>

    {/* FORMAT 5 */}
    <div className="border border-pink-200 rounded-xl p-5 my-4 bg-pink-50/30">
      <h4 className="font-bold text-pink-800 text-base mb-3">FORMAT 5: Shorts Ads – Đánh Gen Z</h4>
      <p className="text-sm text-slate-700 mb-1"><strong>Video:</strong> Dọc 9:16, &lt;60s. Hook 1s đầu: Trend TikTok "What I asked vs What I got" phiên bản móng.</p>
      <p className="text-sm text-slate-700 mb-1"><strong>Target:</strong> Tuổi 18-34, Sở thích Beauty, 5 miles.</p>
      <div className="bg-pink-100 rounded-lg px-3 py-2 text-xs font-medium text-pink-800 mt-2">
        <strong>KPI:</strong> View 10s &gt;40%. Chốt bằng comment ghim: <code>Book mẫu này tại 77084</code>.
      </div>
    </div>

    <h3 className="text-2xl font-bold text-gray-900 mt-10 border-b pb-2">3. Setup Campaign YouTube 20 phút cho tiệm nail</h3>

    <div className="space-y-4 my-6">
      <div className="border border-gray-200 rounded-xl p-4 bg-slate-50">
        <h4 className="font-bold text-slate-800 mb-2">Bước 1: Tạo video</h4>
        <p className="text-sm text-slate-600 mb-1">Dùng iPhone + CapCut. Không cần máy quay $2000. Yêu cầu:</p>
        <ol className="text-sm text-slate-700 space-y-1">
          <li>Dọc 9:16 cho Shorts, ngang 16:9 cho In-stream.</li>
          <li>Chữ to, sub to. 80% xem không bật tiếng.</li>
          <li>3s đầu có Hook: Giá, Trước/Sau, Sai lầm.</li>
        </ol>
      </div>
      <div className="border border-gray-200 rounded-xl p-4 bg-slate-50">
        <h4 className="font-bold text-slate-800 mb-2">Bước 2: Up Youtube + Cài đặt</h4>
        <ol className="text-sm text-slate-700 space-y-1">
          <li>Up video → Để Unlisted</li>
          <li>Thêm màn hình kết thúc: Nút "Đặt lịch" → Link web</li>
          <li>Thêm thẻ: 5s đầu hiện <code>Book Online</code></li>
        </ol>
      </div>
      <div className="border border-gray-200 rounded-xl p-4 bg-slate-50">
        <h4 className="font-bold text-slate-800 mb-2">Bước 3: Tạo Campaign</h4>
        <p className="text-sm text-slate-700 mb-1">Google Ads → +Chiến dịch → <strong>Video</strong> → Mục tiêu: Lượt xem hoặc Khách hàng tiềm năng</p>
        <p className="text-sm text-slate-700 mb-1">Loại:</p>
        <ul className="text-sm text-slate-700 space-y-1">
          <li><strong>Chiến dịch video lượt xem</strong> → Chạy In-stream Skip + In-feed + Shorts. CPV</li>
          <li><strong>Chiến dịch phạm vi tiếp cận</strong> → Chạy Bumper 6s + Non-skip 15s. CPM</li>
        </ul>
      </div>
      <div className="border border-gray-200 rounded-xl p-4 bg-slate-50">
        <h4 className="font-bold text-slate-800 mb-2">Bước 4: Target chuẩn Local</h4>
        <ol className="text-sm text-slate-700 space-y-2">
          <li><strong>Vị trí:</strong> Nhập 77084 → Bán kính 5 miles</li>
          <li>
            <strong>Đối tượng:</strong>
            <ul className="ml-4 mt-1 space-y-1">
              <li>Remarketing: All Visitors 30d</li>
              <li>Custom Segment: <code>nail salon</code>, <code>acrylic nails</code> + URL 3 đối thủ gần nhất</li>
              <li>Nhân khẩu: Nữ 18-55, Thu nhập Top 50%</li>
            </ul>
          </li>
          <li><strong>Vị trí đặt:</strong> Loại trừ <code>Games</code>, <code>Music &lt;10 tuổi</code>. Giữ <code>Beauty</code>, <code>Lifestyle</code></li>
        </ol>
      </div>
      <div className="border border-gray-200 rounded-xl p-4 bg-slate-50">
        <h4 className="font-bold text-slate-800 mb-2">Bước 5: Bid</h4>
        <p className="text-sm text-slate-700">In-stream Skip: CPV tối đa $0.08</p>
        <p className="text-sm text-slate-700">Bumper: CPM tối đa $7</p>
        <p className="text-sm text-slate-700">Ngân sách: $10/ngày test. 7 ngày sau scale.</p>
      </div>
    </div>

    <h3 className="text-2xl font-bold text-gray-900 mt-10 border-b pb-2">4. 5 lỗi khiến YouTube Ads đốt tiền mà không ra khách</h3>

    <div className="overflow-x-auto my-6">
      <table className="min-w-full bg-white border border-gray-200 text-sm rounded-lg overflow-hidden shadow-sm">
        <thead className="bg-red-700 text-white">
          <tr>
            <th className="py-3 px-4 text-left font-bold">Lỗi</th>
            <th className="py-3 px-4 text-left font-bold">Hậu quả</th>
            <th className="py-3 px-4 text-left font-bold">Sửa ngay</th>
          </tr>
        </thead>
        <tbody className="divide-y divide-gray-200">
          {[
            { loi: '1. Chạy cả nước Mỹ', hq: '$100 hết 1h, toàn view Ấn Độ, 0 khách', sua: 'Vị trí: Bán kính 5 miles 77084' },
            { loi: '2. Video 2 phút, không hook', hq: 'View Rate 8%. CPV $0.25', sua: 'Cắt còn 30s. 3s đầu phải có Giá hoặc Trước/Sau' },
            { loi: '3. Không sub, không tiếng', hq: '80% xem tắt tiếng = Không hiểu gì', sua: 'Bắt buộc sub to. Dùng CapCut auto-cap' },
            { loi: '4. Dùng Non-skip cho video dở', hq: 'CPM $15, khách ghét brand vì ép xem', sua: 'Non-skip chỉ khi video 15s, test với bạn bè 10 người khen mới chạy' },
            { loi: '5. Không loại trừ trẻ em', hq: '50% view từ Youtube Kids', sua: 'Loại trừ: Vị trí → Nội dung → Nhãn DL-G, DL-PG + Chủ đề Family, Games' },
          ].map((r, i) => (
            <tr key={i} className={i % 2 === 0 ? 'bg-red-50/20' : ''}>
              <td className="py-3 px-4 font-bold text-red-800">{r.loi}</td>
              <td className="py-3 px-4 text-slate-600 text-xs">{r.hq}</td>
              <td className="py-3 px-4 text-emerald-700 text-xs font-medium">{r.sua}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>

    <h3 className="text-2xl font-bold text-gray-900 mt-10 border-b pb-2">5. Đo hiệu quả YouTube – Đừng nhìn Click</h3>

    <div className="overflow-x-auto my-6">
      <table className="min-w-full bg-white border border-gray-200 text-sm rounded-lg overflow-hidden shadow-sm">
        <thead className="bg-slate-800 text-white">
          <tr>
            <th className="py-3 px-4 text-left font-bold">Chỉ số</th>
            <th className="py-3 px-4 text-left font-bold">Tốt</th>
            <th className="py-3 px-4 text-left font-bold">Ý nghĩa</th>
          </tr>
        </thead>
        <tbody className="divide-y divide-gray-200">
          {[
            { chi: '1. View Rate', tot: '>30%', y: 'Video hấp dẫn. <15% = Hook dở' },
            { chi: '2. CPV', tot: '<$0.06', y: 'Rẻ. >$0.12 = Target sai hoặc video chán' },
            { chi: '3. Lượt xem 30s', tot: '>40%', y: 'Khách xem hết = Nhớ brand' },
            { chi: '4. View-through Conv', tot: 'Có 20-30% tổng conv', y: 'Khách xem, không click, 7 ngày sau search' },
            { chi: '5. Search Lift', tot: '+15-30%', y: 'Sau khi chạy YT 30 ngày, lượt search "tên tiệm" tăng' },
          ].map((r, i) => (
            <tr key={i} className={i % 2 === 0 ? 'bg-slate-50' : ''}>
              <td className="py-3 px-4 font-bold text-slate-700">{r.chi}</td>
              <td className="py-3 px-4 font-bold text-emerald-700">{r.tot}</td>
              <td className="py-3 px-4 text-slate-600 text-sm">{r.y}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>

    <div className="bg-blue-50 border border-blue-200 rounded-xl p-4 my-4 text-sm">
      <p className="font-bold text-blue-800 mb-1">📊 Cách xem</p>
      <p className="text-blue-900 mb-0">Cột → Chuyển đổi → Thêm "Chuyển đổi lượt xem hết" + "Lượt chuyển đổi hỗ trợ".</p>
    </div>

    <div className="bg-amber-50 border-l-4 border-amber-400 p-5 rounded-r-xl my-6">
      <p className="font-bold text-amber-800 mb-2">🏆 Chốt Bài 35: YouTube = Biển quảng cáo có tiếng + hình, giá $0.05/view.</p>
      <p className="text-amber-900 text-sm mb-2"><strong>Công thức cho tiệm nail:</strong></p>
      <ol className="text-amber-900 text-sm space-y-1 mb-2">
        <li><strong>Bumper 6s:</strong> $5/ngày phủ tên 5 miles.</li>
        <li><strong>In-stream Skip 30s:</strong> $10/ngày remarketing.</li>
        <li><strong>In-feed:</strong> $5/ngày cướp khách đang xem "nail tutorial".</li>
      </ol>
      <p className="text-amber-900 text-sm mb-2">Tổng $20/ngày = 4000 người địa phương thấy tiệm bạn/tháng. Sau 60 ngày, Search CTR tăng 25% vì "quen mặt".</p>
      <p className="text-amber-900 text-sm font-bold mb-0">Quy tắc 3-30-5: 3s đầu giữ chân, 30s kể chuyện, 5 miles target.</p>
    </div>

    <div className="bg-slate-100 border border-slate-300 rounded-xl p-4 my-4 text-sm">
      <p className="font-bold text-slate-700 mb-1">📝 Bài tập</p>
      <p className="text-slate-700 mb-0">Quay 1 video 15s bằng iPhone: 3s hook <code>Móng Lifting?</code>, 10s quay tiệm + móng đẹp, 2s CTA <code>77084 Book Now</code>. Up Youtube Unlisted. Comment link mình check hook 3s đầu.</p>
    </div>
  </div>
);

// ─── Lesson 36 ────────────────────────────────────────────────────────────────
export const Lesson36Content: React.FC = () => (
  <div className="prose prose-blue max-w-none text-gray-800">
    <div className="bg-red-50 border-l-4 border-red-500 p-4 mb-6 rounded-r-lg">
      <p className="m-0 text-sm text-red-800 font-medium">
        🎯 <strong>Target sai = $100 ra 20.000 view Ấn Độ, 0 khách.</strong> Target đúng = $20 ra 300 view 77084, 5 booking.
      </p>
    </div>

    <div className="bg-blue-50 border border-blue-200 rounded-xl p-4 my-4 text-sm">
      <p className="font-bold text-blue-800 mb-1">💡 Tư duy</p>
      <p className="text-blue-900 mb-0">YouTube không có "ý định mua" mạnh như Search. Nên target = "Bắt đúng người, đúng lúc, đúng chỗ". Tiệm nail chỉ cần 20.000 người bán kính 5 miles, không cần 2 tỷ user YouTube.</p>
    </div>

    <h3 className="text-2xl font-bold text-gray-900 border-b pb-2">1. 5 cách Target YouTube – Xếp hạng từ Lời nhất đến Rác nhất cho local</h3>

    <div className="overflow-x-auto my-6">
      <table className="min-w-full bg-white border border-gray-200 text-sm rounded-lg overflow-hidden shadow-sm">
        <thead className="bg-slate-800 text-white">
          <tr>
            <th className="py-3 px-4 text-left font-bold">#</th>
            <th className="py-3 px-4 text-left font-bold">Loại Target</th>
            <th className="py-3 px-4 text-left font-bold">Độ nóng</th>
            <th className="py-3 px-4 text-left font-bold">Cách Google tìm</th>
            <th className="py-3 px-4 text-left font-bold">Dùng cho tiệm nail</th>
            <th className="py-3 px-4 text-left font-bold">Ngân sách tối thiểu</th>
          </tr>
        </thead>
        <tbody className="divide-y divide-gray-200">
          {[
            { n: '1', type: 'Remarketing', heat: '100°C', how: 'Đã vào web/YT bạn', use: 'Bắt buộc', budget: '$5/ngày', bg: 'bg-emerald-50' },
            { n: '2', type: 'Custom Intent/Segment', heat: '85°C', how: 'Người search từ khóa bạn chọn 7-30 ngày qua', use: 'Vũ khí #1 kiếm khách mới', budget: '$10/ngày', bg: '' },
            { n: '3', type: 'Từ khóa – Keywords', heat: '70°C', how: 'Video có từ khóa trong tiêu đề/mô tả', use: 'Dùng hẹp, kèm 5 miles', budget: '$5/ngày', bg: 'bg-blue-50' },
            { n: '4', type: 'Chủ đề – Topics', heat: '40°C', how: 'Video thuộc chủ đề "Làm đẹp"', use: 'Không dùng. Quá rộng', budget: '$0', bg: 'bg-red-50' },
            { n: '5', type: 'Vị trí đặt – Placements', heat: '30°C', how: 'Chọn kênh/video cụ thể', use: 'Chỉ dùng để loại trừ hoặc target kênh local', budget: '$5/ngày', bg: '' },
          ].map((r) => (
            <tr key={r.n} className={r.bg}>
              <td className="py-3 px-4 font-bold text-slate-700">{r.n}</td>
              <td className="py-3 px-4 font-bold text-blue-800">{r.type}</td>
              <td className="py-3 px-4 font-bold text-orange-700">{r.heat}</td>
              <td className="py-3 px-4 text-slate-600 text-xs">{r.how}</td>
              <td className="py-3 px-4 text-sm font-medium text-slate-700">{r.use}</td>
              <td className="py-3 px-4 font-mono font-bold text-emerald-700">{r.budget}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>

    <div className="bg-slate-800 text-white p-4 rounded-xl my-4 text-sm">
      📐 <strong>Quy tắc:</strong> Ngân sách &lt;$50/ngày thì chỉ chạy <span className="text-emerald-400">1+2+3</span>. Chạy 4+5 là đốt tiền.
    </div>

    <h3 className="text-2xl font-bold text-gray-900 mt-10 border-b pb-2">2. Custom Intent/Custom Segment – Trùm cuối kiếm khách mới</h3>

    <p className="text-sm text-slate-700"><strong>Custom Intent = Bạn bảo Google: Khách tôi là người vừa search mấy từ này.</strong> Google theo dõi 30 ngày qua.</p>
    <p className="text-sm text-slate-700"><strong>Cách tạo:</strong> Công cụ → Thư viện chia sẻ → Trình quản lý đối tượng → +Phân khúc tùy chỉnh</p>

    <p className="text-sm font-bold text-slate-700 mt-4 mb-2">Công thức Custom Segment "Nail Intent 77084" cho tiệm nail:</p>

    <div className="overflow-x-auto my-6">
      <table className="min-w-full bg-white border border-gray-200 text-sm rounded-lg overflow-hidden shadow-sm">
        <thead className="bg-emerald-700 text-white">
          <tr>
            <th className="py-3 px-4 text-left font-bold">Nhập gì</th>
            <th className="py-3 px-4 text-left font-bold">Ví dụ cụ thể</th>
            <th className="py-3 px-4 text-left font-bold">Google hiểu sao</th>
          </tr>
        </thead>
        <tbody className="divide-y divide-gray-200">
          <tr>
            <td className="py-3 px-4 font-bold text-slate-700">1. Từ khóa người đó đã search</td>
            <td className="py-3 px-4 font-mono text-xs text-slate-600">
              acrylic nails near me<br/>
              gel x nail salon<br/>
              best nail salon 77084<br/>
              nail salon walk ins<br/>
              how much are acrylic nails
            </td>
            <td className="py-3 px-4 text-sm text-slate-700">Ai search 5 từ này 30 ngày qua, giờ xem Youtube → Hiện ads bạn</td>
          </tr>
          <tr className="bg-slate-50">
            <td className="py-3 px-4 font-bold text-slate-700">2. URL họ đã truy cập</td>
            <td className="py-3 px-4 font-mono text-xs text-slate-600">
              booksy.com<br/>
              yelp.com/biz/luxury-nails<br/>
              regalnails.com<br/>
              vagaro.com
            </td>
            <td className="py-3 px-4 text-sm text-slate-700">Ai vào web đối thủ, app đặt lịch → Đuổi theo</td>
          </tr>
          <tr>
            <td className="py-3 px-4 font-bold text-slate-700">3. App họ dùng</td>
            <td className="py-3 px-4 font-mono text-xs text-slate-600">Instagram, Pinterest, Booksy</td>
            <td className="py-3 px-4 text-sm text-slate-700">Ai hay dùng app làm đẹp → Có tiền làm nail</td>
          </tr>
        </tbody>
      </table>
    </div>

    <div className="bg-emerald-50 border border-emerald-200 rounded-xl p-4 my-4 text-sm">
      <p className="font-bold text-emerald-800 mb-1">📌 Setup Campaign</p>
      <p className="text-emerald-900 mb-1">Nhóm quảng cáo → Đối tượng → Phân khúc tùy chỉnh → Chọn "Nail Intent 77084"</p>
      <p className="text-emerald-900 mb-1"><strong>Địa lý:</strong> Bắt buộc <strong>77084 + bán kính 5 miles</strong>. Không có là toang.</p>
      <p className="text-emerald-900 mb-0"><strong>Kết quả:</strong> CPV $0.04-$0.07. 1000 view = $40-$70. Ra 2-4 booking = CPA $10-$35. Rẻ hơn Search.</p>
    </div>

    <h3 className="text-2xl font-bold text-gray-900 mt-10 border-b pb-2">3. Từ khóa – Keywords YouTube: Khác Search, dùng sai là nát</h3>

    <p className="text-sm text-slate-700"><strong>Khác biệt:</strong> Từ khóa Search = Khách gõ. Từ khóa YouTube = Video có chứa từ đó.</p>
    <p className="text-sm font-bold text-slate-700 mt-2 mb-2">Cách dùng đúng cho nail local:</p>

    <div className="overflow-x-auto my-4">
      <table className="min-w-full bg-white border border-gray-200 text-sm rounded-lg overflow-hidden shadow-sm">
        <thead className="bg-slate-800 text-white">
          <tr>
            <th className="py-3 px-4 text-left font-bold">Làm đúng</th>
            <th className="py-3 px-4 text-left font-bold">Làm sai</th>
            <th className="py-3 px-4 text-left font-bold">Lý do</th>
          </tr>
        </thead>
        <tbody className="divide-y divide-gray-200">
          {[
            { right: '1. Dùng 5-10 từ khóa + Địa lý 5 miles', wrong: 'Dùng 1 từ "nails" chạy cả nước', why: '"nails" = 5 tỷ view, 99% không phải khách bạn' },
            { right: '2. Từ khóa dài + ý định: "acrylic nails tutorial", "gel x nail process", "nail salon vlog"', wrong: 'Từ khóa 1 chữ ngắn', why: 'Khách xem tutorial = sắp làm thật' },
            { right: '3. Kết hợp Phủ định: Phủ định "diy", "kids", "tutorial for kids", "roblox"', wrong: 'Không phủ định', why: 'Tránh view trẻ em' },
            { right: '4. Đặt "Đối tượng" + "Nội dung": Từ khóa + Bán kính 5 miles', wrong: 'Chỉ target từ khóa, không địa lý', why: 'Chỉ hiện khi video có từ khóa VÀ người xem ở 77084' },
          ].map((r, i) => (
            <tr key={i} className={i % 2 === 0 ? 'bg-slate-50' : ''}>
              <td className="py-3 px-4 text-emerald-700 font-medium text-xs">{r.right}</td>
              <td className="py-3 px-4 text-red-600 text-xs">{r.wrong}</td>
              <td className="py-3 px-4 text-slate-600 text-xs">{r.why}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>

    <div className="bg-blue-50 border border-blue-200 rounded-xl p-4 my-4 text-sm">
      <p className="font-bold text-blue-800 mb-1">🔑 Bộ từ khóa win cho tiệm nail</p>
      <p className="text-blue-900 font-mono text-xs mb-1">acrylic nails, gel x nails, nail art design, pedicure spa, nail salon tour, dip powder nails</p>
      <p className="text-blue-900 mb-0">→ 6 từ này + 5 miles = Đủ 10.000 view/tháng.</p>
    </div>

    <h3 className="text-2xl font-bold text-gray-900 mt-10 border-b pb-2">4. Chủ đề – Topics: Bẫy đốt tiền số 1</h3>

    <p className="text-sm text-slate-700">Topics = "Làm đẹp &amp; Thể hình", "Thời trang", "Sức khỏe". 1 Topic = 100 triệu video. Bạn ở 77084 cần 5000 người.</p>
    <p className="text-sm text-slate-700"><strong>Khi nào dùng:</strong> Ngân sách &gt;$500/ngày + Chạy brand toàn quốc.</p>
    <div className="bg-red-50 border border-red-200 rounded-xl p-4 my-3 text-sm">
      <p className="font-bold text-red-800 mb-1">🚫 Tiệm nail local: Cấm dùng.</p>
      <p className="text-red-700 mb-0">Bật là CPM $12, toàn view không liên quan. Nếu lỡ bật: Vào Nhóm quảng cáo → Nội dung → Chủ đề → Xóa hết.</p>
    </div>

    <h3 className="text-2xl font-bold text-gray-900 mt-10 border-b pb-2">5. Vị trí đặt – Placements: Dùng để chặn rác + cướp khách kênh đối thủ</h3>

    <p className="text-sm font-bold text-slate-700 mb-3">2 cách dùng đúng duy nhất:</p>

    <div className="border border-red-200 rounded-xl p-4 my-3 bg-red-50/30">
      <h4 className="font-bold text-red-800 mb-2">Cách 1: Loại trừ rác – Bắt buộc làm ngày 1</h4>
      <p className="text-sm text-slate-700 mb-2">Sau 3 ngày chạy, vào Vị trí → Nơi quảng cáo hiển thị → Sort CPV cao. Loại trừ hết:</p>
      <ol className="text-sm text-slate-700 space-y-1 mb-2">
        <li><code>youtube.com/channel/UC_kids</code> – Kênh trẻ em</li>
        <li><code>mobileapp::2</code> – Game</li>
        <li><code>anonymous.google</code> – Web rác</li>
      </ol>
      <p className="text-sm font-bold text-emerald-700 mb-0">Tiết kiệm 50% ngân sách.</p>
    </div>

    <div className="border border-blue-200 rounded-xl p-4 my-3 bg-blue-50/30">
      <h4 className="font-bold text-blue-800 mb-2">Cách 2: Target kênh local/Hot</h4>
      <p className="text-sm text-slate-700 mb-2">Tìm 5 kênh Youtube nail lớn + 3 kênh vlog Dallas.</p>
      <p className="text-sm text-slate-700 mb-2">VD: <code>Nail Career Education</code>, <code>LongHairPrettyNails</code>, <code>Dallas Vloggers</code></p>
      <p className="text-sm text-slate-700 mb-2">Vị trí đặt → Nhập URL kênh → Chỉ hiện trên kênh đó. CPV đắt hơn 20% nhưng view chất.</p>
      <p className="text-sm text-slate-700 mb-0"><strong>Check kênh trước khi target:</strong> Vào kênh → Xem video mới nhất 10k view là thật, không phải bot.</p>
    </div>

    <h3 className="text-2xl font-bold text-gray-900 mt-10 border-b pb-2">6. Bảng setup Target chuẩn $20/ngày cho tiệm nail 77084</h3>

    <p className="text-sm font-bold text-slate-700">Campaign: YouTube – Local 77084 – In-stream Skip</p>

    <div className="overflow-x-auto my-6">
      <table className="min-w-full bg-white border border-gray-200 text-sm rounded-lg overflow-hidden shadow-sm">
        <thead className="bg-emerald-700 text-white">
          <tr>
            <th className="py-3 px-4 text-left font-bold">Nhóm quảng cáo</th>
            <th className="py-3 px-4 text-left font-bold">Target</th>
            <th className="py-3 px-4 text-left font-bold">Ngân sách</th>
            <th className="py-3 px-4 text-left font-bold">Bid</th>
            <th className="py-3 px-4 text-left font-bold">Video</th>
            <th className="py-3 px-4 text-left font-bold">KPI</th>
          </tr>
        </thead>
        <tbody className="divide-y divide-gray-200">
          <tr>
            <td className="py-3 px-4 font-bold text-emerald-800">1. Remarketing 30d</td>
            <td className="py-3 px-4 text-xs text-slate-600">All Visitors 30d + Viewed Price 14d</td>
            <td className="py-3 px-4 font-mono text-blue-700 font-bold">$10/ngày</td>
            <td className="py-3 px-4 text-xs">CPV max $0.08</td>
            <td className="py-3 px-4 text-xs font-mono">30s: Welcome Back – $10 Off</td>
            <td className="py-3 px-4 text-xs">View Rate &gt;40%<br/>CPV &lt;$0.05</td>
          </tr>
          <tr className="bg-slate-50">
            <td className="py-3 px-4 font-bold text-emerald-800">2. Custom Intent</td>
            <td className="py-3 px-4 text-xs text-slate-600">Custom Segment "Nail Intent 77084"</td>
            <td className="py-3 px-4 font-mono text-blue-700 font-bold">$10/ngày</td>
            <td className="py-3 px-4 text-xs">CPV max $0.10</td>
            <td className="py-3 px-4 text-xs font-mono">30s: New Client $5 Off + Free Design</td>
            <td className="py-3 px-4 text-xs">CTR &gt;0.8%<br/>CPA &lt;$30</td>
          </tr>
          <tr className="bg-blue-50">
            <td className="py-3 px-4 font-bold text-blue-700 text-xs" colSpan={6}>Địa lý chung: 77084 + 5 miles</td>
          </tr>
          <tr className="bg-red-50">
            <td className="py-3 px-4 font-bold text-red-700 text-xs" colSpan={6}>Loại trừ chung: Tuổi &lt;18, Nhãn DL-G, Game, Kids</td>
          </tr>
        </tbody>
      </table>
    </div>

    <div className="bg-emerald-50 border border-emerald-200 rounded-xl p-4 my-4 text-sm">
      <p className="font-bold text-emerald-800 mb-1">📊 Kết quả 30 ngày</p>
      <p className="text-emerald-900 mb-0">15.000 view local x $0.05 = $750. Ra 25 booking = CPA $30. Quan trọng: Search CTR tăng 20% nhờ khách nhớ mặt.</p>
    </div>

    <h3 className="text-2xl font-bold text-gray-900 mt-10 border-b pb-2">7. 5 sai lầm Target YouTube khiến $200 bay/tuần</h3>

    <div className="overflow-x-auto my-6">
      <table className="min-w-full bg-white border border-gray-200 text-sm rounded-lg overflow-hidden shadow-sm">
        <thead className="bg-red-700 text-white">
          <tr>
            <th className="py-3 px-4 text-left font-bold">Lỗi</th>
            <th className="py-3 px-4 text-left font-bold">Dấu hiệu</th>
            <th className="py-3 px-4 text-left font-bold">Hậu quả</th>
            <th className="py-3 px-4 text-left font-bold">Sửa 5 phút</th>
          </tr>
        </thead>
        <tbody className="divide-y divide-gray-200">
          {[
            { loi: '1. Không set Địa lý', dh: '80% view từ VN, Ấn Độ', hq: '$100 = 0 khách', sua: 'Vị trí → 77084 + 5 miles. Chọn "Hiện diện"' },
            { loi: '2. Dùng Chủ đề "Làm đẹp"', dh: 'CPM $15, View Rate 10%', hq: 'Đắt x3, view rác', sua: 'Xóa Topics. Dùng Custom Intent' },
            { loi: '3. Không phủ định Kids', dh: 'Vị trí đặt toàn Cocomelon, Baby Shark', hq: 'CPV rẻ $0.01 nhưng 0 booking', sua: 'Loại trừ Nhãn nội dung DL-G + Chủ đề Family' },
            { loi: '4. 1 từ khóa "nails"', dh: 'Hiện video đóng đinh, làm móng nhà', hq: 'CTR 0.1%', sua: 'Dùng "acrylic nails tutorial", "nail salon"' },
            { loi: '5. Target "Đối tượng" VÀ "Nội dung"', dh: 'Impression = 0', hq: 'Google yêu cầu thỏa cả 2', sua: 'Chọn 1 thôi. Local thì ưu tiên "Đối tượng" + Địa lý' },
          ].map((r, i) => (
            <tr key={i} className={i % 2 === 0 ? 'bg-red-50/20' : ''}>
              <td className="py-3 px-4 font-bold text-red-800 text-xs">{r.loi}</td>
              <td className="py-3 px-4 text-slate-600 text-xs">{r.dh}</td>
              <td className="py-3 px-4 text-red-600 text-xs font-medium">{r.hq}</td>
              <td className="py-3 px-4 text-emerald-700 text-xs font-medium">{r.sua}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>

    <InteractiveChecklist
      id="chk36"
      title="Checklist target trước khi bấm chạy"
      tasks={[
        'Địa lý: 77084 + 5 miles. Chọn "Hiện diện hoặc quan tâm" → "Hiện diện" thôi',
        'Nhân khẩu: Nữ 18-55, Thu nhập Hộ gia đình top 50%',
        'Đối tượng: Remarketing + 1 Custom Segment. Không dùng Affinity, In-market',
        'Nội dung: Nếu dùng Từ khóa thì <10 từ, dài. Nếu không thì bỏ trống',
        'Loại trừ: Nhãn DL-G, DL-PG, Game, Kids, Music cho trẻ em',
        'Thiết bị: Mobile + Máy tính. Loại trừ TV nếu video chưa tối ưu TV',
        'Tần suất: Giới hạn 4 lần hiển thị/tuần/người. Không spam',
      ]}
    />

    <div className="bg-amber-50 border-l-4 border-amber-400 p-5 rounded-r-xl my-6">
      <p className="font-bold text-amber-800 mb-2">🏆 Chốt Bài 36: YouTube cho local = Địa lý 5 miles + Custom Intent + Remarketing. Ba cái này ra tiền. Còn lại đốt tiền.</p>
      <p className="text-amber-900 text-sm mb-2"><strong>Công thức:</strong> <code>5 miles + 10 từ khóa ý định + Loại trừ Kids = CPV $0.05, CPA $25</code>.</p>
      <p className="text-amber-900 text-sm mb-0"><strong>Mẹo cuối:</strong> Vào Analytics → Thời gian thực → Xem người đang xem video bạn ở đâu. Nếu thấy Hà Nội, Mumbai → Sai địa lý, tắt gấp.</p>
    </div>

    <div className="bg-slate-100 border border-slate-300 rounded-xl p-4 my-4 text-sm">
      <p className="font-bold text-slate-700 mb-1">📝 Bài tập</p>
      <p className="text-slate-700 mb-0">Tạo 1 Custom Segment tên "Nail 77084" gồm 5 từ: <code>acrylic nails near me</code>, <code>gel x salon</code>, <code>nail salon 77084</code>, <code>best pedicure</code>, <code>walk in nail salon</code> + 2 URL đối thủ gần bạn. Chụp màn hình "Quy mô ước tính". &gt;5000 là chạy được.</p>
    </div>
  </div>
);

// ─── Lesson 37 ────────────────────────────────────────────────────────────────
export const Lesson37Content: React.FC = () => (
  <div className="prose prose-blue max-w-none text-gray-800">
    <div className="bg-red-50 border-l-4 border-red-500 p-4 mb-6 rounded-r-lg">
      <p className="m-0 text-sm text-red-800 font-medium">
        ⏱ <strong>Sự thật YouTube:</strong> Khách skip sau 5s. View Rate &lt;20% = Đốt tiền. Mục tiêu: 5s đầu giữ chân &gt;70% người xem. 30s cuối 40% xem hết → CPA $15.
      </p>
    </div>

    <div className="bg-blue-50 border border-blue-200 rounded-xl p-4 my-4 text-sm">
      <p className="font-bold text-blue-800 mb-1">📐 Công thức 5-20-5</p>
      <p className="text-blue-900 mb-0">5s Hook + 20s Nội dung + 5s CTA. Áp dụng cho 15s, 30s, 60s.</p>
    </div>

    <h3 className="text-2xl font-bold text-gray-900 border-b pb-2">1. 5s đầu = Sinh tử. 4 kiểu Hook giữ chân 80% khách tiệm nail</h3>

    <div className="overflow-x-auto my-6">
      <table className="min-w-full bg-white border border-gray-200 text-sm rounded-lg overflow-hidden shadow-sm">
        <thead className="bg-slate-800 text-white">
          <tr>
            <th className="py-3 px-4 text-left font-bold">Kiểu Hook</th>
            <th className="py-3 px-4 text-left font-bold">Ví dụ kịch bản 5s đầu</th>
            <th className="py-3 px-4 text-left font-bold">Vì sao giữ chân</th>
            <th className="py-3 px-4 text-left font-bold">Khi nào dùng</th>
          </tr>
        </thead>
        <tbody className="divide-y divide-gray-200">
          {[
            {
              hook: '1. Problem – Nỗi đau',
              ex: 'Cận cảnh: Móng lifting, gãy. Text to: "LIFTING SAU 1 TUẦN?" + Âm thanh "crack"',
              why: 'Khách thấy mình trong đó. Não dừng lại',
              when: 'Remarketing, khách từng làm nail',
              bg: '',
            },
            {
              hook: '2. Before/After sốc',
              ex: 'Trái: Móng cũ ố vàng. Phải: Móng Gel X bóng loáng. Text: "0 → 10 ĐIỂM SAU 45P"',
              why: 'Não thích biến đổi. Dừng để xem "làm kiểu gì"',
              when: 'Custom Intent, khách mới',
              bg: 'bg-slate-50',
            },
            {
              hook: '3. Giá + Địa phương',
              ex: 'Chữ cực to giữa màn hình: "ACRYLIC $45" | "77084" | "TODAY ONLY"',
              why: 'Đánh vào túi tiền + gần nhà = Lý do xem tiếp',
              when: 'In-feed, Bumper 6s',
              bg: '',
            },
            {
              hook: '4. Sai lầm + Cảnh báo',
              ex: 'Thợ nói thẳng camera: "Đừng làm nail nếu tiệm không có 3 thứ này..."',
              why: 'Gây tò mò, sợ bỏ lỡ',
              when: 'In-stream Skip, khách lạnh',
              bg: 'bg-slate-50',
            },
          ].map((r, i) => (
            <tr key={i} className={r.bg}>
              <td className="py-3 px-4 font-bold text-blue-800 text-xs">{r.hook}</td>
              <td className="py-3 px-4 text-slate-700 text-xs">{r.ex}</td>
              <td className="py-3 px-4 text-emerald-700 text-xs">{r.why}</td>
              <td className="py-3 px-4 text-slate-600 text-xs">{r.when}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>

    <div className="bg-amber-50 border border-amber-200 rounded-xl p-4 my-4 text-sm">
      <p className="font-bold text-amber-800 mb-2">⚡ Quy tắc 5s:</p>
      <ol className="text-amber-900 space-y-1 mb-0">
        <li><strong>Hình động trước, mặt người sau.</strong> Móng gãy &gt; Mặt chủ tiệm</li>
        <li><strong>Chữ to, 3-5 từ.</strong> "NO LIFTING 3 WEEKS" chứ không "Our premium acrylic service guarantees..."</li>
        <li><strong>Có tiếng động.</strong> "Tách", "Cạch", nhạc giật. 85% xem không tiếng nhưng 15% bật tiếng thì phải dính</li>
        <li><strong>Không logo, không intro.</strong> Logo để 25s sau. 5s đầu chỉ có Hook</li>
      </ol>
    </div>

    <h3 className="text-2xl font-bold text-gray-900 mt-10 border-b pb-2">2. Khung kịch bản 15s – 30s cho tiệm nail, copy là dùng</h3>

    <h4 className="font-bold text-slate-700 mt-6 mb-3">Mẫu 1: Video 15s In-stream Non-skip – Ép xem hết</h4>
    <div className="overflow-x-auto my-4">
      <table className="min-w-full bg-white border border-gray-200 text-sm rounded-lg overflow-hidden shadow-sm">
        <thead className="bg-red-700 text-white">
          <tr>
            <th className="py-3 px-4 text-left font-bold">Giây</th>
            <th className="py-3 px-4 text-left font-bold">Hình</th>
            <th className="py-3 px-4 text-left font-bold">Text on-screen</th>
            <th className="py-3 px-4 text-left font-bold">Voice/Sub</th>
            <th className="py-3 px-4 text-left font-bold">Mục đích</th>
          </tr>
        </thead>
        <tbody className="divide-y divide-gray-200">
          <tr>
            <td className="py-3 px-4 font-bold text-red-700">0-3s</td>
            <td className="py-3 px-4 text-xs text-slate-600">Cận cảnh móng lifting bung ra</td>
            <td className="py-3 px-4 font-mono text-xs">LIFTING NHU NAY?</td>
            <td className="py-3 px-4 text-xs">SFX: Tách</td>
            <td className="py-3 px-4 font-bold text-red-700 text-xs">Hook Problem</td>
          </tr>
          <tr className="bg-slate-50">
            <td className="py-3 px-4 font-bold text-blue-700">3-10s</td>
            <td className="py-3 px-4 text-xs text-slate-600">Montage 3 cảnh: Khử trùng 3 bước → Thợ 10 năm → Móng sau làm bóng</td>
            <td className="py-3 px-4 font-mono text-xs">3-Step Sterilized<br/>10+ Yr Techs<br/>4.9★ 1200 Reviews</td>
            <td className="py-3 px-4 text-xs">Tiệm duy nhất 77084 khử trùng 3 bước</td>
            <td className="py-3 px-4 font-bold text-blue-700 text-xs">Solve + Trust</td>
          </tr>
          <tr>
            <td className="py-3 px-4 font-bold text-emerald-700">10-15s</td>
            <td className="py-3 px-4 text-xs text-slate-600">Mặt tiền tiệm + Map 77084 + Giá</td>
            <td className="py-3 px-4 font-mono text-xs">Acrylic $45<br/>Walk-ins Welcome<br/>Book Now ↓</td>
            <td className="py-3 px-4 text-xs">Luxury Nails 77084. Bấm đặt lịch ngay.</td>
            <td className="py-3 px-4 font-bold text-emerald-700 text-xs">CTA + Địa phương</td>
          </tr>
        </tbody>
      </table>
    </div>

    <h4 className="font-bold text-slate-700 mt-6 mb-3">Mẫu 2: Video 30s In-stream Skip – Kể chuyện</h4>
    <div className="overflow-x-auto my-4">
      <table className="min-w-full bg-white border border-gray-200 text-sm rounded-lg overflow-hidden shadow-sm">
        <thead className="bg-blue-700 text-white">
          <tr>
            <th className="py-3 px-4 text-left font-bold">Giây</th>
            <th className="py-3 px-4 text-left font-bold">Hình</th>
            <th className="py-3 px-4 text-left font-bold">Text/Sub</th>
            <th className="py-3 px-4 text-left font-bold">Mục đích</th>
          </tr>
        </thead>
        <tbody className="divide-y divide-gray-200">
          {[
            { sec: '0-5s', img: 'Khách nữ nhăn mặt nhìn móng gãy', text: 'Ban ton $60 nhung 1 tuan da hu?', purpose: 'Hook Problem', bg: '' },
            { sec: '5-10s', img: 'Quay ghế spa, đèn, tiệm sạch', text: 'Tiem nail khong phai cho nao cung giong nhau', purpose: 'Giáo dục', bg: 'bg-slate-50' },
            { sec: '10-20s', img: 'Thợ đang dũa, cận cảnh sản phẩm xịn, bằng khử trùng', text: 'Dung cu khu trung y te / Tho 10+ nam kinh nghiem / Bao hanh 7 ngay no lifting', purpose: 'USP – Khác biệt', bg: '' },
            { sec: '20-25s', img: 'Before/After 2 bộ móng', text: 'Tu gay → Dep 3 tuan', purpose: 'Proof', bg: 'bg-slate-50' },
            { sec: '25-30s', img: 'Logo + Map + SĐT + QR', text: 'New Client $5 Off / Luxury Nails 77084 / Book duoi mo ta', purpose: 'CTA', bg: '' },
          ].map((r) => (
            <tr key={r.sec} className={r.bg}>
              <td className="py-3 px-4 font-bold text-blue-700">{r.sec}</td>
              <td className="py-3 px-4 text-xs text-slate-600">{r.img}</td>
              <td className="py-3 px-4 font-mono text-xs text-slate-700">{r.text}</td>
              <td className="py-3 px-4 font-bold text-emerald-700 text-xs">{r.purpose}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>

    <h3 className="text-2xl font-bold text-gray-900 mt-10 border-b pb-2">3. CTA 5s cuối – Nói gì để khách bấm ngay, không quên</h3>

    <div className="bg-red-50 border border-red-200 rounded-xl p-3 my-3 text-sm">
      <p className="font-bold text-red-700 mb-0">❌ Lỗi: Cuối video để "Cảm ơn đã xem". = 0 booking.</p>
    </div>

    <div className="bg-blue-50 border border-blue-200 rounded-xl p-3 my-3 text-sm">
      <p className="font-bold text-blue-800 mb-0">✅ Công thức CTA: <code>Ưu đãi + Khan hiếm + Hành động + Ở đâu</code></p>
    </div>

    <div className="overflow-x-auto my-6">
      <table className="min-w-full bg-white border border-gray-200 text-sm rounded-lg overflow-hidden shadow-sm">
        <thead className="bg-slate-800 text-white">
          <tr>
            <th className="py-3 px-4 text-left font-bold">CTA dở</th>
            <th className="py-3 px-4 text-left font-bold">CTA win</th>
            <th className="py-3 px-4 text-left font-bold">Lý do win</th>
          </tr>
        </thead>
        <tbody className="divide-y divide-gray-200">
          {[
            { boi: 'Hay ghe tiem chung toi', win: 'New Client $5 Off. 77084. 3 slot hom nay. Bam Book duoi video', why: 'Có số, có địa chỉ, có khan hiếm, có chỗ bấm' },
            { boi: 'Call now', win: 'Goi (281) xxx-xxxx. Doc code YOUTUBE5 giam $5', why: 'Đo được từ YouTube. Khách có lý do gọi' },
            { boi: 'Link in bio', win: 'Link dat lich duoi mo ta. Walk-ins welcome truoc 3pm', why: 'Chỉ rõ chỗ bấm + thêm option walk-in' },
          ].map((r, i) => (
            <tr key={i} className={i % 2 === 0 ? 'bg-slate-50' : ''}>
              <td className="py-3 px-4 text-red-600 text-xs">{r.boi}</td>
              <td className="py-3 px-4 text-emerald-700 font-bold text-xs">{r.win}</td>
              <td className="py-3 px-4 text-slate-600 text-xs">{r.why}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>

    <div className="bg-blue-50 border border-blue-200 rounded-xl p-4 my-4 text-sm">
      <p className="font-bold text-blue-800 mb-2">📌 3 chỗ đặt CTA trong video:</p>
      <ol className="text-blue-900 space-y-1 mb-0">
        <li><strong>Lời nói:</strong> 25-30s nói to rõ</li>
        <li><strong>Text on-screen:</strong> Chữ to cuối video</li>
        <li><strong>End Screen:</strong> YouTube cho gắn nút "Đặt lịch" 5s cuối. Bắt buộc dùng</li>
      </ol>
    </div>

    <h3 className="text-2xl font-bold text-gray-900 mt-10 border-b pb-2">4. 5 lỗi video khiến View Rate &lt;15%, CPV $0.25</h3>

    <div className="overflow-x-auto my-6">
      <table className="min-w-full bg-white border border-gray-200 text-sm rounded-lg overflow-hidden shadow-sm">
        <thead className="bg-red-700 text-white">
          <tr>
            <th className="py-3 px-4 text-left font-bold">Lỗi</th>
            <th className="py-3 px-4 text-left font-bold">Ví dụ sai</th>
            <th className="py-3 px-4 text-left font-bold">View Rate</th>
            <th className="py-3 px-4 text-left font-bold">Sửa 30 phút</th>
          </tr>
        </thead>
        <tbody className="divide-y divide-gray-200">
          {[
            { loi: '1. 5s đầu có logo + nhạc nhẹ', sai: 'Mở video: Logo quay 3s + "Welcome to..."', vr: '8%', sua: 'Cắt bỏ. Vào thẳng móng gãy + "LIFTING?"' },
            { loi: '2. Không sub, nói tiếng Việt', sai: 'Thợ nói tiếng Việt không sub', vr: '12%', sua: 'Bắt buộc sub tiếng Anh to. 80% xem tắt tiếng' },
            { loi: '3. Quay tối, rung', sai: 'Quay bằng đt cũ, thiếu sáng', vr: '15%', sua: 'Quay ban ngày, gần cửa sổ. Bật 4K. Dùng gimbal $20' },
            { loi: '4. Nói 1 USP trong 30s', sai: '30s chỉ nói "Tiệm sạch"', vr: '18%', sua: '30s phải 3 USP: Sạch + Thợ 10 năm + Bảo hành' },
            { loi: '5. Không có mặt người', sai: '30s toàn ảnh móng', vr: '20%', sua: '3s đầu phải có mặt thợ/khách cười. Người tin người' },
          ].map((r, i) => (
            <tr key={i} className={i % 2 === 0 ? 'bg-red-50/20' : ''}>
              <td className="py-3 px-4 font-bold text-red-800 text-xs">{r.loi}</td>
              <td className="py-3 px-4 text-slate-600 text-xs">{r.sai}</td>
              <td className="py-3 px-4 font-bold text-red-600">{r.vr}</td>
              <td className="py-3 px-4 text-emerald-700 text-xs font-medium">{r.sua}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>

    <InteractiveChecklist
      id="chk37a"
      title="Checklist quay video YouTube Ads bằng iPhone – 1 giờ xong"
      tasks={[
        'Kịch bản 3 dòng: Hook 5s + Nội dung 20s + CTA 5s. Viết ra giấy',
        'Thiết bị: iPhone 11 trở lên, Lau cam, Bật 4K 30fps, Micro cài áo $15 nếu nói',
        'Ánh sáng: Quay 10am-2pm, mặt hướng cửa sổ. Bật hết đèn tiệm',
        'Cảnh quay: 1. Cận móng gãy. 2. Toàn cảnh tiệm. 3. Thợ làm. 4. Before/After. 5. Mặt tiền',
        'Edit CapCut: Cắt còn 15s/30s. Chèn text to 5s đầu. Thêm sub auto. Thêm nhạc không bản quyền',
        'Xuất: 1080x1920 cho Shorts, 1920x1080 cho Ngang. <100MB',
        'Up Youtube: Tiêu đề "Acrylic Nails 77084 | No Lifting 3 Weeks", Mô tả có SĐT + link book + Địa chỉ',
      ]}
    />

    <h3 className="text-2xl font-bold text-gray-900 mt-10 border-b pb-2">6. Test A/B 5s Hook – Cách biết hook nào thắng trong 48h</h3>

    <p className="text-sm text-slate-700 mb-3">Tạo 1 Campaign → 2 Ads trong 1 Nhóm:</p>
    <ol className="text-sm text-slate-700 space-y-1 mb-4">
      <li><strong>Ads A:</strong> Hook <code>LIFTING SAU 1 TUẦN?</code></li>
      <li><strong>Ads B:</strong> Hook <code>ACRYLIC $45 – 77084</code></li>
    </ol>
    <p className="text-sm text-slate-700 mb-3">Chạy $10/ngày. Sau 2 ngày xem <strong>View Rate</strong>.</p>
    <p className="text-sm text-slate-700">Ads A 45%, Ads B 22% → Tắt B, nhân bản A thành 3 video đổi 20s sau.</p>
    <div className="bg-amber-50 border border-amber-200 rounded-xl p-3 my-3 text-sm">
      <p className="font-bold text-amber-800 mb-0">Quy tắc: View Rate &gt;30% mới scale. &lt;20% vứt, làm video mới.</p>
    </div>

    <h3 className="text-2xl font-bold text-gray-900 mt-10 border-b pb-2">7. Bảng thông số chuẩn cho tiệm nail local</h3>

    <div className="overflow-x-auto my-6">
      <table className="min-w-full bg-white border border-gray-200 text-sm rounded-lg overflow-hidden shadow-sm">
        <thead className="bg-slate-800 text-white">
          <tr>
            <th className="py-3 px-4 text-left font-bold">Format</th>
            <th className="py-3 px-4 text-left font-bold">View Rate tốt</th>
            <th className="py-3 px-4 text-left font-bold">CPV tốt</th>
            <th className="py-3 px-4 text-left font-bold">CTR tốt</th>
            <th className="py-3 px-4 text-left font-bold">CPA tốt</th>
          </tr>
        </thead>
        <tbody className="divide-y divide-gray-200">
          {[
            { fmt: 'In-stream Skip', vr: '>35%', cpv: '<$0.06', ctr: '>0.8%', cpa: '<$25' },
            { fmt: 'Bumper 6s', vr: '>90% xem hết', cpv: 'CPM <$6', ctr: 'Không đo', cpa: 'View-through Conv' },
            { fmt: 'In-feed', vr: '>25%', cpv: '<$0.10', ctr: '>1.2%', cpa: '<$35' },
            { fmt: 'Shorts', vr: '>50% lướt 10s', cpv: '<$0.04', ctr: '>0.6%', cpa: '<$30' },
          ].map((r, i) => (
            <tr key={i} className={i % 2 === 0 ? 'bg-slate-50' : ''}>
              <td className="py-3 px-4 font-bold text-slate-700">{r.fmt}</td>
              <td className="py-3 px-4 font-bold text-emerald-700">{r.vr}</td>
              <td className="py-3 px-4 font-bold text-blue-700">{r.cpv}</td>
              <td className="py-3 px-4 text-slate-600">{r.ctr}</td>
              <td className="py-3 px-4 font-bold text-amber-700">{r.cpa}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>

    <p className="text-sm text-slate-600 italic">Nếu thấp hơn 50% số trên → Làm lại video, không phải do target.</p>

    <div className="bg-amber-50 border-l-4 border-amber-400 p-5 rounded-r-xl my-6">
      <p className="font-bold text-amber-800 mb-2">🏆 Chốt Bài 37: YouTube Ads = 5s đầu quyết định 80% thành bại.</p>
      <p className="text-amber-900 text-sm mb-2"><strong>Công thức:</strong> Nỗi đau 3s + Giải pháp 20s + Ưu đãi + Địa chỉ 5s.</p>
      <p className="text-amber-900 text-sm mb-0"><strong>Quy tắc:</strong> Không ai quan tâm tiệm bạn. Họ chỉ quan tâm móng họ. Nói về họ 25s, nói về bạn 5s cuối.</p>
    </div>

    <div className="bg-slate-100 border border-slate-300 rounded-xl p-4 my-4 text-sm">
      <p className="font-bold text-slate-700 mb-1">📝 Bài tập</p>
      <p className="text-slate-700 mb-0">Quay 1 video 15s bằng iPhone theo mẫu 15s mục 2. Up Youtube Unlisted. Comment link. Mình check 5s đầu giữ chân không, CTA rõ chưa.</p>
    </div>
  </div>
);

// ─── Lesson 38 ────────────────────────────────────────────────────────────────
export const Lesson38Content: React.FC = () => (
  <div className="prose prose-blue max-w-none text-gray-800">
    <div className="bg-red-50 border-l-4 border-red-500 p-4 mb-6 rounded-r-lg">
      <p className="m-0 text-sm text-red-800 font-medium">
        🔍 <strong>90% chủ tiệm tắt GDN/YouTube vì:</strong> "Chạy $300, report 2 booking, CPA $150. Lỗ". Sự thật: Có thêm 18 khách thấy banner/video, không click, 3 ngày sau search Google "Luxury Nails" và book. Report không hiện, nhưng tiền về túi bạn.
      </p>
    </div>

    <div className="bg-blue-50 border border-blue-200 rounded-xl p-4 my-4 text-sm">
      <p className="font-bold text-blue-800 mb-1">💡 Định nghĩa</p>
      <p className="text-blue-900 mb-1"><strong>View-through Conversion = Chuyển đổi lượt xem hết</strong> = Người thấy ads, KHÔNG click, nhưng vào web sau đó và chuyển đổi trong 30 ngày.</p>
      <p className="text-blue-900 mb-0 font-bold">Không đo VTC = Mù 70% doanh thu từ Display/YouTube.</p>
    </div>

    <h3 className="text-2xl font-bold text-gray-900 border-b pb-2">1. Click-through vs View-through – Khác gì, số nào quan trọng</h3>

    <div className="overflow-x-auto my-6">
      <table className="min-w-full bg-white border border-gray-200 text-sm rounded-lg overflow-hidden shadow-sm">
        <thead className="bg-slate-800 text-white">
          <tr>
            <th className="py-3 px-4 text-left font-bold"></th>
            <th className="py-3 px-4 text-left font-bold text-blue-300">Click-through Conversion</th>
            <th className="py-3 px-4 text-left font-bold text-amber-300">View-through Conversion VTC</th>
          </tr>
        </thead>
        <tbody className="divide-y divide-gray-200">
          {[
            { label: 'Hành vi khách', click: 'Thấy ads → Click → Book ngay', view: 'Thấy ads → Không click → Nhớ → 3 ngày sau search Google → Book' },
            { label: 'Báo cáo ở đâu', click: 'Cột "Chuyển đổi" mặc định', view: 'Cột "Chuyển đổi lượt xem hết" – phải tự thêm' },
            { label: 'Tỷ lệ ngành nail', click: '20-30% tổng booking', view: '70-80% tổng booking từ GDN/YouTube' },
            { label: 'Ví dụ', click: 'Khách thấy banner, click "Book Now", đặt lịch', view: 'Khách thấy video 30s, không click, tối về kể chồng, mai search "nail 77084" rồi book' },
            { label: 'Nếu không đo', click: 'Thiếu ~30% booking', view: 'Tưởng GDN CPA $150, tắt. Không biết GDN CPA thật $35, tắt oan' },
          ].map((r, i) => (
            <tr key={i} className={i % 2 === 0 ? 'bg-slate-50' : ''}>
              <td className="py-3 px-4 font-bold text-slate-700">{r.label}</td>
              <td className="py-3 px-4 text-blue-700 text-xs">{r.click}</td>
              <td className="py-3 px-4 text-amber-700 text-xs font-medium">{r.view}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>

    <div className="bg-slate-800 text-white p-4 rounded-xl my-4 text-sm">
      📐 <strong>Chốt:</strong> Với Search, 95% là Click Conversion. Với GDN/YouTube, 70% là View-through. Tắt VTC = Tự bắn vào chân.
    </div>

    <h3 className="text-2xl font-bold text-gray-900 mt-10 border-b pb-2">2. Cách bật cột View-through Conversion trong Google Ads – 30 giây</h3>

    <ol className="text-sm text-slate-700 space-y-2 my-4">
      <li>Vào <strong>Chiến dịch → Cột → Sửa đổi cột</strong></li>
      <li>Mục <strong>Chuyển đổi</strong> → Tick <strong>Chuyển đổi lượt xem hết</strong></li>
      <li>Tick thêm <strong>Giá trị chuyển đổi lượt xem hết</strong> nếu bạn gán giá trị</li>
      <li><strong>Áp dụng</strong></li>
    </ol>

    <div className="bg-emerald-50 border border-emerald-200 rounded-xl p-4 my-4 text-sm">
      <p className="font-bold text-emerald-800 mb-2">📊 Giờ nhìn report GDN/YouTube sẽ có 2 cột:</p>
      <ul className="text-emerald-900 space-y-1 mb-2">
        <li>Chuyển đổi: 2</li>
        <li>Chuyển đổi lượt xem hết: 8</li>
      </ul>
      <p className="text-emerald-900 font-bold mb-0">→ Tổng 10 booking. CPA thật = Chi phí/10, không phải /2.</p>
    </div>

    <h3 className="text-2xl font-bold text-gray-900 mt-10 border-b pb-2">3. View-through window = 30 ngày. Ý nghĩa gì</h3>

    <p className="text-sm text-slate-700"><strong>Mặc định:</strong> Khách thấy ads hôm nay, trong 30 ngày sau vào web book thì vẫn tính công cho ads.</p>

    <div className="bg-blue-50 border border-blue-200 rounded-xl p-4 my-4 text-sm">
      <p className="font-bold text-blue-800 mb-2">📋 Ví dụ tiệm nail:</p>
      <ul className="text-blue-900 space-y-1 mb-2">
        <li><strong>Ngày 1:</strong> Chị Lan lướt báo, thấy banner <code>Acrylic $45 Luxury Nails 77084</code>. Không click.</li>
        <li><strong>Ngày 3:</strong> Chị Lan kể bạn.</li>
        <li><strong>Ngày 5:</strong> Chị Lan search Google "luxury nails 77084", click ads Search, book.</li>
      </ul>
      <p className="text-blue-900 font-bold mb-0">→ Search báo 1 conversion. YouTube báo 1 View-through conversion. Cả 2 đều đúng. Ads YouTube nuôi, Search chốt.</p>
    </div>

    <div className="bg-slate-100 border border-slate-300 rounded-xl p-3 my-3 text-sm">
      <p className="font-bold text-slate-700 mb-0"><strong>Đổi window:</strong> Công cụ → Chuyển đổi → Chọn conversion → Chỉnh "Thời lượng chuyển đổi lượt xem" xuống 7 ngày nếu muốn gắt hơn. Local nên để 30 ngày.</p>
    </div>

    <h3 className="text-2xl font-bold text-gray-900 mt-10 border-b pb-2">4. Tại sao VTC quan trọng với tiệm nail local – 4 lý do</h3>

    <div className="overflow-x-auto my-6">
      <table className="min-w-full bg-white border border-gray-200 text-sm rounded-lg overflow-hidden shadow-sm">
        <thead className="bg-amber-600 text-white">
          <tr>
            <th className="py-3 px-4 text-left font-bold">Lý do</th>
            <th className="py-3 px-4 text-left font-bold">Giải thích</th>
            <th className="py-3 px-4 text-left font-bold">Không có VTC thì sao</th>
          </tr>
        </thead>
        <tbody className="divide-y divide-gray-200">
          {[
            {
              reason: '1. Hành vi khách nail',
              explain: '90% khách xem ads không book ngay. Họ hỏi chồng, xem review, đợi lương. 3-7 ngày sau mới book',
              without: 'Tưởng ads không hiệu quả, tắt. Mất khách',
            },
            {
              reason: '2. CPA thật thấp hơn 3-4 lần',
              explain: 'GDN báo Click Conv 2, CPA $100. Bật VTC thấy thêm 6, CPA thật $25',
              without: 'Tắt GDN lời, giữ Search đắt',
            },
            {
              reason: '3. Đo đúng vai trò YouTube/GDN',
              explain: 'YouTube = Phễu trên, tạo nhu cầu. Search = Phễu dưới, chốt. VTC chứng minh YouTube nuôi Search',
              without: 'Nghĩ YouTube không ra số, dồn tiền Search, CPA tăng',
            },
            {
              reason: '4. Tối ưu Smart Bidding',
              explain: 'tCPA/tROAS học cả VTC để bid. Tắt VTC = Dạy AI sai',
              without: 'AI bid thấp, mất impression, camp chết',
            },
          ].map((r, i) => (
            <tr key={i} className={i % 2 === 0 ? 'bg-amber-50/20' : ''}>
              <td className="py-3 px-4 font-bold text-amber-800 text-xs">{r.reason}</td>
              <td className="py-3 px-4 text-slate-600 text-xs">{r.explain}</td>
              <td className="py-3 px-4 text-red-600 text-xs font-medium">{r.without}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>

    <div className="bg-emerald-50 border border-emerald-200 rounded-xl p-5 my-4 text-sm">
      <p className="font-bold text-emerald-800 mb-2">📊 Case study thực tế 77084:</p>
      <ul className="text-emerald-900 space-y-1 mb-2">
        <li>Campaign YouTube $20/ngày = $600/tháng</li>
        <li>Click Conv: 4 booking → CPA $150 → Bạn định tắt</li>
        <li>Bật VTC: +19 booking → Tổng 23 booking → CPA $26</li>
      </ul>
      <p className="text-emerald-900 font-bold mb-0">Kết luận: YouTube lời hơn Search $35. Không có VTC thì bạn đã tắt máy in tiền.</p>
    </div>

    <h3 className="text-2xl font-bold text-gray-900 mt-10 border-b pb-2">5. 3 cách đọc báo cáo có VTC để ra quyết định tăng/giảm tiền</h3>

    <h4 className="font-bold text-slate-700 mt-6 mb-3">Báo cáo 1: Tổng quan Campaign GDN</h4>
    <div className="overflow-x-auto my-4">
      <table className="min-w-full bg-white border border-gray-200 text-sm rounded-lg overflow-hidden shadow-sm">
        <thead className="bg-slate-700 text-white">
          <tr>
            <th className="py-3 px-4 text-left font-bold">Chỉ số</th>
            <th className="py-3 px-4 text-left font-bold">Công thức</th>
            <th className="py-3 px-4 text-left font-bold">Số đẹp tiệm nail</th>
            <th className="py-3 px-4 text-left font-bold">Hành động</th>
          </tr>
        </thead>
        <tbody className="divide-y divide-gray-200">
          {[
            { chi: 'CPA All Conv', formula: 'Chi phí / (Click Conv + VTC)', num: '<$35', action: '<$35 = Scale +30% ngân sách' },
            { chi: 'Tỷ lệ VTC/Click', formula: 'VTC / Click Conv', num: '2:1 đến 5:1', action: '>5:1 = Video/banner cực nhớ. Làm thêm 3 mẫu' },
            { chi: 'CPM', formula: 'Chi phí / 1000 impression', num: '<$8', action: '>$12 = Ảnh/video chán, CTR thấp' },
          ].map((r, i) => (
            <tr key={i} className={i % 2 === 0 ? 'bg-slate-50' : ''}>
              <td className="py-3 px-4 font-bold text-slate-700">{r.chi}</td>
              <td className="py-3 px-4 font-mono text-xs text-slate-600">{r.formula}</td>
              <td className="py-3 px-4 font-bold text-emerald-700">{r.num}</td>
              <td className="py-3 px-4 text-slate-600 text-xs">{r.action}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>

    <div className="border border-blue-200 rounded-xl p-4 my-4 bg-blue-50/30">
      <h4 className="font-bold text-blue-800 mb-2">Báo cáo 2: Hỗ trợ chuyển đổi</h4>
      <p className="text-sm text-slate-700 mb-2">Vào Công cụ → Phân bổ → Kênh. Xem cột "Lượt chuyển đổi hỗ trợ".</p>
      <p className="text-sm text-slate-700 mb-0">Nếu YouTube có 50 "Hỗ trợ" mà Search chốt → YouTube là mồi. Tăng tiền YouTube 20% thì Search rẻ đi 15%.</p>
    </div>

    <div className="border border-emerald-200 rounded-xl p-4 my-4 bg-emerald-50/30">
      <h4 className="font-bold text-emerald-800 mb-2">Báo cáo 3: Đường dẫn chuyển đổi</h4>
      <p className="text-sm text-slate-700 mb-0">Xem <code>Hiển thị &gt; Tìm kiếm &gt; Chuyển đổi</code> chiếm bao nhiêu %. Nếu &gt;40% thì GDN/YouTube bắt buộc phải chạy.</p>
    </div>

    <h3 className="text-2xl font-bold text-gray-900 mt-10 border-b pb-2">6. 4 hiểu lầm về View-through khiến chủ tiệm tắt ads oan</h3>

    <div className="overflow-x-auto my-6">
      <table className="min-w-full bg-white border border-gray-200 text-sm rounded-lg overflow-hidden shadow-sm">
        <thead className="bg-red-700 text-white">
          <tr>
            <th className="py-3 px-4 text-left font-bold">Hiểu lầm</th>
            <th className="py-3 px-4 text-left font-bold">Sự thật</th>
            <th className="py-3 px-4 text-left font-bold">Cách check</th>
          </tr>
        </thead>
        <tbody className="divide-y divide-gray-200">
          {[
            {
              myth: '1. VTC là ảo, Google bịa',
              truth: 'Google chỉ tính khi user thấy >50% banner 1s, và không click ads khác 30 ngày',
              check: 'Vào Analytics → Kênh → So nguồn. Thấy Direct + Organic tăng khi bật YT',
            },
            {
              myth: '2. Khách tự nhớ, không do ads',
              truth: 'Test: Tắt YT 14 ngày, lượt search brand name tụt 30%',
              check: 'Dùng "Thử nghiệm" A/B: 50% user thấy ads, 50% không',
            },
            {
              myth: '3. VTC 30 ngày dài quá',
              truth: 'Nail là quyết định 3-7 ngày. 30 ngày hợp lý. BĐS mới 90 ngày',
              check: 'Đổi window 7 ngày nếu muốn gắt. CPA vẫn tốt thì ok',
            },
            {
              myth: '4. Chỉ cần Click Conv là đủ',
              truth: '70% doanh thu GDN/YT nằm ở VTC. Bỏ là mù',
              check: 'Luôn bật cột VTC khi xem GDN/YT. Search thì không cần',
            },
          ].map((r, i) => (
            <tr key={i} className={i % 2 === 0 ? 'bg-red-50/20' : ''}>
              <td className="py-3 px-4 font-bold text-red-800 text-xs">{r.myth}</td>
              <td className="py-3 px-4 text-slate-700 text-xs">{r.truth}</td>
              <td className="py-3 px-4 text-blue-700 text-xs">{r.check}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>

    <InteractiveChecklist
      id="chk38"
      title="Checklist tối ưu VTC cho tiệm nail – Làm 1 lần dùng cả năm"
      tasks={[
        'Bật cột VTC: Tất cả camp GDN, YouTube, PMax',
        'Set window 30 ngày: Cho ngành nail',
        'Tạo video 30s có brand 5s đầu: Khách nhớ tên. Không nhớ tên = Không có VTC',
        'Remarketing YouTube 540 ngày: List dài để VTC nhiều',
        'Loại trừ convert 30d: Khách book rồi đừng hiện nữa, phí impression',
        'Đo Brand Lift: Công cụ → Brand Lift. Free. Xem % người nhớ tên tiệm tăng bao nhiêu sau khi xem video',
        'Báo cáo tuần: CPA = Chi phí / (Click + View Conv). <Target thì scale',
      ]}
    />

    <div className="bg-amber-50 border-l-4 border-amber-400 p-5 rounded-r-xl my-6">
      <p className="font-bold text-amber-800 mb-2">🏆 Chốt Bài 38: Không đo VTC = Lái xe bịt 1 mắt.</p>
      <p className="text-amber-900 text-sm mb-2"><strong>Công thức:</strong> <code>CPA thật = Chi phí / (Click Conv + View-through Conv)</code>.</p>
      <p className="text-amber-900 text-sm mb-0"><strong>Quy tắc 70%:</strong> Với Display/YouTube, nếu VTC &lt;70% tổng conv thì video/banner dở, không đáng nhớ. Làm lại hook 5s.</p>
    </div>

    <div className="bg-blue-50 border border-blue-200 rounded-xl p-4 my-4 text-sm">
      <p className="font-bold text-blue-800 mb-1">💡 Mẹo cuối</p>
      <p className="text-blue-900 mb-0">Muốn tăng VTC → 3s đầu video phải có <code>Tên tiệm + 77084 + Giá</code>. Khách không nhớ tên thì 30 ngày sau search "nail salon" chứ không search bạn.</p>
    </div>

    <div className="bg-slate-100 border border-slate-300 rounded-xl p-4 my-4 text-sm">
      <p className="font-bold text-slate-700 mb-1">📝 Bài tập</p>
      <p className="text-slate-700 mb-0">Vào camp YouTube/GDN → Bật cột "Chuyển đổi lượt xem hết". Chụp màn hình. Tính CPA mới = Chi phí / Tổng Conv. Comment xem CPA giảm bao nhiêu % so với trước.</p>
    </div>
  </div>
);
