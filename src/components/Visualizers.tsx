import React from 'react';
import { 
  Search, Globe, Video, Target, TrendingUp, Smartphone, Layout, CheckCircle2,
  Calculator, ThumbsUp, AlertTriangle, Gauge, Network, FolderTree, FileText,
  MapPin, Filter, ArrowDown, Database, Link, Share2
} from 'lucide-react';

export const VisualizerSERP = () => (
  <div className="bg-gray-100 p-4 rounded-xl border border-gray-200 my-6 font-sans shadow-inner">
    <div className="bg-white rounded-lg shadow-sm overflow-hidden border border-gray-300">
      <div className="bg-gray-50 border-b border-gray-200 p-3 flex items-center gap-3">
        <div className="flex gap-1.5">
          <div className="w-3 h-3 rounded-full bg-red-400"></div>
          <div className="w-3 h-3 rounded-full bg-yellow-400"></div>
          <div className="w-3 h-3 rounded-full bg-green-400"></div>
        </div>
        <div className="bg-white border border-gray-300 rounded-full py-1.5 px-4 flex-1 flex items-center gap-2 text-sm text-gray-500 shadow-inner">
          <Search size={14} /> nail salon near me open now
        </div>
      </div>
      
      <div className="p-4 md:p-6 space-y-5">
        <div className="relative group cursor-pointer">
          <div className="absolute -inset-2 bg-blue-50 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity"></div>
          <div className="relative">
            <div className="flex items-center gap-2 text-sm text-gray-800 font-bold mb-1">
              <span className="text-xs font-bold text-gray-800">Sponsored</span>
            </div>
            <div className="text-blue-700 text-lg font-medium hover:underline">Luxury Nails Dallas - $25 Gel Mani | Book Online</div>
            <div className="text-green-800 text-sm">www.luxurynailsdallas.com/booking</div>
            <div className="text-gray-600 text-sm mt-1">Voted #1 Nail Salon. Walk-ins welcome. Get 20% off your first visit. Open 7 days a week.</div>
          </div>
        </div>

        <div className="border-t border-gray-100 pt-5">
           <div className="flex items-center gap-2 text-sm text-gray-800 font-bold mb-1">
              <span className="text-xs font-bold text-gray-800">Sponsored</span>
            </div>
            <div className="text-blue-700 text-lg font-medium hover:underline">QNails - Walk-ins Welcome | 4.9★ 500+ Reviews</div>
            <div className="text-green-800 text-sm">www.qnails-tx.com</div>
        </div>

        <div className="border border-gray-200 rounded-lg overflow-hidden my-4">
          <div className="bg-gray-100 h-24 flex items-center justify-center relative border-b border-gray-200">
             <MapPin className="text-red-500 absolute top-4 left-1/4" size={24} />
             <MapPin className="text-red-500 absolute top-8 left-1/2" size={32} />
             <MapPin className="text-gray-500 absolute top-6 right-1/3" size={20} />
             <span className="text-gray-500 font-medium">Bản đồ Google Maps</span>
          </div>
          <div className="p-3 bg-white">
             <div className="flex justify-between items-start mb-2">
                <div>
                   <div className="font-medium text-blue-700">VIP Nails Spa <span className="text-xs bg-gray-100 px-1 py-0.5 rounded border border-gray-200 ml-1">Sponsored</span></div>
                   <div className="text-xs text-gray-500">4.8 ★ (120) · 1.2 miles</div>
                </div>
             </div>
             <div className="flex justify-between items-start">
                <div>
                   <div className="font-medium text-gray-800">Regal Nails</div>
                   <div className="text-xs text-gray-500">4.2 ★ (85) · 1.5 miles</div>
                </div>
             </div>
          </div>
        </div>

        <div className="border-t border-gray-100 pt-5">
            <div className="text-blue-700 text-lg font-medium hover:underline">Yelp: Top 10 Best Nail Salons in Dallas, TX</div>
            <div className="text-green-800 text-sm">www.yelp.com › search › find_desc=Nail+Salons</div>
            <div className="text-gray-600 text-sm mt-1">Reviews on Nail Salons in Dallas, TX - Pinky's Nails, MiniLuxe, Verbena Parlor...</div>
        </div>
      </div>
    </div>
    <p className="text-center text-sm text-gray-500 mt-3 italic">Mô phỏng: 4 Quảng cáo Search {'->'} Maps {'->'} Tự nhiên (SEO)</p>
  </div>
);

