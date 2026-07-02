export interface Lesson {
  id: string;
  title: string;
  isAvailable: boolean;
}

export interface Chapter {
  id: string;
  title: string;
  lessons: Lesson[];
}

export interface Phase {
  id: string;
  title: string;
  duration: string;
  chapters: Chapter[];
}

export const SYLLABUS: Phase[] = [
  {
    id: 'phase1',
    title: 'GIAI ĐOẠN 1: NỀN TẢNG & TƯ DUY',
    duration: '5 ngày',
    chapters: [
      {
        id: 'c1.1',
        title: 'Chương 1.1: Tổng quan hệ sinh thái',
        lessons: [
          { id: 'l1', title: 'Bài 1: Google Ads kiếm tiền thế nào, vị trí', isAvailable: true },
          { id: 'l2', title: 'Bài 2: Phân biệt 7 loại chiến dịch Google Ads', isAvailable: true },
          { id: 'l3', title: 'Bài 3: Google Ads vs Facebook Ads vs TikTok Ads', isAvailable: true },
        ],
      },
      {
        id: 'c1.2',
        title: 'Chương 1.2: Cơ chế đấu giá & xếp hạng',
        lessons: [
          { id: 'l4', title: 'Bài 4: Ad Rank = Giá thầu x Điểm chất lượng', isAvailable: true },
          { id: 'l5', title: 'Bài 5: Điểm chất lượng Quality Score', isAvailable: true },
          { id: 'l6', title: 'Bài 6: 7 loại chiến lược giá thầu', isAvailable: true },
        ],
      },
      {
        id: 'c1.3',
        title: 'Chương 1.3: Cấu trúc tài khoản chuẩn',
        lessons: [
          { id: 'l7', title: 'Bài 7: MCC vs Tài khoản thường', isAvailable: true },
          { id: 'l8', title: 'Bài 8: Quy tắc 1 Ad Group = 1 chủ đề', isAvailable: true },
          { id: 'l9', title: 'Bài 9: Các chỉ số cần nhớ', isAvailable: true },
        ],
      },
    ],
  },
  {
    id: 'phase2',
    title: 'GIAI ĐOẠN 2: THIẾT LẬP CƠ BẢN',
    duration: '1 tuần',
    chapters: [
      {
        id: 'c2.1',
        title: 'Chương 2.1: Setup kỹ thuật',
        lessons: [
          { id: 'l10', title: 'Bài 10: Tạo MCC, tài khoản con, thanh toán', isAvailable: true },
          { id: 'l11', title: 'Bài 11: Liên kết GA4 với Google Ads', isAvailable: true },
          { id: 'l12', title: 'Bài 12: Cài Tag + Conversion bằng GTM', isAvailable: true },
          { id: 'l13', title: 'Bài 13: Enhanced Conversions là gì', isAvailable: true },
        ],
      },
      {
        id: 'c2.2',
        title: 'Chương 2.2: Nghiên cứu từ khóa',
        lessons: [
          { id: 'l14', title: 'Bài 14: Tư duy chọn từ khóa – Vòng ngoài - Vòng trong - Brand', isAvailable: true },
          { id: 'l15', title: 'Bài 15: Dùng Google Keyword Planner đọc 4 cột', isAvailable: true },
          { id: 'l16', title: 'Bài 16: 3 loại đối sánh: Exact, Phrase, Broad', isAvailable: true },
          { id: 'l17', title: 'Bài 17: Lập bộ từ khóa phủ định ngay từ đầu', isAvailable: true },
        ],
      },
      {
        id: 'c2.3',
        title: 'Chương 2.3: Viết quảng cáo Search đầu tiên',
        lessons: [
          { id: 'l18', title: 'Bài 18: Công thức 15 tiêu đề + 4 mô tả', isAvailable: true },
          { id: 'l19', title: 'Bài 19: 8 loại tiện ích mở rộng bắt buộc', isAvailable: true },
          { id: 'l20', title: 'Bài 20: Checklist trang đích chuẩn', isAvailable: true },
        ],
      },
    ],
  },
  {
    id: 'phase3',
    title: 'GIAI ĐOẠN 3: TỐI ƯU & MỞ RỘNG SEARCH',
    duration: '2 tuần',
    chapters: [
      {
        id: 'c3.1',
        title: 'Chương 3.1: Đọc báo cáo & ra quyết định',
        lessons: [
          { id: 'l21', title: 'Bài 21: Báo cáo Search Terms – Tìm từ khóa vàng', isAvailable: true },
          { id: 'l22', title: 'Bài 22: Báo cáo Auction Insights – Biết địch biết ta', isAvailable: true },
          { id: 'l23', title: 'Bài 23: Báo cáo phân đoạn theo Thiết bị, Giờ, Ngày', isAvailable: true },
        ],
      },
      {
        id: 'c3.2',
        title: 'Chương 3.2: Kỹ thuật tối ưu nâng cao',
        lessons: [
          { id: 'l24', title: 'Bài 24: A/B Testing Ads – Test gì trước', isAvailable: true },
          { id: 'l25', title: 'Bài 25: RSA Ad Strength – Cách đạt "Excellent"', isAvailable: true },
          { id: 'l26', title: 'Bài 26: RLSA – Remarketing List for Search Ads', isAvailable: true },
          { id: 'l27', title: 'Bài 27: Lộ trình chuyển giá thầu Manual → tROAS', isAvailable: true },
        ],
      },
      {
        id: 'c3.3',
        title: 'Chương 3.3: Scale ngân sách an toàn',
        lessons: [
          { id: 'l28', title: 'Bài 28: Khi nào nên tăng ngân sách', isAvailable: true },
          { id: 'l29', title: 'Bài 29: SKAG cũ vs STAG mới 2024', isAvailable: true },
          { id: 'l30', title: 'Bài 30: Xử lý khi CPA tăng đột biến – 5 nguyên nhân', isAvailable: true },
        ],
      },
    ],
  },
  {
    id: 'phase4',
    title: 'GIAI ĐOẠN 4: CÁC LOẠI CHIẾN DỊCH KHÁC',
    duration: '3 tuần',
    chapters: [
      {
        id: 'c4.1',
        title: 'Chương 4.1: Google Display Network GDN',
        lessons: [
          { id: 'l31', title: 'Bài 31: Tư duy GDN – Phủ + Remarketing', isAvailable: true },
          { id: 'l32', title: 'Bài 32: Target GDN – Custom Segment, In-market', isAvailable: true },
          { id: 'l33', title: 'Bài 33: Làm banner Responsive Display Ads', isAvailable: true },
          { id: 'l34', title: 'Bài 34: Remarketing Tĩnh vs Động Dynamic', isAvailable: true },
        ],
      },
      {
        id: 'c4.2',
        title: 'Chương 4.2: YouTube Ads',
        lessons: [
          { id: 'l35', title: 'Bài 35: 4 format YouTube Ads', isAvailable: true },
          { id: 'l36', title: 'Bài 36: Target YouTube – Từ khóa, Chủ đề, Custom Intent', isAvailable: true },
          { id: 'l37', title: 'Bài 37: Công thức video 5s đầu + CTA cuối', isAvailable: true },
          { id: 'l38', title: 'Bài 38: Đo lường View-through Conversion', isAvailable: true },
        ],
      },
      {
        id: 'c4.3',
        title: 'Chương 4.3: Performance Max & Shopping',
        lessons: [
          { id: 'l39', title: 'Bài 39: PMax hoạt động thế nào – Asset Group', isAvailable: true },
          { id: 'l40', title: 'Bài 40: Setup Google Merchant Center', isAvailable: true },
          { id: 'l41', title: 'Bài 41: Tối ưu Shopping – Tiêu đề, Ảnh, Giá', isAvailable: true },
          { id: 'l42', title: 'Bài 42: Đọc báo cáo PMax – Xem Insight', isAvailable: true },
        ],
      },
    ],
  },
  {
    id: 'phase5',
    title: 'GIAI ĐOẠN 5: NÂNG CAO & TỰ ĐỘNG HÓA',
    duration: '3-4 tuần',
    chapters: [
      {
        id: 'c5.1',
        title: 'Chương 5.1: Đối tượng & Dữ liệu',
        lessons: [
          { id: 'l43', title: 'Bài 43: Customer Match – Up file SĐT/Email', isAvailable: true },
          { id: 'l44', title: 'Bài 44: Lookalike đã chết – Optimized Targeting', isAvailable: true },
          { id: 'l45', title: 'Bài 45: Value-based Bidding – Gán giá trị khác nhau', isAvailable: true },
        ],
      },
      {
        id: 'c5.2',
        title: 'Chương 5.2: Tự động hóa',
        lessons: [
          { id: 'l46', title: 'Bài 46: 10 Quy tắc tự động phải có', isAvailable: true },
          { id: 'l47', title: 'Bài 47: Dùng Scripts cơ bản – N-gram, Link gãy', isAvailable: true },
          { id: 'l48', title: 'Bài 48: Dùng Looker Studio kéo báo cáo', isAvailable: true },
        ],
      },
      {
        id: 'c5.3',
        title: 'Chương 5.3: Phân tích đa kênh',
        lessons: [
          { id: 'l49', title: 'Bài 49: Attribution Model – Data-driven thay Last Click', isAvailable: true },
          { id: 'l50', title: 'Bài 50: Đọc báo cáo đường dẫn chuyển đổi GA4', isAvailable: true },
          { id: 'l51', title: 'Bài 51: LTV và Payback Period', isAvailable: true },
        ],
      },
    ],
  },
  {
    id: 'phase6',
    title: 'GIAI ĐOẠN 6: CHUYÊN SÂU THEO NGÀNH',
    duration: 'Liên tục',
    chapters: [
      {
        id: 'c6.1',
        title: 'Chương 6.1: Chiến lược theo ngành',
        lessons: [
          { id: 'l52', title: 'Bài 52: TMĐT – PMax + Shopping + Voucher', isAvailable: true },
          { id: 'l53', title: 'Bài 53: BĐS/Spa/Bảo hiểm – Lead Form Ads', isAvailable: true },
          { id: 'l54', title: 'Bài 54: App – Chiến dịch UAC', isAvailable: true },
          { id: 'l55', title: 'Bài 55: B2B/SaaS – Customer Match + LinkedIn data', isAvailable: true },
        ],
      },
      {
        id: 'c6.2',
        title: 'Chương 6.2: Update & Audit',
        lessons: [
          { id: 'l56', title: 'Bài 56: Theo dõi update – AI Overview, Consent Mode v2', isAvailable: true },
          { id: 'l57', title: 'Bài 57: Checklist audit tài khoản 50 điểm', isAvailable: true },
          { id: 'l58', title: 'Bài 58: Thi chứng chỉ Google Ads – Mẹo pass 90%', isAvailable: true },
        ],
      },
    ],
  },
];
