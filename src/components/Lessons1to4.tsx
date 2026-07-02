import React from 'react';
import { AlertTriangle } from 'lucide-react';
import { InteractiveChecklist } from './InteractiveChecklist';
import { VisualizerSERP, VisualizerCampaignTypes, VisualizerPlatformCompare, VisualizerAdRank } from './Visualizers';

export const Lesson1Content = () => (
  <div className="prose prose-blue max-w-none text-gray-800">
    <div className="bg-blue-50 border-l-4 border-blue-500 p-4 mb-6 rounded-r-lg">
      <p className="m-0 text-sm text-blue-800 font-medium">🎯 <strong>Mục tiêu:</strong> Bài viết này viết theo kiểu cầm tay chỉ việc cho chủ tiệm nail ở Mỹ luôn. Nắm rõ tiền của bạn đi đâu và làm sao xuất hiện khi khách hàng tìm kiếm.</p>
    </div>

    <h3 className="text-2xl font-bold text-gray-900 border-b pb-2">1. Google kiếm tiền từ Ads kiểu gì? Hiểu để không bị nó "vắt"</h3>
    <p><strong>Logic cốt lõi:</strong> Google là sàn đấu giá. Bạn trả tiền mỗi khi có người <em>click</em> vào quảng cáo, gọi là **CPC - Cost Per Click**. Không có click thì không mất tiền.</p>
    
    <p>3 bên trong cuộc chơi:</p>
    <ol>
      <li><strong>Khách hàng:</strong> Lên Google gõ "nail salon near me", "acrylic nails Dallas"</li>
      <li><strong>Bạn - Chủ tiệm nail:</strong> Muốn xuất hiện ngay lúc khách có nhu cầu</li>
      <li><strong>Google:</strong> Cho bạn thuê vị trí đẹp nhất, thu tiền trên mỗi click</li>
    </ol>

    <div className="bg-slate-100 p-4 rounded-xl border border-slate-200 my-6">
      <p className="m-0 text-sm"><strong>Ví dụ thực chiến ngành nail ở Houston, TX:</strong><br/> Khách gõ "pedicure near me open now". Có 5 tiệm cùng chạy ads. Google cho 4 vị trí ads trên cùng. Ai trả cao + quảng cáo liên quan nhất thì lên top. Khách click vào tiệm bạn → bạn mất $3.50. Khách đặt lịch làm chân $45 → bạn lời.</p>
    </div>

    <p className="font-medium text-red-600">➔ Bài học rút ra: Google chỉ kiếm được tiền khi bạn có khách. Nên nó sẽ cố gắng đưa khách <em>thật sự muốn làm nail</em> đến cho bạn. Việc của bạn là đừng trả tiền cho click tào lao.</p>

    <h3 className="text-2xl font-bold text-gray-900 mt-10 border-b pb-2">2. 7 vị trí quảng cáo Google sẽ hiển thị</h3>
    <div className="overflow-x-auto my-6">
      <table className="min-w-full bg-white border border-gray-200 text-sm rounded-lg overflow-hidden shadow-sm">
        <thead className="bg-slate-800 text-white">
          <tr>
            <th className="py-3 px-4 text-left font-bold w-1/4">Vị trí</th>
            <th className="py-3 px-4 text-left font-bold w-1/4">Xuất hiện ở đâu</th>
            <th className="py-3 px-4 text-left font-bold w-1/4">Dùng cho tiệm nail làm gì</th>
            <th className="py-3 px-4 text-left font-bold">CPC trung bình (Mỹ)</th>
          </tr>
        </thead>
        <tbody className="divide-y divide-gray-200">
          <tr>
            <td className="py-3 px-4 font-bold text-blue-700">1. Google Search - Top 4</td>
            <td className="py-3 px-4">Trên cùng trang kết quả tìm kiếm, có chữ "Sponsored"</td>
            <td className="py-3 px-4 font-medium text-emerald-600">Quan trọng nhất. Hốt khách nóng, đang cần làm ngay</td>
            <td className="py-3 px-4">$2 - $6/click</td>
          </tr>
          <tr>
            <td className="py-3 px-4 font-bold text-blue-700">2. Google Search - Dưới cùng</td>
            <td className="py-3 px-4">Cuối trang 1 Google</td>
            <td className="py-3 px-4">Rẻ hơn top 30-40%, nhưng ít người kéo tới</td>
            <td className="py-3 px-4">$1.5 - $4/click</td>
          </tr>
          <tr>
            <td className="py-3 px-4 font-bold text-blue-700">3. Google Maps - Local Pack</td>
            <td className="py-3 px-4">Trong app Google Maps + Phần bản đồ trên Google Search</td>
            <td className="py-3 px-4 font-medium text-emerald-600">Quan trọng nhì. Khách tìm đường đến tiệm</td>
            <td className="py-3 px-4">$2.5 - $7/click</td>
          </tr>
          <tr>
            <td className="py-3 px-4 font-bold text-blue-700">4. Google Display GDN</td>
            <td className="py-3 px-4">Banner trên các web: weather.com, dailymail...</td>
            <td className="py-3 px-4">Remarketing: Bám đuôi khách đã vào web bạn</td>
            <td className="py-3 px-4">$0.5 - $2/click</td>
          </tr>
          <tr>
            <td className="py-3 px-4 font-bold text-blue-700">5. YouTube</td>
            <td className="py-3 px-4">Trước video, giữa video, kế bên video</td>
            <td className="py-3 px-4">Chạy video giới thiệu tiệm, ưu đãi. Dùng để branding</td>
            <td className="py-3 px-4">$0.05 - $0.30/view</td>
          </tr>
          <tr>
            <td className="py-3 px-4 font-bold text-blue-700">6. Gmail</td>
            <td className="py-3 px-4">Tab Promotions trong Gmail</td>
            <td className="py-3 px-4">Gửi ưu đãi "$10 off" cho danh sách khách cũ</td>
            <td className="py-3 px-4">$0.2 - $1/click</td>
          </tr>
          <tr>
            <td className="py-3 px-4 font-bold text-blue-700">7. Performance Max</td>
            <td className="py-3 px-4">Google tự phân phối vào tất cả 6 vị trí trên</td>
            <td className="py-3 px-4">Chạy khi bạn đã có data tốt. 70% tiệm nail Mỹ giờ chạy</td>
            <td className="py-3 px-4">$2 - $5/click tổng</td>
          </tr>
        </tbody>
      </table>
    </div>

    <VisualizerSERP />

    <p>Nếu bạn không chạy ads, bạn rớt xuống vị trí tự nhiên (SEO). Khách lười kéo nên 70% click vào 4 ông "Sponsored" đầu tiên.</p>

    <h3 className="text-2xl font-bold text-gray-900 mt-10 border-b pb-2">3. Tiệm nail nên xuất hiện ở đâu trước? Thứ tự ưu tiên</h3>
    <p>Với ngân sách $500-$1000/tháng, đừng tham chạy hết. Đánh theo thứ tự này:</p>
    
    <div className="space-y-4 my-6">
      <div className="bg-white border-l-4 border-blue-500 p-4 shadow-sm">
        <h4 className="font-bold text-lg m-0 text-blue-800">Ưu tiên 1: Google Search + Google Maps</h4>
        <p className="text-sm mt-2 text-gray-600 m-0"><strong>Lý do:</strong> Khách đang "khát", tìm là muốn làm ngay hôm nay. Tỉ lệ đặt lịch 15-25%. 1 click $4, 4 click có 1 khách, làm bộ nails $60 → ROAS 4:1.<br/>
        <strong>Từ khóa phải chạy:</strong> <code>nail salon + [zipcode]</code>, <code>nail salon near me</code>, <code>acrylic nails</code>, <code>pedicure</code>, <code>gel x</code>.</p>
      </div>
      <div className="bg-white border-l-4 border-indigo-500 p-4 shadow-sm">
        <h4 className="font-bold text-lg m-0 text-indigo-800">Ưu tiên 2: Remarketing GDN + YouTube</h4>
        <p className="text-sm mt-2 text-gray-600 m-0"><strong>Lý do:</strong> 95% khách vào web lần đầu không đặt lịch. Chạy banner "Quay lại nhận $5 off" bám theo họ 14 ngày. Chi phí $0.5/click kéo họ về.<br/>
        <strong>Điều kiện:</strong> Web phải có &gt;100 người vào/tháng mới chạy được.</p>
      </div>
      <div className="bg-white border-l-4 border-purple-500 p-4 shadow-sm">
        <h4 className="font-bold text-lg m-0 text-purple-800">Ưu tiên 3: Performance Max</h4>
        <p className="text-sm mt-2 text-gray-600 m-0"><strong>Lý do:</strong> Khi bạn đã có &gt;30 chuyển đổi/tháng từ Search. Lúc đó quăng cho Google AI nó tự tìm khách giống vậy.<br/>
        <strong>Cảnh báo:</strong> Chạy PMax khi chưa có data thì đốt tiền.</p>
      </div>
    </div>

    <InteractiveChecklist 
      id="chk1"
      title="Checklist Bài 1"
      tasks={[
        "Search Google: Gõ 'nail salon + zipcode tiệm bạn'. Chụp lại xem 4 vị trí ads đầu là tiệm nào.",
        "Check Google Maps: Gõ 'nail salon' trên app Maps. Xem tiệm nào hiện 'Sponsored'.",
        "Vào Google Keyword Planner: Gõ 'nail salon houston' xem CPC gợi ý bao nhiêu để ước lượng ngân sách."
      ]}
    />
  </div>
);

