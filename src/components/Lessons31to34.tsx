import React from 'react';
import { InteractiveChecklist } from './InteractiveChecklist';

// ─── Lesson 31 ────────────────────────────────────────────────────────────────
export const Lesson31Content: React.FC = () => (
  <div className="prose prose-blue max-w-none text-gray-800">
    <div className="bg-blue-50 border-l-4 border-blue-500 p-4 mb-6 rounded-r-lg">
      <p className="m-0 text-sm text-blue-800 font-medium">
        <strong>Sai lam #1 cua 90% chu tiem</strong>: Chay GDN voi ky vong ra khach book lich ngay nhu Search. Ket qua: $500 dot het, 0 cuoc goi, chui Google lua dao.
      </p>
    </div>

    <div className="bg-slate-50 border border-slate-200 rounded-xl p-4 my-4 text-sm">
      <p className="mb-1"><strong>Su that</strong>: GDN = Bien quang cao tren cao toc. Search = Nhan vien chot sale dung truoc cua.</p>
      <p className="mb-0"><strong>GDN lam 2 viec</strong>: 1. Cho 100.000 nguoi zipcode 77084 biet ban ton tai. 2. Duoi theo 3.000 nguoi da vao web ma chua book.</p>
    </div>

    <h3 className="text-2xl font-bold text-gray-900 border-b pb-2">1. GDN khac Search the nao? Dung be tu duy Search qua GDN</h3>

    <div className="overflow-x-auto my-6">
      <table className="min-w-full bg-white border border-gray-200 text-sm rounded-lg overflow-hidden shadow-sm">
        <thead className="bg-slate-800 text-white">
          <tr>
            <th className="py-3 px-4 text-left font-bold"></th>
            <th className="py-3 px-4 text-left font-bold">Google Search</th>
            <th className="py-3 px-4 text-left font-bold">Google Display GDN</th>
          </tr>
        </thead>
        <tbody className="divide-y divide-gray-200">
          <tr>
            <td className="py-3 px-4 font-bold text-slate-700">Y dinh khach</td>
            <td className="py-3 px-4">Dang tim <code>acrylic nails</code> = Muon lam ngay</td>
            <td className="py-3 px-4">Dang doc bao, xem Youtube, choi game = Khong co y dinh</td>
          </tr>
          <tr className="bg-slate-50">
            <td className="py-3 px-4 font-bold text-slate-700">Vi tri hien</td>
            <td className="py-3 px-4">Google.com</td>
            <td className="py-3 px-4">35 trieu web/app: dantri, vnexpress, youtube, app game</td>
          </tr>
          <tr>
            <td className="py-3 px-4 font-bold text-slate-700">CTR trung binh</td>
            <td className="py-3 px-4">5-12%</td>
            <td className="py-3 px-4 font-bold text-red-600">0.3-0.8% - Thap gap 15 lan</td>
          </tr>
          <tr className="bg-slate-50">
            <td className="py-3 px-4 font-bold text-slate-700">CPC</td>
            <td className="py-3 px-4">$3-$6</td>
            <td className="py-3 px-4 font-bold text-emerald-600">$0.2-$0.8 - Re gap 10 lan</td>
          </tr>
          <tr>
            <td className="py-3 px-4 font-bold text-slate-700">CVR</td>
            <td className="py-3 px-4">8-15%</td>
            <td className="py-3 px-4 font-bold text-red-600">0.5-2% - Thap gap 10 lan</td>
          </tr>
          <tr className="bg-slate-50">
            <td className="py-3 px-4 font-bold text-slate-700">Muc tieu</td>
            <td className="py-3 px-4">Ban ngay, CPA $20</td>
            <td className="py-3 px-4 font-bold text-blue-700">Phu brand + Remarketing CPA $8-$12</td>
          </tr>
          <tr>
            <td className="py-3 px-4 font-bold text-slate-700">Do luong</td>
            <td className="py-3 px-4">Chuyen doi truc tiep</td>
            <td className="py-3 px-4 font-bold text-blue-700">View-through conv + Ho tro Search</td>
          </tr>
        </tbody>
      </table>
    </div>

    <div className="bg-amber-50 border border-amber-200 rounded-xl p-4 my-4 text-sm">
      <strong>Ket luan</strong>: Dung mong GDN ra CPA $20 nhu Search. GDN CPA $40 la binh thuong. Nhung GDN lam Search re di 30% nho khach thay banner ban 7 lan roi moi search.
    </div>

    <h3 className="text-2xl font-bold text-gray-900 mt-10 border-b pb-2">2. 3 vai tro duy nhat cua GDN cho tiem nail local</h3>

    <div className="border border-blue-200 rounded-xl p-5 my-4 bg-blue-50/30">
      <h4 className="font-bold text-blue-800 mb-2">Vai tro 1: Phu thi truong - Market Dominance</h4>
      <p className="text-sm text-slate-700 mb-1">Muc tieu: 3 thang, 80% nguoi trong ban kinh 3 miles thay ten tiem ban ≥7 lan.</p>
      <p className="text-sm text-slate-700 mb-1">Cach lam: Campaign GDN "Phu 77084" → Target Zipcode + In-market "Beauty". Ngan sach $5-$10/ngay.</p>
      <p className="text-sm font-bold text-blue-700 mb-1">KPI: <strong>Impressions, CPM, Reach</strong>. Khong phai Click.</p>
      <p className="text-sm text-slate-600 mb-0">→ Ket qua: Sau 3 thang, khach search "nail salon" click ban nhieu hon vi "quen mat".</p>
    </div>

    <div className="border border-emerald-200 rounded-xl p-5 my-4 bg-emerald-50/30">
      <h4 className="font-bold text-emerald-800 mb-2">Vai tro 2: Remarketing - Hot khach rot</h4>
      <p className="text-sm text-slate-700 mb-1">Muc tieu: 96% nguoi vao web khong book. Duoi theo ho 30 ngay.</p>
      <p className="text-sm text-slate-700 mb-1">Cach lam: Campaign GDN Remarketing → Target list "All Visitors 30d" + "Booking Abandon 7d".</p>
      <p className="text-sm font-bold text-emerald-700 mb-1">KPI: <strong>View-through conversion, CPA $8-$15</strong>.</p>
      <p className="text-sm text-slate-600 mb-0">→ Ket qua: Khach thay banner 10 lan, nho ra, quay lai book. CPA re bang 1/2 Search.</p>
    </div>

    <div className="border border-purple-200 rounded-xl p-5 my-4 bg-purple-50/30">
      <h4 className="font-bold text-purple-800 mb-2">Vai tro 3: Bao ve Brand</h4>
      <p className="text-sm text-slate-700 mb-1">Muc tieu: Khach search ten ban khong bi doi thu cuop.</p>
      <p className="text-sm text-slate-700 mb-1">Cach lam: GDN Target tu khoa Brand + Doi thu. Khi khach vao web doi thu, banner ban hien len.</p>
      <p className="text-sm font-bold text-purple-700 mb-0">KPI: <strong>CTR &gt;1%</strong>. Cao vi khach biet ban.</p>
    </div>

    <h3 className="text-2xl font-bold text-gray-900 mt-10 border-b pb-2">3. 4 loai Campaign GDN cho tiem nail - Chay cai nao truoc</h3>

    <div className="overflow-x-auto my-6">
      <table className="min-w-full bg-white border border-gray-200 text-sm rounded-lg overflow-hidden shadow-sm">
        <thead className="bg-slate-800 text-white">
          <tr>
            <th className="py-3 px-4 text-left font-bold">#</th>
            <th className="py-3 px-4 text-left font-bold">Loai GDN</th>
            <th className="py-3 px-4 text-left font-bold">Target ai</th>
            <th className="py-3 px-4 text-left font-bold">Ngan sach/ngay</th>
            <th className="py-3 px-4 text-left font-bold">KPI chinh</th>
            <th className="py-3 px-4 text-left font-bold">Khi nao chay</th>
          </tr>
        </thead>
        <tbody className="divide-y divide-gray-200">
          <tr className="bg-emerald-50/30">
            <td className="py-3 px-4 font-bold text-emerald-800">1. Remarketing Chuan</td>
            <td className="py-3 px-4 text-xs">All Visitors 30d, Viewed Price 14d, Booking Abandon 7d</td>
            <td className="py-3 px-4">$5-$15</td>
            <td className="py-3 px-4 text-xs">CPA &lt;$15, View-through Conv</td>
            <td className="py-3 px-4 font-bold text-emerald-700">Chay ngay. Loi nhat</td>
          </tr>
          <tr>
            <td className="py-3 px-4 font-bold text-blue-700">2. Similar Audience</td>
            <td className="py-3 px-4 text-xs">Google tu tim nguoi giong khach cu</td>
            <td className="py-3 px-4">$5-$10</td>
            <td className="py-3 px-4 text-xs">CPA &lt;$25, CTR &gt;0.8%</td>
            <td className="py-3 px-4">Sau khi Remarketing co 1000 nguoi</td>
          </tr>
          <tr className="bg-blue-50/20">
            <td className="py-3 px-4 font-bold text-blue-700">3. In-Market</td>
            <td className="py-3 px-4 text-xs">Google: "Nguoi dang co y dinh lam dep"</td>
            <td className="py-3 px-4">$5</td>
            <td className="py-3 px-4 text-xs">CPM &lt;$3, Reach</td>
            <td className="py-3 px-4">Phu brand khi Search da on</td>
          </tr>
          <tr>
            <td className="py-3 px-4 font-bold text-slate-700">4. Custom Segment</td>
            <td className="py-3 px-4 text-xs">Tu nhap tu khoa: acrylic nails, nail salon 77084 + URL doi thu</td>
            <td className="py-3 px-4">$5</td>
            <td className="py-3 px-4 text-xs">CTR &gt;0.6%</td>
            <td className="py-3 px-4">Test sau cung. De rac</td>
          </tr>
        </tbody>
      </table>
    </div>

    <div className="bg-slate-800 text-white p-4 rounded-xl my-4 text-sm">
      <strong>Quy tac</strong>: 70% ngan sach GDN do vao Remarketing. 30% do vao Phu. Chua co 1000 nguoi vao web thi khoi chay In-Market.
    </div>

    <h3 className="text-2xl font-bold text-gray-900 mt-10 border-b pb-2">4. Anatomy 1 banner GDN ra khach cho tiem nail - Dung 5 thanh phan</h3>

    <p className="text-sm text-slate-600">GDN = Quang cao bang hinh. Khach luot 0.5s quyet dinh dung hay khong.</p>

    <div className="overflow-x-auto my-6">
      <table className="min-w-full bg-white border border-gray-200 text-sm rounded-lg overflow-hidden shadow-sm">
        <thead className="bg-slate-800 text-white">
          <tr>
            <th className="py-3 px-4 text-left font-bold">Thanh phan</th>
            <th className="py-3 px-4 text-left font-bold text-red-300">Sai - Khong ai click</th>
            <th className="py-3 px-4 text-left font-bold text-emerald-300">Dung - CTR 1.2%</th>
            <th className="py-3 px-4 text-left font-bold">Ly do</th>
          </tr>
        </thead>
        <tbody className="divide-y divide-gray-200">
          <tr>
            <td className="py-3 px-4 font-bold">1. Hinh anh</td>
            <td className="py-3 px-4 text-red-600 text-xs">Anh stock Tay, mong gia</td>
            <td className="py-3 px-4 text-emerald-700 text-xs font-medium">Anh that tiem: Ghe da, den chum, tho dang lam mong Gel X</td>
            <td className="py-3 px-4 text-xs">Khach tin "tiem that gan nha"</td>
          </tr>
          <tr className="bg-slate-50">
            <td className="py-3 px-4 font-bold">2. Tieu de 30 ky tu</td>
            <td className="py-3 px-4 text-red-600 text-xs">Nail Salon Professional Service</td>
            <td className="py-3 px-4 text-emerald-700 text-xs font-bold">Acrylic $45 - 77084</td>
            <td className="py-3 px-4 text-xs">Co gia + dia phuong = Dung luot</td>
          </tr>
          <tr>
            <td className="py-3 px-4 font-bold">3. Mo ta 90 ky tu</td>
            <td className="py-3 px-4 text-red-600 text-xs">We provide best quality nail...</td>
            <td className="py-3 px-4 text-emerald-700 text-xs font-bold">4.9 sao 1200+ Reviews. Walk-ins Welcome. Free Parking. Book Now</td>
            <td className="py-3 px-4 text-xs">Loi ich + niem tin + CTA</td>
          </tr>
          <tr className="bg-slate-50">
            <td className="py-3 px-4 font-bold">4. Logo + Ten</td>
            <td className="py-3 px-4 text-red-600 text-xs">Khong co</td>
            <td className="py-3 px-4 text-emerald-700 text-xs font-bold">Logo goc trai + Luxury Nails</td>
            <td className="py-3 px-4 text-xs">Tang brand recall</td>
          </tr>
          <tr>
            <td className="py-3 px-4 font-bold">5. CTA Button</td>
            <td className="py-3 px-4 text-red-600 text-xs">Learn More</td>
            <td className="py-3 px-4 text-emerald-700 text-xs font-bold">Book Online hoac Call Now</td>
            <td className="py-3 px-4 text-xs">Dung y dinh: Muon book</td>
          </tr>
        </tbody>
      </table>
    </div>

    <div className="bg-blue-50 border border-blue-200 rounded-xl p-4 my-4 text-sm">
      <p className="font-bold text-blue-800 mb-1">Kich thuoc bat buoc: 1200x628, 300x250, 336x280, 728x90. Du 4 size nay cover 80% web.</p>
      <p className="text-blue-900 mb-0"><strong>Meo</strong>: Dung "Quang cao hien thi thich ung" cua Google. Up 5 anh + 5 tieu de + 5 mo ta. Google tu to hop ra 1000 banner A/B test gium.</p>
    </div>

    <h3 className="text-2xl font-bold text-gray-900 mt-10 border-b pb-2">5. 5 loi dot tien GDN khien $500 bay trong 1 tuan</h3>

    <div className="overflow-x-auto my-6">
      <table className="min-w-full bg-white border border-gray-200 text-sm rounded-lg overflow-hidden shadow-sm">
        <thead className="bg-red-700 text-white">
          <tr>
            <th className="py-3 px-4 text-left font-bold">Loi</th>
            <th className="py-3 px-4 text-left font-bold">Hau qua</th>
            <th className="py-3 px-4 text-left font-bold">Sua ngay</th>
          </tr>
        </thead>
        <tbody className="divide-y divide-gray-200">
          <tr>
            <td className="py-3 px-4 font-bold text-red-800">1. Chay GDN Target "Moi nguoi"</td>
            <td className="py-3 px-4 text-xs">Hien app game tre em, web truyen tranh. CPC $0.1 nhung 0 khach</td>
            <td className="py-3 px-4 text-xs text-emerald-700 font-medium">Chi chay Remarketing + Zipcode 3 miles + In-Market</td>
          </tr>
          <tr className="bg-red-50/20">
            <td className="py-3 px-4 font-bold text-red-800">2. Khong loai tru vi tri dat</td>
            <td className="py-3 px-4 text-xs">Hien tren app Talking Tom, youtube Baby Shark</td>
            <td className="py-3 px-4 text-xs text-emerald-700 font-medium">Loai tru: Cong cu → Vi tri dat → Loai tru mobileapp::2, youtube.com kenh tre em</td>
          </tr>
          <tr>
            <td className="py-3 px-4 font-bold text-red-800">3. Dung anh khong co mat nguoi</td>
            <td className="py-3 px-4 text-xs">CTR 0.1%. Banner vo hinh</td>
            <td className="py-3 px-4 text-xs text-emerald-700 font-medium">Anh phai co: Mat tho cuoi + Mong dep + Khach</td>
          </tr>
          <tr className="bg-red-50/20">
            <td className="py-3 px-4 font-bold text-red-800">4. Do chuyen doi 1 ngay</td>
            <td className="py-3 px-4 text-xs">Thay 0 conv, tat camp. Thuc ra khach thay banner, 7 ngay sau moi search</td>
            <td className="py-3 px-4 text-xs text-emerald-700 font-medium">Do View-through conv 30 ngay. Cot → Chuyen doi → Them "Chuyen doi luot xem het"</td>
          </tr>
          <tr>
            <td className="py-3 px-4 font-bold text-red-800">5. Bid tCPA cho camp Phu</td>
            <td className="py-3 px-4 text-xs">Google khong tieu tien vi khong ra conv</td>
            <td className="py-3 px-4 text-xs text-emerald-700 font-medium">Phu dung CPM hoac Max Clicks. Remarketing moi dung tCPA</td>
          </tr>
        </tbody>
      </table>
    </div>

    <h3 className="text-2xl font-bold text-gray-900 mt-10 border-b pb-2">6. Doc bao cao GDN - 3 chi so khac Search hoan toan</h3>

    <p className="text-sm text-slate-600">Vao: <strong>Chien dich GDN → Cot</strong></p>

    <div className="overflow-x-auto my-6">
      <table className="min-w-full bg-white border border-gray-200 text-sm rounded-lg overflow-hidden shadow-sm">
        <thead className="bg-slate-800 text-white">
          <tr>
            <th className="py-3 px-4 text-left font-bold">Chi so</th>
            <th className="py-3 px-4 text-left font-bold">Search tot</th>
            <th className="py-3 px-4 text-left font-bold">GDN tot</th>
            <th className="py-3 px-4 text-left font-bold">Y nghia voi tiem nail</th>
          </tr>
        </thead>
        <tbody className="divide-y divide-gray-200">
          <tr>
            <td className="py-3 px-4 font-bold">1. CTR</td>
            <td className="py-3 px-4">&gt;6%</td>
            <td className="py-3 px-4 font-bold text-emerald-700">&gt;0.6%</td>
            <td className="py-3 px-4 text-xs">0.6% la thang. 1.2% la sieu nhan</td>
          </tr>
          <tr className="bg-slate-50">
            <td className="py-3 px-4 font-bold">2. View-through Conv</td>
            <td className="py-3 px-4">Khong co</td>
            <td className="py-3 px-4 font-bold text-emerald-700">Cao gap 3 Last-click Conv</td>
            <td className="py-3 px-4 text-xs">Khach thay banner, khong click, 5 ngay sau search → Tinh cong cho GDN</td>
          </tr>
          <tr>
            <td className="py-3 px-4 font-bold">3. CPM</td>
            <td className="py-3 px-4">Khong quan tam</td>
            <td className="py-3 px-4 font-bold text-emerald-700">&lt;$4</td>
            <td className="py-3 px-4 text-xs">$1000 duoc 250.000 lan hien trong 77084 = Phu ca quan</td>
          </tr>
        </tbody>
      </table>
    </div>

    <div className="bg-blue-50 border border-blue-200 rounded-xl p-4 my-4 text-sm">
      <strong>Cach xem GDN co ho tro Search khong</strong>: Cong cu → Phan bo → Bao cao kenh → Xem "Hien thi ho tro". Neu GDN xuat hien truoc 40% chuyen doi Search → GDN dang nuoi Search.
    </div>

    <InteractiveChecklist
      id="chk31"
      title="Checklist setup GDN Remarketing 20 phut - Lam 1 lan an 3 thang"
      tasks={[
        'Tao doi tuong: All Visitors 30d + Booking Abandon 7d. Doi >1000 nguoi',
        'Tao Campaign GDN: Ten "Remarketing - 77084" → Ngan sach $10/ngay → tCPA $15',
        'Target: Them 2 list tren. Chon "Quan sat". Dia ly: Ban kinh 5 miles 77084',
        'Loai tru: Vi tri dat → Loai tru anonymous.google, mobileapp::2, youtube.com/user/kids',
        'Quang cao: Up 5 anh tiem that + 5 TD co gia + 5 mo ta co review + Logo',
        'Cot bao cao: Them "Chuyen doi luot xem het" + "CPM"',
        'Chay 14 ngay: Khong dung. Ngay 15 moi xem CPA. GDN can thoi gian',
      ]}
    />

    <div className="bg-amber-50 border-l-4 border-amber-400 p-5 rounded-r-xl my-6">
      <p className="font-bold text-amber-800 mb-2">Chot Bai 31</p>
      <p className="text-amber-900 text-sm mb-1">GDN khong ban hang. GDN nuoi Search.</p>
      <p className="text-amber-900 text-sm mb-1"><strong>Cong thuc</strong>: Search hot khach nong hom nay. GDN tao khach nong ngay mai.</p>
      <p className="text-amber-900 text-sm mb-1">Khong chay GDN = De doi thu phu brand truoc cua nha ban 24/7.</p>
      <p className="text-amber-900 text-sm mb-0"><strong>Quy tac 7-11-4</strong>: Khach can thay ban 7 lan, tuong tac 11 lan, o 4 noi khac nhau moi nho. GDN lam 3 cai dau. Search chot cai thu 4.</p>
    </div>

    <div className="bg-slate-50 border border-slate-200 rounded-xl p-4 my-4 text-sm">
      <strong>Bai tap</strong>: Vao Cong cu → Doi tuong. Xem list "All Visitors 30d" bao nhieu nguoi. &gt;1000 thi tao ngay GDN Remarketing $5/ngay. Chup banner ban dinh chay, minh gop y CTR.
    </div>
  </div>
);

