import React, { useState, useEffect } from 'react';
import { RegistrationForm } from './components/RegistrationForm';
import { Modal } from './components/Modal';
import { Button } from './components/Button';
import { ProgramDetailModal, PROGRAM_DATA, ProgramDetailData } from './components/ProgramDetailModal';


import {
  BookOpen, Globe, Award, Star, Phone, MapPin,
  Facebook, Instagram, Mail, ChevronRight, ChevronLeft, PlayCircle,
  CheckCircle2, Users, Trophy, Zap, Search, Calendar, ShieldCheck, Laptop, Languages, Clock,
  User2Icon, Gift, CreditCard, AlertCircle, GraduationCap, Palette, Microscope, Atom, Lightbulb,
  User, CalendarDays,
  UserCheck2
} from 'lucide-react';



const HERO_IMAGES = [
  "https://images.unsplash.com/photo-1523240795612-9a054b0db644?ixlib=rb-4.0.3&auto=format&fit=crop&w=2000&q=80",
  "https://images.unsplash.com/photo-1509062522246-3755977927d7?ixlib=rb-4.0.3&auto=format&fit=crop&w=2000&q=80",
  "https://images.unsplash.com/photo-1588072432836-e10032774350?ixlib=rb-4.0.3&auto=format&fit=crop&w=2000&q=80",
  "https://images.unsplash.com/photo-1503676260728-1c00da094a0b?ixlib=rb-4.0.3&auto=format&fit=crop&w=2000&q=80"
];