export const Lesson2Content = () => (
  <div className="prose prose-blue max-w-none text-gray-800">
    <div className="bg-blue-50 border-l-4 border-blue-500 p-4 mb-6 rounded-r-lg">
      <p className="m-0 text-sm text-blue-800 font-medium">🎯 <strong>Tâm điểm:</strong> Nắm chắc bài này là chọn đúng loại camp, không đốt tiền sai chỗ.</p>
    </div>

    <VisualizerCampaignTypes />

    <h3 className="text-2xl font-bold text-gray-900 border-b pb-2 mt-10">1. Google Search - Quảng cáo tìm kiếm</h3>
    <ul className="list-disc pl-5">
      <li><strong>Nó là gì:</strong> Chữ hiển thị trên Google khi người ta chủ động search từ khóa. (VD: "mua iphone 15")</li>
      <li><strong>Khi nào dùng:</strong> Khách đã có nhu cầu, đang so sánh giá/mua ngay (BOF). Phù hợp B2B, dịch vụ địa phương.</li>
      <li><strong>Ưu điểm:</strong> Tỷ lệ chuyển đổi cao nhất, 3-10%. Dễ đo lường.</li>
      <li><strong>Nhược điểm:</strong> Cạnh tranh cao → CPC đắt. Không tạo được nhu cầu mới.</li>
    </ul>

    <h3 className="text-2xl font-bold text-gray-900 border-b pb-2 mt-8">2. Google Display - GDN</h3>
    <ul className="list-disc pl-5">
      <li><strong>Nó là gì:</strong> Banner hình ảnh/GIF hiện trên 35 triệu web/app.</li>
      <li><strong>Khi nào dùng:</strong> Phủ thương hiệu (TOF) hoặc Remarketing người đã vào web (MOF).</li>
      <li><strong>Ưu điểm:</strong> CPM rẻ, 3k-10k/1000 lần hiển thị. Phủ rộng.</li>
      <li><strong>Nhược điểm:</strong> CTR thấp 0.1-0.5%. Nhiều click ảo.</li>
    </ul>

    <h3 className="text-2xl font-bold text-gray-900 border-b pb-2 mt-8">3. YouTube Ads - Video</h3>
    <div className="overflow-x-auto my-4">
      <table className="min-w-full bg-white border border-gray-200 text-sm rounded-lg">
        <thead className="bg-gray-50">
          <tr>
            <th className="py-2 px-4 text-left font-bold w-1/3">Format</th>
            <th className="py-2 px-4 text-left font-bold">Đặc điểm & Sử dụng</th>
          </tr>
        </thead>
        <tbody className="divide-y divide-gray-100">
          <tr><td className="py-2 px-4 font-bold">In-stream Skip</td><td className="py-2 px-4">Bỏ qua sau 5s, tính tiền khi xem 30s. Dùng kể chuyện.</td></tr>
          <tr><td className="py-2 px-4 font-bold">In-stream Non-skip</td><td className="py-2 px-4">15s không bỏ qua. Thông điệp ngắn, branding.</td></tr>
          <tr><td className="py-2 px-4 font-bold">In-feed</td><td className="py-2 px-4">Hiện như video thường khi search.</td></tr>
          <tr><td className="py-2 px-4 font-bold">Bumper</td><td className="py-2 px-4">6s không bỏ qua. Nhắc nhớ thương hiệu.</td></tr>
          <tr><td className="py-2 px-4 font-bold">Shorts</td><td className="py-2 px-4">Video dọc. GenZ, sản phẩm trend.</td></tr>
        </tbody>
      </table>
    </div>

    <div className="bg-slate-800 text-white p-6 rounded-xl mt-10 shadow-lg">
      <h4 className="font-bold text-yellow-400 m-0 text-xl border-b border-slate-600 pb-2 mb-4">Công thức phối hợp chuẩn 2026</h4>
      <ol className="space-y-2 mb-0 pl-5">
        <li><strong>Bắt đầu:</strong> Search Exact + Phrase để có đơn đầu tiên.</li>
        <li><strong>Tháng 2:</strong> Thêm Display Remarketing để vớt khách.</li>
        <li><strong>Tháng 3:</strong> Test PMax nếu đã có &gt;30 chuyển đổi/tháng.</li>
        <li><strong>Có video:</strong> Thêm YouTube để giảm CPA Search.</li>
        <li><strong>Có TMĐT:</strong> Bắt buộc chạy Shopping.</li>
      </ol>
      <p className="mt-4 text-red-300 font-bold text-sm m-0">❌ Sai lầm: Chạy Display để bán hàng ngay (Toang 99%) hoặc Chạy PMax khi tài khoản mới toanh.</p>
    </div>

    <InteractiveChecklist 
      id="chk2"
      title="Bài tập Bài 2"
      tasks={[
        "Xác định sản phẩm của bạn thuộc nhóm cần tìm kiếm (Search) hay cần phủ rộng (Display/Video).",
        "Chọn 2 loại campaign để bắt đầu cho dự án của bạn (Gợi ý: Luôn có Search)."
      ]}
    />
  </div>
);