// ─── Lesson 32 ────────────────────────────────────────────────────────────────
export const Lesson32Content: React.FC = () => (
  <div className="prose prose-blue max-w-none text-gray-800">
    <div className="bg-blue-50 border-l-4 border-blue-500 p-4 mb-6 rounded-r-lg">
      <p className="m-0 text-sm text-blue-800 font-medium">
        <strong>GDN = Banner + Youtube + Gmail + 35 trieu website</strong>. Re: CPC $0.3-$1.2. Nhung dot tien neu target sai.<br />
        <strong>Quy tac GDN cho tiem nail local</strong>: GDN khong de ban ngay. Dung de <strong>bam duoi + phu thuong hieu ban kinh 5 miles</strong>. 1$ GDN = nhac khach cu quay lai, khong phai kiem khach moi.
      </p>
    </div>

    <h3 className="text-2xl font-bold text-gray-900 border-b pb-2">1. 5 cach Target GDN - Tu "Nong" den "Lanh" cho tiem nail</h3>

    <div className="overflow-x-auto my-6">
      <table className="min-w-full bg-white border border-gray-200 text-sm rounded-lg overflow-hidden shadow-sm">
        <thead className="bg-slate-800 text-white">
          <tr>
            <th className="py-3 px-4 text-left font-bold">Loai Target</th>
            <th className="py-3 px-4 text-left font-bold">Do nong</th>
            <th className="py-3 px-4 text-left font-bold">Google tim ai</th>
            <th className="py-3 px-4 text-left font-bold">Khi nao dung</th>
            <th className="py-3 px-4 text-left font-bold">CPA du kien</th>
          </tr>
        </thead>
        <tbody className="divide-y divide-gray-200">
          <tr className="bg-emerald-50/30">
            <td className="py-3 px-4 font-bold text-emerald-800">1. Remarketing</td>
            <td className="py-3 px-4 font-bold text-red-600">100°C</td>
            <td className="py-3 px-4 text-xs">Da vao web ban</td>
            <td className="py-3 px-4 font-bold text-emerald-700">Bat buoc. Bai 26 RLSA ban Display</td>
            <td className="py-3 px-4 font-bold text-emerald-700">$8-$15</td>
          </tr>
          <tr>
            <td className="py-3 px-4 font-bold text-blue-800">2. Custom Segment</td>
            <td className="py-3 px-4 font-bold text-orange-500">80°C</td>
            <td className="py-3 px-4 text-xs">Tu dinh nghia: Search tu khoa, vao web doi thu</td>
            <td className="py-3 px-4 font-medium text-blue-700">Tot nhat de kiem khach moi local</td>
            <td className="py-3 px-4">$20-$35</td>
          </tr>
          <tr className="bg-slate-50">
            <td className="py-3 px-4 font-bold text-slate-700">3. In-market</td>
            <td className="py-3 px-4 font-bold text-amber-600">60°C</td>
            <td className="py-3 px-4 text-xs">Google doan "dang muon mua" nganh Beauty</td>
            <td className="py-3 px-4 text-slate-600">Test ngan sach $10/ngay</td>
            <td className="py-3 px-4">$30-$50</td>
          </tr>
          <tr>
            <td className="py-3 px-4 font-bold text-red-700">4. Affinity</td>
            <td className="py-3 px-4 font-bold text-slate-400">30°C</td>
            <td className="py-3 px-4 text-xs">So thich lau dai: Lam dep, Thoi trang</td>
            <td className="py-3 px-4 font-bold text-red-600">Khong dung. Qua rong, dot tien</td>
            <td className="py-3 px-4 text-red-600">$60-$120</td>
          </tr>
          <tr className="bg-slate-50">
            <td className="py-3 px-4 font-bold text-slate-700">5. Content + Placement</td>
            <td className="py-3 px-4 font-bold text-slate-400">20°C</td>
            <td className="py-3 px-4 text-xs">Dat banner len web/bai cu the</td>
            <td className="py-3 px-4 text-slate-600">Dung chan web rac, khong de scale</td>
            <td className="py-3 px-4">$40-$80</td>
          </tr>
        </tbody>
      </table>
    </div>

    <div className="bg-slate-800 text-white p-4 rounded-xl my-4 text-sm">
      <strong>Chot</strong>: Tiem nail local chi chay <strong>Remarketing + Custom Segment</strong>. Con lai bo. Ngan sach $20/ngay ma bat Affinity = Nem tien.
    </div>

    <h3 className="text-2xl font-bold text-gray-900 mt-10 border-b pb-2">2. Custom Segment - Vu khi so 1 de kiem khach moi tren GDN</h3>

    <p className="text-sm text-slate-600"><strong>Custom Segment = Ban day Google: Khach cua toi la ai</strong>. 3 kieu tao:</p>

    <div className="overflow-x-auto my-6">
      <table className="min-w-full bg-white border border-gray-200 text-sm rounded-lg overflow-hidden shadow-sm">
        <thead className="bg-blue-700 text-white">
          <tr>
            <th className="py-3 px-4 text-left font-bold">Kieu Custom Segment</th>
            <th className="py-3 px-4 text-left font-bold">Cach tao</th>
            <th className="py-3 px-4 text-left font-bold">Vi du cho tiem nail 77084</th>
            <th className="py-3 px-4 text-left font-bold">Khi nao hien thi</th>
          </tr>
        </thead>
        <tbody className="divide-y divide-gray-200">
          <tr>
            <td className="py-3 px-4 font-bold text-blue-800">1. Nguoi search tu khoa</td>
            <td className="py-3 px-4 text-xs">Cong cu → Doi tuong → + Custom → "Nguoi tim tren Google"</td>
            <td className="py-3 px-4 text-xs font-mono text-slate-700">acrylic nails near me<br />gel x nail salon<br />nail salon 77084<br />best nail salon dallas</td>
            <td className="py-3 px-4 text-xs">Nguoi search 5 tu nay 30 ngay qua, gio vao web bao Dan Tri, Google hien banner ban</td>
          </tr>
          <tr className="bg-slate-50">
            <td className="py-3 px-4 font-bold text-blue-800">2. Nguoi vao web doi thu</td>
            <td className="py-3 px-4 text-xs">Chon "Nguoi duyet web" → Nhap URL</td>
            <td className="py-3 px-4 text-xs font-mono text-slate-700">regalnails.com<br />happy-nails-dallas.com<br />booksy.com/dallas-nail-salons</td>
            <td className="py-3 px-4 text-xs">Khach vao web doi thu xong, luot vnexpress thay banner ban</td>
          </tr>
          <tr>
            <td className="py-3 px-4 font-bold text-blue-800">3. Nguoi dung app</td>
            <td className="py-3 px-4 text-xs">Chon "Nguoi dung app"</td>
            <td className="py-3 px-4 text-xs font-mono text-slate-700">Booksy, StyleSeat, Instagram</td>
            <td className="py-3 px-4 text-xs">Khach hay dat lich qua app, gio thay banner</td>
          </tr>
        </tbody>
      </table>
    </div>

    <div className="bg-emerald-50 border border-emerald-200 rounded-xl p-4 my-4 text-sm">
      <p className="font-bold text-emerald-800 mb-2">Setup chuan:</p>
      <ol className="text-emerald-900 space-y-1 mb-1">
        <li>Tao 1 Custom Segment ten "Nail Intent 77084" → Nhet 10 tu khoa + 5 web doi thu ban kinh 3 miles.</li>
        <li>Tao Campaign GDN → Nhom quang cao → Doi tuong → Custom Segment → Chon cai vua tao.</li>
        <li><strong>Dia ly</strong>: Chi 77084 + ban kinh 5 miles. <strong>KHONG chay ca nuoc</strong>.</li>
        <li><strong>Bid</strong>: tCPA = CPA Search x1.5. Search $20 thi GDN dat $30.</li>
      </ol>
      <p className="text-emerald-800 text-xs mb-0"><strong>Ket qua</strong>: CPC $0.8, 1000 impression $8. 100 click moi het $80. Trong do 2-3 nguoi book = CPA $27-$40. Re hon Search.</p>
    </div>

    <h3 className="text-2xl font-bold text-gray-900 mt-10 border-b pb-2">3. In-market - Dung khi nao? List nao ngon cho nail</h3>

    <p className="text-sm text-slate-600">Vao Doi tuong → Duyet xem → "Dang can nhac mua":</p>

    <div className="overflow-x-auto my-6">
      <table className="min-w-full bg-white border border-gray-200 text-sm rounded-lg overflow-hidden shadow-sm">
        <thead className="bg-slate-700 text-white">
          <tr>
            <th className="py-3 px-4 text-left font-bold">In-market ngon</th>
            <th className="py-3 px-4 text-left font-bold">In-market bo</th>
            <th className="py-3 px-4 text-left font-bold">Ly do</th>
          </tr>
        </thead>
        <tbody className="divide-y divide-gray-200">
          <tr>
            <td className="py-3 px-4 font-bold text-emerald-700">Beauty &amp; Personal Care</td>
            <td className="py-3 px-4 text-red-600">Apparel</td>
            <td className="py-3 px-4 text-xs">Apparel = quan ao, khong lien quan</td>
          </tr>
          <tr className="bg-slate-50">
            <td className="py-3 px-4 font-bold text-emerald-700">Hair Care</td>
            <td className="py-3 px-4 text-red-600">Dating Services</td>
            <td className="py-3 px-4 text-xs">Rac</td>
          </tr>
          <tr>
            <td className="py-3 px-4 font-bold text-emerald-700">Spa &amp; Beauty Services</td>
            <td className="py-3 px-4 text-red-600">Home Improvement</td>
            <td className="py-3 px-4"></td>
          </tr>
          <tr className="bg-slate-50">
            <td className="py-3 px-4 font-bold text-emerald-700">Event Planning</td>
            <td className="py-3 px-4 text-red-600">Business Services</td>
            <td className="py-3 px-4 text-xs">Event = co dau can nail</td>
          </tr>
        </tbody>
      </table>
    </div>

    <div className="bg-blue-50 border border-blue-200 rounded-xl p-4 my-4 text-sm">
      <strong>Cach test</strong>: Tao 1 Ad Group rieng "In-market Beauty", ngan sach $5/ngay, chay 7 ngay. Neu CPA &gt;2x Search thi tat. Thuong chi Remarketing + Custom Segment loi.
    </div>

    <h3 className="text-2xl font-bold text-gray-900 mt-10 border-b pb-2">4. Affinity - Bay dot tien so 1, chu tiem hay dinh</h3>

    <p className="text-sm text-slate-700">Affinity = "Beauty Mavens", "Fashionistas". Nghe hay nhung la 50 trieu nguoi My. Ban o 77084 chi can 20,000 nguoi.</p>
    <div className="bg-red-50 border border-red-200 rounded-xl p-4 my-4 text-sm font-bold text-red-800">
      Quy tac: Ngan sach &lt;$500/ngay thi <strong>CAM bat Affinity</strong>. Bat la CPA $100+.
    </div>

    <h3 className="text-2xl font-bold text-gray-900 mt-10 border-b pb-2">5. Content + Placement - Dung de chan, khong de target</h3>

    <p className="text-sm text-slate-700"><strong>Placement</strong>: Ban chon web cu the de hien banner. <strong>Content</strong>: Chon chu de "Lam dep", "Dam cuoi".</p>

    <div className="bg-slate-50 border border-slate-200 rounded-xl p-4 my-4 text-sm">
      <p className="font-bold text-slate-700 mb-2">Dung dung cho nail local:</p>
      <ol className="text-slate-700 space-y-1 mb-1">
        <li><strong>Loai tru Placement</strong>: Sau 7 ngay chay, vao Vi tri → Xem noi quang cao hien thi → Loai tru 90% app game tre em: com.kiloo.subwaysurf, youtube.com/channel/kids. Tiet kiem 60% tien.</li>
        <li><strong>Target Placement duy nhat</strong>: Neu bao houstonchronicle.com ra chuyen doi, tao campaign rieng chi chay bao do, bid cao.</li>
      </ol>
      <p className="text-red-700 font-bold mb-0">Khong lam: Tao camp Content "Lam dep" chay ca nuoc. Ban se xuat hien tren blog An Do.</p>
    </div>

    <h3 className="text-2xl font-bold text-gray-900 mt-10 border-b pb-2">6. Combo setup GDN loi nhat cho tiem nail $30/ngay</h3>

    <p className="font-bold text-slate-700">Campaign: GDN - Remarketing + New Customer 77084</p>

    <div className="overflow-x-auto my-6">
      <table className="min-w-full bg-white border border-gray-200 text-sm rounded-lg overflow-hidden shadow-sm">
        <thead className="bg-slate-800 text-white">
          <tr>
            <th className="py-3 px-4 text-left font-bold">Ad Group</th>
            <th className="py-3 px-4 text-left font-bold">Target</th>
            <th className="py-3 px-4 text-left font-bold">Ngan sach</th>
            <th className="py-3 px-4 text-left font-bold">Bid</th>
            <th className="py-3 px-4 text-left font-bold">Muc tieu</th>
          </tr>
        </thead>
        <tbody className="divide-y divide-gray-200">
          <tr className="bg-emerald-50/30">
            <td className="py-3 px-4 font-bold text-emerald-800">1. Remarketing 30d</td>
            <td className="py-3 px-4 text-xs">All Visitors 30d</td>
            <td className="py-3 px-4">$15/ngay</td>
            <td className="py-3 px-4">tCPA $18</td>
            <td className="py-3 px-4 text-xs">Keo khach cu quay lai. CPA $12. Banner: Welcome Back - $10 Off</td>
          </tr>
          <tr>
            <td className="py-3 px-4 font-bold text-blue-800">2. Custom - Nail Intent</td>
            <td className="py-3 px-4 text-xs">Custom Segment 77084</td>
            <td className="py-3 px-4">$15/ngay</td>
            <td className="py-3 px-4">tCPA $30</td>
            <td className="py-3 px-4 text-xs">Kiem khach moi. CPA $35. Banner: New Client $5 Off + Free Design</td>
          </tr>
          <tr className="bg-red-50/20">
            <td className="py-3 px-4 font-bold text-red-700">3. Loai tru</td>
            <td className="py-3 px-4 text-xs">Converted 90d + App tre em + Placement rac</td>
            <td className="py-3 px-4">$0</td>
            <td className="py-3 px-4"></td>
            <td className="py-3 px-4 text-xs">Chong dot tien</td>
          </tr>
        </tbody>
      </table>
    </div>

    <div className="bg-blue-50 border border-blue-200 rounded-xl p-4 my-4 text-sm">
      <p className="font-bold text-blue-800 mb-1">Asset bat buoc: 5 anh vuong 1200x1200, 5 anh ngang 1200x628, Logo, 5 tieu de, 5 mo ta. Thieu asset = Google khong chay.</p>
      <p className="text-blue-900 mb-0"><strong>Banner win cho nail</strong>: Anh mong dep + Chu to $45 Acrylic + 77084 + Book Now. Khong dung anh stock tay.</p>
    </div>

    <h3 className="text-2xl font-bold text-gray-900 mt-10 border-b pb-2">7. 5 chi so phai check GDN moi 3 ngay</h3>

    <div className="overflow-x-auto my-6">
      <table className="min-w-full bg-white border border-gray-200 text-sm rounded-lg overflow-hidden shadow-sm">
        <thead className="bg-slate-800 text-white">
          <tr>
            <th className="py-3 px-4 text-left font-bold">Chi so</th>
            <th className="py-3 px-4 text-left font-bold text-emerald-300">Tot</th>
            <th className="py-3 px-4 text-left font-bold text-red-300">Xau</th>
            <th className="py-3 px-4 text-left font-bold">Hanh dong khi xau</th>
          </tr>
        </thead>
        <tbody className="divide-y divide-gray-200">
          <tr>
            <td className="py-3 px-4 font-bold">1. CTR</td>
            <td className="py-3 px-4 text-emerald-700">&gt;0.8%</td>
            <td className="py-3 px-4 text-red-600">&lt;0.4%</td>
            <td className="py-3 px-4 text-xs">Doi banner. Chu be, anh xau</td>
          </tr>
          <tr className="bg-slate-50">
            <td className="py-3 px-4 font-bold">2. % hien thi mat do xep hang</td>
            <td className="py-3 px-4 text-emerald-700">&lt;60%</td>
            <td className="py-3 px-4 text-red-600">&gt;80%</td>
            <td className="py-3 px-4 text-xs">Tang tCPA 20% hoac doi asset dep</td>
          </tr>
          <tr>
            <td className="py-3 px-4 font-bold">3. View-through Conv</td>
            <td className="py-3 px-4 text-emerald-700">Co 20-30%</td>
            <td className="py-3 px-4 text-red-600">=0</td>
            <td className="py-3 px-4 text-xs">GDN khong hieu qua, giam tien</td>
          </tr>
          <tr className="bg-slate-50">
            <td className="py-3 px-4 font-bold">4. Vi tri hien thi</td>
            <td className="py-3 px-4 text-emerald-700">Bao local, blog lam dep</td>
            <td className="py-3 px-4 text-red-600">80% app game</td>
            <td className="py-3 px-4 text-xs">Loai tru Placement ngay</td>
          </tr>
          <tr>
            <td className="py-3 px-4 font-bold">5. CPA</td>
            <td className="py-3 px-4 text-emerald-700">&lt;1.8x Search</td>
            <td className="py-3 px-4 text-red-600">&gt;3x Search</td>
            <td className="py-3 px-4 text-xs">Pause Ad Group do</td>
          </tr>
        </tbody>
      </table>
    </div>

    <h3 className="text-2xl font-bold text-gray-900 mt-10 border-b pb-2">8. 4 sai lam GDN khien chu nail tat voi sau 1 tuan</h3>

    <div className="overflow-x-auto my-6">
      <table className="min-w-full bg-white border border-gray-200 text-sm rounded-lg overflow-hidden shadow-sm">
        <thead className="bg-red-700 text-white">
          <tr>
            <th className="py-3 px-4 text-left font-bold">Loi</th>
            <th className="py-3 px-4 text-left font-bold">Hau qua</th>
            <th className="py-3 px-4 text-left font-bold">Sua sao</th>
          </tr>
        </thead>
        <tbody className="divide-y divide-gray-200">
          <tr>
            <td className="py-3 px-4 font-bold text-red-800">1. Chay Affinity "Beauty Mavens" ca nuoc</td>
            <td className="py-3 px-4 text-xs text-red-600">$100 het trong 2h, 0 cuoc goi</td>
            <td className="py-3 px-4 text-xs text-emerald-700">Pause. Chi chay Custom Segment 5 miles</td>
          </tr>
          <tr className="bg-red-50/20">
            <td className="py-3 px-4 font-bold text-red-800">2. Khong loai tru app tre em</td>
            <td className="py-3 px-4 text-xs text-red-600">70% click tu game, CPA $200</td>
            <td className="py-3 px-4 text-xs text-emerald-700">Vi tri → Loai tru → mobileapp::2 + youtube.com/channel/kids</td>
          </tr>
          <tr>
            <td className="py-3 px-4 font-bold text-red-800">3. Dung anh stock</td>
            <td className="py-3 px-4 text-xs text-red-600">CTR 0.2%. Khach My biet ngay fake</td>
            <td className="py-3 px-4 text-xs text-emerald-700">Chup mong that tai tiem. Chu to, nen sang</td>
          </tr>
          <tr className="bg-red-50/20">
            <td className="py-3 px-4 font-bold text-red-800">4. Ky vong GDN ra khach nhu Search</td>
            <td className="py-3 px-4 text-xs text-red-600">Thay CPA $40 voi tat</td>
            <td className="py-3 px-4 text-xs text-emerald-700">GDN = pheu tren. Do bang View-through Conv + Search Lift. Chay 30 ngay moi danh gia</td>
          </tr>
        </tbody>
      </table>
    </div>

    <div className="bg-amber-50 border-l-4 border-amber-400 p-5 rounded-r-xl my-6">
      <p className="font-bold text-amber-800 mb-2">Chot Bai 32: GDN = Con dao 2 luoi.</p>
      <p className="text-amber-900 text-sm mb-1"><strong>Luoi ben</strong>: Remarketing + Custom Segment 5 miles = CPA $15-$35, re hon Search.</p>
      <p className="text-amber-900 text-sm mb-1"><strong>Luoi cun</strong>: Affinity + Ca nuoc = Dot $500 khong ra 1 khach.</p>
      <p className="text-amber-900 text-sm mb-0"><strong>Quy tac 5 miles</strong>: Tiem nail local thi moi target GDN phai kem ban kinh 5 miles. Vi pham = Mat tien.</p>
    </div>

    <div className="bg-slate-50 border border-slate-200 rounded-xl p-4 my-4 text-sm">
      <strong>Bai tap</strong>: Tao 1 Custom Segment ten "Nail 77084" gom 5 tu khoa + 3 web doi thu gan ban. Chup man hinh. Comment minh check xem dung chua.
    </div>
  </div>
);