export const VisualizerCampaignTypes = () => (
  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 my-6">
    {[
      { icon: Search, title: 'Search', desc: 'Top kết quả tìm kiếm', color: 'bg-blue-500', isHot: true },
      { icon: Globe, title: 'Display (GDN)', desc: 'Banner trên website', color: 'bg-green-500' },
      { icon: Video, title: 'YouTube', desc: 'Video trước/trong luồng', color: 'bg-red-500' },
      { icon: Target, title: 'Shopping', desc: 'Sản phẩm + Giá bán', color: 'bg-yellow-500', isHot: true },
      { icon: TrendingUp, title: 'Performance Max', desc: 'All-in-one AI tự động', color: 'bg-purple-500', isHot: true },
      { icon: Smartphone, title: 'App (UAC)', desc: 'Cài đặt ứng dụng', color: 'bg-teal-500' },
      { icon: Layout, title: 'Demand Gen', desc: 'Kích thích nhu cầu', color: 'bg-pink-500' },
    ].map((camp, idx) => (
      <div key={idx} className="border border-gray-200 rounded-xl p-4 flex items-start gap-4 hover:shadow-md transition-shadow bg-white relative overflow-hidden">
        {camp.isHot && <div className="absolute top-0 right-0 bg-red-100 text-red-600 text-[10px] font-bold px-2 py-1 rounded-bl-lg">PHỔ BIẾN</div>}
        <div className={`${camp.color} text-white p-3 rounded-lg shadow-sm`}>
          <camp.icon size={24} />
        </div>
        <div>
          <h4 className="font-bold text-gray-800 m-0">{camp.title}</h4>
          <p className="text-xs text-gray-500 mt-1">{camp.desc}</p>
        </div>
      </div>
    ))}
  </div>
);

export const VisualizerPlatformCompare = () => (
  <div className="flex flex-col md:flex-row gap-4 my-8">
    <div className="flex-1 border-2 border-blue-200 bg-blue-50/50 rounded-xl p-5 relative shadow-sm hover:shadow-md transition-shadow">
      <div className="absolute -top-3 left-5 bg-blue-500 text-white text-xs font-bold px-3 py-1 rounded-full">KÉO (PULL)</div>
      <h3 className="text-xl font-black text-blue-700 mb-2 mt-2">Google Ads</h3>
      <p className="text-sm text-gray-600 mb-4 h-10">Khách hàng <span className="font-bold text-gray-800">CÓ NHU CẦU SẴN</span>, chủ động tìm kiếm giải pháp.</p>
      <div className="space-y-2">
         <div className="bg-white p-2 rounded border border-blue-100 text-sm flex items-center gap-2 shadow-sm"><CheckCircle2 size={16} className="text-blue-500"/> Ý định mua cao (BOF)</div>
         <div className="bg-white p-2 rounded border border-blue-100 text-sm flex items-center gap-2 shadow-sm"><CheckCircle2 size={16} className="text-blue-500"/> Chốt đơn nhanh</div>
         <div className="bg-white p-2 rounded border border-blue-100 text-sm flex items-center gap-2 shadow-sm"><CheckCircle2 size={16} className="text-blue-500"/> Ngành: Dịch vụ, B2B, Hàng giá trị</div>
      </div>
    </div>

    <div className="flex items-center justify-center -mx-2 z-10 hidden md:flex">
      <div className="bg-gray-800 text-white rounded-full p-2 text-xs font-bold shadow-lg">VS</div>
    </div>

    <div className="flex-1 border-2 border-indigo-200 bg-indigo-50/50 rounded-xl p-5 relative shadow-sm hover:shadow-md transition-shadow">
      <div className="absolute -top-3 left-5 bg-indigo-500 text-white text-xs font-bold px-3 py-1 rounded-full">ĐẨY (PUSH)</div>
      <h3 className="text-xl font-black text-indigo-700 mb-2 mt-2">Facebook / TikTok</h3>
      <p className="text-sm text-gray-600 mb-4 h-10">Khách hàng <span className="font-bold text-gray-800">CHƯA CÓ Ý ĐỊNH</span>, mua vì cảm xúc và hình ảnh đẹp.</p>
      <div className="space-y-2">
         <div className="bg-white p-2 rounded border border-indigo-100 text-sm flex items-center gap-2 shadow-sm"><CheckCircle2 size={16} className="text-indigo-500"/> Khơi gợi nhu cầu (TOF)</div>
         <div className="bg-white p-2 rounded border border-indigo-100 text-sm flex items-center gap-2 shadow-sm"><CheckCircle2 size={16} className="text-indigo-500"/> Mua bốc đồng (Impulsive)</div>
         <div className="bg-white p-2 rounded border border-indigo-100 text-sm flex items-center gap-2 shadow-sm"><CheckCircle2 size={16} className="text-indigo-500"/> Ngành: Thời trang, Trend, F&B</div>
      </div>
    </div>
  </div>
);