export const Lesson3Content = () => (
  <div className="prose prose-blue max-w-none text-gray-800">
    <div className="bg-blue-50 border-l-4 border-blue-500 p-4 mb-6 rounded-r-lg">
      <p className="m-0 text-sm text-blue-800 font-medium">🎯 <strong>Tâm điểm:</strong> Chọn sai nền tảng là đốt tiền nhanh nhất. Nhớ nguyên tắc: Google = Nhu cầu có sẵn. Facebook/TikTok = Tạo ra nhu cầu.</p>
    </div>

    <VisualizerPlatformCompare />

    <h3 className="text-2xl font-bold text-gray-900 border-b pb-2 mt-10">1. Khi nào dùng Google Ads - 5 trường hợp thắng chắc</h3>
    <ol className="space-y-2">
      <li><strong>Dịch vụ địa phương, cần gấp:</strong> Nha khoa, sửa điện thoại, hút bể phốt. Khách search là muốn dùng ngay.</li>
      <li><strong>B2B & sản phẩm giá trị cao:</strong> Phần mềm, máy móc, BĐS. Người mua sẽ research kỹ trước khi gọi.</li>
      <li><strong>Sản phẩm có thương hiệu, bị so sánh:</strong> iPhone, Laptop Dell. Khách search để so giá.</li>
      <li><strong>Nhu cầu phát sinh theo mùa/vụ:</strong> "vé máy bay Tết", "lắp điều hòa mùa hè".</li>
      <li><strong>Remarketing cực mạnh:</strong> Dùng RLSA bám đuổi thì tỷ lệ chốt tăng x3.</li>
    </ol>
    <p className="text-red-600 font-medium">❌ Khi KHÔNG nên dùng Google: Sản phẩm mới toanh, không ai biết để search.</p>

    <h3 className="text-2xl font-bold text-gray-900 border-b pb-2 mt-8">2. Khi nào dùng Facebook/Instagram Ads</h3>
    <ol className="space-y-2">
      <li><strong>Sản phẩm cần hình ảnh đẹp để kích thích:</strong> Thời trang, mỹ phẩm, nội thất. Khách mua vì thấy đẹp.</li>
      <li><strong>Tệp khách hàng rõ ràng:</strong> Mẹ bỉm 25-35t, dân văn phòng. Facebook target sâu được nhân khẩu học.</li>
      <li><strong>Phễu bán hàng phức tạp:</strong> Khóa học, thực phẩm chức năng. Chạy video kể chuyện rồi retarget.</li>
    </ol>

    <h3 className="text-2xl font-bold text-gray-900 border-b pb-2 mt-8">3. Khi nào dùng TikTok Ads</h3>
    <ol className="space-y-2">
      <li><strong>Sản phẩm trend, giá rẻ:</strong> Đồ chơi, phụ kiện, đồ ăn vặt. Giá &lt;300k dễ xuống tiền nhất.</li>
      <li><strong>Đối tượng Gen Z, &lt;25 tuổi:</strong> Sân nhà của thế hệ trẻ.</li>
      <li><strong>Bạn mạnh về content video:</strong> Bắt trend nhanh, livestream tốt.</li>
    </ol>

    <InteractiveChecklist 
      id="chk3"
      title="Bài tập Bài 3"
      tasks={[
        "Khách hàng có lên Google search sản phẩm của bạn không? Cụ thể họ search từ gì?",
        "Sản phẩm của bạn có thể quay video 15s khiến người lạ muốn mua ngay không?",
        "Khách hàng của bạn chủ yếu bao nhiêu tuổi, dùng mạng xã hội nào nhiều nhất?"
      ]}
    />
  </div>
);

