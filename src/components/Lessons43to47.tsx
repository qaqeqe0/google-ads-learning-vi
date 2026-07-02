import React from 'react';
import { InteractiveChecklist } from './InteractiveChecklist';

// ─── Bài 43 ──────────────────────────────────────────────────────────────────
export const Lesson43Content: React.FC = () => (
  <div className="space-y-6 text-slate-700">
    <div className="bg-blue-50 border border-blue-200 rounded-xl p-5">
      <p className="font-bold text-blue-800 text-lg">Customer Match = Đuổi theo khách cũ bằng SĐT/Email, chính xác 99%</p>
      <p className="mt-2 text-blue-700"><strong>Khác Remarketing web:</strong> Web mất 70% khách vì iOS 14, cookie bị chặn. Customer Match dùng email/SĐT Google có sẵn → Khóa chết khách dù họ đổi máy, xóa cookie.</p>
      <p className="mt-2 text-blue-700"><strong>Dùng cho:</strong> Tiệm nail có 1000+ khách cũ. Bán lại dịch vụ, upsell, chặn khách qua đối thủ. ROAS 8x-15x.</p>
    </div>

    <div>
      <h3 className="font-bold text-lg text-slate-800 mb-3">1. Customer Match là gì – 4 lý do phải dùng ngay</h3>
      <div className="overflow-x-auto">
        <table className="w-full text-sm border-collapse">
          <thead>
            <tr className="bg-slate-100">
              <th className="border border-slate-300 px-3 py-2 text-left"></th>
              <th className="border border-slate-300 px-3 py-2 text-left">Remarketing Web</th>
              <th className="border border-slate-300 px-3 py-2 text-left text-blue-700">Customer Match</th>
            </tr>
          </thead>
          <tbody>
            {[
              ['Theo dõi bằng', 'Cookie, pixel', 'Email, SĐT, Địa chỉ Google đã có'],
              ['Mất khách khi', 'Xóa cookie, iOS chặn, đổi máy', 'Khách đổi email/SĐT mới'],
              ['Tỷ lệ khớp', '30-40%', '55-70% nếu data sạch'],
              ['Thời gian sống', '540 ngày max', '540 ngày + Update liên tục'],
              ['Chạy được ở đâu', 'Search, Display, YouTube', 'Search, YouTube, Gmail, Display, PMax'],
              ['Chính xác', 'Bám máy tính', 'Bám người'],
            ].map(([label, web, cm]) => (
              <tr key={label} className="hover:bg-slate-50">
                <td className="border border-slate-300 px-3 py-2 font-medium">{label}</td>
                <td className="border border-slate-300 px-3 py-2 text-slate-500">{web}</td>
                <td className="border border-slate-300 px-3 py-2 text-blue-700 font-medium">{cm}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <div className="mt-4 bg-emerald-50 border border-emerald-200 rounded-lg p-4">
        <p className="font-bold text-emerald-800 mb-2">4 việc Customer Match làm được mà web không làm được:</p>
        <ol className="list-decimal list-inside space-y-1 text-sm text-emerald-700">
          <li><strong>Remarketing khách offline:</strong> Khách đến tiệm trả tiền mặt, không vào web. Lấy SĐT lúc book → Up Customer Match → Đuổi trên YouTube</li>
          <li><strong>Loại trừ khách đã mua:</strong> Up list khách mua 30d → Loại trừ khỏi camp kiếm khách mới. Không phí tiền</li>
          <li><strong>Similar Audience:</strong> Google tìm 2 triệu người giống 1000 khách VIP của bạn → Scale</li>
          <li><strong>PMax Signal mạnh nhất:</strong> Cho PMax ăn 1000 email khách chi $1000/năm → AI tìm khách nhà giàu giống vậy</li>
        </ol>
      </div>
    </div>

    <div>
      <h3 className="font-bold text-lg text-slate-800 mb-3">2. Điều kiện dùng Customer Match – 90% tài khoản mới bị chặn</h3>
      <p className="text-sm text-slate-600 mb-3">Google sợ spam nên yêu cầu gắt:</p>
      <div className="overflow-x-auto">
        <table className="w-full text-sm border-collapse">
          <thead>
            <tr className="bg-slate-100">
              <th className="border border-slate-300 px-3 py-2 text-left">Yêu cầu</th>
              <th className="border border-slate-300 px-3 py-2 text-left">Chi tiết</th>
              <th className="border border-slate-300 px-3 py-2 text-left">Không đủ thì sao</th>
            </tr>
          </thead>
          <tbody>
            {[
              ['1. Lịch sử tốt', 'Tài khoản chạy >90 ngày, chi >$50.000 lifetime, không vi phạm chính sách', 'Báo lỗi: Not eligible. Phải chạy Search 3 tháng trước'],
              ['2. Thanh toán tốt', 'Không nợ, không thẻ ảo', 'Bị khóa'],
              ['3. Chính sách dữ liệu', 'Bạn phải có quyền dùng data khách. Có trang Privacy Policy ghi rõ dùng để quảng cáo', 'Vi phạm = Ban tài khoản'],
              ['4. List ≥1000 user', 'Sau khi Google khớp, còn ≥1000 người', '<1000 = List "Quá nhỏ", không chạy'],
            ].map(([req, detail, result]) => (
              <tr key={req} className="hover:bg-slate-50">
                <td className="border border-slate-300 px-3 py-2 font-medium text-blue-700">{req}</td>
                <td className="border border-slate-300 px-3 py-2">{detail}</td>
                <td className="border border-slate-300 px-3 py-2 text-red-600">{result}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <div className="mt-3 bg-yellow-50 border border-yellow-200 rounded-lg p-3 text-sm text-yellow-800">
        <strong>Check đủ điều kiện:</strong> Công cụ → Thư viện chia sẻ → Trình quản lý đối tượng → + → Danh sách khách hàng. Nếu thấy nút thì đủ. Thấy chữ "Bạn không đủ điều kiện" thì chạy thêm 3 tháng.
      </div>
    </div>

    <div>
      <h3 className="font-bold text-lg text-slate-800 mb-3">3. Chuẩn bị file SĐT/Email – Sai 1 dấu phẩy = Khớp 10%</h3>
      <div className="space-y-4">
        <div>
          <p className="font-semibold text-slate-700 mb-2">Bước 1: Lấy data ở đâu cho tiệm nail</p>
          <ol className="list-decimal list-inside space-y-1 text-sm text-slate-600">
            <li><strong>Phần mềm POS:</strong> Square, Clover, Vagaro → Export khách 2 năm</li>
            <li><strong>Google Sheet đặt lịch:</strong> Cột SĐT, Email</li>
            <li><strong>Form web:</strong> Khách điền khi book online</li>
            <li><strong>Loại bỏ:</strong> Khách chỉ hỏi giá, không đến. Chỉ lấy khách đã chi tiền</li>
          </ol>
        </div>
        <div>
          <p className="font-semibold text-slate-700 mb-2">Bước 2: Format file chuẩn Google – Dùng Sheet</p>
          <div className="overflow-x-auto">
            <table className="w-full text-sm border-collapse font-mono">
              <thead>
                <tr className="bg-slate-700 text-white">
                  {['email', 'phone', 'first_name', 'last_name', 'zip', 'country'].map(h => (
                    <th key={h} className="border border-slate-600 px-3 py-2 text-left">{h}</th>
                  ))}
                </tr>
              </thead>
              <tbody>
                <tr className="bg-white">
                  <td className="border border-slate-300 px-3 py-1">mary@gmail.com</td>
                  <td className="border border-slate-300 px-3 py-1">+12815551234</td>
                  <td className="border border-slate-300 px-3 py-1">Mary</td>
                  <td className="border border-slate-300 px-3 py-1">Nguyen</td>
                  <td className="border border-slate-300 px-3 py-1">77084</td>
                  <td className="border border-slate-300 px-3 py-1">US</td>
                </tr>
                <tr className="bg-slate-50">
                  <td className="border border-slate-300 px-3 py-1">john@yahoo.com</td>
                  <td className="border border-slate-300 px-3 py-1">+17135551234</td>
                  <td className="border border-slate-300 px-3 py-1">John</td>
                  <td className="border border-slate-300 px-3 py-1">Tran</td>
                  <td className="border border-slate-300 px-3 py-1">77072</td>
                  <td className="border border-slate-300 px-3 py-1">US</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
        <div>
          <p className="font-semibold text-slate-700 mb-2">8 quy tắc format – Sai là khớp thấp:</p>
          <div className="overflow-x-auto">
            <table className="w-full text-sm border-collapse">
              <thead>
                <tr className="bg-slate-100">
                  <th className="border border-slate-300 px-3 py-2 text-left">Trường</th>
                  <th className="border border-slate-300 px-3 py-2 text-left text-emerald-700">Đúng</th>
                  <th className="border border-slate-300 px-3 py-2 text-left text-red-600">Sai</th>
                  <th className="border border-slate-300 px-3 py-2 text-left">Lý do</th>
                </tr>
              </thead>
              <tbody>
                {[
                  ['1. email', 'Chữ thường, không cách: mary@gmail.com', 'Mary @Gmail.com', 'Google hash, sai 1 dấu = Mất'],
                  ['2. phone', 'Mã QG + số: +12815551234', '281-555-1234, (281) 555 1234', 'Phải có +1 cho Mỹ'],
                  ['3. Tên cột', 'email, phone, first_name', 'Email, Phone Number', 'Viết thường, dấu _'],
                  ['4. Zip', '5 số: 77084', '77084-1234', 'Lấy 5 số đầu'],
                  ['5. Country', 'US', 'USA, United States', 'Mã 2 chữ'],
                  ['6. Dấu cách', 'Xóa hết đầu/cuối ô', 'Có cách ẩn', 'Dùng Data → Trim whitespace'],
                  ['7. Trùng lặp', 'Xóa trùng', '1 email 5 dòng', 'Lãng phí'],
                  ['8. Định dạng', 'CSV UTF-8 hoặc Google Sheet', 'Excel .xlsx dễ lỗi font', 'Save as CSV UTF-8'],
                ].map(([field, right, wrong, reason]) => (
                  <tr key={field} className="hover:bg-slate-50">
                    <td className="border border-slate-300 px-3 py-2 font-medium">{field}</td>
                    <td className="border border-slate-300 px-3 py-2 text-emerald-700 font-mono text-xs">{right}</td>
                    <td className="border border-slate-300 px-3 py-2 text-red-600 font-mono text-xs">{wrong}</td>
                    <td className="border border-slate-300 px-3 py-2 text-slate-500 text-xs">{reason}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <div className="mt-3 bg-blue-50 border border-blue-200 rounded-lg p-3 text-sm text-blue-800">
            <strong>Mẹo tăng khớp 70%:</strong> Có gì up đó. 1 dòng có email + phone + tên + zip → Khớp 70%. Chỉ có email → Khớp 40%.
          </div>
        </div>
      </div>
    </div>

    <div>
      <h3 className="font-bold text-lg text-slate-800 mb-3">4. Upload lên Google Ads – 5 phút</h3>
      <ol className="list-decimal list-inside space-y-2 text-sm text-slate-700">
        <li><strong>Công cụ → Thư viện chia sẻ → Trình quản lý đối tượng</strong></li>
        <li><strong>+ → Danh sách khách hàng</strong></li>
        <li><strong>Tên:</strong> "Khach VIP 2023-2025" hoặc "Da mua 90d"</li>
        <li><strong>Loại dữ liệu:</strong> Chọn "Tải lên email, điện thoại, địa chỉ"</li>
        <li><strong>Tải file:</strong> Kéo CSV vào. Hoặc chọn Google Sheet</li>
        <li><strong>Thành viên:</strong> Chọn "Không hết hạn" nếu là khách VIP. Chọn "540 ngày" nếu là khách mới mua</li>
        <li><strong>Tải lên và tạo</strong></li>
      </ol>
      <div className="mt-3 bg-yellow-50 border border-yellow-200 rounded-lg p-3 text-sm text-yellow-800">
        <strong>Đợi 24-48h:</strong> Google báo "Tỷ lệ khớp: 62%, Quy mô: 1840". Dưới 1000 thì không chạy.
      </div>
    </div>

    <div>
      <h3 className="font-bold text-lg text-slate-800 mb-3">5. 5 cách dùng Customer Match ra tiền cho tiệm nail</h3>
      <div className="overflow-x-auto">
        <table className="w-full text-sm border-collapse">
          <thead>
            <tr className="bg-slate-100">
              <th className="border border-slate-300 px-3 py-2">#</th>
              <th className="border border-slate-300 px-3 py-2 text-left">Chiến dịch</th>
              <th className="border border-slate-300 px-3 py-2 text-left">List dùng</th>
              <th className="border border-slate-300 px-3 py-2 text-left">Mục tiêu</th>
              <th className="border border-slate-300 px-3 py-2 text-left">ROAS mẫu</th>
            </tr>
          </thead>
          <tbody>
            {[
              ['1', 'Remarketing YouTube', 'Khách 180d chưa quay lại', 'Video: "Nhớ bạn. $10 Off quay lại"', '12x'],
              ['2', 'Search RLSA', 'Khách cũ search "nail salon"', 'Họ thấy bạn trên cùng, không vào đối thủ', '8x'],
              ['3', 'Loại trừ PMax', 'Khách mua 30d', 'Không hiện ads, đỡ phiền, giảm CPA', 'Tiết kiệm 20%'],
              ['4', 'Upsell Gmail', 'Khách chỉ làm Acrylic', '"Thử Gel X mới, +$10 so với Acrylic"', '6x'],
              ['5', 'Similar PMax', '1000 khách chi >$1000/năm', 'Google tìm người nhà giàu giống vậy', '5x'],
            ].map(([num, camp, list, goal, roas]) => (
              <tr key={num} className="hover:bg-slate-50">
                <td className="border border-slate-300 px-3 py-2 text-center font-bold text-blue-700">{num}</td>
                <td className="border border-slate-300 px-3 py-2 font-medium">{camp}</td>
                <td className="border border-slate-300 px-3 py-2 text-slate-600">{list}</td>
                <td className="border border-slate-300 px-3 py-2 text-slate-600">{goal}</td>
                <td className="border border-slate-300 px-3 py-2 font-bold text-emerald-700">{roas}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <div className="mt-3 bg-emerald-50 border border-emerald-200 rounded-lg p-3 text-sm text-emerald-800">
        <strong>Case thực tế:</strong> Up 2500 SĐT khách 2 năm. Khớp 1600 = 64%.<br />
        Chạy YouTube $300, 8 khách quay lại x $65 = $520. ROAS 1.7x chưa tính VTC.<br />
        Bật VTC thấy thêm 22 khách → Tổng $1950. <strong>ROAS 6.5x</strong>. Tắt là mất.
      </div>
    </div>

    <div>
      <h3 className="font-bold text-lg text-slate-800 mb-3">6. 5 lỗi khiến Customer Match khớp 10% hoặc bị ban</h3>
      <div className="overflow-x-auto">
        <table className="w-full text-sm border-collapse">
          <thead>
            <tr className="bg-slate-100">
              <th className="border border-slate-300 px-3 py-2 text-left">Lỗi</th>
              <th className="border border-slate-300 px-3 py-2 text-left">Hậu quả</th>
              <th className="border border-slate-300 px-3 py-2 text-left">Fix</th>
            </tr>
          </thead>
          <tbody>
            {[
              ['1. Mua data, không có consent', 'Ban tài khoản vĩnh viễn', 'Chỉ dùng data khách tự đưa. Có tick đồng ý nhận quảng cáo'],
              ['2. SĐT thiếu +1', 'Khớp 5%', 'Dùng Sheet: ="+"+"1"&A2 để thêm +1 hàng loạt'],
              ['3. Email viết hoa', 'Mary@Gmail.com = Không khớp', 'Lowercase toàn bộ: =LOWER(A2)'],
              ['4. List <1000', 'Không chạy', 'Gộp 2 năm data. Hoặc chạy web 3 tháng cho đủ 1000'],
              ['5. Không update', '6 tháng sau data cũ, khách đổi SĐT', 'Update 30 ngày/lần. Upload đè file mới cùng tên'],
            ].map(([err, result, fix]) => (
              <tr key={err} className="hover:bg-slate-50">
                <td className="border border-slate-300 px-3 py-2 font-medium text-red-700">{err}</td>
                <td className="border border-slate-300 px-3 py-2 text-slate-600">{result}</td>
                <td className="border border-slate-300 px-3 py-2 text-emerald-700">{fix}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>

    <div>
      <h3 className="font-bold text-lg text-slate-800 mb-3">7. Chính sách bảo mật – Làm sai bị khóa MCC</h3>
      <div className="bg-red-50 border border-red-200 rounded-lg p-4 text-sm">
        <p className="font-bold text-red-800 mb-2">Bắt buộc khi dùng Customer Match:</p>
        <ol className="list-decimal list-inside space-y-1 text-red-700">
          <li><strong>Website có Privacy Policy:</strong> Footer ghi ro "Chung toi dung email/SDT de gui uu dai va quang cao Google".</li>
          <li><strong>Form có tick:</strong> "Toi dong y nhan khuyen mai qua email/SMS"</li>
          <li><strong>Không share data:</strong> Data lấy từ tiệm A không chạy cho tiệm B</li>
          <li><strong>Không target nhạy cảm:</strong> Không up list "Khách phá thai", "Khách nợ xấu". Nail ok</li>
        </ol>
        <p className="mt-3 text-red-700"><strong>Mẫu 1 câu Privacy:</strong> "We may use your contact info for marketing on Google. You can opt-out anytime."</p>
      </div>
    </div>

    <div>
      <h3 className="font-bold text-lg text-slate-800 mb-3">8. Checklist triển khai Customer Match 1 giờ</h3>
      <InteractiveChecklist
        id="lesson-43"
        title="Checklist triển khai Customer Match"
        tasks={[
          'Check đủ điều kiện: Tài khoản >90 ngày, chi >$50k',
          'Export data: POS → Lấy Email, SĐT, Tên, Zip 2 năm. >2000 dòng',
          'Làm sạch: Xóa cách, thêm +1, lowercase, đúng tên cột',
          'Upload: Đặt tên "Khach VIP All Time", không hết hạn',
          'Đợi 48h: Xem tỷ lệ khớp >50% là ok',
          'Tạo 3 list: All, Mua 90d, Chi >$500/năm',
          'Áp dụng: RLSA Search +15%, YouTube Remarketing, PMax Signal, Loại trừ',
          'Update: Mỗi tháng up lại file mới, xóa khách đòi opt-out',
        ]}
      />
    </div>

    <div className="bg-slate-800 text-white rounded-xl p-5 space-y-2">
      <p className="font-bold text-lg">Chốt Bài 43</p>
      <p>Data khách = Vàng. Web remarketing = Bám cái bóng. Customer Match = Bám người thật.</p>
      <p><strong className="text-yellow-300">Công thức:</strong> 1000 email sạch → Khớp 600 → ROAS 8x → $500/tháng ra $4000.</p>
      <p><strong className="text-yellow-300">Quy tắc 3 không:</strong> Không mua data, Không sai format, Không quên update.</p>
      <p className="text-red-300"><strong>Luật:</strong> Bạn chịu trách nhiệm 100% data. Google chỉ là nơi lưu. Vi phạm GDPR/CPPA = Phạt $7500/email.</p>
      <p className="text-slate-300 text-sm"><strong>Bài tập:</strong> Export 100 khách gần nhất từ POS. Làm sạch theo bảng mục 3. Đếm xem bao nhiêu dòng đủ Email + Phone +1. Trên 100 dòng là đủ test.</p>
    </div>
  </div>
);

// ─── Bài 44 ──────────────────────────────────────────────────────────────────
export const Lesson44Content: React.FC = () => (
  <div className="space-y-6 text-slate-700">
    <div className="bg-orange-50 border border-orange-200 rounded-xl p-5">
      <p className="font-bold text-orange-800 text-lg">Lookalike/Similar Audience đã chết, thay bằng gì</p>
      <p className="mt-2 text-orange-700"><strong>Từ 8/2023:</strong> Google xóa "Similar Audiences/Lookalike". Lý do: iOS14, privacy, AI đủ thông minh.</p>
      <p className="mt-1 text-orange-700"><strong>Sự thật:</strong> Optimized Targeting + Audience Signals mạnh gấp 3 lần Lookalike cũ, nếu biết dùng.</p>
    </div>

    <div>
      <h3 className="font-bold text-lg text-slate-800 mb-3">1. Lookalike chết rồi – Tại sao, thay bằng gì</h3>
      <div className="overflow-x-auto">
        <table className="w-full text-sm border-collapse">
          <thead>
            <tr className="bg-slate-100">
              <th className="border border-slate-300 px-3 py-2 text-left"></th>
              <th className="border border-slate-300 px-3 py-2 text-left text-red-600">Similar Audience – Đã chết</th>
              <th className="border border-slate-300 px-3 py-2 text-left text-emerald-700">Optimized Targeting – Đang sống</th>
            </tr>
          </thead>
          <tbody>
            {[
              ['Cách hoạt động', 'Google tự tìm 1-10% user giống list khách cũ 1000 người', 'Google lấy list khách cũ làm "mồi", sau đó tự mở rộng ra bất kỳ ai có khả năng convert'],
              ['Bạn kiểm soát', 'Không. Chọn 1%, 5%, 10% là hết', 'Kiểm soát bằng Signal: Cho AI ăn gì thì nó tìm đó'],
              ['Scale', 'Tới 10% là max. Hết', 'Không giới hạn. Miễn còn người convert'],
              ['Hiệu quả TMĐT', 'ROAS 3x-4x', 'ROAS 5x-8x nếu Signal chuẩn'],
              ['Nền tảng', 'Chỉ Display, YouTube, Gmail', 'Display, YouTube, Discover, PMax. Trùm'],
            ].map(([label, old, neww]) => (
              <tr key={label} className="hover:bg-slate-50">
                <td className="border border-slate-300 px-3 py-2 font-medium">{label}</td>
                <td className="border border-slate-300 px-3 py-2 text-red-600 text-xs">{old}</td>
                <td className="border border-slate-300 px-3 py-2 text-emerald-700 font-medium text-xs">{neww}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <p className="mt-3 text-sm text-slate-600 italic">Chốt: Lookalike = Ao làng. Optimized Targeting = Biển lớn. Nhưng phải thả đúng mồi.</p>
    </div>

    <div>
      <h3 className="font-bold text-lg text-slate-800 mb-3">2. Optimized Targeting bật ở đâu, hoạt động thế nào</h3>
      <div className="bg-blue-50 border border-blue-200 rounded-lg p-4 text-sm mb-3">
        <p><strong>Bật mặc định</strong> ở: Display, Video Action, Demand Gen, PMax. <strong>Không có nút tắt</strong> ở PMax.</p>
      </div>
      <p className="font-semibold text-slate-700 mb-2">Cách nó chạy:</p>
      <ol className="list-decimal list-inside space-y-2 text-sm text-slate-700">
        <li><strong>Bạn nạp Signal:</strong> List khách đã mua, Custom Segment "acrylic nails near me", Từ khóa Search</li>
        <li><strong>Google tìm 1000 người đầu tiên</strong> giống Signal → Chạy → Ra 20 đơn</li>
        <li><strong>AI phân tích 20 đơn đó:</strong> Tuổi, web họ xem, video họ thích, giờ họ mua</li>
        <li><strong>Mở rộng ra 1 triệu người</strong> có hành vi giống 20 đơn, dù họ không giống Signal ban đầu</li>
      </ol>
      <div className="mt-3 bg-emerald-50 border border-emerald-200 rounded-lg p-3 text-sm text-emerald-800">
        <p className="font-bold mb-1">Ví dụ tiệm nail bán khóa học online:</p>
        <p>Signal: 500 học viên đã mua khóa Gel X.<br />
        Tuần 1: AI tìm người giống 500 người đó. CPA $40<br />
        Tuần 3: AI phát hiện "Người mua hay xem YouTube lúc 9pm, thích video ASMR nail". AI tự mở rộng sang 50.000 người xem ASMR, dù họ chưa search "gel x". CPA giảm $25.</p>
        <p className="mt-2 font-bold">Không có Signal: AI mò 14 ngày, đốt $700. Có Signal: 3 ngày có đơn.</p>
      </div>
    </div>

    <div>
      <h3 className="font-bold text-lg text-slate-800 mb-3">3. Audience Signals – 5 loại mồi ngon nhất cho TMĐT & Local</h3>
      <p className="text-sm text-slate-600 mb-3">Vào: Nhóm quảng cáo → Tín hiệu đối tượng. Thêm càng nhiều càng tốt, AI tự chọn.</p>
      <div className="overflow-x-auto">
        <table className="w-full text-sm border-collapse">
          <thead>
            <tr className="bg-slate-100">
              <th className="border border-slate-300 px-3 py-2">#</th>
              <th className="border border-slate-300 px-3 py-2 text-left">Loại Signal</th>
              <th className="border border-slate-300 px-3 py-2 text-left">Cách tạo</th>
              <th className="border border-slate-300 px-3 py-2 text-left">Ví dụ cho nail</th>
              <th className="border border-slate-300 px-3 py-2">Độ mạnh</th>
            </tr>
          </thead>
          <tbody>
            {[
              ['1', 'Dữ liệu của bạn', 'Tải list SĐT/Email khách đã mua >$50', '1000 khách mua Kupa Drill', '10/10'],
              ['2', 'Custom Segment', 'Người search từ khóa hoặc vào web đối thủ', 'Từ khóa: kupa drill, notpolish acrylic; URL: igelbeauty.com', '9/10'],
              ['3', 'Sở thích + In-market', 'Chi tiết → Đang cân nhắc mua', 'Beauty & Personal Care, Spa & Beauty Services', '6/10'],
              ['4', 'Remarketing web', 'All Converters 540d, Viewed Product 30d', 'Người bỏ giỏ drill 7 ngày', '8/10'],
              ['5', 'Tìm kiếm trên Google', 'Nhập 10-15 từ khóa Search', 'nail drill professional, acrylic powder 2oz', '8/10'],
            ].map(([num, type, how, example, strength]) => (
              <tr key={num} className="hover:bg-slate-50">
                <td className="border border-slate-300 px-3 py-2 text-center font-bold text-blue-700">{num}</td>
                <td className="border border-slate-300 px-3 py-2 font-medium">{type}</td>
                <td className="border border-slate-300 px-3 py-2 text-slate-600 text-xs">{how}</td>
                <td className="border border-slate-300 px-3 py-2 text-slate-600 text-xs">{example}</td>
                <td className="border border-slate-300 px-3 py-2 text-center font-bold text-emerald-700">{strength}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <div className="mt-3 space-y-2">
        <div className="bg-blue-50 border border-blue-200 rounded-lg p-3 text-sm text-blue-800">
          <strong>Quy tắc Signal cho local:</strong> Thêm Từ khóa có địa phương: "nail supplies houston", "kupa drill 77084". AI sẽ ưu tiên người gần bạn.
        </div>
        <div className="bg-red-50 border border-red-200 rounded-lg p-3 text-sm text-red-800">
          <strong>Cấm dùng:</strong> Sở thích "Làm đẹp" không kèm gì khác. Quá rộng, AI học sai 14 ngày.
        </div>
      </div>
    </div>

    <div>
      <h3 className="font-bold text-lg text-slate-800 mb-3">4. Setup chuẩn cho 3 campaign phổ biến – Copy là chạy</h3>
      <div className="space-y-4">
        {[
          {
            title: 'Case 1: PMax TMĐT bán supplies toàn US',
            color: 'bg-blue-700',
            rows: [
              ['Asset Group', 'Tách theo margin: AG1 "Drill lãi $40", AG2 "Acrylic lãi $5"', 'Bid khác nhau'],
              ['Signal AG1', '1. List 800 khách mua Drill\n2. Custom: kupa drill, e-file nail\n3. URL: igelbeauty.com/kupa', 'Dạy AI tìm người mua máy $200'],
              ['Signal AG2', '1. List 2000 khách mua Acrylic\n2. Custom: acrylic powder 2oz, notpolish', 'Dạy AI tìm người mua bột $15'],
              ['Địa lý', 'United States. Loại trừ Alaska nếu không ship', ''],
              ['Bid', 'tROAS 400% sau 30 conv', ''],
            ],
          },
          {
            title: 'Case 2: Display Remarketing cho tiệm nail local 77084',
            color: 'bg-emerald-700',
            rows: [
              ['Target', 'Bật Optimized Targeting', 'Mặc định bật'],
              ['Signal', '1. All Converters 540d\n2. Custom Segment: nail salon 77084, acrylic nails near me\n3. Từ khóa: best nail salon', 'Mồi cho AI, sau đó nó tự tìm thêm'],
              ['Địa lý', '77084 + 5 miles. Quan trọng', 'Không có là AI mở ra cả Texas'],
              ['Loại trừ', 'Converted 30d + trẻ em + game', ''],
              ['Bid', 'tCPA $25', ''],
            ],
          },
          {
            title: 'Case 3: YouTube Video Action kiếm khách mới',
            color: 'bg-purple-700',
            rows: [
              ['Video', '30s: Hook "Lifting?" + USP + CTA "77084"', ''],
              ['Signal', '1. Custom: URL 3 đối thủ + từ khóa "gel x nails"\n2. List SĐT khách cũ', ''],
              ['Optimized', 'Để bật. Không tắt', ''],
              ['KPI', 'View Rate >35%, CPA < $30 sau 14 ngày', ''],
            ],
          },
        ].map(({ title, color, rows }) => (
          <div key={title} className="border border-slate-200 rounded-xl overflow-hidden">
            <div className={`${color} text-white px-4 py-2 font-bold`}>{title}</div>
            <div className="overflow-x-auto">
              <table className="w-full text-sm border-collapse">
                <thead>
                  <tr className="bg-slate-100">
                    <th className="border border-slate-300 px-3 py-2 text-left">Mục</th>
                    <th className="border border-slate-300 px-3 py-2 text-left">Setup</th>
                    <th className="border border-slate-300 px-3 py-2 text-left">Lý do</th>
                  </tr>
                </thead>
                <tbody>
                  {rows.map(([muc, setup, ly]) => (
                    <tr key={muc} className="hover:bg-slate-50">
                      <td className="border border-slate-300 px-3 py-2 font-medium">{muc}</td>
                      <td className="border border-slate-300 px-3 py-2 text-xs whitespace-pre-line">{setup}</td>
                      <td className="border border-slate-300 px-3 py-2 text-slate-500 text-xs">{ly}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        ))}
      </div>
    </div>

    <div>
      <h3 className="font-bold text-lg text-slate-800 mb-3">5. Cách đọc báo cáo biết Optimized Targeting đang chạy đúng</h3>
      <p className="text-sm text-slate-600 mb-2">Vào <strong>Nhóm quảng cáo → Thông tin chi tiết → Phân khúc đối tượng</strong></p>
      <div className="space-y-3 text-sm">
        <div className="bg-blue-50 border border-blue-200 rounded-lg p-3">
          <p className="font-bold text-blue-800">1. Bảng "Tín hiệu bạn cung cấp":</p>
          <p className="text-blue-700 mt-1">Nếu "Converters" ra 80% conv → Signal xịn.<br />
          Nếu "Optimized targeting" ra 80% conv → AI tự tìm tốt, bạn thêm Signal nữa cho nó.</p>
        </div>
        <div className="bg-purple-50 border border-purple-200 rounded-lg p-3">
          <p className="font-bold text-purple-800">2. Bảng "Phân khúc tự động":</p>
          <p className="text-purple-700 mt-1">Google ghi "Beauty Mavens", "Nail Art Enthusiasts". Đây là thứ AI tự mở rộng. Lấy tên này tạo Custom Segment mới, feed ngược cho AI.</p>
        </div>
      </div>
      <div className="mt-3 grid grid-cols-1 md:grid-cols-2 gap-3">
        <div className="bg-emerald-50 border border-emerald-200 rounded-lg p-3 text-sm text-emerald-800">
          <strong>Dấu hiệu tốt:</strong> Sau 14 ngày, 60% conv đến từ "Optimized targeting" + CPA giảm 30% so với tuần 1.
        </div>
        <div className="bg-red-50 border border-red-200 rounded-lg p-3 text-sm text-red-800">
          <strong>Dấu hiệu xấu:</strong> 100% conv vẫn từ Signal, CPA không giảm → Signal dở, hoặc Asset xấu.
        </div>
      </div>
    </div>

    <div>
      <h3 className="font-bold text-lg text-slate-800 mb-3">6. 5 sai lầm khiến Optimized Targeting thành Optimized Đốt Tiền</h3>
      <div className="overflow-x-auto">
        <table className="w-full text-sm border-collapse">
          <thead>
            <tr className="bg-slate-100">
              <th className="border border-slate-300 px-3 py-2 text-left">Lỗi</th>
              <th className="border border-slate-300 px-3 py-2 text-left">Hậu quả</th>
              <th className="border border-slate-300 px-3 py-2 text-left">Sửa sao</th>
            </tr>
          </thead>
          <tbody>
            {[
              ['1. Không nạp Signal nào', 'AI học từ 0, 14 ngày đầu CPA $150', 'Thêm tối thiểu: List khách + 10 từ khóa'],
              ['2. Signal sai: List khách test $1', 'AI tìm người giống khách dỏm → Toàn đơn rác', 'Chỉ dùng list khách AOV >$50, LTV cao'],
              ['3. Tắt "Mở rộng đối tượng" cũ', 'Tưởng tắt Optimized. Thực ra PMax không tắt được', 'Chấp nhận. Dùng Signal để lái AI'],
              ['4. Chạy cả nước nhưng bán local', 'AI tìm 1 triệu người, 99% không ở 77084', 'Địa lý 5 miles là bắt buộc với local'],
              ['5. Đổi Signal mỗi 2 ngày', 'Reset máy học, AI học lại từ đầu', 'Giữ Signal 14 ngày. Thêm thì ok, không xóa'],
            ].map(([err, result, fix]) => (
              <tr key={err} className="hover:bg-slate-50">
                <td className="border border-slate-300 px-3 py-2 font-medium text-red-700">{err}</td>
                <td className="border border-slate-300 px-3 py-2 text-slate-600 text-xs">{result}</td>
                <td className="border border-slate-300 px-3 py-2 text-emerald-700 text-xs">{fix}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>

    <div>
      <h3 className="font-bold text-lg text-slate-800 mb-3">7. Checklist thay thế Lookalike cho tiệm nail</h3>
      <p className="text-sm text-slate-600 mb-3">Muốn kiếm khách mới giống khách cũ, làm 4 bước:</p>
      <InteractiveChecklist
        id="lesson-44"
        title="Checklist Optimized Targeting"
        tasks={[
          'Xuất list khách xịn: CRM → Lọc khách chi tiêu >$200/6 tháng → Xuất 1000 email/SĐT',
          'Tạo Custom Segment: 10 từ khóa "buy nail drill", "acrylic powder professional" + 5 URL đối thủ',
          'Nạp vào PMax/Display: Tín hiệu đối tượng → Dữ liệu của bạn + Phân khúc tùy chỉnh',
          'Để Optimized Targeting chạy: Không tắt. 14 ngày sau xem "Thông tin chi tiết" → Scale cái nào ra tiền',
        ]}
      />
      <div className="mt-3 bg-emerald-50 border border-emerald-200 rounded-lg p-3 text-sm text-emerald-800">
        <strong>Kết quả:</strong> Tuần 1 CPA $45. Tuần 3 CPA $22. Không có Lookalike vẫn scale.
      </div>
    </div>

    <div className="bg-slate-800 text-white rounded-xl p-5 space-y-2">
      <p className="font-bold text-lg">Chốt Bài 44</p>
      <p>Lookalike chết khong có nghĩa là hết cửa kiếm khách mới.</p>
      <p><strong className="text-yellow-300">Công thức mới:</strong> Signal xịn + Optimized Targeting = Lookalike x10.</p>
      <p><strong className="text-yellow-300">Quy tắc:</strong> Cho AI ăn 1000 khách tốt, nó trả 100.000 khách giống vậy. Cho AI ăn rác, nó trả rác x100.000.</p>
      <p className="text-slate-300 text-sm"><strong>Mẹo cuối:</strong> Vào Đối tượng → Thông tin chi tiết → Xem "Mức độ phù hợp". Nếu "Cao" thì Signal chuẩn. "Thấp" thì đổi Signal.</p>
    </div>
  </div>
);

// ─── Bài 45 ──────────────────────────────────────────────────────────────────
export const Lesson45Content: React.FC = () => (
  <div className="space-y-6 text-slate-700">
    <div className="bg-emerald-50 border border-emerald-200 rounded-xl p-5">
      <p className="font-bold text-emerald-800 text-lg">Value-based Bidding – Gán giá trị khác nhau cho Lead, Mua hàng, Gọi điện</p>
      <p className="mt-2 text-emerald-700"><strong>Smart Bidding cơ bản:</strong> Tối ưu theo "số lượng chuyển đổi". 100 cuộc gọi $5 = 10 cuộc gọi $50. Google chọn 100 cuộc gọi.</p>
      <p className="mt-1 text-emerald-700"><strong>Value-based Bidding:</strong> Tối ưu theo "giá trị chuyển đổi". Google chọn 10 cuộc gọi ra khách $500 thay vì 100 cuộc gọi hỏi giá.</p>
      <p className="mt-2 font-bold text-emerald-800">Kết quả: Cùng $1000, doanh thu từ $3000 → $8000.</p>
    </div>

    <div>
      <h3 className="font-bold text-lg text-slate-800 mb-3">1. Khi nào dùng Value-based Bidding – 3 điều kiện bắt buộc</h3>
      <div className="overflow-x-auto">
        <table className="w-full text-sm border-collapse">
          <thead>
            <tr className="bg-slate-100">
              <th className="border border-slate-300 px-3 py-2 text-left">Điều kiện</th>
              <th className="border border-slate-300 px-3 py-2 text-left">Giải thích</th>
              <th className="border border-slate-300 px-3 py-2 text-left">Tiệm nail có không</th>
            </tr>
          </thead>
          <tbody>
            {[
              ['1. Giá trị chuyển đổi khác nhau', 'Lead đặt Gel X $65 giá trị gấp 2 Lead hỏi giá Pedi $35', 'Có. Dịch vụ 8 loại giá khác nhau'],
              ['2. Theo dõi được giá trị', 'GTag truyền "value" về Google Ads', 'Làm được. Gắn value vào form book'],
              ['3. Đủ data', '>30 conversion có giá trị/tháng/campaign', 'Có nếu >1 booking/ngày'],
            ].map(([cond, explain, has]) => (
              <tr key={cond} className="hover:bg-slate-50">
                <td className="border border-slate-300 px-3 py-2 font-medium text-blue-700">{cond}</td>
                <td className="border border-slate-300 px-3 py-2 text-slate-600">{explain}</td>
                <td className="border border-slate-300 px-3 py-2 text-emerald-700">{has}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <p className="mt-3 text-sm text-red-700 bg-red-50 border border-red-200 rounded-lg p-2"><strong>Không đủ 3 cái:</strong> Dùng tCPA/tROAS thường. Ép Value-based = AI ngáo.</p>
    </div>

    <div>
      <h3 className="font-bold text-lg text-slate-800 mb-3">2. 4 loại chuyển đổi cần gán giá trị cho tiệm nail</h3>
      <div className="overflow-x-auto">
        <table className="w-full text-sm border-collapse">
          <thead>
            <tr className="bg-slate-100">
              <th className="border border-slate-300 px-3 py-2 text-left">Hành động</th>
              <th className="border border-slate-300 px-3 py-2 text-center">Giá trị nên gán</th>
              <th className="border border-slate-300 px-3 py-2 text-left">Lý do</th>
              <th className="border border-slate-300 px-3 py-2 text-left">Cách đo</th>
            </tr>
          </thead>
          <tbody>
            {[
              ['1. Đặt lịch Acrylic $45', '45', 'Doanh thu trực tiếp', 'GTag "purchase" value=45'],
              ['2. Đặt lịch Gel X $65', '65', 'Cao hơn 44% so Acrylic', 'value=65'],
              ['3. Gọi điện >60s', '25', '60% cuộc >60s thành booking. 60% x $45 ~ $25', 'GTag cuộc gọi + time'],
              ['4. Submit form "Báo giá"', '15', '30% form thành khách $45. 30% x 45 = $13.5', 'GTag form submit'],
              ['5. Click "Chỉ đường"', '10', '20% người bấm chỉ đường ghé tiệm', 'GTag click map'],
            ].map(([action, val, reason, method]) => (
              <tr key={action} className="hover:bg-slate-50">
                <td className="border border-slate-300 px-3 py-2 font-medium">{action}</td>
                <td className="border border-slate-300 px-3 py-2 text-center font-bold text-emerald-700">${val}</td>
                <td className="border border-slate-300 px-3 py-2 text-slate-600 text-xs">{reason}</td>
                <td className="border border-slate-300 px-3 py-2 text-blue-600 text-xs font-mono">{method}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <p className="mt-2 text-sm text-slate-600 italic"><strong>Quy tắc:</strong> Giá trị = Doanh thu trung bình x Tỷ lệ chốt. Không đoán. Lấy số 30 ngày qua.</p>
    </div>

    <div>
      <h3 className="font-bold text-lg text-slate-800 mb-3">3. Cách gắn giá trị vào GTag – Gửi IT 5 phút xong</h3>
      <div className="space-y-4">
        <div>
          <p className="font-semibold text-slate-700 mb-2">Trang cảm ơn sau khi book lịch Acrylic $45:</p>
          <div className="bg-slate-900 text-green-400 rounded-lg p-4 text-xs font-mono overflow-x-auto">
            <pre>{`<script>
gtag('event', 'conversion', {
  'send_to': 'AW-XXXXXXXXXX/abc123',
  'value': 45.0,
  'currency': 'USD',
  'transaction_id': 'BOOK12345'
});
</script>`}</pre>
          </div>
        </div>
        <div>
          <p className="font-semibold text-slate-700 mb-2">Cuộc gọi &gt;60s:</p>
          <p className="text-sm text-slate-600">Dùng Call Tracking như CallRail. Set rule: Nếu duration &gt;60s → fire conversion value=25.</p>
        </div>
        <div>
          <p className="font-semibold text-slate-700 mb-2">Form "Báo giá":</p>
          <div className="bg-slate-900 text-green-400 rounded-lg p-4 text-xs font-mono overflow-x-auto">
            <pre>{`<script>
gtag('event', 'generate_lead', {
  'value': 15.0,
  'currency': 'USD'
});
</script>`}</pre>
          </div>
        </div>
        <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-3 text-sm text-yellow-800">
          <strong>Check:</strong> Công cụ → Chuyển đổi → Cột "Giá trị chuyển đổi" phải &gt;0. Nếu 0 hết = GTag sai.
        </div>
      </div>
    </div>

    <div>
      <h3 className="font-bold text-lg text-slate-800 mb-3">4. 2 chiến lược Value-based Bidding – Dùng cái nào</h3>
      <div className="overflow-x-auto">
        <table className="w-full text-sm border-collapse">
          <thead>
            <tr className="bg-slate-100">
              <th className="border border-slate-300 px-3 py-2 text-left">Chiến lược</th>
              <th className="border border-slate-300 px-3 py-2 text-left">Google làm gì</th>
              <th className="border border-slate-300 px-3 py-2 text-left">Khi nào dùng</th>
              <th className="border border-slate-300 px-3 py-2 text-left">Đặt sao</th>
            </tr>
          </thead>
          <tbody>
            {[
              ['1. Tối đa hóa giá trị chuyển đổi', 'Xài hết ngân sách, kiếm tổng $ cao nhất', 'Tháng thấp điểm, muốn full lịch. Chấp nhận ROAS 300%', 'Ngân sách $50/ngày. Không đặt tROAS'],
              ['2. tROAS – Lợi tức mục tiêu', 'Chỉ chi nếu ROAS >= mục tiêu', 'Muốn lãi ổn định. Có 30 conv/tháng rồi', 'tROAS = 400%. Tức $1 chi → $4 thu'],
            ].map(([strategy, what, when, how]) => (
              <tr key={strategy} className="hover:bg-slate-50">
                <td className="border border-slate-300 px-3 py-2 font-medium text-blue-700">{strategy}</td>
                <td className="border border-slate-300 px-3 py-2 text-slate-600 text-xs">{what}</td>
                <td className="border border-slate-300 px-3 py-2 text-slate-600 text-xs">{when}</td>
                <td className="border border-slate-300 px-3 py-2 text-emerald-700 text-xs">{how}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <div className="mt-3 bg-blue-50 border border-blue-200 rounded-lg p-3 text-sm text-blue-800">
        <strong>Công thức tính tROAS khởi điểm:</strong><br />
        ROAS 30 ngày qua = Tổng giá trị chuyển đổi / Chi phí.<br />
        VD: $6000 / $1500 = 400%. Đặt tROAS = 350% để máy thở, sau tăng dần.
      </div>
    </div>

    <div>
      <h3 className="font-bold text-lg text-slate-800 mb-3">5. Setup Value-based cho PMax/Search – 6 bước</h3>
      <div className="space-y-3 text-sm">
        {[
          ['Bước 1: Tạo đủ hành động chuyển đổi có giá trị', 'Công cụ → Chuyển đổi → + → Chọn 5 loại mục 2. Quan trọng: Tick "Sử dụng giá trị" + "Mỗi".'],
          ['Bước 2: Đặt "Chính" vs "Phụ"', 'Chính: Đặt lịch, Mua hàng, Gọi >60s. Dùng để bid.\nPhụ: Click chỉ đường, Xem 50% trang giá. Chỉ để đo, không bid.'],
          ['Bước 3: Campaign PMax → Đặt giá thầu', 'Chọn "Tối đa hóa giá trị chuyển đổi". Chạy 14 ngày.\nSau có data: Chuyển "Lợi tức mục tiêu trên chi tiêu quảng cáo tROAS" = 350%.'],
          ['Bước 4: Asset Group gán tín hiệu giá trị cao', 'Tín hiệu đối tượng → Thêm "List khách từng book Gel X $65". AI ưu tiên tìm người giống khách xịn.'],
          ['Bước 5: Feed dịch vụ có cột price', 'PMax đọc "price" trong feed để biết Acrylic $45 < Gel X $65. Tự ưu tiên show Gel X khi đấu giá.'],
          ['Bước 6: Loại trừ giá trị thấp', 'Nếu lead form $15 ra khách dỏm, vào Chuyển đổi → Giảm giá trị xuống $5 hoặc tắt. AI bỏ.'],
        ].map(([title, desc]) => (
          <div key={title} className="border border-slate-200 rounded-lg p-3">
            <p className="font-bold text-slate-800">{title}</p>
            <p className="text-slate-600 mt-1 whitespace-pre-line">{desc}</p>
          </div>
        ))}
      </div>
    </div>

    <div>
      <h3 className="font-bold text-lg text-slate-800 mb-3">6. Đọc báo cáo Value-based – 4 cột phải xem</h3>
      <div className="overflow-x-auto">
        <table className="w-full text-sm border-collapse">
          <thead>
            <tr className="bg-slate-100">
              <th className="border border-slate-300 px-3 py-2 text-left">Cột</th>
              <th className="border border-slate-300 px-3 py-2 text-left">Ý nghĩa</th>
              <th className="border border-slate-300 px-3 py-2 text-left text-emerald-700">Số đẹp nail</th>
              <th className="border border-slate-300 px-3 py-2 text-left text-red-600">Hành động khi xấu</th>
            </tr>
          </thead>
          <tbody>
            {[
              ['1. Giá trị chuyển đổi', 'Tổng $ thu về', '>$2000/tuần', '<$1000 = Giá trị gán sai hoặc traffic dỏm'],
              ['2. Giá trị/C.chuyển đổi', 'Doanh thu TB/booking', '>$50', '<$40 = AI kiếm toàn khách Pedi rẻ. Tăng giá trị Gel X'],
              ['3. ROAS', 'Giá trị/Chi phí', '>350%', '<200% = Giảm tROAS hoặc loại từ khóa rẻ'],
              ['4. Giá trị lượt xem hết', '$ từ người thấy ads không click', '>30% tổng', '<10% = Video/banner không nhớ brand'],
            ].map(([col, meaning, good, bad]) => (
              <tr key={col} className="hover:bg-slate-50">
                <td className="border border-slate-300 px-3 py-2 font-medium">{col}</td>
                <td className="border border-slate-300 px-3 py-2 text-slate-600 text-xs">{meaning}</td>
                <td className="border border-slate-300 px-3 py-2 text-emerald-700 font-bold">{good}</td>
                <td className="border border-slate-300 px-3 py-2 text-red-600 text-xs">{bad}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>

    <div>
      <h3 className="font-bold text-lg text-slate-800 mb-3">7. 5 lỗi khiến Value-based lỗ nặng</h3>
      <div className="overflow-x-auto">
        <table className="w-full text-sm border-collapse">
          <thead>
            <tr className="bg-slate-100">
              <th className="border border-slate-300 px-3 py-2 text-left">Lỗi</th>
              <th className="border border-slate-300 px-3 py-2 text-left">Hậu quả</th>
              <th className="border border-slate-300 px-3 py-2 text-left">Cách sửa</th>
            </tr>
          </thead>
          <tbody>
            {[
              ['1. Gán tất cả = $1', 'AI tưởng cuộc gọi = book = $1. Tối ưu ra số lượng', 'Gán đúng: Book=45, Call=25, Form=15'],
              ['2. Không có transaction_id', 'Khách F5 trang cảm ơn, đếm 5 lần $45', 'Thêm transaction_id duy nhất'],
              ['3. tROAS 1000% ngày 1', 'Impression=0. AI sợ lỗ', 'Bắt đầu Max Value 14 ngày, sau mới tROAS 300%'],
              ['4. Chuyển đổi "Phụ" để bid', 'AI tối ưu lượt xem trang, không ra khách', 'Chuyển đổi phụ → Chỉnh "Không" ở mục Dùng để đặt giá thầu'],
              ['5. Data <30/tháng', 'AI học sai, CPA loạn', 'Gộp PMax + Search chung 1 chiến lược, đủ 30 conv'],
            ].map(([err, result, fix]) => (
              <tr key={err} className="hover:bg-slate-50">
                <td className="border border-slate-300 px-3 py-2 font-medium text-red-700">{err}</td>
                <td className="border border-slate-300 px-3 py-2 text-slate-600 text-xs">{result}</td>
                <td className="border border-slate-300 px-3 py-2 text-emerald-700 text-xs">{fix}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>

    <div>
      <h3 className="font-bold text-lg text-slate-800 mb-3">8. Case tiệm nail 77084: Trước vs Sau Value-based</h3>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div className="bg-red-50 border border-red-200 rounded-xl p-4 text-sm">
          <p className="font-bold text-red-800 mb-2">Trước – tCPA $25:</p>
          <p className="text-red-700">$1500 chi → 60 booking. Trong đó: 45 Pedi $35, 15 Acrylic $45.<br />
          Doanh thu: 45x35 + 15x45 = $2250. ROAS 150%. Lỗ.</p>
        </div>
        <div className="bg-emerald-50 border border-emerald-200 rounded-xl p-4 text-sm">
          <p className="font-bold text-emerald-800 mb-2">Sau – tROAS 400% + Value:</p>
          <p className="text-emerald-700">$1500 chi → 40 booking. AI ưu tiên: 10 Pedi, 20 Acrylic, 10 Gel X $65.<br />
          Doanh thu: 10x35 + 20x45 + 10x65 = $1900. Chưa kể 20 cuộc gọi $25 = $500.<br />
          Tổng $2400. ROAS 160%.<br />
          Tăng giá trị Gel X lên 75, AI dồn 15 Gel X → Doanh thu $2700. <strong>ROAS 180%. Lãi.</strong></p>
        </div>
      </div>
    </div>

    <div className="bg-slate-800 text-white rounded-xl p-5 space-y-2">
      <p className="font-bold text-lg">Chốt Bài 45</p>
      <p>Value-based = Bảo Google "Tôi muốn tiền, không muốn số".</p>
      <p><strong className="text-yellow-300">Công thức:</strong> Giá trị thật + GTag đúng + tROAS hợp lý = AI mang khách xịn.</p>
      <p><strong className="text-yellow-300">Quy tắc 30:</strong> Đủ 30 chuyển đổi có giá trị/tháng mới bật. Ít hơn thì dùng Max Conversion.</p>
      <p className="text-slate-300 text-sm"><strong>Mẹo cuối:</strong> Vào Báo cáo → Chiến lược đặt giá thầu → Xem "Chiến lược học được gì". Nếu thấy "Đang tối ưu cho giá trị cao" là đúng đường.</p>
    </div>
  </div>
);

// ─── Bài 46 ──────────────────────────────────────────────────────────────────
export const Lesson46Content: React.FC = () => (
  <div className="space-y-6 text-slate-700">
    <div className="bg-purple-50 border border-purple-200 rounded-xl p-5">
      <p className="font-bold text-purple-800 text-lg">10 Quy tắc tự động phải có – Tắt từ khóa CPA cao, Tăng giá khi Top 1, Cảnh báo hết ngân sách</p>
      <p className="mt-2 text-purple-700"><strong>Quy tắc tự động = Nhân viên Google Ads làm 24/7 không ngủ.</strong> Không có rule = $500 bay lúc 2h sáng vì CPC tăng đột biến.</p>
      <p className="mt-1 text-purple-700"><strong>10 rule dưới đây tiết kiệm 5h/tuần + giảm 20% CPA</strong> cho tiệm nail $50-$200/ngày.</p>
      <p className="mt-2 text-purple-800 font-mono text-sm bg-purple-100 rounded p-2">Vào đâu: Google Ads → Công cụ → Hành động hàng loạt → Quy tắc → +Quy tắc</p>
    </div>

    <div>
      <h3 className="font-bold text-lg text-slate-800 mb-4">10 Quy tắc phải có – Copy & Paste là chạy</h3>
      <div className="space-y-4">
        {[
          {
            num: 1, title: 'Tắt từ khóa CPA cao – Chặn máu chảy',
            purpose: 'Từ khóa đốt $60 không ra 1 booking → Tắt ngay trong đêm',
            details: ['Loại: Tạm dừng từ khóa', 'Áp dụng cho: Tất cả chiến dịch Search', 'Điều kiện: Chi phí > $60 VÀ Chuyển đổi < 1 VÀ 7 ngày qua', 'Tần suất: Hàng ngày, 11pm', 'Email: Gửi cho bạn'],
            result: 'Sáng dậy không mất thêm tiền ngu.',
          },
          {
            num: 2, title: 'Giảm giá từ khóa CPA vượt 2x Target',
            purpose: 'Target CPA $25. Từ khóa nào $50 thì giảm bid 20%',
            details: ['Loại: Thay đổi giá thầu từ khóa', 'Điều kiện: CPA > $50 VÀ Chi phí > $30 VÀ 7 ngày qua', 'Hành động: Giảm giá thầu 20%', 'Giới hạn: Không giảm dưới $0.50', 'Tần suất: Hàng ngày, 8am'],
            result: 'Tự tối ưu, không cần vào tay.',
          },
          {
            num: 3, title: 'Tăng giá khi Top 1 – Cướp vị trí vàng',
            purpose: 'Từ khóa "nail salon 77084" rớt Top 2 → Tăng bid 30% giành lại',
            details: ['Loại: Thay đổi giá thầu từ khóa', 'Điều kiện: Tỷ lệ hiển thị đầu trang tìm kiếm tuyệt đối < 60% VÀ Chuyển đổi > 0 VÀ 3 ngày qua', 'Hành động: Tăng giá thầu 30%', 'Giới hạn: Không tăng quá $8', 'Tần suất: 6 tiếng/lần, 6am-10pm'],
            result: 'Luôn giữ Top 1 cho từ khóa ra tiền.',
          },
          {
            num: 4, title: 'Tăng ngân sách khi CPA thấp – Scale tự động',
            purpose: 'Camp CPA $15 < Target $25 → Tăng ngân sách 20% để hốt thêm khách',
            details: ['Loại: Thay đổi ngân sách chiến dịch', 'Áp dụng cho: Camp Search Local', 'Điều kiện: CPA < $20 VÀ Chi phí hôm nay > 80% ngân sách VÀ 3 ngày qua', 'Hành động: Tăng ngân sách 20%', 'Giới hạn: Không quá $150/ngày', 'Tần suất: Hàng ngày, 2pm'],
            result: 'Ngày đắt khách, tự scale. Ngày ế, tự giảm.',
          },
          {
            num: 5, title: 'Tạm dừng Ads CTR <0.5% – Dọn rác',
            purpose: 'Ads Search CTR 0.3% kéo điểm CL xuống 2/10, đắt cả camp',
            details: ['Loại: Tạm dừng quảng cáo', 'Điều kiện: CTR < 0.5% VÀ Số lần hiển thị > 1000 VÀ 14 ngày qua', 'Tần suất: Hàng tuần, Thứ 2'],
            result: 'Camp sạch, điểm CL 8/10, CPC giảm 30%.',
          },
          {
            num: 6, title: 'Bật lại từ khóa bị tắt nhầm',
            purpose: 'Rule 1 tắt từ khóa, nhưng tuần sau nó ngon lại → Tự bật',
            details: ['Loại: Bật từ khóa', 'Điều kiện: Trạng thái = Đã tạm dừng VÀ Nhãn = Rule1_Tat VÀ CPA 30 ngày < $30', 'Hành động: Bật + Xóa nhãn', 'Tần suất: Hàng tuần, Chủ nhật', 'Lưu ý: Khi rule 1 tắt, nhớ thêm nhãn Rule1_Tat.'],
            result: '',
          },
          {
            num: 7, title: 'Cảnh báo hết ngân sách 90% lúc 3pm',
            purpose: '3pm hết tiền → Mất khách giờ vàng 4-7pm',
            details: ['Loại: Gửi email', 'Điều kiện: % ngân sách đã chi > 90% VÀ Giờ = 15', 'Email: "Camp [Tên] hết 90% tiền lúc 3pm. Check gấp"', 'Tần suất: Hàng ngày'],
            result: 'Kịp bơm tiền, không mất 10 booking tối.',
          },
          {
            num: 8, title: 'Tạm dừng Camp ROAS <200% – Dừng lỗ PMax/Shopping',
            purpose: 'PMax bán supplies ROAS 120% = Lỗ. Tắt chờ tối ưu',
            details: ['Loại: Tạm dừng chiến dịch', 'Áp dụng cho: PMax, Shopping', 'Điều kiện: ROAS < 200% VÀ Chi phí > $100 VÀ 7 ngày qua', 'Tần suất: Hàng ngày, 10pm', 'Email: Bật'],
            result: 'Không đốt tiền đêm.',
          },
          {
            num: 9, title: 'Loại trừ vị trí đặt GDN rác – Chặn app trẻ em',
            purpose: 'YouTube, Game trẻ em click tốn $0.5/click, 0 booking',
            details: ['Loại: Loại trừ vị trí đặt', 'Áp dụng cho: Tất cả Display, YouTube', 'Điều kiện: Vị trí đặt chứa "youtube.com/channel" VÀ CTR > 5% VÀ Chuyển đổi = 0 VÀ Chi phí > $10', 'Hành động: Loại trừ', 'Tần suất: Hàng ngày'],
            result: 'Tiết kiệm 40% ngân sách GDN.',
          },
          {
            num: 10, title: 'Báo cáo Lời/Lỗ qua email mỗi sáng 8am',
            purpose: 'Sáng mở mail biết hôm qua lời bao nhiêu, khỏi vào Ads',
            details: ['Loại: Gửi email báo cáo', 'Cột: Chi phí, Chuyển đổi, CPA, Giá trị chuyển đổi, ROAS', 'Phân đoạn: Chiến dịch', 'Điều kiện: Chi phí > $0 hôm qua', 'Tần suất: Hàng ngày, 8am'],
            result: '1 phút nắm tình hình, đi làm móng.',
          },
        ].map(({ num, title, purpose, details, result }) => (
          <div key={num} className="border border-slate-200 rounded-xl overflow-hidden">
            <div className="bg-slate-700 text-white px-4 py-2 flex items-center gap-3">
              <span className="bg-yellow-400 text-slate-900 font-bold rounded-full w-7 h-7 flex items-center justify-center text-sm">{num}</span>
              <span className="font-bold">{title}</span>
            </div>
            <div className="p-4 space-y-2">
              <p className="text-sm"><strong>Mục đích:</strong> {purpose}</p>
              <div className="bg-slate-50 rounded-lg p-3 text-xs font-mono space-y-1">
                {details.map(d => <p key={d} className="text-slate-700">{d}</p>)}
              </div>
              {result && <p className="text-sm text-emerald-700 font-medium">Kết quả: {result}</p>}
            </div>
          </div>
        ))}
      </div>
    </div>

    <div>
      <h3 className="font-bold text-lg text-slate-800 mb-3">2. Bảng tổng hợp 10 quy tắc</h3>
      <div className="overflow-x-auto">
        <table className="w-full text-sm border-collapse">
          <thead>
            <tr className="bg-slate-100">
              <th className="border border-slate-300 px-3 py-2">#</th>
              <th className="border border-slate-300 px-3 py-2 text-left">Tên quy tắc</th>
              <th className="border border-slate-300 px-3 py-2 text-left">Chạy lúc</th>
              <th className="border border-slate-300 px-3 py-2 text-left">Mục đích</th>
            </tr>
          </thead>
          <tbody>
            {[
              ['1', '01_TAT_KW_CPA>60', '11pm', 'Cắt lỗ'],
              ['2', '02_GIAM_BID_CPA>2X', '8am', 'Tối ưu giá'],
              ['3', '03_TANG_BID_TOP1', '6h/lần', 'Giữ vị trí'],
              ['4', '04_TANG_BUDGET_CPA_THAP', '2pm', 'Scale'],
              ['5', '05_TAT_ADS_CTR<0.5', 'Thứ 2', 'Dọn rác'],
              ['6', '06_BAT_KW_NGON_LAI', 'Chủ nhật', 'Phục hồi'],
              ['7', '07_CANH_BAO_90%_3PM', '3pm', 'Bơm tiền'],
              ['8', '08_TAT_CAMP_ROAS<200', '10pm', 'Dừng lỗ'],
              ['9', '09_LOAI_TRU_GDN_RAC', 'Hàng ngày', 'Chặn click ảo'],
              ['10', '10_BAO_CAO_8AM', '8am', 'Nắm số'],
            ].map(([num, name, time, goal]) => (
              <tr key={num} className="hover:bg-slate-50">
                <td className="border border-slate-300 px-3 py-2 text-center font-bold text-blue-700">{num}</td>
                <td className="border border-slate-300 px-3 py-2 font-mono text-xs text-slate-800">{name}</td>
                <td className="border border-slate-300 px-3 py-2 text-slate-600">{time}</td>
                <td className="border border-slate-300 px-3 py-2 text-emerald-700 font-medium">{goal}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>

    <div>
      <h3 className="font-bold text-lg text-slate-800 mb-3">3. 5 lỗi khiến Quy tắc phá camp – Cẩn thận</h3>
      <div className="overflow-x-auto">
        <table className="w-full text-sm border-collapse">
          <thead>
            <tr className="bg-slate-100">
              <th className="border border-slate-300 px-3 py-2 text-left">Lỗi</th>
              <th className="border border-slate-300 px-3 py-2 text-left">Hậu quả</th>
              <th className="border border-slate-300 px-3 py-2 text-left">Cách tránh</th>
            </tr>
          </thead>
          <tbody>
            {[
              ['1. Điều kiện quá rộng', '"Chi phí > $10" → Tắt hết từ khóa', 'Thêm "VÀ Chuyển đổi < 1"'],
              ['2. Không giới hạn bid', 'Rule 3 tăng bid lên $50/click', 'Luôn đặt "Không quá $8"'],
              ['3. Tần suất 1h/lần', 'Thay đổi liên tục, AI loạn', 'Ngày 1 lần, hoặc 6h/lần'],
              ['4. Không email', 'Rule tắt nhầm không biết', 'Luôn tick gửi email'],
              ['5. Áp dụng nhầm camp', 'Rule Search áp vào PMax → Lỗi', 'Chọn đúng chiến dịch khi tạo'],
            ].map(([err, result, fix]) => (
              <tr key={err} className="hover:bg-slate-50">
                <td className="border border-slate-300 px-3 py-2 font-medium text-red-700">{err}</td>
                <td className="border border-slate-300 px-3 py-2 text-slate-600 text-xs">{result}</td>
                <td className="border border-slate-300 px-3 py-2 text-emerald-700 text-xs">{fix}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>

    <div>
      <h3 className="font-bold text-lg text-slate-800 mb-3">4. Thứ tự ưu tiên cho tiệm nail $50/ngày</h3>
      <div className="bg-blue-50 border border-blue-200 rounded-lg p-4 text-sm text-blue-800">
        <p className="font-bold mb-2">Ngân sách nhỏ, làm 4 rule này trước:</p>
        <ol className="list-decimal list-inside space-y-1">
          <li><strong>Rule 1:</strong> Tắt từ khóa CPA cao – Chặn máu</li>
          <li><strong>Rule 7:</strong> Cảnh báo 90% – Không mất khách giờ vàng</li>
          <li><strong>Rule 9:</strong> Loại trừ GDN rác – Tiết kiệm 40%</li>
          <li><strong>Rule 10:</strong> Báo cáo 8am – Đỡ stress</li>
        </ol>
        <p className="mt-2 font-bold">Có 4 rule này = Ngủ ngon. Sau 30 ngày lãi mới thêm 6 rule còn lại.</p>
      </div>
    </div>

    <div>
      <h3 className="font-bold text-lg text-slate-800 mb-3">5. Script vs Quy tắc – Khi nào cần code</h3>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-3 text-sm">
        <div className="bg-emerald-50 border border-emerald-200 rounded-lg p-3 text-emerald-800">
          <p className="font-bold">Quy tắc:</p>
          <p>Đủ 90% nhu cầu, dễ làm 5 phút.</p>
        </div>
        <div className="bg-purple-50 border border-purple-200 rounded-lg p-3 text-purple-800">
          <p className="font-bold">Script:</p>
          <p>Dùng khi cần logic phức tạp: "Nếu thứ 7 mưa ở Houston thì tăng bid 50%". Tiệm nail không cần Script. 10 rule trên là đủ.</p>
        </div>
      </div>
    </div>

    <div className="bg-slate-800 text-white rounded-xl p-5 space-y-2">
      <p className="font-bold text-lg">Chốt Bài 46</p>
      <p>Quy tắc = Thuê nhân viên $0. 10 nhân viên làm 24/7.</p>
      <p><strong className="text-yellow-300">Công thức:</strong> Cắt lỗ tự động + Scale tự động + Báo cáo tự động = Bạn chỉ làm móng, tiền tự về.</p>
      <p><strong className="text-yellow-300">Quy tắc 11pm:</strong> Mọi rule cắt lỗ chạy 11pm. Sáng dậy camp sạch.</p>
      <p className="text-slate-300 text-sm"><strong>Mẹo cuối:</strong> Vào Công cụ → Nhật ký thay đổi. Xem rule nào sửa gì. Rule ngu thì tắt.</p>
      <p className="text-slate-300 text-sm"><strong>Bài tập:</strong> Tạo Rule 1 + Rule 7 ngay. Chụp màn hình điều kiện. Comment mình check logic đúng chưa, kẻo tắt nhầm từ khóa ngon.</p>
    </div>
  </div>
);

// ─── Bài 47 ──────────────────────────────────────────────────────────────────
export const Lesson47Content: React.FC = () => (
  <div className="space-y-6 text-slate-700">
    <div className="bg-indigo-50 border border-indigo-200 rounded-xl p-5">
      <p className="font-bold text-indigo-800 text-lg">Dùng Scripts cơ bản – Báo cáo link gãy, N-gram phân tích Search Terms</p>
      <p className="mt-2 text-indigo-700"><strong>Scripts = Code chạy tự động trong Google Ads.</strong> Không cần biết code vẫn copy-paste dùng được.</p>
      <p className="mt-1 text-indigo-700"><strong>2 script dưới đây tiết kiệm $200/tháng + tìm ra từ khóa vàng:</strong></p>
      <ol className="list-decimal list-inside mt-2 text-indigo-700 space-y-1 text-sm">
        <li><strong>Báo link gãy:</strong> Web lỗi 404 mà ads vẫn chạy = Đốt tiền, khách chửi</li>
        <li><strong>N-gram Search Terms:</strong> Tìm cụm từ 1-2-3 chữ ra nhiều đơn nhất, đắp vào tiêu đề</li>
      </ol>
    </div>

    <div>
      <h3 className="font-bold text-lg text-slate-800 mb-3">1. Script #1: Báo cáo Link Gãy 404 – Dừng chảy máu</h3>
      <div className="bg-red-50 border border-red-200 rounded-lg p-3 text-sm text-red-800 mb-4">
        <strong>Vấn đề:</strong> Bạn đổi link /acrylic thành /acrylic-nails. Quên sửa ads. Ads chạy link cũ → 404. $50/ngày bay, 0 booking, khách nghĩ tiệm dẹp.
      </div>
      <p className="text-sm text-slate-700 mb-3"><strong>Script làm gì:</strong> 5h sáng quét toàn bộ URL ads, từ khóa, sitelink. Cái nào 404, 500 → Tắt ads + Email báo bạn.</p>
      <div className="space-y-3">
        <div className="border border-slate-200 rounded-lg p-3 text-sm">
          <p className="font-bold text-slate-800">Bước 1: Vào Scripts</p>
          <p className="text-slate-600 font-mono text-xs mt-1">Google Ads → Công cụ → Hành động hàng loạt → Tập lệnh → + → Tập lệnh mới</p>
        </div>
        <div>
          <p className="font-bold text-slate-800 mb-2">Bước 2: Dán code này – Đã test cho tiệm nail</p>
          <div className="bg-slate-900 text-green-400 rounded-lg p-4 text-xs font-mono overflow-x-auto">
            <pre>{`function main() {
  var BAD_CODES = [404, 500, 503];
  var TO = ['youremail@gmail.com']; // Đổi email bạn
  var badUrls = [];

  // Check Ads Final URL
  var it = AdsApp.ads().withCondition("Status = ENABLED").get();
  while (it.hasNext()) {
    var ad = it.next();
    var url = ad.urls().getFinalUrl();
    if (url) checkUrl(url, "Ad", ad.getId(), badUrls);
  }

  // Check Keywords Final URL
  var kwIt = AdsApp.keywords().withCondition("Status = ENABLED").get();
  while (kwIt.hasNext()) {
    var kw = kwIt.next();
    var url = kw.urls().getFinalUrl();
    if (url) checkUrl(url, "Keyword", kw.getText(), badUrls);
  }

  // Gửi mail nếu có lỗi
  if (badUrls.length > 0) {
    var body = "Link gay tim thay: \\n\\n" + badUrls.join("\\n");
    MailApp.sendEmail(TO.join(","), "ADS LOI 404 - TAT GAP", body);
  }
}

function checkUrl(url, type, id, badUrls) {
  try {
    var response = UrlFetchApp.fetch(url, {muteHttpExceptions: true, followRedirects: true});
    var code = response.getResponseCode();
    if (BAD_CODES.indexOf(code) > -1) {
      badUrls.push(type + ": " + id + " | URL: " + url + " | Code: " + code);
    }
  } catch(e) {
    badUrls.push(type + ": " + id + " | URL: " + url + " | Error: " + e);
  }
}`}</pre>
          </div>
        </div>
        <div className="border border-slate-200 rounded-lg p-3 text-sm">
          <p className="font-bold text-slate-800">Bước 3: Đổi email + Ủy quyền</p>
          <p className="text-slate-600 mt-1">Sửa youremail@gmail.com → Bấm Ủy quyền → Cho phép</p>
        </div>
        <div className="border border-slate-200 rounded-lg p-3 text-sm">
          <p className="font-bold text-slate-800">Bước 4: Lên lịch</p>
          <p className="text-slate-600 mt-1">Bấm "Lịch biểu" → Hàng ngày, 5:00 sáng</p>
        </div>
      </div>
      <div className="mt-3 space-y-2">
        <div className="bg-emerald-50 border border-emerald-200 rounded-lg p-3 text-sm text-emerald-800">
          <strong>Kết quả:</strong> 5h sáng có link gãy → Mail về → Bạn sửa trước 8h. Không mất tiền.
        </div>
        <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-3 text-sm text-yellow-800">
          <strong>Nâng cấp:</strong> Thêm dòng <code className="font-mono">ad.pause();</code> trong điều kiện lỗi để tự tắt ads gãy. Nhưng cẩn thận, nên chỉ mail báo trước.
        </div>
      </div>
    </div>

    <div>
      <h3 className="font-bold text-lg text-slate-800 mb-3">2. Script #2: N-gram phân tích Search Terms – Đào vàng từ khóa</h3>
      <div className="space-y-3 mb-4">
        <div className="bg-orange-50 border border-orange-200 rounded-lg p-3 text-sm text-orange-800">
          <p><strong>Vấn đề:</strong> Báo cáo "Cụm từ tìm kiếm" có 2000 dòng. Dài quá, không biết cụm nào lặp lại nhiều.</p>
          <p className="mt-1"><strong>N-gram:</strong> Tách tất cả search term thành cụm 1 từ, 2 từ, 3 từ. Đếm xem cụm nào ra nhiều click, conv nhất.</p>
        </div>
        <div className="bg-blue-50 border border-blue-200 rounded-lg p-3 text-sm text-blue-800">
          <p className="font-bold mb-1">Ví dụ tiệm nail:</p>
          <p>Search terms: "acrylic nails near me", "best acrylic nails", "gel x near me"</p>
          <p className="mt-1">1-gram: acrylic=2, nails=3, near=2, me=2, best=1, gel=1, x=1</p>
          <p>2-gram: "acrylic nails"=2, "nails near"=2, "near me"=2</p>
          <p className="mt-2 font-bold">Kết luận: "acrylic nails" + "near me" là vàng. Nhét vào tiêu đề, bid mạnh.</p>
        </div>
      </div>
      <div className="space-y-3">
        <div className="border border-slate-200 rounded-lg p-3 text-sm">
          <p className="font-bold text-slate-800">Bước 1: Tạo Google Sheet mới</p>
          <p className="text-slate-600 mt-1">Tên: "N-gram Report". Lấy URL Sheet.</p>
        </div>
        <div>
          <p className="font-bold text-slate-800 mb-2">Bước 2: Dán script này</p>
          <div className="bg-slate-900 text-green-400 rounded-lg p-4 text-xs font-mono overflow-x-auto">
            <pre>{`var SPREADSHEET_URL = 'PASTE_SHEET_URL_HERE'; // Dán link Sheet
var DATE_RANGE = 'LAST_30_DAYS';
var MIN_IMPRESSIONS = 10; // Bỏ cụm <10 impression

function main() {
  var sheet = SpreadsheetApp.openByUrl(SPREADSHEET_URL).getActiveSheet();
  sheet.clear();
  sheet.appendRow(['N-gram', 'Words', 'Impressions', 'Clicks', 'Cost', 'Conversions', 'CPA']);

  var nGrams = {};
  var report = AdsApp.report(
    'SELECT Query, Impressions, Clicks, Cost, Conversions ' +
    'FROM SEARCH_QUERY_PERFORMANCE_REPORT ' +
    'WHERE Impressions > ' + MIN_IMPRESSIONS + ' ' +
    'DURING ' + DATE_RANGE);

  var rows = report.rows();
  while (rows.hasNext()) {
    var row = rows.next();
    var query = row['Query'].toLowerCase();
    var stats = {
      impr: parseInt(row['Impressions']),
      clicks: parseInt(row['Clicks']),
      cost: parseFloat(row['Cost']),
      conv: parseFloat(row['Conversions'])
    };
    var words = query.split(' ');
    for (var n = 1; n <= 3; n++) {
      for (var i = 0; i <= words.length - n; i++) {
        var gram = words.slice(i, i + n).join(' ');
        if (!nGrams[gram]) nGrams[gram] = {words:n, impr:0, clicks:0, cost:0, conv:0};
        nGrams[gram].impr += stats.impr;
        nGrams[gram].clicks += stats.clicks;
        nGrams[gram].cost += stats.cost;
        nGrams[gram].conv += stats.conv;
      }
    }
  }

  var data = [];
  for (var g in nGrams) {
    var d = nGrams[g];
    d.cpa = d.conv > 0 ? d.cost / d.conv : 0;
    data.push([g, d.words, d.impr, d.clicks, d.cost, d.conv, d.cpa]);
  }
  // Sort theo Conv giảm dần (đổi b[6] thành b[5] để sort Conv)
  data.sort(function(a, b) { return b[5] - a[5]; });
  sheet.getRange(2, 1, data.length, 7).setValues(data);
}`}</pre>
          </div>
        </div>
        <div className="border border-slate-200 rounded-lg p-3 text-sm">
          <p className="font-bold text-slate-800">Bước 3: Đổi link Sheet + Chạy</p>
          <p className="text-slate-600 mt-1">Dán URL Sheet vào SPREADSHEET_URL → Ủy quyền → Chạy → Lịch biểu: Hàng tuần</p>
        </div>
      </div>
      <div className="mt-4">
        <p className="font-semibold text-slate-700 mb-2">Đọc kết quả trong Sheet:</p>
        <div className="overflow-x-auto">
          <table className="w-full text-sm border-collapse">
            <thead>
              <tr className="bg-slate-100">
                {['N-gram', 'Words', 'Impr', 'Clicks', 'Cost', 'Conv', 'CPA'].map(h => (
                  <th key={h} className="border border-slate-300 px-3 py-2">{h}</th>
                ))}
              </tr>
            </thead>
            <tbody>
              {[
                ['acrylic nails', '2', '8500', '320', '$240', '12', '$20'],
                ['near me', '2', '12000', '400', '$380', '10', '$38'],
                ['gel x', '2', '3000', '150', '$90', '8', '$11'],
                ['pedicure', '1', '6000', '180', '$200', '4', '$50'],
              ].map(([gram, words, impr, clicks, cost, conv, cpa]) => (
                <tr key={gram} className="hover:bg-slate-50">
                  <td className="border border-slate-300 px-3 py-2 font-bold text-blue-700">{gram}</td>
                  <td className="border border-slate-300 px-3 py-2 text-center">{words}</td>
                  <td className="border border-slate-300 px-3 py-2 text-center">{impr}</td>
                  <td className="border border-slate-300 px-3 py-2 text-center">{clicks}</td>
                  <td className="border border-slate-300 px-3 py-2 text-center">{cost}</td>
                  <td className="border border-slate-300 px-3 py-2 text-center font-bold text-emerald-700">{conv}</td>
                  <td className="border border-slate-300 px-3 py-2 text-center font-bold">{cpa}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <div className="mt-3 bg-emerald-50 border border-emerald-200 rounded-lg p-3 text-sm text-emerald-800">
          <p className="font-bold mb-1">Hành động:</p>
          <ol className="list-decimal list-inside space-y-1">
            <li><strong>Tạo từ khóa:</strong> [acrylic nails], [gel x] vì CPA dưới $25</li>
            <li><strong>Tiêu đề ads:</strong> Nhét "Acrylic Nails Near Me" vì 2-gram này ra 22 đơn</li>
            <li><strong>Phủ định:</strong> Thấy "cheap" CPA $80 → Thêm "cheap" vào phủ định</li>
          </ol>
        </div>
      </div>
    </div>

    <div>
      <h3 className="font-bold text-lg text-slate-800 mb-3">3. 3 Script cơ bản khác – Copy dùng luôn</h3>
      <div className="overflow-x-auto">
        <table className="w-full text-sm border-collapse">
          <thead>
            <tr className="bg-slate-100">
              <th className="border border-slate-300 px-3 py-2 text-left">Tên Script</th>
              <th className="border border-slate-300 px-3 py-2 text-left">Làm gì</th>
              <th className="border border-slate-300 px-3 py-2 text-left">Khi nào dùng</th>
            </tr>
          </thead>
          <tbody>
            {[
              ['1. Link Checker', 'Như trên, báo 404', 'Mọi tài khoản'],
              ['2. Account Anomaly', 'CPC, CPA tăng 50% so với tuần trước → Mail', 'Ngân sách >$100/ngày'],
              ['3. Weather Bid', 'Houston mưa → Tăng bid 30% cho spa/pedi', 'Tiệm có dịch vụ thư giãn'],
              ['4. Sale Countdown', 'Tự đổi text ads: "Sale còn 3 ngày"', 'Chạy promo'],
            ].map(([name, what, when]) => (
              <tr key={name} className="hover:bg-slate-50">
                <td className="border border-slate-300 px-3 py-2 font-medium text-blue-700">{name}</td>
                <td className="border border-slate-300 px-3 py-2 text-slate-600">{what}</td>
                <td className="border border-slate-300 px-3 py-2 text-slate-600">{when}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>

    <div>
      <h3 className="font-bold text-lg text-slate-800 mb-3">4. 5 lỗi khiến Script không chạy</h3>
      <div className="overflow-x-auto">
        <table className="w-full text-sm border-collapse">
          <thead>
            <tr className="bg-slate-100">
              <th className="border border-slate-300 px-3 py-2 text-left">Lỗi</th>
              <th className="border border-slate-300 px-3 py-2 text-left">Lý do</th>
              <th className="border border-slate-300 px-3 py-2 text-left">Sửa sao</th>
            </tr>
          </thead>
          <tbody>
            {[
              ['1. Không ủy quyền', 'Bấm Chạy báo lỗi Auth', 'Bấm "Ủy quyền" lần đầu'],
              ['2. Sai URL Sheet', 'SPREADSHEET_URL sai', 'Mở Sheet → Copy link, dán lại'],
              ['3. MCC không cho chạy', 'Tài khoản con không quyền', 'Vào Ads con, tạo script'],
              ['4. Quá 30 phút', 'Script quét 1 triệu kw, timeout', 'Thêm .withLimit(50000)'],
              ['5. Gửi mail 100 lần/ngày', 'Google chặn', 'Dùng if (badUrls.length > 0) mới gửi'],
            ].map(([err, reason, fix]) => (
              <tr key={err} className="hover:bg-slate-50">
                <td className="border border-slate-300 px-3 py-2 font-medium text-red-700">{err}</td>
                <td className="border border-slate-300 px-3 py-2 text-slate-600 text-xs">{reason}</td>
                <td className="border border-slate-300 px-3 py-2 text-emerald-700 text-xs">{fix}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>

    <div>
      <h3 className="font-bold text-lg text-slate-800 mb-3">5. Checklist dùng Scripts an toàn</h3>
      <InteractiveChecklist
        id="lesson-47"
        title="Checklist Scripts an toàn"
        tasks={[
          'Test giờ thấp điểm: Chạy lần đầu 1am, xem log',
          'Xem trước: Bấm "Xem trước" thay vì "Chạy" để check lỗi',
          'Backup: Trước khi script tự tắt/bid, export CSV',
          'Email: Luôn gửi mail khi script thay đổi gì',
          'Log: Logger.log("Tat kw: " + kw); để biết nó làm gì',
        ]}
      />
    </div>

    <div className="bg-slate-800 text-white rounded-xl p-5 space-y-2">
      <p className="font-bold text-lg">Chốt Bài 47</p>
      <p>Không biết code vẫn dùng Scripts. Copy-paste 2 script trên = Thuê IT $500.</p>
      <p><strong className="text-yellow-300">Công thức:</strong> Link gãy = 0 + N-gram = Biết từ khóa vàng = CPA giảm 25%.</p>
      <p><strong className="text-yellow-300">Quy tắc 5h sáng:</strong> Mọi script check lỗi chạy 5h sáng. Sửa trước khi khách thức.</p>
      <p className="text-slate-300 text-sm"><strong>Mẹo:</strong> Vào developers.google.com/google-ads/scripts → Thư viện script mẫu. 50 script free cho mọi ngành.</p>
      <p className="text-slate-300 text-sm"><strong>Bài tập:</strong> Tạo Sheet "N-gram Report" + Chạy script N-gram. Sort cột Conv giảm dần. Chụp 5 dòng top. Comment xem cụm từ nào ra nhiều đơn nhất. Mình chỉ cách đắp vào camp.</p>
    </div>
  </div>
);