export const VisualizerAdRank = () => (
  <div className="bg-white border border-gray-200 rounded-xl overflow-hidden my-8 shadow-sm">
    <div className="bg-slate-50 border-b border-gray-200 p-4">
      <h4 className="font-bold text-slate-800 flex items-center gap-2 m-0">
        <Calculator className="text-blue-500" size={20} />
        Bảng mô phỏng phiên đấu giá Ad Rank
      </h4>
    </div>
    <div className="overflow-x-auto">
      <table className="min-w-full text-sm text-left">
        <thead className="bg-slate-100 text-slate-600 font-medium">
          <tr>
            <th className="px-4 py-3">Nhà quảng cáo</th>
            <th className="px-4 py-3 text-right">Giá thầu (Bid)</th>
            <th className="px-4 py-3 text-center">Điểm CL (QS)</th>
            <th className="px-4 py-3 text-center bg-blue-50 text-blue-800 font-bold">Ad Rank</th>
            <th className="px-4 py-3">Vị trí</th>
            <th className="px-4 py-3 text-right">CPC Thực tế</th>
          </tr>
        </thead>
        <tbody className="divide-y divide-gray-100">
          <tr className="bg-emerald-50">
            <td className="px-4 py-3 font-bold text-emerald-800 flex items-center gap-2">Ông A <ThumbsUp size={16} className="text-emerald-500"/></td>
            <td className="px-4 py-3 text-right font-medium text-slate-600">5,000đ</td>
            <td className="px-4 py-3 text-center">
              <span className="bg-emerald-100 text-emerald-800 py-1 px-2 rounded-full font-bold">9/10</span>
            </td>
            <td className="px-4 py-3 text-center font-black text-blue-700 bg-blue-50">45</td>
            <td className="px-4 py-3 font-bold text-emerald-700">Top 1</td>
            <td className="px-4 py-3 font-bold text-emerald-700 text-right">3,889đ</td>
          </tr>
          <tr>
            <td className="px-4 py-3 font-medium">Ông B</td>
            <td className="px-4 py-3 text-right text-slate-600">8,000đ</td>
            <td className="px-4 py-3 text-center">
              <span className="bg-yellow-100 text-yellow-800 py-1 px-2 rounded-full font-bold">5/10</span>
            </td>
            <td className="px-4 py-3 text-center font-bold bg-blue-50/50">40</td>
            <td className="px-4 py-3 text-slate-600 font-medium">Top 2</td>
            <td className="px-4 py-3 text-slate-600 font-medium text-right">7,001đ</td>
          </tr>
          <tr>
            <td className="px-4 py-3 font-medium">Ông C</td>
            <td className="px-4 py-3 text-right font-bold text-red-600">10,000đ</td>
            <td className="px-4 py-3 text-center">
              <span className="bg-red-100 text-red-800 py-1 px-2 rounded-full font-bold">3/10</span>
            </td>
            <td className="px-4 py-3 text-center font-bold bg-blue-50/50">30</td>
            <td className="px-4 py-3 text-slate-600 font-medium">Top 3</td>
            <td className="px-4 py-3 text-slate-600 font-medium text-right">10,000đ</td>
          </tr>
          <tr className="opacity-60 bg-gray-50">
            <td className="px-4 py-3 font-medium">Ông D</td>
            <td className="px-4 py-3 text-right text-slate-600">4,000đ</td>
            <td className="px-4 py-3 text-center">
              <span className="bg-gray-200 text-gray-800 py-1 px-2 rounded-full font-bold">6/10</span>
            </td>
            <td className="px-4 py-3 text-center font-bold bg-blue-50/50">24</td>
            <td className="px-4 py-3 text-red-600 font-medium flex items-center gap-1"><AlertTriangle size={14}/> Trượt</td>
            <td className="px-4 py-3 text-slate-400 font-medium text-right">0đ</td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
);