export const Lesson4Content = () => (
  <div className="prose prose-blue max-w-none text-gray-800">
    <div className="bg-blue-50 border-l-4 border-blue-500 p-4 mb-6 rounded-r-lg">
      <p className="m-0 text-sm text-blue-800 font-medium">🎯 <strong>Tâm điểm:</strong> Đây là bài quan trọng nhất Giai đoạn 1. Hiểu Ad Rank là bạn hiểu 50% cách Google Ads vận hành.</p>
    </div>

    <h3 className="text-2xl font-bold text-gray-900 border-b pb-2">1. Ad Rank là gì?</h3>
    <p>Ad Rank = <strong>Điểm xếp hạng quảng cáo</strong>. Google dùng điểm này để quyết định 3 thứ:</p>
    <ol>
      <li><strong>Quảng cáo của bạn có được hiển thị không.</strong></li>
      <li><strong>Hiển thị ở vị trí mấy</strong>: Top 1, Top 2, hay cuối trang.</li>
      <li><strong>Bạn trả bao nhiêu tiền cho 1 click</strong>: CPC thực tế.</li>
    </ol>

    <div className="bg-slate-100 p-5 rounded-xl font-mono text-base text-center font-bold text-slate-800 my-6 border-2 border-slate-200 shadow-sm">
      Ad Rank = Giá thầu × Điểm chất lượng × Yếu tố khác
    </div>

    <h3 className="text-2xl font-bold text-gray-900 mt-10 border-b pb-2">2. Mổ xẻ từng thành phần</h3>
    <div className="overflow-x-auto mb-8">
      <table className="min-w-full bg-white border border-gray-200 text-sm rounded-lg">
        <thead className="bg-gray-50">
          <tr>
            <th className="py-3 px-4 text-left font-bold w-1/4">Thành phần</th>
            <th className="py-3 px-4 text-left font-bold w-1/3">Giải thích đơn giản</th>
            <th className="py-3 px-4 text-left font-bold">Ví dụ thực tế</th>
          </tr>
        </thead>
        <tbody className="divide-y divide-gray-100">
          <tr>
            <td className="py-3 px-4 font-bold text-blue-700">Giá thầu (Bid)</td>
            <td className="py-3 px-4">Số tiền tối đa bạn dám trả cho 1 click. Đặt 5k thì Google sẽ không bao giờ trừ quá 5k/click.</td>
            <td className="py-3 px-4">Bạn bid 10k, đối thủ bid 8k. Bạn có lợi thế.</td>
          </tr>
          <tr>
            <td className="py-3 px-4 font-bold text-indigo-700">Điểm chất lượng (QS)</td>
            <td className="py-3 px-4">Google chấm điểm từ 1-10 cho từ khóa. 7đ trở lên là tốt. Yếu tố: CTR dự kiến, Liên quan, Trang đích.</td>
            <td className="py-3 px-4">Bạn bid 8k nhưng QS 9/10. Đối thủ bid 10k nhưng QS 4/10 ➔ Bạn vẫn thắng.</td>
          </tr>
          <tr>
            <td className="py-3 px-4 font-bold text-emerald-700">Yếu tố khác</td>
            <td className="py-3 px-4">Ngữ cảnh (Thiết bị, giờ), Mức cạnh tranh, <strong>Tác động của tiện ích mở rộng</strong>.</td>
            <td className="py-3 px-4">2 người cùng bid 10k, QS 8/10. Ai có nhiều tiện ích mở rộng (Sitelink, Callout) hơn sẽ thắng.</td>
          </tr>
        </tbody>
      </table>
    </div>

    <h3 className="text-2xl font-bold text-gray-900 mt-10 border-b pb-2">3. Tại sao Ad Rank quan trọng hơn Giá thầu?</h3>
    <p>Xem bảng mô phỏng thực tế dưới đây là hiểu ngay tại sao bid cao chưa chắc đã lên Top:</p>
    
    <VisualizerAdRank />

    <div className="bg-emerald-50 border border-emerald-200 p-5 rounded-xl my-6">
      <h4 className="font-bold text-emerald-800 m-0 mb-3 text-lg">💡 Kết luận rút ra từ bảng:</h4>
      <ul className="text-sm m-0 space-y-2 text-emerald-900">
        <li><strong>Ông A bid thấp nhất (5k) nhưng vẫn Top 1</strong> vì Điểm chất lượng cao (9). Đặc biệt, ông chỉ phải trả 3,889đ thay vì 5,000đ.</li>
        <li><strong>Ông C bid cao nhất (10k) nhưng rớt Top 3</strong>, trả đúng 10,000đ vì QS quá tệ, không ai dưới để chia trung bình.</li>
        <li><strong>Ông D trượt luôn</strong> vì Ad Rank (24) không đạt ngưỡng hiển thị tối thiểu của Google.</li>
      </ul>
      <p className="mt-4 text-xs font-mono bg-white p-2 rounded border border-emerald-100">Công thức CPC thực tế: (Ad Rank của người ngay dưới bạn / Điểm CL của bạn) + 0.01đ</p>
    </div>

    <h3 className="text-2xl font-bold text-gray-900 mt-10 border-b pb-2">4. Ngưỡng Ad Rank - Tại sao có lúc tìm không thấy ads</h3>
    <p>Google có "ngưỡng chất lượng tối thiểu" cho mỗi phiên đấu giá. Nếu Ad Rank của bạn &lt; ngưỡng này thì dù chỉ 1 mình bạn chạy, ads cũng không hiện.</p>
    <p><strong>Các yếu tố làm tăng ngưỡng khó lên:</strong></p>
    <ul className="list-disc pl-5">
      <li>Tìm trên mobile ➔ Ngưỡng cao hơn vì màn hình nhỏ.</li>
      <li>Từ khóa cạnh tranh cao ("vay tiền", "bảo hiểm") ➔ Ngưỡng cực cao.</li>
      <li>Top 4 vị trí đầu ➔ Ngưỡng cao hơn vị trí cuối trang.</li>
    </ul>
    <p className="font-bold text-red-600">➔ Đây là lý do bạn tăng bid mãi mà ads không lên. Phải tăng Điểm chất lượng!</p>

    <h3 className="text-2xl font-bold text-gray-900 mt-10 border-b pb-2">5. 3 việc phải làm ngay để tăng Ad Rank mà không tăng tiền</h3>
    <ol className="space-y-3">
      <li><strong>Tăng Điểm chất lượng</strong>: CTR dự kiến cao, 1 nhóm QC chỉ 5-15 key, web load siêu tốc &lt;3s.</li>
      <li><strong>Cài full tiện ích mở rộng (Assets)</strong>: Sitelink, Callout, Structured Snippet, Hình ảnh, Vị trí. Google có thể +50% Ad Rank free nếu bạn đủ tiện ích.</li>
      <li><strong>Dùng đối sánh từ khóa chặt chẽ</strong>: <code>[Từ khóa chính xác]</code> luôn có Ad Rank cao hơn Broad vì độ khớp cao.</li>
    </ol>

    <InteractiveChecklist 
      id="chk4"
      title="Bài tập Bài 4"
      tasks={[
        "Vào tài khoản Google Ads, chọn 1 từ khóa đang chạy.",
        "Rê chuột vào Điểm chất lượng (Quality Score).",
        "Nếu Điểm CL < 7, xác định xem nó đang yếu ở CTR, Liên quan, hay Trang đích?"
      ]}
    />
  </div>
);
