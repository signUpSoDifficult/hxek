//这个JavaScript文件是干啥的？
//写的就是gulp应该完成的功能代码

const gulp = require("gulp");//引入gulp文件，相当于<script src="gulp.js"></script>
const concat = require("gulp-concat");
const uglify = require("gulp-uglify");
const rename = require("gulp-rename");

//写复制文件的任务

gulp.task("copy-html",async ()=>{
	gulp.src("*.html").pipe(gulp.dest("D:\\phpStudy\\WWW\\hxekshopping"));
});

gulp.task("copy-css",async ()=>{
	gulp.src("css/*.css").pipe(gulp.dest("D:\\phpStudy\\WWW\\hxekshopping\\css"));
});

gulp.task("copy-php",async ()=>{
	gulp.src("php/*.php").pipe(gulp.dest("D:\\phpStudy\\WWW\\hxekshopping\\php"));
});

gulp.task("copy-js",async ()=>{
	gulp.src("js/*.js").pipe(gulp.dest("D:\\phpStudy\\WWW\\hxekshopping\\js"));
});

gulp.task("copy-img",async ()=>{
	gulp.src("img/*.{jpg,png}").pipe(gulp.dest("D:\\phpStudy\\WWW\\hxekshopping\\img"));
});

//合并文件
gulp.task("concat-js",async ()=>{
	gulp.src(["js/index.js","js/goodslist.js"])
	.pipe(concat("common.js"))
	.pipe(gulp.dest("D:\\phpStudy\\WWW\\hxekshopping\\js"));
});


//合并并且压缩文件
gulp.task("concat-uglify-js",async ()=>{
	gulp.src(["js/index.js","js/goodslist.js"])
	.pipe(concat("common.js"))
	.pipe(uglify())
	.pipe(gulp.dest("D:\\phpStudy\\WWW\\web1810\\demo\\js"));
});


//合并并且压缩文件，重命名
gulp.task("concat-uglify-rename-js",async ()=>{
	gulp.src(["js/index.js","js/goodslist.js"])
	.pipe(concat("common.js"))
	.pipe(gulp.dest("D:\\phpStudy\\WWW\\web1810\\demo\\js"))
	.pipe(uglify())
	.pipe(rename("common.min.js"))
	.pipe(gulp.dest("D:\\phpStudy\\WWW\\web1810\\demo\\js"));
});

//自动监听
gulp.task("watchall",async ()=>{
	gulp.watch("*.html",gulp.series("copy-html"));
	gulp.watch("css/*.css",gulp.series("copy-css"));
	gulp.watch("php/*.php",gulp.series("copy-php"));
	gulp.watch("js/*.js",gulp.series("copy-js"));
	gulp.watch("img/*.{jpg,png}",gulp.series("copy-img"));
});

