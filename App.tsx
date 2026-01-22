import React, { useState, useEffect } from 'react';
import { RegistrationForm } from './components/RegistrationForm';
import { Modal } from './components/Modal';
import { Button } from './components/Button';


import {
  BookOpen, Globe, Award, Star, Phone, MapPin,
  Facebook, Instagram, Mail, ChevronRight, ChevronLeft, PlayCircle,
  CheckCircle2, Users, Trophy, Zap, Search,
  User2Icon,
  User,
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
  const [currentHeroImage, setCurrentHeroImage] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentHeroImage((prev) => (prev + 1) % HERO_IMAGES.length);
    }, 4000); // Change image every 4 seconds

    return () => clearInterval(timer);
  }, []);

  const openRegistration = () => {
    setIsRegistrationOpen(true);
  };

  return (
    <div className="min-h-screen font-sans text-slate-800 bg-white">
      <Modal isOpen={isRegistrationOpen} onClose={() => setIsRegistrationOpen(false)}>
        <RegistrationForm onClose={() => setIsRegistrationOpen(false)} />
      </Modal>

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
              </div>
            </div>

            {/* Search Bar (Visual Only) */}
            {/* <div className="hidden lg:flex items-center flex-1 max-w-md bg-slate-50 border border-slate-200 rounded-full px-4 py-2.5 text-slate-400 focus-within:border-brand-blue focus-within:ring-2 focus-within:ring-blue-100 transition-all">
              <Search className="w-4 h-4 mr-2" />
              <input type="text" placeholder="Tìm kiếm khóa học..." className="bg-transparent border-none outline-none text-sm w-full text-slate-700 placeholder:text-slate-400" />
            </div> */}

            {/* Desktop Menu */}
            <div className="hidden md:flex items-center space-x-6 font-semibold text-sm text-slate-600">
              <a href="#chuong-trinh" className="hover:text-brand-blue transition-colors">Khoá học</a>
              <div className="w-px h-6 bg-slate-200 mx-2"></div>
              <a href="#blog" className="hover:text-brand-blue transition-colors">Blog</a>
              <div className="w-px h-6 bg-slate-200 mx-2"></div>
              <a href="#blog" className="hover:text-brand-blue transition-colors">Tin tức</a>
              <div className="w-px h-6 bg-slate-200 mx-2"></div>

              <Button
                variant="outline"
                onClick={openRegistration}
                className="!rounded-full px-4 py-1.5 text-sm border-2 border-blue-500 text-blue-500 bg-transparent hover:bg-blue-50 shadow-md shadow-blue-100 transform hover:-translate-y-0.5 transition-all font-medium flex items-center gap-1.5"
              >
                <Phone size={14} strokeWidth={2.5} />
                <span>Đăng ký tư vấn</span>
              </Button>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section - Centered Layout */}
      <header className="relative bg-gradient-to-b from-brand-lightBlue/50 to-white pt-16 pb-24 overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 flex flex-col items-center text-center">

          {/* Trusted Badge */}
          <div className="inline-flex items-center gap-2 bg-white border border-blue-100 px-4 py-2 rounded-full shadow-sm mb-8 animate-in fade-in slide-in-from-bottom-4 duration-700">
            <div className="flex -space-x-2">
              <div className="w-6 h-6 rounded-full bg-blue-400 border-2 border-white"></div>
              <div className="w-6 h-6 rounded-full bg-orange-400 border-2 border-white"></div>
              <div className="w-6 h-6 rounded-full bg-green-400 border-2 border-white"></div>
            </div>
            <span className="text-sm font-regular text-slate-600">Hơn 5,000+ học sinh đã đăng ký học</span>
          </div>

          {/* Main Heading */}
          <h1 className="text-3xl md:text-5xl lg:text-6xl font-extrabold leading-[1.2] text-slate-900 max-w-3xl mb-6 animate-in fade-in slide-in-from-bottom-8 duration-700 delay-100">
            Chương trình giáo dục<br />
            <span className="text-brand-blue relative inline-block">
              Chuẩn Hoa Kỳ
              <svg className="absolute w-full h-3 -bottom-1 left-0 text-yellow-300 opacity-60" viewBox="0 0 100 10" preserveAspectRatio="none"><path d="M0 5 Q 50 10 100 5" stroke="currentColor" strokeWidth="8" fill="none" /></svg>
            </span>
            {" "}dành cho học sinh <span className="text-brand-orange relative inline-block">Việt Nam</span>  trên toàn Thế giới
          </h1>

          {/* Subtext */}
          <p className="text-lg md:text-lg text-slate-600 max-w-2xl leading-relaxed mb-4 animate-in fade-in slide-in-from-bottom-8 duration-700 delay-200">
            Hệ thống bài giảng tương tác và phòng luyện thi ảo giúp trẻ từ 4-10 tuổi chinh phục kiến thức Tiếng Anh & Khoa học theo tiêu chuẩn Common Core (Hoa Kỳ).
          </p>
          <p className="text-lg md:text-lg text-brand-blue max-w-2xl leading-relaxed mb-10 animate-in fade-in slide-in-from-bottom-8 duration-700 delay-200">
            Dự kiến khai giảng: 22/06/2026
          </p>

          {/* Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 mb-16 animate-in fade-in slide-in-from-bottom-8 duration-700 delay-300">
            <Button onClick={openRegistration} variant="primary" className="!rounded-full text-lg px-8 py-4 shadow-xl shadow-orange-200">
              Đăng ký học thử miễn phí!
            </Button>
          </div>

          {/* Feature Checkmarks */}
          <div className="flex flex-wrap justify-center gap-6 md:gap-12 text-sm font-medium text-slate-500 mb-16 animate-in fade-in duration-1000 delay-500">
            <span className="flex items-center gap-2 bg-white/60 px-3 py-1 rounded-full border border-slate-100"><CheckCircle2 className="w-4 h-4 text-green-500" /> Cam kết chất lượng khoá học</span>
            <span className="flex items-center gap-2 bg-white/60 px-3 py-1 rounded-full border border-slate-100"><CheckCircle2 className="w-4 h-4 text-green-500" /> Học mọi lúc mọi nơi</span>
            <span className="flex items-center gap-2 bg-white/60 px-3 py-1 rounded-full border border-slate-100"><CheckCircle2 className="w-4 h-4 text-green-500" /> Công nghệ AI hỗ trợ</span>
          </div>

          {/* Hero Image / Graphic - Slideshow */}
          <div className="relative w-full max-w-5xl mx-auto animate-in zoom-in duration-700 delay-500 group mt-10">
            <div className="absolute inset-0 bg-brand-blue/5 rounded-[2.5rem] blur-3xl transform scale-95 translate-y-8"></div>

            <div className="relative z-10 w-full aspect-[16/9] md:aspect-[2/1] rounded-[2rem] shadow-2xl border-[6px] border-white overflow-hidden bg-slate-100">
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

            {/* Floating Badges - Absolute position relative to the image container */}
            <div className="absolute -top-6 -left-4 md:top-10 md:-left-12 bg-white p-4 rounded-xl shadow-xl flex items-center gap-3 animate-bounce-slow z-20 max-w-[200px] text-left">
              <div className="bg-orange-100 p-2 rounded-lg text-brand-orange"><Trophy className="w-6 h-6" /></div>
              <div>
                <div className="font-bold text-slate-800 text-sm">Top 1 EdTech</div>
                <div className="text-xs text-slate-500">Award 2024</div>
              </div>
            </div>

            <div className="absolute -bottom-6 -right-4 md:bottom-10 md:-right-12 bg-white p-4 rounded-xl shadow-xl flex items-center gap-3 animate-bounce-slow delay-700 z-20 max-w-[200px] text-left">
              <div className="bg-green-100 p-2 rounded-lg text-green-600"><Users className="w-6 h-6" /></div>
              <div>
                <div className="font-bold text-slate-800 text-sm">50+ Giáo viên</div>
                <div className="text-xs text-slate-500">Chất lượng cao</div>
              </div>
            </div>
          </div>

        </div>
      </header>

      {/* Program Section (Lộ trình học) */}
      <section id="chuong-trinh" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <span className="text-brand-blue font-bold tracking-wider uppercase text-sm mb-2 block">Lộ trình học tập toàn diện</span>
            <h2 className="text-3xl md:text-4xl font-extrabold text-slate-900">Chương trình đào tạo tiêu biểu</h2>
            <p className="mt-4 text-slate-500 max-w-2xl mx-auto">Thiết kế riêng biệt cho từng độ tuổi, giúp trẻ phát triển ngôn ngữ tự nhiên và tư duy logic.</p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            {/* Program Card 1 */}
            <div className="group bg-white rounded-3xl border border-slate-100 shadow-[0_8px_30px_rgb(0,0,0,0.04)] overflow-hidden hover:shadow-[0_8px_30px_rgb(0,0,0,0.08)] hover:-translate-y-1 transition-all duration-300">
              <div className="h-48 overflow-hidden relative">
                <div className="absolute top-4 left-4 bg-brand-orange text-white text-xs font-bold px-3 py-1 rounded-full z-10">Mầm non</div>
                <img src="https://images.unsplash.com/photo-1503676260728-1c00da094a0b?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" alt="MVK Program" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
              </div>
              <div className="p-8">
                <div className="flex items-center gap-2 mb-3">
                  <UserCheck2 className="w-5 h-5 text-brand-orange" />
                  <span className="text-sm font-semibold text-slate-500">1,000+ học sinh đã đăng ký</span>
                </div>
                <h3 className="text-2xl font-bold text-slate-900 mb-2 group-hover:text-brand-orange transition-colors">Chương trình MVK (Pre-K)</h3>
                <p className="text-slate-500 mb-6 line-clamp-2">Làm quen với tiếng Anh qua các hoạt động STEAM, phát triển kỹ năng xã hội và cảm xúc.</p>

                <ul className="space-y-3 mb-8">
                  <li className="flex items-center gap-3 text-sm text-slate-700">
                    <CheckCircle2 className="w-5 h-5 text-brand-orange shrink-0" />
                    <span>Dành cho trẻ 3-5 tuổi</span>
                  </li>
                  <li className="flex items-center gap-3 text-sm text-slate-700">
                    <CheckCircle2 className="w-5 h-5 text-brand-orange shrink-0" />
                    <span>Học qua trò chơi & bài hát</span>
                  </li>
                </ul>

                <Button onClick={openRegistration} variant="outline" fullWidth className="!rounded-xl border-slate-200 group-hover:border-brand-blue group-hover:text-brand-blue">
                  Đăng ký học thử miễn phí
                </Button>
              </div>
            </div>

            {/* Program Card 2 */}
            <div className="group bg-white rounded-3xl border border-slate-100 shadow-[0_8px_30px_rgb(0,0,0,0.04)] overflow-hidden hover:shadow-[0_8px_30px_rgb(0,0,0,0.08)] hover:-translate-y-1 transition-all duration-300">
              <div className="h-48 overflow-hidden relative">
                <div className="absolute top-4 left-4 bg-brand-blue text-white text-xs font-bold px-3 py-1 rounded-full z-10">Tiểu học</div>
                <img src="https://images.unsplash.com/photo-1588072432836-e10032774350?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" alt="MVA Program" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
              </div>
              <div className="p-8">
                <div className="flex items-center gap-2 mb-3">
                  <UserCheck2 className="w-5 h-5 text-brand-orange" />
                  <span className="text-sm font-semibold text-slate-500">1,000+ học sinh đã đăng ký</span>
                </div>
                <h3 className="text-2xl font-bold text-slate-900 mb-2 group-hover:text-brand-blue transition-colors">Chương trình MVA (K - Grade 1)</h3>
                <p className="text-slate-500 mb-6 line-clamp-2">Chinh phục kiến thức Toán & Khoa học bằng tiếng Anh, xây dựng nền tảng học thuật vững chắc.</p>

                <ul className="space-y-3 mb-8">
                  <li className="flex items-center gap-3 text-sm text-slate-700">
                    <CheckCircle2 className="w-5 h-5 text-brand-blue shrink-0" />
                    <span>Dành cho trẻ 5-8 tuổi</span>
                  </li>
                  <li className="flex items-center gap-3 text-sm text-slate-700">
                    <CheckCircle2 className="w-5 h-5 text-brand-blue shrink-0" />
                    <span>Giáo trình chuẩn Common Core</span>
                  </li>
                </ul>

                <Button onClick={openRegistration} variant="outline" fullWidth className="!rounded-xl border-slate-200 group-hover:border-brand-blue group-hover:text-brand-blue">
                  Đăng ký học thử miễn phí
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

      {/* Teachers Section */}
      <section id="giao-vien" className="py-20 bg-white overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row justify-between items-end mb-12 gap-4">
            <div>
              <span className="text-brand-orange font-bold tracking-wider uppercase text-sm mb-2 block">Đội ngũ chuyên gia</span>
              <h2 className="text-3xl md:text-4xl font-extrabold text-slate-900">Giáo viên bản ngữ & Việt Nam</h2>
            </div>
            {/* <Button variant="ghost" className="hidden md:flex group text-brand-blue hover:bg-blue-50">
              Xem tất cả giáo viên <ChevronRight className="ml-1 w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </Button> */}
          </div>

          <div className="grid md:grid-cols-4 gap-6">
            {[1, 2, 3, 4].map((i) => (
              <div key={i} className="bg-white p-4 rounded-2xl border border-slate-100 shadow-sm hover:shadow-md transition-shadow">
                <div className="aspect-[4/3] rounded-xl overflow-hidden mb-4">
                  <img src={`https://i.pravatar.cc/400?img=${i + 10}`} alt="Teacher" className="w-full h-full object-cover hover:scale-110 transition-transform duration-500" />
                </div>
                <h4 className="font-bold text-lg text-slate-900">Ms. Sarah Johnson</h4>
                <p className="text-brand-blue text-sm font-medium mb-2">Thạc sĩ Giáo dục (M.Ed)</p>
                <div className="flex gap-1">
                  <Star className="w-3 h-3 text-yellow-400 fill-current" />
                  <Star className="w-3 h-3 text-yellow-400 fill-current" />
                  <Star className="w-3 h-3 text-yellow-400 fill-current" />
                  <Star className="w-3 h-3 text-yellow-400 fill-current" />
                  <Star className="w-3 h-3 text-yellow-400 fill-current" />
                </div>
              </div>
            ))}
          </div>

          <div className="mt-8 text-center md:hidden">
            <Button variant="ghost" className="text-brand-blue">Xem tất cả</Button>
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
          <p className="text-blue-100 text-lg md:text-xl mb-10 max-w-2xl mx-auto">Đăng ký để nhận tư vấn lộ trình học tập miễn phí và ưu đãi học phí lên đến 30%.</p>
          <Button onClick={openRegistration} className=" text-brand-blue hover:bg-blue-50 !rounded-full text-lg px-10 py-4 shadow-xl font-bold">
            Đăng ký tư vấn ngay
          </Button>
        </div>
      </section>

      {/* Footer - Simplified */}
      <footer className="bg-white border-t border-slate-200 pt-16 pb-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid md:grid-cols-4 gap-8 mb-12">
          <div className="col-span-1 md:col-span-1">
            <div className="flex items-center gap-2 mb-6">
              <div className="bg-brand-blue w-8 h-8 rounded-lg flex items-center justify-center">
                <BookOpen className="text-white w-4 h-4" />
              </div>
              <span className="font-bold text-xl text-brand-blue">MV Academy</span>
            </div>
            <p className="text-slate-500 text-sm leading-relaxed mb-6">
              Đơn vị tiên phong mang chương trình giáo dục phổ thông Hoa Kỳ đến học sinh Việt Nam.
            </p>
            <div className="flex space-x-3">
              <div className="w-8 h-8 bg-slate-100 rounded-full flex items-center justify-center text-slate-600 hover:bg-brand-blue hover:text-white transition-colors cursor-pointer"><Facebook className="w-4 h-4" /></div>
              <div className="w-8 h-8 bg-slate-100 rounded-full flex items-center justify-center text-slate-600 hover:bg-brand-blue hover:text-white transition-colors cursor-pointer"><Instagram className="w-4 h-4" /></div>
              <div className="w-8 h-8 bg-slate-100 rounded-full flex items-center justify-center text-slate-600 hover:bg-brand-blue hover:text-white transition-colors cursor-pointer"><Globe className="w-4 h-4" /></div>
            </div>
          </div>

          <div>
            <h4 className="font-bold text-slate-900 mb-6">Về chúng tôi</h4>
            <ul className="space-y-3 text-sm text-slate-600">
              <li><a href="#" className="hover:text-brand-blue transition-colors">Giới thiệu chung</a></li>
              <li><a href="#" className="hover:text-brand-blue transition-colors">Đội ngũ giáo viên</a></li>
              <li><a href="#" className="hover:text-brand-blue transition-colors">Tuyển dụng</a></li>
              <li><a href="#" className="hover:text-brand-blue transition-colors">Liên hệ</a></li>
            </ul>
          </div>

          <div>
            <h4 className="font-bold text-slate-900 mb-6">Chương trình</h4>
            <ul className="space-y-3 text-sm text-slate-600">
              <li><a href="#" className="hover:text-brand-blue transition-colors">Tiếng Anh Mầm Non</a></li>
              <li><a href="#" className="hover:text-brand-blue transition-colors">Tiếng Anh Tiểu Học</a></li>
              <li><a href="#" className="hover:text-brand-blue transition-colors">Luyện thi Cambridge</a></li>
              <li><a href="#" className="hover:text-brand-blue transition-colors">Toán & Khoa học</a></li>
            </ul>
          </div>

          <div>
            <h4 className="font-bold text-slate-900 mb-6">Hỗ trợ</h4>
            <ul className="space-y-3 text-sm text-slate-600">
              <li className="flex items-center gap-2"><Phone className="w-4 h-4" /> 1900.XXXX</li>
              <li className="flex items-center gap-2"><Mail className="w-4 h-4" /> admin@mv.edu.vn</li>
              <li className="flex items-start gap-2"><MapPin className="w-4 h-4 mt-1 shrink-0" /> 123 Hà Nội</li>
            </ul>
          </div>
        </div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 border-t border-slate-100 pt-8 text-center text-slate-400 text-xs">
          © 2024 US-VN Academy. All rights reserved. Privacy Policy | Terms of Service
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