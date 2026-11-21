function AwardCard() {
  return (
    <div className="flex flex-col items-center p-2 border bg-white rounded-md shadow min-w-[160px]">
      <img src="/images/feefo-award.png" alt="Gold Trusted Service Award" className="w-20 h-20 mb-2" />
      <span className="text-[13px] leading-tight font-medium text-center">Gold Trusted Service Award<br />2025</span>
      <img src="/images/feefo-logo.png" alt="Feefo" className="h-4 mt-2" />
    </div>
  );
}

export default AwardCard;