export const VisualizerQualityScore = () => (
  <div className="grid grid-cols-1 md:grid-cols-3 gap-4 my-8">
    <div className="border-2 border-blue-200 bg-blue-50 rounded-xl p-5 relative overflow-hidden transition-transform hover:-translate-y-1">
      <div className="absolute top-0 right-0 bg-blue-500 text-white text-xs font-bold px-3 py-1 rounded-bl-lg shadow-sm">Trọng số 60%</div>
      <div className="bg-white w-12 h-12 rounded-full flex items-center justify-center shadow-sm mb-4 border border-blue-100">
        <Gauge className="text-blue-500" size={24} />
      </div>
      <h4 className="font-bold text-blue-900 mb-2 text-lg mt-0">1. CTR Dự kiến</h4>
      <p className="text-sm text-blue-800/80 mb-4 h-16">Khách thấy ads của bạn có muốn click không, so với đối thủ cạnh tranh.</p>
      <div className="bg-white p-3 rounded-lg text-xs border border-blue-100 text-slate-600 shadow-inner">
        <strong>Ví dụ tiệm nail:</strong> 100 người search "nail salon near me", có 8 người click bạn {'->'} CTR 8% = Trên trung bình.
      </div>
    </div>
    
    <div className="border-2 border-indigo-200 bg-indigo-50 rounded-xl p-5 relative overflow-hidden transition-transform hover:-translate-y-1">
      <div className="absolute top-0 right-0 bg-indigo-500 text-white text-xs font-bold px-3 py-1 rounded-bl-lg shadow-sm">Trọng số 30%</div>
      <div className="bg-white w-12 h-12 rounded-full flex items-center justify-center shadow-sm mb-4 border border-indigo-100">
         <Network className="text-indigo-500" size={24} />
      </div>
      <h4 className="font-bold text-indigo-900 mb-2 text-lg mt-0">2. Mức độ liên quan</h4>
      <p className="text-sm text-indigo-800/80 mb-4 h-16">Từ khóa - Mẫu quảng cáo - Ý định người search có khớp nhau 100% không.</p>
      <div className="bg-white p-3 rounded-lg text-xs border border-indigo-100 text-slate-600 shadow-inner">
        <strong>Ví dụ tiệm nail:</strong> Khách search "gel x nails", ads bạn ghi "Gel X Chuyên Nghiệp, $45" {'->'} Trên trung bình.
      </div>
    </div>

    <div className="border-2 border-emerald-200 bg-emerald-50 rounded-xl p-5 relative overflow-hidden transition-transform hover:-translate-y-1">
      <div className="absolute top-0 right-0 bg-emerald-500 text-white text-xs font-bold px-3 py-1 rounded-bl-lg shadow-sm">Trọng số 10%</div>
      <div className="bg-white w-12 h-12 rounded-full flex items-center justify-center shadow-sm mb-4 border border-emerald-100">
        <Layout className="text-emerald-500" size={24} />
      </div>
      <h4 className="font-bold text-emerald-900 mb-2 text-lg mt-0">3. Trang đích (Landing)</h4>
      <p className="text-sm text-emerald-800/80 mb-4 h-16">Web load có nhanh không? Nội dung có đúng thứ ads đã hứa không?</p>
      <div className="bg-white p-3 rounded-lg text-xs border border-emerald-100 text-slate-600 shadow-inner">
        <strong>Ví dụ tiệm nail:</strong> Click ads "pedicure $25" {'->'} vào web thấy ngay bảng giá $25 + nút Book Now rõ ràng.
      </div>
    </div>
  </div>
);

