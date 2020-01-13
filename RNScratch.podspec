require "json"

package = JSON.parse(File.read(File.join(__dir__, "package.json")))

Pod::Spec.new do |s|
  s.name         = "RNScratch"
  s.version      = package["version"]
  s.summary      = package["description"]
  s.description  = <<-DESC
                  RNScratch
                   DESC
  s.homepage     = "https://github.com/grofers/react-native-scratch"
  s.license      = "MIT"
  s.authors      = "grofers"
  s.platforms    = { :ios => "9.0", :tvos => "9.0" }
  s.source       = { :git => "https://github.com/grofers/react-native-scratch.git", :tag => "#{s.version}" }

  s.source_files = "ios/**/*.{h,m}"
  s.requires_arc = true

  s.dependency "React"
end