// ─── Lesson 33 ────────────────────────────────────────────────────────────────
export const Lesson33Content: React.FC = () => (
  <div className="prose prose-blue max-w-none text-gray-800">
    <div className="bg-purple-50 border-l-4 border-purple-500 p-4 mb-6 rounded-r-lg">
      <p className="m-0 text-sm text-purple-800 font-medium">
        <strong>Responsive Display = Ads bam duoi khach khap bao, app, Youtube</strong>. Khach vao web ban xong thoat, 7 ngay sau thay banner tiem ban tren VnExpress, Kenh14. CVR cao gap 4 lan vi ho da biet ban.<br />
        <strong>Nhung</strong>: Thieu anh, sai size = Google khong cho chay. Hoac chay ma mo, cat mat, bi tu choi.
      </p>
    </div>

    <h3 className="text-2xl font-bold text-gray-900 border-b pb-2">1. 5 kich thuoc anh + 1 logo = Bat buoc de ads hien 95% vi tri</h3>

    <p className="text-sm text-slate-600">Vao: <strong>Chien dich → Quang cao → +Quang cao hien thi thich ung</strong><br />
    Google yeu cau toi thieu 2 anh ngang + 1 anh vuong + 1 logo. Nhung lam du 5 size duoi thi phu 95% inventory, CTR x2.</p>

    <div className="overflow-x-auto my-6">
      <table className="min-w-full bg-white border border-gray-200 text-sm rounded-lg overflow-hidden shadow-sm">
        <thead className="bg-purple-700 text-white">
          <tr>
            <th className="py-3 px-4 text-left font-bold">#</th>
            <th className="py-3 px-4 text-left font-bold">Ty le</th>
            <th className="py-3 px-4 text-left font-bold">Kich thuoc pixel chuan</th>
            <th className="py-3 px-4 text-left font-bold">Dung o dau</th>
            <th className="py-3 px-4 text-left font-bold">Yeu cau noi dung cho tiem nail</th>
          </tr>
        </thead>
        <tbody className="divide-y divide-gray-200">
          <tr>
            <td className="py-3 px-4 font-bold">1. Anh ngang</td>
            <td className="py-3 px-4">1.91:1</td>
            <td className="py-3 px-4 font-bold font-mono">1200 x 628px</td>
            <td className="py-3 px-4 text-xs">Bao chi, Gmail, App tin tuc</td>
            <td className="py-3 px-4 text-xs">Anh tiem rong + 2-3 tho + chu Acrylic $45 goc phai</td>
          </tr>
          <tr className="bg-slate-50">
            <td className="py-3 px-4 font-bold">2. Anh vuong</td>
            <td className="py-3 px-4">1:1</td>
            <td className="py-3 px-4 font-bold font-mono">1200 x 1200px</td>
            <td className="py-3 px-4 text-xs">Facebook Audience, In-app</td>
            <td className="py-3 px-4 text-xs">Close-up bo mong dep + Gia. Khong lay anh mat khach</td>
          </tr>
          <tr>
            <td className="py-3 px-4 font-bold">3. Anh doc</td>
            <td className="py-3 px-4">4:5</td>
            <td className="py-3 px-4 font-bold font-mono">1200 x 1500px</td>
            <td className="py-3 px-4 text-xs">Instagram, App mobile</td>
            <td className="py-3 px-4 text-xs">Anh mau tay cam dien thoai, mong dep. CTR cao nhat</td>
          </tr>
          <tr className="bg-slate-50">
            <td className="py-3 px-4 font-bold">4. Logo vuong</td>
            <td className="py-3 px-4">1:1</td>
            <td className="py-3 px-4 font-bold font-mono">1200 x 1200px</td>
            <td className="py-3 px-4 text-xs">Goc ads, Gmail</td>
            <td className="py-3 px-4 text-xs">Logo tiem nen trang. Khong chu nho</td>
          </tr>
          <tr>
            <td className="py-3 px-4 font-bold">5. Logo ngang</td>
            <td className="py-3 px-4">4:1</td>
            <td className="py-3 px-4 font-bold font-mono">1200 x 300px</td>
            <td className="py-3 px-4 text-xs">Header web mobile</td>
            <td className="py-3 px-4 text-xs">Logo ngang. Neu logo ban vuong thi chen vao giua nen trang</td>
          </tr>
          <tr className="bg-slate-50">
            <td className="py-3 px-4 font-bold">6. Video 30s</td>
            <td className="py-3 px-4">16:9</td>
            <td className="py-3 px-4 font-bold font-mono">1920x1080</td>
            <td className="py-3 px-4 text-xs">Youtube, App</td>
            <td className="py-3 px-4 text-xs">Khong bat buoc nhung co thi reach x3. Quay tiem 15s + text</td>
          </tr>
        </tbody>
      </table>
    </div>

    <div className="bg-amber-50 border border-amber-200 rounded-xl p-4 my-4 text-sm">
      <p className="font-bold text-amber-800 mb-1">Quy tac 20% Text: Chu tren anh chiem &lt;20% dien tich. Vuot la Google bop reach. Dung tool text overlay cua Meta test truoc.</p>
      <p className="text-amber-900 mb-0"><strong>Meo nen anh</strong>: JPG &lt;150KB, PNG &lt;150KB. Dung tinypng.com. Anh &gt;5MB bi tu choi.</p>
    </div>

    <h3 className="text-2xl font-bold text-gray-900 mt-10 border-b pb-2">2. Cong thuc lam 1 bo anh 5 size trong 30 phut - Dung Canva</h3>

    <p className="text-sm text-slate-600">Khong can thue design $200. Tu lam:</p>

    <div className="border border-blue-200 rounded-xl p-5 my-4 bg-blue-50/20">
      <h4 className="font-bold text-blue-800 mb-3">Buoc 1: Chup 3 anh goc bang iPhone</h4>
      <ol className="text-sm text-slate-700 space-y-1 mb-0">
        <li><strong>Anh tiem</strong>: Chup ngang, du sang, co 2-3 tho dang lam, sach se</li>
        <li><strong>Anh mong</strong>: Chup vuong, close-up bo Acrylic dep nhat, nen trang</li>
        <li><strong>Anh mau</strong>: Chup doc, tay mau cam ly cafe, mong dep</li>
      </ol>
    </div>

    <div className="border border-purple-200 rounded-xl p-5 my-4 bg-purple-50/20">
      <h4 className="font-bold text-purple-800 mb-3">Buoc 2: Vao Canva → Tao 1200x628px truoc</h4>
      <ol className="text-sm text-slate-700 space-y-1 mb-0">
        <li>Keo anh tiem vao, chinh sang</li>
        <li>Them text goc phai: <code>ACRYLIC $45</code> font Montserrat Bold, size 90</li>
        <li>Them text goc trai duoi: <code>Luxury Nails 77084</code> size 40</li>
        <li>Them CTA: <code>Book Now</code> nen den, chu trang</li>
        <li>Export JPG.</li>
      </ol>
    </div>

    <div className="border border-emerald-200 rounded-xl p-5 my-4 bg-emerald-50/20">
      <h4 className="font-bold text-emerald-800 mb-2">Buoc 3: Resize 4 size con lai</h4>
      <p className="text-sm text-slate-700 mb-0">Canva → Magic Resize → Tick 1200x1200, 1200x1500, 1200x300 → Chinh lai vi tri text cho khoi cat mat → Export.</p>
    </div>

    <div className="bg-slate-50 border border-slate-200 rounded-xl p-3 my-4 text-sm font-medium text-slate-700">
      <strong>Tong</strong>: 30 phut co bo 5 anh. Thue design 2 ngay + $150.
    </div>

    <h3 className="text-2xl font-bold text-gray-900 mt-10 border-b pb-2">3. 3 loi bi Google tu choi 100% - Mat 24h duyet lai</h3>

    <div className="overflow-x-auto my-6">
      <table className="min-w-full bg-white border border-gray-200 text-sm rounded-lg overflow-hidden shadow-sm">
        <thead className="bg-red-700 text-white">
          <tr>
            <th className="py-3 px-4 text-left font-bold">Loi</th>
            <th className="py-3 px-4 text-left font-bold">Vi du sai tiem nail</th>
            <th className="py-3 px-4 text-left font-bold">Google bao loi gi</th>
            <th className="py-3 px-4 text-left font-bold">Sua sao cho duyet</th>
          </tr>
        </thead>
        <tbody className="divide-y divide-gray-200">
          <tr>
            <td className="py-3 px-4 font-bold text-red-800">Loi 1: Anh Truoc/Sau, Anh can da</td>
            <td className="py-3 px-4 text-xs">Anh mong truoc khi lam xau, sau khi lam dep. Anh zoom can da tay, lo chan long</td>
            <td className="py-3 px-4 text-xs font-mono">Shocking content, Sensitive events</td>
            <td className="py-3 px-4 text-xs text-emerald-700">Chi dung anh Sau. Chup mong dep tren nen sach. Khong zoom da</td>
          </tr>
          <tr className="bg-red-50/20">
            <td className="py-3 px-4 font-bold text-red-800">Loi 2: Text lua doi, sai su that</td>
            <td className="py-3 px-4 text-xs">Anh ghi $25 Full Set nhung web $45. Anh ghi 100% Free</td>
            <td className="py-3 px-4 text-xs font-mono">Misrepresentation, Unreliable claims</td>
            <td className="py-3 px-4 text-xs text-emerald-700">Gia tren anh = Gia landing page. Bo chu Free neu khong free 100%</td>
          </tr>
          <tr>
            <td className="py-3 px-4 font-bold text-red-800">Loi 3: Anh mo, cat cup, vien trang</td>
            <td className="py-3 px-4 text-xs">Chup man hinh, logo mo, anh cat mat dau tho. Vien trang 2 ben do sai size</td>
            <td className="py-3 px-4 text-xs font-mono">Image quality, Improper cropping</td>
            <td className="py-3 px-4 text-xs text-emerald-700">Dung 1200x628. Chu the o giua, cach vien 10%. Dung Canva grid can</td>
          </tr>
        </tbody>
      </table>
    </div>

    <div className="bg-amber-50 border border-amber-200 rounded-xl p-4 my-4 text-sm">
      <p className="font-bold text-amber-800 mb-2">Loi phu hay gap:</p>
      <ol className="text-amber-900 space-y-1 mb-0">
        <li><strong>Logo nen trong suot</strong> → Google them nen trang xau. Export logo nen trang luon.</li>
        <li><strong>Chu qua nho</strong> → Duoi 20px tren anh 1200px la khong doc duoc mobile. Test bang cach zoom 25% van doc duoc.</li>
      </ol>
    </div>

    <h3 className="text-2xl font-bold text-gray-900 mt-10 border-b pb-2">4. Viet tieu de + mo ta cho Responsive - 5 slot phai dien</h3>

    <p className="text-sm text-slate-600">Ngoai anh, Google ghep text cua ban. Dien du 5 slot sau:</p>

    <div className="overflow-x-auto my-6">
      <table className="min-w-full bg-white border border-gray-200 text-sm rounded-lg overflow-hidden shadow-sm">
        <thead className="bg-slate-700 text-white">
          <tr>
            <th className="py-3 px-4 text-left font-bold">Slot</th>
            <th className="py-3 px-4 text-left font-bold">Ky tu</th>
            <th className="py-3 px-4 text-left font-bold">Viet gi cho tiem nail</th>
            <th className="py-3 px-4 text-left font-bold">Vi du CTR cao</th>
          </tr>
        </thead>
        <tbody className="divide-y divide-gray-200">
          <tr>
            <td className="py-3 px-4 font-bold">Tieu de ngan</td>
            <td className="py-3 px-4">30</td>
            <td className="py-3 px-4 text-xs">Loi ich + Gia</td>
            <td className="py-3 px-4 text-xs font-mono font-bold text-emerald-700">Acrylic $45 - No Lifting</td>
          </tr>
          <tr className="bg-slate-50">
            <td className="py-3 px-4 font-bold">Tieu de dai</td>
            <td className="py-3 px-4">90</td>
            <td className="py-3 px-4 text-xs">Ten + Dia chi + USP</td>
            <td className="py-3 px-4 text-xs font-mono font-bold text-emerald-700">Luxury Nails 77084 - 10+ Years Techs, Sterilized Tools, 4.9 sao</td>
          </tr>
          <tr>
            <td className="py-3 px-4 font-bold">Mo ta</td>
            <td className="py-3 px-4">90</td>
            <td className="py-3 px-4 text-xs">Uu dai + CTA</td>
            <td className="py-3 px-4 text-xs font-mono font-bold text-emerald-700">New client $5 off full set. Free parking. Walk-ins welcome. Book today.</td>
          </tr>
          <tr className="bg-slate-50">
            <td className="py-3 px-4 font-bold">Ten doanh nghiep</td>
            <td className="py-3 px-4">25</td>
            <td className="py-3 px-4 text-xs">Ten tiem</td>
            <td className="py-3 px-4 text-xs font-mono">Luxury Nails</td>
          </tr>
          <tr>
            <td className="py-3 px-4 font-bold">URL cuoi</td>
            <td className="py-3 px-4"></td>
            <td className="py-3 px-4 text-xs">Trang dich vu</td>
            <td className="py-3 px-4 text-xs font-mono">luxurynails.com/acrylic</td>
          </tr>
        </tbody>
      </table>
    </div>

    <div className="bg-blue-50 border border-blue-200 rounded-xl p-3 my-4 text-sm">
      <strong>Meo</strong>: Cho 5 tieu de ngan khac nhau. Google A/B test. Cai nao CTR thap tu tat.
    </div>

    <InteractiveChecklist
      id="chk33"
      title="Checklist truoc khi bam Dang - Tranh bi tu choi (99% duyet trong 3h)"
      tasks={[
        'Du 5 anh: 1200x628, 1200x1200, 1200x1500, logo vuong, logo ngang',
        'Dung luong <150KB: Moi anh',
        'Text <20%: Nhin anh khong bi chu de nhieu',
        'Khong Before/After: Chi anh dep',
        'Gia khop web: Anh $45 thi trang dich cung $45',
        'Logo ro: Khong mo, khong nen trong suot',
        'Chu the o giua: Khong bi cat dau, cat tay khi Google crop',
        '5 tieu de + 1 mo ta: Dien du, khong copy nhau',
        'Trang dich co Policy: Footer web co Privacy Policy. Khong co la tu choi',
      ]}
    />

    <h3 className="text-2xl font-bold text-gray-900 mt-10 border-b pb-2">6. Dung cho chien dich gi? 3 cach chay RDA cho tiem nail</h3>

    <div className="overflow-x-auto my-6">
      <table className="min-w-full bg-white border border-gray-200 text-sm rounded-lg overflow-hidden shadow-sm">
        <thead className="bg-slate-800 text-white">
          <tr>
            <th className="py-3 px-4 text-left font-bold">Chien dich</th>
            <th className="py-3 px-4 text-left font-bold">Muc tieu</th>
            <th className="py-3 px-4 text-left font-bold">List doi tuong</th>
            <th className="py-3 px-4 text-left font-bold">Ngan sach</th>
            <th className="py-3 px-4 text-left font-bold">Ky vong</th>
          </tr>
        </thead>
        <tbody className="divide-y divide-gray-200">
          <tr className="bg-emerald-50/30">
            <td className="py-3 px-4 font-bold text-emerald-800">1. Remarketing</td>
            <td className="py-3 px-4 text-xs">Keo khach quay lai book</td>
            <td className="py-3 px-4 text-xs">All Visitors 30d</td>
            <td className="py-3 px-4">$10-$20/ngay</td>
            <td className="py-3 px-4 text-xs font-bold text-emerald-700">CPA $12-$18. Re nhat</td>
          </tr>
          <tr>
            <td className="py-3 px-4 font-bold text-blue-800">2. Custom Segment</td>
            <td className="py-3 px-4 text-xs">Kiem khach moi gan tiem</td>
            <td className="py-3 px-4 text-xs">Nguoi search: acrylic nails, nail salon 77084, vao web doi thu</td>
            <td className="py-3 px-4">$20-$40/ngay</td>
            <td className="py-3 px-4 text-xs">CPA $25-$35. Scale volume</td>
          </tr>
          <tr className="bg-slate-50">
            <td className="py-3 px-4 font-bold text-slate-700">3. PMax</td>
            <td className="py-3 px-4 text-xs">Google tu phan phoi</td>
            <td className="py-3 px-4 text-xs">Signal: List khach cu + Tu khoa</td>
            <td className="py-3 px-4">$50+/ngay</td>
            <td className="py-3 px-4 text-xs">Dung anh nay cho PMax luon</td>
          </tr>
        </tbody>
      </table>
    </div>

    <div className="bg-amber-50 border-l-4 border-amber-400 p-5 rounded-r-xl my-6">
      <p className="font-bold text-amber-800 mb-2">Chot Bai 33</p>
      <p className="text-amber-900 text-sm mb-1">Anh = 80% thang thua cua Display. Anh dep, dung size = CTR 1.5%. Anh sai = CTR 0.2%, dat gap 7 lan.</p>
      <p className="text-amber-900 text-sm mb-1"><strong>Quy tac 1200</strong>: Moi anh lam 1200px canh dai la song 95% vi tri.</p>
      <p className="text-amber-900 text-sm mb-0"><strong>Quy tac 20-5</strong>: Text &lt;20% anh. Lam 5 size.</p>
    </div>

    <div className="bg-slate-50 border border-slate-200 rounded-xl p-4 my-4 text-sm">
      <p className="font-bold text-slate-700 mb-1">Meo cuoi: Vao Thu vien noi dung → Tai san → Xem "Bao cao to hop". Google chi anh nao CTR cao nhat. Tuan sau lam them 3 anh style giong vay.</p>
      <p className="text-slate-600 mb-0"><strong>Bai tap</strong>: Chup 3 anh: tiem, mong, logo. Vao Canva lam 1200x628 + 1200x1200. Comment link Canva minh check text 20% chua, bo cuc on chua.</p>
    </div>
  </div>
);