export const VisualizerAccountStructure = () => (
  <div className="bg-slate-900 rounded-xl p-4 md:p-8 my-8 font-mono text-sm overflow-x-auto shadow-xl border-2 border-slate-700">
    <div className="flex items-center gap-3 text-white font-black text-lg mb-6 border-b border-slate-700 pb-4">
      <FolderTree className="text-blue-400" size={24} />
      MCC: Luxury Nails Group
    </div>
    
    <div className="pl-4 md:pl-8 border-l-2 border-slate-700 space-y-6">
      <div>
        <div className="flex items-center gap-3 text-blue-300 font-bold bg-slate-800 p-3 rounded-lg inline-flex shadow-md border border-slate-600">
          <FileText size={18} />
          Tài khoản: Luxury Nails - Dallas - 77084
        </div>
        
        <div className="pl-6 md:pl-10 border-l-2 border-slate-700 mt-4 space-y-6">
          <div className="bg-slate-800/30 p-4 rounded-xl border border-slate-700/50">
            <div className="flex items-center gap-2 text-emerald-400 font-bold mb-4 text-base">
               <span className="text-slate-500">├──</span> Campaign 1: Search - Acrylic + Gel X (Ngân sách: $40/ngày)
            </div>
            
            <div className="pl-4 md:pl-8 border-l border-slate-700/50 space-y-5">
              <div className="bg-slate-800/50 p-3 rounded-lg border border-slate-700">
                <div className="text-yellow-400 font-bold flex items-center gap-2 mb-2">
                  <span className="text-slate-500">├──</span> Ad Group 1: Acrylic Nails
                </div>
                <div className="pl-4 md:pl-8 text-slate-300 space-y-2">
                  <div className="flex items-start gap-2"><span className="text-slate-600">├─</span> <span>Keywords: <code className="text-pink-300 bg-pink-900/30 px-1 rounded">[acrylic nails near me], "acrylic nails 77084"</code></span></div>
                  <div className="flex items-start gap-2"><span className="text-slate-600">├─</span> <span>Ads: 3 mẫu RSA nói về Acrylic (Tiêu đề: "Acrylic Nails 77084")</span></div>
                  <div className="flex items-start gap-2"><span className="text-slate-600">└─</span> <span className="text-indigo-300">Tiện ích: Sitelink Acrylic Price, Callout Walk-ins Welcome</span></div>
                </div>
              </div>
              
              <div className="bg-slate-800/50 p-3 rounded-lg border border-slate-700">
                <div className="text-yellow-400 font-bold flex items-center gap-2 mb-2">
                  <span className="text-slate-500">└──</span> Ad Group 2: Gel X Nails
                </div>
                <div className="pl-4 md:pl-8 text-slate-300 space-y-2">
                  <div className="flex items-start gap-2"><span className="text-slate-600">├─</span> <span>Keywords: <code className="text-pink-300 bg-pink-900/30 px-1 rounded">[gel x nails], "gel x nails price"</code></span></div>
                  <div className="flex items-start gap-2"><span className="text-slate-600">└─</span> <span>Ads: 3 mẫu RSA nói về Gel X (Tiêu đề: "Gel X Nails Dallas")</span></div>
                </div>
              </div>
            </div>
          </div>
          
          <div className="bg-slate-800/30 p-4 rounded-xl border border-slate-700/50">
             <div className="flex items-center gap-2 text-emerald-400 font-bold mb-4 text-base">
               <span className="text-slate-500">└──</span> Campaign 2: Search - Brand - Luxury Nails (Ngân sách: $10/ngày)
            </div>
             <div className="pl-4 md:pl-8 border-l border-slate-700/50">
               <div className="bg-slate-800/50 p-3 rounded-lg border border-slate-700">
                 <div className="text-yellow-400 font-bold flex items-center gap-2 mb-2">
                    <span className="text-slate-500">└──</span> Ad Group: Brand Terms
                  </div>
                  <div className="pl-4 md:pl-8 text-slate-300 space-y-2">
                    <div className="flex items-start gap-2"><span className="text-slate-600">└─</span> <span>Keywords: <code className="text-pink-300 bg-pink-900/30 px-1 rounded">[luxury nails], [luxury nails dallas]</code></span></div>
                  </div>
               </div>
             </div>
          </div>

        </div>
      </div>
    </div>
  </div>
);

