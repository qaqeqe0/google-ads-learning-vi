import React from 'react';
import { InteractiveChecklist } from './InteractiveChecklist';

// ─── Lesson 48 ────────────────────────────────────────────────────────────────
export const Lesson48Content: React.FC = () => (
  <div className="prose prose-blue max-w-none text-gray-800">
    <div className="bg-blue-50 border-l-4 border-blue-500 p-4 mb-6 rounded-r-lg">
      <p className="m-0 text-sm text-blue-800 font-medium">
        <strong>Vấn đề</strong>: Sếp hỏi "Tháng này chạy Ads lãi không?" Bạn vào Google Ads, GA4, Sheet gọi điện, chụp 5 màn hình. Sếp chê "Rối, không hiểu".{' '}
        <strong>Looker Studio = 1 trang báo cáo tự động</strong>. Sếp mở link, thấy Doanh thu, CPA, ROAS, khách từ Ads vs Facebook, 3 giây hiểu.{' '}
        <strong>Free 100%</strong>, update realtime, đẹp như dashboard CEO.
      </p>
    </div>

    <h3 className="text-2xl font-bold text-gray-900 border-b pb-2">1. Looker Studio làm được gì mà Google Ads không có</h3>

    <div className="overflow-x-auto my-6">
      <table className="min-w-full bg-white border border-gray-200 text-sm rounded-lg overflow-hidden shadow-sm">
        <thead className="bg-blue-700 text-white">
          <tr>
            <th className="py-3 px-4 text-left font-bold">Google Ads chỉ có</th>
            <th className="py-3 px-4 text-left font-bold">Looker Studio có thêm</th>
          </tr>
        </thead>
        <tbody className="divide-y divide-gray-200">
          <tr>
            <td className="py-3 px-4 text-slate-600">Chi phí, Click, Conv Ads</td>
            <td className="py-3 px-4 font-bold text-blue-800">Doanh thu thực từ GA4 + Lãi gộp từ Sheet</td>
          </tr>
          <tr className="bg-slate-50">
            <td className="py-3 px-4 text-slate-600">Không so được Ads vs SEO vs Facebook</td>
            <td className="py-3 px-4 font-bold text-blue-800">Gộp 3 nguồn vào 1 biểu đồ</td>
          </tr>
          <tr>
            <td className="py-3 px-4 text-slate-600">Không chia theo dịch vụ</td>
            <td className="py-3 px-4 font-bold text-blue-800">Lấy data Sheet: Acrylic ra bao tiền, Gel X bao tiền</td>
          </tr>
          <tr className="bg-slate-50">
            <td className="py-3 px-4 text-slate-600">Báo cáo xấu, không gửi sếp</td>
            <td className="py-3 px-4 font-bold text-blue-800">Đẹp, có logo tiệm, gửi link là xem</td>
          </tr>
        </tbody>
      </table>
    </div>

    <div className="bg-slate-800 text-white p-4 rounded-xl my-4 text-sm">
      <strong>Chốt</strong>: Ads = Dữ liệu thô. Looker = Bản báo cáo cho người ra quyết định.
    </div>

    <h3 className="text-2xl font-bold text-gray-900 mt-10 border-b pb-2">2. 3 nguồn data cần nối cho tiệm nail</h3>

    <div className="overflow-x-auto my-6">
      <table className="min-w-full bg-white border border-gray-200 text-sm rounded-lg overflow-hidden shadow-sm">
        <thead className="bg-slate-800 text-white">
          <tr>
            <th className="py-3 px-4 text-left font-bold">Nguồn</th>
            <th className="py-3 px-4 text-left font-bold">Lấy chỉ số gì</th>
            <th className="py-3 px-4 text-left font-bold">Vì sao cần</th>
            <th className="py-3 px-4 text-left font-bold">Cách nối</th>
          </tr>
        </thead>
        <tbody className="divide-y divide-gray-200">
          <tr>
            <td className="py-3 px-4 font-bold text-blue-800">1. Google Ads</td>
            <td className="py-3 px-4 text-slate-600">Chi phí, Click, CPA, Conv, ROAS</td>
            <td className="py-3 px-4 text-slate-600">Biết Ads đốt bao tiền, ra bao đơn</td>
            <td className="py-3 px-4 text-emerald-700 font-medium">Connector có sẵn, 1 click</td>
          </tr>
          <tr className="bg-slate-50">
            <td className="py-3 px-4 font-bold text-blue-800">2. GA4</td>
            <td className="py-3 px-4 text-slate-600">Doanh thu, Nguồn khách, Tỷ lệ đặt lịch</td>
            <td className="py-3 px-4 text-slate-600">Biết khách từ Ads có mua thật không</td>
            <td className="py-3 px-4 text-emerald-700 font-medium">Connector có sẵn, 1 click</td>
          </tr>
          <tr>
            <td className="py-3 px-4 font-bold text-blue-800">3. Google Sheet</td>
            <td className="py-3 px-4 text-slate-600">Chi phí mặt bằng, lương, lãi gộp, mục tiêu tháng</td>
            <td className="py-3 px-4 text-slate-600">Tính LỜI/LỖ thật</td>
            <td className="py-3 px-4 text-emerald-700 font-medium">Connector Google Sheets</td>
          </tr>
        </tbody>
      </table>
    </div>

    <div className="bg-emerald-50 border border-emerald-200 rounded-xl p-4 my-4 text-sm">
      <strong className="text-emerald-800">Ví dụ</strong>: Ads báo 20 booking $45 = $900. GA4 báo doanh thu $1800 vì khách upsell. Sheet báo lãi gộp 60% = $1080. Sếp chỉ cần xem số $1080.
    </div>

    <h3 className="text-2xl font-bold text-gray-900 mt-10 border-b pb-2">3. Setup Looker Studio từ A-Z – 20 phút xong</h3>

    <div className="space-y-5 my-6">
      <div className="border border-blue-200 rounded-xl p-5 bg-blue-50/30">
        <h4 className="font-bold text-blue-800 mb-2">Bước 1: Tạo báo cáo trống</h4>
        <ol className="text-sm text-slate-700 space-y-1 mb-0">
          <li>1. Vào <code className="bg-white px-1 rounded border">lookerstudio.google.com</code> → Tạo → Báo cáo trống</li>
          <li>2. Đặt tên: <code className="bg-white px-1 rounded border">Bao cao Marketing Luxury Nails T8/2026</code></li>
        </ol>
      </div>

      <div className="border border-blue-200 rounded-xl p-5 bg-blue-50/30">
        <h4 className="font-bold text-blue-800 mb-2">Bước 2: Thêm dữ liệu Google Ads</h4>
        <ol className="text-sm text-slate-700 space-y-1 mb-0">
          <li>1. Thêm dữ liệu → Google Ads → Cấp quyền → Chọn tài khoản → Thêm</li>
          <li>2. Trường quan trọng: <code className="bg-white px-1 rounded border">Cost</code>, <code className="bg-white px-1 rounded border">Conversions</code>, <code className="bg-white px-1 rounded border">Conversion Value</code>, <code className="bg-white px-1 rounded border">Campaign</code>, <code className="bg-white px-1 rounded border">Date</code></li>
        </ol>
      </div>

      <div className="border border-blue-200 rounded-xl p-5 bg-blue-50/30">
        <h4 className="font-bold text-blue-800 mb-2">Bước 3: Thêm dữ liệu GA4</h4>
        <ol className="text-sm text-slate-700 space-y-1 mb-0">
          <li>1. Thêm dữ liệu → Google Analytics → Chọn tài khoản GA4 → Property → Thêm</li>
          <li>2. Trường quan trọng: <code className="bg-white px-1 rounded border">Total Revenue</code>, <code className="bg-white px-1 rounded border">Conversions</code>, <code className="bg-white px-1 rounded border">Session source/medium</code>, <code className="bg-white px-1 rounded border">Date</code></li>
        </ol>
      </div>

      <div className="border border-blue-200 rounded-xl p-5 bg-blue-50/30">
        <h4 className="font-bold text-blue-800 mb-2">Bước 4: Thêm Google Sheet chi phí</h4>
        <p className="text-sm text-slate-600 mb-3">Tạo Sheet trước:</p>
        <div className="overflow-x-auto">
          <table className="min-w-full bg-white border border-blue-200 text-xs rounded-lg">
            <thead className="bg-blue-100">
              <tr>
                {['Date', 'Dich_Vu', 'Doanh_Thu', 'Chi_Phi_NV', 'Chi_Phi_SP', 'Lai_Gop', 'Muc_Tieu'].map((h) => (
                  <th key={h} className="py-2 px-3 text-left font-bold">{h}</th>
                ))}
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="py-2 px-3 font-mono">2026-06-01</td>
                <td className="py-2 px-3">Acrylic</td>
                <td className="py-2 px-3">450</td>
                <td className="py-2 px-3">180</td>
                <td className="py-2 px-3">45</td>
                <td className="py-2 px-3">225</td>
                <td className="py-2 px-3">300</td>
              </tr>
              <tr className="bg-slate-50">
                <td className="py-2 px-3 font-mono">2026-06-01</td>
                <td className="py-2 px-3">Gel X</td>
                <td className="py-2 px-3">325</td>
                <td className="py-2 px-3">130</td>
                <td className="py-2 px-3">32</td>
                <td className="py-2 px-3">163</td>
                <td className="py-2 px-3">200</td>
              </tr>
            </tbody>
          </table>
        </div>
        <p className="text-sm text-slate-600 mt-3 mb-0">Sau đó: Thêm dữ liệu → Google Sheets → Chọn file → Thêm</p>
      </div>

      <div className="border border-amber-200 rounded-xl p-5 bg-amber-50/30">
        <h4 className="font-bold text-amber-800 mb-2">Bước 5: Blend data – Gộp 3 nguồn</h4>
        <p className="text-sm text-slate-600 mb-2">Đây là bước quan trọng nhất.</p>
        <ol className="text-sm text-slate-700 space-y-1 mb-2">
          <li>1. Tài nguyên → Quản lý kết hợp đã thêm → Thêm kết hợp</li>
          <li>2. Kéo 3 nguồn vào. <strong>Khóa nối</strong>: <code className="bg-white px-1 rounded border">Date</code></li>
          <li>3. Tạo trường tính toán:</li>
        </ol>
        <ul className="text-sm text-slate-700 space-y-1 ml-4 mb-0">
          <li><code className="bg-white px-1 rounded border text-xs">Loi_Nhuan_Ads = Conversion Value - Cost [Ads] - Chi_Phi_NV [Sheet] - Chi_Phi_SP [Sheet]</code></li>
          <li><code className="bg-white px-1 rounded border text-xs">ROAS_Thuc = Conversion Value / Cost [Ads]</code></li>
        </ul>
      </div>
    </div>

    <h3 className="text-2xl font-bold text-gray-900 mt-10 border-b pb-2">4. 6 biểu đồ bắt buộc có cho sếp tiệm nail</h3>
    <p className="text-sm text-slate-600">Dùng template này, sếp xem 30s hiểu:</p>

    <div className="overflow-x-auto my-6">
      <table className="min-w-full bg-white border border-gray-200 text-sm rounded-lg overflow-hidden shadow-sm">
        <thead className="bg-slate-800 text-white">
          <tr>
            <th className="py-3 px-4 text-left font-bold">#</th>
            <th className="py-3 px-4 text-left font-bold">Loại biểu đồ</th>
            <th className="py-3 px-4 text-left font-bold">Chỉ số</th>
            <th className="py-3 px-4 text-left font-bold">Bộ lọc</th>
            <th className="py-3 px-4 text-left font-bold">Sếp nhìn gì</th>
          </tr>
        </thead>
        <tbody className="divide-y divide-gray-200">
          {[
            { num: '1. Thẻ điểm', type: '4 thẻ điểm to', metric: 'Chi phí Ads, Doanh thu GA4, ROAS thực, Lợi nhuận', filter: 'Tháng này', see: '4 số quan trọng nhất' },
            { num: '2. Biểu đồ tròn', type: 'Nguồn doanh thu', metric: 'GA4: Session source', filter: 'Tháng này', see: 'Ads chiếm ?%, Facebook ?%, Walk-in ?%' },
            { num: '3. Bảng', type: 'Hiệu quả Campaign', metric: 'Campaign, Cost, Conv, CPA, ROAS', filter: '30 ngày', see: 'Camp nào lỗ, tắt ngay' },
            { num: '4. Chuỗi thời gian', type: 'Doanh thu vs Chi phí', metric: 'Date, Cost [Ads], Revenue', filter: '90 ngày', see: 'Ngày nào lãi, ngày nào lỗ' },
            { num: '5. Bảng', type: 'Dịch vụ ra tiền', metric: 'Dich_Vu [Sheet], Doanh_Thu, Lai_Gop', filter: 'Tháng này', see: 'Acrylic lãi 40%, Gel X lãi 55% → Đẩy Gel X' },
            { num: '6. Bộ lọc ngày', type: 'Điều khiển', metric: 'Date range', filter: 'Toàn trang', see: 'Sếp tự chọn tuần này, tháng trước' },
          ].map((r, i) => (
            <tr key={i} className={i % 2 === 0 ? 'bg-slate-50' : ''}>
              <td className="py-3 px-4 font-bold text-blue-800">{r.num}</td>
              <td className="py-3 px-4 text-slate-700">{r.type}</td>
              <td className="py-3 px-4 text-slate-600 text-xs font-mono">{r.metric}</td>
              <td className="py-3 px-4 text-slate-600 text-xs">{r.filter}</td>
              <td className="py-3 px-4 text-slate-700 text-xs">{r.see}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>

    <div className="bg-blue-50 border border-blue-200 rounded-xl p-4 my-4 text-sm">
      <strong className="text-blue-800">Mẹo đẹp</strong>: Chủ đề → Chọn màu đen-vàng giống brand tiệm. Thêm logo góc trái. Sếp thích.
    </div>

    <h3 className="text-2xl font-bold text-gray-900 mt-10 border-b pb-2">5. 5 trường tính toán phải tạo – Không có là báo cáo sai</h3>
    <p className="text-sm text-slate-600">Vào Tài nguyên → Quản lý trường → Thêm trường</p>

    <div className="overflow-x-auto my-6">
      <table className="min-w-full bg-white border border-gray-200 text-sm rounded-lg overflow-hidden shadow-sm">
        <thead className="bg-emerald-700 text-white">
          <tr>
            <th className="py-3 px-4 text-left font-bold">Tên trường</th>
            <th className="py-3 px-4 text-left font-bold">Công thức</th>
            <th className="py-3 px-4 text-left font-bold">Ý nghĩa</th>
          </tr>
        </thead>
        <tbody className="divide-y divide-gray-200">
          {[
            { name: '1. ROAS_Thuc', formula: 'Total Revenue / Cost', meaning: 'ROAS thật từ GA4, không phải Ads' },
            { name: '2. CPA_Thuc', formula: 'Cost / Conversions', meaning: 'CPA tính theo conv GA4' },
            { name: '3. Loi_Nhuan', formula: 'Total Revenue - Cost - Chi_Phi_NV - Chi_Phi_SP', meaning: 'Lãi ròng' },
            { name: '4. Ty_Le_Chot', formula: 'Conversions / Sessions', meaning: '% khách vào web đặt lịch' },
            { name: '5. Dich_Vu_Xin', formula: 'CASE WHEN Campaign CONTAINS "Gel X" THEN "Gel X" ELSE "Khac" END', meaning: 'Tách camp theo dịch vụ' },
          ].map((r, i) => (
            <tr key={i} className={i % 2 === 0 ? 'bg-emerald-50/20' : ''}>
              <td className="py-3 px-4 font-bold text-emerald-800">{r.name}</td>
              <td className="py-3 px-4 font-mono text-xs text-slate-600">{r.formula}</td>
              <td className="py-3 px-4 text-slate-700">{r.meaning}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>

    <h3 className="text-2xl font-bold text-gray-900 mt-10 border-b pb-2">6. Chia sẻ cho sếp – 1 link xem cả đời</h3>

    <ol className="text-sm text-slate-700 space-y-2 my-4">
      <li><strong>1. Nút Chia sẻ → Quản lý quyền</strong></li>
      <li><strong>2. Thêm người</strong>: Nhập email sếp</li>
      <li><strong>3. Quyền</strong>: Chọn <code className="bg-slate-100 px-1 rounded">Có thể xem</code>. Đừng cho <code className="bg-slate-100 px-1 rounded">Có thể sửa</code></li>
      <li><strong>4. Link</strong>: Bật "Bất kỳ ai có liên kết đều có thể xem". Gửi sếp qua Zalo</li>
      <li><strong>5. Lên lịch gửi mail</strong>: Chia sẻ → Lên lịch gửi email → Mỗi thứ 2, 8am. Sếp tự nhận báo cáo</li>
    </ol>

    <div className="bg-slate-50 border border-slate-200 rounded-xl p-4 my-4 text-sm">
      <strong>Bảo mật</strong>: Chỉ hiện số tổng. Muốn ẩn từ khóa: Đừng thêm <code className="bg-white px-1 rounded border">Search Term</code> vào báo cáo.
    </div>

    <h3 className="text-2xl font-bold text-gray-900 mt-10 border-b pb-2">7. 4 lỗi khiến báo cáo sai số 50%</h3>

    <div className="overflow-x-auto my-6">
      <table className="min-w-full bg-white border border-gray-200 text-sm rounded-lg overflow-hidden shadow-sm">
        <thead className="bg-red-700 text-white">
          <tr>
            <th className="py-3 px-4 text-left font-bold">Lỗi</th>
            <th className="py-3 px-4 text-left font-bold">Hậu quả</th>
            <th className="py-3 px-4 text-left font-bold">Cách fix</th>
          </tr>
        </thead>
        <tbody className="divide-y divide-gray-200">
          {[
            { loi: '1. Không dùng GA4 Revenue', hq: 'Lấy Conversion Value Ads = Thiếu upsell', fix: 'Bắt buộc blend GA4 Total Revenue' },
            { loi: '2. Múi giờ lệch', hq: 'Ads GMT+7, GA4 GMT+0 → Số ngày lệch', fix: 'Ads + GA4 + Sheet để cùng GMT+7' },
            { loi: '3. Không lọc Internal Traffic', hq: 'Nhân viên vào web test tính thành doanh thu', fix: 'GA4 → Quản trị → Luồng dữ liệu → Loại trừ IP tiệm' },
            { loi: '4. Sheet không update', hq: 'Lãi gộp tháng 6 nhưng data Sheet tháng 5', fix: 'Giao kế toán update Sheet mỗi thứ 2' },
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

    <h3 className="text-2xl font-bold text-gray-900 mt-10 border-b pb-2">8. Template 1-click cho tiệm nail – Copy là dùng</h3>

    <div className="bg-slate-50 border border-slate-200 rounded-xl p-5 my-4 text-sm space-y-3">
      <p className="font-bold text-slate-700 mb-1">Template Google làm sẵn: <span className="font-mono font-normal">Gõ Looker Studio template Google Ads + GA4</span></p>
      <p className="font-bold text-slate-700 mb-1">Sửa 3 chỗ là xong:</p>
      <ol className="text-slate-700 space-y-1">
        <li>1. Đổi logo → Thêm hình ảnh → Upload logo tiệm</li>
        <li>2. Đổi tiền tệ → Chủ đề → USD</li>
        <li>3. Đổi mục tiêu → Sửa trường <code className="bg-white px-1 rounded border">Muc_Tieu</code> trong Sheet thành $10.000/tháng</li>
      </ol>
    </div>

    <div className="bg-emerald-50 border border-emerald-200 rounded-xl p-5 my-4 text-sm">
      <p className="font-bold text-emerald-800 mb-2">Mẫu báo cáo 1 trang cho sếp:</p>
      <div className="font-mono text-emerald-900 space-y-1 text-xs">
        <p>Tháng 6/2026</p>
        <p>Chi phí Ads: $1,520 | Doanh thu: $8,430 | ROAS: 5.5x | Lãi ròng: $3,210</p>
        <p>Top camp: Search 77084 ROAS 7x | PMax ROAS 4x</p>
        <p>Top dịch vụ: Gel X lãi $1,800 | Acrylic lãi $1,200</p>
        <p>Kết luận: Tăng ngân sách Gel X +20%</p>
      </div>
    </div>

    <div className="bg-amber-50 border-l-4 border-amber-400 p-5 rounded-r-xl my-6">
      <p className="font-bold text-amber-800 mb-2">Chốt Bài 48:</p>
      <p className="text-amber-900 text-sm mb-1">Không có Looker = Mù số. Có Looker = Biết hôm nay lời bao nhiêu, mai đẩy dịch vụ gì.</p>
      <p className="text-amber-900 text-sm mb-1"><strong>Công thức</strong>: <code>Ads + GA4 + Sheet = Lợi nhuận thật</code>. Thiếu 1 cái = Báo cáo ảo.</p>
      <p className="text-amber-900 text-sm mb-0"><strong>Quy tắc 3 giây</strong>: Sếp mở link, 3 giây phải thấy 4 số: Chi phí, Doanh thu, ROAS, Lãi. Không thấy = Báo cáo fail.</p>
    </div>

    <div className="bg-blue-50 border border-blue-200 rounded-xl p-4 my-4 text-sm">
      <p className="font-bold text-blue-800 mb-1">Mẹo cuối</p>
      <p className="text-blue-900 mb-0">Dùng "Tổng quan thông tin chi tiết" → Bật AI tóm tắt. Looker tự viết <em>Tuần này ROAS tăng 20% do camp Gel X</em>. Sếp khỏi đọc số.</p>
    </div>

    <InteractiveChecklist
      id="chk48"
      title="Bài tập Bài 48"
      tasks={[
        'Tạo báo cáo 1 trang có 4 thẻ điểm: Cost, Conv, ROAS, Lãi',
        'Chụp màn hình dashboard',
        'Comment "Đã có dashboard" khi xong',
      ]}
    />
  </div>
);

// ─── Lesson 49 ────────────────────────────────────────────────────────────────
export const Lesson49Content: React.FC = () => (
  <div className="prose prose-blue max-w-none text-gray-800">
    <div className="bg-amber-50 border-l-4 border-amber-500 p-4 mb-6 rounded-r-lg">
      <p className="m-0 text-sm text-amber-800 font-medium">
        <strong>Last Click = Chấm công cho người chốt đơn, đuổi việc người nuôi khách.</strong>
        <br />
        Ví dụ tiệm nail: Khách xem YouTube 30s → 3 ngày sau thấy banner GDN → 7 ngày sau search <em>nail 77084</em> → Book.
        <br />
        <strong>Last Click</strong>: 100% công cho Search. Tắt YouTube + GDN vì "không ra đơn". 2 tháng sau Search chết vì không ai nuôi.
        <br />
        <strong>Data-driven</strong>: Chia công: YouTube 40%, GDN 25%, Search 35%. Biết kênh nào nuôi, kênh nào chốt.
      </p>
    </div>

    <h3 className="text-2xl font-bold text-gray-900 border-b pb-2">1. 6 Mô hình phân bổ – So sánh cho tiệm nail</h3>
    <p className="text-sm text-slate-600">Vào: Công cụ → Phân bổ → So sánh mô hình</p>

    <div className="overflow-x-auto my-6">
      <table className="min-w-full bg-white border border-gray-200 text-sm rounded-lg overflow-hidden shadow-sm">
        <thead className="bg-slate-800 text-white">
          <tr>
            <th className="py-3 px-4 text-left font-bold">Mô hình</th>
            <th className="py-3 px-4 text-left font-bold">Chia công sao</th>
            <th className="py-3 px-4 text-left font-bold">Khi nào dùng</th>
            <th className="py-3 px-4 text-left font-bold">Vấn đề</th>
          </tr>
        </thead>
        <tbody className="divide-y divide-gray-200">
          <tr className="bg-red-50/20">
            <td className="py-3 px-4 font-bold text-red-800">1. Last Click – Mặc định cũ</td>
            <td className="py-3 px-4 text-slate-600">100% cho click cuối</td>
            <td className="py-3 px-4 text-red-700 font-medium">Không bao giờ</td>
            <td className="py-3 px-4 text-red-600">Giết YouTube, GDN. Tối ưu sai</td>
          </tr>
          <tr>
            <td className="py-3 px-4 font-bold text-slate-700">2. First Click</td>
            <td className="py-3 px-4 text-slate-600">100% cho click đầu</td>
            <td className="py-3 px-4 text-slate-600">Chỉ để nghiên cứu</td>
            <td className="py-3 px-4 text-slate-600">Search chốt không có công</td>
          </tr>
          <tr className="bg-slate-50">
            <td className="py-3 px-4 font-bold text-slate-700">3. Linear</td>
            <td className="py-3 px-4 text-slate-600">Chia đều: 4 click = 25% mỗi click</td>
            <td className="py-3 px-4 text-slate-600">Không dùng</td>
            <td className="py-3 px-4 text-slate-600">Click rác cũng được 25%</td>
          </tr>
          <tr>
            <td className="py-3 px-4 font-bold text-slate-700">4. Time Decay</td>
            <td className="py-3 px-4 text-slate-600">Click càng gần convert càng nhiều điểm</td>
            <td className="py-3 px-4 text-slate-600">Tạm được cho TMĐT mua ngay</td>
            <td className="py-3 px-4 text-slate-600">Nail 7 ngày cân nhắc, vẫn lệch</td>
          </tr>
          <tr className="bg-slate-50">
            <td className="py-3 px-4 font-bold text-slate-700">5. Position-based</td>
            <td className="py-3 px-4 text-slate-600">40% đầu + 40% cuối + 20% giữa</td>
            <td className="py-3 px-4 text-slate-600">Tạm được</td>
            <td className="py-3 px-4 text-slate-600">Vẫn đoán, không dựa data</td>
          </tr>
          <tr className="bg-emerald-50">
            <td className="py-3 px-4 font-bold text-emerald-800">6. Data-driven – DDA</td>
            <td className="py-3 px-4 text-emerald-700 font-medium">AI đọc 50.000 hành trình thật, chia công theo tác động thật</td>
            <td className="py-3 px-4 text-emerald-700 font-bold">Dùng 100% từ 2026</td>
            <td className="py-3 px-4 text-emerald-700">Cần &gt;300 conv + &gt;3000 click/30 ngày</td>
          </tr>
        </tbody>
      </table>
    </div>

    <div className="bg-slate-800 text-white p-4 rounded-xl my-4 text-sm">
      <strong>Chốt</strong>: 2026 Google bỏ hết, chỉ còn Data-driven. Không dùng = Tối ưu mù.
    </div>

    <h3 className="text-2xl font-bold text-gray-900 mt-10 border-b pb-2">2. Data-driven hoạt động thế nào – Ví dụ 1 booking $65</h3>

    <p className="text-sm text-slate-600">Khách A: YouTube xem 30s → GDN thấy 2 lần → Search click → Book Gel X $65.</p>

    <div className="overflow-x-auto my-6">
      <table className="min-w-full bg-white border border-gray-200 text-sm rounded-lg overflow-hidden shadow-sm">
        <thead className="bg-slate-800 text-white">
          <tr>
            <th className="py-3 px-4 text-left font-bold">Mô hình</th>
            <th className="py-3 px-4 text-left font-bold">YouTube</th>
            <th className="py-3 px-4 text-left font-bold">GDN</th>
            <th className="py-3 px-4 text-left font-bold">Search</th>
            <th className="py-3 px-4 text-left font-bold">Bạn hành động gì</th>
          </tr>
        </thead>
        <tbody className="divide-y divide-gray-200">
          <tr className="bg-red-50/20">
            <td className="py-3 px-4 font-bold text-red-800">Last Click</td>
            <td className="py-3 px-4 text-red-600 font-bold">$0</td>
            <td className="py-3 px-4 text-red-600 font-bold">$0</td>
            <td className="py-3 px-4 text-red-600 font-bold">$65</td>
            <td className="py-3 px-4 text-red-700">Tắt YouTube, GDN. 1 tháng sau Search đắt x2</td>
          </tr>
          <tr className="bg-emerald-50">
            <td className="py-3 px-4 font-bold text-emerald-800">Data-driven</td>
            <td className="py-3 px-4 text-emerald-700 font-bold">$26</td>
            <td className="py-3 px-4 text-emerald-700 font-bold">$16</td>
            <td className="py-3 px-4 text-emerald-700 font-bold">$23</td>
            <td className="py-3 px-4 text-emerald-700">Tăng tiền YouTube 20%, vì nuôi ra $26. Search vẫn quan trọng</td>
          </tr>
        </tbody>
      </table>
    </div>

    <div className="bg-blue-50 border border-blue-200 rounded-xl p-4 my-4 text-sm">
      <strong className="text-blue-800">AI tính sao</strong>: So 50.000 người. Nhóm thấy YouTube có tỷ lệ book 2.8%. Nhóm không thấy chỉ 1.2%. Chênh 1.6% → YouTube đáng $26.
    </div>

    <h3 className="text-2xl font-bold text-gray-900 mt-10 border-b pb-2">3. Điều kiện bật Data-driven – Không đủ data = Không cho bật</h3>

    <div className="overflow-x-auto my-6">
      <table className="min-w-full bg-white border border-gray-200 text-sm rounded-lg overflow-hidden shadow-sm">
        <thead className="bg-slate-800 text-white">
          <tr>
            <th className="py-3 px-4 text-left font-bold">Yêu cầu</th>
            <th className="py-3 px-4 text-left font-bold">Tiệm nail local</th>
            <th className="py-3 px-4 text-left font-bold">TMĐT supplies online</th>
          </tr>
        </thead>
        <tbody className="divide-y divide-gray-200">
          <tr>
            <td className="py-3 px-4 font-bold text-slate-700">Chuyển đổi</td>
            <td className="py-3 px-4">&gt;300 trong 30 ngày</td>
            <td className="py-3 px-4 text-emerald-700">Dễ nếu &gt;10 booking/ngày</td>
          </tr>
          <tr className="bg-slate-50">
            <td className="py-3 px-4 font-bold text-slate-700">Lượt click</td>
            <td className="py-3 px-4">&gt;3000 trong 30 ngày</td>
            <td className="py-3 px-4 text-emerald-700">Chạy $30/ngày là đủ</td>
          </tr>
          <tr>
            <td className="py-3 px-4 font-bold text-slate-700">Thời gian</td>
            <td className="py-3 px-4">Tài khoản &gt;30 ngày</td>
            <td className="py-3 px-4 text-emerald-700">Ok</td>
          </tr>
        </tbody>
      </table>
    </div>

    <div className="bg-amber-50 border border-amber-200 rounded-xl p-4 my-4 text-sm">
      <strong>Không đủ</strong>: Google tự dùng Last Click. <strong>Cách đủ nhanh</strong>: Gộp Search + PMax + YouTube vào 1 tài khoản. Dùng chuyển đổi "Phụ" như <code className="bg-white px-1 rounded border">Xem 50% trang giá</code> để đủ 300.
    </div>

    <div className="bg-slate-50 border border-slate-200 rounded-xl p-4 my-4 text-sm">
      <p className="font-bold text-slate-700 mb-2">Bật ở đâu:</p>
      <ol className="text-slate-700 space-y-1 mb-0">
        <li>1. Công cụ → Chuyển đổi → Chọn conversion "Đặt lịch" → Chỉnh sửa → Phân bổ → Chọn <strong>Dựa trên dữ liệu</strong></li>
        <li>2. Cài đặt chiến dịch → Phân bổ → Dựa trên dữ liệu</li>
      </ol>
    </div>

    <h3 className="text-2xl font-bold text-gray-900 mt-10 border-b pb-2">4. Đọc báo cáo Data-driven – 3 cột thay đổi tư duy</h3>
    <p className="text-sm text-slate-600">Vào Công cụ → Phân bổ → So sánh mô hình. Chọn Last Click vs Data-driven.</p>

    <p className="font-bold text-slate-700 mt-4 mb-2">Báo cáo 1: Chiến dịch</p>

    <div className="overflow-x-auto my-4">
      <table className="min-w-full bg-white border border-gray-200 text-sm rounded-lg overflow-hidden shadow-sm">
        <thead className="bg-slate-700 text-white">
          <tr>
            <th className="py-3 px-4 text-left font-bold">Chiến dịch</th>
            <th className="py-3 px-4 text-left font-bold">Conv Last Click</th>
            <th className="py-3 px-4 text-left font-bold">Conv Data-driven</th>
            <th className="py-3 px-4 text-left font-bold">Chênh lệch</th>
            <th className="py-3 px-4 text-left font-bold">Ý nghĩa</th>
          </tr>
        </thead>
        <tbody className="divide-y divide-gray-200">
          {[
            { camp: 'Search Brand', lc: '80', dda: '52', diff: '-28', meaning: 'Search chốt nhiều, nhưng không phải công hết', up: false },
            { camp: 'YouTube', lc: '2', dda: '18', diff: '+16', meaning: 'YouTube nuôi 16 đơn. Tăng $200/tuần', up: true },
            { camp: 'PMax', lc: '30', dda: '42', diff: '+12', meaning: 'PMax nuôi tốt. Đừng tắt', up: true },
            { camp: 'Search Non-brand', lc: '20', dda: '20', diff: '0', meaning: 'Cân bằng', up: false },
          ].map((r, i) => (
            <tr key={i} className={i % 2 === 0 ? 'bg-slate-50' : ''}>
              <td className="py-3 px-4 font-bold text-slate-700">{r.camp}</td>
              <td className="py-3 px-4 text-slate-600">{r.lc}</td>
              <td className={`py-3 px-4 font-bold ${r.up ? 'text-emerald-700' : 'text-slate-600'}`}>{r.dda}</td>
              <td className={`py-3 px-4 font-bold ${r.up ? 'text-emerald-600' : 'text-red-600'}`}>{r.diff}</td>
              <td className="py-3 px-4 text-slate-600 text-xs">{r.meaning}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>

    <div className="bg-red-50 border border-red-200 rounded-xl p-4 my-4 text-sm">
      <strong className="text-red-800">Kết luận</strong>: Cắt YouTube là tự cắt 18 booking. Last Click lừa bạn.
    </div>

    <p className="font-bold text-slate-700 mt-4 mb-2">Báo cáo 2: Từ khóa</p>
    <div className="bg-slate-50 border border-slate-200 rounded-xl p-4 my-4 text-sm">
      Từ khóa <code className="bg-white px-1 rounded border">acrylic nails</code>: Last Click 5 conv, CPA $40. Data-driven 12 conv, CPA $16.
      → Từ khóa này nuôi khách. Trước tưởng đắt, giờ thấy rẻ. Tăng bid.
    </div>

    <p className="font-bold text-slate-700 mt-4 mb-2">Báo cáo 3: Đường dẫn chuyển đổi hàng đầu</p>
    <div className="bg-slate-50 border border-slate-200 rounded-xl p-4 my-4 text-sm">
      <p className="mb-1">Xem top 10 đường đi.</p>
      <p className="font-mono mb-1">YouTube &gt; GDN &gt; Search &gt; Convert chiếm 22% đơn.</p>
      <p className="mb-0">→ Bắt buộc chạy full phễu. Tắt 1 kênh là mất 22%.</p>
    </div>

    <h3 className="text-2xl font-bold text-gray-900 mt-10 border-b pb-2">5. Tác động Data-driven lên Smart Bidding – Quan trọng nhất</h3>

    <div className="bg-blue-50 border border-blue-200 rounded-xl p-5 my-4 text-sm space-y-3">
      <p className="font-bold text-blue-800 mb-1">Smart Bidding học theo mô hình phân bổ bạn chọn.</p>
      <p className="mb-1"><strong>Ví dụ tCPA $25:</strong></p>
      <p className="mb-1"><strong>Last Click</strong>: AI thấy Search ra CPA $20, YouTube $200 → Dồn 100% tiền Search. YouTube chết.</p>
      <p className="mb-1"><strong>Data-driven</strong>: AI thấy YouTube góp $26/đơn → YouTube CPA thật $35, vẫn lời → Chia 30% tiền YouTube. Full phễu chạy, CPA tổng $22.</p>
      <p className="font-bold text-blue-800 mb-0">Quy tắc: Bật Data-driven xong, 14 ngày sau CPA giảm 15-30% vì AI bid đúng kênh nuôi.</p>
    </div>

    <h3 className="text-2xl font-bold text-gray-900 mt-10 border-b pb-2">6. 4 hiểu lầm khiến chủ shop tắt Data-driven</h3>

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
            { hieulam: '1. DDA làm tăng conv ảo', truth: 'DDA không tạo conv mới. Chỉ chia lại công. Tổng conv không đổi', check: 'So cột "Chuyển đổi" tổng: Last Click = DDA' },
            { hieulam: '2. YouTube không ra số, DDA bịa', truth: 'Vào Analytics → Kênh → Thấy Direct tăng khi bật YouTube', check: 'DDA phản ánh đúng Direct tăng' },
            { hieulam: '3. Ít data nên DDA sai', truth: '<300 conv thì Google không cho bật. Bật được là đủ', check: 'Công cụ → Chuyển đổi → Xem có chữ "Dựa trên dữ liệu" không' },
            { hieulam: '4. Chạy Search only nên không cần', truth: 'Vẫn cần. Search Brand ăn công Search Non-brand', check: 'So sánh sẽ thấy Non-brand nuôi Brand' },
          ].map((r, i) => (
            <tr key={i} className={i % 2 === 0 ? 'bg-red-50/20' : ''}>
              <td className="py-3 px-4 font-bold text-red-800">{r.hieulam}</td>
              <td className="py-3 px-4 text-slate-600 text-xs">{r.truth}</td>
              <td className="py-3 px-4 text-emerald-700 text-xs font-medium">{r.check}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>

    <h3 className="text-2xl font-bold text-gray-900 mt-10 border-b pb-2">7. Checklist chuyển sang Data-driven cho tiệm nail</h3>

    <InteractiveChecklist
      id="chk49"
      title="Checklist Bài 49 – Chuyển sang Data-driven"
      tasks={[
        'Đủ 300 conv/30 ngày: Nếu chưa, gộp thêm chuyển đổi phụ Gọi >60s, Chỉ đường',
        'Đổi mô hình: Công cụ → Chuyển đổi → 5 hành động chính → Data-driven',
        'Đổi cấp chiến dịch: Cài đặt → Phân bổ → Data-driven',
        'Đợi 14 ngày: Không đụng. Cho AI học lại',
        'So sánh: Phân bổ → So sánh Last Click vs DDA. Chụp bảng chênh lệch',
        'Hành động: Tăng tiền kênh DDA > Last Click. Giảm kênh ngược lại',
        'Báo sếp: "YouTube không phải 2 đơn, mà 18 đơn. ROAS thật 5x"',
      ]}
    />

    <div className="bg-blue-50 border border-blue-200 rounded-xl p-4 my-4 text-sm">
      <strong className="text-blue-800">Sau 14 ngày bạn sẽ thấy</strong>: CPA giảm, YouTube/GDN được tăng tiền, Search không bị vắt kiệt.
    </div>

    <h3 className="text-2xl font-bold text-gray-900 mt-10 border-b pb-2">8. Khi nào vẫn dùng Last Click – 3 trường hợp hiếm</h3>

    <ol className="text-sm text-slate-700 space-y-2 my-4">
      <li>1. <strong>Chỉ chạy 1 kênh</strong>: 100% Search, không GDN/YouTube → Last Click = DDA</li>
      <li>2. <strong>Chu kỳ mua &lt;1 ngày</strong>: Mua mì gói, vé số. Nail không phải</li>
      <li>3. <strong>Test A/B</strong>: Muốn so kênh thuần túy. Nhưng kinh doanh thì không</li>
    </ol>

    <div className="bg-amber-50 border-l-4 border-amber-400 p-5 rounded-r-xl my-6">
      <p className="font-bold text-amber-800 mb-2">Chốt Bài 49:</p>
      <p className="text-amber-900 text-sm mb-1">Last Click = Đếm cua trong lỗ. Data-driven = Camera đếm người vào tiệm.</p>
      <p className="text-amber-900 text-sm mb-1"><strong>Công thức</strong>: <code>Bật DDA + Đợi 14 ngày + Đọc báo cáo So sánh = Biết kênh nào nuôi, kênh nào chốt</code>.</p>
      <p className="text-amber-900 text-sm mb-0"><strong>Quy tắc 40-60</strong>: Nếu &gt;60% conv từ Last Click Search Brand → Bạn đang tắt kênh nuôi. 1 tháng nữa đói khách.</p>
    </div>

    <div className="bg-blue-50 border border-blue-200 rounded-xl p-4 my-4 text-sm">
      <p className="font-bold text-blue-800 mb-1">Mẹo cuối</p>
      <p className="text-blue-900 mb-0">Vào Analytics 4 → Quảng cáo → Mô hình phân bổ → Chọn Data-driven. Xem "Đường dẫn chuyển đổi" 30 ngày. Đường nào &gt;15% thì bắt buộc giữ.</p>
    </div>

    <div className="bg-slate-50 border border-slate-200 rounded-xl p-4 my-4 text-sm">
      <strong className="text-slate-700">Bài tập</strong>: Vào Công cụ → Phân bổ → So sánh mô hình. Chụp bảng so sánh 3 chiến dịch: Search, PMax, YouTube. Comment xem kênh nào được DDA "trả công" nhiều nhất. Mình đọc giùm có nên tăng tiền không.
    </div>
  </div>
);

// ─── Lesson 50 ────────────────────────────────────────────────────────────────
export const Lesson50Content: React.FC = () => (
  <div className="prose prose-blue max-w-none text-gray-800">
    <div className="bg-red-50 border-l-4 border-red-500 p-4 mb-6 rounded-r-lg">
      <p className="m-0 text-sm text-red-800 font-medium">
        <strong>Sếp hỏi</strong>: "Chạy TikTok $500 có ra khách không?" GA4 báo TikTok = 0 đơn. Bạn tắt TikTok. 2 tuần sau Google Ads chết.
        <br />
        <strong>Lý do</strong>: Khách thấy TikTok → 5 ngày sau search Google → Book. GA4 Last Click cho 100% Google. TikTok = 0. Bạn giết kênh nuôi.
        <br />
        <strong>Báo cáo "Đường dẫn chuyển đổi"</strong> = Camera toàn hành trình. Biết Ads nằm đầu, giữa, hay cuối.
      </p>
    </div>

    <h3 className="text-2xl font-bold text-gray-900 border-b pb-2">1. Vào đâu xem – 3 click ra sự thật</h3>

    <ol className="text-sm text-slate-700 space-y-2 my-4">
      <li>1. Vào <code className="bg-slate-100 px-1 rounded">analytics.google.com</code> → Chọn Property tiệm nail</li>
      <li>2. Menu trái → <strong>Quảng cáo</strong> → <strong>Phân bổ</strong> → <strong>Đường dẫn chuyển đổi</strong></li>
      <li>3. Chọn sự kiện chuyển đổi: <code className="bg-slate-100 px-1 rounded">purchase</code> hoặc <code className="bg-slate-100 px-1 rounded">generate_lead</code> = Đặt lịch</li>
    </ol>

    <div className="bg-amber-50 border border-amber-200 rounded-xl p-4 my-4 text-sm">
      <strong className="text-amber-800">Quan trọng</strong>: Phải link Google Ads + GA4 + Bật Google Signals. Không link = Không thấy Ads.
    </div>

    <h3 className="text-2xl font-bold text-gray-900 mt-10 border-b pb-2">2. 5 cột phải hiểu trong báo cáo</h3>

    <div className="overflow-x-auto my-6">
      <table className="min-w-full bg-white border border-gray-200 text-sm rounded-lg overflow-hidden shadow-sm">
        <thead className="bg-slate-800 text-white">
          <tr>
            <th className="py-3 px-4 text-left font-bold">Cột</th>
            <th className="py-3 px-4 text-left font-bold">Ý nghĩa cho tiệm nail</th>
            <th className="py-3 px-4 text-left font-bold">Ví dụ thực tế</th>
          </tr>
        </thead>
        <tbody className="divide-y divide-gray-200">
          {[
            { col: '1. Đường dẫn', meaning: 'Thứ tự kênh khách chạm. Paid Social > Organic Search > Paid Search', example: 'TikTok > Google tự nhiên > Google Ads' },
            { col: '2. Chuyển đổi', meaning: 'Bao nhiêu booking đi theo đường này', example: '18 booking' },
            { col: '3. Doanh thu', meaning: 'Tiền từ đường này', example: '$1,170 = 18 x $65' },
            { col: '4. Ngày đến chuyển đổi', meaning: 'Từ chạm đầu đến book mất bao ngày', example: 'TB 6.2 ngày' },
            { col: '5. Điểm tiếp xúc', meaning: 'Khách chạm mấy kênh trước khi book', example: 'TB 3.4 kênh' },
          ].map((r, i) => (
            <tr key={i} className={i % 2 === 0 ? 'bg-slate-50' : ''}>
              <td className="py-3 px-4 font-bold text-blue-800">{r.col}</td>
              <td className="py-3 px-4 text-slate-600">{r.meaning}</td>
              <td className="py-3 px-4 text-emerald-700 font-medium text-xs">{r.example}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>

    <div className="bg-red-50 border border-red-200 rounded-xl p-4 my-4 text-sm">
      <strong className="text-red-800">Chốt</strong>: Nếu thấy <code>Paid Social &gt; Paid Search</code> chiếm 30% doanh thu → Tắt TikTok là tự sát.
    </div>

    <h3 className="text-2xl font-bold text-gray-900 mt-10 border-b pb-2">3. 4 vị trí của Google Ads trong hành trình – Ý nghĩa khác nhau</h3>

    <div className="overflow-x-auto my-6">
      <table className="min-w-full bg-white border border-gray-200 text-sm rounded-lg overflow-hidden shadow-sm">
        <thead className="bg-slate-800 text-white">
          <tr>
            <th className="py-3 px-4 text-left font-bold">Vị trí Ads</th>
            <th className="py-3 px-4 text-left font-bold">Tên gọi</th>
            <th className="py-3 px-4 text-left font-bold">Ý nghĩa</th>
            <th className="py-3 px-4 text-left font-bold">Hành động cho tiệm nail</th>
          </tr>
        </thead>
        <tbody className="divide-y divide-gray-200">
          {[
            { pos: '1. Đầu tiên', name: 'Người mở đường', meaning: 'Ads YouTube/GDN giới thiệu tiệm. Khách chưa biết bạn', action: 'Tăng tiền. Đây là kênh nuôi. CPA cao chấp nhận', color: 'text-blue-700' },
            { pos: '2. Ở giữa', name: 'Người nuôi dưỡng', meaning: 'Khách xem TikTok, sau click Ads GDN remarketing. Ads nhắc nhớ', action: 'Giữ. Không có là khách quên, không search', color: 'text-purple-700' },
            { pos: '3. Cuối cùng', name: 'Người chốt đơn', meaning: 'Khách search nail 77084 click Ads. Ads hốt khách', action: 'Giữ Top 1. Từ khóa này = vàng', color: 'text-emerald-700' },
            { pos: '4. Duy nhất', name: 'Một mình cân team', meaning: 'Khách search click Ads book luôn. Chu kỳ <1 ngày', action: 'Scale mạnh. Đây là khách nóng', color: 'text-amber-700' },
          ].map((r, i) => (
            <tr key={i} className={i % 2 === 0 ? 'bg-slate-50' : ''}>
              <td className={`py-3 px-4 font-bold ${r.color}`}>{r.pos}</td>
              <td className="py-3 px-4 font-bold text-slate-700">{r.name}</td>
              <td className="py-3 px-4 text-slate-600 text-xs">{r.meaning}</td>
              <td className={`py-3 px-4 font-bold text-xs ${r.color}`}>{r.action}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>

    <div className="bg-slate-50 border border-slate-200 rounded-xl p-4 my-4 text-sm">
      <strong>Cách xem</strong>: Trong báo cáo, bấm biểu tượng <code>...</code> → Chọn <code>Chỉ hiển thị đường dẫn có Google Ads</code>.
      Sau đó thêm thứ nguyên phụ <code>Vị trí của Google Ads trong đường dẫn</code> → Sẽ ra 4 nhóm trên.
    </div>

    <h3 className="text-2xl font-bold text-gray-900 mt-10 border-b pb-2">4. So sánh 3 mô hình ngay trong GA4 – Biết Ads bị ăn gian bao nhiêu</h3>
    <p className="text-sm text-slate-600">Trong "Đường dẫn chuyển đổi" → Bấm "So sánh mô hình"</p>

    <div className="overflow-x-auto my-6">
      <table className="min-w-full bg-white border border-gray-200 text-sm rounded-lg overflow-hidden shadow-sm">
        <thead className="bg-slate-800 text-white">
          <tr>
            <th className="py-3 px-4 text-left font-bold">Kênh</th>
            <th className="py-3 px-4 text-left font-bold">Conv Last Click</th>
            <th className="py-3 px-4 text-left font-bold">Conv Data-driven</th>
            <th className="py-3 px-4 text-left font-bold">Chênh lệch</th>
            <th className="py-3 px-4 text-left font-bold">Kết luận</th>
          </tr>
        </thead>
        <tbody className="divide-y divide-gray-200">
          {[
            { kenh: 'Paid Search', lc: '100', dda: '68', diff: '-32', note: 'Search ăn gian 32 đơn của kênh khác', up: false },
            { kenh: 'Paid Social', lc: '5', dda: '22', diff: '+17', note: 'TikTok nuôi 17 đơn. ROAS thật 3x', up: true },
            { kenh: 'Organic Search', lc: '40', dda: '35', diff: '-5', note: 'Tự nhiên cũng ăn gian nhẹ', up: false },
            { kenh: 'Direct', lc: '30', dda: '50', diff: '+20', note: '20 đơn Direct là do Ads/YouTube nuôi trước', up: true },
          ].map((r, i) => (
            <tr key={i} className={i % 2 === 0 ? 'bg-slate-50' : ''}>
              <td className="py-3 px-4 font-bold text-slate-700">{r.kenh}</td>
              <td className="py-3 px-4 text-slate-600">{r.lc}</td>
              <td className={`py-3 px-4 font-bold ${r.up ? 'text-emerald-700' : 'text-red-600'}`}>{r.dda}</td>
              <td className={`py-3 px-4 font-bold ${r.up ? 'text-emerald-600' : 'text-red-600'}`}>{r.diff}</td>
              <td className="py-3 px-4 text-slate-600 text-xs">{r.note}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>

    <div className="bg-emerald-50 border border-emerald-200 rounded-xl p-4 my-4 text-sm">
      <strong className="text-emerald-800">Hành động</strong>: Báo sếp "TikTok không phải 5 đơn, mà 22 đơn. ROAS 3x, không phải lỗ". Giữ ngân sách.
    </div>

    <h3 className="text-2xl font-bold text-gray-900 mt-10 border-b pb-2">5. 3 báo cáo phải xem mỗi tuần – 10 phút</h3>

    <div className="space-y-5 my-6">
      <div className="border border-blue-200 rounded-xl p-5 bg-blue-50/30">
        <h4 className="font-bold text-blue-800 mb-2">Báo cáo 1: Đường dẫn hàng đầu – Top Paths</h4>
        <p className="text-sm text-slate-600 mb-2">Bộ lọc: <code className="bg-white px-1 rounded border">Đường dẫn chứa Paid Search</code></p>
        <p className="text-sm text-slate-600 mb-1">Xem top 10. Nếu thấy:</p>
        <ul className="text-sm text-slate-700 space-y-1 mb-0">
          <li><code className="font-mono">Paid Social &gt; Paid Search</code> = 25% đơn → TikTok/Facebook bắt buộc chạy</li>
          <li><code className="font-mono">Organic &gt; Paid Search</code> = 15% đơn → SEO tốt, Ads chỉ chốt</li>
          <li><code className="font-mono">Paid Search</code> đứng 1 mình = 40% đơn → Từ khóa brand + khẩn cấp. Tăng bid</li>
        </ul>
      </div>

      <div className="border border-amber-200 rounded-xl p-5 bg-amber-50/30">
        <h4 className="font-bold text-amber-800 mb-2">Báo cáo 2: Thời gian trễ – Time Lag</h4>
        <p className="text-sm text-slate-600 mb-1">Menu: <strong>Quảng cáo → Phân bổ → Thời gian trễ</strong></p>
        <ul className="text-sm text-slate-700 space-y-1 mb-0">
          <li>Nếu 70% đơn xảy ra sau 3 ngày → Remarketing 7 ngày bắt buộc. Tắt remarketing = mất 70%.</li>
          <li>Nếu 80% đơn trong ngày → Khách khẩn cấp. Tăng ngân sách 6pm-9pm.</li>
        </ul>
      </div>

      <div className="border border-purple-200 rounded-xl p-5 bg-purple-50/30">
        <h4 className="font-bold text-purple-800 mb-2">Báo cáo 3: Độ dài đường dẫn – Path Length</h4>
        <p className="text-sm text-slate-600 mb-1">Menu: <strong>Quảng cáo → Phân bổ → Độ dài đường dẫn</strong></p>
        <ul className="text-sm text-slate-700 space-y-1 mb-0">
          <li>Nếu 60% đơn cần &gt;2 điểm chạm → Bắt buộc chạy đa kênh: YouTube + Search + GDN.</li>
          <li>Nếu 80% đơn = 1 điểm chạm → Chỉ cần Search. Nhưng nail hiếm khi 1 chạm.</li>
        </ul>
      </div>
    </div>

    <h3 className="text-2xl font-bold text-gray-900 mt-10 border-b pb-2">6. Case tiệm nail 77084: Đọc xong tiết kiệm $400/tháng</h3>

    <div className="bg-slate-50 border border-slate-200 rounded-xl p-5 my-4 text-sm space-y-3">
      <div>
        <p className="font-bold text-red-700 mb-1">Trước khi đọc:</p>
        <p className="mb-0">Last Click: Google Ads 50 đơn, CPA $20. TikTok 0 đơn, CPA ∞. Tắt TikTok.</p>
      </div>
      <div>
        <p className="font-bold text-emerald-700 mb-1">Sau khi mở Đường dẫn chuyển đổi:</p>
        <p className="mb-1">Thấy 30% đường dẫn là: <code className="font-mono">Paid Social &gt; Direct &gt; Paid Search</code></p>
        <p className="mb-1">Data-driven chia: TikTok $400 → 12 đơn. CPA thật $33, vẫn lời vì khách làm Gel X $65.</p>
        <p className="mb-0">Google Ads không phải 50 đơn, mà 38 đơn.</p>
      </div>
      <div>
        <p className="font-bold text-blue-700 mb-1">Quyết định:</p>
        <p className="mb-1">Giữ TikTok $400, giảm Google Ads $200 vì ăn gian.</p>
        <p className="font-bold text-emerald-700 mb-0">Kết quả: Tổng đơn từ 50 → 62. CPA tổng từ $20 → $17. Tiết kiệm $400, thêm 12 khách.</p>
      </div>
    </div>

    <h3 className="text-2xl font-bold text-gray-900 mt-10 border-b pb-2">7. 5 lỗi khiến báo cáo sai – Mất tiền oan</h3>

    <div className="overflow-x-auto my-6">
      <table className="min-w-full bg-white border border-gray-200 text-sm rounded-lg overflow-hidden shadow-sm">
        <thead className="bg-red-700 text-white">
          <tr>
            <th className="py-3 px-4 text-left font-bold">Lỗi</th>
            <th className="py-3 px-4 text-left font-bold">Hậu quả</th>
            <th className="py-3 px-4 text-left font-bold">Cách fix</th>
          </tr>
        </thead>
        <tbody className="divide-y divide-gray-200">
          {[
            { loi: '1. Không link Google Ads', hq: 'Đường dẫn chỉ hiện Direct, Organic', fix: 'Quản trị GA4 → Liên kết Google Ads → Link' },
            { loi: '2. Không bật Google Signals', hq: 'Mất dữ liệu YouTube, Cross-device', fix: 'Quản trị → Cài đặt dữ liệu → Thu thập dữ liệu → Bật Google Signals' },
            { loi: '3. Chuyển đổi đếm sai', hq: '1 booking đếm 3 lần', fix: 'GA4 → Quản trị → Sự kiện → Đánh dấu purchase là chuyển đổi, tắt cái khác' },
            { loi: '4. Xem 7 ngày', hq: 'Chu kỳ nail 7-14 ngày. Data thiếu', fix: 'Luôn xem 30-90 ngày' },
            { loi: '5. Không loại trừ nhân viên', hq: 'Nhân viên test vào web tính 1 đường dẫn', fix: 'Quản trị → Luồng dữ liệu → Loại trừ lưu lượng nội bộ' },
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

    <h3 className="text-2xl font-bold text-gray-900 mt-10 border-b pb-2">8. Checklist hành động sau khi đọc báo cáo</h3>

    <InteractiveChecklist
      id="chk50"
      title="Checklist Bài 50 – Đọc báo cáo đường dẫn chuyển đổi"
      tasks={[
        'Lọc đường dẫn có Ads: Bao % Ads nằm đầu? >40% = Ads nuôi, tăng tiền',
        'So sánh DDA vs Last Click: Kênh nào DDA > Last Click 50% = Đang bị đánh giá thấp, bơm tiền',
        'Check Time Lag: >50% đơn sau 3 ngày → Bật remarketing 14 ngày',
        'Check Path Length: >2 chạm = Bắt buộc đa kênh. Đừng chạy Search only',
        'Tắt kênh ăn gian: Nếu Direct DDA > Last Click 30% → Direct là do Ads nuôi. Không tắt Ads',
      ]}
    />

    <div className="bg-amber-50 border-l-4 border-amber-400 p-5 rounded-r-xl my-6">
      <p className="font-bold text-amber-800 mb-2">Chốt Bài 50:</p>
      <p className="text-amber-900 text-sm mb-1">Last Click = Xem phim tua đến đoạn kết. Đường dẫn chuyển đổi = Xem cả phim.</p>
      <p className="text-amber-900 text-sm mb-1"><strong>Công thức</strong>: <code>Mở báo cáo + Lọc đường dẫn có Ads + So DDA = Biết tắt kênh nào là tự sát</code>.</p>
      <p className="text-amber-900 text-sm mb-0"><strong>Quy tắc 30-30</strong>: Nếu Ads xuất hiện trong 30% đường dẫn + DDA &gt; Last Click 30% → Ads là kênh nuôi. Cắt là chết.</p>
    </div>

    <div className="bg-blue-50 border border-blue-200 rounded-xl p-4 my-4 text-sm">
      <p className="font-bold text-blue-800 mb-1">Mẹo cuối</p>
      <p className="text-blue-900 mb-0">Vào Khám phá → Tạo báo cáo "Kênh" → Thứ nguyên <code>Nguồn/Phương tiện</code> + <code>Vị trí trong đường dẫn</code>. Kéo ra là thấy ngay Ads nằm đâu.</p>
    </div>

    <div className="bg-slate-50 border border-slate-200 rounded-xl p-4 my-4 text-sm">
      <strong className="text-slate-700">Bài tập</strong>: Vào GA4 → Quảng cáo → Đường dẫn chuyển đổi. Lọc <code>Đường dẫn chứa Paid Search</code>. Chụp top 3 đường dẫn. Comment xem Ads nằm đầu, giữa, hay cuối nhiều nhất. Mình chỉ tối ưu.
    </div>
  </div>
);

// ─── Lesson 51 ────────────────────────────────────────────────────────────────
export const Lesson51Content: React.FC = () => (
  <div className="prose prose-blue max-w-none text-gray-800">
    <div className="bg-red-50 border-l-4 border-red-500 p-4 mb-6 rounded-r-lg">
      <p className="m-0 text-sm text-red-800 font-medium">
        <strong>Sai lầm đắt nhất</strong>: Tiệm nail bid CPA $25 vì "$25 &lt; $45 tiền Acrylic". 3 tháng sau lỗ.
        <br />
        <strong>Lý do</strong>: Khách Acrylic $45 quay lại 4 lần/năm = $180. Bạn dám bid $60 vẫn lãi. Đối thủ biết, bid $40 cướp hết khách. Bạn ngồi chơi.
        <br />
        <strong>LTV = Lifetime Value = Giá trị trọn đời khách</strong>. <strong>Payback Period = Bao lâu hoàn vốn tiền ads</strong>. Biết 2 số này = Dám bid mạnh, scale không sợ.
      </p>
    </div>

    <h3 className="text-2xl font-bold text-gray-900 border-b pb-2">1. 3 số phải biết trước khi bid 1 đồng</h3>

    <div className="overflow-x-auto my-6">
      <table className="min-w-full bg-white border border-gray-200 text-sm rounded-lg overflow-hidden shadow-sm">
        <thead className="bg-slate-800 text-white">
          <tr>
            <th className="py-3 px-4 text-left font-bold">Chỉ số</th>
            <th className="py-3 px-4 text-left font-bold">Định nghĩa</th>
            <th className="py-3 px-4 text-left font-bold">Cách tính nhanh cho tiệm nail</th>
            <th className="py-3 px-4 text-left font-bold">Ví dụ 77084</th>
          </tr>
        </thead>
        <tbody className="divide-y divide-gray-200">
          {[
            { chi: '1. AOV', def: 'Doanh thu TB/đơn', calc: 'Tổng doanh thu tháng / Số booking', ex: '$2,600 / 50 = $52' },
            { chi: '2. Tần suất', def: 'Khách quay lại mấy lần/năm', calc: '12 tháng / Số ngày TB giữa 2 lần ghé', ex: '365 / 60 = 6 lần/năm' },
            { chi: '3. Tuổi thọ', def: 'Khách ở với bạn bao lâu', calc: 'Dựa data POS 2 năm', ex: 'TB 2 năm' },
            { chi: '4. LTV gộp', def: 'AOV x Tần suất x Tuổi thọ', calc: '52 x 6 x 2 = $624', ex: '1 khách = $624' },
            { chi: '5. Lãi gộp %', def: '(Doanh thu - Biến phí) / Doanh thu', calc: '1 - (NV 40% + SP 10%) = 50%', ex: 'Lãi $312/khách' },
            { chi: '6. LTV ròng', def: 'LTV gộp x Lãi gộp %', calc: '624 x 50% = $312', ex: 'Đây là tiền thật' },
          ].map((r, i) => (
            <tr key={i} className={i % 2 === 0 ? 'bg-slate-50' : ''}>
              <td className="py-3 px-4 font-bold text-blue-800">{r.chi}</td>
              <td className="py-3 px-4 text-slate-600">{r.def}</td>
              <td className="py-3 px-4 text-slate-600 text-xs font-mono">{r.calc}</td>
              <td className="py-3 px-4 font-bold text-emerald-700">{r.ex}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>

    <div className="bg-emerald-50 border border-emerald-200 rounded-xl p-4 my-4 text-sm">
      <strong className="text-emerald-800">Chốt</strong>: Đừng bid theo $45. Bid theo $312. CPA $60 vẫn lời $252.
    </div>

    <h3 className="text-2xl font-bold text-gray-900 mt-10 border-b pb-2">2. Payback Period – Bao lâu hoàn vốn để dám all-in</h3>

    <div className="bg-slate-50 border border-slate-200 rounded-xl p-4 my-4 text-sm">
      <p className="mb-1"><strong>Công thức</strong>: <code>Payback = CPA / (AOV x Lãi gộp %)</code></p>
      <p className="mb-0"><strong>Ý nghĩa</strong>: Đốt $60 kiếm 1 khách, bao lâu lấy lại $60.</p>
    </div>

    <p className="font-bold text-slate-700 mb-2">Ví dụ tiệm nail:</p>

    <div className="overflow-x-auto my-6">
      <table className="min-w-full bg-white border border-gray-200 text-sm rounded-lg overflow-hidden shadow-sm">
        <thead className="bg-slate-800 text-white">
          <tr>
            <th className="py-3 px-4 text-left font-bold">Dịch vụ</th>
            <th className="py-3 px-4 text-left font-bold">AOV</th>
            <th className="py-3 px-4 text-left font-bold">Lãi gộp</th>
            <th className="py-3 px-4 text-left font-bold">CPA hiện tại</th>
            <th className="py-3 px-4 text-left font-bold">Payback</th>
          </tr>
        </thead>
        <tbody className="divide-y divide-gray-200">
          {[
            { dv: 'Pedi $35', aov: '$35', lai: '50% = $17.5', cpa: '$25', pb: '25 / 17.5 = 1.4 lần ghé = 2.8 tháng' },
            { dv: 'Acrylic $45', aov: '$45', lai: '50% = $22.5', cpa: '$30', pb: '30 / 22.5 = 1.3 lần ghé = 2.6 tháng' },
            { dv: 'Gel X $65', aov: '$65', lai: '55% = $35.7', cpa: '$40', pb: '40 / 35.7 = 1.1 lần ghé = 2.2 tháng' },
            { dv: 'Combo $120', aov: '$120', lai: '60% = $72', cpa: '$60', pb: '60 / 72 = 0.8 lần ghé = Hoàn vốn ngay' },
          ].map((r, i) => (
            <tr key={i} className={i % 2 === 0 ? 'bg-slate-50' : ''}>
              <td className="py-3 px-4 font-bold text-slate-700">{r.dv}</td>
              <td className="py-3 px-4 text-slate-600">{r.aov}</td>
              <td className="py-3 px-4 text-slate-600">{r.lai}</td>
              <td className="py-3 px-4 text-blue-700 font-bold">{r.cpa}</td>
              <td className="py-3 px-4 text-emerald-700 font-medium text-xs">{r.pb}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>

    <div className="bg-blue-50 border border-blue-200 rounded-xl p-4 my-4 text-sm">
      <p className="font-bold text-blue-800 mb-2">Quy tắc chủ tiệm:</p>
      <ol className="text-blue-900 space-y-1 mb-0">
        <li>1. <strong>Payback &lt; 3 tháng</strong>: All-in ngân sách. Dòng tiền khỏe</li>
        <li>2. <strong>Payback 3-6 tháng</strong>: Scale từ từ. Phải có vốn</li>
        <li>3. <strong>Payback &gt; 6 tháng</strong>: Chỉ chạy nếu LTV &gt;$500. Không thì lỗ dòng tiền</li>
      </ol>
    </div>

    <h3 className="text-2xl font-bold text-gray-900 mt-10 border-b pb-2">3. Tính CPA tối đa được phép bid – Công thức 3 bước</h3>

    <div className="space-y-4 my-6">
      <div className="border border-slate-200 rounded-xl p-5 bg-slate-50">
        <h4 className="font-bold text-slate-700 mb-2">Bước 1: Chọn Payback mục tiêu</h4>
        <p className="text-sm text-slate-600 mb-0">Tiệm nail nên chọn <strong>3 tháng</strong> = Khách quay lại 1.5 lần là hoàn vốn.</p>
      </div>
      <div className="border border-slate-200 rounded-xl p-5 bg-slate-50">
        <h4 className="font-bold text-slate-700 mb-2">Bước 2: Tính LTV 3 tháng</h4>
        <p className="text-sm text-slate-600 mb-1"><code>LTV 3 tháng = AOV x Lãi gộp % x Số lần ghé 3 tháng</code></p>
        <p className="text-sm text-slate-600 mb-0">VD Gel X: $65 x 55% x 1.5 lần = <strong>$53.6</strong></p>
      </div>
      <div className="border border-emerald-200 rounded-xl p-5 bg-emerald-50">
        <h4 className="font-bold text-emerald-800 mb-2">Bước 3: CPA max = LTV 3 tháng</h4>
        <p className="text-sm text-emerald-700 mb-0">→ Dám bid CPA <strong>$53</strong> cho khách Gel X. Hiện bạn bid $40 là quá rẻ, mất khách vào tay đối thủ.</p>
      </div>
    </div>

    <p className="font-bold text-slate-700 mb-2">Bảng CPA max cho tiệm 77084:</p>

    <div className="overflow-x-auto my-6">
      <table className="min-w-full bg-white border border-gray-200 text-sm rounded-lg overflow-hidden shadow-sm">
        <thead className="bg-slate-800 text-white">
          <tr>
            <th className="py-3 px-4 text-left font-bold">Phân khúc khách</th>
            <th className="py-3 px-4 text-left font-bold">LTV 2 năm</th>
            <th className="py-3 px-4 text-left font-bold">LTV 3 tháng</th>
            <th className="py-3 px-4 text-left font-bold">CPA max cho phép</th>
            <th className="py-3 px-4 text-left font-bold">CPA đang chạy</th>
            <th className="py-3 px-4 text-left font-bold">Hành động</th>
          </tr>
        </thead>
        <tbody className="divide-y divide-gray-200">
          {[
            { pk: 'Pedi only', ltv2: '$35x6x2x50%=$210', ltv3: '$26', max: '$26', current: '$25', action: 'Giữ', color: 'text-slate-600' },
            { pk: 'Acrylic', ltv2: '$45x6x2x50%=$270', ltv3: '$34', max: '$34', current: '$30', action: 'Tăng bid 10%', color: 'text-blue-700' },
            { pk: 'Gel X', ltv2: '$65x6x2x55%=$429', ltv3: '$54', max: '$54', current: '$40', action: 'Tăng bid 35%', color: 'text-emerald-700 font-bold' },
            { pk: 'Khách >$100/lần', ltv2: '$120x4x2x60%=$576', ltv3: '$72', max: '$72', current: '$60', action: 'Tăng bid 20%', color: 'text-blue-700' },
          ].map((r, i) => (
            <tr key={i} className={i % 2 === 0 ? 'bg-slate-50' : ''}>
              <td className="py-3 px-4 font-bold text-slate-700">{r.pk}</td>
              <td className="py-3 px-4 font-mono text-xs text-slate-600">{r.ltv2}</td>
              <td className="py-3 px-4 text-blue-700 font-bold">{r.ltv3}</td>
              <td className="py-3 px-4 text-emerald-700 font-bold">{r.max}</td>
              <td className="py-3 px-4 text-slate-600">{r.current}</td>
              <td className={`py-3 px-4 ${r.color}`}>{r.action}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>

    <div className="bg-emerald-50 border border-emerald-200 rounded-xl p-4 my-4 text-sm">
      <strong className="text-emerald-800">Kết quả</strong>: Tăng CPA Gel X từ $40 → $54 = Impression share 45% → 95%. Tháng thêm 30 khách Gel X = +$1,950 lãi.
    </div>

    <h3 className="text-2xl font-bold text-gray-900 mt-10 border-b pb-2">4. Cách lấy data tính LTV – 3 nguồn</h3>

    <div className="space-y-4 my-6">
      <div className="border border-slate-200 rounded-xl p-5 bg-slate-50">
        <h4 className="font-bold text-slate-700 mb-2">Nguồn 1: POS Square/Clover/Vagaro</h4>
        <p className="text-sm text-slate-600 mb-1">Export khách 24 tháng → Pivot Table:</p>
        <p className="text-sm font-mono text-slate-700 mb-1">Cột: SĐT | Số lần ghé | Tổng chi | Lần cuối ghé</p>
        <p className="text-sm text-slate-600 mb-0">→ Tính: Tuổi thọ = Ngày cuối - Ngày đầu. Tần suất = Số lần / Tuổi thọ năm.</p>
      </div>

      <div className="border border-slate-200 rounded-xl p-5 bg-slate-50">
        <h4 className="font-bold text-slate-700 mb-2">Nguồn 2: GA4 + Google Ads</h4>
        <p className="text-sm text-slate-600 mb-1">GA4 → Khám phá → Tạo báo cáo <code className="bg-white px-1 rounded border">User Lifetime</code></p>
        <p className="text-sm text-slate-600 mb-1">Thứ nguyên: <code className="bg-white px-1 rounded border">First user source</code> = google / cpc</p>
        <p className="text-sm text-slate-600 mb-1">Chỉ số: <code className="bg-white px-1 rounded border">LTV</code>, <code className="bg-white px-1 rounded border">Predictive purchase probability</code></p>
        <p className="text-sm text-slate-600 mb-0">→ Biết khách từ Ads ở lại bao lâu vs Facebook.</p>
      </div>

      <div className="border border-slate-200 rounded-xl p-5 bg-slate-50">
        <h4 className="font-bold text-slate-700 mb-2">Nguồn 3: Google Sheet thủ công nếu không có POS</h4>
        <p className="text-sm text-slate-600 mb-1">Mỗi ngày nhập: SĐT, Dịch vụ, $ thu. 90 ngày có đủ data. Dùng hàm:</p>
        <p className="text-sm font-mono text-emerald-700 mb-0"><code>=SUMIF(SĐT,A2,DoanhThu)</code> để ra LTV/khách.</p>
      </div>
    </div>

    <h3 className="text-2xl font-bold text-gray-900 mt-10 border-b pb-2">5. Áp dụng vào Google Ads – 3 chỗ đổi ngay</h3>

    <div className="space-y-4 my-6">
      <div className="border border-blue-200 rounded-xl p-5 bg-blue-50/30">
        <h4 className="font-bold text-blue-800 mb-2">1. Đổi chiến lược giá thầu:</h4>
        <p className="text-sm text-slate-600 mb-1">Từ tCPA $25 → <strong>tROAS 400%</strong> hoặc <strong>Maximize Conversion Value</strong></p>
        <p className="text-sm text-slate-600 mb-0">Lý do: CPA cố định làm AI sợ khách $65. tROAS cho AI tự bid $54 cho Gel X, $26 cho Pedi.</p>
      </div>

      <div className="border border-purple-200 rounded-xl p-5 bg-purple-50/30">
        <h4 className="font-bold text-purple-800 mb-2">2. Value Rules – Nâng giá trị khách xịn:</h4>
        <p className="text-sm text-slate-600 mb-1">Công cụ → Chuyển đổi → Quy tắc giá trị</p>
        <ul className="text-sm text-slate-700 space-y-1 mb-0">
          <li>Rule: Nếu <code className="bg-white px-1 rounded border">Zip = 77084</code> → Giá trị x1.2</li>
          <li>Nếu <code className="bg-white px-1 rounded border">Dịch vụ = Gel X</code> → Giá trị +$20</li>
          <li>→ AI ưu tiên khách gần + khách xịn.</li>
        </ul>
      </div>

      <div className="border border-emerald-200 rounded-xl p-5 bg-emerald-50/30">
        <h4 className="font-bold text-emerald-800 mb-2">3. Asset Group PMax tách theo LTV:</h4>
        <ul className="text-sm text-slate-700 space-y-1 mb-0">
          <li>AG1: Gel X, Combo &gt;$100. Signal = List khách chi &gt;$500/năm. tROAS 300%</li>
          <li>AG2: Pedi, Acrylic &lt;$50. Signal = Khách giá rẻ. tROAS 500%</li>
          <li>→ Tiền không đổ nhầm.</li>
        </ul>
      </div>
    </div>

    <h3 className="text-2xl font-bold text-gray-900 mt-10 border-b pb-2">6. 5 sai lầm khiến LTV tính sai, bid lỗ</h3>

    <div className="overflow-x-auto my-6">
      <table className="min-w-full bg-white border border-gray-200 text-sm rounded-lg overflow-hidden shadow-sm">
        <thead className="bg-red-700 text-white">
          <tr>
            <th className="py-3 px-4 text-left font-bold">Lỗi</th>
            <th className="py-3 px-4 text-left font-bold">Hậu quả</th>
            <th className="py-3 px-4 text-left font-bold">Cách tránh</th>
          </tr>
        </thead>
        <tbody className="divide-y divide-gray-200">
          {[
            { loi: '1. Dùng doanh thu, không dùng lãi gộp', hq: 'LTV $624 tưởng lời, bid $200. Thật ra lãi $312, lỗ $200', fix: 'Luôn x Lãi gộp 50-60%' },
            { loi: '2. Tính cả khách 1 lần', hq: 'LTV bị kéo xuống $80', fix: 'Lọc POS: Chỉ tính khách quay lại ≥2 lần' },
            { loi: '3. Không trừ chi phí Ads', hq: 'LTV $312, bid $300 vì nghĩ lời $12', fix: 'LTV $312 = Tổng lãi 2 năm. Phải để Payback 3 tháng' },
            { loi: '4. Lấy TB cả tiệm', hq: 'Pedi kéo LTV xuống, không dám bid Gel X', fix: 'Tách LTV theo dịch vụ' },
            { loi: '5. Không update 6 tháng', hq: '2024 khách quay lại 6 lần, 2026 còn 3 lần', fix: 'Tính lại LTV mỗi quý' },
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

    <h3 className="text-2xl font-bold text-gray-900 mt-10 border-b pb-2">7. Template Sheet tính LTV 5 phút cho tiệm nail</h3>

    <p className="text-sm text-slate-600 mb-3">Tạo Google Sheet 4 cột:</p>

    <div className="overflow-x-auto my-4">
      <table className="min-w-full bg-white border border-gray-200 text-xs rounded-lg overflow-hidden shadow-sm">
        <thead className="bg-slate-700 text-white">
          <tr>
            {['SĐT', 'Ngày đầu', 'Ngày cuối', 'Tổng chi', 'Số lần', 'Tuổi thọ ngày', 'Tần suất/năm', 'LTV'].map((h) => (
              <th key={h} className="py-2 px-3 text-left font-bold">{h}</th>
            ))}
          </tr>
        </thead>
        <tbody>
          <tr>
            <td className="py-2 px-3 font-mono">281...</td>
            <td className="py-2 px-3">1/1/24</td>
            <td className="py-2 px-3">1/9/26</td>
            <td className="py-2 px-3">840</td>
            <td className="py-2 px-3">14</td>
            <td className="py-2 px-3">974</td>
            <td className="py-2 px-3 font-mono text-emerald-700">=14/(974/365)</td>
            <td className="py-2 px-3 font-mono text-emerald-700">=D2</td>
          </tr>
        </tbody>
      </table>
    </div>

    <div className="bg-slate-50 border border-slate-200 rounded-xl p-4 my-4 text-sm">
      <p className="font-bold text-slate-700 mb-2">Công thức:</p>
      <ul className="font-mono text-slate-700 space-y-1 mb-2">
        <li>Tuổi thọ = <code>=DATEDIF(B2,C2,"D")</code></li>
        <li>Tần suất = <code>=E2/(F2/365)</code></li>
        <li>LTV gộp = <code>=D2</code></li>
        <li>LTV ròng = <code>=D2*0.5</code></li>
      </ul>
      <p className="text-slate-600 mb-0">Kéo xuống 1000 khách → <code>=AVERAGE(H:H)</code> ra LTV TB. Lọc <code>Dịch vụ</code> để ra LTV Gel X riêng.</p>
    </div>

    <h3 className="text-2xl font-bold text-gray-900 mt-10 border-b pb-2">8. Checklist ra quyết định bid</h3>

    <p className="text-sm text-slate-600 mb-3">Trước khi tăng CPA, tick đủ 5 ô:</p>

    <InteractiveChecklist
      id="chk51"
      title="Checklist Bài 51 – Quyết định bid theo LTV"
      tasks={[
        'LTV ròng 2 năm > 6x CPA hiện tại',
        'Payback < 3 tháng với CPA mới',
        'Dòng tiền: Đủ tiền chịu 3 tháng hoàn vốn',
        'LTV theo dịch vụ: CPA Gel X tính riêng, không gộp Pedi',
        'Theo dõi 14 ngày: Tăng CPA, ROAS vẫn >300% thì giữ',
      ]}
    />

    <div className="bg-amber-50 border-l-4 border-amber-400 p-5 rounded-r-xl my-6">
      <p className="font-bold text-amber-800 mb-2">Chốt Bài 51:</p>
      <p className="text-amber-900 text-sm mb-1">Bid theo giá bán = Chết chậm. Bid theo LTV = Giàu chậm mà chắc.</p>
      <p className="text-amber-900 text-sm mb-1"><strong>Công thức</strong>: <code>CPA max = AOV x Lãi gộp % x Số lần ghé 3 tháng</code>.</p>
      <p className="text-amber-900 text-sm mb-0"><strong>Quy tắc 3-6-2</strong>: Payback 3 tháng, Tần suất 6 lần/năm, Tuổi thọ 2 năm = Công thức vàng tiệm nail.</p>
    </div>

    <div className="bg-blue-50 border border-blue-200 rounded-xl p-4 my-4 text-sm">
      <p className="font-bold text-blue-800 mb-1">Mẹo cuối</p>
      <p className="text-blue-900 mb-0">Vào GA4 → Dự đoán → <code>Predicted LTV</code>. GA4 báo khách từ Ads LTV $450 vs Facebook $200 → Dám bid Ads gấp đôi.</p>
    </div>

    <div className="bg-slate-50 border border-slate-200 rounded-xl p-4 my-4 text-sm">
      <strong className="text-slate-700">Bài tập</strong>: Mở POS, lấy 20 khách gần nhất. Tính LTV TB. Comment 3 số: AOV, Tần suất/năm, LTV 2 năm. Mình tính CPA max cho bạn.
    </div>
  </div>
);
