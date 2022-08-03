var documenterSearchIndex = {"docs":
[{"location":"references/#References","page":"Refs","title":"References","text":"","category":"section"},{"location":"references/#Carnegie-Mellon-Software-Engineering-Institute","page":"Refs","title":"Carnegie-Mellon Software Engineering Institute","text":"","category":"section"},{"location":"references/","page":"Refs","title":"Refs","text":"Signed Integer Overflow\nUnsigned Integer Wrapping","category":"page"},{"location":"references/#Lectures","page":"Refs","title":"Lectures","text":"","category":"section"},{"location":"references/","page":"Refs","title":"Refs","text":"Secure Coding (Integer Security)\nInteger Arithmetic and Undefined Behavior","category":"page"},{"location":"references/#Software","page":"Refs","title":"Software","text":"","category":"section"},{"location":"references/","page":"Refs","title":"Refs","text":"SafeInt (C++)\nBoost SafeNumerics (C++)","category":"page"},{"location":"symbols/#Symbols-Used","page":"-","title":"Symbols Used","text":"","category":"section"},{"location":"symbols/","page":"-","title":"-","text":"⦃ _ ⦄ is a collection of distinct entities ordered by an intrinsic relationship and sharing an essential characteristic\n⦃ 𝗮, 𝗰, 𝗸 ⦄ is a collection of distinct letters ordered lexicographically and sharing being lowercased\n⋵ ⦃ _ ⦄ selects any one within the collection, purposefully or intentlessly\n𝗫 ⋵ ⦃ 𝗮, 𝗰, 𝗸 ⦄\n𝗫 recieves 𝗮 orelse 𝗰 orelse 𝗸, as all are selectable","category":"page"},{"location":"symbols/","page":"-","title":"-","text":"","category":"page"},{"location":"symbols/","page":"-","title":"-","text":"𝒯  is an unsafe type\n𝓉  𝓉₁  𝓉₂ are values of type 𝒯\n𝒯ᵇⁱᵗˢ is the bitwidth of 𝒯\nthe bitwidth of Int32 is 32\n𝒮 is a built-in signed integer type\n𝒮 ⋵ ⦃ Int8, Int16, Int32, Int64, Int128 ⦄\n𝓈  𝓈₁  𝓈₂ are values of type 𝒮\n𝒰 is a built-in unsigned integer type\n𝒰 ⋵ ⦃ UInt8, UInt16, UInt32, UInt64, UInt128 ⦄\n𝓊  𝓊₁  𝓊₂ are values of type 𝒰","category":"page"},{"location":"symbols/","page":"-","title":"-","text":"","category":"page"},{"location":"symbols/","page":"-","title":"-","text":"𝓣  is a safe type\n𝓽  𝓽₁  𝓽₂ are values of type 𝓣\n𝓣ᵇⁱᵗˢ is the bitwidth of 𝓣 \nthe bitwidth of SafeInt64 is 64\n𝓢 is a safe signed integer type\n𝓢 ⋵ ⦃ SafeInt8, SafeInt16, SafeInt32, SafeInt64, SafeInt128 ⦄\n𝓼  𝓼₁  𝓼₂ are values of type 𝓢 \n𝓤 is a safe unsigned integer type\n𝓤 ⋵ ⦃ SafeUInt8, SafeUInt16, SafeUInt32, SafeUInt64, SafeUInt128 ⦄\n𝓾  𝓾₁  𝓾₂ are values of type 𝓤","category":"page"},{"location":"symbols/","page":"-","title":"-","text":"","category":"page"},{"location":"supports/#Supported-Operations-and-Functions","page":"Supported Operations","title":"Supported Operations and Functions","text":"","category":"section"},{"location":"supports/","page":"Supported Operations","title":"Supported Operations","text":"signbit, sign, abs, abs2\ncount_ones, count_zeros\nleading_zeros, trailing_zeros, leading_ones, trailing_ones\nndigits0z\nisless, isequal, <=, <, ==, !=, >=, >\n>>>, >>, <<, +, -, *, \\, ^\ndiv, fld, fld1, cld, rem, mod, mod1\ndivrem, fldmod, fldmod1\nzero, one\ntypemin, typemax, widen","category":"page"},{"location":"supports/#Other-Conversions","page":"Supported Operations","title":"Other Conversions","text":"","category":"section"},{"location":"supports/","page":"Supported Operations","title":"Supported Operations","text":"Signed(x::SafeSigned) returns an signed integer of the same bitwidth as x     Unsigned(x::SafeUnsigned) returns an unsigned integer of the same bitwidth as x     Integer(x::SafeInteger) returns an Integer of the same bitwidth and either Signed or Unsigned as is x","category":"page"},{"location":"supports/","page":"Supported Operations","title":"Supported Operations","text":"SafeSigned(x::Signed) returns a safe signed integer of the same bitwidth as x     SafeUnsigned(x::Unsigned) returns a safe unsigned integer of the same bitwidth as x     SafeInteger(x::Integer) returns a safe Integer of the same bitwidth and either Signed or Unsigned as is x","category":"page"},{"location":"benchmarks/#Benchmarks","page":"Benchmarks","title":"Benchmarks","text":"","category":"section"},{"location":"benchmarks/","page":"Benchmarks","title":"Benchmarks","text":"Relative to the system Integer types, using the Safer Integer types has a time cost of 1.10x..1.25x..2.00x.","category":"page"},{"location":"howtouse/#How-To-Use","page":"How To Use","title":"How To Use","text":"","category":"section"},{"location":"howtouse/#Just-use-safe-integer-types-in-place-of-the-usual-integer-types.-The-rest-is-well-handled.","page":"How To Use","title":"Just use safe integer types in place of the usual integer types.  The rest is well handled.","text":"","category":"section"},{"location":"howtouse/","page":"How To Use","title":"How To Use","text":"","category":"page"},{"location":"howtouse/#To-Write-Code-With-Safe-Integers","page":"How To Use","title":"To Write Code With Safe Integers","text":"","category":"section"},{"location":"howtouse/","page":"How To Use","title":"How To Use","text":"Use these exported types in place of their built-in counterparts","category":"page"},{"location":"howtouse/","page":"How To Use","title":"How To Use","text":"SafeInt, SafeInt8, SafeInt16, SafeInt32, SafeInt64, SafeInt128\nSafeUInt, SafeUInt8 SafeUInt16, SafeUInt32, SafeUInt64, SafeUInt128","category":"page"},{"location":"howtouse/","page":"How To Use","title":"How To Use","text":"","category":"page"},{"location":"howtouse/#Almost-all-ops-with-a-SafeInteger-that-yield-an-Integer-will-return-a-SafeInteger","page":"How To Use","title":"Almost all ops with a SafeInteger that yield an Integer will return a SafeInteger","text":"","category":"section"},{"location":"howtouse/#one-shift-signature-and-one-power-signature-are-the-exceptions","page":"How To Use","title":"one shift signature and one power signature are the exceptions","text":"","category":"section"},{"location":"howtouse/","page":"How To Use","title":"How To Use","text":"These two cases are allowed to provide more flexible overflow testing with shifts and powers.","category":"page"},{"location":"howtouse/","page":"How To Use","title":"How To Use","text":"shifts (>>>, >>, <<) check for overflow then return the same type as that shifted\npowers (^) check for overflow then return the same type as that of the base powered","category":"page"},{"location":"howtouse/","page":"How To Use","title":"How To Use","text":"To check for overflow and propagate safety:","category":"page"},{"location":"howtouse/","page":"How To Use","title":"How To Use","text":"use a SafeInteger on the left hand side of a shift \nuse a SafeInteger as the base number that is raised to a power","category":"page"},{"location":"howtouse/","page":"How To Use","title":"How To Use","text":"To check for overflow only:","category":"page"},{"location":"howtouse/","page":"How To Use","title":"How To Use","text":"use a SafeInteger on the right hand side of a shift\nand an unsafe integer on the left hand side\nuse a SafeInteger as the power to which the base number is raised\nand an unsafe integer as the base number","category":"page"},{"location":"howtouse/#Test-code-for-integer-safety","page":"How To Use","title":"Test code for integer safety","text":"","category":"section"},{"location":"howtouse/#test-snippets","page":"How To Use","title":"test snippets","text":"","category":"section"},{"location":"howtouse/","page":"How To Use","title":"How To Use","text":"\njulia> @saferintegers begin\n         x = 64\n         y = Int16(16)\n         z = x + y + SafeInt128(x)\n         x, y, z\n         end\n(64, 16, 144)\n\njulia> typeof.(ans)\n(SafeInt64, SafeInt16, SafeInt128)","category":"page"},{"location":"howtouse/#test-source-file","page":"How To Use","title":"test source file","text":"","category":"section"},{"location":"howtouse/","page":"How To Use","title":"How To Use","text":"julia> cd(<source file directory>)\njulia> @saferintegers include(<filename.jl>)","category":"page"},{"location":"highlights/#Highlights","page":"Highlights","title":"Highlights","text":"","category":"section"},{"location":"highlights/#Why-Does-This-Package-Exist?","page":"Highlights","title":"Why Does This Package Exist?","text":"","category":"section"},{"location":"highlights/","page":"Highlights","title":"Highlights","text":"Your work may require that integer calculations be secure, well-behaved or unsurprising.\nYour clients may expect your package/app/product calculates with care and correctness.\nYour software may become part of a system on which the health or assets of others depends.\nYour prefer to publish research results that are free of error, and you work with integers.","category":"page"},{"location":"highlights/#What-Does-This-Package-Offer?","page":"Highlights","title":"What Does This Package Offer?","text":"","category":"section"},{"location":"highlights/","page":"Highlights","title":"Highlights","text":"SaferIntegers lets you work more cleanly and always alerts otherwise silent problems.\nThis package is designed for easy use and written to be performant in many sorts of use.\nUsing SaferIntegers can preclude some known ways that insecure systems are breached.\nSupports Rationals formed of SafeInteger types\nSupports testing of other source code for integer safety","category":"page"},{"location":"basicguide/#A-Basic-Guide","page":"Basic Guide","title":"A Basic Guide","text":"","category":"section"},{"location":"basicguide/","page":"Basic Guide","title":"Basic Guide","text":"To use safer integers within your computations, where you have been using     explict digit sequences put them inside the safe integer constructors,     SafeInt(11) or SafeUInt(0x015A) and similarly for the bitsize-named versions     SafeInt8, SafeInt16 .. SafeInt128 and SafeUInt8 .. SafeUInt128   ","category":"page"},{"location":"basicguide/","page":"Basic Guide","title":"Basic Guide","text":"Where you had usedInt or UInt now use SafeInt or SafeUInt and similarly with the bitsize-named versions.    ","category":"page"},{"location":"basicguide/","page":"Basic Guide","title":"Basic Guide","text":"SafeInt and SafeUInt give you these arithmetic operators:     +, -, *, div, rem, fld, mod, ^     which have become overflow and underflow aware.","category":"page"},{"location":"basicguide/","page":"Basic Guide","title":"Basic Guide","text":"The Int and UInt types can fail at simple arithmetic and will continue carrying the incorrectness forward.     So, the validity of values obtained is difficult to ascertain.","category":"page"},{"location":"basicguide/","page":"Basic Guide","title":"Basic Guide","text":"Most calculations proceed without incident,  and when used SafeInts operate as Ints should a calculation encouter an overflow or underflow,      we are alerted and the calculation does not proceed.","category":"page"},{"location":"basicguide/#Give-them-a-whirl.","page":"Basic Guide","title":"Give them a whirl.","text":"","category":"section"},{"location":"basicguide/","page":"Basic Guide","title":"Basic Guide","text":"Get the package: Pkg.add(\"SaferIntegers\")      Use the package:  using SaferIntegers     ","category":"page"},{"location":"basicguide/","page":"Basic Guide","title":"Basic Guide","text":"These functions check for overflow/underflow automatically:    \nabs, (neg), (-), (+), (*), (^), div, fld, cld, rem (%), mod, divrem, fldmod\nso does (/), before converting to Float64","category":"page"},{"location":"basicguide/#Exported-Types-/-Constructors","page":"Basic Guide","title":"Exported Types / Constructors","text":"","category":"section"},{"location":"basicguide/","page":"Basic Guide","title":"Basic Guide","text":"SafeInt8, SafeInt16, SafeInt32, SafeInt64, SafeInt128    \nSafeUInt8, SafeUInt16, SafeUInt32, SafeUInt64, SafeUInt128   \nSafeSigned, SafeUnsigned, SafeInteger","category":"page"},{"location":"basicguide/","page":"Basic Guide","title":"Basic Guide","text":"They check for overflow, even when multiplied by the usual Int and UInt types.","category":"page"},{"location":"basicguide/","page":"Basic Guide","title":"Basic Guide","text":"They do not auto-widen and are type stable. Otherwise, they are as system integers.","category":"page"},{"location":"safeshifts/#Safe-Shifts","page":"Safe Shifts","title":"Safe Shifts","text":"","category":"section"},{"location":"safeshifts/","page":"Safe Shifts","title":"Safe Shifts","text":"It is safe to shift (<<, >>) a value of type T where `β = sizeof(T) * 8 (with  SafeUnsigned value","category":"page"},{"location":"safeshifts/","page":"Safe Shifts","title":"Safe Shifts","text":"by 0 bits, in which case the result is the value unchanged\nby bitsof(T) bits, in which case the result is zero(T)\nby -bitsof(T) bits, in which case the result is zero(T)\nby ⦃1, .., bitsof(T)-1⦄\nthe result is strictly less than any nonzero value given\nthe result, given a zero value remains zero\nby ⦃-1, .., -(bitsof(T)-1)⦄\nthe result is strictly greater than any nonzero value given\nthe result, given a zero value remains zero","category":"page"},{"location":"safeshifts/","page":"Safe Shifts","title":"Safe Shifts","text":"of type T by 0 bits (unchanged) or by ±β bits where β ∈ ⦃0, 1, .., bitsof(T)⦄.","category":"page"},{"location":"safeshifts/","page":"Safe Shifts","title":"Safe Shifts","text":"An OverflowError occurs when there is an attempt to shift a value of safe type T by a magnitude greater than ±bitsof(T).","category":"page"},{"location":"#SaferIntegers","page":"Overview","title":"SaferIntegers","text":"","category":"section"},{"location":"#These-integer-types-do-not-ignore-arithmetic-overflows-and-underflows.","page":"Overview","title":"These integer types do not ignore arithmetic overflows and underflows.","text":"","category":"section"},{"location":"","page":"Overview","title":"Overview","text":"","category":"page"},{"location":"","page":"Overview","title":"Overview","text":"Copyright ©2018-2019 by Jeffrey Sarnoff. This work is made available under The MIT License.","category":"page"},{"location":"","page":"Overview","title":"Overview","text":"","category":"page"},{"location":"#A-Safer-Way","page":"Overview","title":"A Safer Way","text":"","category":"section"},{"location":"","page":"Overview","title":"Overview","text":"Using the default Int or UInt types allows overflow and underflow errors to occur silently, without notice. These incorrect values propagate and such errors are difficult to recognize after the fact.","category":"page"},{"location":"","page":"Overview","title":"Overview","text":"This package exports safer versions. These types check for overflow and underflow in each of the basic arithmetic functions. The processing will stop with a message in the event of overflow or underflow.  On one machine, the overhead relative to the built-in integer types is <= 1.2x.","category":"page"},{"location":"#Background","page":"Overview","title":"Background","text":"","category":"section"},{"location":"","page":"Overview","title":"Overview","text":"Integer overflow occurs when an integer type is increased beyond its maximum value. Integer underflow occurs when an integer type is decreased below its minimum value.  Signed and Unsigned values are subject to overflow and underflow.  With Julia, you can see the rollover using Int or UInt types:","category":"page"},{"location":"","page":"Overview","title":"Overview","text":"typemax(Int) + one(Int) < 0\ntypemin(Int) - one(Int) > 0\ntypemax(UInt) + one(UInt) == typemin(UInt)\ntypemin(UInt) - one(UInt) == typemax(UInt)","category":"page"},{"location":"","page":"Overview","title":"Overview","text":"There are security implications for integer overflow in certain situations.","category":"page"},{"location":"","page":"Overview","title":"Overview","text":"a = Int16(456) * Int16(567)\n# a == -3592\n\nfor i in 1:a\n    secure(biohazard[i])\nend","category":"page"},{"location":"","page":"Overview","title":"Overview","text":"With a < 0, the for loop does not execute.","category":"page"},{"location":"rationals/#SaferRationals","page":"Safer Rationals","title":"SaferRationals","text":"","category":"section"},{"location":"rationals/#Construction","page":"Safer Rationals","title":"Construction","text":"","category":"section"},{"location":"rationals/","page":"Safer Rationals","title":"Safer Rationals","text":"SafeRational(2, 5) == SafeInt(2) // SafeInt(5)\n\nSafeRational(SafeUInt16(2), SafeUInt16(5)) == SafeUInt16(2) // SafeUInt16(5)\n\nSafeRational(Int16(2), Int32(5)) == SafeInt32(2) // SafeInt32(5)","category":"page"},{"location":"rationals/#Use","page":"Safer Rationals","title":"Use","text":"","category":"section"},{"location":"rationals/","page":"Safer Rationals","title":"Safer Rationals","text":"Use just as you would use Julia's Rationals.  These will check for overflow, though.","category":"page"},{"location":"assets/README/#Assets-used-to-document-SaferIntegers.jl","page":"-","title":"Assets used to document SaferIntegers.jl","text":"","category":"section"}]
}