export const VisualizerFunnel = () => (
  <div className="bg-slate-50 p-6 md:p-8 rounded-xl border border-slate-200 my-8 shadow-inner flex flex-col items-center">
    <div className="w-full max-w-sm bg-gray-200 border-2 border-gray-300 rounded-lg p-4 text-center shadow-sm relative">
      <div className="text-gray-500 text-xs font-bold uppercase tracking-wider mb-1">Impression (Hiển thị)</div>
      <div className="text-2xl font-black text-gray-800">1,000</div>
      <div className="text-sm text-gray-600 mt-1">Người search "acrylic nails"</div>
      <div className="absolute -bottom-10 left-1/2 -translate-x-1/2 z-10 bg-slate-50 p-1 rounded-full">
         <div className="bg-blue-100 text-blue-600 rounded-full p-2 border-2 border-white shadow-sm">
           <Filter size={20} />
         </div>
      </div>
    </div>
    
    <div className="h-10 w-0.5 bg-gray-300 -my-1"></div>

    <div className="w-full max-w-sm bg-blue-100 border-2 border-blue-200 rounded-lg p-4 text-center shadow-sm relative z-0 mt-4">
      <div className="flex justify-between items-center text-xs font-bold uppercase tracking-wider mb-1 text-blue-600/70">
        <span>Click (Bấm)</span>
        <span className="bg-white px-2 py-0.5 rounded text-blue-600 shadow-sm border border-blue-200">CTR 8%</span>
      </div>
      <div className="text-2xl font-black text-blue-800">80</div>
      <div className="text-sm text-blue-700 mt-1 flex justify-center items-center gap-2">
        <span>CPC $4</span> <ArrowDown size={14} className="text-blue-400" /> <span>Tốn $320</span>
      </div>
       <div className="absolute -bottom-10 left-1/2 -translate-x-1/2 z-10 bg-slate-50 p-1 rounded-full">
         <div className="bg-emerald-100 text-emerald-600 rounded-full p-2 border-2 border-white shadow-sm">
           <Filter size={20} />
         </div>
      </div>
    </div>
    
    <div className="h-10 w-0.5 bg-blue-200 -my-1"></div>

    <div className="w-full max-w-sm bg-emerald-100 border-2 border-emerald-200 rounded-lg p-4 text-center shadow-sm relative z-0 mt-4">
      <div className="flex justify-between items-center text-xs font-bold uppercase tracking-wider mb-1 text-emerald-600/70">
        <span>Conversion (Khách)</span>
        <span className="bg-white px-2 py-0.5 rounded text-emerald-600 shadow-sm border border-emerald-200">CVR 15%</span>
      </div>
      <div className="text-2xl font-black text-emerald-800">12</div>
      <div className="text-sm text-emerald-700 mt-1">Chi phí 1 khách (CPA) = <span className="font-bold">$26.6</span></div>
       <div className="absolute -bottom-8 left-1/2 -translate-x-1/2 z-10 text-emerald-400">
          <ArrowDown size={28} />
      </div>
    </div>

    <div className="h-6"></div>

    <div className="w-full max-w-sm bg-gradient-to-br from-yellow-100 to-amber-200 border-2 border-amber-300 rounded-xl p-5 text-center shadow-md relative mt-4 transform scale-105">
      <div className="absolute -top-3 left-1/2 -translate-x-1/2 bg-amber-500 text-white text-[10px] font-bold px-3 py-1 rounded-full shadow-sm uppercase tracking-wider">Kết quả cuối cùng</div>
      <div className="text-yellow-800 text-xs font-bold uppercase tracking-wider mb-1 mt-2">Revenue (Doanh thu)</div>
      <div className="text-3xl font-black text-yellow-900">$660</div>
      <div className="text-sm text-amber-800 mt-2 font-medium bg-white/50 py-1.5 rounded-lg border border-amber-200">
        Mỗi khách làm $55 {'->'} <span className="font-black text-amber-900">ROAS 2.06</span>
      </div>
    </div>
  </div>
);

export const VisualizerGA4Flow = () => (
  <div className="bg-white border-2 border-indigo-100 rounded-xl p-6 my-8 shadow-sm">
    <h4 className="font-bold text-indigo-900 text-lg mb-6 text-center">Bản chất của Google Ads Conversion vs GA4</h4>
    <div className="flex flex-col md:flex-row items-center justify-between gap-6">
      
      <div className="flex-1 bg-slate-50 border border-slate-200 p-4 rounded-lg text-center w-full relative">
        <div className="absolute -top-3 left-1/2 -translate-x-1/2 bg-slate-600 text-white text-xs px-2 py-1 rounded-full font-bold">Chỉ dùng Google Ads</div>
        <div className="w-12 h-12 bg-blue-100 text-blue-600 rounded-full flex items-center justify-center mx-auto mb-3">
          <Target size={24} />
        </div>
        <p className="font-bold text-sm mb-1 text-slate-800">Đếm theo "Click từ Ads"</p>
        <p className="text-xs text-slate-500 h-10">Mù tịt hành vi khách trên web. Khách xem 10 phút hay 1s đều như nhau.</p>
        <div className="bg-red-50 text-red-600 text-xs p-2 rounded mt-2 border border-red-100 font-medium">Bị chặn bởi iOS 14.5 (Mất data)</div>
      </div>

      <div className="hidden md:flex flex-col items-center gap-1 text-indigo-300">
        <Link size={24} />
        <span className="text-[10px] font-bold uppercase tracking-wider">Liên kết</span>
      </div>

      <div className="flex-1 bg-indigo-50 border-2 border-indigo-200 p-4 rounded-lg text-center w-full relative transform md:scale-105 shadow-md">
        <div className="absolute -top-3 left-1/2 -translate-x-1/2 bg-indigo-600 text-white text-xs px-2 py-1 rounded-full font-bold">Dùng chung GA4</div>
        <div className="w-12 h-12 bg-indigo-100 text-indigo-600 rounded-full flex items-center justify-center mx-auto mb-3">
           <Database size={24} />
        </div>
        <p className="font-bold text-sm mb-1 text-indigo-900">Theo dõi toàn bộ "Hành trình"</p>
        <p className="text-xs text-indigo-700/80 h-10">Thấy khách xem trang giá, lướt bao lâu. Đo được cả khách SEO/Facebook.</p>
        <div className="bg-emerald-50 text-emerald-600 text-xs p-2 rounded mt-2 border border-emerald-100 font-medium">Tạo tệp Remarketing siêu chuẩn</div>
      </div>
      
    </div>
  </div>
);

