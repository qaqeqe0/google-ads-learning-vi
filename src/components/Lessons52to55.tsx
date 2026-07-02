import React from 'react';
import { InteractiveChecklist } from './InteractiveChecklist';

// ─── Bài 52: TMĐT – PMax + Shopping + Voucher ────────────────────────────────
export const Lesson52Content = () => (
  <div className="prose prose-blue max-w-none text-gray-800">
    <h3 className="text-2xl font-bold text-gray-900 border-b pb-2">
      Bài 52: TMĐT – PMax + Shopping + Voucher, tối ưu theo ROAS từng ngành hàng
    </h3>

    <p>
      <strong>Vấn đề TMĐT nail supplies</strong>: Bán Kupa Drill $189 lãi $40 vs Bán Acrylic $15 lãi $3.
      Chạy chung 1 camp PMax tROAS 400% → AI tắt Drill vì ROAS 300%, đẩy Acrylic ROAS 600% nhưng lãi $3.
      <strong> Doanh thu tăng, lãi giảm</strong>.
    </p>
    <p>
      <strong>Giải pháp</strong>: Tách ngành hàng theo biên lợi nhuận → Gán tROAS riêng → Dùng Voucher kéo AOV.
    </p>

    <h4 className="text-lg font-bold text-gray-800 mt-6">1. Công thức TMĐT lời = ROAS x Biên lợi nhuận</h4>

    <div className="overflow-x-auto my-4">
      <table className="w-full text-sm border-collapse">
        <thead className="bg-slate-800 text-white">
          <tr>
            <th className="p-3 text-left">Ngành hàng nail</th>
            <th className="p-3 text-left">Giá bán</th>
            <th className="p-3 text-left">Giá vốn</th>
            <th className="p-3 text-left">Lãi gộp</th>
            <th className="p-3 text-left">Biên LN</th>
            <th className="p-3 text-left">tROAS hòa vốn</th>
            <th className="p-3 text-left">tROAS mục tiêu</th>
          </tr>
        </thead>
        <tbody>
          {[
            ['Máy mài Kupa', '$189', '$149', '$40', '21%', '476% = 100/21', '600%'],
            ['Đèn Gel LED', '$89', '$60', '$29', '32%', '312%', '450%'],
            ['Bột Acrylic 2oz', '$15', '$8', '$7', '46%', '217%', '300%'],
            ['Gift Card', '$50', '$50', '$0', '0%', 'Không chạy Ads', '0%'],
          ].map(([name, price, cost, profit, margin, breakeven, target], i) => (
            <tr key={i} className={i % 2 === 0 ? 'bg-white' : 'bg-slate-50'}>
              <td className="p-3 font-medium">{name}</td>
              <td className="p-3">{price}</td>
              <td className="p-3">{cost}</td>
              <td className="p-3 font-bold text-emerald-700">{profit}</td>
              <td className="p-3 font-bold text-blue-700">{margin}</td>
              <td className="p-3">{breakeven}</td>
              <td className="p-3 font-bold text-purple-700">{target}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>

    <p>
      <strong>tROAS hòa vốn = 100 / Biên lợi nhuận</strong>. Dưới số này = Lỗ.
    </p>
    <p>
      <strong>Sai lầm 99% shop</strong>: Đặt tROAS 400% cho tất cả. Kết quả Drill lỗ, Acrylic lời ít.
    </p>

    <h4 className="text-lg font-bold text-gray-800 mt-6">2. Cấu trúc 3 camp chuẩn cho shop nail supplies {'>'}100 SKU</h4>

    <p><strong>Không gộp 1 PMax</strong>. Tách theo lãi:</p>

    <div className="overflow-x-auto my-4">
      <table className="w-full text-sm border-collapse">
        <thead className="bg-slate-800 text-white">
          <tr>
            <th className="p-3 text-left">#</th>
            <th className="p-3 text-left">Campaign</th>
            <th className="p-3 text-left">Ngành hàng</th>
            <th className="p-3 text-left">Lãi gộp TB</th>
            <th className="p-3 text-left">tROAS đặt</th>
            <th className="p-3 text-left">Ngân sách</th>
            <th className="p-3 text-left">Mục đích</th>
          </tr>
        </thead>
        <tbody>
          {[
            ['1. PMax_High Margin', 'Drill, Máy hơ, Combo Kit', '{">"}$30/SP', '600%', '60% tiền', 'Lấy lợi nhuận'],
            ['2. PMax_Mid Margin', 'Đèn, Cọ, Dũa điện', '$15-30/SP', '400%', '30% tiền', 'Nuôi dòng tiền'],
            ['3. Standard Shopping_Low', 'Acrylic, Liquid, Tips', '{"<"}$15/SP', '250%', '10% tiền', 'Kéo traffic, upsell'],
          ].map(([camp, items, margin, roas, budget, purpose], i) => (
            <tr key={i} className={i % 2 === 0 ? 'bg-white' : 'bg-slate-50'}>
              <td className="p-3 font-bold text-blue-700">{camp}</td>
              <td className="p-3">{items}</td>
              <td className="p-3">{margin}</td>
              <td className="p-3 font-bold text-purple-700">{roas}</td>
              <td className="p-3">{budget}</td>
              <td className="p-3">{purpose}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>

    <p><strong>Vì sao Low dùng Standard Shopping</strong>:</p>
    <ol className="list-decimal pl-6 space-y-1">
      <li><strong>Kiểm soát bid</strong>: Acrylic CPC $0.2 mới lời. PMax tự bid $1 = Lỗ</li>
      <li><strong>Chạy Voucher</strong>: Standard Shopping hiện <code>Special offer</code>. PMax không hiện</li>
      <li><strong>Loại trừ</strong>: Dễ loại SP lỗ. PMax khó loại</li>
    </ol>

    <h4 className="text-lg font-bold text-gray-800 mt-6">3. 5 bước setup PMax_High Margin – Nhóm lãi $40/SP</h4>

    <div className="space-y-3 my-4">
      {[
        {
          step: 'Bước 1: Tạo Nhãn tùy chỉnh trong Feed',
          body: 'Merchant Center → Sản phẩm → Feed → Thêm cột custom_label_0. Quy tắc: Nếu price > 150 VÀ brand = Kupa → Gán margin_high. Nếu product_type chứa Kit → Gán margin_high.',
        },
        {
          step: 'Bước 2: Tạo PMax → Asset Group',
          body: 'AG1: Kupa Drill | AG2: Combo Kit. Tín hiệu: List 1000 khách mua >$150 + Custom: "kupa drill", "nail drill professional".',
        },
        {
          step: 'Bước 3: Danh sách sản phẩm',
          body: 'Vào Cài đặt nhóm → Danh sách → Chỉ chọn custom_label_0 = margin_high → PMax này chỉ chạy SP lãi cao. Không đốt tiền cho Acrylic.',
        },
        {
          step: 'Bước 4: Đặt tROAS',
          body: 'Chạy Max Value 14 ngày ra 30 conv. Sau đó tROAS = 600%. Nếu ROAS thật 800% → Hạ tROAS 500% để scale. Nếu 400% → Giữ, tối ưu asset.',
        },
        {
          step: 'Bước 5: Loại trừ từ khóa rác cấp tài khoản',
          body: 'Công cụ → Danh sách phủ định → Thêm "cheap", "free", "diy", "under 50", "amazon". → Chặn khách tìm hàng rẻ, không mua Drill $189.',
        },
      ].map(({ step, body }, i) => (
        <div key={i} className="bg-blue-50 border border-blue-200 rounded-lg p-4">
          <div className="font-bold text-blue-800 mb-1">{step}</div>
          <div className="text-sm text-blue-700">{body}</div>
        </div>
      ))}
    </div>

    <h4 className="text-lg font-bold text-gray-800 mt-6">4. Voucher – Vũ khí tăng AOV 40% cho ngành Low Margin</h4>

    <p>
      <strong>Vấn đề Acrylic $15</strong>: CPC $0.3, CVR 3% → CPA $10. Lãi $7. Lỗ $3.
    </p>
    <p>
      <strong>Dùng Voucher</strong>: <code>Mua 3 tặng 1</code> hoặc <code>Giảm $5 cho đơn {'>'} $45</code>
    </p>
    <p>AOV từ $15 → $45. Lãi từ $7 → $21. CPA $10 vẫn lời $11.</p>

    <p className="mt-3"><strong>3 loại Voucher chạy với Shopping</strong>:</p>
    <div className="overflow-x-auto my-4">
      <table className="w-full text-sm border-collapse">
        <thead className="bg-slate-800 text-white">
          <tr>
            <th className="p-3 text-left">Loại</th>
            <th className="p-3 text-left">Setup ở đâu</th>
            <th className="p-3 text-left">Hiện sao</th>
            <th className="p-3 text-left">Dùng cho</th>
            <th className="p-3 text-left">Lưu ý</th>
          </tr>
        </thead>
        <tbody>
          {[
            ['1. Khuyến mãi', 'Merchant Center → Marketing → Khuyến mãi', '"Special offer" + Giá gạch', 'Đơn >$45 giảm $5', 'Duyệt 24h. Phải khớp web'],
            ['2. Giá ưu đãi', 'Feed: cột sale_price < price', 'Giá gốc gạch ngang', 'Clear hàng', 'sale_price hết hạn tự về giá cũ'],
            ['3. Free Ship', 'GMC → Vận chuyển → Ngưỡng $50 Free Ship', '"Free shipping"', 'Tăng AOV', 'Bắt buộc nếu đối thủ có'],
          ].map((row, i) => (
            <tr key={i} className={i % 2 === 0 ? 'bg-white' : 'bg-slate-50'}>
              {row.map((cell, j) => (
                <td key={j} className={`p-3 ${j === 0 ? 'font-bold text-blue-700' : ''}`}>{cell}</td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>

    <div className="bg-amber-50 border border-amber-200 rounded-lg p-4 my-4">
      <p className="font-bold text-amber-800">Công thức Voucher không lỗ:</p>
      <p className="text-sm text-amber-700 mt-1">
        <code>Giá trị voucher {'<'} Lãi gộp tăng thêm</code>
      </p>
      <p className="text-sm text-amber-700 mt-1">
        VD: Khách mua 1 hũ lãi $7. Voucher "Mua 3 tặng 1" → Bán 3 hũ lãi $21, tặng 1 hũ vốn $8 → Lãi $13. Voucher $8 {'<'} $14 tăng thêm → OK.
      </p>
    </div>

    <h4 className="text-lg font-bold text-gray-800 mt-6">5. Tối ưu theo ROAS từng ngành hàng – 4 báo cáo phải xem</h4>

    <div className="space-y-3 my-4">
      {[
        {
          title: 'Báo cáo 1: Nhóm sản phẩm trong PMax',
          body: 'Vào PMax → Nhóm sản phẩm → Phân đoạn: custom_label_0. Xem margin_high ROAS 650%, margin_mid ROAS 380%. Nếu margin_high <500% → Check asset, signal. Nếu margin_mid >500% → Tăng tiền.',
        },
        {
          title: 'Báo cáo 2: Báo cáo mặt hàng Shopping',
          body: 'Chiến dịch Shopping → Sản phẩm → Bộ lọc: Chi phí > $50. Sort ROAS tăng dần. SP ROAS <200% → Loại trừ. SP ROAS >400% → Tăng bid.',
        },
        {
          title: 'Báo cáo 3: Cụm từ tìm kiếm theo nhãn',
          body: 'Chiến dịch → Thông tin chi tiết → Cụm từ tìm kiếm → Thêm cột custom_label_0. Thấy "kupa drill" ra 80% conv cho margin_high → Tạo Search camp riêng. Thấy "acrylic powder cheap" ROAS 150% → Phủ định "cheap".',
        },
        {
          title: 'Báo cáo 4: Hiệu suất Voucher',
          body: 'GMC → Hiệu suất → Khuyến mãi → Xem Lượt click + CTR. Voucher "Giảm $5" CTR 8% vs không có 3% → Giữ. CTR <4% → Đổi "Mua 2 tặng 1".',
        },
      ].map(({ title, body }, i) => (
        <div key={i} className="bg-slate-50 border border-slate-200 rounded-lg p-4">
          <div className="font-bold text-slate-800 mb-1">{title}</div>
          <div className="text-sm text-slate-600">{body}</div>
        </div>
      ))}
    </div>

    <h4 className="text-lg font-bold text-gray-800 mt-6">6. 5 lỗi đốt tiền khi chạy TMĐT gộp ngành hàng</h4>

    <div className="overflow-x-auto my-4">
      <table className="w-full text-sm border-collapse">
        <thead className="bg-slate-800 text-white">
          <tr>
            <th className="p-3 text-left">Lỗi</th>
            <th className="p-3 text-left">Hậu quả</th>
            <th className="p-3 text-left">Sửa sao</th>
          </tr>
        </thead>
        <tbody>
          {[
            ['1. 1 PMax cho 500 SKU', 'AI tắt Drill lãi $40, đẩy Tips lãi $1', 'Tách 3 camp theo margin như mục 2'],
            ['2. tROAS 400% cho tất cả', 'Drill hòa vốn 476% → Lỗ, vẫn chạy', 'Đặt tROAS = 100/Biên LN + 50%'],
            ['3. Không có Voucher cho Low', 'Acrylic CPA $10, lãi $7. Lỗ', 'Bắt buộc "Mua 3", "Đơn $45"'],
            ['4. Feed không có custom_label', 'Không tách được lãi cao/thấp', 'Thêm custom_label_0 ngay'],
            ['5. Đổ tiền Search từ khóa thông tin', '"how to use nail drill" CPC $1, 0 đơn', 'Phủ định "how to", "tutorial", "review" ở PMax + Search'],
          ].map((row, i) => (
            <tr key={i} className={i % 2 === 0 ? 'bg-white' : 'bg-red-50'}>
              <td className="p-3 font-bold text-red-700">{row[0]}</td>
              <td className="p-3 text-red-600">{row[1]}</td>
              <td className="p-3 text-emerald-700">{row[2]}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>

    <h4 className="text-lg font-bold text-gray-800 mt-6">7. Checklist triển khai TMĐT 1 ngày</h4>
    <ol className="list-decimal pl-6 space-y-2 my-3">
      <li><strong>Tính biên LN</strong>: Xuất Sheet 100 SKU → Tính <code>Lãi gộp %</code> → Chia 3 nhóm High/Mid/Low</li>
      <li><strong>Gắn nhãn Feed</strong>: GMC → Thêm <code>custom_label_0</code> = <code>high</code>, <code>mid</code>, <code>low</code></li>
      <li><strong>Tạo 3 camp</strong>: 2 PMax High+Mid tROAS 600%+400%, 1 Shopping Low tCPA $8</li>
      <li><strong>Tạo Voucher</strong>: GMC → Khuyến mãi → <code>Đơn {'>'} $45 giảm $5</code> + <code>Mua 3 Acrylic tặng 1</code></li>
      <li><strong>Loại trừ</strong>: Danh sách phủ định <code>cheap</code>, <code>free</code>, <code>amazon</code>, <code>diy</code></li>
      <li><strong>Tín hiệu</strong>: PMax High nạp list khách mua {'>'} $100. PMax Mid nạp khách $30-100</li>
      <li><strong>Báo cáo</strong>: Looker kéo ROAS theo <code>custom_label_0</code>. Thấp hơn target = Tắt nhóm đó</li>
    </ol>

    <div className="bg-blue-900 text-white rounded-xl p-5 my-6">
      <p className="font-bold text-lg mb-2">Chốt Bài 52</p>
      <p>TMĐT không phải ROAS càng cao càng tốt. <strong>Lãi = ROAS x Biên LN</strong>.</p>
      <p className="mt-2"><strong>Công thức</strong>: <code>Tách camp theo lãi + tROAS riêng + Voucher kéo AOV = ROAS 300% vẫn lãi hơn ROAS 800%</code>.</p>
      <p className="mt-2"><strong>Quy tắc 21%</strong>: Biên LN {'<'} 21% thì tROAS phải {'>'} 476% mới sống. Không đạt thì đừng chạy Ads, chạy TikTok organic.</p>
      <p className="mt-2 text-blue-200 text-sm"><strong>Mẹo cuối</strong>: Vào Báo cáo → Trước/Sau. So 30 ngày trước khi tách camp vs sau. Nếu Lãi gộp tăng 30% dù ROAS giảm → Đúng đường.</p>
      <p className="mt-2 text-blue-200 text-sm"><strong>Bài tập</strong>: Lấy 10 SKU bán chạy. Tính Biên LN. Comment 3 SKU <code>margin_high</code> + tROAS bạn sẽ đặt. Mình check có lỗ không.</p>
    </div>

    <InteractiveChecklist
      id="chk52"
      title="Checklist Bài 52 – TMĐT PMax + Shopping + Voucher"
      tasks={[
        'Tính Biên LN% cho 100 SKU, phân nhóm High/Mid/Low',
        'Gắn custom_label_0 vào Feed GMC',
        'Tạo 3 camp riêng: PMax High (tROAS 600%), PMax Mid (400%), Shopping Low',
        'Tạo Voucher: "Đơn >$45 giảm $5" và "Mua 3 tặng 1"',
        'Thiết lập danh sách phủ định: cheap, free, amazon, diy',
        'Xem báo cáo ROAS theo custom_label sau 14 ngày',
      ]}
    />
  </div>
);

// ─── Bài 53: BĐS/Spa/Bảo hiểm – Lead Form Ads + Offline Conversion Import ────
export const Lesson53Content = () => (
  <div className="prose prose-blue max-w-none text-gray-800">
    <h3 className="text-2xl font-bold text-gray-900 border-b pb-2">
      Bài 53: BĐS/Spa/Bảo hiểm – Lead Form Ads + Gọi điện + Offline Conversion Import
    </h3>

    <p>
      <strong>Đặc thù ngành</strong>: Khách không mua online. Hành trình: Thấy ads → Điền form/Gọi → Tư vấn 7-30 ngày → Chốt offline → Trả tiền mặt/CK.
    </p>
    <p>
      <strong>Vấn đề</strong>: Google Ads chỉ thấy Form, không thấy Chốt. AI tối ưu ra 100 lead rác $5, 0 khách thật.
    </p>
    <p>
      <strong>Giải pháp</strong>: <code>Lead Form Ads hút lead + Call Tracking đo gọi + Offline Import báo ai chốt</code>. AI học ra tiền thật.
    </p>

    <h4 className="text-lg font-bold text-gray-800 mt-6">1. Vì sao 90% camp BĐS/Spa lỗ – Thiếu 2 mắt xích</h4>

    <div className="overflow-x-auto my-4">
      <table className="w-full text-sm border-collapse">
        <thead className="bg-slate-800 text-white">
          <tr>
            <th className="p-3 text-left">Mắt xích</th>
            <th className="p-3 text-left">Nếu thiếu</th>
            <th className="p-3 text-left">Hậu quả</th>
          </tr>
        </thead>
        <tbody>
          {[
            ['1. Lead chất lượng', 'Chạy form web dài, khách lười điền', '100% lead số sai, email ảo'],
            ['2. Tracking cuộc gọi', 'Không biết gọi nào từ Ads', '50% doanh thu vô hình, AI tưởng Ads dở'],
            ['3. Offline Conversion', 'Không báo Google ai chốt cọc $50tr', 'AI tối ưu ra lead hỏi giá, không ra người mua'],
          ].map((row, i) => (
            <tr key={i} className={i % 2 === 0 ? 'bg-white' : 'bg-red-50'}>
              <td className="p-3 font-bold text-blue-700">{row[0]}</td>
              <td className="p-3 text-slate-600">{row[1]}</td>
              <td className="p-3 text-red-600">{row[2]}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>

    <p className="text-emerald-700 font-medium">
      <strong>Chốt</strong>: Đủ 3 mắt xích = CPA giảm 50%, AI tìm khách mua nhà/spa $5tr thay vì khách hỏi dạo.
    </p>

    <h4 className="text-lg font-bold text-gray-800 mt-6">2. Mắt xích 1: Lead Form Ads – Form 5s, tỷ lệ điền 25%</h4>

    <p>
      <strong>Lead Form = Form hiện ngay trên Google/FB, tự điền SĐT/Email</strong>. Khách không vào web.
    </p>

    <p><strong>Setup 5 phút cho Spa/Nail cao cấp</strong>:</p>
    <ol className="list-decimal pl-6 space-y-2 my-3">
      <li><strong>Tạo Chiến dịch → Khách hàng tiềm năng</strong> → Mục tiêu: Gửi biểu mẫu</li>
      <li>
        <strong>Tiện ích biểu mẫu</strong>: Tiêu đề: <code>Đặt lịch Gel X giảm $15</code><br />
        Mô tả: <code>Chỉ 30 suất tuần này. Tiệm 77084. Chuyên viên 10 năm.</code>
      </li>
      <li><strong>Câu hỏi</strong>: Chỉ 3 trường: Tên, SĐT, Dịch vụ muốn làm. Càng ngắn càng nhiều lead</li>
      <li><strong>Chính sách bảo mật</strong>: Dán link Privacy web. Bắt buộc</li>
      <li><strong>Trang cảm ơn</strong>: <code>Cảm ơn! Chúng tôi gọi lại trong 10 phút. Bấm gọi ngay: 281-xxx</code></li>
    </ol>

    <div className="bg-amber-50 border border-amber-200 rounded-lg p-4 my-4">
      <p className="font-bold text-amber-800">Mẹo BĐS/Bảo hiểm</p>
      <p className="text-sm text-amber-700 mt-1">
        Thêm câu hỏi <code>Ngân sách?</code> 3 lựa chọn: <code>{'<'}2 tỷ</code>, <code>2-5 tỷ</code>, <code>{'>'}5 tỷ</code>. Lead tự phân loại. AI học khách {'>'} 5 tỷ.
      </p>
    </div>

    <p className="bg-emerald-50 border border-emerald-200 rounded-lg p-3 text-sm text-emerald-700">
      <strong>Kết quả</strong>: CPC $3, tỷ lệ điền 22%. 100 click = 22 lead. Web thường 100 click = 3 lead.
    </p>

    <h4 className="text-lg font-bold text-gray-800 mt-6">3. Mắt xích 2: Tracking cuộc gọi – Đo 50% doanh thu bị mất</h4>

    <p>50% khách spa/BĐS không điền form, chỉ gọi. Không track = AI mù 50%.</p>

    <p><strong>3 cách track – Chọn theo ngân sách</strong>:</p>
    <div className="overflow-x-auto my-4">
      <table className="w-full text-sm border-collapse">
        <thead className="bg-slate-800 text-white">
          <tr>
            <th className="p-3 text-left">Cách</th>
            <th className="p-3 text-left">Giá</th>
            <th className="p-3 text-left">Setup</th>
            <th className="p-3 text-left">Đo được gì</th>
            <th className="p-3 text-left">Cho ai</th>
          </tr>
        </thead>
        <tbody>
          {[
            ['1. Số chuyển tiếp Google', 'Free', 'Tiện ích cuộc gọi → Dùng số Google', 'Gọi từ ads, thời gian gọi, >60s = conv', 'Tiệm nail $0. 5 phút xong'],
            ['2. CallRail/WhatConverts', '$30/tháng', 'Gắn code, thay số trên web theo nguồn', 'Ghi âm, nguồn: Ads/SEO, tag "Khách VIP"', 'Spa/BĐS $500/ngày. Cần nghe lại tư vấn'],
            ['3. Tổng đài ảo Stringee', '$50/tháng', 'Số 1900, 1800 riêng cho Ads', 'CRM mini, chia cho sale, báo cáo', 'Bảo hiểm 5 sale'],
          ].map((row, i) => (
            <tr key={i} className={i % 2 === 0 ? 'bg-white' : 'bg-slate-50'}>
              <td className="p-3 font-bold text-blue-700">{row[0]}</td>
              <td className="p-3 font-bold text-emerald-700">{row[1]}</td>
              <td className="p-3">{row[2]}</td>
              <td className="p-3">{row[3]}</td>
              <td className="p-3 italic text-slate-500">{row[4]}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>

    <p><strong>Quy tắc</strong>: Gọi {'>'} 60s = Chuyển đổi. Vì 60% gọi {'>'} 60s thành booking. Gán giá trị $25 như Bài 45.</p>

    <div className="bg-slate-50 border border-slate-200 rounded-lg p-4 my-4">
      <p className="font-bold text-slate-700 mb-2">Setup Google Free:</p>
      <p className="text-sm text-slate-600">
        Cài đặt → Tiện ích → Cuộc gọi → Bật "Báo cáo cuộc gọi" → "Đếm cuộc gọi là chuyển đổi khi {'>'} 60s". Xong.
      </p>
    </div>

    <h4 className="text-lg font-bold text-gray-800 mt-6">4. Mắt xích 3: Offline Conversion Import – Báo Google ai cọc tiền</h4>

    <p>
      <strong>Nguyên lý</strong>: Khách điền form có GCLID. Sale chốt cọc, nhập CRM. 24h sau upload CRM lên Google. Google thấy GCLID này ra $50tr → AI tìm người giống vậy.
    </p>

    <p><strong>4 bước làm 1 lần/ngày</strong>:</p>

    <div className="space-y-3 my-4">
      <div className="bg-blue-50 border border-blue-200 rounded-lg p-4">
        <p className="font-bold text-blue-800">Bước 1: Lấy GCLID</p>
        <p className="text-sm text-blue-700 mt-1">
          Lead Form Ads tự có GCLID. Tải lead về: Chiến dịch → Biểu mẫu → Tải xuống.<br />
          Web: Thêm code lưu GCLID vào form ẩn. Google: <code>gclid form hidden field</code>
        </p>
        <p className="text-sm text-blue-600 mt-1">Sheet lead sẽ có cột: <code>GCLID</code>, <code>SĐT</code>, <code>Ngày</code></p>
      </div>

      <div className="bg-blue-50 border border-blue-200 rounded-lg p-4">
        <p className="font-bold text-blue-800">Bước 2: CRM/Sheet sale – Sale gọi, update Sheet:</p>
        <div className="overflow-x-auto mt-2">
          <table className="text-xs border-collapse w-full">
            <thead className="bg-blue-800 text-white">
              <tr>
                {['GCLID', 'SĐT', 'Tên', 'Ngày form', 'Ngày chốt', 'Giá trị cọc', 'Giai đoạn'].map(h => (
                  <th key={h} className="p-2 text-left">{h}</th>
                ))}
              </tr>
            </thead>
            <tbody>
              <tr className="bg-white">
                <td className="p-2 font-mono">CjwK...</td>
                <td className="p-2">281...</td>
                <td className="p-2">Lan</td>
                <td className="p-2">2026-06-01</td>
                <td className="p-2">2026-06-10</td>
                <td className="p-2 font-bold text-emerald-700">50,000,000</td>
                <td className="p-2 font-bold text-emerald-700">Đã cọc</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>

      <div className="bg-blue-50 border border-blue-200 rounded-lg p-4">
        <p className="font-bold text-blue-800">Bước 3: Tạo chuyển đổi Offline</p>
        <p className="text-sm text-blue-700 mt-1">
          Google Ads → Công cụ → Chuyển đổi → + → Nhập → Chọn <code>Nhập từ lượt click</code> → Tên: <code>Coc_BDS_50tr</code> → Giá trị: <code>Dùng giá trị từ file</code>
        </p>
      </div>

      <div className="bg-blue-50 border border-blue-200 rounded-lg p-4">
        <p className="font-bold text-blue-800">Bước 4: Upload hàng ngày</p>
        <p className="text-sm text-blue-700 mt-1">
          Công cụ → Chuyển đổi → Tải lên → Kéo Sheet có 4 cột bắt buộc: <code>Google Click ID</code>, <code>Conversion Name</code>, <code>Conversion Time</code>, <code>Conversion Value</code>.<br />
          Lên lịch: 3am hàng ngày.
        </p>
        <p className="text-sm text-blue-600 mt-1">
          <strong>Sau 7 ngày</strong>: Vào Chiến dịch → Phân đoạn → Chuyển đổi → Thấy cột <code>Coc_BDS_50tr</code>. CPA tính theo cọc thật. AI học khách cọc.
        </p>
      </div>
    </div>

    <h4 className="text-lg font-bold text-gray-800 mt-6">5. Flow hoàn chỉnh cho BĐS/Spa $1000/ngày</h4>

    <ol className="list-decimal pl-6 space-y-2 my-3">
      <li><strong>Ads</strong>: Search <code>mua chung cu 77084</code> + Lead Form <code>Nhận báo giá</code>. PMax + Call Only</li>
      <li><strong>Lead</strong>: Về Sheet tự động qua Zapier. GCLID đi kèm. Zapier báo Telegram cho sale</li>
      <li><strong>Sale</strong>: Gọi trong 5 phút. Update Sheet: <code>Không nghe</code>, <code>Hẹn xem nhà</code>, <code>Đã cọc 50tr</code></li>
      <li><strong>3am</strong>: Script tự upload GCLID <code>Đã cọc</code> lên Google</li>
      <li><strong>AI</strong>: Thấy 10 GCLID cọc 50tr đều search <code>chung cu 2pn</code>, tuổi 35-44, 9pm online → Dồn 80% tiền vào tệp đó</li>
      <li><strong>30 ngày sau</strong>: CPA lead $50, CPA cọc $800. BĐS lời $200tr/căn → ROAS 250x</li>
    </ol>

    <h4 className="text-lg font-bold text-gray-800 mt-6">6. 3 mẫu chiến dịch cho 3 ngành</h4>

    <div className="overflow-x-auto my-4">
      <table className="w-full text-sm border-collapse">
        <thead className="bg-slate-800 text-white">
          <tr>
            <th className="p-3 text-left">Ngành</th>
            <th className="p-3 text-left">Camp 1: Lead Form</th>
            <th className="p-3 text-left">Camp 2: Call Only</th>
            <th className="p-3 text-left">Camp 3: PMax Offline</th>
            <th className="p-3 text-left">Lưu ý</th>
          </tr>
        </thead>
        <tbody>
          {[
            ['Spa/Nail cao cấp', '"Giảm $20 Gel X" form 3 trường', 'Giờ 10am-7pm, bid +50%', 'Signal: List khách cũ $200', 'Import conv "Khach_den_tiem"'],
            ['BĐS', '"Bảng giá 77084" form hỏi Ngân sách', 'Giờ 8am-10pm, chỉ mobile', 'Signal: URL batdongsan.com.vn', 'Import conv "Coc_50tr", "Ky_HD_2ty"'],
            ['Bảo hiểm', '"Báo giá BH Nhân thọ 1 phút"', '24/7, số 1800', 'Signal: In-market Insurance', 'Import conv "Ky_Hop_Dong_20tr"'],
          ].map((row, i) => (
            <tr key={i} className={i % 2 === 0 ? 'bg-white' : 'bg-slate-50'}>
              <td className="p-3 font-bold text-blue-700">{row[0]}</td>
              {row.slice(1).map((cell, j) => <td key={j} className="p-3 text-sm">{cell}</td>)}
            </tr>
          ))}
        </tbody>
      </table>
    </div>

    <h4 className="text-lg font-bold text-gray-800 mt-6">7. 5 lỗi đốt tiền khi chạy lead ngành offline</h4>

    <div className="overflow-x-auto my-4">
      <table className="w-full text-sm border-collapse">
        <thead className="bg-slate-800 text-white">
          <tr>
            <th className="p-3 text-left">Lỗi</th>
            <th className="p-3 text-left">Hậu quả</th>
            <th className="p-3 text-left">Fix</th>
          </tr>
        </thead>
        <tbody>
          {[
            ['1. Không import offline', 'AI tối ưu lead $2, 0 khách mua', 'Bắt buộc upload. 1 tuần/lần cũng được'],
            ['2. Form 10 câu hỏi', 'Tỷ lệ điền 2%', 'Max 3 câu. Hỏi sau khi gọi'],
            ['3. Sale không update CRM', 'Google không biết ai cọc', 'Trả thưởng sale $50/lead cọc họ nhập'],
            ['4. GCLID hết hạn 90 ngày', 'Khách 100 ngày sau cọc → Không track', 'Khách BĐS lâu: Dùng "Enhanced Conversion for Leads" track bằng email'],
            ['5. Đếm lead = đếm đơn', 'Báo cáo 100 lead, sếp tưởng 100 đơn', 'Tạo cột "Lead" và "Khach_Coc" riêng trong Looker'],
          ].map((row, i) => (
            <tr key={i} className={i % 2 === 0 ? 'bg-white' : 'bg-red-50'}>
              <td className="p-3 font-bold text-red-700">{row[0]}</td>
              <td className="p-3 text-red-600">{row[1]}</td>
              <td className="p-3 text-emerald-700">{row[2]}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>

    <h4 className="text-lg font-bold text-gray-800 mt-6">8. Enhanced Conversions for Leads – Không có GCLID vẫn track</h4>

    <p>Dành cho BĐS 6 tháng mới cọc, GCLID chết.</p>
    <ol className="list-decimal pl-6 space-y-2 my-3">
      <li><strong>Web</strong>: Gắn code gửi email/SĐT hash khi submit form</li>
      <li><strong>6 tháng sau</strong>: Khách cọc. Upload file có <code>Email</code>, <code>SĐT</code>, <code>Thời gian cọc</code>, <code>Giá trị</code></li>
      <li><strong>Google</strong>: So email hash → Khớp với click 6 tháng trước → Gán conv</li>
    </ol>
    <p><strong>Setup</strong>: Công cụ → Chuyển đổi → Cải tiến → Bật "Khách hàng tiềm năng nâng cao"</p>

    <div className="bg-blue-900 text-white rounded-xl p-5 my-6">
      <p className="font-bold text-lg mb-2">Chốt Bài 53</p>
      <p>BĐS/Spa không bán click, bán lead, bán cuộc gọi, bán cọc.</p>
      <p className="mt-2"><strong>Công thức</strong>: <code>Lead Form Ads + Số track + Import Offline = AI biết khách $50tr mặt mũi ra sao</code>.</p>
      <p className="mt-2"><strong>Quy tắc 5 phút</strong>: Lead về phải gọi trong 5 phút. Sau 30 phút tỷ lệ chốt giảm 50%. Zapier + Telegram.</p>
      <p className="mt-2 text-blue-200 text-sm"><strong>Mẹo cuối</strong>: Dùng <code>Giá trị chuyển đổi tùy chỉnh</code>. Cọc $50tr nhưng hoa hồng 3% = $1.5tr. Upload $1.5tr thôi. AI tối ưu theo lãi thật.</p>
      <p className="mt-2 text-blue-200 text-sm"><strong>Bài tập</strong>: Tạo 1 Lead Form Ads 3 trường + Bật số chuyển tiếp Google. Chạy $10. Đếm bao nhiêu lead, bao nhiêu cuộc {'>'} 60s. Comment số.</p>
    </div>

    <InteractiveChecklist
      id="chk53"
      title="Checklist Bài 53 – Lead Form Ads + Offline Conversion"
      tasks={[
        'Tạo Lead Form Ads 3 trường (Tên, SĐT, Dịch vụ)',
        'Bật Số chuyển tiếp Google, đặt ngưỡng >60s = conv',
        'Tạo chuyển đổi Offline "Coc_BDS" trong Google Ads',
        'Gắn GCLID ẩn vào web form hoặc tải CSV Lead Form',
        'Setup Zapier: Lead về → Sheet → Telegram báo sale',
        'Upload GCLID đã cọc lên Google, kiểm tra báo cáo sau 7 ngày',
      ]}
    />
  </div>
);

// ─── Bài 54: App – UAC, tối ưu tCPI và in-app events ─────────────────────────
export const Lesson54Content = () => (
  <div className="prose prose-blue max-w-none text-gray-800">
    <h3 className="text-2xl font-bold text-gray-900 border-b pb-2">
      Bài 54: App – Chiến dịch UAC, tối ưu theo tCPI và sự kiện in-app
    </h3>

    <p>
      <strong>UAC = Universal App Campaigns</strong> = 1 camp chạy toàn bộ Google: Search, Play, YouTube, GDN, Discover để kéo cài app.
    </p>
    <p>
      <strong>Sai lầm phổ biến</strong>: Chạy tCPI $1 ra 10.000 lượt cài, 99% gỡ app sau 1 ngày. <strong>Tiền đốt, doanh thu = 0</strong>.
    </p>
    <p>
      <strong>Đúng</strong>: Tối ưu theo <strong>tCPI + Sự kiện in-app</strong> = Cài app + Đăng ký + Nạp tiền. CPI $5 nhưng LTV $50.
    </p>

    <h4 className="text-lg font-bold text-gray-800 mt-6">1. 3 loại chiến dịch UAC – Dùng sai là lỗ</h4>

    <div className="overflow-x-auto my-4">
      <table className="w-full text-sm border-collapse">
        <thead className="bg-slate-800 text-white">
          <tr>
            <th className="p-3 text-left">Loại UAC</th>
            <th className="p-3 text-left">Google tối ưu gì</th>
            <th className="p-3 text-left">Khi nào dùng</th>
            <th className="p-3 text-left">Ví dụ app booking nail</th>
            <th className="p-3 text-left">Yêu cầu</th>
          </tr>
        </thead>
        <tbody>
          {[
            ['1. Lượt cài đặt – tCPI', 'Nhiều cài rẻ nhất', 'App mới, cần 1000 user đầu', '"Cài App LuxuryNails"', 'Không cần SDK'],
            ['2. Hành động trong app – tCPA', 'Cài + Mở app + Làm sự kiện', 'App có >10 sự kiện/ngày', '"Cài + Đặt lịch lần đầu"', 'Phải gắn SDK + sự kiện'],
            ['3. Giá trị trong app – tROAS', 'Cài + Nạp tiền nhiều nhất', 'App nạp tiền: Game, TMĐT', '"Cài + Mua gói $100"', '>30 sự kiện mua hàng/30 ngày'],
          ].map((row, i) => (
            <tr key={i} className={i % 2 === 0 ? 'bg-white' : 'bg-slate-50'}>
              <td className="p-3 font-bold text-blue-700">{row[0]}</td>
              {row.slice(1).map((cell, j) => <td key={j} className="p-3 text-sm">{cell}</td>)}
            </tr>
          ))}
        </tbody>
      </table>
    </div>

    <div className="bg-amber-50 border border-amber-200 rounded-lg p-4 my-4">
      <p className="font-bold text-amber-800">Quy tắc chuyển giai đoạn:</p>
      <p className="text-sm text-amber-700 mt-1">
        {'<'} 1000 cài = Chạy tCPI. {'>'} 1000 cài + {'>'} 10 <code>first_open</code> + <code>book_success</code>/ngày = Chuyển tCPA. Có doanh thu = Chuyển tROAS.
      </p>
    </div>

    <h4 className="text-lg font-bold text-gray-800 mt-6">2. 5 sự kiện in-app phải track – Không track = Mù</h4>

    <p><strong>Dùng Firebase/Google Analytics for Firebase</strong>. App dev gắn 1 lần.</p>

    <div className="overflow-x-auto my-4">
      <table className="w-full text-sm border-collapse">
        <thead className="bg-slate-800 text-white">
          <tr>
            <th className="p-3 text-left">#</th>
            <th className="p-3 text-left">Tên sự kiện</th>
            <th className="p-3 text-left">Khi nào bắn</th>
            <th className="p-3 text-left">Giá trị gán</th>
            <th className="p-3 text-left">Tại sao quan trọng</th>
          </tr>
        </thead>
        <tbody>
          {[
            ['1', 'first_open', 'Mở app lần đầu (sau cài)', '$0', 'Biết tỷ lệ mở. <30% = Ads rác'],
            ['2', 'login', 'Đăng nhập/ĐK SĐT', '$5', 'User thật. Dùng làm conv chính khi CPI'],
            ['3', 'view_item', 'Xem dịch vụ Gel X', '$10', 'Biết khách thích gì'],
            ['4', 'add_to_cart', 'Bấm Đặt lịch (bấm nút Book)', '$15', '60% add_to_cart → book'],
            ['5', 'purchase', 'Thanh toán cọc $20 (trả tiền xong)', '$20', 'Đây là tiền. Dùng cho tROAS'],
          ].map((row, i) => (
            <tr key={i} className={i % 2 === 0 ? 'bg-white' : 'bg-slate-50'}>
              <td className="p-3 font-bold text-slate-500">{row[0]}</td>
              <td className="p-3 font-mono font-bold text-blue-700">{row[1]}</td>
              <td className="p-3">{row[2]}</td>
              <td className="p-3 font-bold text-emerald-700">{row[3]}</td>
              <td className="p-3 text-sm">{row[4]}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>

    <p className="text-sm bg-blue-50 border border-blue-200 rounded p-3">
      <strong>App nail booking</strong>: Bắt buộc có <code>login</code> + <code>purchase</code>. Không có <code>purchase</code> thì dùng <code>add_to_cart</code> làm proxy.
    </p>
    <p className="text-sm mt-2">
      <strong>Link Firebase → Google Ads</strong>: Firebase → Cài đặt → Liên kết → Google Ads → Nhập ID. Sau đó Ads → Công cụ → Chuyển đổi → Import <code>first_open</code>, <code>purchase</code>.
    </p>

    <h4 className="text-lg font-bold text-gray-800 mt-6">3. Setup UAC tCPI chuẩn – 7 bước cho app mới</h4>

    <div className="space-y-2 my-4">
      {[
        ['Bước 1', 'Tạo chiến dịch → Mục tiêu: Quảng bá ứng dụng → App: Chọn iOS/Android'],
        ['Bước 2', 'Loại: Lượt cài đặt'],
        ['Bước 3', 'Ngân sách: $20/ngày. Nhỏ để test. 100 cài/ngày là đủ học'],
        ['Bước 4', 'Đặt giá thầu: tCPI = $2. Tính sao: LTV $50, muốn Payback 3 tháng, chi marketing 20% → CPI max = $50 x 20% = $10. Bắt đầu $2 cho rẻ'],
        ['Bước 5', 'Asset: Text 4 dòng, Hình 20 cái, Video 5 cái 30s dọc. Hook 3s đầu: "Đặt nail không cần gọi"'],
        ['Bước 6', 'Ngôn ngữ + Địa lý: Tiếng Việt, Bán kính 10km quanh 77084 nếu app local'],
        ['Bước 7', 'Chuyển đổi: Chọn first_open + login. Để AI biết cài nào chất'],
      ].map(([step, desc], i) => (
        <div key={i} className="flex gap-3 bg-slate-50 border border-slate-200 rounded-lg p-3">
          <span className="bg-blue-700 text-white text-xs font-bold rounded px-2 py-1 h-fit whitespace-nowrap">{step}</span>
          <span className="text-sm text-slate-700">{desc}</span>
        </div>
      ))}
    </div>

    <p className="bg-amber-50 border border-amber-200 rounded-lg p-3 text-sm text-amber-700">
      <strong>14 ngày đầu</strong>: Không đụng. CPI từ $5 giảm dần $2. Nếu {'>'} $10 thì đổi asset.
    </p>

    <h4 className="text-lg font-bold text-gray-800 mt-6">4. Nâng cấp UAC tCPA – Khi có 100 cài/ngày</h4>

    <p><strong>Điều kiện</strong>: <code>login</code> {'>'} 10/ngày + <code>add_to_cart</code> {'>'} 5/ngày.</p>
    <p><strong>Đổi chiến dịch</strong>:</p>
    <ol className="list-decimal pl-6 space-y-2 my-3">
      <li>Tạo UAC mới → Hành động trong app</li>
      <li><strong>Sự kiện</strong>: Chọn <code>add_to_cart</code> hoặc <code>purchase</code>. Không chọn <code>first_open</code> nữa</li>
      <li><strong>tCPA</strong>: Lấy CPA login 7 ngày qua x 2. VD login $3 → tCPA = $6 cho <code>book_success</code></li>
      <li><strong>Asset</strong>: Thêm video "Hướng dẫn book 30s". Người cài rồi cần lý do hành động</li>
    </ol>

    <div className="bg-emerald-50 border border-emerald-200 rounded-lg p-3 text-sm text-emerald-700 my-3">
      <strong>Kết quả</strong>: CPI tăng $2 → $4 nhưng 40% user book. Trước CPI $2, 5% book. <strong>Giá/book giảm $40 → $10</strong>.
    </div>

    <h4 className="text-lg font-bold text-gray-800 mt-6">5. UAC tROAS – App có nạp tiền/booking trả trước</h4>

    <p><strong>Điều kiện</strong>: {'>'} 30 <code>purchase</code>/30 ngày + Có truyền <code>value</code>.</p>
    <p><strong>Setup</strong>:</p>
    <ol className="list-decimal pl-6 space-y-2 my-3">
      <li><strong>Sự kiện</strong>: <code>purchase</code> + Bật "Sử dụng giá trị"</li>
      <li><strong>tROAS</strong>: Tính <code>Tổng value 30 ngày / Chi phí</code>. VD $5000/$1000 = 500%. Đặt 400% để scale</li>
      <li><strong>Asset</strong>: UGC khách: <code>Cọc $20 qua app, đến làm luôn không đợi</code></li>
    </ol>
    <p className="text-sm text-slate-600 bg-slate-50 border border-slate-200 rounded p-3">
      <strong>Lưu ý</strong>: tROAS UAC ăn nhiều tiền. $100/ngày trở lên mới thoát "Học". {'<'} 30 purchase/tháng → Về tCPA.
    </p>

    <h4 className="text-lg font-bold text-gray-800 mt-6">6. 4 chỉ số đọc để biết UAC lời/lỗ</h4>

    <p>Vào Chiến dịch → Cột tùy chỉnh:</p>
    <div className="overflow-x-auto my-4">
      <table className="w-full text-sm border-collapse">
        <thead className="bg-slate-800 text-white">
          <tr>
            <th className="p-3 text-left">Chỉ số</th>
            <th className="p-3 text-left">Công thức</th>
            <th className="p-3 text-left">App nail đẹp</th>
            <th className="p-3 text-left">Xấu = Làm gì</th>
          </tr>
        </thead>
        <tbody>
          {[
            ['1. IPM', 'Cài đặt / 1000 lần hiển thị', '>5', '<2 = Đổi video hook 3s đầu'],
            ['2. CVR Cài → Mở', 'first_open / Cài', '>40%', '<20% = Trang app store xấu, tối ưu screenshot'],
            ['3. CVR Mở → Sự kiện', 'book_success / first_open', '>10%', '<3% = Onboarding app dở, ads đúng người sai app'],
            ['4. LTV/CPI', 'LTV 90 ngày / CPI', '>3', '<1 = Tắt camp. App không giữ chân user'],
          ].map((row, i) => (
            <tr key={i} className={i % 2 === 0 ? 'bg-white' : 'bg-slate-50'}>
              <td className="p-3 font-bold text-blue-700">{row[0]}</td>
              <td className="p-3 font-mono text-xs">{row[1]}</td>
              <td className="p-3 font-bold text-emerald-700">{row[2]}</td>
              <td className="p-3 text-red-600 text-sm">{row[3]}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>

    <p className="text-sm text-slate-600">
      <strong>Vào đâu xem</strong>: Firebase → Sự kiện → Kênh: Google Ads → Xem phễu <code>first_open {'>'} login {'>'} purchase</code>.
    </p>

    <h4 className="text-lg font-bold text-gray-800 mt-6">7. 6 lỗi khiến UAC đốt tiền không ra user thật</h4>

    <div className="overflow-x-auto my-4">
      <table className="w-full text-sm border-collapse">
        <thead className="bg-slate-800 text-white">
          <tr>
            <th className="p-3 text-left">Lỗi</th>
            <th className="p-3 text-left">Hậu quả</th>
            <th className="p-3 text-left">Cách fix</th>
          </tr>
        </thead>
        <tbody>
          {[
            ['1. Chạy tCPI không có sự kiện', '10k cài, 0% mở app. Toàn farm', 'Bắt buộc import first_open, đặt tCPI cao để mua user xịn'],
            ['2. Asset 1 video', 'IPM <1, CPI $20', '5 video dọc: 1 hook tiền, 1 hook nhanh, 1 UGC, 1 hướng dẫn, 1 review'],
            ['3. Không loại trừ user đã cài', 'Bắn ads cho người có app rồi', 'Cài đặt → Loại trừ: Danh sách "Đã cài app" từ Firebase'],
            ['4. Địa lý toàn VN cho app local', 'Cài ở Cà Mau, không đến 77084 được', 'Bán kính 10-25km. Hoặc tách camp HN/HCM riêng'],
            ['5. Không deep link', 'Click ads → Vào trang chủ app, không vào trang Book', 'App dev làm App Links iOS + Android. Click Ads mở đúng trang Đặt lịch'],
            ['6. tROAS khi <30 purchase', '"Học" mãi, CPI $50', 'Về tCPA đến khi đủ 30 purchase/tháng'],
          ].map((row, i) => (
            <tr key={i} className={i % 2 === 0 ? 'bg-white' : 'bg-red-50'}>
              <td className="p-3 font-bold text-red-700">{row[0]}</td>
              <td className="p-3 text-red-600">{row[1]}</td>
              <td className="p-3 text-emerald-700">{row[2]}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>

    <h4 className="text-lg font-bold text-gray-800 mt-6">8. Checklist scale UAC cho app nail local</h4>

    <ol className="list-decimal pl-6 space-y-2 my-3">
      <li><strong>Tuần 1-2: tCPI $3</strong>. Target: 50 cài/ngày, 40% mở app. Đủ 1000 cài</li>
      <li><strong>Tuần 3-4: tCPA $10 sự kiện <code>book_success</code></strong>. Target: 10 book/ngày từ app</li>
      <li><strong>Tháng 2: tROAS 400%</strong>. Nếu app có cọc $20. Scale $100/ngày</li>
      <li><strong>Asset</strong>: 2 tuần thay video 1 lần. Giữ IPM {'>'} 5</li>
      <li><strong>Lookalike</strong>: Tạo danh sách <code>purchase</code> → Vào PMax Web dùng làm signal kiếm người giống</li>
      <li><strong>Web-to-App</strong>: Chạy Ads web. Nếu mobile → Hiện banner "Mở trong app nhanh hơn"</li>
    </ol>

    <div className="bg-blue-900 text-white rounded-xl p-5 my-6">
      <p className="font-bold text-lg mb-2">Chốt Bài 54</p>
      <p>UAC không bán cài đặt, bán hành động.</p>
      <p className="mt-2"><strong>Công thức</strong>: <code>tCPI thấp + CVR Mở{'>'} 40% + CVR Book{'>'} 10% = CPI $5 vẫn lời</code>.</p>
      <p className="mt-2"><strong>Quy tắc 3-30-10</strong>: CPI $3, 30% mở, 10% book = CPA book $100. LTV $300 vẫn lãi. Dưới thì tắt.</p>
      <p className="mt-2 text-blue-200 text-sm"><strong>Mẹo cuối</strong>: Dùng "Pre-registration" nếu app chưa ra. Gom 5000 mail trước launch. Launch phát 5000 cài, UAC rẻ x3.</p>
      <p className="mt-2 text-blue-200 text-sm"><strong>Bài tập</strong>: Vào Firebase → Sự kiện. Chụp phễu <code>first_open → login → purchase</code>. Tính CVR từng bậc. Comment 3 số. Mình tính CPI max cho bạn.</p>
    </div>

    <InteractiveChecklist
      id="chk54"
      title="Checklist Bài 54 – UAC App Campaign"
      tasks={[
        'Gắn Firebase SDK + 5 sự kiện: first_open, login, view_item, add_to_cart, purchase',
        'Link Firebase → Google Ads, import sự kiện vào Chuyển đổi',
        'Tạo UAC tCPI $2-3, ngân sách $20/ngày, 5 video dọc 30s',
        'Theo dõi IPM >5, CVR Mở >40% trong 14 ngày đầu',
        'Khi đủ 1000 cài: chuyển UAC tCPA theo sự kiện book_success',
        'Loại trừ user đã cài app khỏi chiến dịch',
      ]}
    />
  </div>
);

// ─── Bài 55: B2B/SaaS – Customer Match + LinkedIn data, MQL/SQL ──────────────
export const Lesson55Content = () => (
  <div className="prose prose-blue max-w-none text-gray-800">
    <h3 className="text-2xl font-bold text-gray-900 border-b pb-2">
      Bài 55: B2B/SaaS – Dùng Customer Match + LinkedIn data, tối ưu theo MQL/SQL
    </h3>

    <p>
      <strong>Vấn đề B2B</strong>: Bán phần mềm $500/tháng. Chạy Ads ra 1000 lead, sale chê "toàn sinh viên, 0 MQL". CPA $50/lead, CAC $5,000/khách. Lỗ.
    </p>
    <p>
      <strong>Lý do</strong>: Google tối ưu cho "lead", không biết MQL là gì.
    </p>
    <p>
      <strong>Giải pháp</strong>: <code>Customer Match nuôi tệp CEO + Offline Import báo MQL/SQL + tROAS theo LTV</code> = AI chỉ tìm CTO, bỏ sinh viên.
    </p>

    <h4 className="text-lg font-bold text-gray-800 mt-6">1. 4 giai đoạn B2B – Chỉ tối ưu 2 giai đoạn cuối</h4>

    <div className="overflow-x-auto my-4">
      <table className="w-full text-sm border-collapse">
        <thead className="bg-slate-800 text-white">
          <tr>
            <th className="p-3 text-left">Giai đoạn</th>
            <th className="p-3 text-left">Định nghĩa SaaS</th>
            <th className="p-3 text-left">Giá trị gán Google</th>
            <th className="p-3 text-left">AI tối ưu gì</th>
          </tr>
        </thead>
        <tbody>
          {[
            ['1. Lead', 'Điền form tải ebook', '$0', 'Không tối ưu. Rác 90%'],
            ['2. MQL', 'Sale lọc: Đúng ICP, Cty >50 người, Chức vụ Manager+', '$200', 'Bắt đầu tối ưu từ đây'],
            ['3. SQL', 'Demo xong, có ngân sách, quyền quyết', '$1,000', 'AI ưu tiên'],
            ['4. Closed Won', 'Ký HĐ $6,000/năm', '$6,000', 'AI tìm khách y hệt'],
          ].map((row, i) => (
            <tr key={i} className={i % 2 === 0 ? 'bg-white' : 'bg-slate-50'}>
              <td className={`p-3 font-bold ${i === 0 ? 'text-slate-400' : i === 1 ? 'text-amber-700' : i === 2 ? 'text-blue-700' : 'text-emerald-700'}`}>{row[0]}</td>
              <td className="p-3 text-sm">{row[1]}</td>
              <td className={`p-3 font-bold ${i === 0 ? 'text-slate-400' : 'text-emerald-700'}`}>{row[2]}</td>
              <td className="p-3 text-sm">{row[3]}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>

    <p className="text-sm bg-amber-50 border border-amber-200 rounded-lg p-3 text-amber-700">
      <strong>Chốt</strong>: Không import MQL/SQL = Đốt tiền cho sinh viên. LTV B2B = $6k-50k → Dám bid CPA $500 nếu đúng người.
    </p>

    <h4 className="text-lg font-bold text-gray-800 mt-6">2. Customer Match – Tệp CEO/Manager từ LinkedIn, nuôi AI</h4>

    <p>
      <strong>Customer Match = Upload list email/SĐT khách mục tiêu</strong>. Google tìm họ khi online.
    </p>

    <p><strong>3 nguồn data B2B xịn nhất</strong>:</p>
    <div className="overflow-x-auto my-4">
      <table className="w-full text-sm border-collapse">
        <thead className="bg-slate-800 text-white">
          <tr>
            <th className="p-3 text-left">#</th>
            <th className="p-3 text-left">Nguồn</th>
            <th className="p-3 text-left">Cách lấy</th>
            <th className="p-3 text-left">Mẫu 1000 người</th>
            <th className="p-3 text-left">Dùng sao</th>
          </tr>
        </thead>
        <tbody>
          {[
            ['1', 'LinkedIn Sales Navigator', 'Lọc: Title CTO, Head of IT, Cty 50-500 NV, VN → Export qua Evaboot/Phantombuster', 'Signal_CEO', 'Chạy YouTube + GDN bám đuổi'],
            ['2', 'CRM HubSpot/Salesforce', 'Lọc: Deal Lost "Lý do: Chưa có nhu cầu" + "Đã mở email 3 lần" → Export', 'Signal_Warm', 'PMax remarketing'],
            ['3', 'Khách cũ + Churn', 'Lọc: Khách hủy <6 tháng, ARPA >$200 → Export', 'Signal_Upsell', 'Search "alternative to [bạn]"'],
          ].map((row, i) => (
            <tr key={i} className={i % 2 === 0 ? 'bg-white' : 'bg-slate-50'}>
              <td className="p-3 font-bold text-slate-500">{row[0]}</td>
              <td className="p-3 font-bold text-blue-700">{row[1]}</td>
              <td className="p-3 text-sm">{row[2]}</td>
              <td className="p-3 font-mono text-xs text-purple-700">{row[3]}</td>
              <td className="p-3 text-sm">{row[4]}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>

    <p className="text-sm"><strong>Upload</strong>: Công cụ → Dữ liệu → + → Danh sách khách hàng → Tải CSV. Đợi 48h match 30-60%.</p>

    <p className="font-bold mt-3">Dùng ở đâu:</p>
    <ol className="list-decimal pl-6 space-y-1 mt-2 text-sm">
      <li><strong>Đối sánh khách hàng</strong>: Áp vào Search/YouTube → Bid +50% cho list CEO</li>
      <li><strong>Tín hiệu PMax</strong>: Thêm vào Asset Group → AI mở rộng ra người giống CEO</li>
      <li><strong>Loại trừ</strong>: Loại trừ <code>Intern</code>, <code>Student</code>, <code>Đối thủ</code> để không phí tiền</li>
    </ol>

    <h4 className="text-lg font-bold text-gray-800 mt-6">3. LinkedIn data → Google Ads: 2 cách hợp lệ</h4>

    <div className="grid grid-cols-1 md:grid-cols-2 gap-4 my-4">
      <div className="bg-emerald-50 border border-emerald-200 rounded-xl p-4">
        <p className="font-bold text-emerald-800 mb-2">Cách 1: Dùng tay, hợp lệ 100%</p>
        <ol className="list-decimal pl-4 space-y-1 text-sm text-emerald-700">
          <li>LinkedIn Sales Nav → Lọc ICP → Copy email ra Sheet</li>
          <li>Dùng Neverbounce verify → Giữ email cty</li>
          <li>Upload Customer Match</li>
        </ol>
        <p className="text-xs text-emerald-600 mt-2">→ Tỷ lệ match 40%. Không vi phạm policy.</p>
      </div>
      <div className="bg-blue-50 border border-blue-200 rounded-xl p-4">
        <p className="font-bold text-blue-800 mb-2">Cách 2: Zapier + Clearbit/Apollo</p>
        <p className="text-sm text-blue-700">
          Lead form Ads ra email <code>a@gmail.com</code> → Zapier gửi Apollo → Trả về <code>Title=CTO</code>, <code>Company Size=200</code> → Tag <code>MQL</code> nếu đúng ICP → Upload lại Google.
        </p>
        <p className="text-xs text-blue-600 mt-2">→ Tự động nuôi tệp MQL.</p>
      </div>
    </div>

    <div className="bg-red-50 border border-red-200 rounded-lg p-3 text-sm text-red-700 my-3">
      <strong>Cấm</strong>: Crawl LinkedIn, mua data. Google ban tài khoản.
    </div>

    <h4 className="text-lg font-bold text-gray-800 mt-6">4. Tối ưu theo MQL/SQL – 4 bước Import Offline</h4>

    <div className="space-y-3 my-4">
      <div className="bg-blue-50 border border-blue-200 rounded-lg p-4">
        <p className="font-bold text-blue-800">Bước 1: Tạo 3 chuyển đổi</p>
        <p className="text-sm text-blue-700 mt-1">Công cụ → Chuyển đổi:</p>
        <ul className="list-disc pl-4 mt-1 text-sm text-blue-700 space-y-1">
          <li><code>MQL</code> – Giá trị $200 – Danh mục: Khách hàng tiềm năng</li>
          <li><code>SQL</code> – Giá trị $1,000 – Danh mục: Đủ điều kiện</li>
          <li><code>Closed_Won</code> – Giá trị $6,000 – Danh mục: Mua hàng</li>
        </ul>
      </div>

      <div className="bg-blue-50 border border-blue-200 rounded-lg p-4">
        <p className="font-bold text-blue-800">Bước 2: Gắn GCLID vào CRM</p>
        <p className="text-sm text-blue-700 mt-1">
          Web form ẩn trường <code>gclid</code>. CRM lưu: <code>GCLID | Email | Stage</code>.<br />
          Lead Form Ads tự có GCLID khi tải CSV.
        </p>
      </div>

      <div className="bg-blue-50 border border-blue-200 rounded-lg p-4">
        <p className="font-bold text-blue-800">Bước 3: Sale update stage → Zapier bắn</p>
        <p className="text-sm text-blue-700 mt-1">
          HubSpot: Khi Deal → MQL → Zapier gửi Google Ads Offline Conversion.<br />
          Trường cần: <code>GCLID</code>, <code>Conversion Name = MQL</code>, <code>Time</code>, <code>Value = 200</code>
        </p>
      </div>

      <div className="bg-blue-50 border border-blue-200 rounded-lg p-4">
        <p className="font-bold text-blue-800">Bước 4: Đổi chiến lược bid</p>
        <p className="text-sm text-blue-700 mt-1">
          Từ tCPA $50/Lead → <strong>tROAS 2000%</strong> theo <code>Closed_Won</code><br />
          Hoặc <strong>Maximize Conversion Value</strong> dùng MQL/SQL làm giá trị.<br />
          → AI bỏ lead sinh viên $0, dồn tiền cho click ra SQL $1000.
        </p>
        <p className="text-xs text-blue-600 mt-2">
          <strong>Kết quả sau 30 ngày</strong>: Lead giảm 70% nhưng MQL tăng 3x. CAC từ $5,000 → $1,200. LTV $6,000 → Lãi $4,800.
        </p>
      </div>
    </div>

    <h4 className="text-lg font-bold text-gray-800 mt-6">5. Cấu trúc Camp B2B $3k/tháng – Chuẩn SaaS</h4>

    <div className="overflow-x-auto my-4">
      <table className="w-full text-sm border-collapse">
        <thead className="bg-slate-800 text-white">
          <tr>
            <th className="p-3 text-left">Campaign</th>
            <th className="p-3 text-left">Mục tiêu</th>
            <th className="p-3 text-left">Đối tượng</th>
            <th className="p-3 text-left">Bid</th>
            <th className="p-3 text-left">KPI</th>
          </tr>
        </thead>
        <tbody>
          {[
            ['1. Search Brand', 'Chốt khách biết bạn', 'Từ khóa brand', 'tCPA $400/SQL', 'SQL rẻ'],
            ['2. Search Non-brand ICP', '"phần mềm kế toán cho cty 100 người"', 'Customer Match "CEO" +30% bid', 'tROAS 1500%', 'MQL chất'],
            ['3. PMax_MQL', 'Nuôi + Retarget', 'Signal: List MQL 90 ngày + List CEO', 'Max Conv Value', '60% ngân sách'],
            ['4. YouTube In-feed', 'Educate CTO', 'Custom Intent: URL g2.com, capterra.com', 'tCPV $0.05', 'View >30%'],
          ].map((row, i) => (
            <tr key={i} className={i % 2 === 0 ? 'bg-white' : 'bg-slate-50'}>
              <td className="p-3 font-bold text-blue-700">{row[0]}</td>
              {row.slice(1).map((cell, j) => <td key={j} className="p-3 text-sm">{cell}</td>)}
            </tr>
          ))}
        </tbody>
      </table>
    </div>

    <p className="text-sm bg-amber-50 border border-amber-200 rounded p-3 text-amber-700">
      <strong>Quy tắc</strong>: 70% tiền cho Retarget + Customer Match. 30% cho tìm khách mới. B2B không chơi lạnh.
    </p>

    <h4 className="text-lg font-bold text-gray-800 mt-6">6. Đọc báo cáo B2B – 4 cột phải có trong Looker</h4>

    <div className="overflow-x-auto my-4">
      <table className="w-full text-sm border-collapse">
        <thead className="bg-slate-800 text-white">
          <tr>
            <th className="p-3 text-left">Chỉ số</th>
            <th className="p-3 text-left">Công thức</th>
            <th className="p-3 text-left">Mục tiêu SaaS $500/tháng</th>
            <th className="p-3 text-left">Đỏ nếu</th>
          </tr>
        </thead>
        <tbody>
          {[
            ['1. MQL Rate', 'MQL / Lead', '>30%', '<10% = Form rác'],
            ['2. SQL Rate', 'SQL / MQL', '>40%', '<20% = Sale chê lead'],
            ['3. CAC Payback', 'CAC / (ARPA x Lãi gộp)', '<6 tháng', '>12 tháng = Dòng tiền chết'],
            ['4. LTV:CAC', 'LTV / CAC', '>3:1', '<1:1 = Tắt Ads'],
          ].map((row, i) => (
            <tr key={i} className={i % 2 === 0 ? 'bg-white' : 'bg-slate-50'}>
              <td className="p-3 font-bold text-blue-700">{row[0]}</td>
              <td className="p-3 font-mono text-xs">{row[1]}</td>
              <td className="p-3 font-bold text-emerald-700">{row[2]}</td>
              <td className="p-3 text-red-600 text-sm">{row[3]}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>

    <p className="text-sm text-slate-600">
      <strong>Mẹo GA4</strong>: Khám phá → Tạo phễu: <code>Ads Click {'>'} MQL {'>'} SQL {'>'} Won</code>. Rớt ở đâu, sửa ở đó.
    </p>

    <h4 className="text-lg font-bold text-gray-800 mt-6">7. 5 lỗi B2B đốt $10k/tháng</h4>

    <div className="overflow-x-auto my-4">
      <table className="w-full text-sm border-collapse">
        <thead className="bg-slate-800 text-white">
          <tr>
            <th className="p-3 text-left">Lỗi</th>
            <th className="p-3 text-left">Hậu quả</th>
            <th className="p-3 text-left">Fix</th>
          </tr>
        </thead>
        <tbody>
          {[
            ['1. Tối ưu Lead', '1000 lead, 5 MQL. CAC $10k', 'Import MQL, đổi bid Value'],
            ['2. Không loại trừ Student', '40% click từ .edu', 'Phủ định "student", "intern", "free", "course"'],
            ['3. Form không hỏi Company Size', 'Không biết ICP', 'Thêm câu hỏi "Quy mô": 1-10, 10-50, 50+'],
            ['4. GCLID không lưu', 'MQL không import được', 'Dev gắn 15 phút: gclid → CRM'],
            ['5. Chạy giờ hành chính US', 'B2B VN xem 9am-6pm GMT+7', 'Lịch: Thứ 2-6, 8am-6pm. Loại trừ đêm'],
          ].map((row, i) => (
            <tr key={i} className={i % 2 === 0 ? 'bg-white' : 'bg-red-50'}>
              <td className="p-3 font-bold text-red-700">{row[0]}</td>
              <td className="p-3 text-red-600">{row[1]}</td>
              <td className="p-3 text-emerald-700">{row[2]}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>

    <h4 className="text-lg font-bold text-gray-800 mt-6">8. Checklist B2B 1 tuần triển khai</h4>

    <ol className="list-decimal pl-6 space-y-2 my-3">
      <li><strong>Xuất CRM</strong>: 1000 email khách MQL/SQL cũ → Customer Match</li>
      <li><strong>Tạo 3 conv</strong>: MQL $200, SQL $1000, Won $6000</li>
      <li><strong>Gắn GCLID</strong>: Form web + Zapier Lead Form → CRM</li>
      <li><strong>Import test</strong>: Upload 1 dòng MQL thủ công → Check báo cáo có nhận</li>
      <li><strong>Tách camp</strong>: Search ICP + PMax MQL. Tắt camp Lead cũ</li>
      <li><strong>Phủ định</strong>: <code>job</code>, <code>internship</code>, <code>salary</code>, <code>tutorial</code>, <code>free</code></li>
      <li><strong>Looker</strong>: Báo cáo MQL, SQL, CAC, LTV:CAC</li>
    </ol>

    <div className="bg-blue-900 text-white rounded-xl p-5 my-6">
      <p className="font-bold text-lg mb-2">Chốt Bài 55</p>
      <p>B2B = Bán cho công ty, không bán cho click.</p>
      <p className="mt-2"><strong>Công thức</strong>: <code>Customer Match ICP + Import MQL/SQL + Bid theo LTV = CAC {'<'} $1,200</code>.</p>
      <p className="mt-2"><strong>Quy tắc 3:1</strong>: LTV:CAC {'<'} 3:1 thì tắt Ads, đi LinkedIn outbound. {'>'} 3:1 thì all-in.</p>
      <p className="mt-2 text-blue-200 text-sm"><strong>Mẹo cuối</strong>: Dùng <code>Offline Data Diagnostics</code>. Nếu 80% GCLID upload lỗi → GCLID hết hạn. Chuyển Enhanced Conversions for Leads.</p>
      <p className="mt-2 text-blue-200 text-sm"><strong>Bài tập</strong>: Tính LTV SaaS bạn: ARPA/tháng x Số tháng TB x Lãi gộp %. Comment 3 số + CAC max chấp nhận = LTV/3. Mình check bid được bao nhiêu.</p>
    </div>

    <InteractiveChecklist
      id="chk55"
      title="Checklist Bài 55 – B2B/SaaS Customer Match + MQL/SQL"
      tasks={[
        'Xuất 1000 email CEO/Manager từ CRM → Upload Customer Match',
        'Tạo 3 chuyển đổi: MQL $200, SQL $1000, Closed_Won $6000',
        'Gắn hidden gclid field vào web form, link với CRM',
        'Setup Zapier: khi Deal → MQL → gửi Offline Conversion lên Google',
        'Tắt camp tối ưu Lead, chuyển tROAS theo Closed_Won',
        'Theo dõi MQL Rate >30%, LTV:CAC >3:1 trong Looker',
      ]}
    />
  </div>
);