// ─── Lesson 34 ────────────────────────────────────────────────────────────────
export const Lesson34Content: React.FC = () => (
  <div className="prose prose-blue max-w-none text-gray-800">
    <div className="bg-indigo-50 border-l-4 border-indigo-500 p-4 mb-6 rounded-r-lg">
      <p className="m-0 text-sm text-indigo-800 font-medium">
        <strong>Remarketing = Duoi theo khach chua mua</strong>.<br />
        <strong>Tinh Static</strong>: "E quay lai mua di". <strong>Dong Dynamic</strong>: "E doi giay Nike Air ban bo gio hom qua giam 10% roi, mua le".<br />
        <strong>Web TMDT khong chay Dynamic Remarketing = Mat 70% doanh thu remarketing</strong>. CTR cao gap 2-3 lan tinh.
      </p>
    </div>

    <h3 className="text-2xl font-bold text-gray-900 border-b pb-2">1. So sanh Tinh vs Dong - Khac gi, dung khi nao</h3>

    <div className="overflow-x-auto my-6">
      <table className="min-w-full bg-white border border-gray-200 text-sm rounded-lg overflow-hidden shadow-sm">
        <thead className="bg-slate-800 text-white">
          <tr>
            <th className="py-3 px-4 text-left font-bold w-1/4"></th>
            <th className="py-3 px-4 text-left font-bold text-blue-300">Remarketing Tinh - Static</th>
            <th className="py-3 px-4 text-left font-bold text-emerald-300">Remarketing Dong - Dynamic</th>
          </tr>
        </thead>
        <tbody className="divide-y divide-gray-200">
          <tr>
            <td className="py-3 px-4 font-bold text-slate-700">Ads hien gi</td>
            <td className="py-3 px-4 text-xs">1 banner/banner chung cho tat ca. VD: Sale 20% Toan Store</td>
            <td className="py-3 px-4 text-xs font-medium text-emerald-700">Hien dung san pham khach da xem/bo gio. VD: Hien dung Acrylic Powder 50g ho xem</td>
          </tr>
          <tr className="bg-slate-50">
            <td className="py-3 px-4 font-bold text-slate-700">Setup</td>
            <td className="py-3 px-4 text-xs">15 phut. Tao audience + banner</td>
            <td className="py-3 px-4 text-xs">2-4 gio. Can feed san pham + GTag e-commerce</td>
          </tr>
          <tr>
            <td className="py-3 px-4 font-bold text-slate-700">Yeu cau</td>
            <td className="py-3 px-4 text-xs">Chi can GTag co ban</td>
            <td className="py-3 px-4 text-xs">GTag e-commerce + Google Merchant Center + Feed</td>
          </tr>
          <tr className="bg-slate-50">
            <td className="py-3 px-4 font-bold text-slate-700">Hieu qua TMDT</td>
            <td className="py-3 px-4">ROAS 2x-3x</td>
            <td className="py-3 px-4 font-bold text-emerald-700">ROAS 5x-12x</td>
          </tr>
          <tr>
            <td className="py-3 px-4 font-bold text-slate-700">Nganh phu hop</td>
            <td className="py-3 px-4 text-xs">Dich vu, B2B, 1-2 san pham</td>
            <td className="py-3 px-4 text-xs font-bold text-emerald-700">TMDT &gt;50 SKU, Bat dong san, Khach san, Ve may bay</td>
          </tr>
          <tr className="bg-slate-50">
            <td className="py-3 px-4 font-bold text-slate-700">Vi du tiem nail</td>
            <td className="py-3 px-4 text-xs">Ban dich vu → Dung Tinh. Ads: Book Acrylic $45</td>
            <td className="py-3 px-4 text-xs font-bold text-emerald-700">Ban do nghe online → Dung Dong. Ads: Hien dung Kupa Drill khach xem gia $189</td>
          </tr>
        </tbody>
      </table>
    </div>

    <div className="bg-slate-800 text-white p-4 rounded-xl my-4 text-sm">
      <strong>Chot</strong>: Ban dich vu nail tai cho → Dung Tinh. Ban supplies, khoa hoc, gift card online → Dung Dong.
    </div>

    <h3 className="text-2xl font-bold text-gray-900 mt-10 border-b pb-2">2. 5 dieu kien bat buoc de chay Dynamic Remarketing</h3>

    <p className="text-sm text-slate-600">Thieu 1 cai la Google bao loi, khong chay duoc:</p>

    <div className="overflow-x-auto my-6">
      <table className="min-w-full bg-white border border-gray-200 text-sm rounded-lg overflow-hidden shadow-sm">
        <thead className="bg-indigo-700 text-white">
          <tr>
            <th className="py-3 px-4 text-left font-bold">#</th>
            <th className="py-3 px-4 text-left font-bold">Dieu kien</th>
            <th className="py-3 px-4 text-left font-bold">Cach check</th>
            <th className="py-3 px-4 text-left font-bold">Ghi chu</th>
          </tr>
        </thead>
        <tbody className="divide-y divide-gray-200">
          <tr>
            <td className="py-3 px-4 font-bold text-indigo-800">1</td>
            <td className="py-3 px-4 font-bold">Google Merchant Center</td>
            <td className="py-3 px-4 text-xs font-mono">merchants.google.com</td>
            <td className="py-3 px-4 text-xs">Co tai khoan GMC, da verify web. Bat buoc voi Retail</td>
          </tr>
          <tr className="bg-slate-50">
            <td className="py-3 px-4 font-bold text-indigo-800">2</td>
            <td className="py-3 px-4 font-bold">Feed san pham</td>
            <td className="py-3 px-4 text-xs font-mono">GMC → San pham → Nguon cap du lieu</td>
            <td className="py-3 px-4 text-xs">File chua ID, ten, gia, anh, link 100% san pham. Dung Shopify/Woo plugin tu sync</td>
          </tr>
          <tr>
            <td className="py-3 px-4 font-bold text-indigo-800">3</td>
            <td className="py-3 px-4 font-bold">GTag E-commerce</td>
            <td className="py-3 px-4 text-xs font-mono">Web → View source → Tim ecomm_prodid</td>
            <td className="py-3 px-4 text-xs">GTag co ecomm_prodid, ecomm_pagetype, ecomm_totalvalue. Nho IT/dev cai 30 phut</td>
          </tr>
          <tr className="bg-slate-50">
            <td className="py-3 px-4 font-bold text-indigo-800">4</td>
            <td className="py-3 px-4 font-bold">Link GMC + Google Ads</td>
            <td className="py-3 px-4 text-xs font-mono">Google Ads → Cong cu → Tai khoan duoc lien ket</td>
            <td className="py-3 px-4 text-xs">2 tai khoan da link. Tick GMC</td>
          </tr>
          <tr>
            <td className="py-3 px-4 font-bold text-indigo-800">5</td>
            <td className="py-3 px-4 font-bold">List &gt;1000 user</td>
            <td className="py-3 px-4 text-xs font-mono">Google Ads → Doi tuong</td>
            <td className="py-3 px-4 text-xs">Audience "Nguoi xem san pham 30d" &gt;1000. Chay 2 tuan la du</td>
          </tr>
        </tbody>
      </table>
    </div>

    <h3 className="text-2xl font-bold text-gray-900 mt-10 border-b pb-2">3. Cau truc GTag Dynamic cho TMDT - Gui cho IT la chay</h3>

    <p className="text-sm text-slate-600">IT chi can gan 3 doan code nay vao 3 loai trang. Thay xxx bang data that.</p>

    <div className="bg-slate-900 text-green-300 rounded-xl p-5 my-4 font-mono text-xs overflow-x-auto">
      <p className="text-slate-400 mb-2 font-sans font-bold text-sm">Trang 1: Trang san pham - Noi Google "User nay xem ID 1234"</p>
      <pre>{`gtag('event', 'view_item', {
  'ecomm_prodid': 'SKU1234',
  'ecomm_pagetype': 'product',
  'ecomm_totalvalue': 45.00,
  'items': [{
    'id': 'SKU1234',
    'name': 'Acrylic Powder Clear 50g',
    'price': 45.00
  }]
});`}</pre>
    </div>

    <div className="bg-slate-900 text-green-300 rounded-xl p-5 my-4 font-mono text-xs overflow-x-auto">
      <p className="text-slate-400 mb-2 font-sans font-bold text-sm">Trang 2: Trang gio hang - "User bo gio 2 mon, $95"</p>
      <pre>{`gtag('event', 'add_to_cart', {
  'ecomm_prodid': ['SKU1234', 'SKU5678'],
  'ecomm_pagetype': 'cart',
  'ecomm_totalvalue': 95.00
});`}</pre>
    </div>

    <div className="bg-slate-900 text-green-300 rounded-xl p-5 my-4 font-mono text-xs overflow-x-auto">
      <p className="text-slate-400 mb-2 font-sans font-bold text-sm">Trang 3: Trang cam on - Purchase - "User mua roi, loai tru"</p>
      <pre>{`gtag('event', 'purchase', {
  'ecomm_prodid': ['SKU1234'],
  'ecomm_pagetype': 'purchase',
  'ecomm_totalvalue': 45.00,
  'transaction_id': 'ORD9999'
});`}</pre>
    </div>

    <div className="bg-blue-50 border border-blue-200 rounded-xl p-3 my-4 text-sm">
      <strong>Check cai dung</strong>: Vao web, F12 → Console → Go <code>dataLayer</code>. Thay <code>ecomm_prodid</code> la ok.
    </div>

    <h3 className="text-2xl font-bold text-gray-900 mt-10 border-b pb-2">4. 4 Danh sach Dynamic phai tao - Khong tao la phi tien</h3>

    <p className="text-sm text-slate-600">Vao: <strong>Cong cu → Doi tuong → + Danh sach → Khach truy cap trang web</strong></p>

    <div className="overflow-x-auto my-6">
      <table className="min-w-full bg-white border border-gray-200 text-sm rounded-lg overflow-hidden shadow-sm">
        <thead className="bg-slate-800 text-white">
          <tr>
            <th className="py-3 px-4 text-left font-bold">#</th>
            <th className="py-3 px-4 text-left font-bold">Ten danh sach</th>
            <th className="py-3 px-4 text-left font-bold">Quy tac</th>
            <th className="py-3 px-4 text-left font-bold">Thoi gian</th>
            <th className="py-3 px-4 text-left font-bold">Bid + Ads</th>
          </tr>
        </thead>
        <tbody className="divide-y divide-gray-200">
          <tr>
            <td className="py-3 px-4 font-bold text-blue-700">1</td>
            <td className="py-3 px-4 font-bold">Viewed Product 14d</td>
            <td className="py-3 px-4 text-xs font-mono">ecomm_pagetype = product</td>
            <td className="py-3 px-4">14 ngay</td>
            <td className="py-3 px-4 text-xs">+30%. Ads: "Con ngam la con thich"</td>
          </tr>
          <tr className="bg-amber-50/40">
            <td className="py-3 px-4 font-bold text-amber-700">2</td>
            <td className="py-3 px-4 font-bold text-amber-800">Abandon Cart 7d</td>
            <td className="py-3 px-4 text-xs font-mono">ecomm_pagetype = cart AND khong purchase</td>
            <td className="py-3 px-4">7 ngay</td>
            <td className="py-3 px-4 text-xs font-bold text-amber-700">+150%. Ads: "Giam 10% neu checkout ngay"</td>
          </tr>
          <tr>
            <td className="py-3 px-4 font-bold text-blue-700">3</td>
            <td className="py-3 px-4 font-bold">Viewed &gt;3 Products</td>
            <td className="py-3 px-4 text-xs font-mono">So product viewed ≥3</td>
            <td className="py-3 px-4">30 ngay</td>
            <td className="py-3 px-4 text-xs">+80%. Khach so sanh nhieu → Gan mua</td>
          </tr>
          <tr className="bg-red-50/20">
            <td className="py-3 px-4 font-bold text-red-700">4</td>
            <td className="py-3 px-4 font-bold text-red-700">Purchased 30d</td>
            <td className="py-3 px-4 text-xs font-mono">ecomm_pagetype = purchase</td>
            <td className="py-3 px-4">30 ngay</td>
            <td className="py-3 px-4 text-xs font-bold text-red-700">LOAI TRU. Hoac Upsell: "Mua them Drill?"</td>
          </tr>
        </tbody>
      </table>
    </div>

    <div className="bg-emerald-50 border border-emerald-200 rounded-xl p-3 my-4 text-sm">
      <strong>Quan trong</strong>: Dynamic tu dong lay <code>ecomm_prodid</code> de hien dung san pham. Ban khong can lam gi.
    </div>

    <h3 className="text-2xl font-bold text-gray-900 mt-10 border-b pb-2">5. Tao Campaign Dynamic Remarketing - 10 phut</h3>

    <div className="space-y-4 my-6">
      <div className="border border-indigo-200 rounded-xl p-4 bg-indigo-50/20">
        <h4 className="font-bold text-indigo-800 mb-2">Buoc 1: Tao Campaign Display moi</h4>
        <p className="text-sm text-slate-700 mb-0">Muc tieu: Doanh so → Loai: Hien thi → <strong>Chien dich hien thi chuan</strong>. Ten: Dynamic - Abandon Cart</p>
      </div>
      <div className="border border-indigo-200 rounded-xl p-4 bg-indigo-50/20">
        <h4 className="font-bold text-indigo-800 mb-2">Buoc 2: Bat Dynamic Ads</h4>
        <p className="text-sm text-slate-700 mb-0">Cai dat → Cai dat khac → <strong>Quang cao dong</strong> → Tick "Su dung nguon cap du lieu dong" → Chon "Ban le" → Chon Feed GMC.</p>
      </div>
      <div className="border border-indigo-200 rounded-xl p-4 bg-indigo-50/20">
        <h4 className="font-bold text-indigo-800 mb-2">Buoc 3: Target</h4>
        <p className="text-sm text-slate-700 mb-0">Doi tuong → Duyet xem → Chon "Abandon Cart 7d". Dat <strong>Targeting</strong>, khong phai Observation. Nhan khau: 18-65+. Vi tri: My hoac VN tuy shop.</p>
      </div>
      <div className="border border-indigo-200 rounded-xl p-4 bg-indigo-50/20">
        <h4 className="font-bold text-indigo-800 mb-2">Buoc 4: Ads - De Google tu ghep</h4>
        <p className="text-sm text-slate-700 mb-1">Tao <strong>Quang cao hien thi thich ung</strong>:</p>
        <ol className="text-sm text-slate-700 space-y-1 mb-1 list-decimal list-inside">
          <li>Upload Logo + 3 anh 1200x628</li>
          <li>Tieu de dai: Quen chua thanh toan? Hoan tat don hang hom nay</li>
          <li>Tieu de: Giam 10%, Free Ship, Con hang</li>
          <li>Mo ta: San pham ban chon dang doi. So luong co han.</li>
        </ol>
        <p className="text-xs text-emerald-700 mb-0">Google tu lay anh + ten + gia san pham tu Feed ghep vao.</p>
      </div>
      <div className="border border-indigo-200 rounded-xl p-4 bg-indigo-50/20">
        <h4 className="font-bold text-indigo-800 mb-2">Buoc 5: Bid</h4>
        <p className="text-sm text-slate-700 mb-0">Chien luoc: <strong>tROAS</strong>. Neu moi, dat tROAS = 300%. Sau 30 ngay ROAS thuc 500% thi giam tROAS xuong 450%.</p>
      </div>
    </div>

    <h3 className="text-2xl font-bold text-gray-900 mt-10 border-b pb-2">6. Tinh vs Dong: Khi nao dung cai nao cho tiem nail co ban online</h3>

    <div className="overflow-x-auto my-6">
      <table className="min-w-full bg-white border border-gray-200 text-sm rounded-lg overflow-hidden shadow-sm">
        <thead className="bg-slate-800 text-white">
          <tr>
            <th className="py-3 px-4 text-left font-bold">Ban gi</th>
            <th className="py-3 px-4 text-left font-bold">Dung loai nao</th>
            <th className="py-3 px-4 text-left font-bold">Ly do</th>
            <th className="py-3 px-4 text-left font-bold">ROAS mau</th>
          </tr>
        </thead>
        <tbody className="divide-y divide-gray-200">
          <tr>
            <td className="py-3 px-4 font-bold text-slate-700">1. Chi dich vu tai tiem</td>
            <td className="py-3 px-4 font-bold text-blue-700">Tinh Static</td>
            <td className="py-3 px-4 text-xs">Khong co SKU, khong co feed</td>
            <td className="py-3 px-4">3x. Ads: Book Now $5 Off</td>
          </tr>
          <tr className="bg-slate-50">
            <td className="py-3 px-4 font-bold text-slate-700">2. Ban Gift Card online</td>
            <td className="py-3 px-4 font-bold text-emerald-700">Dong Dynamic</td>
            <td className="py-3 px-4 text-xs">Gift card $25, $50, $100 = 3 SKU</td>
            <td className="py-3 px-4">6x. Hien dung menh gia khach xem</td>
          </tr>
          <tr>
            <td className="py-3 px-4 font-bold text-slate-700">3. Ban khoa hoc Nail Online</td>
            <td className="py-3 px-4 font-bold text-emerald-700">Dong Dynamic</td>
            <td className="py-3 px-4 text-xs">Khoa Acrylic, Khoa Gel X = 2 SKU</td>
            <td className="py-3 px-4">8x. Hien dung khoa bo gio</td>
          </tr>
          <tr className="bg-slate-50">
            <td className="py-3 px-4 font-bold text-slate-700">4. Ban supplies 200 SKU</td>
            <td className="py-3 px-4 font-bold text-emerald-700">Bat buoc Dong</td>
            <td className="py-3 px-4 text-xs">Khong the lam 200 banner tinh</td>
            <td className="py-3 px-4">10x. Hien dung Kupa Drill $189</td>
          </tr>
          <tr>
            <td className="py-3 px-4 font-bold text-slate-700">5. Vua dich vu + supplies</td>
            <td className="py-3 px-4 font-bold text-purple-700">Chay ca 2</td>
            <td className="py-3 px-4 text-xs">2 camp: Static cho dich vu, Dynamic cho supplies</td>
            <td className="py-3 px-4">Tong 5x</td>
          </tr>
        </tbody>
      </table>
    </div>

    <h3 className="text-2xl font-bold text-gray-900 mt-10 border-b pb-2">7. 5 loi khien Dynamic Remarketing khong chay hoac lo</h3>

    <div className="overflow-x-auto my-6">
      <table className="min-w-full bg-white border border-gray-200 text-sm rounded-lg overflow-hidden shadow-sm">
        <thead className="bg-red-700 text-white">
          <tr>
            <th className="py-3 px-4 text-left font-bold">Loi</th>
            <th className="py-3 px-4 text-left font-bold">Hau qua</th>
            <th className="py-3 px-4 text-left font-bold">Cach sua</th>
          </tr>
        </thead>
        <tbody className="divide-y divide-gray-200">
          <tr>
            <td className="py-3 px-4 font-bold text-red-800">1. ID Feed khac ID GTag</td>
            <td className="py-3 px-4 text-xs text-red-600">GMC: sku_123. GTag: 123. Khong khop</td>
            <td className="py-3 px-4 text-xs text-emerald-700">Sua cho giong 100%. Dung SKU lam chuan</td>
          </tr>
          <tr className="bg-red-50/20">
            <td className="py-3 px-4 font-bold text-red-800">2. Khong loai tru Purchased</td>
            <td className="py-3 px-4 text-xs text-red-600">Khach mua roi van thay ads → Chui, click ton tien</td>
            <td className="py-3 px-4 text-xs text-emerald-700">Luon loai tru list Purchased 30d</td>
          </tr>
          <tr>
            <td className="py-3 px-4 font-bold text-red-800">3. Anh feed xau 200x200</td>
            <td className="py-3 px-4 text-xs text-red-600">Ads mo, CTR 0.2%</td>
            <td className="py-3 px-4 text-xs text-emerald-700">Anh toi thieu 600x600, nen trang. Dung feed rule crop</td>
          </tr>
          <tr className="bg-red-50/20">
            <td className="py-3 px-4 font-bold text-red-800">4. Bid tROAS 1000% ngay</td>
            <td className="py-3 px-4 text-xs text-red-600">Impression = 0. May khong dam chi</td>
            <td className="py-3 px-4 text-xs text-emerald-700">Bat dau 300%. Sau 30 ngay tang dan</td>
          </tr>
          <tr>
            <td className="py-3 px-4 font-bold text-red-800">5. Chay Dynamic cho web 10 san pham</td>
            <td className="py-3 px-4 text-xs text-red-600">Ton 4h setup, ROAS khong hon tinh</td>
            <td className="py-3 px-4 text-xs text-emerald-700">Duoi 50 SKU thi Tinh cho nhanh</td>
          </tr>
        </tbody>
      </table>
    </div>

    <InteractiveChecklist
      id="chk34"
      title="Checklist trien khai Dynamic 2 gio cho shop Shopify/Woo"
      tasks={[
        'Cai App: Shopify → Google & YouTube. Woo → Google Listings & Ads. Tu sync feed + GTag',
        'Verify GMC: Xac minh web, khai bao ship + tax',
        'Link GMC-Ads: 1 click',
        'Tao 4 list: Viewed, Cart, >3 product, Purchased',
        'Tao Camp Dynamic: Target "Abandon Cart 7d", tROAS 300%',
        'Upload 5 anh dep: 1200x628, logo PNG',
        'Doi 24h: Google duyet feed. Sau do ads chay',
        'Check 7 ngay: ROAS >4x la win. <2x thi xem anh + gia + loai tru',
      ]}
    />

    <div className="bg-amber-50 border-l-4 border-amber-400 p-5 rounded-r-xl my-6">
      <p className="font-bold text-amber-800 mb-2">Chot Bai 34</p>
      <p className="text-amber-900 text-sm mb-1">TMDT &gt;50 SKU khong chay Dynamic = Dot 70% tien remarketing.</p>
      <p className="text-amber-900 text-sm mb-1"><strong>Cong thuc</strong>: Feed chuan + GTag du + Abandon Cart + tROAS = May in tien.</p>
      <p className="text-amber-900 text-sm mb-1"><strong>Tinh</strong>: De, nhanh, cho dich vu.</p>
      <p className="text-amber-900 text-sm mb-0"><strong>Dong</strong>: Kho luc dau, sau nhan + ROAS x2 tinh.</p>
    </div>

    <div className="bg-slate-50 border border-slate-200 rounded-xl p-4 my-4 text-sm">
      <strong>Bai tap</strong>: Vao web ban, F12 tim <code>ecomm_prodid</code>. Co khong? Khong co thi gui 3 doan code muc 3 cho IT. Co roi thi chup man hinh GMC xem bao nhieu san pham Active. Minh check feed gium.
    </div>
  </div>
);