export const VisualizerGTMStructure = () => (
  <div className="bg-slate-900 rounded-xl p-6 my-8 shadow-xl font-mono text-sm border-2 border-slate-700">
     <div className="text-center mb-6">
       <h4 className="text-white font-bold text-lg m-0">Sơ đồ 3 lớp Tracking (Không code)</h4>
       <p className="text-slate-400 text-xs mt-1">Cài 1 lần, dùng cho mọi nền tảng</p>
     </div>
     
     <div className="flex flex-col items-center">
       <div className="bg-blue-900/50 border border-blue-500/50 p-4 rounded-lg w-full max-w-md text-center shadow-lg relative z-10">
         <div className="text-blue-300 font-bold mb-1">1. Lớp Website (Tiệm Nail)</div>
         <div className="text-slate-300 text-xs">Chỉ dán DUY NHẤT 2 đoạn code GTM (Head & Body). Không thêm gì khác.</div>
       </div>
       
       <div className="w-0.5 h-6 bg-slate-600"></div>
       
       <div className="bg-slate-800 border-2 border-slate-600 p-4 rounded-lg w-full max-w-lg text-center shadow-lg relative z-10">
         <div className="text-white font-bold mb-2 flex items-center justify-center gap-2">
            <Share2 size={18} className="text-emerald-400" />
            2. Trạm Trung Chuyển (Google Tag Manager)
         </div>
         <div className="text-slate-400 text-xs mb-4 border-b border-slate-700 pb-2">Nơi cấu hình các quy tắc "Khi nào thì bắn tín hiệu" (Triggers)</div>
         
         <div className="grid grid-cols-2 gap-3">
           <div className="bg-slate-900 border border-slate-700 p-2 rounded text-xs text-left">
             <span className="text-yellow-400 font-bold">Trigger 1:</span> Bấm nút "Call"
           </div>
           <div className="bg-slate-900 border border-slate-700 p-2 rounded text-xs text-left">
             <span className="text-yellow-400 font-bold">Trigger 2:</span> Load trang "Thank-you"
           </div>
         </div>
       </div>

       <div className="w-0.5 h-6 bg-slate-600 flex relative">
         <div className="absolute top-1/2 -left-20 w-40 h-0.5 bg-slate-600"></div>
       </div>
       
       <div className="grid grid-cols-2 gap-6 w-full max-w-xl relative z-10">
         <div className="bg-emerald-900/30 border border-emerald-500/30 p-4 rounded-lg text-center shadow-lg">
           <div className="text-emerald-400 font-bold mb-1 text-sm">Thẻ 1: Gửi tín hiệu về Google Ads</div>
           <div className="text-slate-400 text-[10px]">Đếm 1 Conversion "Gọi điện"</div>
         </div>
         <div className="bg-purple-900/30 border border-purple-500/30 p-4 rounded-lg text-center shadow-lg">
           <div className="text-purple-400 font-bold mb-1 text-sm">Thẻ 2: Gửi tín hiệu về Facebook/TikTok</div>
           <div className="text-slate-400 text-[10px]">Pixel học sự kiện "Lead"</div>
         </div>
       </div>
     </div>
  </div>
);