const App: React.FC = () => {
  const [isRegistrationOpen, setIsRegistrationOpen] = useState(false);
  const [selectedProgram, setSelectedProgram] = useState<ProgramDetailData | null>(null);
  const [currentHeroImage, setCurrentHeroImage] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentHeroImage((prev) => (prev + 1) % HERO_IMAGES.length);
    }, 4000); // Change image every 4 seconds

    return () => clearInterval(timer);
  }, []);

  const [showNavbarButton, setShowNavbarButton] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      // Show button after scrolling down 500px (past hero roughly)
      setShowNavbarButton(window.scrollY > 500);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const openRegistration = () => {
    setIsRegistrationOpen(true);
  };

  return (
    <div className="min-h-screen font-sans text-slate-800 bg-white">
      <Modal isOpen={isRegistrationOpen} onClose={() => setIsRegistrationOpen(false)}>
        <RegistrationForm onClose={() => setIsRegistrationOpen(false)} />
      </Modal>

      <ProgramDetailModal
        program={selectedProgram}
        onClose={() => setSelectedProgram(null)}
        onRegister={() => {
          setSelectedProgram(null);
          setIsRegistrationOpen(true);
        }}
      />

      {/* Navbar - PrepEdu Style */}
      <nav className="bg-white border-b border-slate-100 sticky top-0 z-50 shadow-[0_2px_20px_rgba(0,0,0,0.04)]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between h-20 items-center gap-8">
            {/* Logo */}
            <div className="flex items-center gap-2 shrink-0 cursor-pointer" onClick={() => window.scrollTo(0, 0)}>
              <div className="bg-brand-blue w-10 h-10 rounded-xl flex items-center justify-center shadow-lg shadow-blue-200">
                <BookOpen className="text-white w-6 h-6" />
              </div>
              <div className="flex flex-col">
                <span className="font-extrabold text-xl text-brand-blue leading-none tracking-tight">MV <span className="text-brand-orange">Academy</span></span>
                <span className="text-xs text-slate-500 font-medium uppercase tracking-wider">East Asia</span>
              </div>
            </div>

            {/* Desktop Menu */}
            <div className="flex items-center space-x-6 font-semibold text-sm text-slate-600">
              <Button
                variant="primary"
                onClick={openRegistration}
                className={`!rounded-full px-4 py-1.5 text-sm bg-orange-500 text-white border-2 border-orange-500 hover:bg-orange-600 hover:border-orange-600 shadow-lg shadow-orange-200 transform hover:-translate-y-0.5 transition-all font-medium flex items-center gap-1.5 ${showNavbarButton ? 'opacity-100 visible translate-y-0' : 'opacity-0 invisible -translate-y-2'}`}
              >
                <span className="uppercase">Đăng ký ngay</span>
              </Button>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section - Centered Layout */}
      <header className="relative min-h-screen flex items-center justify-center pt-24 pb-20 overflow-hidden bg-slate-50">
        {/* 1. Nền và Hiệu ứng ánh sáng */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full bg-[radial-gradient(circle_at_50%_50%,rgba(57,107,219,0.08),transparent_70%)] pointer-events-none"></div>
        <div className="absolute -top-24 left-0 w-96 h-96 bg-blue-400/10 rounded-full blur-[120px]"></div>
        <div className="absolute -top-24 right-0 w-96 h-96 bg-indigo-400/10 rounded-full blur-[120px]"></div>

        {/* Ảnh nền: Được xử lý lại để không làm rối mắt người đọc */}
        <div className="absolute inset-0 z-0">
          <img
            src="https://images.unsplash.com/photo-1588075592446-265fd1e6e76f?auto=format&fit=crop&w=2000&q=80"
            alt="Nursery school children with teacher"
            className="w-full h-full object-cover opacity-75"
          />
          {/* Lớp phủ Gradient để ảnh mờ dần về phía dưới, giúp footer/section sau dễ nhìn hơn */}
          <div className="absolute inset-0 bg-gradient-to-b from-white/20 via-transparent to-slate-50"></div>
        </div>

        {/* Grid Pattern: Giảm nhẹ để tinh tế hơn */}
        <div className="absolute inset-0 opacity-[0.04] z-1"
          style={{ backgroundImage: 'linear-gradient(#1e293b 1px, transparent 1px), linear-gradient(90deg, #1e293b 1px, transparent 1px)', backgroundSize: '60px 60px' }}>
        </div>

        {/* 2. Floating Elements: Đổi sang màu Slate để sang trọng hơn trên nền sáng */}
        <div className="absolute inset-0 pointer-events-none z-10 hidden md:block">
          <div className="absolute top-[20%] left-[8%] animate-float-icon text-blue-500">
            <BookOpen size={56} strokeWidth={1} />
          </div>
          <div className="absolute bottom-[20%] left-[10%] animate-float-delayed text-orange-500">
            <Atom size={64} strokeWidth={1} />
          </div>
          <div className="absolute top-[15%] right-[8%] animate-float-icon text-white">
            <GraduationCap size={64} strokeWidth={1} />
          </div>
          <div className="absolute bottom-[25%] right-[10%] animate-float-delayed text-purple-500">
            <Lightbulb size={56} strokeWidth={1} />
          </div>
        </div>

        {/* 3. Khối nội dung chính (Glassmorphism) */}
        <div className="relative z-20 max-w-6xl mx-auto px-4 w-full">
          <div className="bg-white/95 backdrop-blur-xl border border-white/80 p-8 md:p-16 rounded-[3.5rem] shadow-[0_30px_100px_-20px_rgba(57,107,219,0.15)] flex flex-col items-center text-center">

            {/* Badge SY27 */}
            <div className="mb-10 px-5 py-2 rounded-full border border-blue-100 bg-white/50 shadow-sm flex items-center gap-3">
              <CalendarDays className="w-5 h-5 text-[rgb(57,107,219)]" />
              <span className="text-[rgb(57,107,219)] text-[12px] md:text-sm font-black uppercase">Năm học 2026 - 2027 (SY27)</span>
            </div>

            {/* Heading phân tầng: Nhỏ ở trên, cực lớn ở dưới */}
            <div className="mb-12 relative group">
              {/* Subheading: Nhỏ gọn, tinh tế để nhường chỗ cho tiêu đề chính */}
              <h2 className="flex items-center justify-center gap-3 text-brand-orange font-extrabold uppercase text-xl md:text-2xl mb-2 tracking-wider">
                {/* Thanh line bên trái */}
                <span className="w-8 h-[3px] bg-brand-orange rounded-full hidden sm:block"></span>

                Chương trình giáo dục phổ thông

                {/* Thanh line bên phải để tạo sự đối xứng */}
                <span className="w-8 h-[3px] bg-brand-orange rounded-full hidden sm:block"></span>
              </h2>

              {/* Main Heading: Gradient + Flag Integration */}
              <h1 className="text-4xl md:text-7xl font-black leading-[1.1] tracking-tighter">
                <span className="block text-brand-blue mb-1">THEO TIÊU CHUẨN</span>

                <span className="relative inline-flex items-center gap-4">
                  {/* Chữ HOA KỲ với hiệu ứng Gradient từ Xanh sang Đỏ đặc trưng */}
                  <span className="inline-block pb-2 bg-clip-text text-transparent bg-gradient-to-r from-[#002868] via-[#002868] to-[#bf0a30] drop-shadow-sm leading-tight">
                    HOA KỲ
                  </span>

                  {/* Flag Icon: Thiết kế bo góc, đổ bóng hiện đại */}
                  <div className="relative w-14 h-10 md:w-24 md:h-16 flex-shrink-0">
                    <div className="absolute inset-0 bg-red-500/20 blur-lg rounded-lg transform scale-110"></div>
                    <img
                      src="https://flagcdn.com/us.svg"
                      alt="US Flag"
                      className="relative z-10 w-full h-full object-cover rounded-md shadow-2xl border-2 border-white transform -rotate-2 group-hover:rotate-0 transition-transform duration-500"
                    />
                  </div>

                  {/* Hiệu ứng gạch chân Gradient thay cho mảng màu cũ */}
                  <div className="absolute -bottom-2 left-0 w-full h-2 md:h-4 bg-gradient-to-r from-red-600/20 to-transparent skew-x-[-15deg] -z-10"></div>
                </span>
              </h1>
            </div>

            {/* Locations Section */}
            <div className="flex flex-col items-center space-y-8 mb-14 w-full">
              <div className="flex items-center gap-4 w-full max-w-lg">
                <div className="h-[1px] flex-1 bg-gradient-to-r from-transparent to-slate-200"></div>
                <p className="text-slate-900 font-bold uppercase tracking-[0.1em] text-[14px] md:text-[16px] text-center">
                  Dành cho học sinh Việt Nam <br /> đang sinh sống tại
                </p>
                <div className="h-[1px] flex-1 bg-gradient-to-l from-transparent to-slate-200"></div>
              </div>

              <div className="flex flex-wrap justify-center items-center gap-4 md:gap-6">
                {[
                  { name: 'HÀN QUỐC', flag: 'https://flagcdn.com/w80/kr.png', hover: 'hover:border-blue-200' },
                  { name: 'NHẬT BẢN', flag: 'https://flagcdn.com/w80/jp.png', hover: 'hover:border-blue-200' },
                  { name: 'TRUNG QUỐC', flag: 'https://flagcdn.com/w80/cn.png', hover: 'hover:border-blue-200' }
                ].map((item) => (
                  <div key={item.name} className={`group flex items-center gap-3 md:gap-4 px-4 py-2.5 md:px-6 md:py-3 rounded-2xl bg-white border border-slate-100 shadow-sm transition-all duration-300 ${item.hover} hover:shadow-md hover:-translate-y-1`}>
                    <div className="w-8 h-6 md:w-12 md:h-9 overflow-hidden rounded-md border border-slate-200 flex-shrink-0 shadow-inner">
                      <img src={item.flag} alt={item.name} className="w-full h-full object-cover" />
                    </div>
                    <span className="text-sm md:text-lg font-black text-slate-800 tracking-tight group-hover:text-[rgb(57,107,219)] transition-colors">
                      {item.name}
                    </span>
                  </div>
                ))}
              </div>
            </div>

            {/* CTA Section */}
            <div className="flex flex-col items-center gap-6">
              <Button
                onClick={openRegistration}
                className="!rounded-full text-sm md:text-base px-10 py-4 bg-brand-orange text-white font-black uppercase tracking-widest shadow-[0_10px_30px_rgba(234,88,12,0.3)] hover:scale-105 active:scale-95 transition-all"
              >
                Đăng ký học thử ngay
              </Button>

              <div className="flex items-center gap-3 px-6 py-2 rounded-full border border-orange-100 bg-white">
                <div className="w-1.5 h-1.5 bg-brand-orange rounded-full animate-pulse"></div>
                <p className="text-slate-600 text-xs md:text-sm font-bold">
                  Học thử miễn phí <span className="text-brand-orange">01 tháng</span> trải nghiệm
                </p>
              </div>
            </div>
          </div>
        </div>
      </header>

      {/* Core Commitments */}
      <section className="py-20 bg-brand-lightBlue/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <span className="text-brand-blue font-bold tracking-wider uppercase text-sm mb-2 block">Giá trị cốt lõi</span>
            <h2 className="text-3xl md:text-4xl font-extrabold text-slate-900">Cam kết của MV Academy</h2>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {/* Feature 1 */}
            <div className="bg-white p-8 rounded-3xl border border-slate-100 shadow-sm hover:shadow-xl transition-all duration-300 group">
              <div className="w-14 h-14 bg-blue-100 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                <ShieldCheck className="w-8 h-8 text-brand-blue" />
              </div>
              <h3 className="text-xl font-bold text-slate-900 mb-4 group-hover:text-brand-blue transition-colors">
                Cam kết chất lượng học thuật chuẩn Hoa Kỳ
              </h3>
              <p className="text-slate-600 leading-relaxed text-justify">
                Chương trình học của MVA bám sát chuẩn giáo dục Hoa Kỳ, với đội ngũ giáo viên Mỹ và hệ thống đánh giá rõ ràng, đảm bảo chất lượng đồng đều và chuẩn đầu ra nhất quán.
              </p>
            </div>

            {/* Feature 2 */}
            <div className="bg-white p-8 rounded-3xl border border-slate-100 shadow-sm hover:shadow-xl transition-all duration-300 group">
              <div className="w-14 h-14 bg-orange-100 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                <Laptop className="w-8 h-8 text-brand-orange" />
              </div>
              <h3 className="text-xl font-bold text-slate-900 mb-4 group-hover:text-brand-orange transition-colors">
                Học tập linh hoạt <br /> mọi lúc - mọi nơi
              </h3>
              <p className="text-slate-600 leading-relaxed text-justify">
                Mô hình học trực tuyến cho phép học sinh học ổn định mọi lúc, mọi nơi. Chương trình xây dựng dành riêng cho các gia đình Việt Nam đang sinh sống tại Hàn Quốc, Nhật Bản và Trung Quốc.
              </p>
            </div>

            {/* Feature 3 */}
            <div className="bg-white p-8 rounded-3xl border border-slate-100 shadow-sm hover:shadow-xl transition-all duration-300 group">
              <div className="w-14 h-14 bg-purple-100 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                <Languages className="w-8 h-8 text-purple-600" />
              </div>
              <h3 className="text-xl font-bold text-slate-900 mb-4 group-hover:text-purple-600 transition-colors">
                Hỗ trợ học tập trong lớp với trợ giảng song ngữ
              </h3>
              <p className="text-slate-600 leading-relaxed text-justify">
                Trong mỗi lớp học, MVA bố trí trợ giảng người Việt có khả năng sử dụng tiếng Anh và tiếng Trung, Hàn hoặc Nhật, nhằm hỗ trợ học sinh trong quá trình học, vượt qua những trở ngại ban đầu.
              </p>
            </div>
          </div>
        </div>
      </section>
      {/* Hero Image / Graphic - Slideshow */}
      <div className="relative w-full max-w-6xl mx-auto animate-in zoom-in duration-700 delay-500 group mt-10">
        <div className="relative z-10 w-full aspect-[16/9] md:aspect-[16/9] rounded-[2rem] shadow-2xl border-[6px] border-white overflow-hidden bg-slate-100">
          {HERO_IMAGES.map((img, index) => (
            <img
              key={img}
              src={img}
              alt={`Slide ${index + 1}`}
              className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-1000 ${index === currentHeroImage ? 'opacity-100' : 'opacity-0'
                }`}
            />
          ))}

          {/* Navigation Buttons */}
          <button
            onClick={() => setCurrentHeroImage((prev) => (prev - 1 + HERO_IMAGES.length) % HERO_IMAGES.length)}
            className="absolute left-4 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-white/30 hover:bg-white/60 backdrop-blur-sm flex items-center justify-center text-white transition-all z-20 group-hover:opacity-100 opacity-0"
            title="Previous Slide"
          >
            <ChevronLeft className="w-6 h-6" />
          </button>
          <button
            onClick={() => setCurrentHeroImage((prev) => (prev + 1) % HERO_IMAGES.length)}
            className="absolute right-4 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-white/30 hover:bg-white/60 backdrop-blur-sm flex items-center justify-center text-white transition-all z-20 group-hover:opacity-100 opacity-0"
            title="Next Slide"
          >
            <ChevronRight className="w-6 h-6" />
          </button>

          {/* Slide Indicators */}
          <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2 z-20">
            {HERO_IMAGES.map((_, idx) => (
              <button title={`Slide ${idx + 1}`} type="button"
                key={idx}
                onClick={() => setCurrentHeroImage(idx)}
                className={`w-2 h-2 rounded-full transition-all ${idx === currentHeroImage ? 'bg-white w-6' : 'bg-white/50 hover:bg-white/80'
                  }`}
              />
            ))}
          </div>
        </div>
      </div>

      {/* NEW SECTION: Context & History (Lộ trình học tập xuyên suốt) */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-top">
            <div className="relative order-2 lg:order-1">
              <div className="absolute -top-4 -left-4 w-24 h-24 bg-brand-orange/10 rounded-full blur-2xl"></div>
              <div className="absolute -bottom-4 -right-4 w-32 h-32 bg-brand-blue/10 rounded-full blur-2xl"></div>
              <img
                src="https://images.unsplash.com/photo-1577896851231-70ef18881754?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80"
                alt="Student learning online"
                className="relative rounded-[2.5rem] shadow-2xl border-8 border-slate-50 z-10"
              />
              <div className="absolute -top-6 -left-6 bg-white p-4 rounded-2xl shadow-xl z-20 border border-slate-100 max-w-xs hidden md:block">
                <div className="flex items-center gap-4">
                  <div className="bg-orange-100 p-3 rounded-full text-brand-orange font-bold text-xl">7+</div>
                  <div>
                    <div className="font-bold text-brand-orange">Năm vận hành</div>
                    <div className="text-xs text-slate-500">Chất lượng đã được kiểm chứng</div>
                  </div>
                </div>
              </div>
            </div>

            <div className="order-1 lg:order-2">
              <h2 className="text-3xl md:text-4xl font-extrabold text-brand-blue mb-6">Lộ trình học tập xuyên suốt</h2>

              <div className="space-y-6 text-slate-600 leading-relaxed text-base md:text-lg">
                <p>
                  Sau <strong className="text-slate-900">7 năm vận hành</strong>, chương trình học phổ thông trực tuyến theo chuẩn Hoa Kỳ của Minh Việt
                  Academy (MVA) đã khẳng định được chất lượng học thuật, tính ổn định trong công tác vận hành,
                  cùng những thành quả học tập mà các em học sinh gặt hái được – vượt ngoài mong đợi của nhiều
                  gia đình.
                </p>
                <p>
                  Trên nền tảng đó, MVA quyết định thử nghiệm mở rộng mô hình học tập này tới các học sinh Việt
                  Nam đang sinh sống tại ba quốc gia: <strong className="text-slate-900">Hàn Quốc, Nhật Bản và Trung Quốc</strong>, trước mắt triển khai ở ba khối lớp <span className="text-brand-orange font-bold">Mầm non (PreK), Mẫu giáo (K) và Lớp 1</span>.
                </p>
                <div className="bg-slate-50 p-6 rounded-2xl border border-slate-100 shadow-sm">
                  <h4 className="font-bold text-slate-900 mb-3 text-base flex items-center gap-2">
                    <Star className="w-5 h-5 text-yellow-400 fill-current" />
                    Điểm đặc biệt cho khu vực Đông Á
                  </h4>
                  <ul className="space-y-3 text-sm md:text-base">
                    <li className="flex gap-3 items-start">
                      <Clock className="w-5 h-5 text-brand-blue shrink-0 mt-0.5" />
                      <span>Khung giờ học được điều chỉnh sớm hơn nhằm phù hợp với nhịp sinh hoạt của các gia đình tại địa phương.</span>
                    </li>
                    <li className="flex gap-3 items-start">
                      <Languages className="w-5 h-5 text-brand-blue shrink-0 mt-0.5" />
                      <span>Mỗi lớp học sẽ có các trợ giảng người Việt sử dụng thành thạo tiếng Anh và các ngôn ngữ Trung, Hàn hoặc Nhật để hỗ trợ học sinh.</span>
                    </li>
                  </ul>
                </div>

                <div className="">
                  <a
                    href="https://web.minhvietacademy.org"
                    target="_blank"
                    rel="noopener noreferrer" // Thêm noopener vào đây để sửa lỗi
                    className="inline-flex items-center gap-3 px-4 py-2.5 rounded-2xl bg-slate-50 text-brand-blue border border-slate-200 hover:border-brand-blue/30 hover:bg-white hover:shadow-lg hover:shadow-blue-50 transition-all duration-300 group"
                  >
                    <div className="bg-white p-1.5 rounded-lg shadow-sm group-hover:bg-brand-blue group-hover:text-white transition-colors">
                      <Globe size={16} />
                    </div>

                    <div className="flex flex-col items-start leading-none">
                      <span className="text-[12px] uppercase text-slate-500 font-medium mb-1">Trang chủ hệ thống</span>
                      <span className="font-bold text-sm">web.minhvietacademy.org</span>
                    </div>

                    <ChevronRight className="w-4 h-4 ml-1 group-hover:translate-x-1 transition-transform text-slate-400 group-hover:text-brand-blue" />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Program Section (Lộ trình học) */}
      <section id="chuong-trinh" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <span className="text-brand-blue font-bold tracking-wider uppercase text-sm mb-2 block">Lộ trình học tập toàn diện</span>
            <h2 className="text-3xl md:text-4xl font-extrabold text-slate-900">Chương trình đào tạo tiêu biểu</h2>
            <p className="mt-4 text-slate-500 max-w-2xl mx-auto">Thiết kế riêng biệt cho từng độ tuổi, giúp trẻ phát triển ngôn ngữ tự nhiên và tư duy logic.</p>
          </div>

          <div className="grid md:grid-cols-3 gap-6 max-w-7xl mx-auto">
            {/* Program Card 1 */}
            <div className="group bg-white rounded-3xl border border-slate-100 shadow-[0_8px_30px_rgb(0,0,0,0.04)] overflow-hidden hover:shadow-[0_8px_30px_rgb(0,0,0,0.08)] hover:-translate-y-1 transition-all duration-300 flex flex-col">
              <div className="h-48 overflow-hidden relative shrink-0">
                <div className="absolute top-4 left-4 bg-brand-orange text-white text-xs font-bold px-3 py-1 rounded-full z-10">Mầm non</div>
                <img src="https://images.unsplash.com/photo-1503676260728-1c00da094a0b?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" alt="MVK Program" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
              </div>
              <div className="p-6 md:p-8 flex flex-col flex-1">
                <h3 className="text-xl md:text-2xl font-bold text-slate-900 mb-2 group-hover:text-brand-orange transition-colors">Chương trình MVK <br /> (Pre-K)</h3>
                <p className="text-slate-500 mb-6 line-clamp-2 text-sm md:text-base">Làm quen với ngôn ngữ, thế giới xung quanh và môi trường học tập thông qua các hoạt động chơi – học, bài hát, câu chuyện và trải nghiệm hằng ngày.</p>

                <ul className="space-y-3 mb-8 mt-auto">
                  <li className="flex items-center gap-3 text-sm text-slate-700">
                    <CheckCircle2 className="w-5 h-5 text-brand-orange shrink-0" />
                    <span>Dành cho trẻ 3-4 tuổi</span>
                  </li>
                  <li className="flex items-center gap-3 text-sm text-slate-700">
                    <CheckCircle2 className="w-5 h-5 text-brand-orange shrink-0" />
                    <span>Bé cần có sự đồng hành của cha
                      hoặc mẹ khi tham gia lớp học</span>
                  </li>
                  <li className="flex items-center gap-3 text-sm text-slate-700">
                    <CheckCircle2 className="w-5 h-5 text-brand-orange shrink-0" />
                    <span>Phát triển ngôn ngữ và nhận thức
                      thông qua mở rộng vốn từ, làm
                      quen với chữ cái, số, màu sắc;
                      hình thành các kỹ năng sống cơ
                      bản như nhận biết cảm xúc...</span>
                  </li>
                </ul>

                <Button onClick={() => setSelectedProgram(PROGRAM_DATA['pre-k'])} variant="outline" fullWidth className="!rounded-xl border-slate-200 group-hover:border-brand-blue group-hover:text-brand-blue">
                  Xem chi tiết
                </Button>
              </div>
            </div>

            {/* Program Card 2 */}
            <div className="group bg-white rounded-3xl border border-slate-100 shadow-[0_8px_30px_rgb(0,0,0,0.04)] overflow-hidden hover:shadow-[0_8px_30px_rgb(0,0,0,0.08)] hover:-translate-y-1 transition-all duration-300 flex flex-col">
              <div className="h-48 overflow-hidden relative shrink-0">
                <div className="absolute top-4 left-4 bg-brand-blue text-white text-xs font-bold px-3 py-1 rounded-full z-10">Mẫu giáo</div>
                <img src="https://images.unsplash.com/photo-1588072432836-e10032774350?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" alt="MVA Program" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
              </div>
              <div className="p-6 md:p-8 flex flex-col flex-1">
                <h3 className="text-xl md:text-2xl font-bold text-slate-900 mb-2 group-hover:text-brand-blue transition-colors">Chương trình Mẫu giáo (Lớp K)</h3>
                <p className="text-slate-500 mb-6 line-clamp-2 text-sm md:text-base">Làm quen với toán học, ngôn ngữ và khoa học thông qua các chủ đề gần gũi.</p>

                <ul className="space-y-3 mb-8 mb-auto">
                  <li className="flex items-center gap-3 text-sm text-slate-700">
                    <CheckCircle2 className="w-5 h-5 text-brand-blue shrink-0" />
                    <span>Dành cho trẻ 5 tuổi</span>
                  </li>
                  <li className="flex items-center gap-3 text-sm text-slate-700">
                    <CheckCircle2 className="w-5 h-5 text-brand-blue shrink-0" />
                    <span>Bé có thể tự tham gia lớp học,
                      không cần trợ giúp của cha mẹ.</span>
                  </li>
                  <li className="flex items-center gap-3 text-sm text-slate-700">
                    <CheckCircle2 className="w-5 h-5 text-brand-blue shrink-0" />
                    <span>Nội dung thiết kế kết hợp học
                      thuật và kỹ năng xã hội.</span>
                  </li>
                </ul>

                <Button onClick={() => setSelectedProgram(PROGRAM_DATA['kindergarten'])} variant="outline" fullWidth className="!rounded-xl border-slate-200 group-hover:border-brand-blue group-hover:text-brand-blue">
                  Xem chi tiết
                </Button>
              </div>
            </div>

            {/* Program Card 3 (New) */}
            <div className="group bg-white rounded-3xl border border-slate-100 shadow-[0_8px_30px_rgb(0,0,0,0.04)] overflow-hidden hover:shadow-[0_8px_30px_rgb(0,0,0,0.08)] hover:-translate-y-1 transition-all duration-300 flex flex-col">
              <div className="h-48 overflow-hidden relative shrink-0">
                <div className="absolute top-4 left-4 bg-purple-600 text-white text-xs font-bold px-3 py-1 rounded-full z-10">Tiểu học</div>
                <img src="https://images.unsplash.com/photo-1571260899304-425eee4c7efc?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" alt="MVE Program" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
              </div>
              <div className="p-6 md:p-8 flex flex-col flex-1">
                <h3 className="text-xl md:text-2xl font-bold text-slate-900 mb-2 group-hover:text-purple-600 transition-colors">Chương trình tiểu học <br /> (Lớp 1)</h3>
                <p className="text-slate-500 mb-6 line-clamp-2 text-sm md:text-base">Mở rộng kiến thức về thế giới tự nhiên và xã hội, đồng thời phát triển kỹ năng đọc, viết và tư duy toán học nền tảng.</p>

                <ul className="space-y-3 mb-8 mb-auto">
                  <li className="flex items-center gap-3 text-sm text-slate-700">
                    <CheckCircle2 className="w-5 h-5 text-purple-600 shrink-0" />
                    <span>Dành cho trẻ 6 tuổi</span>
                  </li>
                  <li className="flex items-center gap-3 text-sm text-slate-700">
                    <CheckCircle2 className="w-5 h-5 text-purple-600 shrink-0" />
                    <span>Bé có thể tự tham gia lớp học,
                      không cần trợ giúp của cha mẹ</span>
                  </li>
                  <li className="flex items-center gap-3 text-sm text-slate-700">
                    <CheckCircle2 className="w-5 h-5 text-purple-600 shrink-0" />
                    <span>Xây dựng nền tảng học thuật
                      vững chắc ở Khoa học, Toán
                      và Ngôn ngữ; biết kết nối
                      kiến thức học tập với đời
                      sống hàng ngày. </span>
                  </li>
                </ul>

                <Button onClick={() => setSelectedProgram(PROGRAM_DATA['grade-1'])} variant="outline" fullWidth className="!rounded-xl border-slate-200 group-hover:border-brand-blue group-hover:text-brand-blue">
                  Xem chi tiết
                </Button>
              </div>
            </div>

          </div>
        </div>
      </section>


      {/* Why Choose Us - Grid Layout */}
      <section className="py-10 bg-slate-50/80">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-extrabold text-slate-900 mb-4">Hệ sinh thái học tập thông minh</h2>
            <p className="text-slate-500 max-w-2xl mx-auto">Sự kết hợp hoàn hảo giữa công nghệ và giáo dục con người.</p>
          </div>

          <div className="grid md:grid-cols-4 gap-6">
            <FeatureItem
              icon={<Globe className="w-6 h-6 text-white" />}
              color="bg-blue-500"
              title="Chuẩn Quốc Tế"
              desc="Giáo trình Common Core (Mỹ) được bản địa hóa."
            />
            <FeatureItem
              icon={<Zap className="w-6 h-6 text-white" />}
              color="bg-yellow-500"
              title="Công nghệ AI"
              desc="Chấm chữa phát âm và gợi ý bài tập cá nhân hóa."
            />
            <FeatureItem
              icon={<Users className="w-6 h-6 text-white" />}
              color="bg-green-500"
              title="Giáo viên 24/7"
              desc="Đội ngũ trợ giảng hỗ trợ giải đáp thắc mắc mọi lúc."
            />
            <FeatureItem
              icon={<Award className="w-6 h-6 text-white" />}
              color="bg-purple-500"
              title="Chứng chỉ"
              desc="Cấp chứng nhận hoàn thành khóa học có giá trị."
            />
          </div>
        </div>
      </section>

      {/* NEW SECTION: Policies & Schedule (Updated) */}
      <section className="py-20 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <span className="text-brand-blue font-bold tracking-wider uppercase text-sm mb-2 block">Thông tin quan trọng</span>
            <h2 className="text-3xl md:text-4xl font-extrabold text-slate-900">Chính sách & Lịch học</h2>
          </div>

          <div className="grid lg:grid-cols-2 gap-8 items-stretch">

            {/* Column 1: Free Trial & Payment Policy */}
            <div className="bg-gradient-to-br from-brand-blue to-blue-600 rounded-3xl p-8 md:p-12 text-white shadow-xl shadow-blue-200 relative overflow-hidden flex flex-col justify-center">
              {/* Decorative background elements */}
              <div className="absolute top-0 right-0 w-64 h-64 bg-white opacity-10 rounded-full blur-3xl transform translate-x-1/2 -translate-y-1/2"></div>

              <div className="relative z-10">
                <div className="bg-white/20 w-16 h-16 rounded-2xl flex items-center justify-center mb-8 backdrop-blur-sm border border-white/30">
                  <Gift className="w-8 h-8 text-white" />
                </div>

                <h3 className="text-3xl font-bold mb-4">Chính sách học thử miễn phí</h3>

                <div className="flex items-baseline gap-2 mb-6">
                  <span className="text-5xl md:text-6xl font-black py-2 px-1 text-transparent bg-clip-text bg-gradient-to-r from-yellow-200 to-yellow-400">
                    1 Tháng
                  </span>
                </div>

                <p className="text-blue-50 text-lg font-regular mb-8">
                  Học sinh được học thử miễn phí 1 tháng để trải nghiệm chương trình.
                </p>

                <div className="bg-white/10 p-6 rounded-2xl border border-white/20 backdrop-blur-md">
                  <p className="flex gap-3 text-blue-50">
                    <AlertCircle className="w-5 h-5 shrink-0 text-yellow-300 mt-1" />
                    <span>
                      Khi tiếp tục đăng ký học chính thức, học sinh sẽ <strong className="text-white">nộp trọn vẹn học phí cả năm</strong>.
                    </span>
                  </p>
                </div>
              </div>
            </div>

            {/* Column 2: Schedule & Tuition Link */}
            <div className="flex flex-col gap-6">

              {/* Schedule Card */}
              <div className="bg-white rounded-3xl p-8 border border-slate-100 shadow-sm flex-1 hover:shadow-md transition-shadow">
                <div className="flex items-center gap-3 mb-6">
                  <div className="bg-brand-orange/10 p-3 rounded-xl shrink-0">
                    <Clock className="w-6 h-6 text-brand-orange" />
                  </div>
                  <div>
                    <h4 className="text-xl font-bold text-slate-900">Giờ học dự kiến</h4>
                    <span className="text-xs text-slate-500 font-medium uppercase tracking-wider">Giờ Việt Nam (GMT+7)</span>
                  </div>
                </div>

                <div className="space-y-4">
                  <div className="flex items-center p-4 rounded-xl bg-slate-50 border border-slate-100 gap-4">
                    <div className="bg-white w-10 h-10 rounded-full flex items-center justify-center font-bold text-brand-blue shadow-sm border border-slate-100">1</div>
                    <span className="font-bold text-slate-700 text-lg">16:30 - 17:30</span>
                  </div>
                  <div className="flex items-center p-4 rounded-xl bg-slate-50 border border-slate-100 gap-4">
                    <div className="bg-white w-10 h-10 rounded-full flex items-center justify-center font-bold text-brand-blue shadow-sm border border-slate-100">2</div>
                    <span className="font-bold text-slate-700 text-lg">17:30 - 18:30</span>
                  </div>
                </div>
              </div>

              {/* Tuition Link Card */}
              <div className="bg-white rounded-3xl p-8 border border-slate-100 shadow-sm hover:shadow-md transition-shadow">
                <div className="flex items-start justify-between gap-4">
                  <div className="flex items-center gap-4">
                    <div className="bg-green-100 p-3 rounded-xl shrink-0">
                      <CreditCard className="w-6 h-6 text-green-600" />
                    </div>
                    <div>
                      <h4 className="text-lg font-bold text-slate-900">Bảng học phí tham khảo</h4>
                      <p className="text-sm text-slate-500">Xem chi tiết các gói học phí và ưu đãi</p>
                    </div>
                  </div>
                </div>
                <div className="mt-6">
                  <a
                    href="#"
                    className="inline-flex items-center justify-center w-full px-6 py-3 border border-transparent text-base font-medium rounded-xl text-green-700 bg-green-50 hover:bg-green-100 transition-colors"
                    onClick={(e) => { e.preventDefault(); alert("Link bảng học phí sẽ được cập nhật sau."); }}
                  >
                    Xem bảng học phí <ChevronRight className="w-4 h-4 ml-2" />
                  </a>
                </div>
              </div>

            </div>
          </div>
        </div>
      </section>


      {/* CTA Section */}
      <section className="py-20 bg-brand-blue relative overflow-hidden">
        <div className="absolute top-0 left-0 w-full h-full overflow-hidden opacity-10">
          <div className="absolute w-96 h-96 bg-white rounded-full -top-20 -left-20 blur-3xl"></div>
          <div className="absolute w-96 h-96 bg-white rounded-full bottom-0 right-0 blur-3xl"></div>
        </div>

        <div className="max-w-4xl mx-auto px-4 text-center relative z-10">
          <h2 className="text-3xl md:text-5xl font-extrabold text-white mb-6">Bắt đầu hành trình ngay hôm nay</h2>
          <p className="text-white text-lg md:text-xl mb-10 max-w-2xl mx-auto">
            Đăng ký ngay để được hưởng ưu đãi học thử miễn phí. Vui lòng liên hệ đến{' '}
            <a
              href="mailto:support@minhviet.org"
              className="bg-white/10 backdrop-blur-sm px-2 py-1 mr-2 rounded-lg text-white font-regular underline-offset-4 hover:bg-white/20 hover:text-orange-300 transition-all inline-block"
            >
              support@minhviet.org
            </a>
            để được hỗ trợ thêm.
          </p>
          <Button onClick={openRegistration} className=" text-brand-blue uppercase hover:bg-blue-50 !rounded-full text-lg px-10 py-4 shadow-xl font-bold">
            Đăng ký ngay
          </Button>
        </div>
      </section>

      {/* Footer - Simplified */}
      <footer className="bg-white border-t border-slate-200 pt-16 pb-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid md:grid-cols-3 gap-8 mb-12">
          <div className="col-span-1 md:col-span-1">
            {/* Logo */}
            <div className="flex items-center mb-4 gap-2 shrink-0 cursor-pointer" onClick={() => window.scrollTo(0, 0)}>
              <div className="bg-brand-blue w-10 h-10 rounded-xl flex items-center justify-center shadow-lg shadow-blue-200">
                <BookOpen className="text-white w-6 h-6" />
              </div>
              <div className="flex flex-col">
                <span className="font-extrabold text-xl text-brand-blue leading-none tracking-tight">MV <span className="text-brand-orange">Academy</span></span>
                <span className="text-xs text-slate-500 font-medium uppercase tracking-wider">East Asia</span>
              </div>
            </div>
            <p className="text-slate-500 text-sm leading-relaxed mb-6">
              Đơn vị tiên phong mang chương trình giáo dục phổ thông Hoa Kỳ đến học sinh Việt Nam.
            </p>
          </div>
          <div>
            <h4 className="font-bold text-slate-900 mb-6">Chương trình</h4>
            <ul className="space-y-4">
              {[
                { label: 'MVA', desc: 'Minh Viet Academy', url: 'https://minhvietacademy.org' },
                { label: 'MVK', desc: 'Minh Viet Kids', url: 'https://minhvietkids.org' },
                { label: 'MVL', desc: 'Minh Viet Learning', url: 'https://minhvietlearning.org' },
                { label: 'MVSM', desc: 'Minh Viet Learning', url: 'https://minhvietlearning.org' },
              ].map((item) => (
                <li key={item.label}>
                  <a
                    href={item.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group flex items-center gap-3 p-2 rounded-xl border border-slate-100 bg-slate-50/50 hover:bg-white hover:border-brand-blue hover:shadow-md transition-all duration-300"
                  >
                    {/* Badge viết tắt */}
                    <span className="flex-shrink-0 w-12 h-8 flex items-center justify-center rounded-lg bg-brand-blue/10 text-brand-blue font-bold text-xs group-hover:bg-brand-blue group-hover:text-white transition-colors">
                      {item.label}
                    </span>

                    {/* Thông tin link */}
                    <div className="flex flex-col min-w-0">
                      <span className="text-slate-700 font-semibold text-[13px] leading-none mb-1 group-hover:text-brand-blue transition-colors">
                        {item.desc}
                      </span>
                      <span className="text-[11px] text-slate-400 truncate">
                        {item.url.replace('https://', '')}
                      </span>
                    </div>
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="font-bold text-slate-900 mb-6">Hỗ trợ</h4>
            <ul className="space-y-4">
              <li>
                <a
                  href="mailto:support@minhviet.org"
                  className="group flex items-center gap-4 p-3 rounded-xl border border-slate-100 bg-slate-50/50 hover:bg-white hover:border-brand-blue hover:shadow-md transition-all duration-300"
                >
                  {/* Icon tròn màu xanh thương hiệu */}
                  <div className="flex-shrink-0 w-10 h-10 flex items-center justify-center rounded-full bg-blue-50 text-brand-blue group-hover:scale-110 transition-transform">
                    <Mail className="w-5 h-5" />
                  </div>

                  <div className="flex flex-col">
                    <span className="text-[11px] uppercase tracking-wider text-slate-400 font-bold leading-none mb-1">
                      Email hỗ trợ
                    </span>
                    <span className="text-slate-700 font-semibold text-sm group-hover:text-brand-blue transition-colors">
                      support@minhviet.org
                    </span>
                  </div>
                </a>
              </li>
            </ul>
          </div>
        </div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 border-t border-slate-100 pt-8 text-center text-slate-400 text-xs">
          © 2026 Minh Viet Academy. All rights reserved.
        </div>
      </footer>
    </div>
  );
};

const FeatureItem: React.FC<{ icon: React.ReactNode; color: string; title: string; desc: string }> = ({ icon, color, title, desc }) => (
  <div className="bg-white p-6 rounded-2xl border border-slate-100 shadow-sm hover:shadow-lg transition-all duration-300 group">
    <div className={`${color} w-12 h-12 rounded-xl flex items-center justify-center mb-4 shadow-md group-hover:scale-110 transition-transform`}>
      {icon}
    </div>
    <h3 className="font-bold text-lg text-slate-900 mb-2">{title}</h3>
    <p className="text-slate-500 text-sm leading-relaxed">{desc}</p>
  </div>
);

export default App;